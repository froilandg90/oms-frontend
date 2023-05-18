import { NgModule } from '@angular/core';
import { RulesTreeDiagramComponent } from './rules-tree-diagram.component';
import { NodeComponent } from "./node";
import { CommonModule } from "@angular/common";
import { NodesListService } from "./services/nodes-list.service";



@NgModule({
  declarations: [
    RulesTreeDiagramComponent,
    NodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RulesTreeDiagramComponent,
    NodeComponent
  ],
  providers: [
    NodesListService
  ]
})
export class RulesTreeDiagramModule { }
