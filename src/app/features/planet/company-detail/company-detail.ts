import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewPart } from '../../../shared/view-part';

/** Company planet (Projects): project cards, role facts and the company site. */
@Component({
  selector: 'sky-company-detail',
  imports: [],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class CompanyDetail extends ViewPart {}
