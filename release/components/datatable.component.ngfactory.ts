/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/components/datatable.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/query_list';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '../directives/visibility.directive.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '../../../src/components/body/body.component';
import * as import14 from './body/body.component.ngfactory';
import * as import15 from '@angular/core/src/zone/ng_zone';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/common/src/directives/ng_if';
import * as import18 from '../../../src/directives/visibility.directive';
import * as import19 from '../../../src/components/header/header.component';
import * as import20 from './header/header.component.ngfactory';
import * as import21 from '../../../src/components/footer/footer.component';
import * as import22 from './footer/footer.component.ngfactory';
export class Wrapper_DatatableComponent {
  /*private*/ _eventHandler:Function;
  context:import0.DatatableComponent;
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
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  /*private*/ _expr_28:any;
  /*private*/ _expr_29:any;
  /*private*/ _expr_30:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  subscription4:any;
  subscription5:any;
  subscription6:any;
  subscription7:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.DatatableComponent(p0,p1,p2);
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
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
    this._expr_16 = import1.UNINITIALIZED;
    this._expr_17 = import1.UNINITIALIZED;
    this._expr_18 = import1.UNINITIALIZED;
    this._expr_19 = import1.UNINITIALIZED;
    this._expr_20 = import1.UNINITIALIZED;
    this._expr_21 = import1.UNINITIALIZED;
    this._expr_22 = import1.UNINITIALIZED;
    this._expr_23 = import1.UNINITIALIZED;
    this._expr_24 = import1.UNINITIALIZED;
    this._expr_25 = import1.UNINITIALIZED;
    this._expr_26 = import1.UNINITIALIZED;
    this._expr_27 = import1.UNINITIALIZED;
    this._expr_28 = import1.UNINITIALIZED;
    this._expr_29 = import1.UNINITIALIZED;
    this._expr_30 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
    (this.subscription4 && this.subscription4.unsubscribe());
    (this.subscription5 && this.subscription5.unsubscribe());
    (this.subscription6 && this.subscription6.unsubscribe());
    (this.subscription7 && this.subscription7.unsubscribe());
  }
  check_rows(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.rows = currValue;
      this._expr_0 = currValue;
    }
  }
  check_columns(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.columns = currValue;
      this._expr_1 = currValue;
    }
  }
  check_selected(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.selected = currValue;
      this._expr_2 = currValue;
    }
  }
  check_scrollbarV(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.scrollbarV = currValue;
      this._expr_3 = currValue;
    }
  }
  check_scrollbarH(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.scrollbarH = currValue;
      this._expr_4 = currValue;
    }
  }
  check_rowHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.rowHeight = currValue;
      this._expr_5 = currValue;
    }
  }
  check_detailRowHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.detailRowHeight = currValue;
      this._expr_6 = currValue;
    }
  }
  check_columnMode(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.columnMode = currValue;
      this._expr_7 = currValue;
    }
  }
  check_headerHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.headerHeight = currValue;
      this._expr_8 = currValue;
    }
  }
  check_footerHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.footerHeight = currValue;
      this._expr_9 = currValue;
    }
  }
  check_externalPaging(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.externalPaging = currValue;
      this._expr_10 = currValue;
    }
  }
  check_externalSorting(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.externalSorting = currValue;
      this._expr_11 = currValue;
    }
  }
  check_limit(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.limit = currValue;
      this._expr_12 = currValue;
    }
  }
  check_count(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_13,currValue))) {
      this._changed = true;
      this.context.count = currValue;
      this._expr_13 = currValue;
    }
  }
  check_offset(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_14,currValue))) {
      this._changed = true;
      this.context.offset = currValue;
      this._expr_14 = currValue;
    }
  }
  check_loadingIndicator(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_15,currValue))) {
      this._changed = true;
      this.context.loadingIndicator = currValue;
      this._expr_15 = currValue;
    }
  }
  check_selectionType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_16,currValue))) {
      this._changed = true;
      this.context.selectionType = currValue;
      this._expr_16 = currValue;
    }
  }
  check_reorderable(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_17,currValue))) {
      this._changed = true;
      this.context.reorderable = currValue;
      this._expr_17 = currValue;
    }
  }
  check_sortType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_18,currValue))) {
      this._changed = true;
      this.context.sortType = currValue;
      this._expr_18 = currValue;
    }
  }
  check_sorts(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_19,currValue))) {
      this._changed = true;
      this.context.sorts = currValue;
      this._expr_19 = currValue;
    }
  }
  check_rowDetailTemplate(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_20,currValue))) {
      this._changed = true;
      this.context.rowDetailTemplate = currValue;
      this._expr_20 = currValue;
    }
  }
  check_cssClasses(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_21,currValue))) {
      this._changed = true;
      this.context.cssClasses = currValue;
      this._expr_21 = currValue;
    }
  }
  check_messages(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_22,currValue))) {
      this._changed = true;
      this.context.messages = currValue;
      this._expr_22 = currValue;
    }
  }
  check_rowIdentity(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_23,currValue))) {
      this._changed = true;
      this.context.rowIdentity = currValue;
      this._expr_23 = currValue;
    }
  }
  check_selectCheck(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_24,currValue))) {
      this._changed = true;
      this.context.selectCheck = currValue;
      this._expr_24 = currValue;
    }
  }
  check_trackByProp(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_25,currValue))) {
      this._changed = true;
      this.context.trackByProp = currValue;
      this._expr_25 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_26:any = this.context.isFixedHeader;
    if (import3.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      view.renderer.setElementClass(el,'fixed-header',currVal_26);
      this._expr_26 = currVal_26;
    }
    const currVal_27:any = this.context.isFixedRow;
    if (import3.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      view.renderer.setElementClass(el,'fixed-row',currVal_27);
      this._expr_27 = currVal_27;
    }
    const currVal_28:any = this.context.isVertScroll;
    if (import3.checkBinding(throwOnChange,this._expr_28,currVal_28)) {
      view.renderer.setElementClass(el,'scroll-vertical',currVal_28);
      this._expr_28 = currVal_28;
    }
    const currVal_29:any = this.context.isHorScroll;
    if (import3.checkBinding(throwOnChange,this._expr_29,currVal_29)) {
      view.renderer.setElementClass(el,'scroll-horz',currVal_29);
      this._expr_29 = currVal_29;
    }
    const currVal_30:any = this.context.isSelectable;
    if (import3.checkBinding(throwOnChange,this._expr_30,currVal_30)) {
      view.renderer.setElementClass(el,'selectable',currVal_30);
      this._expr_30 = currVal_30;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'window:resize')) {
      const pd_sub_0:any = ((<any>this.context.recalculate()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean,emit4:boolean,emit5:boolean,emit6:boolean,emit7:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.scroll.subscribe(_eventHandler.bind(view,'scroll'))); }
    if (emit1) { (this.subscription1 = this.context.activate.subscribe(_eventHandler.bind(view,'activate'))); }
    if (emit2) { (this.subscription2 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
    if (emit3) { (this.subscription3 = this.context.sort.subscribe(_eventHandler.bind(view,'sort'))); }
    if (emit4) { (this.subscription4 = this.context.page.subscribe(_eventHandler.bind(view,'page'))); }
    if (emit5) { (this.subscription5 = this.context.detailToggle.subscribe(_eventHandler.bind(view,'detailToggle'))); }
    if (emit6) { (this.subscription6 = this.context.reorder.subscribe(_eventHandler.bind(view,'reorder'))); }
    if (emit7) { (this.subscription7 = this.context.resize.subscribe(_eventHandler.bind(view,'resize'))); }
  }
}
var renderType_DatatableComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_DatatableComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.DatatableComponent>;
  _DatatableComponent_0_3:Wrapper_DatatableComponent;
  _query_DataTableColumnDirective_0_0:import6.QueryList<any>;
  _query_DatatableRowDetailDirective_0_1:import6.QueryList<any>;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DatatableComponent_Host0,renderType_DatatableComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'datatable',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_DatatableComponent0(this.viewUtils,this,0,this._el_0);
    this._DatatableComponent_0_3 = new Wrapper_DatatableComponent(this.renderer,new import9.ElementRef(this._el_0),this.compView_0.ref);
    this._query_DataTableColumnDirective_0_0 = new import6.QueryList<any>();
    this._query_DatatableRowDetailDirective_0_1 = new import6.QueryList<any>();
    this._query_DatatableRowDetailDirective_0_1.reset(([] as any[]));
    this._DatatableComponent_0_3.context.rowDetailTemplateChild = this._query_DatatableRowDetailDirective_0_1.first;
    this.compView_0.create(this._DatatableComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'resize','window'),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._DatatableComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DatatableComponent) && (0 === requestNodeIndex))) { return this._DatatableComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._DatatableComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    if (!throwOnChange) { if (this._query_DataTableColumnDirective_0_0.dirty) {
      this._query_DataTableColumnDirective_0_0.reset(([] as any[]));
      this._DatatableComponent_0_3.context.columnTemplates = this._query_DataTableColumnDirective_0_0;
      this._query_DataTableColumnDirective_0_0.notifyOnChanges();
    } }
    this._DatatableComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._DatatableComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DatatableComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DatatableComponent_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const DatatableComponentNgFactory:import8.ComponentFactory<import0.DatatableComponent> = new import8.ComponentFactory<import0.DatatableComponent>('datatable',View_DatatableComponent_Host0,import0.DatatableComponent);
const styles_DatatableComponent:any[] = ([] as any[]);
var renderType_DatatableComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_DatatableComponent,{});
export class View_DatatableComponent0 extends import2.AppView<import0.DatatableComponent> {
  _viewQuery_DataTableBodyComponent_0:import6.QueryList<any>;
  _text_0:any;
  _el_1:any;
  _VisibilityDirective_1_3:import10.Wrapper_VisibilityDirective;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import11.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import12.Wrapper_NgIf;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import13.DataTableBodyComponent>;
  _DataTableBodyComponent_5_3:import14.Wrapper_DataTableBodyComponent;
  _text_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import11.ViewContainer;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import12.Wrapper_NgIf;
  _text_9:any;
  _text_10:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DatatableComponent0,renderType_DatatableComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_DataTableBodyComponent_0 = new import6.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'visibility-observer',''),(null as any));
    this._VisibilityDirective_1_3 = new import10.Wrapper_VisibilityDirective(new import9.ElementRef(this._el_1),this.parentView.injectorGet(import15.NgZone,this.parentIndex));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import11.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import16.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import12.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_1,'datatable-body',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_5 = new import14.View_DataTableBodyComponent0(this.viewUtils,this,5,this._el_5);
    this._DataTableBodyComponent_5_3 = new import14.Wrapper_DataTableBodyComponent(new import9.ElementRef(this._el_5),this.renderer);
    this._text_6 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_5.create(this._DataTableBodyComponent_5_3.context);
    this._text_7 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_8 = new import11.ViewContainer(8,1,this,this._anchor_8);
    this._TemplateRef_8_5 = new import16.TemplateRef_(this,8,this._anchor_8);
    this._NgIf_8_6 = new import12.Wrapper_NgIf(this._vc_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'visible',(null as any)),this.eventHandler(this.handleEvent_1));
    this._VisibilityDirective_1_3.subscribe(this,this.eventHandler(this.handleEvent_1),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray16(10,'page',(null as any),'activate',(null as any),'select',(null as any),'detailToggle',(null as any),'scroll',(null as any)),this.eventHandler(this.handleEvent_5));
    this._DataTableBodyComponent_5_3.subscribe(this,this.eventHandler(this.handleEvent_5),true,true,true,true,true);
    this._viewQuery_DataTableBodyComponent_0.reset([this._DataTableBodyComponent_5_3.context]);
    this.context.bodyComponent = this._viewQuery_DataTableBodyComponent_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._text_10
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import17.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    if (((token === import13.DataTableBodyComponent) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._DataTableBodyComponent_5_3.context; }
    if (((token === import16.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import17.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6.context; }
    if (((token === import18.VisibilityDirective) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._VisibilityDirective_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._VisibilityDirective_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_3_0_0:any = this.context.headerHeight;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    const currVal_5_0_0:any = this.context.scrollbarV;
    this._DataTableBodyComponent_5_3.check_scrollbarV(currVal_5_0_0,throwOnChange,false);
    const currVal_5_0_1:any = this.context.scrollbarH;
    this._DataTableBodyComponent_5_3.check_scrollbarH(currVal_5_0_1,throwOnChange,false);
    const currVal_5_0_2:any = this.context.loadingIndicator;
    this._DataTableBodyComponent_5_3.check_loadingIndicator(currVal_5_0_2,throwOnChange,false);
    const currVal_5_0_3:any = this.context.rowHeight;
    this._DataTableBodyComponent_5_3.check_rowHeight(currVal_5_0_3,throwOnChange,false);
    const currVal_5_0_4:any = this.context.offsetX;
    this._DataTableBodyComponent_5_3.check_offsetX(currVal_5_0_4,throwOnChange,false);
    const currVal_5_0_5:any = this.context.detailRowHeight;
    this._DataTableBodyComponent_5_3.check_detailRowHeight(currVal_5_0_5,throwOnChange,false);
    const currVal_5_0_6:any = this.context.messages.emptyMessage;
    this._DataTableBodyComponent_5_3.check_emptyMessage(currVal_5_0_6,throwOnChange,false);
    const currVal_5_0_7:any = this.context.selectionType;
    this._DataTableBodyComponent_5_3.check_selectionType(currVal_5_0_7,throwOnChange,false);
    const currVal_5_0_8:any = this.context.selected;
    this._DataTableBodyComponent_5_3.check_selected(currVal_5_0_8,throwOnChange,false);
    const currVal_5_0_9:any = this.context.rowIdentity;
    this._DataTableBodyComponent_5_3.check_rowIdentity(currVal_5_0_9,throwOnChange,false);
    const currVal_5_0_10:any = this.context.rowDetailTemplate;
    this._DataTableBodyComponent_5_3.check_rowDetailTemplate(currVal_5_0_10,throwOnChange,false);
    const currVal_5_0_11:any = this.context.selectCheck;
    this._DataTableBodyComponent_5_3.check_selectCheck(currVal_5_0_11,throwOnChange,false);
    const currVal_5_0_12:any = this.context.trackByProp;
    this._DataTableBodyComponent_5_3.check_trackByProp(currVal_5_0_12,throwOnChange,false);
    const currVal_5_0_13:any = this.context.pageSize;
    this._DataTableBodyComponent_5_3.check_pageSize(currVal_5_0_13,throwOnChange,false);
    const currVal_5_0_14:any = this.context.rows;
    this._DataTableBodyComponent_5_3.check_rows(currVal_5_0_14,throwOnChange,false);
    const currVal_5_0_15:any = this.context.columns;
    this._DataTableBodyComponent_5_3.check_columns(currVal_5_0_15,throwOnChange,false);
    const currVal_5_0_16:any = this.context.offset;
    this._DataTableBodyComponent_5_3.check_offset(currVal_5_0_16,throwOnChange,false);
    const currVal_5_0_17:any = this.context.rowCount;
    this._DataTableBodyComponent_5_3.check_rowCount(currVal_5_0_17,throwOnChange,false);
    const currVal_5_0_18:any = this.context.innerWidth;
    this._DataTableBodyComponent_5_3.check_innerWidth(currVal_5_0_18,throwOnChange,false);
    const currVal_5_0_19:any = this.context.bodyHeight;
    this._DataTableBodyComponent_5_3.check_bodyHeight(currVal_5_0_19,throwOnChange,false);
    if (this._DataTableBodyComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    const currVal_8_0_0:any = this.context.footerHeight;
    this._NgIf_8_6.check_ngIf(currVal_8_0_0,throwOnChange,false);
    this._NgIf_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    this._VisibilityDirective_1_3.checkHost(this,this,this._el_1,throwOnChange);
    this._DataTableBodyComponent_5_3.checkHost(this,this.compView_5,this._el_5,throwOnChange);
    this.compView_5.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this._vc_8.destroyNestedViews();
    this.compView_5.destroy();
    this._DataTableBodyComponent_5_3.ngOnDestroy();
    this._VisibilityDirective_1_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_DatatableComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    if ((nodeIndex == 8)) { return new View_DatatableComponent2(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'visible')) {
      const pd_sub_0:any = ((<any>this.context.recalculate()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'page')) {
      const pd_sub_0:any = ((<any>this.context.onBodyPage($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'activate')) {
      const pd_sub_1:any = ((<any>this.context.activate.emit($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'select')) {
      const pd_sub_2:any = ((<any>this.context.select.emit($event)) !== false);
      result = (pd_sub_2 && result);
    }
    if ((eventName == 'detailToggle')) {
      const pd_sub_3:any = ((<any>this.context.detailToggle.emit($event)) !== false);
      result = (pd_sub_3 && result);
    }
    if ((eventName == 'scroll')) {
      const pd_sub_4:any = ((<any>this.context.onBodyScroll($event)) !== false);
      result = (pd_sub_4 && result);
    }
    return result;
  }
}
class View_DatatableComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import19.DataTableHeaderComponent>;
  _DataTableHeaderComponent_0_3:import20.Wrapper_DataTableHeaderComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_DatatableComponent1,renderType_DatatableComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'datatable-header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import20.View_DataTableHeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTableHeaderComponent_0_3 = new import20.Wrapper_DataTableHeaderComponent(new import9.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._DataTableHeaderComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray8(6,'sort',(null as any),'resize',(null as any),'reorder',(null as any)),this.eventHandler(this.handleEvent_0));
    this._DataTableHeaderComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true,true,true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.DataTableHeaderComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._DataTableHeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.cssClasses.sortAscending;
    this._DataTableHeaderComponent_0_3.check_sortAscendingIcon(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.cssClasses.sortDescending;
    this._DataTableHeaderComponent_0_3.check_sortDescendingIcon(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.scrollbarH;
    this._DataTableHeaderComponent_0_3.check_scrollbarH(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.innerWidth;
    this._DataTableHeaderComponent_0_3.check_innerWidth(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.offsetX;
    this._DataTableHeaderComponent_0_3.check_offsetX(currVal_0_0_4,throwOnChange,false);
    const currVal_0_0_5:any = this.parentView.context.sorts;
    this._DataTableHeaderComponent_0_3.check_sorts(currVal_0_0_5,throwOnChange,false);
    const currVal_0_0_6:any = this.parentView.context.sortType;
    this._DataTableHeaderComponent_0_3.check_sortType(currVal_0_0_6,throwOnChange,false);
    const currVal_0_0_7:any = this.parentView.context.headerHeight;
    this._DataTableHeaderComponent_0_3.check_headerHeight(currVal_0_0_7,throwOnChange,false);
    const currVal_0_0_8:any = this.parentView.context.columns;
    this._DataTableHeaderComponent_0_3.check_columns(currVal_0_0_8,throwOnChange,false);
    if (this._DataTableHeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._DataTableHeaderComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTableHeaderComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'sort')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onColumnSort($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'resize')) {
      const pd_sub_1:any = ((<any>this.parentView.context.onColumnResize($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'reorder')) {
      const pd_sub_2:any = ((<any>this.parentView.context.onColumnReorder($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}
class View_DatatableComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import21.DataTableFooterComponent>;
  _DataTableFooterComponent_0_3:import22.Wrapper_DataTableFooterComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_DatatableComponent2,renderType_DatatableComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'datatable-footer',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import22.View_DataTableFooterComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTableFooterComponent_0_3 = new import22.Wrapper_DataTableFooterComponent(new import9.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._DataTableFooterComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'page',(null as any)),this.eventHandler(this.handleEvent_0));
    this._DataTableFooterComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.DataTableFooterComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._DataTableFooterComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.footerHeight;
    this._DataTableFooterComponent_0_3.check_footerHeight(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.rowCount;
    this._DataTableFooterComponent_0_3.check_rowCount(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.pageSize;
    this._DataTableFooterComponent_0_3.check_pageSize(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.offset;
    this._DataTableFooterComponent_0_3.check_offset(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.cssClasses.pagerLeftArrow;
    this._DataTableFooterComponent_0_3.check_pagerLeftArrowIcon(currVal_0_0_4,throwOnChange,false);
    const currVal_0_0_5:any = this.parentView.context.cssClasses.pagerRightArrow;
    this._DataTableFooterComponent_0_3.check_pagerRightArrowIcon(currVal_0_0_5,throwOnChange,false);
    const currVal_0_0_6:any = this.parentView.context.cssClasses.pagerPrevious;
    this._DataTableFooterComponent_0_3.check_pagerPreviousIcon(currVal_0_0_6,throwOnChange,false);
    const currVal_0_0_7:any = this.parentView.context.cssClasses.pagerNext;
    this._DataTableFooterComponent_0_3.check_pagerNextIcon(currVal_0_0_7,throwOnChange,false);
    const currVal_0_0_8:any = this.parentView.context.messages.totalMessage;
    this._DataTableFooterComponent_0_3.check_totalMessage(currVal_0_0_8,throwOnChange,false);
    if (this._DataTableFooterComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTableFooterComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'page')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onFooterPage($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}