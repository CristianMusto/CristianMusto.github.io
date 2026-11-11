import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewPart } from '../../../shared/view-part';

/** Skill planet: skills with their level, and related work. */
@Component({
  selector: 'sky-service-detail',
  imports: [],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class ServiceDetail extends ViewPart {}
