webpackJsonp([4],{170:function(l,n,t){"use strict";function o(l){return f._32(0,[(l()(),f._12(0,null,null,1,"ion-icon",[["role","img"]],[[2,"hide",null]],null,null,null,null)),f._11(147456,null,0,p.a,[h.a,f.m,f.J],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){var t=n.component;l(n,1,0,t.color,t.icon)},function(l,n){l(n,0,0,f._25(n,1)._hidden)})}function a(l){return f._32(0,[(l()(),f._12(0,null,null,2,"span",[["class","title"],["ion-text",""]],null,null,null,null,null)),f._11(16384,null,0,C.a,[h.a,f.m,f.J],{color:[0,"color"]},null),(l()(),f._31(null,["",""]))],function(l,n){l(n,1,0,n.component.color)},function(l,n){l(n,2,0,n.component.title)})}function u(l){return f._32(2,[(l()(),f._31(null,["\n    "])),(l()(),f._8(16777216,null,null,1,null,o)),f._11(16384,null,0,v.h,[f.W,f.R],{ngIf:[0,"ngIf"]},null),(l()(),f._31(null,["\n    "])),(l()(),f._8(16777216,null,null,1,null,a)),f._11(16384,null,0,v.h,[f.W,f.R],{ngIf:[0,"ngIf"]},null),(l()(),f._31(null,["\n    "])),(l()(),f._12(0,null,null,2,"ion-badge",[["mode","md"]],null,null,null,null,null)),f._11(16384,null,0,T.a,[h.a,f.m,f.J],{color:[0,"color"],mode:[1,"mode"]},null),(l()(),f._31(null,["",""])),(l()(),f._31(null,["\n    "])),(l()(),f._12(0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null)),(l()(),f._31(null,["\n  "]))],function(l,n){var t=n.component;l(n,2,0,!!t.icon),l(n,5,0,!!t.title);l(n,8,0,t.badgeColor,"md")},function(l,n){l(n,9,0,n.component.badge)})}function e(l){return I._32(0,[(l()(),I._12(0,[[3,0],["indicator",1]],null,0,"div",[],[[8,"className",0]],null,null,null,null))],null,function(l,n){var t=n.component;l(n,0,0,I._16(1,"indicator ","button-md-"+t.indicatorColor,""))})}function r(l){return I._32(0,[(l()(),I._12(0,null,null,1,"super-tab-button",[["role","button"],["tappable",""]],[[2,"selected",null],[2,"title-only",null],[2,"icon-only",null],[2,"title-and-icon",null]],[[null,"select"],[null,"click"]],function(l,n,t){var o=!0,a=l.component;return"click"===n&&(o=!1!==I._25(l,1).onClick()&&o),"select"===n&&(o=!1!==(a.selectedTab!==l.context.index&&a.onTabSelect(l.context.index))&&o),o},u,y)),I._11(49152,[[1,4]],0,w.a,[I.m],{selected:[0,"selected"],title:[1,"title"],icon:[2,"icon"],badge:[3,"badge"],badgeColor:[4,"badgeColor"],color:[5,"color"]},{select:"select"})],function(l,n){var t=n.component;l(n,1,0,t.selectedTab===n.context.index,n.context.$implicit.title,n.context.$implicit.icon,n.context.$implicit.badge,t.badgeColor,t.tabsColor)},function(l,n){l(n,0,0,I._25(n,1).selected,!!I._25(n,1).title&&!I._25(n,1).icon,!I._25(n,1).title&&!!I._25(n,1).icon,!!I._25(n,1).title&&!!I._25(n,1).icon)})}function i(l){return I._32(0,[(l()(),I._12(0,[[3,0],["indicator",1]],null,0,"div",[],[[8,"className",0]],null,null,null,null))],null,function(l,n){var t=n.component;l(n,0,0,I._16(1,"indicator ","button-md-"+t.indicatorColor,""))})}function c(l){return I._32(0,[I._29(671088640,1,{tabButtons:1}),I._29(402653184,2,{tabButtonsContainer:0}),I._29(671088640,3,{indicator:0}),I._29(402653184,4,{tabButtonsBar:0}),(l()(),I._31(null,["\n    "])),(l()(),I._12(0,null,null,17,"ion-toolbar",[["class","toolbar"],["mode","md"]],[[2,"scroll-tabs",null],[2,"statusbar-padding",null]],null,null,x.b,x.a)),I._11(49152,null,0,B.a,[S.a,I.m,I.J],{color:[0,"color"],mode:[1,"mode"]},null),(l()(),I._31(3,["\n      "])),(l()(),I._12(0,[[2,0],["tabButtonsContainer",1]],3,13,"div",[["class","tab-buttons-container"]],null,null,null,null,null)),(l()(),I._31(null,["\n        "])),(l()(),I._8(16777216,null,null,1,null,e)),I._11(16384,null,0,J.h,[I.W,I.R],{ngIf:[0,"ngIf"]},null),(l()(),I._31(null,["\n        "])),(l()(),I._12(0,[[4,0],["tabButtons",1]],null,4,"div",[["class","tab-buttons"]],null,null,null,null,null)),(l()(),I._31(null,["\n          "])),(l()(),I._8(16777216,null,null,1,null,r)),I._11(802816,null,0,J.g,[I.W,I.R,I.v],{ngForOf:[0,"ngForOf"]},null),(l()(),I._31(null,["\n        "])),(l()(),I._31(null,["\n        "])),(l()(),I._8(16777216,null,null,1,null,i)),I._11(16384,null,0,J.h,[I.W,I.R],{ngIf:[0,"ngIf"]},null),(l()(),I._31(null,["\n      "])),(l()(),I._31(3,["\n    "])),(l()(),I._31(null,["\n  "]))],function(l,n){var t=n.component;l(n,6,0,t.color,"md"),l(n,11,0,"bottom"===t.tabsPlacement),l(n,16,0,t.tabs),l(n,20,0,"top"===t.tabsPlacement)},function(l,n){l(n,5,0,n.component.scrollTabs,I._25(n,6)._sbPadding)})}function s(l){return L._32(0,[L._29(402653184,1,{container:0}),(l()(),L._12(0,[[1,0],["container",1]],null,1,"div",[],null,null,null,null,null)),L._24(null,0)],null,null)}function _(l){return z._32(0,[z._29(402653184,1,{toolbar:0}),z._29(402653184,2,{tabsContainer:0}),(l()(),z._31(null,["\n    "])),(l()(),z._12(0,null,null,1,"super-tabs-toolbar",[],[[8,"hidden",0]],[[null,"tabSelect"]],function(l,n,t){var o=!0,a=l.component;return"tabSelect"===n&&(o=!1!==a.onToolbarTabSelect(t)&&o),o},c,E)),z._11(4374528,[[1,4]],0,W.a,[z.m,V.a,z.K,$.a],{color:[0,"color"],tabsColor:[1,"tabsColor"],badgeColor:[2,"badgeColor"],scrollTabs:[3,"scrollTabs"],indicatorColor:[4,"indicatorColor"],selectedTab:[5,"selectedTab"],config:[6,"config"],tabsPlacement:[7,"tabsPlacement"]},{tabSelect:"tabSelect"}),(l()(),z._31(null,["\n    "])),(l()(),z._12(0,null,null,4,"super-tabs-container",[],null,[[null,"tabSelect"],[null,"onDrag"]],function(l,n,t){var o=!0,a=l.component;return"tabSelect"===n&&(o=!1!==a.onContainerTabSelect(t)&&o),"onDrag"===n&&(o=!1!==a.onDrag(t)&&o),o},s,j)),z._11(4374528,[[2,4]],0,Y.a,[z.m,z.K,V.a,z.C],{config:[0,"config"],tabsCount:[1,"tabsCount"],selectedTabIndex:[2,"selectedTabIndex"]},{tabSelect:"tabSelect",onDrag:"onDrag"}),(l()(),z._31(0,["\n      "])),z._24(0,0),(l()(),z._31(0,["\n    "])),(l()(),z._31(null,["\n  "]))],function(l,n){var t=n.component;l(n,4,0,t.toolbarBackground,t.toolbarColor,t.badgeColor,t.scrollTabs,t.indicatorColor,t.selectedTabIndex,t.config,t.tabsPlacement),l(n,7,0,t.config,t._tabs.length,t.selectedTabIndex)},function(l,n){l(n,3,0,!n.component._isToolbarVisible)})}function b(l){return nl._32(0,[nl._29(402653184,1,{_vp:0}),(l()(),nl._12(16777216,[[1,3],["viewport",1]],null,0,"div",[],null,null,null,null,null)),(l()(),nl._12(0,null,null,0,"div",[["class","nav-decor"]],null,null,null,null,null))],null,null)}function d(l){return dl._32(0,[(l()(),dl._12(0,null,null,10,"ion-header",[["no-border",""],["no-shadow",""]],null,null,null,null,null)),dl._11(16384,null,0,gl.a,[ml.a,dl.m,dl.J,[2,fl.a]],null,null),(l()(),dl._31(null,["\n  "])),(l()(),dl._12(0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,pl.b,pl.a)),dl._11(49152,null,0,hl.a,[Cl.a,[2,fl.a],[2,vl.a],ml.a,dl.m,dl.J],{color:[0,"color"]},null),(l()(),dl._31(3,["\n    "])),(l()(),dl._12(0,null,3,2,"ion-title",[],null,null,null,Tl.b,Tl.a)),dl._11(49152,null,0,kl.a,[ml.a,dl.m,dl.J,[2,Pl.a],[2,hl.a]],null,null),(l()(),dl._31(0,["",""])),(l()(),dl._31(3,["\n\n  "])),(l()(),dl._31(null,["\n"])),(l()(),dl._31(null,["\n"])),(l()(),dl._12(0,null,null,14,"ion-content",[["no-bounce",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,yl.b,yl.a)),dl._11(4374528,null,0,Il.a,[ml.a,wl.a,xl.a,dl.m,dl.J,Cl.a,Bl.a,dl.C,[2,fl.a],[2,vl.a]],null,null),(l()(),dl._31(1,["\n  "])),(l()(),dl._12(0,null,1,10,"super-tabs",[["badgeColor","light"],["id","mainTabs"],["indicatorColor","light"],["selectedTabIndex","0"],["toolbarBackground","primary"],["toolbarColor","light"]],null,[[null,"tabSelect"]],function(l,n,t){var o=!0,a=l.component;return"tabSelect"===n&&(o=!1!==a.onTabSelect(t)&&o),o},_,ll)),dl._11(5488640,null,0,Sl.a,[[2,vl.a],[2,fl.a],Cl.a,dl.m,dl.K,Jl.a,Ml.a,xl.a],{toolbarBackground:[0,"toolbarBackground"],toolbarColor:[1,"toolbarColor"],indicatorColor:[2,"indicatorColor"],badgeColor:[3,"badgeColor"],config:[4,"config"],id:[5,"id"],selectedTabIndex:[6,"selectedTabIndex"]},{tabSelect:"tabSelect"}),dl._27(["sideMenu"]),dl._28(6144,null,Ol.a,null,[Sl.a]),(l()(),dl._31(0,["\n    "])),(l()(),dl._12(0,null,0,1,"super-tab",[["id","editorTab"],["title","Editor"]],null,null,null,b,bl)),dl._11(4440064,null,0,Dl.a,[Sl.a,Cl.a,ml.a,wl.a,dl.m,dl.C,dl.J,dl.l,Fl.h,El.a,dl.n,[2,Ml.a],xl.a,dl.i],{title:[0,"title"],root:[1,"root"],rootParams:[2,"rootParams"],tabId:[3,"tabId"]},null),(l()(),dl._31(0,["\n    "])),(l()(),dl._12(0,null,0,1,"super-tab",[["id","previewTab"],["title","Preview"]],null,null,null,b,bl)),dl._11(4440064,null,0,Dl.a,[Sl.a,Cl.a,ml.a,wl.a,dl.m,dl.C,dl.J,dl.l,Fl.h,El.a,dl.n,[2,Ml.a],xl.a,dl.i],{title:[0,"title"],root:[1,"root"],rootParams:[2,"rootParams"],tabId:[3,"tabId"]},null),(l()(),dl._31(0,["\n  "])),(l()(),dl._31(1,["\n"])),(l()(),dl._31(null,["\n"]))],function(l,n){var t=n.component;l(n,4,0,"primary");l(n,16,0,"primary","light","light","light",l(n,17,0,"left"),"mainTabs","0");l(n,21,0,"Editor",t.page1,t.note,"editorTab");l(n,24,0,"Preview",t.page2,t.note,"previewTab")},function(l,n){var t=n.component;l(n,3,0,dl._25(n,4)._hidden,dl._25(n,4)._sbPadding),l(n,8,0,null==t.note?null:t.note.name),l(n,12,0,dl._25(n,13).statusbarPadding,dl._25(n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});t(76),t(0),t(19);var g=function(){function l(l,n,t){this.navCtrl=l,this.navParams=n,this.data=t,this.page2="CalculatorPage",this.page1="EditorPage",this.note=this.navParams.data,this.data.tempEditor=this.note.note,this.data.tempViewer=this.data.tempEditor.split("\n")}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad CalculatorTabsPage")},l.prototype.onTabSelect=function(l){},l.prototype.onChangeNote=function(){},l}(),m=(t(0),t(19),t(126),function(){return function(){}}()),f=t(0),p=t(32),h=t(1),C=t(90),v=t(12),T=t(86),k=t(84),P=[],y=f._10({encapsulation:2,styles:P,data:{}}),I=(f._9("super-tab-button",k.a,function(l){return f._32(0,[(l()(),f._12(0,null,null,1,"super-tab-button",[["role","button"],["tappable",""]],[[2,"selected",null],[2,"title-only",null],[2,"icon-only",null],[2,"title-and-icon",null]],[[null,"click"]],function(l,n,t){var o=!0;return"click"===n&&(o=!1!==f._25(l,1).onClick()&&o),o},u,y)),f._11(49152,null,0,k.a,[f.m],null,null)],null,function(l,n){l(n,0,0,f._25(n,1).selected,!!f._25(n,1).title&&!f._25(n,1).icon,!f._25(n,1).title&&!!f._25(n,1).icon,!!f._25(n,1).title&&!!f._25(n,1).icon)})},{selected:"selected",title:"title",icon:"icon",badge:"badge",badgeColor:"badgeColor",color:"color"},{select:"select"},[]),t(0)),w=t(84),x=t(124),B=t(23),S=t(1),J=t(12),M=t(83),O=t(3),D=t(7),F=[],E=I._10({encapsulation:2,styles:F,data:{}}),L=(I._9("super-tabs-toolbar",M.a,function(l){return I._32(0,[(l()(),I._12(0,null,null,1,"super-tabs-toolbar",[],null,null,null,c,E)),I._11(4374528,null,0,M.a,[I.m,O.a,I.K,D.a],null,null)],null,null)},{color:"color",tabsColor:"tabsColor",badgeColor:"badgeColor",scrollTabs:"scrollTabs",indicatorColor:"indicatorColor",selectedTab:"selectedTab",config:"config",tabsPlacement:"tabsPlacement"},{tabSelect:"tabSelect"},[]),t(0)),N=t(85),K=t(3),R=[],j=L._10({encapsulation:2,styles:R,data:{}}),z=(L._9("super-tabs-container",N.a,function(l){return L._32(0,[(l()(),L._12(0,null,null,1,"super-tabs-container",[],null,null,null,s,j)),L._11(4374528,null,0,N.a,[L.m,L.K,K.a,L.C],null,null)],null,null)},{config:"config",tabsCount:"tabsCount",selectedTabIndex:"selectedTabIndex"},{tabSelect:"tabSelect",onDrag:"onDrag"},["*"]),t(0)),A=t(53),W=t(83),V=t(3),$=t(7),Y=t(85),Z=t(13),q=t(9),G=t(5),H=t(43),Q=t(15),U=t(25),X=[],ll=z._10({encapsulation:2,styles:X,data:{}}),nl=(z._9("super-tabs",A.a,function(l){return z._32(0,[(l()(),z._12(0,null,null,2,"super-tabs",[],null,null,null,_,ll)),z._11(5488640,null,0,A.a,[[2,Z.a],[2,q.a],G.a,z.m,z.K,H.a,Q.a,$.a],null,null),z._28(6144,null,U.a,null,[A.a])],function(l,n){l(n,1,0)},null)},{toolbarBackground:"toolbarBackground",toolbarColor:"toolbarColor",indicatorColor:"indicatorColor",badgeColor:"badgeColor",config:"config",id:"id",name:"name",height:"height",selectedTabIndex:"selectedTabIndex",scrollTabs:"scrollTabs",tabsPlacement:"tabsPlacement"},{tabSelect:"tabSelect"},["*"]),t(0)),tl=t(82),ol=t(53),al=t(5),ul=t(1),el=t(3),rl=t(8),il=t(16),cl=t(15),sl=t(7),_l=[],bl=nl._10({encapsulation:2,styles:_l,data:{}}),dl=(nl._9("super-tab",tl.a,function(l){return nl._32(0,[(l()(),nl._12(0,null,null,1,"super-tab",[],null,null,null,b,bl)),nl._11(4440064,null,0,tl.a,[ol.a,al.a,ul.a,el.a,nl.m,nl.C,nl.J,nl.l,rl.h,il.a,nl.n,[2,cl.a],sl.a,nl.i],null,null)],function(l,n){l(n,1,0)},null)},{color:"color",mode:"mode",swipeBackEnabled:"swipeBackEnabled",title:"title",icon:"icon",root:"root",rootParams:"rootParams",tabId:"id",badge:"badge"},{},[]),t(0)),gl=t(52),ml=t(1),fl=t(9),pl=t(205),hl=t(20),Cl=t(5),vl=t(13),Tl=t(123),kl=t(39),Pl=t(23),yl=t(122),Il=t(22),wl=t(3),xl=t(7),Bl=t(14),Sl=t(53),Jl=t(43),Ml=t(15),Ol=t(25),Dl=t(82),Fl=t(8),El=t(16),Ll=t(33),Nl=t(76),Kl=[],Rl=dl._10({encapsulation:2,styles:Kl,data:{}}),jl=dl._9("page-calculator-tabs",g,function(l){return dl._32(0,[(l()(),dl._12(0,null,null,1,"page-calculator-tabs",[],null,null,null,d,Rl)),dl._11(49152,null,0,g,[vl.a,Ll.a,Nl.a],null,null)],null,null)},{},{},[]);t.d(n,"CalculatorTabsPageModuleNgFactory",function(){return Ql});var zl=t(0),Al=t(12),Wl=t(38),Vl=t(77),$l=t(91),Yl=t(120),Zl=t(121),ql=t(78),Gl=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var t in n)n.hasOwnProperty(t)&&(l[t]=n[t])};return function(n,t){function o(){this.constructor=n}l(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),Hl=function(l){function n(n){return l.call(this,n,[Yl.a,Zl.a,jl],[])||this}return Gl(n,l),Object.defineProperty(n.prototype,"_NgLocalization_8",{get:function(){return null==this.__NgLocalization_8&&(this.__NgLocalization_8=new Al.i(this.parent.get(zl.x))),this.__NgLocalization_8},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_9",{get:function(){return null==this.__ɵi_9&&(this.__ɵi_9=new Wl.o),this.__ɵi_9},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_10",{get:function(){return null==this.__FormBuilder_10&&(this.__FormBuilder_10=new Wl.d),this.__FormBuilder_10},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new Al.b,this._ɵba_1=new Wl.m,this._FormsModule_2=new Wl.e,this._ReactiveFormsModule_3=new Wl.l,this._IonicModule_4=new Vl.a,this._IonicPageModule_5=new Vl.b,this._SuperTabsModule_6=new $l.a,this._CalculatorTabsPageModule_7=new m,this._LAZY_LOADED_TOKEN_11=g,this._CalculatorTabsPageModule_7},n.prototype.getInternal=function(l,n){return l===Al.b?this._CommonModule_0:l===Wl.m?this._ɵba_1:l===Wl.e?this._FormsModule_2:l===Wl.l?this._ReactiveFormsModule_3:l===Vl.a?this._IonicModule_4:l===Vl.b?this._IonicPageModule_5:l===$l.a?this._SuperTabsModule_6:l===m?this._CalculatorTabsPageModule_7:l===Al.j?this._NgLocalization_8:l===Wl.o?this._ɵi_9:l===Wl.d?this._FormBuilder_10:l===ql.a?this._LAZY_LOADED_TOKEN_11:n},n.prototype.destroyInternal=function(){},n}(zl._7),Ql=new zl.z(Hl,m)},205:function(l,n,t){"use strict";function o(l){return a._32(0,[(l()(),a._12(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a._11(278528,null,0,u.f,[a.v,a.w,a.m,a.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._12(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var o=!0,a=l.component;return"click"===n&&(o=!1!==a.backButtonClick(t)&&o),o},r.b,r.a)),a._11(278528,null,0,u.f,[a.v,a.w,a.m,a.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._11(1097728,null,0,i.a,[[8,"bar-button"],c.a,a.m,a.J],null,null),(l()(),a._12(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a._11(278528,null,0,u.f,[a.v,a.w,a.m,a.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._11(147456,null,0,s.a,[c.a,a.m,a.J],{name:[0,"name"]},null),(l()(),a._12(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a._11(278528,null,0,u.f,[a.v,a.w,a.m,a.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._31(null,["",""])),a._24(null,0),a._24(null,1),a._24(null,2),(l()(),a._12(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a._11(278528,null,0,u.f,[a.v,a.w,a.m,a.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._24(null,3)],function(l,n){var t=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+t._mode);l(n,3,0,"back-button","back-button-"+t._mode);l(n,6,0,"back-button-icon","back-button-icon-"+t._mode),l(n,7,0,t._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+t._mode);l(n,15,0,"toolbar-content","toolbar-content-"+t._mode)},function(l,n){var t=n.component;l(n,2,0,t._hideBb),l(n,5,0,a._25(n,7)._hidden),l(n,10,0,t._backText)})}t.d(n,"a",function(){return m}),n.b=o;var a=t(0),u=t(12),e=t(20),r=t(119),i=t(21),c=t(1),s=t(32),_=t(5),b=t(9),d=t(13),g=[],m=a._10({encapsulation:2,styles:g,data:{}});a._9("ion-navbar",e.a,function(l){return a._32(0,[(l()(),a._12(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,o,m)),a._11(49152,null,0,e.a,[_.a,[2,b.a],[2,d.a],c.a,a.m,a.J],null,null)],null,function(l,n){l(n,0,0,a._25(n,1)._hidden,a._25(n,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])}});