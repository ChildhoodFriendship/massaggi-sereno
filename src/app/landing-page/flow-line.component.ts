import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';

@Component({
  selector: 'app-flow-line',
  standalone: true,
  templateUrl: './flow-line.component.html',
  styleUrl: './flow-line.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowLineComponent implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly host = inject(ElementRef<HTMLElement>);
  readonly progress = signal(0);
  private frame: number | null = null;
  private readonly onScroll = (): void => {
    if (this.frame !== null) return;
    this.frame = requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      this.progress.set(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
      this.frame = null;
    });
  };

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.onScroll();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) window.removeEventListener('scroll', this.onScroll);
    if (this.frame !== null) cancelAnimationFrame(this.frame);
  }
}
