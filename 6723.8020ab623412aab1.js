"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6723],{6723:(U,u,i)=>{i.r(u),i.d(u,{SelecionaUnidadePage:()=>C});var c=i(467),v=i(177),e=i(3953),l=i(4341),S=i(2063),o=i(6762),f=i(3207),h=i(7291),m=i(7673);let g=(()=>{var a;class r{constructor(){}lista(){return(0,m.of)([{id:1,nome:"Hyva"},{id:2,nome:"Hyva Guindastes"}])}}return(a=r).\u0275fac=function(n){return new(n||a)},a.\u0275prov=e.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),r})(),y=(()=>{var a;class r{transform(n,t){return n?t?(t=t.toLowerCase(),n.filter(d=>d.nome.toLowerCase().includes(t))):n:[]}}return(a=r).\u0275fac=function(n){return new(n||a)},a.\u0275pipe=e.EJ8({name:"search",type:a,pure:!0,standalone:!0}),r})();function P(a,r){if(1&a){const s=e.RV6();e.j41(0,"ion-item",3),e.bIt("click",function(){const t=e.eBV(s).$implicit,d=e.XpG();return e.Njj(d.btnSeleciona(t))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s()()}if(2&a){const s=r.$implicit;e.R7$(2),e.JRh(s.nome)}}let C=(()=>{var a;class r{constructor(){this.alert=(0,e.WQX)(o.hG),this.storageService=(0,e.WQX)(h.n),this.router=(0,e.WQX)(S.Ix),this.unidadeService=(0,e.WQX)(g),this.unidades=[],this.busca=""}ngOnInit(){var n=this;return(0,c.A)(function*(){yield n.loadData()})()}loadData(){var n=this;return(0,c.A)(function*(){const t=yield(0,f.s)(n.unidadeService.lista());t&&(n.unidades=t)})()}btnSeleciona(n){var t=this;return(0,c.A)(function*(){yield(yield t.alert.create({header:"Confirma a sele\xe7\xe3o?",message:`Confirma a sele\xe7\xe3o do estabelecimento ${n.nome}?`,buttons:[{text:"Cancelar",role:"cancel"},{text:"Confirmar",handler:()=>{console.log(n),t.storageService.set("unidade_selecionada",n),t.router.navigate(["/coleta"])}}]})).present()})()}}return(a=r).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.VBU({type:a,selectors:[["app-seleciona-unidade"]],standalone:!0,features:[e.aNF],decls:10,vars:4,consts:[["placeholder","Busca",3,"ngModelChange","ngModel"],["lines","full"],["detail","","button",""],["detail","","button","",3,"click"]],template:function(n,t){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Selecione o estabelecimento"),e.k0s()()(),e.j41(4,"ion-content")(5,"ion-searchbar",0),e.mxI("ngModelChange",function(p){return e.DH7(t.busca,p)||(t.busca=p),p}),e.k0s(),e.j41(6,"ion-list",1),e.Z7z(7,P,3,1,"ion-item",2,e.Vm6),e.nI1(9,"search"),e.k0s()()),2&n&&(e.R7$(5),e.R50("ngModel",t.busca),e.R7$(2),e.Dyx(e.i5U(9,1,t.unidades,t.busca)))},dependencies:[o.he,o.uz,o.nf,o.S1,o.W9,o.eU,o.BC,o.ai,v.MD,l.YN,l.BC,l.vS,y]}),r})()},3207:(U,u,i)=>{i.d(u,{s:()=>v});var c=i(9350);function v(e,l){const S="object"==typeof l;return new Promise((o,f)=>{let m,h=!1;e.subscribe({next:g=>{m=g,h=!0},error:f,complete:()=>{h?o(m):S?o(l.defaultValue):f(new c.G)}})})}}}]);