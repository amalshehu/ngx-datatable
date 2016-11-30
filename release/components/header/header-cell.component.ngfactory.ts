/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/components/header/header-cell.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/security';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import11 from '../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '@angular/common/src/directives/ng_class';
import * as import18 from '../../../node_modules/@angular/common/src/directives/ng_template_outlet.ngfactory';
import * as import19 from '@angular/common/src/directives/ng_template_outlet';
export class Wrapper_DataTableHeaderCellComponent {
  /*private*/ _eventHandler:Function;
  context:import0.DataTableHeaderCellComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.DataTableHeaderCellComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_sortType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.sortType = currValue;
      this._expr_0 = currValue;
    }
  }
  check_column(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.column = currValue;
      this._expr_1 = currValue;
    }
  }
  check_sortAscendingIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.sortAscendingIcon = currValue;
      this._expr_2 = currValue;
    }
  }
  check_sortDescendingIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.sortDescendingIcon = currValue;
      this._expr_3 = currValue;
    }
  }
  check_headerHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.headerHeight = currValue;
      this._expr_4 = currValue;
    }
  }
  check_sorts(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.sorts = currValue;
      this._expr_5 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_6:any = this.context.headerHeight;
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      view.renderer.setElementStyle(el,'height',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_6) == null)? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_6).toString() + 'px')));
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.context.columnCssClasses;
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      view.renderer.setElementProperty(el,'className',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.context.name;
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      view.renderer.setElementAttribute(el,'title',((currVal_8 == null)? (null as any): currVal_8.toString()));
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.minWidth;
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      view.renderer.setElementStyle(el,'minWidth',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9) == null)? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9).toString() + 'px')));
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.context.maxWidth;
    if (import3.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      view.renderer.setElementStyle(el,'maxWidth',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_10) == null)? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_10).toString() + 'px')));
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this.context.width;
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      view.renderer.setElementStyle(el,'width',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_11) == null)? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_11).toString() + 'px')));
      this._expr_11 = currVal_11;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.sort.subscribe(_eventHandler.bind(view,'sort'))); }
  }
}
var renderType_DataTableHeaderCellComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_DataTableHeaderCellComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.DataTableHeaderCellComponent>;
  _DataTableHeaderCellComponent_0_3:Wrapper_DataTableHeaderCellComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableHeaderCellComponent_Host0,renderType_DataTableHeaderCellComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'datatable-header-cell',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_DataTableHeaderCellComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTableHeaderCellComponent_0_3 = new Wrapper_DataTableHeaderCellComponent();
    this.compView_0.create(this._DataTableHeaderCellComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._DataTableHeaderCellComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTableHeaderCellComponent) && (0 === requestNodeIndex))) { return this._DataTableHeaderCellComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._DataTableHeaderCellComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._DataTableHeaderCellComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTableHeaderCellComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DataTableHeaderCellComponentNgFactory:import8.ComponentFactory<import0.DataTableHeaderCellComponent> = new import8.ComponentFactory<import0.DataTableHeaderCellComponent>('datatable-header-cell',View_DataTableHeaderCellComponent_Host0,import0.DataTableHeaderCellComponent);
const styles_DataTableHeaderCellComponent:any[] = ([] as any[]);
var renderType_DataTableHeaderCellComponent:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,styles_DataTableHeaderCellComponent,{});
export class View_DataTableHeaderCellComponent0 extends import2.AppView<import0.DataTableHeaderCellComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import9.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import10.Wrapper_NgIf;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import9.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import10.Wrapper_NgIf;
  _text_6:any;
  _el_7:any;
  _NgClass_7_3:import11.Wrapper_NgClass;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableHeaderCellComponent0,renderType_DataTableHeaderCellComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import9.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import12.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import10.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_5 = new import9.ViewContainer(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import12.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import10.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_1,'span',new import3.InlineArray2(2,'class','sort-btn'),(null as any));
    this._NgClass_7_3 = new import11.Wrapper_NgClass(this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import14.KeyValueDiffers,this.parentIndex),new import15.ElementRef(this._el_7),this.renderer);
    this._text_8 = this.renderer.createText(this._el_7,'\n      ',(null as any));
    this._text_9 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import16.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    if (((token === import12.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import16.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import17.NgClass) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._NgClass_7_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:boolean = !this.context.column.headerTemplate;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    const currVal_5_0_0:any = this.context.column.headerTemplate;
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    const currVal_7_0_0:any = 'sort-btn';
    this._NgClass_7_3.check_klass(currVal_7_0_0,throwOnChange,false);
    const currVal_7_0_1:any = this.context.sortClasses(this.context.sortDir);
    this._NgClass_7_3.check_ngClass(currVal_7_0_1,throwOnChange,false);
    this._NgClass_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this._vc_5.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_DataTableHeaderCellComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    if ((nodeIndex == 5)) { return new View_DataTableHeaderCellComponent2(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    return (null as any);
  }
}
class View_DataTableHeaderCellComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTableHeaderCellComponent1,renderType_DataTableHeaderCellComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',new import3.InlineArray2(2,'class','datatable-header-cell-label draggable'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.parentView.context.name;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import4.SecurityContext.HTML,currVal_2));
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onSort()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_DataTableHeaderCellComponent2 extends import2.AppView<any> {
  _anchor_0:any;
  /*private*/ _vc_0:import9.ViewContainer;
  _TemplateRef_0_5:any;
  _NgTemplateOutlet_0_6:import18.Wrapper_NgTemplateOutlet;
  _el_1:any;
  _map_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTableHeaderCellComponent2,renderType_DataTableHeaderCellComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_5 = import3.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        column: p0,
        sortDir: p1
      }
      ;
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._anchor_0 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._vc_0 = new import9.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import12.TemplateRef_(this,0,this._anchor_0);
    this._NgTemplateOutlet_0_6 = new import18.Wrapper_NgTemplateOutlet(this._vc_0.vcRef);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._anchor_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import19.NgTemplateOutlet) && (0 === requestNodeIndex))) { return this._NgTemplateOutlet_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._map_5(this.parentView.context.column,this.parentView.context.sortDir);
    this._NgTemplateOutlet_0_6.check_ngOutletContext(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.column.headerTemplate;
    this._NgTemplateOutlet_0_6.check_ngTemplateOutlet(currVal_0_0_1,throwOnChange,false);
    this._NgTemplateOutlet_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 0)) { return new View_DataTableHeaderCellComponent3(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}
class View_DataTableHeaderCellComponent3 extends import2.AppView<any> {
  _text_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTableHeaderCellComponent3,renderType_DataTableHeaderCellComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._text_0 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.init(this._text_0,((<any>this.renderer).directRenderer? (null as any): [this._text_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._text_0,ctx);
  }
}