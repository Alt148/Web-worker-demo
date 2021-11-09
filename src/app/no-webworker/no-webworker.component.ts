import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-webworker',
  templateUrl: './no-webworker.component.html',
  styleUrls: ['./no-webworker.component.scss']
})
export class NoWebworkerComponent implements OnInit {

  public fibResult: number;
  public value: string;
  public time: number;

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    this.fibResult = null;
    this.time = null;
    const num = parseInt(this.value, 10);
    if (!isNaN(num)) {
      const start = new Date().getTime();
      const result = this.calculate(num);
      const stop = new Date().getTime();
      this.time = stop - start;
      this.fibResult = result;
    }
  }

  private calculate(num) {
    // slowly calculates the fibonacci number
    let result = 0;
    if (num < 2) {
      result = num;
    } else {
      result = this.calculate(num - 1) + this.calculate(num - 2);
    }
    return result;

  }

}
