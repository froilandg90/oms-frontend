import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ingestor',
    loadChildren: () =>
        import('./modules/ingestor/ingestor.module').then((m) => m.IngestorModule),
  },
  {
    path: 'logisticchain',
    loadChildren: () =>
        import('./modules/logostic-chain/logistic-chain.module').then((m) => m.LogisticChainModule),
  },
  {
    path: 'f35',
    loadChildren: () =>
        import('./modules/f35/f35.module').then((m) => m.F35Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
