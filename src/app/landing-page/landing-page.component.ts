import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { ContactComponent } from './contact.component';
import { FlowLineComponent } from './flow-line.component';
import { TreatmentsComponent } from './treatments.component';

@Component({ selector: 'app-landing-page', standalone: true, imports: [ContactComponent, FlowLineComponent, TreatmentsComponent], templateUrl: './landing-page.component.html', styleUrl: './landing-page.component.css', changeDetection: ChangeDetectionStrategy.OnPush })
export class LandingPageComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private context: { revert: () => void } | null = null;

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);
    this.context = gsap.context(() => {
      gsap.from('.hero__eyebrow, .hero h1, .hero__intro, .hero .button', {
        y: 42, opacity: 0, duration: 1, stagger: 0.11, ease: 'power3.out', delay: 0.15,
      });
      gsap.to('.hero__visual', { yPercent: 18, rotate: 5, ease: 'none', scrollTrigger: { trigger: '.hero', scrub: 1 } });
      gsap.to('.hero__word', { xPercent: -35, ease: 'none', scrollTrigger: { trigger: '.hero', scrub: 1 } });
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.from(element, { y: 55, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 82%' } });
      });
      gsap.utils.toArray<HTMLElement>('.horizontal-track').forEach((track) => {
        gsap.to(track, { xPercent: -20, ease: 'none', scrollTrigger: { trigger: track, start: 'top bottom', end: 'bottom top', scrub: 1.3 } });
      });
      gsap.utils.toArray<HTMLElement>('.image-reveal').forEach((image) => {
        gsap.from(image, { clipPath: 'inset(0 100% 0 0)', scale: 1.12, duration: 1.2, ease: 'power4.inOut', scrollTrigger: { trigger: image, start: 'top 75%' } });
      });
    });
  }

  ngOnDestroy(): void { this.context?.revert(); }
}
