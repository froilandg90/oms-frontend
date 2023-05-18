import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as util from 'zrender/lib/core/util';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-logistic-chain',
  templateUrl: './logistic-chain.component.html',
  styleUrls: ['./logistic-chain.component.scss'],

})
export class LogisticChainComponent implements OnInit {
  title = 'oms-front-end';

  constructor() {}

  ngOnInit(): void {
  }
}
