/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i2 from '../../../../src/app/game/game-request.component';
import * as i3 from '@angular/common';
import * as i4 from '@angular/router';
import * as i5 from '../../../../src/app/game/game.service';
const styles_RequestFormComponent:any[] = ([] as any[]);
export const RenderType_RequestFormComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_RequestFormComponent,data:{}});
function View_RequestFormComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'alert alert-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n			  '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Minimum Age Too Low!'])),
      (_l()(),i0.ɵted((null as any),[' You must choose a number greater than ','\n			']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.minAge;
        _ck(_v,4,0,currVal_0);
      });
}
function View_RequestFormComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'alert alert-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n			  '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Minimum Age Too High!'])),
      (_l()(),i0.ɵted((null as any),[' You cannot choose limit the minimum age to people older than you.\n			']))],
      (null as any),(null as any));
}
function View_RequestFormComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'alert alert-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n			  '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Maximum Age Too Low!'])),
      (_l()(),i0.ɵted((null as any),[' You cannot limit the maximum age to people younger than you.\n			']))],
      (null as any),(null as any));
}
function View_RequestFormComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'alert alert-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n			  '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Minimum Age Too High!'])),
      (_l()(),i0.ɵted((null as any),[' You must choose a number lower than ','\n			']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.maxAge;
        _ck(_v,4,0,currVal_0);
      });
}
export function View_RequestFormComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),57,'form',[['novalidate',
      '']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
      (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,
      'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
      'submit'],[(null as any),'reset']],(_v,en,$event) => {
    var ad:boolean = true;
    if (('submit' === en)) {
      const pd_0:any = ((<any>i0.ɵnov(_v,2).onSubmit($event)) !== false);
      ad = (pd_0 && ad);
    }
    if (('reset' === en)) {
      const pd_1:any = ((<any>i0.ɵnov(_v,2).onReset()) !== false);
      ad = (pd_1 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.ɵbf,([] as any[]),
      (null as any),(null as any)),i0.ɵdid(16384,[['requestForm',4]],0,i1.NgForm,[[8,
      (null as any)],[8,(null as any)]],(null as any),(null as any)),i0.ɵprd(2048,
      (null as any),i1.ControlContainer,(null as any),[i1.NgForm]),i0.ɵdid(16384,(null as any),
      0,i1.NgControlStatusGroup,[i1.ControlContainer],(null as any),(null as any)),
      (_l()(),i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Before you send off your request. Please choose some filters for the group you want to play with.'])),
      (_l()(),i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          42,'div',[['class','row']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n		'])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),39,'div',[['class','col-md-12']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n			'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['Minimum Age: '])),(_l()(),i0.ɵted((null as any),
          ['\n			'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),6,'input',[['class',
          'form-control'],['id','min'],['name','min'],['placeholder','Minimum Age...'],
          ['type','number']],[[8,'max',0],[8,'min',0],[2,'ng-untouched',(null as any)],
          [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
              (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
          [2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],[(null as any),
          'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
          'compositionend'],[(null as any),'change']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i2.RequestFormComponent = _v.component;
        if (('input' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,17)._handleInput($event.target.value)) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i0.ɵnov(_v,17).onTouched()) !== false);
          ad = (pd_1 && ad);
        }
        if (('compositionstart' === en)) {
          const pd_2:any = ((<any>i0.ɵnov(_v,17)._compositionStart()) !== false);
          ad = (pd_2 && ad);
        }
        if (('compositionend' === en)) {
          const pd_3:any = ((<any>i0.ɵnov(_v,17)._compositionEnd($event.target.value)) !== false);
          ad = (pd_3 && ad);
        }
        if (('change' === en)) {
          const pd_4:any = ((<any>i0.ɵnov(_v,18).onChange($event.target.value)) !== false);
          ad = (pd_4 && ad);
        }
        if (('input' === en)) {
          const pd_5:any = ((<any>i0.ɵnov(_v,18).onChange($event.target.value)) !== false);
          ad = (pd_5 && ad);
        }
        if (('blur' === en)) {
          const pd_6:any = ((<any>i0.ɵnov(_v,18).onTouched()) !== false);
          ad = (pd_6 && ad);
        }
        if (('ngModelChange' === en)) {
          const pd_7:any = ((<any>(_co.request.min = $event)) !== false);
          ad = (pd_7 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i1.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(16384,(null as any),0,i1.ɵbc,[i0.Renderer2,i0.ElementRef],
          (null as any),(null as any)),i0.ɵprd(1024,(null as any),i1.NG_VALUE_ACCESSOR,
          (p0_0:any,p1_0:any) => {
            return [p0_0,p1_0];
          },[i1.DefaultValueAccessor,i1.ɵbc]),i0.ɵdid(671744,(null as any),0,i1.NgModel,
          [[2,i1.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i1.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,
          (null as any),i1.NgControl,(null as any),[i1.NgModel]),i0.ɵdid(16384,(null as any),
          0,i1.NgControlStatus,[i1.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),['\n			'])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_RequestFormComponent_1)),i0.ɵdid(16384,
          (null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n			'])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_RequestFormComponent_2)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n			'])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['Maximum Age: '])),(_l()(),i0.ɵted((null as any),['\n			'])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),6,'input',[['class','form-control'],['id','max'],
              ['name','max'],['placeholder','Maximum Age...'],['type','number']],[[8,
              'max',0],[8,'min',0],[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'ngModelChange'],[(null as any),
              'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend'],[(null as any),'change']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.RequestFormComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,34)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,34).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,34)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,34)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('change' === en)) {
              const pd_4:any = ((<any>i0.ɵnov(_v,35).onChange($event.target.value)) !== false);
              ad = (pd_4 && ad);
            }
            if (('input' === en)) {
              const pd_5:any = ((<any>i0.ɵnov(_v,35).onChange($event.target.value)) !== false);
              ad = (pd_5 && ad);
            }
            if (('blur' === en)) {
              const pd_6:any = ((<any>i0.ɵnov(_v,35).onTouched()) !== false);
              ad = (pd_6 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_7:any = ((<any>(_co.request.max = $event)) !== false);
              ad = (pd_7 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i1.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(16384,(null as any),0,i1.ɵbc,[i0.Renderer2,i0.ElementRef],
          (null as any),(null as any)),i0.ɵprd(1024,(null as any),i1.NG_VALUE_ACCESSOR,
          (p0_0:any,p1_0:any) => {
            return [p0_0,p1_0];
          },[i1.DefaultValueAccessor,i1.ɵbc]),i0.ɵdid(671744,(null as any),0,i1.NgModel,
          [[2,i1.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i1.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,
          (null as any),i1.NgControl,(null as any),[i1.NgModel]),i0.ɵdid(16384,(null as any),
          0,i1.NgControlStatus,[i1.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),['\n			'])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_RequestFormComponent_3)),i0.ɵdid(16384,
          (null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n			'])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_RequestFormComponent_4)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n			'])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n			'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'input',[['type',
          'checkbox']],[[8,'checked',0]],[[(null as any),'change']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i2.RequestFormComponent = _v.component;
        if (('change' === en)) {
          const pd_0:any = ((<any>(_co.request.mic = !_co.request.mic)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n			Must have Mic\n		'])),
      (_l()(),i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵted((null as any),['\n	'])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'button',[['class',
          'btn btn-primary btn-block btn-outline'],['type','submit']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.RequestFormComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onSubmit()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Submit'])),
      (_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i2.RequestFormComponent = _v.component;
        const currVal_16:any = 'min';
        const currVal_17:any = _co.request.min;
        _ck(_v,20,0,currVal_16,currVal_17);
        const currVal_18:any = (_co.request.min < _co.minAge);
        _ck(_v,25,0,currVal_18);
        const currVal_19:any = (_co.request.min > _co.user.age);
        _ck(_v,28,0,currVal_19);
        const currVal_29:any = 'max';
        const currVal_30:any = _co.request.max;
        _ck(_v,37,0,currVal_29,currVal_30);
        const currVal_31:any = (_co.request.max < _co.user.age);
        _ck(_v,42,0,currVal_31);
        const currVal_32:any = (_co.request.max > _co.maxAge);
        _ck(_v,45,0,currVal_32);
      },(_ck,_v) => {
        var _co:i2.RequestFormComponent = _v.component;
        const currVal_0:any = i0.ɵnov(_v,4).ngClassUntouched;
        const currVal_1:any = i0.ɵnov(_v,4).ngClassTouched;
        const currVal_2:any = i0.ɵnov(_v,4).ngClassPristine;
        const currVal_3:any = i0.ɵnov(_v,4).ngClassDirty;
        const currVal_4:any = i0.ɵnov(_v,4).ngClassValid;
        const currVal_5:any = i0.ɵnov(_v,4).ngClassInvalid;
        const currVal_6:any = i0.ɵnov(_v,4).ngClassPending;
        _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
        const currVal_7:any = i0.ɵinlineInterpolate(1,'',_co.user.age,'');
        const currVal_8:any = i0.ɵinlineInterpolate(1,'',_co.minAge,'');
        const currVal_9:any = i0.ɵnov(_v,22).ngClassUntouched;
        const currVal_10:any = i0.ɵnov(_v,22).ngClassTouched;
        const currVal_11:any = i0.ɵnov(_v,22).ngClassPristine;
        const currVal_12:any = i0.ɵnov(_v,22).ngClassDirty;
        const currVal_13:any = i0.ɵnov(_v,22).ngClassValid;
        const currVal_14:any = i0.ɵnov(_v,22).ngClassInvalid;
        const currVal_15:any = i0.ɵnov(_v,22).ngClassPending;
        _ck(_v,16,0,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,
            currVal_13,currVal_14,currVal_15);
        const currVal_20:any = i0.ɵinlineInterpolate(1,'',_co.maxAge,'');
        const currVal_21:any = i0.ɵinlineInterpolate(1,'',_co.user.age,'');
        const currVal_22:any = i0.ɵnov(_v,39).ngClassUntouched;
        const currVal_23:any = i0.ɵnov(_v,39).ngClassTouched;
        const currVal_24:any = i0.ɵnov(_v,39).ngClassPristine;
        const currVal_25:any = i0.ɵnov(_v,39).ngClassDirty;
        const currVal_26:any = i0.ɵnov(_v,39).ngClassValid;
        const currVal_27:any = i0.ɵnov(_v,39).ngClassInvalid;
        const currVal_28:any = i0.ɵnov(_v,39).ngClassPending;
        _ck(_v,33,0,currVal_20,currVal_21,currVal_22,currVal_23,currVal_24,currVal_25,
            currVal_26,currVal_27,currVal_28);
        const currVal_33:any = _co.request.mic;
        _ck(_v,49,0,currVal_33);
      });
}
export function View_RequestFormComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'request-form',
      ([] as any[]),(null as any),(null as any),(null as any),View_RequestFormComponent_0,
      RenderType_RequestFormComponent)),i0.ɵdid(114688,(null as any),0,i2.RequestFormComponent,
      [i4.ActivatedRoute,i5.GameService,i4.Router],(null as any),(null as any))],(_ck,
      _v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const RequestFormComponentNgFactory:i0.ComponentFactory<i2.RequestFormComponent> = i0.ɵccf('request-form',
    i2.RequestFormComponent,View_RequestFormComponent_Host_0,{id:'id'},{show:'show'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvamFtaWUvRGVza3RvcC9wbGF5L3NyYy9hcHAvZ2FtZS9nYW1lLXJlcXVlc3QuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL2phbWllL0Rlc2t0b3AvcGxheS9zcmMvYXBwL2dhbWUvZ2FtZS1yZXF1ZXN0LmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL2phbWllL0Rlc2t0b3AvcGxheS9zcmMvYXBwL2dhbWUvZ2FtZS1yZXF1ZXN0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvamFtaWUvRGVza3RvcC9wbGF5L3NyYy9hcHAvZ2FtZS9nYW1lLXJlcXVlc3QuY29tcG9uZW50LnRzLlJlcXVlc3RGb3JtQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGZvcm0gI3JlcXVlc3RGb3JtPVwibmdGb3JtXCI+XHJcblx0PHA+QmVmb3JlIHlvdSBzZW5kIG9mZiB5b3VyIHJlcXVlc3QuIFBsZWFzZSBjaG9vc2Ugc29tZSBmaWx0ZXJzIGZvciB0aGUgZ3JvdXAgeW91IHdhbnQgdG8gcGxheSB3aXRoLjwvcD5cclxuXHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcblx0XHRcdDxzcGFuPk1pbmltdW0gQWdlOiA8L3NwYW4+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm1pblwiIFsobmdNb2RlbCldPVwicmVxdWVzdC5taW5cIiBuYW1lPVwibWluXCIgIG1heD1cInt7dXNlci5hZ2V9fVwiIG1pbj1cInt7bWluQWdlfX1cIiBwbGFjZWhvbGRlcj1cIk1pbmltdW0gQWdlLi4uXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiAqbmdJZj1cInJlcXVlc3QubWluIDwgbWluQWdlXCI+XHJcblx0XHRcdMKgIDxzdHJvbmc+TWluaW11bSBBZ2UgVG9vIExvdyE8L3N0cm9uZz4gWW91IG11c3QgY2hvb3NlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiB7e21pbkFnZX19XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgKm5nSWY9XCJyZXF1ZXN0Lm1pbiA+IHVzZXIuYWdlXCI+XHJcblx0XHRcdMKgIDxzdHJvbmc+TWluaW11bSBBZ2UgVG9vIEhpZ2ghPC9zdHJvbmc+IFlvdSBjYW5ub3QgY2hvb3NlIGxpbWl0IHRoZSBtaW5pbXVtIGFnZSB0byBwZW9wbGUgb2xkZXIgdGhhbiB5b3UuXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8c3Bhbj5NYXhpbXVtIEFnZTogPC9zcGFuPlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtYXhcIiBbKG5nTW9kZWwpXT1cInJlcXVlc3QubWF4XCIgbmFtZT1cIm1heFwiIG1heD1cInt7bWF4QWdlfX1cIiBtaW49XCJ7e3VzZXIuYWdlfX1cIiBwbGFjZWhvbGRlcj1cIk1heGltdW0gQWdlLi4uXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiAqbmdJZj1cInJlcXVlc3QubWF4IDwgdXNlci5hZ2VcIj5cclxuXHRcdFx0wqAgPHN0cm9uZz5NYXhpbXVtIEFnZSBUb28gTG93ITwvc3Ryb25nPiBZb3UgY2Fubm90IGxpbWl0IHRoZSBtYXhpbXVtIGFnZSB0byBwZW9wbGUgeW91bmdlciB0aGFuIHlvdS5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiAqbmdJZj1cInJlcXVlc3QubWF4ID4gbWF4QWdlXCI+XHJcblx0XHRcdMKgIDxzdHJvbmc+TWluaW11bSBBZ2UgVG9vIEhpZ2ghPC9zdHJvbmc+IFlvdSBtdXN0IGNob29zZSBhIG51bWJlciBsb3dlciB0aGFuIHt7bWF4QWdlfX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxicj5cclxuXHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cInJlcXVlc3QubWljXCIgKGNoYW5nZSk9XCJyZXF1ZXN0Lm1pYyA9wqAhcmVxdWVzdC5taWNcIj5cclxuXHRcdFx0TXVzdCBoYXZlIE1pY1xyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0PGJyPlxyXG5cdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tb3V0bGluZVwiKGNsaWNrKT1cIm9uU3VibWl0KClcIj5TdWJtaXQ8L2J1dHRvbj5cclxuPC9mb3JtPlxyXG4iLCI8cmVxdWVzdC1mb3JtPjwvcmVxdWVzdC1mb3JtPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNNRztNQUFBO01BQUEsZ0JBQTZELDRDQUMzRDtNQUFBO01BQUEsNENBQVE7TUFBNkI7OztRQUFBO1FBQUE7Ozs7b0JBRXZDO01BQUE7TUFBQSxnQkFBK0QsNENBQzdEO01BQUE7TUFBQSw0Q0FBUTtNQUE4Qjs7OztvQkFJeEM7TUFBQTtNQUFBLGdCQUErRCw0Q0FDN0Q7TUFBQTtNQUFBLDRDQUFRO01BQTZCOzs7O29CQUV2QztNQUFBO01BQUEsZ0JBQTZELDRDQUMzRDtNQUFBO01BQUEsNENBQVE7TUFBOEI7OztRQUFBO1FBQUE7Ozs7b0JBbEIzQztNQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7RUFBQSx1Q0FBQTtNQUFBLG9DQUFBO01BQUEsc0VBQUE7TUFBQSxvRUFBQTtNQUFBO01BQTRCLHdDQUMzQjtVQUFBO1VBQUEsZ0JBQUc7TUFBcUcsd0NBQ3hHO1VBQUE7VUFBQSxnQkFBaUIseUNBQ2hCO1VBQUE7VUFBQSwwREFBdUI7VUFBQSxZQUN0QjtVQUFBO01BQU0sa0RBQW9CO1VBQUEsWUFDMUI7VUFBQTtVQUFBO1VBQUE7Y0FBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFtRDtVQUFBO1VBQUE7UUFBQTtRQUFuRDtNQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtVQUFBLG9DQUFBO1VBQUE7WUFBQTtVQUFBLDJDQUFBO1VBQUE7VUFBQSxxRUFBQTtVQUFBLDhEQUFBO1VBQUEsaUVBQTBKO2lCQUFBLDJCQUMxSjtVQUFBLG1FQUFBO1VBQUE7VUFBQSxlQUVNLDBDQUNOO1VBQUE7YUFBQTtVQUFBLHdCQUVNLDBDQUNOO2lCQUFBO2NBQUEsMERBQU07VUFBQSxvQkFBb0IsMENBQzFCO1VBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtrQkFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBbUQ7Y0FBQTtjQUFBO1lBQUE7WUFBbkQ7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7VUFBQSxvQ0FBQTtVQUFBO1lBQUE7VUFBQSwyQ0FBQTtVQUFBO1VBQUEscUVBQUE7VUFBQSw4REFBQTtVQUFBLGlFQUF5SjtpQkFBQSwyQkFDeko7VUFBQSxtRUFBQTtVQUFBO1VBQUEsZUFFTSwwQ0FDTjtVQUFBO2FBQUE7VUFBQSx3QkFFTSwwQ0FDTjtpQkFBQTtjQUFBLDBEQUFJO1VBQUEsWUFDSjtVQUFBO1FBQUE7UUFBQTtRQUErQztVQUFBO1VBQUE7UUFBQTtRQUEvQztNQUFBLGdDQUFxRjtNQUVoRix3Q0FDRDtNQUNOO1VBQUEsMERBQUk7VUFBQSxVQUNKO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBbUU7Y0FBQTtjQUFBO1lBQUE7WUFBbkU7VUFBQSxnQ0FBd0Y7TUFBZSx1Q0FDakc7OztRQXRCeUU7UUFBMUI7UUFBbkQsWUFBNkUsV0FBMUIsVUFBbkQ7UUFDZ0M7UUFBaEMsWUFBZ0MsVUFBaEM7UUFHZ0M7UUFBaEMsWUFBZ0MsVUFBaEM7UUFJNkU7UUFBMUI7UUFBbkQsWUFBNkUsV0FBMUIsVUFBbkQ7UUFDZ0M7UUFBaEMsWUFBZ0MsVUFBaEM7UUFHZ0M7UUFBaEMsWUFBZ0MsVUFBaEM7OztRQWpCSDtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFdBQUEscUVBQUE7UUFLNEY7UUFBbUI7UUFBNUc7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQSxZQUF5RixVQUFtQixVQUE1RztZQUFBLGdDQUFBO1FBUXdGO1FBQWlCO1FBQXpHO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUEsWUFBd0YsV0FBaUIsV0FBekc7WUFBQSxnQ0FBQTtRQVF1QjtRQUF2QixZQUF1QixVQUF2Qjs7OztvQkNyQkg7TUFBQTtxQ0FBQSxVQUFBO01BQUE7O0lBQUE7Ozs7OyJ9
