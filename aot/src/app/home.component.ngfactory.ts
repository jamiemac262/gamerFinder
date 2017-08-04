/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './home.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '../../../src/app/home.component';
import * as i4 from '../../../src/app/game/game.service';
import * as i5 from '@angular/http';
import * as i6 from '@angular/router';
const styles_HomePageComponent:any[] = [i0.styles];
export const RenderType_HomePageComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_HomePageComponent,data:{}});
function View_HomePageComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'p',[['style',
      'text-align: center']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['',' people want to play']))],
      (null as any),(_ck,_v) => {
        const currVal_0:any = (<any>_v.parent).context.$implicit.count;
        _ck(_v,1,0,currVal_0);
      });
}
function View_HomePageComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'p',[['style',
      'text-align: center']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['1 person wants to play']))],
      (null as any),(null as any));
}
function View_HomePageComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),15,'div',[['class',
      'col-md-4']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n					'])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),12,'div',[['class','jumbotron']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.gameClicked(_v.context.$implicit.id)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n						'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),0,'img',[['style','width: 100%; height: auto;']],
          [[8,'src',4]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n						'])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'h3',[['style','text-align: center']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['',''])),(_l()(),i1.ɵted((null as any),['\n						'])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_HomePageComponent_2)),i1.ɵdid(16384,
          (null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n						'])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_HomePageComponent_3)),i1.ɵdid(16384,
          (null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n					'])),(_l()(),i1.ɵted((null as any),
          ['\n				']))],(_ck,_v) => {
    const currVal_2:any = (_v.context.$implicit.count > 1);
    _ck(_v,10,0,currVal_2);
    const currVal_3:any = (_v.context.$implicit.count == 1);
    _ck(_v,13,0,currVal_3);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵinlineInterpolate(1,'http://cdn.edgecast.steamstatic.com/steam/apps/',
        _v.context.$implicit.steamID,'/header.jpg');
    _ck(_v,4,0,currVal_0);
    const currVal_1:any = _v.context.$implicit.name;
    _ck(_v,7,0,currVal_1);
  });
}
export function View_HomePageComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),17,'div',[['class',
      'container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),13,'div',[['class','row']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),10,'div',[['class','col-md-12']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n			'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Most Requested Games'])),(_l()(),i1.ɵted((null as any),
          ['\n			'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'div',[['class',
          'row flex-row']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['\n				'])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_HomePageComponent_1)),i1.ɵdid(802816,
          (null as any),0,i2.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n			'])),
      (_l()(),i1.ɵted((null as any),['\n\n		'])),(_l()(),i1.ɵted((null as any),['\n\n    '])),
      (_l()(),i1.ɵted((null as any),[' '])),(_l()(),i1.ɵted((null as any),[' ']))],
      (_ck,_v) => {
        var _co:i3.HomePageComponent = _v.component;
        const currVal_0:any = _co.games;
        _ck(_v,12,0,currVal_0);
      },(null as any));
}
export function View_HomePageComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'home-page',([] as any[]),
      (null as any),(null as any),(null as any),View_HomePageComponent_0,RenderType_HomePageComponent)),
      i1.ɵprd(512,(null as any),i4.GameService,i4.GameService,[i5.Http]),i1.ɵdid(114688,
          (null as any),0,i3.HomePageComponent,[i5.Http,i4.GameService,i6.Router],
          (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,2,0);
  },(null as any));
}
export const HomePageComponentNgFactory:i1.ComponentFactory<i3.HomePageComponent> = i1.ɵccf('home-page',
    i3.HomePageComponent,View_HomePageComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvamFtaWUvRGVza3RvcC9wbGF5L3NyYy9hcHAvaG9tZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvamFtaWUvRGVza3RvcC9wbGF5L3NyYy9hcHAvaG9tZS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9qYW1pZS9EZXNrdG9wL3BsYXkvc3JjL2FwcC9ob21lLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvamFtaWUvRGVza3RvcC9wbGF5L3NyYy9hcHAvaG9tZS5jb21wb25lbnQudHMuSG9tZVBhZ2VDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuXHRcdFx0PGgzPk1vc3QgUmVxdWVzdGVkIEdhbWVzPC9oMz5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgZmxleC1yb3dcIj5cblx0XHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgZ2FtZSBvZiBnYW1lc1wiIGNsYXNzPVwiY29sLW1kLTRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwianVtYm90cm9uXCIgKGNsaWNrKT1cImdhbWVDbGlja2VkKGdhbWUuaWQpXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImh0dHA6Ly9jZG4uZWRnZWNhc3Quc3RlYW1zdGF0aWMuY29tL3N0ZWFtL2FwcHMve3tnYW1lLnN0ZWFtSUR9fS9oZWFkZXIuanBnXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvO1wiLz5cblx0XHRcdFx0XHRcdDxoMyBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPnt7Z2FtZS5uYW1lfX08L2gzPlxuXHRcdFx0XHRcdFx0PHAgKm5nSWY9XCJnYW1lLmNvdW50ID4gMVwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+e3tnYW1lLmNvdW50fX0gcGVvcGxlIHdhbnQgdG8gcGxheTwvcD5cblx0XHRcdFx0XHRcdDxwICpuZ0lmPVwiZ2FtZS5jb3VudCA9PSAxXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj4xIHBlcnNvbiB3YW50cyB0byBwbGF5PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9kaXY+XG5cbiAgICA8L2Rpdj4gPCEtLSAvY29udGFpbmVyIC0tPiA8IS0tIC9jb250YWluZXIgLS0+IiwiPGhvbWUtcGFnZT48L2hvbWUtcGFnZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1NNO01BQUE7TUFBQSxnQkFBcUQ7O1FBQUE7UUFBQTs7OztvQkFDckQ7TUFBQTtNQUFBLGdCQUFzRDs7OztvQkFMeEQ7TUFBQTtNQUFpRCw0Q0FDaEQ7VUFBQTtjQUFBO1lBQUE7WUFBQTtZQUF1QjtjQUFBO2NBQUE7WUFBQTtZQUF2QjtVQUFBLGdDQUFzRDtNQUNyRDtVQUFBO01BQTBILDZDQUMxSDtVQUFBO1VBQUEsNENBQStCO1VBQUEsVUFBa0IsNkNBQ2pEO1VBQUEsOEVBQUE7VUFBQTtVQUFBLGVBQTJGLDZDQUMzRjtVQUFBLDhFQUFBO1VBQUE7VUFBQSxlQUFnRiw0Q0FDM0U7VUFBQTtJQUZGO0lBQUgsWUFBRyxTQUFIO0lBQ0c7SUFBSCxZQUFHLFNBQUg7O0lBSEs7UUFBQTtJQUFMLFdBQUssU0FBTDtJQUMrQjtJQUFBOzs7O29CQVJyQztNQUFBO01BQXVCLDZDQUNqQjtVQUFBO1VBQUEsOEJBQWlCLHlDQUNyQjtpQkFBQTtjQUFBLDBEQUF1QjtVQUFBLFlBQ3RCO1VBQUE7TUFBSSx5REFBeUI7VUFBQSxZQUM3QjtVQUFBO1VBQUEsZ0JBQTBCLDJDQUN6QjtVQUFBLDhFQUFBO1VBQUE7VUFBQSx1Q0FPTTtNQUNELDJDQUVEO01BRUUsc0NBQW9COzs7UUFackI7UUFBTCxZQUFLLFNBQUw7Ozs7b0JDTEo7TUFBQTthQUFBLG1FQUFBO1VBQUE7VUFBQTtJQUFBOzs7OyJ9
