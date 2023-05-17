import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogisticChainComponent } from "./logistic-chain.component";
import { LogisticChainAssignationRulesComponent } from "./assignation-rules/logistic-chain-assignation-rules.component";
import { LogisticChainFiltersComponent } from "./filters/logistic-chain-filters.component";
import { LogisticChainValidationRulesComponent } from "./validation-rules/logistic-chain-validation-rules.component";

const routes: Routes = [
  {
    path: '',
    component: LogisticChainComponent,
    children: [
      {
        path: 'rules',
        component: LogisticChainAssignationRulesComponent,
      },
      {
        path: 'validation',
        component: LogisticChainValidationRulesComponent,
      },
      {
        path: 'filters',
        component: LogisticChainFiltersComponent,
      },
      // {
      //   path: 'settings',
      //   component: SettingsComponent,
      // },
      { path: '', redirectTo: 'rules', pathMatch: 'full' },
      { path: '**', redirectTo: 'rules', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticChainRoutingModule { }
