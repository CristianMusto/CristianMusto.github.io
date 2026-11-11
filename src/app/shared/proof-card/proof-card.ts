import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { EngineView } from '../view-part';

/**
 * Link to another planet or project (related work): planet colour, "SYS-0x · planet" line and name.
 * `item` is an entry of the engine's page.related: { label, sub, bg, go }.
 */
@Component({
  selector: 'sky-proof-card',
  templateUrl: './proof-card.html',
  styleUrl: './proof-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class ProofCard {
  readonly item = input.required<EngineView>();

  protected go(ev: Event): void {
    const go = this.item()?.go;
    if (typeof go === 'function') go(ev);
  }
}
