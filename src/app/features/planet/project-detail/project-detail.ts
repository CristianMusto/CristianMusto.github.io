import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewPart } from '../../../shared/view-part';

/** Project detail (opened from a company card): cover, what I did, result, details, link or NDA note. */
@Component({
  selector: 'sky-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class ProjectDetail extends ViewPart {}
