(this.webpackJsonpdotdot=this.webpackJsonpdotdot||[]).push([[0],{149:function(e,t,a){e.exports={chat:"Chat_chat__LEZtX",scrollingChat:"Chat_scrollingChat__165RB"}},150:function(e,t,a){e.exports={badge:"AdminBadge_badge__1HTPx",icon:"AdminBadge_icon__H_GPA"}},155:function(e,t,a){e.exports={footer:"PasswordModal_footer__32ASO",left:"PasswordModal_left__1uFYg"}},156:function(e,t,a){e.exports={onlineUsers:"OnlineUsers_onlineUsers__2Umxk",count:"OnlineUsers_count__1iz1Q"}},158:function(e,t,a){e.exports={messageContent:"MessageContent_messageContent__2lJQW",mention:"MessageContent_mention__1rALG"}},159:function(e,t,a){e.exports={offline:"OfflineCheck_offline__2vKbm"}},23:function(e,t,a){e.exports={message:"Message_message__2v30T",replyButton:"Message_replyButton__15_Mb",mention:"Message_mention__82QFp",system:"Message_system__2g6ZE",user:"Message_user__3HofW",timestamp:"Message_timestamp__2armv",offline:"Message_offline__32gHu",icon:"Message_icon__ATXFm",inactive:"Message_inactive__2OBrK",body:"Message_body__32TEj",draft:"Message_draft__1zB7h",header:"Message_header__3wUCX",private:"Message_private__ORZ48",replyBox:"Message_replyBox__1NP5z",reply:"Message_reply__jMrB5"}},252:function(e,t,a){e.exports=a.p+"static/media/dotdot.c9ed5a8a.svg"},253:function(e,t,a){e.exports={wrapper:"Wrapper_wrapper__STXDh"}},256:function(e,t,a){e.exports={login:"Login_login__38Hzs"}},259:function(e,t,a){e.exports=a.p+"static/media/newMessage.482e2f99.mp3"},288:function(e,t,a){e.exports=a(534)},32:function(e,t,a){e.exports={area:"TextBox_area__udJ9V",focused:"TextBox_focused__3mYkC",container:"TextBox_container__3Ocx3",textBox:"TextBox_textBox__McZeC",inputGroup:"TextBox_inputGroup__1PdvA",reply:"TextBox_reply__2tzzr",actions:"TextBox_actions__1geZu",textIcon:"TextBox_textIcon__mlsnG",button:"TextBox_button__FdM7P",private:"TextBox_private__1kesE",command:"TextBox_command__1uXWO"}},499:function(e,t){},533:function(e,t,a){},534:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(18),o=a.n(s),l=a(54),c=a(12),i=a(82),u={CONNECT:"connect",DISCONNECT:"disconnect",MESSAGE:"message",COMMAND:"command",HISTORY:"history",ONLINE_USERS:"users",STATS:"stats",TIMER:"timer",CONTROL:"control",CHANGE_ROOM:"change_room"},m="https://api.dotdot.im",d=/^[A-Za-z0-9]+(?:[ _][A-Za-z0-9]+)*_?$/i,p="6LddUucUAAAAAIk_E1AoLY5YyxoulIzlyRLjMoMi",f=a(543),g=a(544),h=a(250),E=a(19),_=function(e){for(var t=e.data.map((function(e,t){return{date:t,value:e}})),a=t.length;a<A;a++)t.push({date:a,value:0});return r.a.createElement("div",{style:{width:"100%",height:"".concat(e.height||250,"px")}},r.a.createElement(E.f,null,r.a.createElement(E.b,{data:t,barSize:5,barCategoryGap:2,barGap:2,margin:{top:50,bottom:20,left:0,right:0}},r.a.createElement(E.i,{allowDecimals:!1}),r.a.createElement(E.h,{dataKey:"date",tick:!1},r.a.createElement(E.e,{value:e.label,position:"bottom",offset:-15,fill:"#ccc"})),r.a.createElement(E.a,{dataKey:"value",fill:"#f75f00",stroke:"#f75f00",isAnimationActive:!1,type:"linear"}),r.a.createElement(E.g,{cursor:{fill:"rgba(255, 255, 255, 0.1)"}}))))};function v(e){for(var t=[[Math.floor(e/31536e3),"y"],[Math.floor(e%31536e3/86400),"d"],[Math.floor(e%31536e3%86400/3600),"h"],[Math.floor(e%31536e3%86400%3600/60),"m"],[e%31536e3%86400%3600%60,"s"]],a="",n=0,r=t.length;n<r;n++)0!==t[n][0]&&(a+=" "+t[n][0]+t[n][1]);return a.trim()}var b=a(244),y=a.n(b),w=Object(n.createContext)({socket:null}),k=function(e){var t,a=D(),s=a.state,o=a.dispatch,l=Object(n.useState)(null),i=Object(c.a)(l,2),d=i[0],p=i[1],f=null===(t=s.auth.user)||void 0===t?void 0:t.hasPassword;Object(n.useEffect)((function(){if(s.auth.loggedIn&&!d){o({type:"error",payload:null});var e=y()(m,{reconnection:!0,timeout:2e3});setInterval((function(){e.connected&&e.emit("timer")}),3e4),f||setTimeout((function(){o({type:"system_message",payload:"Remember: If you want to keep this username, you must set a password! You can set it by clicking on the lock icon on the top left of the screen."})}),6e4),Object.values(u).forEach((function(t){e.on(t,(function(e){o({type:"socket_".concat(t),payload:e})}))})),e.on("stats",(function(e){o({type:"stats",payload:e})})),e.on("connect_error",(function(){o({type:"offline",payload:null})})),e.on("connect_timeout",(function(){o({type:"offline",payload:null})})),e.on("error",(function(e){o({type:"socket_".concat(u.DISCONNECT)}),e?(o({type:"error",payload:e}),o({type:"login",payload:null})):o({type:"offline",payload:null})})),p(e)}}),[o,d,s.auth.loggedIn,f]);var g={socket:d};return r.a.createElement(w.Provider,{value:g},e.children)},C=a(2),x=a.n(C),O=a(17),T=a(541),M=a(549),j=a(86),N=a.n(j),S=function(e){var t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:N.a.title},e.title),r.a.createElement("span",{className:N.a.content},e.content),e.icon&&r.a.createElement("span",{className:x()("icon",e.iconBg)},r.a.createElement(O.a,{icon:e.icon})),r.a.createElement("div",{className:N.a.history},r.a.createElement("span",{className:"text-muted"},e.history)));if(t=r.a.createElement("div",{className:N.a.dashboardWidget},t),!e.tooltip)return t;var a=r.a.createElement(T.a,{id:"counterTooltip"},e.tooltip);return r.a.createElement(M.a,{delay:{show:50,hide:0},overlay:a},t)},A=100,B=function(){var e=W().state,t=Object(n.useContext)(w).socket,a=e.stats.timeActive+e.stats.timeInactive,s=[[{header:"Time Active / Session",data:v(Math.round(e.stats.timeActive/e.stats.sessions)),detail:"Total: "+v(e.stats.timeActive)+" ("+Math.round(100*e.stats.timeActive/a)+"%)"},{header:"Time Inactive / Session",data:v(Math.round(e.stats.timeInactive/e.stats.sessions)),detail:"Total: "+v(e.stats.timeInactive)+" ("+Math.round(100*e.stats.timeInactive/a)+"%)"}],[{header:"Users Online",data:Math.round(100*e.stats.onlineUsers/e.stats.totalUsers)+"%",detail:"".concat(e.stats.onlineUsers," out of ").concat(e.stats.totalUsers),tooltip:""},{header:"Total Messages",data:e.stats.totalMessages,detail:Math.round(e.stats.totalMessages/e.stats.totalUsers)+" messages / user"},{header:"Server",data:"CPU: "+e.stats.cpuUsage+"% - RAM: "+e.stats.freeMemory+"%",detail:"Up for "+v(e.stats.uptime),tooltip:"Shows CPU usage over the last few seconds, and free RAM"},{header:"Avg Sessions / user",data:Math.round(e.stats.sessions/e.stats.totalUsers),detail:"Total sessions: "+e.stats.sessions}]],o=e.stats.rooms;return r.a.createElement(f.a,{fluid:!0},r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(_,{data:e.stats.messages,label:"Realtime Messages"})),r.a.createElement(h.a,null,r.a.createElement(_,{data:e.stats.users,label:"Realtime Users"}))),r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement("div",{style:{width:"100%",height:"400px"}},r.a.createElement(E.f,null,r.a.createElement(E.d,{onClick:function(e){if(e){var a=e.activePayload[0].payload.id;t&&t.emit(u.CHANGE_ROOM,{room:a})}},data:o,barSize:10,margin:{top:50,bottom:0,left:0,right:0}},r.a.createElement(E.i,{allowDecimals:!1,domain:[0,10]}),r.a.createElement(E.h,{tick:!1},r.a.createElement(E.e,{value:"Rooms",position:"bottom",offset:-15,fill:"#ccc"})),r.a.createElement(E.c,{dataKey:"active",stackId:"a",fill:"#f75f00"}),r.a.createElement(E.c,{dataKey:"inactive",stackId:"a",fill:"#555"}),r.a.createElement(E.g,{cursor:{fill:"rgba(255, 255, 255, 0.1)"}})))))),r.a.createElement(f.a,{className:"mt-4"},s.map((function(e,t){return r.a.createElement(g.a,{key:t},e.map((function(e){return r.a.createElement(h.a,{key:e.header},r.a.createElement(S,{title:e.header,content:e.data,history:e.detail,tooltip:e.tooltip}))})))}))))},U=function(e){var t=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e),a=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches;if(!t)return"#0000FF";var n=function(e,t,a){var n=[e,t,a].map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}));return.2126*n[0]+.7152*n[1]+.0722*n[2]}(t.r,t.g,t.b),r=0;return a&&n>=.5?r=-n:!a&&n<.5&&(r=n+.2),r&&function(e,t){var a,n,r,s,o,l,i,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,m=arguments.length>3&&void 0!==arguments[3]&&arguments[3],d=parseInt,p=Math.round,f="string"==typeof u;return"number"!=typeof e||e<-1||e>1||"string"!=typeof t||"r"!=t[0]&&"#"!=t[0]||u&&!f?null:(window.pSBCr||(window.pSBCr=function(e){var t=e.length,s={};if(t>9){var o,l;if(o=e=e.split(","),l=Object(c.a)(o,4),a=l[0],n=l[1],r=l[2],f=l[3],(t=e.length)<3||t>4)return null;s.r=d("a"==a[3]?a.slice(5):a.slice(4)),s.g=d(n),s.b=d(r),s.a=f?parseFloat(f):-1}else{if(8==t||6==t||t<4)return null;t<6&&(e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+(t>4?e[4]+e[4]:"")),e=d(e.slice(1),16),9==t||5==t?(s.r=e>>24&255,s.g=e>>16&255,s.b=e>>8&255,s.a=p((255&e)/.255)/1e3):(s.r=e>>16,s.g=e>>8&255,s.b=255&e,s.a=-1)}return s}),i=t.length>9,i=f?u.length>9||"c"==u&&!i:i,o=window.pSBCr(t),s=e<0,l=u&&"c"!=u?window.pSBCr(u):s?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},s=1-(e=s?-1*e:e),o&&l?(m?(a=p(s*o.r+e*l.r),n=p(s*o.g+e*l.g),r=p(s*o.b+e*l.b)):(a=p(Math.pow(s*Math.pow(o.r,2)+e*Math.pow(l.r,2),.5)),n=p(Math.pow(s*Math.pow(o.g,2)+e*Math.pow(l.g,2),.5)),r=p(Math.pow(s*Math.pow(o.b,2)+e*Math.pow(l.b,2),.5))),f=o.a,l=l.a,f=(o=f>=0||l>=0)?f<0?l:l<0?f:f*s+l*e:0,i?"rgb"+(o?"a(":"(")+a+","+n+","+r+(o?","+p(1e3*f)/1e3:"")+")":"#"+(4294967296+16777216*a+65536*n+256*r+(o?p(255*f):0)).toString(16).slice(1,o?void 0:-2)):null)}(r,e)||e},I=Object(i.a)((function(e,t){switch(t.type){case"login":if(e.offline||(e.auth.checked=!0),!t.payload){e.auth.loggedIn=!1,e.auth.user=null;break}e.offline=!1,e.auth.loggedIn=!0,e.auth.user=t.payload.user;break;case"offline":e.offline=!0,e.error=null,e.socket.connected=!1;break;case"error":e.error=t.payload;break;case"user_password":e.auth.user&&(e.auth.user.hasPassword=!0);break;case"system_message":var a={user:F,content:[t.payload],timestamp:new Date,attributes:{private:!1,draft:!1}};e.messages.push(a);break;case"socket_".concat(u.CONNECT):e.socket.connected=!0,e.offline=!1,e.error=null;break;case"socket_".concat(u.DISCONNECT):e.socket.connected=!1,e.offline=!0,e.error=null;break;case"socket_".concat(u.ONLINE_USERS):e.onlineUsers=t.payload.users.map((function(e){return e.contrastColor=U("#"+e.color),e}));break;case"socket_".concat(u.MESSAGE):var n=t.payload;n.timestamp=new Date(n.timestamp);for(var r=!1,s=-1,o=e.messages.length-1;o>=0;o--){var l=e.messages[o];if(l.attributes.draft||(r=!0),l.attributes.draft&&l.user.user_id===n.user.user_id){s=o;break}}var c=n.content.trim().length<1;if(s>-1)if(r||!n.attributes.draft)e.messages.splice(s,1);else if(!c&&n.attributes.draft)return e.messages[s].content[0]=n.content,void(e.messages[s].timestamp=new Date(n.timestamp));if(c)return;if(n.attributes.replyToTimestamp){var i=e.messages.find((function(e){return e.timestamp.getTime()===n.attributes.replyToTimestamp}))||null;i&&i.user&&(n.attributes.replyTo=i)}if(!n.attributes.draft){var m=e.messages[e.messages.length-1];if(m&&m.user.user_id===n.user.user_id&&m.attributes.private===n.attributes.private&&m.attributes.replyToTimestamp===n.attributes.replyToTimestamp)return m.content.push(n.content),void(m.timestamp=new Date(n.timestamp))}var d={user:n.user,timestamp:n.timestamp,attributes:n.attributes,content:[n.content]};e.messages.push(d),e.messages.length>100&&e.messages.shift();break;case"socket_".concat(u.HISTORY):e.messages=t.payload.map((function(e){return e.timestamp=new Date(e.timestamp),e}));break;case"socket_".concat(u.STATS):e.stats.messages.push(t.payload.messages),e.stats.messages.length>A&&e.stats.messages.shift(),e.stats.users.push(t.payload.users),e.stats.users.length>A&&e.stats.users.shift(),e.stats.rooms=t.payload.rooms,e.stats.onlineUsers=t.payload.users,e.stats.totalUsers=t.payload.totalUsers,e.stats.totalMessages=t.payload.totalMessages,e.stats.cpuUsage=Math.round(100*t.payload.cpuUsage),e.stats.freeMemory=Math.round(100*t.payload.freeMemory),e.stats.uptime=Math.round(t.payload.uptime),e.stats.timeActive=30*t.payload.timeActive,e.stats.timeInactive=30*t.payload.timeInactive,e.stats.sessions=t.payload.sessions;break;case"socket_".concat(u.CONTROL):Object.keys(t.payload).forEach((function(a){"undefined"!==typeof e[a]&&(e[a]=t.payload[a])}))}})),F={user_id:"dotdot",name:"dotdot",icon:"cog",color:"f75f00",isActive:!0,hasPassword:!0},L={auth:{checked:!1,loggedIn:!1,user:null},socket:{connected:!1},draftTimer:100,onlineUsers:[],messages:[],stats:{messages:new Array(A).fill(0),users:new Array(A).fill(0),rooms:[],onlineUsers:0,totalUsers:0,totalMessages:0,cpuUsage:0,freeMemory:0,uptime:0,timeActive:0,timeInactive:0,sessions:1},offline:!1,error:null},R=r.a.createContext({state:L,dispatch:function(){return console.warn("Using default reducer, check StateProvider"),L}}),P=function(e){var t=r.a.useReducer(I,e.state||L),a=Object(c.a)(t,2),n={state:a[0],dispatch:a[1]};return r.a.createElement(R.Provider,{value:n},e.children)},D=function(){return r.a.useContext(R)},W=D,G=a(51),H=a(22),z=a(251),Y=a.n(z),Z=a(87),K=a.n(Z),V=function(e){var t={};return e.infinite&&(t.animationIterationCount="infinite",t.animationDirection="alternate"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:K.a.logo},r.a.createElement("div",{className:K.a.blob,style:t}),r.a.createElement("div",{className:K.a.blob,style:t})),r.a.createElement("svg",{className:K.a.svgFilter,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},r.a.createElement("defs",null,r.a.createElement("filter",{id:"goo"},r.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),r.a.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}),r.a.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},X=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{infinite:!0}))},q=a(149),J=a.n(q),Q=a(252),$=a.n(Q),ee=a(253),te=a.n(ee),ae=function(e){var t=e.children;return r.a.createElement("div",{className:te.a.wrapper},t)},ne=a(88),re=a.n(ne),se=a(73),oe=a.n(se),le=function(e){var t=e.onClick,a=(e.small,W().state);if(!a.auth.user)return r.a.createElement(r.a.Fragment,null);var n=a.auth.user&&a.auth.user.hasPassword,s=n?"lock":"lock-open";return r.a.createElement("button",{className:oe.a.badge,onClick:t},r.a.createElement("span",{className:oe.a.dot,style:{color:"#".concat(a.auth.user.color)}},r.a.createElement(O.a,{icon:a.auth.user.icon||"circle"})),r.a.createElement("span",{className:oe.a.name},a.auth.user.name),r.a.createElement(O.a,{className:x()(oe.a.lock,Object(H.a)({},oe.a.closed,n)),icon:s}))},ce=a(150),ie=a.n(ce),ue=function(){return r.a.createElement(l.b,{className:ie.a.badge,to:"/admin",title:"Monitoring",style:{marginLeft:"1em"}},r.a.createElement(O.a,{className:ie.a.icon,icon:"shield-alt"}))},me=a(547),de=a(548),pe=a(550),fe=a(89),ge=a.n(fe),he=a(153),Ee=a(154),_e=a.n(Ee),ve="";_e.a.defaults.withCredentials=!0;var be=function(){var e=Object(he.a)(ge.a.mark((function e(t,a,n){var r,s,o;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("'url' is required for fetching data");case 2:return r="".concat(m).concat(t),s={url:r,method:a,data:n,timeout:6e3,withCredentials:!0,xsrfHeaderName:"x-csrf-token",headers:{}},ve.length>0&&(s.headers["x-csrf-token"]=ve),e.prev=5,e.next=8,_e()(s);case 8:return(o=e.sent).headers["x-csrf-token"]&&(ve=o.headers["x-csrf-token"]),e.next=12,o.data;case 12:return e.abrupt("return",e.sent);case 15:if(e.prev=15,e.t0=e.catch(5),!e.t0.response){e.next=21;break}throw console.warn("useFetch error on ".concat(a," ").concat(t),e.t0.response),{status:e.t0.response.status,message:ye(e.t0),errors:we(e.t0),data:e.t0.response.data};case 21:throw console.warn("useFetch network error on ".concat(a," ").concat(t),e.t0),{status:500,message:e.t0.message,errors:[e.t0.message]};case 24:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t,a,n){return e.apply(this,arguments)}}();function ye(e){return e.response&&e.response.data?we(e).join(". "):e.message||"An error occurred"}function we(e){return e.response&&e.response.data?function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var a=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];if(Array.isArray(a))return a;if("string"===typeof a)return[a]}return[e]}("An error occurred",e.response.data,e.response.data.errors,e.response.data.error):[e.message||"An error occurred"]}var ke=a(155),Ce=a.n(ke),xe=function(e){var t=e.show,a=e.onHide,s=W(),o=s.state,l=s.dispatch,i=Object(n.useState)(!1),u=Object(c.a)(i,2),d=u[0],p=u[1],f=Object(n.useState)(""),g=Object(c.a)(f,2),h=g[0],E=g[1],_=Object(n.useState)(""),v=Object(c.a)(_,2),b=v[0],y=v[1],w="Claim Username";o.auth.user&&o.auth.user.hasPassword&&(w="Update Password");return r.a.createElement(me.a,{show:t,onHide:a},r.a.createElement(de.a,{noValidate:!0,validated:d,onSubmit:function(e){(e.preventDefault(),e.stopPropagation(),p(!0),e.currentTarget.checkValidity())&&be("/password","POST",{password:h,repeatPassword:b}).then((function(){l({type:"user_password",payload:!0}),a(),p(!1),E(""),y("")})).catch((function(e){l({type:"error",payload:e.errors.join(", ")})}))}},r.a.createElement(me.a.Header,{closeButton:!0},r.a.createElement(me.a.Title,null,w)),r.a.createElement(me.a.Body,null,r.a.createElement(de.a.Group,{controlId:"pwd.new"},r.a.createElement(de.a.Control,{as:"input",type:"password",autoComplete:"new-password",placeholder:"Password...",autoFocus:!0,required:!0,minLength:6,onChange:function(e){E(e.currentTarget.value)},value:h}),r.a.createElement(de.a.Control.Feedback,{type:"invalid"},"The password is too short. Minimum length is 6 characters.")),r.a.createElement(de.a.Group,{controlId:"pwd.new"},r.a.createElement(de.a.Control,{as:"input",type:"password",autoComplete:"new-password",placeholder:"Repeat Password...",required:!0,minLength:6,pattern:h,onChange:function(e){y(e.currentTarget.value)},value:b}),r.a.createElement(de.a.Control.Feedback,{type:"invalid"},"The passwords don't match!"))),r.a.createElement(me.a.Footer,{className:Ce.a.footer},r.a.createElement("a",{href:"".concat(m,"/logout"),className:x()(Ce.a.left,"text-danger")},"Logout"),r.a.createElement(pe.a,{type:"submit",variant:"primary"},"Set password"))))},Oe=function(e){e.children;var t=W().state,a=Object(n.useState)(!1),s=Object(c.a)(a,2),o=s[0],l=s[1],i="Set a password to keep your username";return t.auth.user&&t.auth.user.hasPassword&&(i="Change your password"),r.a.createElement(r.a.Fragment,null,t.auth.user&&t.auth.user.isAdmin&&r.a.createElement(ue,null),r.a.createElement(M.a,{placement:"bottom",delay:500,overlay:r.a.createElement(T.a,{id:"passwordLock"},i)},r.a.createElement(le,{onClick:function(){return l(!0)}})),r.a.createElement(xe,{show:o,onHide:function(){return l(!1)}}))},Te=a(156),Me=a.n(Te),je=function(e){var t=e.user,a=W().state,n=a.auth.user&&t.user_id===a.auth.user.user_id,s="circle",o="";t.icon?s=t.icon:n&&(s="dot-circle"),t.isActive||(s="meh",o=" (away)");var l=s;n&&(l=["far",s]);var c=t.contrastColor||"#".concat(t.color);return r.a.createElement(M.a,{key:t.user_id,placement:"bottom",overlay:r.a.createElement(T.a,{id:"user-".concat(t.user_id)},"@",t.name,o)},r.a.createElement(O.a,{style:{color:c},icon:l}))},Ne=function(){var e=W().state;return r.a.createElement("div",{className:Me.a.onlineUsers},r.a.createElement("span",{className:Me.a.count},e.onlineUsers.length),e.onlineUsers.map((function(e){return r.a.createElement(je,{user:e})})))},Se=function(e){var t=e.scrollingWhileFocused,a=t?window.pageYOffset+"px":0,n=t?"absolute":"fixed";return r.a.createElement("header",{className:re.a.header,style:{position:n,top:a}},r.a.createElement(ae,null,r.a.createElement("img",{className:re.a.logo,src:$.a,alt:"dotdot logo"}),r.a.createElement("div",{className:re.a.online},r.a.createElement(Ne,null)),r.a.createElement("div",{className:re.a.badge},r.a.createElement(Oe,null))))},Ae=a(38),Be=a(23),Ue=a.n(Be),Ie=a(157),Fe=a.n(Ie),Le=a(545),Re=function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Welcome to dotdot"),r.a.createElement("p",null,"This is a place where you can chat with people whenever you want :)",r.a.createElement("br",null),"We don't save any messages, so when the last person in a chat disconnects, the chat history is lost."),r.a.createElement("p",null,"Inactive user accounts are deleted after 2 weeks without chatting."),r.a.createElement("h6",null,"Keep your User"),r.a.createElement("p",null,"You can set a password to protect your username from being deleted and used by someone else. Simply click on the lock in the top left corner."),r.a.createElement("h6",null,"Private Messages"),r.a.createElement("p",null,"You can send anyone a private message simply by starting your message with @ and their name. You'll see the text box change to orange and a lock icon appear."),r.a.createElement("p",null,"Only you and the person you send the message to can see them. If they are offline they won't receive the message"),r.a.createElement("h5",null,"Commands"),r.a.createElement("p",null,"There are some commands that you can use:"),r.a.createElement(Le.a,{size:"sm",variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Command"),r.a.createElement("th",null,"Example"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"/help")),r.a.createElement("td",null,r.a.createElement("code",null,"/help")),r.a.createElement("td",null,"It shows this message")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"/set color")),r.a.createElement("td",null,r.a.createElement("code",null,"/set color eb0000")),r.a.createElement("td",null,"Change your color, the color needs to be a hex representation (sorry if this sounds confusing, soon there will be an easier way to do this)")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"/set icon")),r.a.createElement("td",null,r.a.createElement("code",null,"/set icon smile")),r.a.createElement("td",null,"Change your icon, pick any of the ones from"," ",r.a.createElement("a",{href:"https://fontawesome.com/icons?d=gallery&s=regular&c=emoji&m=free",rel:"noopener noreferrer",target:"_blank"},"this list"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"/list")),r.a.createElement("td",null,r.a.createElement("code",null,"/list")),r.a.createElement("td",null,"Get a list of the users who are currently online")))))},Pe=a(158),De=a.n(Pe),We=new RegExp("@([A-Za-z0-9]+(?:[_][A-Za-z0-9]+)*_?)","gmi"),Ge=new RegExp(/((?:ftp|http|https):\/\/(?:\w+:{0,1}\w*@)?(?:\S+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:.?+=&%@!\-/]))?)/,"gmi"),He=function(e){var t=e.content,a=e.isSystem,n=e.onlineUsers,s=t;return a&&"/help"===t?s=r.a.createElement(Re,null):(s=Fe()(s,We,(function(e,t){var a={},s=n.findIndex((function(t){return t.name===e}));s>-1&&(a={color:n[s].contrastColor||"#"+n[s].color});return r.a.createElement("span",{key:t,className:De.a.mention,style:a},"@",e)})),s=Fe()(s,Ge,(function(e){return r.a.createElement("a",{key:e,href:e,rel:"noopener noreferrer",target:"_blank"},e)}))),r.a.createElement("div",{className:De.a.messageContent},s)},ze=function e(t){var a,n,s,o=t.message,l=t.onClick,c=t.reply,i=W().state,u=i.onlineUsers.find((function(e){return e.user_id===o.user.user_id}))||o.user,m=u.contrastColor||"#".concat(u.color),d="dotdot"===u.user_id,p=d||i.onlineUsers.findIndex((function(e){return e.user_id===u.user_id}))>-1,f="circle";u.icon?f=u.icon:u.user_id===(null===(a=i.auth.user)||void 0===a?void 0:a.user_id)&&(f="dot-circle"),d?f="cog":o.attributes.draft?f="circle-notch":o.attributes.private?f="lock":p||(f="meh");var g,h=!c&&l&&!d&&!o.attributes.draft,E=f;return u.user_id===(null===(n=i.auth.user)||void 0===n?void 0:n.user_id)&&(E=["far",f]),g=c?o.content.join(". "):o.content.map((function(e,t){return r.a.createElement(He,{content:e,isSystem:d,onlineUsers:i.onlineUsers,key:t})})),r.a.createElement("div",{id:"message-"+o.timestamp.getTime(),className:x()(Ue.a.message,(s={},Object(H.a)(s,Ue.a.reply,c),Object(H.a)(s,Ue.a.system,d),Object(H.a)(s,Ue.a.offline,!p),Object(H.a)(s,Ue.a.inactive,!u.isActive),Object(H.a)(s,Ue.a.draft,o.attributes.draft),Object(H.a)(s,Ue.a.private,o.attributes.private),s))},h&&r.a.createElement("div",{className:Ue.a.replyButton},r.a.createElement(pe.a,{variant:"link",onClick:function(){h&&l&&l(o.timestamp.getTime())},title:"Reply to this message"},r.a.createElement(O.a,{icon:"reply"}))),r.a.createElement("div",{className:x()(Ue.a.icon,Object(H.a)({},Ue.a.private,o.attributes.private)),style:{color:m,background:m}},o.attributes.private&&r.a.createElement(M.a,{placement:"right",overlay:r.a.createElement(T.a,{id:"user-".concat(u.user_id)},"Private message from ",r.a.createElement("b",null,"@",u.name),r.a.createElement("br",null),"Only you can see this.")},r.a.createElement(O.a,{icon:E})),!o.attributes.private&&r.a.createElement(O.a,{icon:E,spin:o.attributes.draft})),r.a.createElement("div",{className:x()(Ue.a.user)},r.a.createElement("span",{style:{color:m}},u.name),!o.attributes.draft&&r.a.createElement("span",{className:x()(Ue.a.timestamp)},o.timestamp.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}))),!c&&o.attributes.replyTo&&o.attributes.replyTo.user&&r.a.createElement("a",{href:"#message-"+o.attributes.replyToTimestamp,className:Ue.a.replyBox,style:{borderLeftColor:"#".concat(o.attributes.replyTo.user.color)}},r.a.createElement(e,{reply:!0,message:o.attributes.replyTo})),r.a.createElement("div",{className:x()(Ue.a.body)},g))},Ye=a(90),Ze=a.n(Ye),Ke=function(e){var t=e.boxRef,a=e.onScrollChanged,s=e.threshold,o=e.children,l=Object(n.useState)(-1),i=Object(c.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(0),p=Object(c.a)(d,2),f=p[0],g=p[1],h=Object(n.useRef)(null),E=Object(n.useCallback)((function(e){clearTimeout(h.current),a&&(h.current=setTimeout((function(){a(e)}),150))}),[a]),_=Object(n.useCallback)((function(){if(t&&t.current){var e=t.current.scrollHeight-t.current.offsetHeight;t.current.scrollTop=e,m(t.current.scrollTop),E(!0)}}),[t,E,m]),v=Object(n.useCallback)((function(e){return function(){if(t&&t.current){if(u>0){var a=s||200;if(u>0&&Math.abs(t.current.scrollTop-u)>a)return void E(!1);E(!0)}e&&_()}}}),[t,E,s,_,u]);return Object(n.useEffect)((function(){return window.addEventListener("resize",_,!0),t&&t.current&&t.current.addEventListener("scroll",v(!1),!0),function(){window.removeEventListener("resize",_,!0)}}),[t,_,v]),Object(n.useEffect)((function(){if(t.current){var e=t.current.scrollHeight;e!==f&&(g(e),v(!0)())}}),[t,f,v,o]),r.a.createElement(r.a.Fragment,null,o)},Ve=function(e){var t=W().state,a=Object(Ae.a)({scrollAtBottom:!0,unseenMessages:!1}),s=Object(c.a)(a,2),o=s[0],l=s[1],i=Object(n.useRef)(null),u=Object(n.useCallback)((function(e){l((function(t){t.scrollAtBottom=e,e&&(t.unseenMessages=!1)}))}),[l]),m=Object(n.useCallback)((function(){if(i&&i.current){var e=i.current.scrollHeight-i.current.offsetHeight;i.current.scrollTop=e,l((function(e){e.unseenMessages=!1}))}}),[l]);return Object(n.useEffect)((function(){l((function(e){e.unseenMessages=!e.scrollAtBottom}))}),[t.messages,l]),r.a.createElement("div",{className:Ze.a.messages},o.unseenMessages&&r.a.createElement("div",{className:x()(Ze.a.unseen)},r.a.createElement(f.a,{className:Ze.a.unseenContainer},r.a.createElement(pe.a,{variant:"secondary",size:"sm",onClick:m},r.a.createElement(O.a,{icon:"arrow-alt-circle-down"})," New messages"))),r.a.createElement("div",{className:x()(Ze.a.messageScroll),ref:i},r.a.createElement("div",{className:"container"},r.a.createElement(Ke,{boxRef:i,onScrollChanged:u},t.messages.map((function(t){return r.a.createElement(ze,{key:t.timestamp.getTime(),onClick:e.onMessageClick,message:t})}))))))},Xe=a(546),qe=a(32),Je=a.n(qe),Qe=function(e){var t,a=e.onFocus,s=e.onBlur,o=e.replyTo,l=e.onCancelReply,i=W(),m=i.state,p=i.dispatch,g=Object(Ae.a)({message:"",private:!1,to:null,isCommand:!1,focused:!1}),h=Object(c.a)(g,2),E=h[0],_=h[1],v=Object(n.useRef)(null),b=Object(n.useRef)(null),y=Object(n.useContext)(w).socket,k=function(){p({type:"system_message",payload:"/help"})},C=Object(n.useCallback)((function(){_((function(e){e.focused=!0})),a&&a()}),[_,a]),T=Object(n.useCallback)((function(){_((function(e){e.focused=!1})),s&&s()}),[_,s]),M=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t||!(e.length<1||e.trim().length<1)){if("/help"===e)return k();var a=u.MESSAGE;E.isCommand&&(a=u.COMMAND);var n={content:e,attributes:{draft:t,private:E.private,to:E.to,replyToTimestamp:o?o.timestamp.getTime():null}};null===y||void 0===y||y.emit(a,n)}},j="question-circle";E.isCommand?j="code":E.private&&(j="lock");return r.a.createElement("div",{className:x()(Je.a.area,Object(H.a)({},Je.a.focused,E.focused))},r.a.createElement(f.a,{className:Je.a.container},o&&r.a.createElement("div",{className:Je.a.reply,style:{borderLeftColor:"#".concat(o.user.color)}},r.a.createElement("div",{className:Je.a.actions},r.a.createElement(pe.a,{variant:"link",onClick:l},r.a.createElement(O.a,{icon:"times"}))),r.a.createElement(ze,{reply:!0,message:o})),r.a.createElement(de.a,{noValidate:!0,onSubmit:function(e){e.preventDefault(),E.message.length<1||E.message.trim().length<1||(M(E.message),_((function(e){e.message="",e.private=!1,e.isCommand=!1})),setTimeout((function(){b.current&&b.current.focus()})),l&&l())},className:x()(Je.a.textBox,(t={},Object(H.a)(t,Je.a.private,E.private),Object(H.a)(t,Je.a.command,E.isCommand),t))},r.a.createElement(Xe.a,{className:x()(Je.a.inputGroup)},r.a.createElement(de.a.Control,{as:"input",type:"text",placeholder:"Type a message...",ref:b,autoFocus:!0,autoComplete:"off",onChange:function(e){e.preventDefault(),clearTimeout(v.current);var t=e.currentTarget.value,a=!1,n=!1,r=null;if("/"===t[0])a=!0;else if("@"===t[0]){var s=t.split(" ");n=!0,s.length>0&&"@"===s[0][0]&&d.test(s[0].substr(1))&&(r=s[0].substr(1))}_((function(e){e.message=t,e.private=n,e.to=r,e.isCommand=a})),n||a||m.draftTimer>0&&(v.current=setTimeout((function(){M(t,!0)}),m.draftTimer))},onFocus:C,onBlur:T,value:E.message}),r.a.createElement(Xe.a.Append,{className:Je.a.button},r.a.createElement(pe.a,{type:"submit"},r.a.createElement(O.a,{icon:"paper-plane"}))),r.a.createElement("div",{className:Je.a.textIcon,onClick:function(){"question-circle"===j&&k()}},r.a.createElement(O.a,{icon:j}))))))};Y.a.polyfill();var $e=function(){var e=D().state,t=Object(Ae.a)({isTextBoxFocused:!1,scrollingWhileFocused:!1,replyTo:null}),a=Object(c.a)(t,2),s=a[0],o=a[1],l=Object(n.useCallback)((function(t){o((function(a){var n=e.messages.find((function(e){return e.timestamp.getTime()===t}))||null;console.log("replying to ",n),a.replyTo=n}))}),[e.messages,o]),i=Object(n.useCallback)((function(){o((function(e){e.replyTo=null}))}),[o]),u=Object(n.useCallback)((function(){o((function(e){e.isTextBoxFocused&&(e.scrollingWhileFocused=!0)}))}),[o]);Object(n.useEffect)((function(){return window.addEventListener("scroll",u,!0),function(){window.removeEventListener("scroll",u)}}),[u]);if(!e.socket.connected)return r.a.createElement(X,null);return r.a.createElement("div",{className:x()(J.a.chat,Object(H.a)({},J.a.scrollingChat,s.scrollingWhileFocused))},r.a.createElement(Se,{scrollingWhileFocused:s.scrollingWhileFocused}),r.a.createElement(Ve,{onMessageClick:l}),r.a.createElement(Qe,{replyTo:s.replyTo,onFocus:function(){o((function(e){e.isTextBoxFocused=!0})),u()},onBlur:function(){o((function(e){e.isTextBoxFocused=!1,e.scrollingWhileFocused=!1}))},onCancelReply:i}))},et=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null))},tt=function(e){var t=D().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(G.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(G.a,{to:"/login"}):r.a.createElement(et,null)},at=function(e){var t=D().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(G.a,{to:"/"}):r.a.createElement(G.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(et,null)},nt=a(159),rt=a.n(nt),st=function(){var e=D().state;if(!e.offline&&!e.error)return null;var t=e.error;return Array.isArray(t)&&(t=t.join(". ")),"string"!==typeof t&&(t=String(t)),e.error?r.a.createElement("div",{className:rt.a.offline},"Error: ",t):r.a.createElement("div",{className:rt.a.offline},"You seem to be offline! Please try again later")},ot=(a(255),a(260)),lt=a(256),ct=a.n(lt),it=function(){var e=D().dispatch,t=Object(Ae.a)({username:"",password:"",verified:!1,hasPassword:!1,loading:!1}),a=Object(c.a)(t,2),s=a[0],o=a[1],l=Object(n.useRef)(null),i=function(t){if(t&&!s.loading){o((function(e){e.loading=!0}));var a={username:s.username,password:s.password,captchaToken:t};be("/auth","POST",a).then((function(t){if(l.current.resetCaptcha&&l.current.resetCaptcha(),!t||!t.user.user_id)return console.warn("Invalid user object"),void e({type:"login",payload:null});e({type:"login",payload:t})})).catch((function(t){400!==t.status&&e({type:"error",payload:t.errors.join(", ")}),l.current.resetCaptcha&&l.current.resetCaptcha(),o((function(e){e.loading=!1,e.verified=t.data&&t.data.verified||!1,400===t.status&&(e.hasPassword=!0)}))}))}},u="light";return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(u="dark"),r.a.createElement(f.a,{className:x()(ct.a.login,"mt-4")},r.a.createElement(V,null),r.a.createElement(de.a,{noValidate:!0,onSubmit:function(e){e.preventDefault(),s.verified?i("verified"):l.current.execute()}},r.a.createElement(de.a.Group,{controlId:"loginForm.username"},r.a.createElement(de.a.Control,{as:"input",type:"text",autoComplete:"username",placeholder:"What's your name?",disabled:s.loading,autoFocus:!0,minLength:1,maxLength:20,onChange:function(e){var t=e.currentTarget.value;o((function(e){e.username=t}))},value:s.username}),s.hasPassword&&r.a.createElement(de.a.Control,{as:"input",className:"mt-2",type:"password",placeholder:"Password...",autoComplete:"current-password",disabled:s.loading,autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;o((function(e){e.password=t}))},value:s.password}),r.a.createElement(ot.a,{ref:l,size:"invisible",theme:u,sitekey:p,onChange:i}),!1,r.a.createElement("p",{className:"text-center mt-4"},r.a.createElement(pe.a,{type:"submit",size:"sm"},"Login")))))},ut=function e(t){be("/auth","GET").then((function(e){if(!e||!e.user.user_id)return console.warn("Invalid user object"),void t({type:"login",payload:null});t({type:"login",payload:e})})).catch((function(a){"Network Error"===a.message?(t({type:"offline",payload:null}),setTimeout((function(){e(t)}),2e3)):(401!==a.status&&t({type:"error",payload:a.errors.join(", ")}),t({type:"login",payload:null}))}))},mt=function(){var e=W(),t=e.state,a=e.dispatch;return Object(n.useEffect)((function(){t.auth.checked||ut(a)}),[t.auth.checked,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(st,null),r.a.createElement(G.d,null,r.a.createElement(at,{path:"/login",component:it}),r.a.createElement(tt,{path:"/admin",component:B}),r.a.createElement(tt,{path:"/",component:$e})))},dt=a(257),pt=a.n(dt),ft=a(258),gt=a(259),ht=a.n(gt),Et=function(){var e=W().state,t=Object(Ae.a)({lastSound:new Date,windowFocused:!0,titleNotification:!1}),a=Object(c.a)(t,2),s=a[0],o=a[1],l=Object(n.useContext)(w).socket,i=Object(ft.a)(ht.a,{interrupt:!0,volume:.5}),u=Object(c.a)(i,1)[0],m=Object(n.useCallback)((function(e){return function(t){t.attributes.draft||e===t.user.user_id||o((function(e){e.windowFocused||(e.titleNotification=!0,(!e.lastSound||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return t.getTime()-e.getTime()}(e.lastSound)>5e3)&&(e.lastSound=new Date,u({})))}))}}),[o,u]),d=Object(n.useCallback)((function(){o((function(e){e.titleNotification=!1,e.windowFocused=!0}))}),[o]),p=Object(n.useCallback)((function(){o((function(e){e.windowFocused=!1}))}),[o]),f=e.auth.user?e.auth.user.user_id:null;return Object(n.useEffect)((function(){l&&f&&l.on("message",m(f))}),[l,m,f]),Object(n.useEffect)((function(){return window.addEventListener("focus",d),window.addEventListener("blur",p),function(){window.removeEventListener("focus",d),window.removeEventListener("blur",p)}}),[d,p]),r.a.createElement(pt.a,null,r.a.createElement("title",null,s.titleNotification?"\u2022\u2022 dotdot":"dotdot"))},_t=a(78),vt=a(9),bt=a(11);_t.b.add(vt.G,vt.H,vt.c,vt.h,bt.c,vt.d,vt.e,vt.f,vt.b,vt.I,bt.B,vt.a,vt.g,vt.i,vt.j,vt.k,vt.l,vt.m,vt.n,vt.o,vt.p,vt.q,vt.r,vt.s,vt.t,vt.u,vt.v,vt.w,vt.x,vt.y,vt.z,vt.A,vt.B,vt.C,vt.D,vt.E,vt.F,vt.J,vt.K,vt.O,vt.P,vt.R,vt.S,vt.T,vt.U,vt.W,bt.a,bt.b,bt.d,bt.e,bt.f,bt.g,bt.h,bt.i,bt.j,bt.k,bt.l,bt.m,bt.n,bt.o,bt.p,bt.q,bt.r,bt.s,bt.t,bt.u,bt.v,bt.w,bt.x,bt.y,bt.z,bt.A,bt.C,bt.D,bt.E,bt.F,bt.G,bt.H,bt.I,bt.J,bt.K,vt.Q,vt.M,vt.L,vt.V,vt.N);a(533);var yt=r.a.createElement(l.a,{basename:"/"},r.a.createElement(P,null,r.a.createElement(k,null,r.a.createElement(Et,null),r.a.createElement(mt,null))));o.a.render(yt,document.getElementById("root"))},73:function(e,t,a){e.exports={badge:"UserBadge_badge__28gDi",lock:"UserBadge_lock__EV7LR",closed:"UserBadge_closed__3uZeG",pulse:"UserBadge_pulse__3c_w7",dot:"UserBadge_dot__1T6bu",name:"UserBadge_name__jOOgp"}},86:function(e,t,a){e.exports={dashboardWidget:"Widget_dashboardWidget__Z_mwK",title:"Widget_title__2QBZt",content:"Widget_content__1BMNx",icon:"Widget_icon__3cYOg",blue:"Widget_blue__1DB9R",green:"Widget_green__2mXfC",orange:"Widget_orange__X3jtY",history:"Widget_history__1eQoj",change:"Widget_change__36iJl","text-muted":"Widget_text-muted__1SkGI"}},87:function(e,t,a){e.exports={logo:"Logo_logo__30xDu",svgFilter:"Logo_svgFilter__1s9i7",blob:"Logo_blob__1iSwo","blob-first":"Logo_blob-first__3YKrD","blob-second":"Logo_blob-second__2r5Nx"}},88:function(e,t,a){e.exports={header:"Header_header__2XEwx",logo:"Header_logo__1GzGV",badge:"Header_badge__3OtLN",onlineUsers:"Header_onlineUsers__2EikY",online:"Header_online__2vz5R"}},90:function(e,t,a){e.exports={messages:"Messages_messages__tCmp1",messageScroll:"Messages_messageScroll__CCnSp",unseen:"Messages_unseen__gVw6f",unseenContainer:"Messages_unseenContainer__3haBw"}}},[[288,1,2]]]);
//# sourceMappingURL=main.b6a297e8.chunk.js.map