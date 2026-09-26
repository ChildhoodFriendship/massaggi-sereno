import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({ selector: 'app-contact', standalone: true, imports: [FormsModule], templateUrl: './contact.component.html', styleUrl: './contact.component.css', changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactComponent {
  readonly sent = signal(false);
  submit(): void { this.sent.set(true); }
}
