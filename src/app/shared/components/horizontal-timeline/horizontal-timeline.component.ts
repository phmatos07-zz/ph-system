import { Component, Input, OnInit } from '@angular/core';
import { Validator } from 'class-validator';

@Component({
  selector: 'app-horizontal-timeline',
  templateUrl: './horizontal-timeline.component.html',
  styleUrls: ['./horizontal-timeline.component.scss']
})
export class HorizontalTimelineComponent implements OnInit {

  @Input()
  pointsInTime = Array<string>();

  @Input()
  position: string | number = 0;

  quantityValues: number = this.pointsInTime.length;
  lastValue: number = 0;

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
    }

    console.warn('HorizontalTimelineComponent: Por favor, envie um Array que contenha mais de um valor.');
    return 0;
  }

  trackByPointsInTime(index: number): number {
    return index;
  }
}
