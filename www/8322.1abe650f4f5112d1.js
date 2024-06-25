"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8322],{8322:($,y,c)=>{c.r(y),c.d(y,{ApirestPageModule:()=>j});var m=c(177),A=c(4341),u=c(1075),I=c(2559),S=c(1413),b=c(9584),f=c(3294),e=c(4438),M=c(6354),T=c(1626);let R=(()=>{var n;class o{constructor(r){this.http=r,this.baseUrl="https://openlibrary.org"}searchBooks(r){return this.http.get(`${this.baseUrl}/search.json?q=${r}`).pipe((0,M.T)(a=>a))}}return(n=o).\u0275fac=function(r){return new(r||n)(e.KVO(T.Qq))},n.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),o})();var F=c(8324);function C(n,o){1&n&&e.nrm(0,"ion-spinner",4)}function d(n,o){if(1&n&&(e.j41(0,"div",5),e.EFF(1),e.k0s()),2&n){const l=e.XpG();e.R7$(),e.SpI(" ",l.errorMessage," ")}}function t(n,o){if(1&n&&(e.j41(0,"ion-thumbnail",9),e.nrm(1,"img",10),e.k0s()),2&n){const l=e.XpG().$implicit;e.R7$(),e.Y8G("src",l.coverUrl,e.B4B)}}function i(n,o){if(1&n){const l=e.RV6();e.j41(0,"ion-item"),e.DNE(1,t,2,1,"ion-thumbnail",7),e.j41(2,"ion-label")(3,"h2"),e.EFF(4),e.k0s(),e.j41(5,"p"),e.EFF(6),e.k0s()(),e.j41(7,"ion-button",8),e.bIt("click",function(){const a=e.eBV(l).$implicit,g=e.XpG(2);return e.Njj(g.pedirLibro(a))}),e.EFF(8,"Pedir"),e.k0s()()}if(2&n){const l=o.$implicit;e.R7$(),e.Y8G("ngIf",l.coverUrl),e.R7$(3),e.JRh(l.title),e.R7$(2),e.JRh(null==l.author_name?null:l.author_name.join(", "))}}function s(n,o){if(1&n&&(e.j41(0,"ion-list"),e.DNE(1,i,9,3,"ion-item",6),e.k0s()),2&n){const l=e.XpG();e.R7$(),e.Y8G("ngForOf",l.books)}}const p=[{path:"",component:(()=>{var n;class o{constructor(r,a){this.api=r,this.demandaService=a,this.books=[],this.query="",this.isLoading=!1,this.errorMessage="",this.searchSubject=new S.B}ngOnInit(){this.searchSubject.pipe((0,b.B)(300),(0,f.F)()).subscribe(r=>{this.isLoading=!0,this.errorMessage="",this.api.searchBooks(r).subscribe(a=>{this.books=a.docs.map(g=>({cover_i:g.cover_i,title:g.title,author_name:g.author_name,coverUrl:g.cover_i?`https://covers.openlibrary.org/b/id/${g.cover_i}-M.jpg`:null})),this.isLoading=!1},a=>{this.errorMessage=a,this.isLoading=!1})})}onSearchChange(r){this.searchSubject.next(r.target.value)}pedirLibro(r){this.demandaService.addDemanda(r.title,r.author_name.join(", ")).then(()=>{console.log("Libro pedido correctamente:",r.title)}).catch(a=>console.error("Error al pedir el libro",a))}}return(n=o).\u0275fac=function(r){return new(r||n)(e.rXU(R),e.rXU(F.u))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-apirest"]],decls:9,vars:4,consts:[[3,"ngModelChange","ionInput","ngModel"],["name","crescent",4,"ngIf"],["class","error-message",4,"ngIf"],[4,"ngIf"],["name","crescent"],[1,"error-message"],[4,"ngFor","ngForOf"],["slot","start",4,"ngIf"],[3,"click"],["slot","start"],["alt","Book Cover",3,"src"]],template:function(r,a){1&r&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Buscar Libros"),e.k0s()()(),e.j41(4,"ion-content")(5,"ion-searchbar",0),e.mxI("ngModelChange",function(v){return e.DH7(a.query,v)||(a.query=v),v}),e.bIt("ionInput",function(v){return a.onSearchChange(v)}),e.k0s(),e.DNE(6,C,1,0,"ion-spinner",1)(7,d,2,1,"div",2)(8,s,2,1,"ion-list",3),e.k0s()),2&r&&(e.R7$(5),e.R50("ngModel",a.query),e.R7$(),e.Y8G("ngIf",a.isLoading),e.R7$(),e.Y8G("ngIf",a.errorMessage),e.R7$(),e.Y8G("ngIf",!a.isLoading&&a.books.length))},dependencies:[m.Sq,m.bT,A.BC,A.vS,u.Jm,u.W9,u.eU,u.uz,u.he,u.nf,u.S1,u.w2,u.Zx,u.BC,u.ai,u.Gw]}),o})()}];let P=(()=>{var n;class o{}return(n=o).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[I.iI.forChild(p),I.iI]}),o})(),j=(()=>{var n;class o{}return(n=o).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[m.MD,A.YN,u.bv,P]}),o})()},9584:($,y,c)=>{c.d(y,{B:()=>C});var m=c(8359);class A extends m.yU{constructor(t,i){super()}schedule(t,i=0){return this}}const u={setInterval(d,t,...i){const{delegate:s}=u;return null!=s&&s.setInterval?s.setInterval(d,t,...i):setInterval(d,t,...i)},clearInterval(d){const{delegate:t}=u;return((null==t?void 0:t.clearInterval)||clearInterval)(d)},delegate:void 0};var I=c(7908);const b={now:()=>(b.delegate||Date).now(),delegate:void 0};class f{constructor(t,i=f.now){this.schedulerActionCtor=t,this.now=i}schedule(t,i=0,s){return new this.schedulerActionCtor(this,t).schedule(s,i)}}f.now=b.now;const M=new class e extends f{constructor(t,i=f.now){super(t,i),this.actions=[],this._active=!1}flush(t){const{actions:i}=this;if(this._active)return void i.push(t);let s;this._active=!0;do{if(s=t.execute(t.state,t.delay))break}while(t=i.shift());if(this._active=!1,s){for(;t=i.shift();)t.unsubscribe();throw s}}}(class S extends A{constructor(t,i){super(t,i),this.scheduler=t,this.work=i,this.pending=!1}schedule(t,i=0){var s;if(this.closed)return this;this.state=t;const h=this.id,p=this.scheduler;return null!=h&&(this.id=this.recycleAsyncId(p,h,i)),this.pending=!0,this.delay=i,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(p,this.id,i),this}requestAsyncId(t,i,s=0){return u.setInterval(t.flush.bind(t,this),s)}recycleAsyncId(t,i,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return i;null!=i&&u.clearInterval(i)}execute(t,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(t,i);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,i){let h,s=!1;try{this.work(t)}catch(p){s=!0,h=p||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),h}unsubscribe(){if(!this.closed){const{id:t,scheduler:i}=this,{actions:s}=i;this.work=this.state=this.scheduler=null,this.pending=!1,(0,I.o)(s,this),null!=t&&(this.id=this.recycleAsyncId(i,t,null)),this.delay=null,super.unsubscribe()}}});var R=c(9974),F=c(4360);function C(d,t=M){return(0,R.N)((i,s)=>{let h=null,p=null,P=null;const j=()=>{if(h){h.unsubscribe(),h=null;const o=p;p=null,s.next(o)}};function n(){const o=P+d,l=t.now();if(l<o)return h=this.schedule(void 0,o-l),void s.add(h);j()}i.subscribe((0,F._)(s,o=>{p=o,P=t.now(),h||(h=t.schedule(n,d),s.add(h))},()=>{j(),s.complete()},void 0,()=>{p=h=null}))})}}}]);