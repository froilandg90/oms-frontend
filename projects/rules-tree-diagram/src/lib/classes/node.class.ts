import { TreeDiagramNodesList } from './nodes-list.class';

export class TreeDiagramNode {
  public parentId: string | null = null;
  public guid: string = '';
  public width: number = 100;
  public height: number = 100;
  public isDragover: boolean = false;
  public isDragging: boolean = false;
  public children: Set<string> = new Set<string>();
  public displayName: string = 'AAA';
  private toggleState: boolean = false;

  public get isMaker() {
    return false;
  }

  constructor(
    props: any,
    config: any,
    public getThisNodeList: () => TreeDiagramNodesList
  ) {
    if (!props.guid) {
      return;
    }

    for (const prop in props) {
      if (props.hasOwnProperty(prop)) {
        (this as any)[prop] = props[prop];
      }
    }

    this.toggleState = false;

    if (config.nodeWidth) {
      this.width = config.nodeWidth;
    }

    if (config.nodeHeight) {
      this.height = config.nodeHeight;
    }

    this.children = new Set(props.children as string[]);
  }

  public get isExpanded() {
    return this.toggleState;
  }

  public destroy() {
    this.getThisNodeList().destroy(this.guid);
  }

  public hasChildren() {
    return !!this.children.size;
  }

  public toggle(state = !this.toggleState) {
    this.toggleState = state;

    if (state) {
      this.getThisNodeList().toggleSiblings(this.guid);
    }
  }

  public childrenCount() {
    return this.children.size;
  }

  public isRoot() {
    return this.parentId == null;
  }

  public dragenter(event: any) {
    event.dataTransfer.dropEffect = 'move';
  }

  public dragleave(event: any) {
    this.isDragover = false;
  }

  public dragstart(event: any) {
    event.dataTransfer.effectAllowed = 'move';
    this.isDragging = true;
    this.toggle(false);
    this.getThisNodeList().draggingNodeGuid = this.guid;
  }

  public dragover(event: any) {
    event.preventDefault();

    if (!this.isDragging) {
      this.isDragover = true;
    }

    event.dataTransfer.dropEffect = 'move';
    return false;
  }

  public dragend() {
    this.isDragover = false;
    this.isDragging = false;
  }

  public drop(event: any) {
    event.preventDefault();

    const guid = this.getThisNodeList().draggingNodeGuid;

    this.getThisNodeList().transfer(guid, this.guid);
    return false;
  }

  public addChild() {
    const newNodeGuid = this.getThisNodeList().newNode(this.guid);

    this.children.add(newNodeGuid);
    this.toggle(true);
  }
}
