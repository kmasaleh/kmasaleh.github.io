(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ksaleh-ng-works/dist/ksaleh-ng/modal/fesm2015/ksaleh-ng-modal.js":
/*!***************************************************************************!*\
  !*** ../ksaleh-ng-works/dist/ksaleh-ng/modal/fesm2015/ksaleh-ng-modal.js ***!
  \***************************************************************************/
/*! exports provided: ALERT_CLASS, ModalComponent, ModalConfig, ModalModule, ModalService, TemplateProviderService, TemplateRefBinderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_CLASS", function() { return ALERT_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfig", function() { return ModalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateProviderService", function() { return TemplateProviderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRefBinderDirective", function() { return TemplateRefBinderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../ksaleh-ng-works/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../ksaleh-ng-works/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../ksaleh-ng-works/node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../ksaleh-ng-works/node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../ksaleh-ng-works/node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "../ksaleh-ng-works/node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







var ALERT_CLASS;
(function (ALERT_CLASS) {
    ALERT_CLASS[ALERT_CLASS["Info"] = 0] = "Info";
    ALERT_CLASS[ALERT_CLASS["Success"] = 1] = "Success";
    ALERT_CLASS[ALERT_CLASS["Danger"] = 2] = "Danger";
    ALERT_CLASS[ALERT_CLASS["Primary"] = 3] = "Primary";
    ALERT_CLASS[ALERT_CLASS["Warning"] = 4] = "Warning";
    ALERT_CLASS[ALERT_CLASS["Secondary"] = 5] = "Secondary";
    ALERT_CLASS[ALERT_CLASS["Light"] = 6] = "Light";
    ALERT_CLASS[ALERT_CLASS["Dark"] = 7] = "Dark";
})(ALERT_CLASS || (ALERT_CLASS = {}));
class ModalConfig {
    constructor() {
        this.Draggable = true;
        this.Alert = ALERT_CLASS.Info;
    }
}
ModalConfig.ɵfac = function ModalConfig_Factory(t) { return new (t || ModalConfig)(); };
ModalConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: ModalConfig, factory: ModalConfig.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ModalConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class TemplateRefBinderDirective {
    constructor(Template) {
        this.Template = Template;
        console.log(`inside TemplateRefBinderDirective .. `);
    }
    ngOnInit() {
    }
}
TemplateRefBinderDirective.ɵfac = function TemplateRefBinderDirective_Factory(t) { return new (t || TemplateRefBinderDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
TemplateRefBinderDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: TemplateRefBinderDirective, selectors: [["", "templateRefBinder", ""]], inputs: { Name: ["templateRefBinder", "Name"] } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(TemplateRefBinderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[templateRefBinder]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { Name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['templateRefBinder']
        }] }); })();
class TemplateProviderService {
    constructor() {
        this._Templates = [];
    }
    Add(template) {
        this._Templates = this._Templates.concat(template);
    }
    Get(templateName) {
        let t = this._Templates.find(ref => ref.Name == templateName);
        return t.Template;
    }
}
TemplateProviderService.ɵfac = function TemplateProviderService_Factory(t) { return new (t || TemplateProviderService)(); };
TemplateProviderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: TemplateProviderService, factory: TemplateProviderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(TemplateProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0 = ["header"];
const _c1 = ["esacpe"];
const _c2 = ["OK"];
const _c3 = ["modal"];
const _c4 = ["container"];
const _c5 = ["footer_btn"];
function ModalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 7, 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "h2", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r1.modalConfig.Title);
} }
function ModalComponent_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "fa-icon", 10, 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ModalComponent_fa_icon_4_Template_fa_icon_click_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r9); const ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r8.OnDismiss($event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("icon", ctx_r2._faWindowClose);
} }
function ModalComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "p");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r3.modalConfig.Body, "");
} }
function ModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0, null, 12);
} }
function ModalComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "button", 15, 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ModalComponent_div_8_ng_container_1_Template_button_click_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r16); const i_r13 = ctx.index; const ctx_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); return ctx_r15.OnFooterBtnClick($event, i_r13); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const button_r12 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(button_r12.Text);
} }
function ModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, ModalComponent_div_8_ng_container_1_Template, 4, 1, "ng-container", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r5.modalConfig.Buttons);
} }
class ModalComponent {
    constructor(modalConfig, templateProviderService) {
        this.modalConfig = modalConfig;
        this.templateProviderService = templateProviderService;
        this._dragging = false;
        this._DefaultWidth = 400;
        this._faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimesCircle"];
        this._Return = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        if (modalConfig.Width == null)
            modalConfig.Width = this._DefaultWidth;
    }
    ngOnInit() {
    }
    get Events() {
        return this._Return.asObservable();
    }
    OnFooterBtnClick($event, i) {
        var _a;
        this._Modal.nativeElement.style.display = 'none';
        let code = this.modalConfig.Buttons[i].Code;
        this._Return.next(code);
        (_a = this.Me) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    ngAfterViewInit() {
        if (this.modalConfig.TempalteName) {
            let templateRef = this.templateProviderService.Get(this.modalConfig.TempalteName);
            const view = templateRef.createEmbeddedView(this.modalConfig.BindingContext);
            this._container.insert(view);
        }
        if (this._Header) {
            let c = "";
            switch (this.modalConfig.Alert) {
                case ALERT_CLASS.Info:
                    c = 'alert-info';
                    break;
                case ALERT_CLASS.Primary:
                    c = 'alert-primary';
                    break;
                case ALERT_CLASS.Danger:
                    c = 'alert-danger';
                    break;
                case ALERT_CLASS.Dark:
                    c = 'alert-dark';
                    break;
                case ALERT_CLASS.Light:
                    c = 'alert-light';
                    break;
                case ALERT_CLASS.Secondary:
                    c = 'alert-secondary';
                    break;
                case ALERT_CLASS.Success:
                    c = 'alert-success';
                    break;
                case ALERT_CLASS.Warning:
                    c = 'alert-warning';
                    break;
            }
            this._Header.nativeElement.classList.add('alert', c);
        }
    }
    ngOnDestroy() {
    }
    OnMouseDown(targetElement, $event) {
        $event.preventDefault();
        if (typeof targetElement.className.includes == 'function' && this.modalConfig.Draggable
        // && targetElement.className.includes( 'modal-header')
        ) {
            this._dragging = true;
            this._Start_X = $event.clientX;
            this._Start_Y = $event.clientY;
        }
    }
    OnMouseUp(targetElement, $event) {
        this._dragging = false;
    }
    OnMouseMove(targetElement, $event) {
        $event.preventDefault();
        if (this._dragging
        //  &&  targetElement.className.includes('modal-header')
        ) {
            console.log(`X:${$event.clientX},Y:${$event.clientY}`);
            let offset_x = this._Start_X - $event.clientX;
            let offset_y = this._Start_Y - $event.clientY;
            this._Start_X = $event.clientX;
            this._Start_Y = $event.clientY;
            let elementModal = this._Modal.nativeElement;
            elementModal.style.left = `${elementModal.offsetLeft - offset_x}px`;
            elementModal.style.top = `${elementModal.offsetTop - offset_y}px`;
        }
    }
    OnDismiss($event) {
        var _a;
        (_a = this.Me) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ModalConfig), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(TemplateProviderService)); };
ModalComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: ModalComponent, selectors: [["ngs-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0, true);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c1, true);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c2, true);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c3, true);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c4, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c5, true);
    } if (rf & 2) {
        var _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx._Header = _t.first);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx._Escape = _t.first);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx._OK = _t.first);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx._Modal = _t.first);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx._container = _t.first);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx._Buttons = _t);
    } }, hostBindings: function ModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mousedown", function ModalComponent_mousedown_HostBindingHandler($event) { return ctx.OnMouseDown($event.target, $event); })("mouseup", function ModalComponent_mouseup_HostBindingHandler($event) { return ctx.OnMouseUp($event.target, $event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mousemove", function ModalComponent_mousemove_HostBindingHandler($event) { return ctx.OnMouseMove($event.target, $event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { Me: "Me" }, decls: 9, vars: 7, consts: [[1, "modal-container"], ["modal", ""], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "escape", "style", "display: inline-block;position:absolute;top:5px;right:5px;", 3, "icon", "click", 4, "ngIf"], [4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], ["header", ""], [1, "modal-title"], [1, "escape", 2, "display", "inline-block", "position", "absolute", "top", "5px", "right", "5px", 3, "icon", "click"], ["esacpe", ""], ["container", ""], [1, "modal-footer"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], ["footer_btn", ""]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0, 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, ModalComponent_div_2_Template, 4, 1, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, ModalComponent_fa_icon_4_Template, 2, 1, "fa-icon", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5, " fdgfdgfdgfdgfd ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, ModalComponent_p_6_Template, 2, 1, "p", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, ModalComponent_ng_container_7_Template, 2, 0, "ng-container", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, ModalComponent_div_8_Template, 2, 1, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", ctx.modalConfig.Width, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.modalConfig.HasCaption);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf",  true || false);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.modalConfig.Body);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.modalConfig.TempalteName != null);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.modalConfig.Buttons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".modal-container[_ngcontent-%COMP%]{z-index:9;background-color:#fff;border:1px solid #d3d3d3;text-align:center;border-radius:15px;padding:0;margin:0;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.modal-header[_ngcontent-%COMP%]{height:50px;cursor:move;z-index:10;margin:auto;border-radius:15px 15px 0 0;vertical-align:middle}.modal-title[_ngcontent-%COMP%]{margin:0;text-align:center!important}.modal-footer[_ngcontent-%COMP%]{background-color:#ffa07a;border-radius:0 0 15px 15px}.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{left:0}.modal-body[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px}fa-icon[_ngcontent-%COMP%]{margin-bottom:20px!important}.escape[_ngcontent-%COMP%]{cursor:crosshair}"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngs-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return [{ type: ModalConfig }, { type: TemplateProviderService }]; }, { Me: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _Header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['header']
        }], _Escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['esacpe']
        }], _OK: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['OK']
        }], _Modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modal']
        }], _container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], _Buttons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['footer_btn']
        }], OnMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event.target', '$event']]
        }], OnMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup', ['$event.target', '$event']]
        }], OnMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event.target', '$event']]
        }] }); })();

class ModalModule {
}
ModalModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: ModalModule });
ModalModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(ModalModule, { declarations: [ModalComponent,
        TemplateRefBinderDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]], exports: [ModalComponent,
        TemplateRefBinderDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ModalComponent,
                    TemplateRefBinderDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
                ],
                exports: [
                    ModalComponent,
                    TemplateRefBinderDirective
                ]
            }]
    }], null, null); })();

class ModalService {
    constructor(templateProviderService, resolver, injector) {
        this.templateProviderService = templateProviderService;
        this.resolver = resolver;
        this.injector = injector;
    }
    ShowModal(config) {
        let factory = this.resolver.resolveComponentFactory(ModalComponent);
        let injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create([{ provide: ModalConfig, useValue: config }], this.injector);
        let componentRef = config.ViewContainer.createComponent(factory, undefined, injector);
        componentRef.instance.Me = componentRef;
        return componentRef.instance;
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(TemplateProviderService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ModalService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: TemplateProviderService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();

/*
 * Public API Surface of modal
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ksaleh-ng-modal.js.map


/***/ }),

