import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuService } from './contextMenu.service';
import { Directive, HostListener, Input } from '@angular/core';
/* tslint:disable */
@Directive({
  selector: '[contextMenu]',
})
export class ContextMenuAttachDirective {
  @Input() public contextMenuSubject: any;
  @Input() public contextMenu: ContextMenuComponent;

  constructor(private contextMenuService: ContextMenuService) { }

  @HostListener('click', ['$event'])
  public onContextMenu(event: MouseEvent): void {
    this.contextMenuService.show.next({
      contextMenu: this.contextMenu,
      event,
      item: this.contextMenuSubject,
    });
    event.preventDefault();
    event.stopPropagation();
  }
}
/* tslint:enable */
