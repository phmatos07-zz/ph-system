import { Validator } from 'class-validator';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'horizontal-timeline',
  templateUrl: './horizontal-timeline.component.html',
  styleUrls: ['./horizontal-timeline.component.scss']
})
export class HorizontalTimelineComponent implements OnInit {

  @Input()
  pointsInTime = Array<string>();

  @Input()
  position: string | number;

  quantityValues: number = this.pointsInTime.length;
  lastValue: number;

  constructor(private validator: Validator) { }

  ngOnInit(): void {
    this.quantityValues = this.pointsInTime.length;
    this.lastValue = this.pointsInTime.length - 1;
  }

  get positionIndex(): number {

    if (this.validator.arrayMinSize(this.pointsInTime, 2)) {

      if (this.validator.isString(this.position)) {
        return this.pointsInTime.indexOf(this.position.toString());
      }
      return this.position < this.quantityValues ? Number(this.position) : 0;

    } else {
      console.warn('Por favor, envie um Array que contenha mais de um valor.');
    }
  }

  trackByPointsInTime(index: number): number {
    return index;
  }
}
