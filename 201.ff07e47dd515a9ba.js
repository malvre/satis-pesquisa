"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[201],{201:(D,u,t)=>{t.r(u),t.d(u,{JustificativaPage:()=>p});var c=t(467),f=t(177),a=t(3953),l=t(4341),g=t(2063),n=t(6762),E=t(8982),v=t(3207),P=t(6156),m=t(7291),M=t(4099);function O(s,r){if(1&s&&(a.j41(0,"ion-item")(1,"ion-radio",6),a.EFF(2),a.k0s()()),2&s){const o=r.$implicit;a.R7$(),a.Y8G("value",o.codigo),a.R7$(),a.JRh(o.descricao)}}let p=(()=>{var s;class r{constructor(){this.satisfacaoService=(0,a.WQX)(P.y),this.storageService=(0,a.WQX)(m.n),this.router=(0,a.WQX)(g.Ix),this.pesquisaSatisfacao=[],this.itemSelecionado=0,this.isOnline=!1}ngOnInit(){var i=this;return(0,c.A)(function*(){i.loadData(),(0,M.X)().subscribe(e=>{i.isOnline=e})})()}loadData(){var i=this;return(0,c.A)(function*(){const e=yield(0,v.s)(i.satisfacaoService.lista());e&&(i.pesquisaSatisfacao=e)})()}btnEnviar(){var i=this;return(0,c.A)(function*(){const e=yield i.storageService.get("unidade_selecionada"),_={data:(0,E.GP)(new Date,"yyyy-MM-dd HH:mm:ss"),unidade:e.id,voto:1,justificativa:i.itemSelecionado};i.isOnline?yield(0,v.s)(i.satisfacaoService.enviarVoto(_)):yield i.storageService.saveVote(_),yield i.router.navigate(["/agradecimento"],{state:{voto:_.voto}})})()}}return(s=r).\u0275fac=function(i){return new(i||s)},s.\u0275cmp=a.VBU({type:s,selectors:[["app-justificativa"]],standalone:!0,features:[a.aNF],decls:12,vars:1,consts:[[1,"header"],["src","/assets/logo_satis.png"],[3,"ngModelChange","ngModel"],["lines","full"],[1,"ion-padding"],["expand","block",3,"click"],["justify","start","labelPlacement","end",3,"value"]],template:function(i,e){1&i&&(a.j41(0,"ion-content")(1,"div",0),a.nrm(2,"img",1),a.j41(3,"p"),a.EFF(4,"Pesquisa de satisfa\xe7\xe3o"),a.k0s()(),a.j41(5,"ion-radio-group",2),a.mxI("ngModelChange",function(d){return a.DH7(e.itemSelecionado,d)||(e.itemSelecionado=d),d}),a.j41(6,"ion-list",3),a.Z7z(7,O,3,2,"ion-item",null,a.Vm6),a.k0s()(),a.j41(9,"div",4)(10,"ion-button",5),a.bIt("click",function(){return e.btnEnviar()}),a.EFF(11,"Enviar"),a.k0s()()()),2&i&&(a.R7$(5),a.R50("ngModel",e.itemSelecionado),a.R7$(2),a.Dyx(e.pesquisaSatisfacao))},dependencies:[n.Jm,n.f0,n.KO,n.uz,n.nf,n.W9,f.MD,l.YN,l.BC,l.vS],styles:[".header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:24px;padding:1rem}.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:130%;font-weight:700}"]}),r})()}}]);