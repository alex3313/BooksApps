"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1153],{1153:(P,u,n)=>{n.r(u),n.d(u,{CatalogoPageModule:()=>f});var s=n(177),d=n(4341),r=n(1075),g=n(2559),o=n(4438),C=n(6612),p=n(4279);function v(t,i){if(1&t){const e=o.RV6();o.j41(0,"ion-item")(1,"ion-label")(2,"h2"),o.EFF(3),o.k0s(),o.j41(4,"p"),o.EFF(5),o.k0s(),o.j41(6,"p"),o.EFF(7),o.nI1(8,"currency"),o.k0s()(),o.j41(9,"ion-button",4),o.bIt("click",function(){const c=o.eBV(e).$implicit,l=o.XpG();return o.Njj(l.agregarAlCarrito(c))}),o.EFF(10,"Agregar"),o.k0s()()}if(2&t){const e=i.$implicit;o.R7$(3),o.JRh(e.nombre),o.R7$(2),o.JRh(e.autor),o.R7$(2),o.JRh(o.bMT(8,3,e.precio))}}const m=[{path:"",component:(()=>{var t;class i{constructor(a,c,l){this.carritoService=a,this.dbService=c,this.router=l,this.productos=[]}ngOnInit(){this.cargarProductos()}cargarProductos(){this.dbService.dbState().subscribe(a=>{a&&this.dbService.fetchProductos().subscribe(c=>{this.productos=c})})}agregarAlCarrito(a){this.carritoService.agregarAlCarrito(a),this.dbService.presentToast("Producto agregado al carrito")}irACarrito(){this.router.navigate(["/cart"])}volverInicio(){this.router.navigate(["/inicio"])}}return(t=i).\u0275fac=function(a){return new(a||t)(o.rXU(C.a),o.rXU(p.B),o.rXU(g.Ix))},t.\u0275cmp=o.VBU({type:t,selectors:[["app-catalogo"]],decls:11,vars:1,consts:[[3,"click"],["name","cart-sharp"],[4,"ngFor","ngForOf"],["expand","full",3,"click"],["slot","end",3,"click"]],template:function(a,c){1&a&&(o.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),o.EFF(3,"Cat\xe1logo"),o.k0s(),o.j41(4,"ion-button",0),o.bIt("click",function(){return c.irACarrito()}),o.nrm(5,"ion-icon",1),o.k0s()()(),o.j41(6,"ion-content")(7,"ion-list"),o.DNE(8,v,11,5,"ion-item",2),o.k0s(),o.j41(9,"ion-button",3),o.bIt("click",function(){return c.volverInicio()}),o.EFF(10,"Volver a Inicio"),o.k0s()()),2&a&&(o.R7$(8),o.Y8G("ngForOf",c.productos))},dependencies:[s.Sq,r.Jm,r.W9,r.eU,r.iq,r.uz,r.he,r.nf,r.BC,r.ai,s.oe]}),i})()}];let h=(()=>{var t;class i{}return(t=i).\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.$C({type:t}),t.\u0275inj=o.G2t({imports:[g.iI.forChild(m),g.iI]}),i})(),f=(()=>{var t;class i{}return(t=i).\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.$C({type:t}),t.\u0275inj=o.G2t({imports:[s.MD,d.YN,r.bv,h]}),i})()}}]);