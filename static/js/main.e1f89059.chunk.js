(this["webpackJsonpmemo-card"]=this["webpackJsonpmemo-card"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(11),c=n.n(a),i=n(29),s=n(7),o=n(35),u=n.n(o),d=n(50),l=n(32);function j(e){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(u.a.mark((function e(t){var n,r,a,c,i,o,d,l,j,b,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://ru.wikipedia.org/api/rest_v1/page/summary/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,n.ok){e.next=9;break}throw new Error("error load");case 9:return a=r.originalimage.source.lastIndexOf("/"),c={name:r.title,description:r.extract_html},i={name:r.originalimage.source.substr(a+1),width:r.originalimage.width,height:r.originalimage.height},o=i.width>i.height?"width":"height",e.next=15,fetch("https://ru.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=imageinfo&titles=File:".concat(i.name,"&iiprop=timestamp%7Cuser%7Curl&iiurl").concat(o,"=1280"));case 15:return d=e.sent,e.next=18,d.json();case 18:if(l=e.sent,d.ok){e.next=21;break}throw new Error("error load");case 21:j=null,e.t0=u.a.keys(l.query.pages);case 23:if((e.t1=e.t0()).done){e.next=31;break}if(b=e.t1.value,!Number.isInteger(Number(b))){e.next=29;break}return m=l.query.pages[b].imageinfo[0],j={src:m.thumburl,width:m.thumbwidth,height:m.thumbheight},e.abrupt("break",31);case 29:e.next=23;break;case 31:return e.abrupt("return",Object(s.a)(Object(s.a)({},c),{},{image:j}));case 34:return e.prev=34,e.t2=e.catch(0),e.abrupt("return",e.t2);case 37:case"end":return e.stop()}}),e,null,[[0,34]])})))).apply(this,arguments)}var m,h,f,O,p,x,v,g=n(16),_=n(64),w=n(17),k=n(70),y=n(2),N=function(e){var t=e.style;return Object(y.jsx)(k.a,{speed:2,backgroundColor:"rgb(77, 51, 50)",foregroundColor:"#ecebeb",style:Object(s.a)({width:"100%",height:"100%",borderRadius:"10px"},t),children:Object(y.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"700",height:"500"})})},C="VERTICAL",E="HORIZONTAL",I="VIEW",z="UNVIEW",S="HIDDEN";function U(e){var t=e.image,n=e.name,a=e.state,c=e.className,i=Object(r.useState)(!1),s=Object(_.a)(i,2),o=s[0],u=s[1],d=Object(r.useState)(!t),l=Object(_.a)(d,2),j=l[0],b=l[1],m=!1,h=!1;switch(a){case I:h=!0;break;case S:h=!0,m=!0}var f=null;return t&&(f=t.width>t.height?C:E),Object(y.jsx)("div",{className:c,children:Object(y.jsxs)(T,{view:h,delayHidden:m,children:[j&&!t&&Object(y.jsx)(R,{name:n.replaceAll("_"," ")}),!o&&!j&&t&&Object(y.jsx)(N,{style:{zIndex:1,position:"absolute"}}),t&&Object(y.jsx)(D,{src:t.src,vertical:f===C,horizontal:f===E,onLoad:function(){return u(!0)},onError:function(){return b(!0)},alt:n})]})})}var T=w.b.div(m||(m=Object(g.a)(["\n    transform: perspective(1200px) rotateY(180deg);\n    width: 20rem;\n    height: 30rem;\n    backface-visibility: hidden;\n    transition: transform 0.5s linear, opacity 1s 1s;\n    opacity: 1;\n    position: relative;\n\n    ","\n    ","\n"])),(function(e){return e.view&&Object(w.a)(h||(h=Object(g.a)(["transform: perspective(1200px) rotateY(0deg);"])))}),(function(e){return e.delayHidden&&Object(w.a)(f||(f=Object(g.a)(["\n        opacity: 0;\n    "])))})),R=Object(w.b)((function(e){var t=e.name,n=e.className;return Object(y.jsxs)("div",{className:n,children:[Object(y.jsx)("h2",{children:t}),Object(y.jsx)("p",{children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0430\u0441\u044c"})]})}))(O||(O=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 20rem;\n    height: 30rem;\n    text-align: center;\n    color: white;\n    background-color: gray;\n    border-radius: 10px;\n    & h2 {\n        font-size: 3rem;\n    }\n    & p {\n        margin-top: 3rem;\n        font-size: 2rem;\n        width: 15rem;\n    }\n"]))),D=w.b.img.attrs((function(e){return{alt:e.alt,onLoad:e.onLoad,onError:e.onError}}))(p||(p=Object(g.a)(["\n    z-index: 10;\n    border-radius: 10px;\n    ","\n    ","\n"])),(function(e){return e.vertical&&Object(w.a)(x||(x=Object(g.a)(["\n        width: 30rem;\n        height: 20rem;\n        object-fit: cover;\n        transform: rotate(-90deg);\n        transform-origin: 50% 75%;\n    "])))}),(function(e){return e.horizontal&&Object(w.a)(v||(v=Object(g.a)(["\n        width: 20rem;\n        height: 30rem;\n        object-fit: cover;\n    "])))}));U.defaultProps={name:"???"};var G,H,A,L=U,M=n.p+"static/media/card.0a100dc1.jpg";var W,B,F,Y=w.b.div(G||(G=Object(g.a)(["\n    backface-visibility: hidden;\n    transform: perspective(1200px) rotateY(-180deg);\n    transition: transform 0.5s linear;\n    ",";\n"])),(function(e){return e.view&&Object(w.a)(H||(H=Object(g.a)(["\n        transform: perspective(1200px) rotateY(0deg);\n    "])))})),q=w.b.img.attrs((function(e){return{src:e.src,atl:e.alt}}))(A||(A=Object(g.a)(["\n    width: 20rem;   \n    height: 30rem;\n    border-radius: 10px;\n"]))),J=function(e){var t=e.view,n=e.className;return Object(y.jsx)("div",{className:n,children:Object(y.jsx)(Y,{view:t,children:Object(y.jsx)(q,{src:M,alt:"cardBackground"})})})},P="FRONT",V="BACK",K="HIDDEN",Z=function(e){var t=e.image,n=e.name,r=e.onClick,a=null,c=null,i=!0;switch(e.state){case P:a=!1,c=I;break;case V:a=!0,c=z;break;case K:a=!1,c=S,i=!1}return Object(y.jsx)("div",{children:Object(y.jsxs)($,{viewCursor:i,onClick:function(e){return r(e)},children:[Object(y.jsx)(Q,{view:a}),Object(y.jsx)(X,{image:t,name:n,state:c})]})})},Q=Object(w.b)(J)(W||(W=Object(g.a)(["\n    position: absolute;\n"]))),X=Object(w.b)(L)(B||(B=Object(g.a)(["\n    position: absolute;\n"]))),$=w.b.div(F||(F=Object(g.a)(["\n    cursor: ",";\n    position: relative;\n    margin-top: 2rem; \n    margin-bottom: 2rem;\n    margin-right: 1rem;\n    margin-left: 1rem;\n    width: 20rem;   \n    height: 30rem;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n"])),(function(e){return e.viewCursor?"pointer":"default"})),ee=Object(r.memo)(Z),te=function(e){for(var t=new Array(e),n=[],r=0;r<e;++r)n.push(r+1);for(var a=0;a<e;++a){var c=e-a,i=Math.floor(c*Math.random()),s=n.splice(i,1)[0];t[a]=s}return t}(2*l.names.length).map((function(e){var t=e;return t>l.names.length&&(t-=l.names.length),{id:e,name:l.names[t-1],state:V}})),ne="DESCRIPTION",re="SELECT_CARD",ae="MATHCHING",ce="RESET",ie={selectCards:[],descriptionOnCard:null,cards:te,state:re},se=Object(i.b)("fieldGame/fetchData",function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,e.next=3,j(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),oe=Object(i.c)({name:"fieldGame",initialState:ie,reducers:{clickOnCard:function(e,t){var n=t.payload,r=null;switch(e.cards.forEach((function(e){e.id===n&&(r=Object.assign({},e))})),r.state){case K:return;case V:return void function(e,t){switch(e.selectCards.length){case 0:de(e,t);break;case 1:var n=e.cards.length/2,r=!1,a=e.selectCards[0];te.forEach((function(e){e.id!==a.id&&t.id%n===a.id%n&&(r=!0)})),r?(e.cards=e.cards.map((function(e){return e.id%n===a.id%n?Object(s.a)(Object(s.a)({},e),{},{state:K}):e})),e.selectCards=[],e.state=ae):de(e,t);break;case 2:ue(e)}}(e,r);case P:return e.state=ne,void(e.descriptionOnCard=n)}},clickOnField:function(e){2===e.selectCards.length&&ue(e)},switchOnSelectState:function(e){e.state=re}},extraReducers:function(e){e.addCase(se.fulfilled,(function(e,t){var n=t.meta.arg.id;e.cards=e.cards.map((function(r){var a=e.cards.length/2;return r.id%a===n?Object(s.a)(Object(s.a)({},r),t.payload):r}))})).addCase(se.rejected,(function(e,t){}))}});function ue(e){e.cards=e.cards.map((function(e){return e.state===P?Object(s.a)(Object(s.a)({},e),{},{state:V}):e})),e.selectCards=[],e.state=ce}function de(e,t){e.cards=e.cards.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},t),{},{state:P}):e})),e.selectCards.push(Object(s.a)(Object(s.a)({},t),{},{state:P})),e.state=re}var le=oe.actions,je=le.clickOnCard,be=le.clickOnField,me=le.switchOnSelectState,he=function(e){return e.fieldGame.cards},fe=function(e){return e.fieldGame.state},Oe=function(e){var t=e.fieldGame.descriptionOnCard,n=null;return e.fieldGame.cards.forEach((function(e){var r;e.id===t&&(n={title:e.name,description:e.description,src:null===(r=e.image)||void 0===r?void 0:r.src})})),n},pe=oe.reducer,xe={users:[],currentUserId:1,scores:{current:0,total:l.names.length}},ve=Object(i.c)({name:"status",initialState:xe,reducers:{setUsers:function(e,t){var n=t.payload;e.users=n.map((function(e,t){return{id:t+1,name:e,score:0}}))},switchUser:function(e){var t=e.users.reduce((function(e,t){return Math.max(e,t.id)}),0);e.currentUserId>t?e.currentUserId=1:++e.currentUserId},plusScore:function(e){e.users=e.users.map((function(t){return t.id===e.currentUserId?Object(s.a)(Object(s.a)({},t),{},{score:t.score+1}):t})),++e.scores.current}}}),ge=ve.actions,_e=ge.setUsers,we=ge.switchUser,ke=ge.plusScore,ye=function(e){return e.status.users},Ne=function(e){return e.status.currentUserId},Ce=function(e){return e.status.scores},Ee=ve.reducer,Ie=n(74),ze="ERROR",Se="WRITTING",Ue="SUCCES",Te={users:[{id:1,name:"",isError:!1},{id:2,name:"",isError:!1}],authorization:Se},Re=Object(i.c)({name:"authorization",initialState:Te,reducers:{setUser:function(e,t){var n=t.payload,r=n.id,a=n.name;if(e.users.length<r){var c=e.users.slice();return c.push({id:r,name:a,isError:!1}),void(e.users=c)}e.users=e.users.map((function(e){return r===e.id?{id:r,name:a,isError:!1}:Object(s.a)(Object(s.a)({},e),{},{isError:!1})})),e.authorization=Se},removeUser:function(e,t){var n=t.payload;e.users=e.users.filter((function(e){return e.id!==n}))},authorization:function(e){var t=!1,n=e.users.map((function(e){return""===e.name?(t=!0,Object(s.a)(Object(s.a)({},e),{},{isError:!0})):e}));if(t)return e.users=n,void(e.authorization=ze);var r=e.users.map((function(e){return e.name})),a=new Set(r);if(a.size===e.users.length)e.authorization=Ue;else{var c,i=Object(Ie.a)(a);try{var o=function(){var t={userName:c.value,count:0};e.users.forEach((function(e){e.name===t.userName&&(t.count+=1)})),t.count>1&&(e.users=e.users.map((function(e){return t.userName===e.name?Object(s.a)(Object(s.a)({},e),{},{isError:!0}):e})))};for(i.s();!(c=i.n()).done;)o()}catch(u){i.e(u)}finally{i.f()}e.authorization=ze}}}}),De=Re.actions,Ge=De.setUser,He=De.removeUser,Ae=De.authorization,Le=function(e){return e.authorization.users},Me=function(e){return e.authorization.authorization},We=Re.reducer,Be=Object(i.a)({reducer:{fieldGame:pe,status:Ee,authorization:We}}),Fe=n(13),Ye=n(40),qe=(n(69),n(10)),Je=n(140),Pe=n(83),Ve=n(149),Ke=n(148),Ze=n(143),Qe=n(144),Xe=n(145),$e=n(147),et=n(146),tt=n(81),nt=n.n(tt),rt=n(80),at=n.n(rt),ct=n(82),it=n.n(ct),st=Object(Je.a)((function(e){return{root:{display:"flex",width:"100%",minHeight:"100vh",height:"100%",overflow:"hidden",backgroundColor:"orange",flexDirection:"column",alignItems:"center"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:e.spacing(8),marginBottom:e.spacing(8)},btns:{alignSelf:"flex-end"}}})),ot=Object(Pe.a)({palette:{primary:{main:"#fff"},text:{primary:"#fff",secondary:"#424242"},action:{active:"#fff"}},typography:{fontSize:30}});var ut=function(){var e=st(),t=Object(Fe.c)(Le),n=Object(Fe.b)(),r=t.map((function(e,t){return Object(y.jsx)(Ve.a,{component:"li",mt:3,style:{listStyleType:"none"},children:Object(y.jsx)(Ke.a,{value:e.name,error:e.isError,onChange:function(t){return n(Ge(Object(s.a)(Object(s.a)({},e),{},{name:t.target.value})))},variant:"outlined",fullWidth:!0,label:"user ".concat(t+1)})},e.id)}));return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)(Ze.a,{}),Object(y.jsx)(Qe.a,{theme:ot,children:Object(y.jsxs)(Xe.a,{component:"form",className:e.wrapper,maxWidth:"xs",children:[Object(y.jsx)(Ve.a,{component:"ul",width:"100%",children:r}),Object(y.jsxs)(Ve.a,{className:e.btns,component:"div",mt:5,children:[Object(y.jsx)(et.a,{onClick:function(){return function(){var e=t.length;2!==e&&n(He(e))}()},children:Object(y.jsx)(at.a,{})}),Object(y.jsx)(et.a,{onClick:function(){return function(){var e=t.length;4!==e&&n(Ge({id:e+1,name:""}))}()},children:Object(y.jsx)(nt.a,{})})]}),Object(y.jsx)(Ve.a,{mt:4,children:Object(y.jsx)($e.a,{onClick:function(){n(Ae())},size:"large",variant:"contained",endIcon:Object(y.jsx)(it.a,{}),children:"\u0418\u0433\u0440\u0430\u0442\u044c"})})]})})]})};var dt=function(){var e=Object(Fe.c)(Me),t=Object(Fe.c)(Le),n=Object(Fe.b)();return e===Ue?(n(_e(t.map((function(e){return e.name})))),Object(y.jsx)(qe.a,{to:"/game"})):Object(y.jsx)(ut,{})};var lt=function(e){var t=e.user,n=e.score;return Object(y.jsx)("div",{className:"finish",children:Object(y.jsx)("div",{className:"finish__other-wrapper",children:Object(y.jsxs)("div",{className:"finish__inner-text",children:[Object(y.jsxs)("span",{className:"finish__winner",children:[t," \u0432\u044b\u0439\u0433\u0440\u0430\u043b!!!"]}),Object(y.jsxs)("span",{className:"finish__score",children:["\u0441\u043e \u0441\u0447\u0435\u0442\u043e\u043c ",n]}),Object(y.jsx)("button",{onClick:function(){return setTimeout((function(){return window.location.reload()}),0)},className:"finish__button",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043c\u0435\u043d\u044e"})]})})})},jt=function(e){var t=e.src,n=e.title,r=e.description,a=e.onClick;return Object(y.jsx)("div",{className:"description",style:{zIndex:1e3},children:Object(y.jsx)("div",{className:"description__wrapper-outher",children:Object(y.jsxs)("div",{className:"description__wrapper-internal",children:[Object(y.jsx)("button",{className:"description__button",onClick:function(){return a()},children:"[x]"}),Object(y.jsx)("div",{className:"description__img",children:Object(y.jsx)("img",{src:t,alt:n})}),Object(y.jsx)("h2",{className:"description__title",children:n}),Object(y.jsx)("span",{dangerouslySetInnerHTML:{__html:r},className:"description__description"})]})})})},bt=n(4),mt=n(63),ht=n.n(mt);function ft(e){var t=e.name,n=e.score,r=e.currentUser;return Object(y.jsxs)("li",{className:"status__user",children:[Object(y.jsx)("span",{className:ht()("status__name",{"status__name--current":r}),children:t}),Object(y.jsx)("span",{className:ht()("status__score",{"status__score--current":r}),children:n})]})}var Ot,pt,xt=function(){var e=Object(Fe.c)(ye),t=Object(Fe.c)(Ne),n=Object(Fe.c)(Ce),r=e.map((function(e,n){return Object(y.jsx)(ft,{name:e.name,score:e.score,currentUser:e.id===t},n)}));return Object(y.jsx)("div",{className:Object(bt.a)("status"),children:Object(y.jsxs)("div",{className:"status__wrapper",children:[Object(y.jsx)("h2",{className:"status__title",children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0438\u0433\u0440\u044b"}),Object(y.jsxs)("ul",{className:"status__status",children:[r,Object(y.jsxs)("li",{className:"status__left",children:[n.current," / ",n.total]})]})]})})},vt=n.p+"static/media/background.1142705e.jpg",gt=w.b.div(Ot||(Ot=Object(g.a)(["\n        overflow: hidden;\n        @media(min-width: 1024px) {// \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e [] \u0432\u0441\u0435\u0433\u0434\u0430\n            display: block;\n            background-image: url(",");\n            background-position: center center;\n            background-size: cover;\n            background-attachment: fixed;\n            height: 100%;\n        }\n"])),vt),_t=w.b.div(pt||(pt=Object(g.a)(["\n    display: flex;\n        flex-wrap: wrap;\n        justify-content: space-around;\n\n        width: 100%;\n        max-width: 1024px;\n        margin: 0 auto;\n\n        background-color: orange;\n        padding-right: 3rem;\n\n        @media(min-width: 1024px) {\n            border-radius: 10px;\n            padding-right: 0rem;\n        } \n"]))),wt=function(){var e=Object(Fe.c)(he),t=Object(Fe.b)(),n=e.map((function(e,n){return Object(y.jsx)(ee,Object(s.a)(Object(s.a)({},e),{},{name:e.name,onClick:function(n){t(je(e.id)),n.stopPropagation()}}),e.id)}));return Object(y.jsx)("div",{onClick:function(e){t(be())},children:Object(y.jsx)(gt,{children:Object(y.jsx)(_t,{children:n})})})};var kt=function(){var e=Object(Fe.b)(),t=Object(Fe.c)(fe),n=Object(Fe.c)(Ce),a=Object(Fe.c)(ye),c=Object(Fe.c)(Oe),i=t===ne&&(null===c||void 0===c?void 0:c.description);if(Object(r.useEffect)((function(){switch(t){case ae:e(ke());break;case ce:e(we())}}),[t,e]),n.current===n.total){var o=a.reduce((function(e,t){return e.score<t.score?t:e}),{id:0,name:"none",score:0});return Object(y.jsx)(lt,{user:o.name,score:o.score})}return Object(y.jsxs)("div",{children:[Object(y.jsx)(wt,{}),Object(y.jsx)(xt,{}),i&&Object(y.jsx)(jt,Object(s.a)(Object(s.a)({},c),{},{onClick:function(){return e(me())}}))]})};var yt=function(){return Object(Fe.c)(Me)!==Ue?Object(y.jsx)(qe.a,{to:"/"}):Object(y.jsx)(kt,{})};var Nt=function(){return Object(y.jsxs)(qe.d,{children:[Object(y.jsx)(qe.b,{path:"/",component:dt,exact:!0}),Object(y.jsx)(qe.b,{path:"/game",component:yt,exact:!0})]})};Be.dispatch((function(e){l.names.forEach((function(t,n){e(se({id:n+1,name:t}))}))})),c.a.render(Object(y.jsx)(Ye.a,{children:Object(y.jsx)(Ye.b,{children:Object(y.jsx)(Fe.a,{store:Be,children:Object(y.jsx)(Nt,{})})})}),document.getElementById("root"))},32:function(e){e.exports=JSON.parse('{"names":["\u0423\u0442\u0440\u043e_\u0432_\u0441\u043e\u0441\u043d\u043e\u0432\u043e\u043c_\u043b\u0435\u0441\u0443","\u041e\u0445\u043e\u0442\u043d\u0438\u043a\u0438_\u043d\u0430_\u043f\u0440\u0438\u0432\u0430\u043b\u0435","\u0411\u0443\u0440\u043b\u0430\u043a\u0438_\u043d\u0430_\u0412\u043e\u043b\u0433\u0435","\u0411\u043e\u044f\u0440\u044b\u043d\u044f_\u041c\u043e\u0440\u043e\u0437\u043e\u0432\u0430","\u041a\u0443\u043f\u0430\u043d\u0438\u0435_\u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e_\u043a\u043e\u043d\u044f","\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f_(\u043a\u0430\u0440\u0442\u0438\u043d\u0430)","\u041c\u0430\u0441\u043b\u0435\u043d\u0438\u0446\u0430_(\u043a\u0430\u0440\u0442\u0438\u043d\u0430_\u041a\u0443\u0441\u0442\u043e\u0434\u0438\u0435\u0432\u0430)","\u0418\u0432\u0430\u043d-\u0446\u0430\u0440\u0435\u0432\u0438\u0447_\u043d\u0430_\u0421\u0435\u0440\u043e\u043c_\u0412\u043e\u043b\u043a\u0435","\u041a\u0443\u043f\u0447\u0438\u0445\u0430_\u0437\u0430_\u0447\u0430\u0435\u043c","\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439_\u0434\u0435\u043d\u044c_\u041f\u043e\u043c\u043f\u0435\u0438","\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0446\u044b_(\u043a\u0430\u0440\u0442\u0438\u043d\u0430)","\u0414\u0435\u0432\u044f\u0442\u044b\u0439_\u0432\u0430\u043b_(\u043a\u0430\u0440\u0442\u0438\u043d\u0430_\u0410\u0439\u0432\u0430\u0437\u043e\u0432\u0441\u043a\u043e\u0433\u043e)","\u0410\u043b\u0451\u043d\u0443\u0448\u043a\u0430","\u0411\u043e\u0433\u0430\u0442\u044b\u0440\u0438_(\u043a\u0430\u0440\u0442\u0438\u043d\u0430_\u0412\u0430\u0441\u043d\u0435\u0446\u043e\u0432\u0430)","\u0426\u0430\u0440\u0435\u0432\u043d\u0430-\u041b\u0435\u0431\u0435\u0434\u044c_(\u0412\u0440\u0443\u0431\u0435\u043b\u044c)","\u0427\u0451\u0440\u043d\u044b\u0439_\u043a\u0432\u0430\u0434\u0440\u0430\u0442","\u0421\u0442\u0440\u0430\u0434\u043d\u0430\u044f_\u043f\u043e\u0440\u0430._\u041a\u043e\u0441\u0446\u044b","\u0412\u0441\u0430\u0434\u043d\u0438\u0446\u0430_(\u043a\u0430\u0440\u0442\u0438\u043d\u0430)","\u041e\u043f\u044f\u0442\u044c_\u0434\u0432\u043e\u0439\u043a\u0430_(\u043a\u0430\u0440\u0442\u0438\u043d\u0430)","\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439_\u0434\u0432\u043e\u0440\u0438\u043a","\u0421\u0432\u0430\u0442\u043e\u0432\u0441\u0442\u0432\u043e_\u043c\u0430\u0439\u043e\u0440\u0430","\u041f\u043e\u0445\u0438\u0449\u0435\u043d\u0438\u0435_\u0415\u0432\u0440\u043e\u043f\u044b_(\u043a\u0430\u0440\u0442\u0438\u043d\u0430_\u0421\u0435\u0440\u043e\u0432\u0430)","\u0413\u0440\u0430\u0447\u0438_\u043f\u0440\u0438\u043b\u0435\u0442\u0435\u043b\u0438","\u0414\u0435\u0432\u043e\u0447\u043a\u0430_\u0441_\u043f\u0435\u0440\u0441\u0438\u043a\u0430\u043c\u0438","\u0412\u0438\u0442\u044f\u0437\u044c_\u043d\u0430_\u0440\u0430\u0441\u043f\u0443\u0442\u044c\u0435"]}')},69:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.e1f89059.chunk.js.map