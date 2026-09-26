import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type Treatment = { name: string; duration: string; price: string; description: string };

@Component({
  selector: 'app-treatments',
  standalone: true,
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreatmentsComponent {
  readonly treatments: readonly Treatment[] = [
    { name: 'Decontratturante', duration: '60 min', price: 'da definire', description: 'Un lavoro mirato per alleggerire tensioni e restituire libertà al corpo.' },
    { name: 'Svedese', duration: '60 min', price: 'da definire', description: 'Ritmo disteso, manualità fluide e una sensazione profonda di recupero.' },
    { name: 'Linfodrenaggio', duration: '50 min', price: 'da definire', description: 'Un trattamento delicato dedicato alla leggerezza e al benessere quotidiano.' },
    { name: 'Olistico', duration: '75 min', price: 'da definire', description: 'Un ascolto completo che integra corpo, respiro e presenza.' },
  ];
  readonly expanded = signal<number | null>(null);
  toggle(index: number): void { this.expanded.update(current => current === index ? null : index); }
}
