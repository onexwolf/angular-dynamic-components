import { Component, OnInit, AfterViewInit, OnDestroy, Type, ComponentRef, ViewChild, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { InsertionDirective } from './insertion.directive';
import { Subject } from 'rxjs';
import { DialogRef } from './dialog-ref';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {

  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();

  // 子组件
  componentRef: ComponentRef<any>;
  childComponentType: Type<any>;

  @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;

  constructor(public componentFactoryResolver: ComponentFactoryResolver, public cd: ChangeDetectorRef, private dialogRef: DialogRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  onOverlayClicked(evt: MouseEvent) {
    this.dialogRef.close();

    // 不返回结果的一种方式
    // this.close();
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  // 不返回结果的一种方式
  close() {
    this._onClose.next();
  }

}
