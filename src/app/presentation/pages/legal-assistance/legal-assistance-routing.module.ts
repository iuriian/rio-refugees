import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalAssistancePage } from './legal-assistance.page';

const routes: Routes = [
  {
    path: '',
    component: LegalAssistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalAssistancePageRoutingModule {}
