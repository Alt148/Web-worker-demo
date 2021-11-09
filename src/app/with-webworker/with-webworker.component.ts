import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-webworker',
  templateUrl: './with-webworker.component.html',
  styleUrls: ['./with-webworker.component.scss']
})
export class WithWebworkerComponent implements OnInit {

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
      this.calculate(num);
    }
  }

  calculate(num: number) {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const start = new Date().getTime();
      const worker = new Worker('./demo.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        const stop = new Date().getTime();
        this.time = stop - start;
        this.fibResult = data;
      };

      worker.postMessage(num);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

  }

}
