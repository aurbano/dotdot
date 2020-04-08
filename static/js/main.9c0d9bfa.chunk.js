(this.webpackJsonpdotdot=this.webpackJsonpdotdot||[]).push([[0],{105:function(e,t,a){e.exports={chat:"Chat_chat__LEZtX"}},112:function(e,t,a){e.exports={onlineUsers:"OnlineUsers_onlineUsers__2Umxk"}},114:function(e,t,a){e.exports={login:"Login_login__38Hzs"}},119:function(e,t,a){e.exports=a(186)},153:function(e,t){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),o=a.n(s),c=a(43),l=a(7),u=a(44),i=Object(u.a)((function(e,t){switch(console.log("REDUCER",t),t.type){case"login":if(e.offline||(e.auth.checked=!0),!t.payload){e.auth.loggedIn=!1,e.auth.user=null;break}e.offline=!1,e.auth.loggedIn=!0,e.auth.user=t.payload.user;break;case"offline":e.offline=!0,e.error=null,e.socket.connected=!1;break;case"error":e.error=t.payload;break;case"socketConnected":e.socket.connected=t.payload,e.offline=!t.payload,e.error=null;break;case"user_password":e.auth.user&&(e.auth.user.hasPassword=!0)}})),m={auth:{checked:!1,loggedIn:!1,user:null},socket:{connected:!1,key:null},offline:!1,error:null},d=r.a.createContext({state:m,dispatch:function(){return console.warn("Using default reducer, check StateProvider"),m}}),f=function(e){var t=r.a.useReducer(i,m),a=Object(l.a)(t,2),n={state:a[0],dispatch:a[1]};return r.a.createElement(d.Provider,{value:n},e.children)},p=function(){return r.a.useContext(d)},g=p,h=a(104),b=a.n(h),v=/^[A-Za-z0-9]+(?:[ _][A-Za-z0-9]+)*_?$/i,E=Object(n.createContext)({socket:null}),_=function(e){var t=p(),a=t.state,s=t.dispatch,o=Object(n.useState)(null),c=Object(l.a)(o,2),u=c[0],i=c[1];Object(n.useEffect)((function(){if(s({type:"error",payload:null}),a.auth.loggedIn){var e=b()("https://api.dotdot.im",{reconnection:!0,timeout:2e3});e.on("connect",(function(){s({type:"socketConnected",payload:!0})})),e.on("connect_error",(function(e){s({type:"offline",payload:null})})),e.on("connect_timeout",(function(e){s({type:"offline",payload:null})})),e.on("error",(function(e){s({type:"socketConnected",payload:!1}),e?(s({type:"error",payload:e}),s({type:"login",payload:null})):s({type:"offline",payload:null})})),i(e)}}),[s,a.auth.loggedIn]);var m={socket:u};return r.a.createElement(E.Provider,{value:m},e.children)},y=a(31),w=a(193),k=a(194),j=a(111),O=a(51),C=a.n(O),x=function(e){var t={};return e.infinite&&(t.animationIterationCount="infinite",t.animationDirection="alternate"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C.a.logo},r.a.createElement("div",{className:C.a.blob,style:t}),r.a.createElement("div",{className:C.a.blob,style:t})),r.a.createElement("svg",{className:C.a.svgFilter,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},r.a.createElement("defs",null,r.a.createElement("filter",{id:"goo"},r.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),r.a.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}),r.a.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},T=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{infinite:!0}))},S=a(105),L=a.n(S),N=a(198),M=a(29),F=a(5),P=a.n(F),A=a(27),I=a(22),D=a.n(I),B=a(20),R=a(197),U=a(192),H=function(e){var t,a,n=g().state,s="#".concat(e.message.user.color),o="dotdot"===e.message.user.user_id,c="circle";return e.message.user.user_id===(null===(t=n.auth.user)||void 0===t?void 0:t.user_id)?c=["far","dot-circle"]:e.message.attributes.draft&&(c="circle-notch"),e.message.attributes.private&&(c="lock"),o&&(c="cog"),r.a.createElement("div",{className:P()(D.a.message,(a={},Object(A.a)(a,D.a.system,o),Object(A.a)(a,D.a.draft,e.message.attributes.draft),Object(A.a)(a,D.a.private,e.message.attributes.private),Object(A.a)(a,D.a.privateDraft,e.message.attributes.private&&e.message.attributes.draft),a)),key:e.message.timestamp.toDateString()},r.a.createElement("div",{className:P()(D.a.icon,Object(A.a)({},D.a.private,e.message.attributes.private)),style:{color:s,background:s}},e.message.attributes.private&&r.a.createElement(R.a,{placement:"right",overlay:r.a.createElement(U.a,{id:"user-".concat(e.message.user.user_id)},"Private message from ",r.a.createElement("b",null,"@",e.message.user.name),r.a.createElement("br",null),"Only you can see this.")},r.a.createElement(B.a,{icon:c})),!e.message.attributes.private&&r.a.createElement(B.a,{icon:c,spin:e.message.attributes.draft})),r.a.createElement("div",{className:P()(D.a.timestamp)},e.message.attributes.draft?"now":e.message.timestamp.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})),r.a.createElement("span",{className:P()(D.a.user),style:{color:s}},e.message.user.name),r.a.createElement("div",{className:P()(D.a.body)},e.message.message))},z=a(52),G=a.n(z),Z=function(e){var t=e.boxRef,a=e.onScrollChanged,s=e.threshold,o=e.children,c=Object(n.useState)(-1),u=Object(l.a)(c,2),i=u[0],m=u[1],d=Object(n.useState)(0),f=Object(l.a)(d,2),p=f[0],g=f[1],h=Object(n.useRef)(null),b=Object(n.useCallback)((function(e){clearTimeout(h.current),a&&(h.current=setTimeout((function(){a(e)}),150))}),[a]),v=Object(n.useCallback)((function(){if(t&&t.current){var e=t.current.scrollHeight-t.current.offsetHeight;t.current.scrollTop=e,m(t.current.scrollTop),b(!0)}}),[t,b,m]),E=Object(n.useCallback)((function(e){return function(){if(t&&t.current){if(i>0){var a=s||100;if(i>0&&Math.abs(t.current.scrollTop-i)>a)return void b(!1);b(!0)}e&&v()}}}),[t,b,s,v,i]);return Object(n.useEffect)((function(){return window.addEventListener("resize",v,!0),t&&t.current&&t.current.addEventListener("scroll",E(!1),!0),function(){window.removeEventListener("resize",v,!0)}}),[t,v,E]),Object(n.useEffect)((function(){if(t.current){var e=t.current.scrollHeight;e!==p&&(g(e),E(!0)())}}),[t,p,E,o]),r.a.createElement(r.a.Fragment,null,o)},V=function(){var e=Object(M.a)({messages:[],scrollAtBottom:!0,unseenMessages:!1}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useContext)(E).socket,c=Object(n.useRef)(null),u=Object(n.useCallback)((function(e){s((function(t){t.scrollAtBottom=e,e&&(t.unseenMessages=!1)}))}),[s]),i=Object(n.useCallback)((function(){if(c&&c.current){var e=c.current.scrollHeight-c.current.offsetHeight;c.current.scrollTop=e,s((function(e){e.unseenMessages=!1}))}}),[s]);return Object(n.useEffect)((function(){o&&(o.on("message",(function(e){s((function(t){var a=t.messages.findIndex((function(t){return t.attributes.draft&&t.user.user_id===e.user.user_id}));if(a>-1&&t.messages.splice(a,1),!(e.message.trim().length<1)){if(t.unseenMessages=!t.scrollAtBottom,!e.attributes.draft){var n=t.messages[t.messages.length-1];if(n&&n.user.user_id===e.user.user_id&&n.attributes.private===e.attributes.private)return n.message+="\n".concat(e.message),void(n.timestamp=new Date(e.timestamp))}t.messages.push({timestamp:new Date(e.timestamp),attributes:e.attributes,message:e.message,user:e.user})}}))})),o.on("history",(function(e){s((function(t){t.messages.length>0||(t.messages=e.map((function(e){return e.timestamp=new Date(e.timestamp),e})))}))})))}),[o,s]),r.a.createElement("div",{className:G.a.messages},a.unseenMessages&&r.a.createElement("div",{className:P()(G.a.unseen)},r.a.createElement(w.a,{className:G.a.unseenContainer},r.a.createElement(N.a,{variant:"outline-secondary",size:"sm",onClick:i},r.a.createElement(B.a,{icon:"arrow-alt-circle-down"})," New messages"))),r.a.createElement("div",{className:P()(G.a.messageScroll),ref:c},r.a.createElement("div",{className:"container"},r.a.createElement(Z,{boxRef:c,onScrollChanged:u},a.messages.map((function(e){return r.a.createElement(H,{key:e.timestamp.toDateString(),message:e})}))))))},Y=a(196),X=a(64),q=a.n(X),W=function(){var e,t=Object(M.a)({message:"",private:!1,to:null,isCommand:!1}),a=Object(l.a)(t,2),s=a[0],o=a[1],c=Object(n.useRef)(null),u=Object(n.useContext)(E).socket,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t||!(e.length<1||e.trim().length<1)){var a="message";s.isCommand&&(a="command"),null===u||void 0===u||u.emit(a,{message:e,attributes:{draft:t,private:s.private,to:s.to}})}},m="lock";return s.isCommand&&(m="code"),r.a.createElement(Y.a,{noValidate:!0,onSubmit:function(e){e.preventDefault(),s.message.length<1||s.message.trim().length<1||(i(s.message),o((function(e){e.message="",e.private=!1,e.isCommand=!1})))},className:P()(q.a.textBox,"container",(e={},Object(A.a)(e,q.a.private,s.private),Object(A.a)(e,q.a.command,s.isCommand),e))},r.a.createElement(Y.a.Group,{controlId:"chatForm.message"},r.a.createElement(Y.a.Control,{as:"input",type:"text",placeholder:"Type a message...",autoFocus:!0,onChange:function(e){e.preventDefault(),clearTimeout(c.current);var t=e.currentTarget.value,a=!1,n=!1,r=null;if("/"===t[0])a=!0;else{var s=t.split(" ");s.length>0&&"@"===s[0][0]&&v.test(s[0].substr(1))&&(n=!0,r=s[0].substr(1))}o((function(e){e.message=t,e.private=n,e.to=r,e.isCommand=a})),n||a||(c.current=setTimeout((function(){i(t,!0)}),100))},value:s.message}),r.a.createElement("span",null,r.a.createElement(B.a,{icon:m}))))},J=a(112),K=a.n(J),Q=function(){var e=g().state,t=Object(M.a)({users:[]}),a=Object(l.a)(t,2),s=a[0],o=a[1],c=Object(n.useContext)(E).socket;return Object(n.useEffect)((function(){c&&c.on("users",(function(e){o((function(t){t.users=e.users}))}))}),[c,o]),r.a.createElement("div",{className:K.a.onlineUsers},s.users.map((function(t){var a,n="circle";return t.user_id===(null===(a=e.auth.user)||void 0===a?void 0:a.user_id)&&(n=["far","dot-circle"]),r.a.createElement(R.a,{key:t.user_id,placement:"bottom",overlay:r.a.createElement(U.a,{id:"user-".concat(t.user_id)},"@",t.name)},r.a.createElement("span",{style:{color:"#".concat(t.color)}},r.a.createElement(B.a,{icon:n})))})))},$=a(195),ee=a(65),te=a.n(ee),ae=a(53),ne=a.n(ae),re=a(74),se=a(75),oe=a.n(se),ce="";oe.a.defaults.withCredentials=!0;var le=function(){var e=Object(re.a)(ne.a.mark((function e(t,a,n){var r,s,o;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("'url' is required for fetching data");case 2:return r="".concat("https://api.dotdot.im").concat(t),s={url:r,method:a,data:n,timeout:6e3,withCredentials:!0,xsrfHeaderName:"x-csrf-token",headers:{}},ce.length>0&&(s.headers["x-csrf-token"]=ce),e.prev=5,e.next=8,oe()(s);case 8:return(o=e.sent).headers["x-csrf-token"]&&(ce=o.headers["x-csrf-token"]),e.next=12,o.data;case 12:return e.abrupt("return",e.sent);case 15:if(e.prev=15,e.t0=e.catch(5),!e.t0.response){e.next=21;break}throw console.warn("useFetch error on ".concat(a," ").concat(t),e.t0.response),{status:e.t0.response.status,message:ue(e.t0),errors:ie(e.t0)};case 21:throw console.warn("useFetch network error on ".concat(a," ").concat(t),e.t0),{status:500,message:e.t0.message,errors:[e.t0.message]};case 24:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t,a,n){return e.apply(this,arguments)}}();function ue(e){return e.response&&e.response.data?ie(e).join(". "):e.message||"An error occurred"}function ie(e){return e.response&&e.response.data?function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var a=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];if(Array.isArray(a))return a;if("string"===typeof a)return[a]}return[e]}("An error occurred",e.response.data,e.response.data.errors,e.response.data.error):[e.message||"An error occurred"]}var me=function(){var e=g(),t=e.state,a=e.dispatch,s=Object(n.useState)(!1),o=Object(l.a)(s,2),c=o[0],u=o[1],i=Object(n.useState)(!1),m=Object(l.a)(i,2),d=m[0],f=m[1],p=Object(n.useState)(""),h=Object(l.a)(p,2),b=h[0],v=h[1],E=Object(n.useState)(""),_=Object(l.a)(E,2),y=_[0],w=_[1],k=function(){return u(!1)},j=te.a.unlocked,O="lock-open",C="Set a password to keep your username",x="Claim Username";return t.auth.user&&t.auth.user.hasPassword&&(j=te.a.locked,O="lock",C="Change your password",x="Update Password"),r.a.createElement("div",{className:te.a.passwordLock},r.a.createElement(R.a,{placement:"bottom",delay:500,overlay:r.a.createElement(U.a,{id:"passwordLock"},C)},r.a.createElement(N.a,{variant:"link",className:j,style:{padding:0},onClick:function(){return u(!0)}},r.a.createElement(B.a,{icon:O}))),r.a.createElement($.a,{show:c,onHide:k},r.a.createElement(Y.a,{noValidate:!0,validated:d,onSubmit:function(e){(e.preventDefault(),e.stopPropagation(),f(!0),e.currentTarget.checkValidity())&&le("/password","POST",{password:b,repeatPassword:y}).then((function(){a({type:"user_password",payload:!0}),u(!1),f(!1),v(""),w("")})).catch((function(e){a({type:"error",payload:e.errors.join(", ")})}))}},r.a.createElement($.a.Header,{closeButton:!0},r.a.createElement($.a.Title,null,x)),r.a.createElement($.a.Body,null,r.a.createElement(Y.a.Group,{controlId:"pwd.new"},r.a.createElement(Y.a.Control,{as:"input",type:"password",placeholder:"Password...",autoFocus:!0,required:!0,minLength:6,onChange:function(e){v(e.currentTarget.value)},value:b}),r.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"The password is too short. Minimum length is 6 characters.")),r.a.createElement(Y.a.Group,{controlId:"pwd.new"},r.a.createElement(Y.a.Control,{as:"input",type:"password",placeholder:"Repeat Password...",required:!0,minLength:6,pattern:b,onChange:function(e){w(e.currentTarget.value)},value:y}),r.a.createElement(Y.a.Control.Feedback,{type:"invalid"},"The passwords don't match!"))),r.a.createElement($.a.Footer,null,r.a.createElement(N.a,{variant:"secondary",onClick:k},"Close"),r.a.createElement(N.a,{type:"submit",variant:"primary"},"Set password")))))},de=function(){var e=p().state,t=r.a.createElement(T,null);return e.socket.connected&&(t=r.a.createElement("div",{className:L.a.chat},r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement(me,null)),r.a.createElement(j.a,null,r.a.createElement(Q,null)))),r.a.createElement(V,null),r.a.createElement(W,null))),t},fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null))},pe=function(e){var t=p().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(y.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(y.a,{to:"/login"}):r.a.createElement(fe,null)},ge=function(e){var t=p().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(y.a,{to:"/"}):r.a.createElement(y.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(fe,null)},he=a(78),be=a.n(he),ve=function(){var e=p().state;if(!e.offline&&!e.error)return null;var t=e.error;return Array.isArray(t)&&(t=t.join(". ")),"string"!==typeof t&&(t=String(t)),e.error?r.a.createElement("div",{className:be.a.offline},"Error: ",t):r.a.createElement("div",{className:be.a.offline},"You seem to be offline! Please try again later")},Ee=a(117),_e=a(114),ye=a.n(_e),we=function(){var e=p().dispatch,t=Object(M.a)({username:"",password:"",hasPassword:!1,loading:!1}),a=Object(l.a)(t,2),s=a[0],o=a[1],c=Object(n.useRef)(null);return r.a.createElement(w.a,{className:P()(ye.a.login,"mt-4")},r.a.createElement(x,null),r.a.createElement(Y.a,{noValidate:!0,onSubmit:function(e){e.preventDefault(),c.current.execute()}},r.a.createElement(Y.a.Group,{controlId:"loginForm.username"},r.a.createElement(Y.a.Control,{as:"input",type:"text",placeholder:"What's your name?",disabled:s.loading,autoFocus:!0,minLength:1,maxLength:20,onChange:function(e){var t=e.currentTarget.value;o((function(e){e.username=t}))},value:s.username}),s.hasPassword&&r.a.createElement(Y.a.Control,{as:"input",className:"mt-2",type:"password",placeholder:"Password...",disabled:s.loading,autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;o((function(e){e.password=t}))},value:s.password}),r.a.createElement(Ee.a,{ref:c,size:"invisible",sitekey:"6LddUucUAAAAAIk_E1AoLY5YyxoulIzlyRLjMoMi",onChange:function(t){if(t&&!s.loading){o((function(e){e.loading=!0})),c.current.reset();var a={username:s.username,password:s.password,recaptchaToken:t};le("/auth","POST",a).then((function(t){if(!t||!t.user.user_id)return console.warn("Invalid user object"),void e({type:"login",payload:t});e({type:"login",payload:t})})).catch((function(t){console.log("login fail reason",t),400!==t.status&&e({type:"error",payload:t.errors.join(", ")}),o((function(e){e.loading=!1,400===t.status&&(e.hasPassword=!0)}))}))}}}),r.a.createElement("button",{type:"submit",style:{visibility:"hidden"}},"Login"))))},ke=function e(t){le("/auth","GET").then((function(e){if(!e||!e.user.user_id)return console.warn("Invalid user object"),void t({type:"login",payload:null});t({type:"login",payload:e})})).catch((function(a){console.log("Login check failed",a),"Network Error"===a.message?(t({type:"offline",payload:null}),setTimeout((function(){e(t)}),2e3)):(401!==a.status&&t({type:"error",payload:a.errors.join(", ")}),t({type:"login",payload:null}))}))},je=function(){var e=g(),t=e.state,a=e.dispatch;return Object(n.useEffect)((function(){t.auth.checked||ke(a)}),[t.auth.checked,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,null),r.a.createElement(y.d,null,r.a.createElement(ge,{path:"/login",component:we}),r.a.createElement(pe,{path:"/",component:de})))},Oe=a(115),Ce=a.n(Oe),xe=function(){var e=g().state,t=Object(n.useContext)(E).socket,a=Object(n.useState)(!0),s=Object(l.a)(a,2),o=s[0],c=s[1],u=Object(n.useState)(!1),i=Object(l.a)(u,2),m=i[0],d=i[1],f=Object(n.useCallback)((function(t){var a=e.auth.user;!o&&a&&a.user_id!==t.user.user_id&&d(!0)}),[o,e.auth.user]);return Object(n.useEffect)((function(){t&&t.on("message",f)}),[t,f]),window.onfocus=function(){d(!1),c(!0)},window.onblur=function(){c(!1)},r.a.createElement(Ce.a,null,r.a.createElement("title",null,m?"\u2022 dotdot":"dotdot"))},Te=a(45),Se=a(28),Le=a(116);Te.b.add(Se.g,Se.h,Se.b,Se.f,Le.a,Se.c,Se.d,Se.e,Se.a);a(185);var Ne=r.a.createElement(c.a,{basename:"/"},r.a.createElement(f,null,r.a.createElement(_,null,r.a.createElement(xe,null),r.a.createElement(je,null))));o.a.render(Ne,document.getElementById("root"))},22:function(e,t,a){e.exports={message:"Message_message__2v30T",system:"Message_system__2g6ZE",user:"Message_user__3HofW",timestamp:"Message_timestamp__2armv",icon:"Message_icon__ATXFm",body:"Message_body__32TEj",draft:"Message_draft__1zB7h",header:"Message_header__3wUCX",private:"Message_private__ORZ48",privateDraft:"Message_privateDraft__YRrde"}},51:function(e,t,a){e.exports={logo:"Logo_logo__30xDu",svgFilter:"Logo_svgFilter__1s9i7",blob:"Logo_blob__1iSwo","blob-first":"Logo_blob-first__3YKrD","blob-second":"Logo_blob-second__2r5Nx"}},52:function(e,t,a){e.exports={messages:"Messages_messages__tCmp1",messageScroll:"Messages_messageScroll__CCnSp",unseen:"Messages_unseen__gVw6f",unseenContainer:"Messages_unseenContainer__3haBw"}},64:function(e,t,a){e.exports={textBox:"TextBox_textBox__McZeC",private:"TextBox_private__1kesE",command:"TextBox_command__1uXWO"}},65:function(e,t,a){e.exports={passwordLock:"PasswordLock_passwordLock__2FTiA",unlocked:"PasswordLock_unlocked__21MTQ",pulse:"PasswordLock_pulse__2T-_F",locked:"PasswordLock_locked__1mCl-"}},78:function(e,t,a){e.exports={offline:"OfflineCheck_offline__2vKbm"}}},[[119,1,2]]]);
//# sourceMappingURL=main.9c0d9bfa.chunk.js.map