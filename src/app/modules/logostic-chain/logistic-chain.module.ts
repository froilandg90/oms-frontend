import { NgModule } from '@angular/core';

import { LogisticChainRoutingModule } from './logistic-chain-routing.module';
import { LogisticChainComponent } from './logistic-chain.component';
import { LogisticChainFiltersComponent } from "./filters/logistic-chain-filters.component";
import { LogisticChainValidationRulesComponent } from "./validation-rules/logistic-chain-validation-rules.component";
import { LogisticChainAssignationRulesComponent } from "./assignation-rules/logistic-chain-assignation-rules.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    LogisticChainComponent,
    LogisticChainFiltersComponent,
    LogisticChainValidationRulesComponent,
    LogisticChainAssignationRulesComponent
  ],
  imports: [
    CommonModule,
    LogisticChainRoutingModule
  ],
  providers: [
  ],
  bootstrap: [LogisticChainComponent],
})
export class LogisticChainModule { }