/***/ "../ksaleh-ng-works/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive":
/*!*************************************************************************************************!*\
  !*** ../ksaleh-ng-works/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy namespace object ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../ksaleh-ng-works/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive";

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ksaleh-ng/modal */ "../ksaleh-ng-works/dist/ksaleh-ng/modal/fesm2015/ksaleh-ng-modal.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");










const _c0 = ["msgBox"];
function AppComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bee gees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Staying Alive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lifes goes in no where, somebody help me yeah ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Barry Gibb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 15);
} if (rf & 2) {
    const band_r5 = ctx.BandName;
    const Icon_r6 = ctx.Icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please Welcome ", band_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", Icon_r6);
} }
const _c1 = function () { return [1, 2, 3, 4, 5, 6]; };
class AppComponent {
    constructor(templateProviderService, modalSerivce) {
        this.templateProviderService = templateProviderService;
        this.modalSerivce = modalSerivce;
        this.title = 'ksBlog';
    }
    ngAfterViewInit() {
        this.templateProviderService.Add(this.templateRefs.toArray());
    }
    OnMsgBox($event) {
        let c = new _ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_1__["ModalConfig"]();
        c.Width = 400;
        c.HasCaption = true;
        c.Title = "Hello World";
        //c.Body = "This Angular 9";
        c.TempalteName = "BeeGees";
        c.BindingContext = { BandName: "BeeGees" /*,Icon:faSave*/ };
        //c.Alert = ALERT_CLASS.Success ;
        c.Buttons = [{ Text: 'Yes', Code: 0 }, { Text: 'No', Code: 2 }];
        c.ViewContainer = this.msgBox;
        let subscribtion2 = this.modalSerivce.ShowModal(c).Events.subscribe(code => {
            alert(`user clicked buuton with code ${code}`);
            subscribtion2.unsubscribe();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_1__["TemplateProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_1__["ModalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_1__["TemplateRefBinderDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.msgBox = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRefs = _t);
    } }, decls: 31, vars: 3, consts: [[1, "main-container"], [1, "header"], ["src", "./../assets/avataaars.png", "alt", "Programmer Avatar Image", 1, "avatar"], ["mat-icon-button", ""], [1, "side-bar"], [1, "khaled-img-container"], ["src", "./../assets/khaled.jpg"], [1, "main-content"], [3, "click"], [4, "ngFor", "ngForOf"], ["msgBox", ""], [3, "templateRefBinder"], ["beegees", ""], [1, "box"], [2, "background-color", "chartreuse"], ["size", "5x", 3, "icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Khaled Saleh personal Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Hi, my name is Khaled Saleh, I'm a software eningneer since the early of 90's. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " This is my personal web site that may I use for blogging thoughts both technical or general and also my work samples. I hope you find something interesting here. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Thank you for visting and have a good day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener($event) { return ctx.OnMsgBox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Modal Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_ng_container_23_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Khaled Saleh \u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](27, null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_ng_template_29_Template, 11, 2, "ng-template", 11, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templateRefBinder", "BeeGees");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_1__["TemplateRefBinderDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"]], styles: [".avatar[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    margin-left: 20px;\r\n  }\r\n  \r\n.khaled-img-container[_ngcontent-%COMP%]{\r\ntext-align: center;\r\nwidth: 100%;\r\npadding-top: 50px;\r\n}\r\n  \r\n.khaled-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\nvertical-align: middle;\r\nwidth: 155px;\r\nheight: 180px;\r\nborder-radius: 70%;\r\n}\r\n  \r\n.khaled-img-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\nwidth: 80%;\r\ncolor: white;\r\nfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\nfont-weight: 500;\r\ntext-align: center;\r\nmargin: 0 auto;\r\nmargin-top: 20px;;\r\n}\r\n  \r\n.main-container[_ngcontent-%COMP%]{\r\ndisplay: grid;\r\ngrid-gap : 2px;\r\ngrid-template-columns: 20% 80%;\r\ngrid-template-rows: 60px auto 60px; \r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n  \r\n.header[_ngcontent-%COMP%]{\r\n    grid-area: 1/1/2/4;\r\n}\r\n  \r\n.side-bar[_ngcontent-%COMP%]{\r\n    grid-area: 2/1/2/2;\r\n    background-color:  #5FCB71;\r\n    padding-top: 0px;\r\n    margin-top: 0;\r\n    overflow-x: hidden;\r\n}\r\n  \r\n.main-content[_ngcontent-%COMP%]{\r\n    grid-area: 2/2/3/4;    \r\n    padding:5px;    \r\n    display: flex;\r\n    flex-flow:row  wrap;\r\n    \r\n    \r\n\r\n    width: 100%;\r\n    \r\n    \r\n}\r\n  \r\nfooter[_ngcontent-%COMP%] {\r\ngrid-area: 3/1/4/4;\r\nwidth: 100%;\r\ntext-align: center;\r\npadding: 3px;\r\nbackground-color: darkgrey;\r\ncolor: blue;\r\n}\r\n  \r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\nvertical-align: middle;\r\npadding-top: 15px;\r\n\r\n}\r\n  \r\n.box[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: 50px;\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztBQUVGO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxpQkFBaUI7QUFDakI7O0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLGFBQWE7QUFDYixrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxVQUFVO0FBQ1YsWUFBWTtBQUNaLDREQUE0RDtBQUM1RCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsY0FBYztBQUNkLDhCQUE4QjtBQUM5QixrQ0FBa0M7QUFDbEMsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjs7SUFFM0IsV0FBVzs7O0FBR2Y7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixpQkFBaUI7O0FBRWpCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuLmtoYWxlZC1pbWctY29udGFpbmVye1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbndpZHRoOiAxMDAlO1xyXG5wYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG4ua2hhbGVkLWltZy1jb250YWluZXIgaW1ne1xyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG53aWR0aDogMTU1cHg7XHJcbmhlaWdodDogMTgwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDcwJTtcclxufVxyXG4ua2hhbGVkLWltZy1jb250YWluZXIgcHtcclxud2lkdGg6IDgwJTtcclxuY29sb3I6IHdoaXRlO1xyXG5mb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luOiAwIGF1dG87XHJcbm1hcmdpbi10b3A6IDIwcHg7O1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJ7XHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtZ2FwIDogMnB4O1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbmdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvIDYwcHg7IFxyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi80O1xyXG59XHJcblxyXG4uc2lkZS1iYXJ7XHJcbiAgICBncmlkLWFyZWE6IDIvMS8yLzI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzVGQ0I3MTtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5tYWluLWNvbnRlbnR7XHJcbiAgICBncmlkLWFyZWE6IDIvMi8zLzQ7ICAgIFxyXG4gICAgcGFkZGluZzo1cHg7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzpyb3cgIHdyYXA7XHJcbiAgICAvKmFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cclxuICAgIC8qanVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuZm9vdGVyIHtcclxuZ3JpZC1hcmVhOiAzLzEvNC80O1xyXG53aWR0aDogMTAwJTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5wYWRkaW5nOiAzcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG5jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuZm9vdGVyIHB7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbnBhZGRpbmctdG9wOiAxNXB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5ib3h7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */", ".b[_ngcontent-%COMP%]{\n  background-color: red;\n  border-radius: 5px;\n\n  \n}\n._container[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: repeat(4, 100px);\n  grid-template-rows: auto;\n  border : solid 1px black;\n\n  margin : 50px;\n  justify-items: stretch;\n\n}\n#div1[_ngcontent-%COMP%]{\n  grid-column-start: 1;\n  grid-column-end: 5;\n}\n#div2[_ngcontent-%COMP%]{\n  grid-row: 3/ span 1;\n  grid-column: 5/6;\n}\n#div3[_ngcontent-%COMP%]{\n  grid-area: 2/2/3/3;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_1__["TemplateProviderService"] }, { type: _ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }]; }, { msgBox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['msgBox', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], templateRefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_1__["TemplateRefBinderDirective"]]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ksaleh-ng/modal */ "../ksaleh-ng-works/dist/ksaleh-ng/modal/fesm2015/ksaleh-ng-modal.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _ksaleh_ng_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\KhaledSaleh\ksBlog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map