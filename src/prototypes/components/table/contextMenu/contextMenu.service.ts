/* tslint:disable */
import { ContextMenuComponent } from './contextMenu.component';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

export interface IContextMenuClickEvent {
  actions?: any[];
  contextMenu?: ContextMenuComponent;
  event: MouseEvent;
  item: any;
}

@Injectable()
export class ContextMenuService {
  public show: Subject<IContextMenuClickEvent> = new Subject<IContextMenuClickEvent>();
}
/* tslint:enable */
