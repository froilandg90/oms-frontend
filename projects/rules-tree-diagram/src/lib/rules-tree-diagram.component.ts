import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TreeDiagramNodesList } from './classes';
import {NodesListService} from './services/nodes-list.service';

@Component({
  selector: 'rules-tree-diagram',
  styleUrls: ['./rules-tree-diagram.component.scss'],
  templateUrl: './rules-tree-diagram.component.html'
})
export class RulesTreeDiagramComponent {
  nodes: TreeDiagramNodesList = new TreeDiagramNodesList([], {});
  private config = {
    nodeWidth: 200,
    nodeHeight: 100
  };
  private paneDragging = false;
  private paneTransformState: any;
  private zoom = 1;
  private paneX = 0;
  private paneY = 0;

  public get paneTransform() {
    return this.paneTransformState;
  }

  public set paneTransform(value) {
    this.paneTransformState = value;
  }

  constructor(
      private nodesSrv: NodesListService,
      private sanitizer: DomSanitizer
  ) {}

  @Input() set data(data: { config: any; json: any[] }) {
    if (!data || !Array.isArray(data.json)) {
      return;
    }

    if (typeof data.config === 'object') {
      this.config = Object.assign(this.config, data.config);
    }

    this.nodes = this.nodesSrv.loadNodes(data.json, this.config);
  }

  public get nodeMaker() {
    return this.nodesSrv.makerNode();
  }

  public newNode() {
    this.nodesSrv.newNode();
  }

  public onmousedown() {
    this.paneDragging = true;
  }

  public onmousemove(event: any) {
    if (this.paneDragging) {
      const { movementX, movementY } = event;

      this.paneX += movementX;
      this.paneY += movementY;
      this.makeTransform();
    }
  }

  public onmouseup() {
    this.paneDragging = false;
  }

  public makeTransform() {
    this.paneTransform = this.sanitizer.bypassSecurityTrustStyle(
        `translate(${this.paneX}px, ${this.paneY}px) scale(${this.zoom})`
    );
  }

  public preventMouse(event: any) {
    event.stopPropagation();
  }

  public onmousewheel(event: any) {
    let delta;

    event.preventDefault();
    delta = event.detail || event.wheelDelta;
    this.zoom += delta / 1000 / 2;
    this.zoom = Math.min(Math.max(this.zoom, 0.2), 3);

    this.makeTransform();
  }
}
