(this.webpackJsonpdotdot=this.webpackJsonpdotdot||[]).push([[0],{115:function(e,t,a){e.exports={chat:"Chat_chat__LEZtX",scrollingChat:"Chat_scrollingChat__165RB",header:"Chat_header__ThKzr"}},150:function(e,t,a){e.exports={messageContent:"MessageContent_messageContent__2lJQW",mention:"MessageContent_mention__1rALG"}},155:function(e,t,a){e.exports={offline:"OfflineCheck_offline__2vKbm"}},22:function(e,t,a){e.exports={message:"Message_message__2v30T",replyButton:"Message_replyButton__15_Mb",mention:"Message_mention__82QFp",system:"Message_system__2g6ZE",user:"Message_user__3HofW",timestamp:"Message_timestamp__2armv",offline:"Message_offline__32gHu",icon:"Message_icon__ATXFm",inactive:"Message_inactive__2OBrK",body:"Message_body__32TEj",draft:"Message_draft__1zB7h",header:"Message_header__3wUCX",private:"Message_private__ORZ48",replyBox:"Message_replyBox__1NP5z",reply:"Message_reply__jMrB5"}},248:function(e,t,a){e.exports={onlineUsers:"OnlineUsers_onlineUsers__2Umxk"}},251:function(e,t,a){e.exports={login:"Login_login__38Hzs"}},254:function(e,t,a){e.exports=a.p+"static/media/newMessage.482e2f99.mp3"},283:function(e,t,a){e.exports=a(529)},41:function(e,t,a){e.exports={area:"TextBox_area__udJ9V",reply:"TextBox_reply__2tzzr",actions:"TextBox_actions__1geZu",textBox:"TextBox_textBox__McZeC",textIcon:"TextBox_textIcon__mlsnG",inputGroup:"TextBox_inputGroup__1PdvA",button:"TextBox_button__FdM7P",private:"TextBox_private__1kesE",command:"TextBox_command__1uXWO"}},494:function(e,t){},528:function(e,t,a){},529:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(17),o=a.n(s),l=a(54),c=a(13),i=a(82),u={CONNECT:"connect",DISCONNECT:"disconnect",MESSAGE:"message",COMMAND:"command",HISTORY:"history",ONLINE_USERS:"users",STATS:"stats",TIMER:"timer",CONTROL:"control",CHANGE_ROOM:"change_room"},m="https://api.dotdot.im",d=/^[A-Za-z0-9]+(?:[ _][A-Za-z0-9]+)*_?$/i,p="6LddUucUAAAAAIk_E1AoLY5YyxoulIzlyRLjMoMi",f=a(538),h=a(539),g=a(246),E=a(19),v=function(e){for(var t=e.data.map((function(e,t){return{date:t,value:e}})),a=t.length;a<A;a++)t.push({date:a,value:0});return r.a.createElement("div",{style:{width:"100%",height:"".concat(e.height||250,"px")}},r.a.createElement(E.f,null,r.a.createElement(E.b,{data:t,barSize:5,barCategoryGap:2,barGap:2,margin:{top:50,bottom:20,left:0,right:0}},r.a.createElement(E.i,{allowDecimals:!1}),r.a.createElement(E.h,{dataKey:"date",tick:!1},r.a.createElement(E.e,{value:e.label,position:"bottom",offset:-15,fill:"#ccc"})),r.a.createElement(E.a,{dataKey:"value",fill:"#f75f00",stroke:"#f75f00",isAnimationActive:!1,type:"linear"}),r.a.createElement(E.g,{cursor:{fill:"rgba(255, 255, 255, 0.1)"}}))))};function b(e){for(var t=[[Math.floor(e/31536e3),"y"],[Math.floor(e%31536e3/86400),"d"],[Math.floor(e%31536e3%86400/3600),"h"],[Math.floor(e%31536e3%86400%3600/60),"m"],[e%31536e3%86400%3600%60,"s"]],a="",n=0,r=t.length;n<r;n++)0!==t[n][0]&&(a+=" "+t[n][0]+t[n][1]);return a.trim()}var y=a(240),_=a.n(y),w=Object(n.createContext)({socket:null}),k=function(e){var t,a=D(),s=a.state,o=a.dispatch,l=Object(n.useState)(null),i=Object(c.a)(l,2),d=i[0],p=i[1],f=null===(t=s.auth.user)||void 0===t?void 0:t.hasPassword;Object(n.useEffect)((function(){if(s.auth.loggedIn&&!d){o({type:"error",payload:null});var e=_()(m,{reconnection:!0,timeout:2e3});setInterval((function(){e.connected&&e.emit("timer")}),3e4),f||setTimeout((function(){o({type:"system_message",payload:"Remember: If you want to keep this username, you must set a password! You can set it by clicking on the lock icon on the top left of the screen."})}),6e4),Object.values(u).forEach((function(t){e.on(t,(function(e){o({type:"socket_".concat(t),payload:e})}))})),e.on("stats",(function(e){o({type:"stats",payload:e})})),e.on("connect_error",(function(){o({type:"offline",payload:null})})),e.on("connect_timeout",(function(){o({type:"offline",payload:null})})),e.on("error",(function(e){o({type:"socket_".concat(u.DISCONNECT)}),e?(o({type:"error",payload:e}),o({type:"login",payload:null})):o({type:"offline",payload:null})})),p(e)}}),[o,d,s.auth.loggedIn,f]);var h={socket:d};return r.a.createElement(w.Provider,{value:h},e.children)},C=a(2),x=a.n(C),T=a(18),O=a(536),M=a(544),j=a(86),N=a.n(j),S=function(e){var t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:N.a.title},e.title),r.a.createElement("span",{className:N.a.content},e.content),e.icon&&r.a.createElement("span",{className:x()("icon",e.iconBg)},r.a.createElement(T.a,{icon:e.icon})),r.a.createElement("div",{className:N.a.history},r.a.createElement("span",{className:"text-muted"},e.history)));if(t=r.a.createElement("div",{className:N.a.dashboardWidget},t),!e.tooltip)return t;var a=r.a.createElement(O.a,{id:"counterTooltip"},e.tooltip);return r.a.createElement(M.a,{delay:{show:50,hide:0},overlay:a},t)},A=100,I=function(){var e=W().state,t=Object(n.useContext)(w).socket,a=e.stats.timeActive+e.stats.timeInactive,s=[[{header:"Time Active / Session",data:b(Math.round(e.stats.timeActive/e.stats.sessions)),detail:"Total: "+b(e.stats.timeActive)+" ("+Math.round(100*e.stats.timeActive/a)+"%)"},{header:"Time Inactive / Session",data:b(Math.round(e.stats.timeInactive/e.stats.sessions)),detail:"Total: "+b(e.stats.timeInactive)+" ("+Math.round(100*e.stats.timeInactive/a)+"%)"}],[{header:"Users Online",data:Math.round(100*e.stats.onlineUsers/e.stats.totalUsers)+"%",detail:"".concat(e.stats.onlineUsers," out of ").concat(e.stats.totalUsers),tooltip:""},{header:"Total Messages",data:e.stats.totalMessages,detail:Math.round(e.stats.totalMessages/e.stats.totalUsers)+" messages / user"},{header:"Server",data:"CPU: "+e.stats.cpuUsage+"% - RAM: "+e.stats.freeMemory+"%",detail:"Up for "+b(e.stats.uptime),tooltip:"Shows CPU usage over the last few seconds, and free RAM"},{header:"Avg Sessions / user",data:Math.round(e.stats.sessions/e.stats.totalUsers),detail:"Total sessions: "+e.stats.sessions}]],o=e.stats.rooms;return r.a.createElement(f.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(v,{data:e.stats.messages,label:"Realtime Messages"})),r.a.createElement(g.a,null,r.a.createElement(v,{data:e.stats.users,label:"Realtime Users"}))),r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement("div",{style:{width:"100%",height:"400px"}},r.a.createElement(E.f,null,r.a.createElement(E.d,{onClick:function(e){if(e){var a=e.activePayload[0].payload.id;t&&t.emit(u.CHANGE_ROOM,{room:a})}},data:o,barSize:10,margin:{top:50,bottom:0,left:0,right:0}},r.a.createElement(E.i,{allowDecimals:!1,domain:[0,10]}),r.a.createElement(E.h,{tick:!1},r.a.createElement(E.e,{value:"Rooms",position:"bottom",offset:-15,fill:"#ccc"})),r.a.createElement(E.c,{dataKey:"active",stackId:"a",fill:"#f75f00"}),r.a.createElement(E.c,{dataKey:"inactive",stackId:"a",fill:"#555"}),r.a.createElement(E.g,{cursor:{fill:"rgba(255, 255, 255, 0.1)"}})))))),r.a.createElement(f.a,{className:"mt-4"},s.map((function(e,t){return r.a.createElement(h.a,{key:t},e.map((function(e){return r.a.createElement(g.a,{key:e.header},r.a.createElement(S,{title:e.header,content:e.data,history:e.detail,tooltip:e.tooltip}))})))}))))},B=function(e){var t=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e),a=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches;if(!t)return"#0000FF";var n=function(e,t,a){var n=[e,t,a].map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}));return.2126*n[0]+.7152*n[1]+.0722*n[2]}(t.r,t.g,t.b),r=0;return a&&n>=.5?r=-n:!a&&n<.5&&(r=n+.2),r&&function(e,t){var a,n,r,s,o,l,i,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,m=arguments.length>3&&void 0!==arguments[3]&&arguments[3],d=parseInt,p=Math.round,f="string"==typeof u;return"number"!=typeof e||e<-1||e>1||"string"!=typeof t||"r"!=t[0]&&"#"!=t[0]||u&&!f?null:(window.pSBCr||(window.pSBCr=function(e){var t=e.length,s={};if(t>9){var o,l;if(o=e=e.split(","),l=Object(c.a)(o,4),a=l[0],n=l[1],r=l[2],f=l[3],(t=e.length)<3||t>4)return null;s.r=d("a"==a[3]?a.slice(5):a.slice(4)),s.g=d(n),s.b=d(r),s.a=f?parseFloat(f):-1}else{if(8==t||6==t||t<4)return null;t<6&&(e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+(t>4?e[4]+e[4]:"")),e=d(e.slice(1),16),9==t||5==t?(s.r=e>>24&255,s.g=e>>16&255,s.b=e>>8&255,s.a=p((255&e)/.255)/1e3):(s.r=e>>16,s.g=e>>8&255,s.b=255&e,s.a=-1)}return s}),i=t.length>9,i=f?u.length>9||"c"==u&&!i:i,o=window.pSBCr(t),s=e<0,l=u&&"c"!=u?window.pSBCr(u):s?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},s=1-(e=s?-1*e:e),o&&l?(m?(a=p(s*o.r+e*l.r),n=p(s*o.g+e*l.g),r=p(s*o.b+e*l.b)):(a=p(Math.pow(s*Math.pow(o.r,2)+e*Math.pow(l.r,2),.5)),n=p(Math.pow(s*Math.pow(o.g,2)+e*Math.pow(l.g,2),.5)),r=p(Math.pow(s*Math.pow(o.b,2)+e*Math.pow(l.b,2),.5))),f=o.a,l=l.a,f=(o=f>=0||l>=0)?f<0?l:l<0?f:f*s+l*e:0,i?"rgb"+(o?"a(":"(")+a+","+n+","+r+(o?","+p(1e3*f)/1e3:"")+")":"#"+(4294967296+16777216*a+65536*n+256*r+(o?p(255*f):0)).toString(16).slice(1,o?void 0:-2)):null)}(r,e)||e},F=Object(i.a)((function(e,t){switch(t.type){case"login":if(e.offline||(e.auth.checked=!0),!t.payload){e.auth.loggedIn=!1,e.auth.user=null;break}e.offline=!1,e.auth.loggedIn=!0,e.auth.user=t.payload.user;break;case"offline":e.offline=!0,e.error=null,e.socket.connected=!1;break;case"error":e.error=t.payload;break;case"user_password":e.auth.user&&(e.auth.user.hasPassword=!0);break;case"system_message":var a={user:L,content:[t.payload],timestamp:new Date,attributes:{private:!1,draft:!1}};e.messages.push(a);break;case"socket_".concat(u.CONNECT):e.socket.connected=!0,e.offline=!1,e.error=null;break;case"socket_".concat(u.DISCONNECT):e.socket.connected=!1,e.offline=!0,e.error=null;break;case"socket_".concat(u.ONLINE_USERS):e.onlineUsers=t.payload.users.map((function(e){return e.contrastColor=B("#"+e.color),e}));break;case"socket_".concat(u.MESSAGE):var n=t.payload;n.timestamp=new Date(n.timestamp);for(var r=!1,s=-1,o=e.messages.length-1;o>=0;o--){var l=e.messages[o];if(l.attributes.draft||(r=!0),l.attributes.draft&&l.user.user_id===n.user.user_id){s=o;break}}var c=n.content.trim().length<1;if(s>-1)if(r||!n.attributes.draft)e.messages.splice(s,1);else if(!c&&n.attributes.draft)return e.messages[s].content[0]=n.content,void(e.messages[s].timestamp=new Date(n.timestamp));if(c)return;if(n.attributes.replyToTimestamp){var i=e.messages.find((function(e){return e.timestamp.getTime()===n.attributes.replyToTimestamp}))||null;i&&i.user&&(n.attributes.replyTo=i)}if(!n.attributes.draft){var m=e.messages[e.messages.length-1];if(m&&m.user.user_id===n.user.user_id&&m.attributes.private===n.attributes.private&&m.attributes.replyToTimestamp===n.attributes.replyToTimestamp)return m.content.push(n.content),void(m.timestamp=new Date(n.timestamp))}var d={user:n.user,timestamp:n.timestamp,attributes:n.attributes,content:[n.content]};e.messages.push(d),e.messages.length>100&&e.messages.shift();break;case"socket_".concat(u.HISTORY):e.messages=t.payload.map((function(e){return e.timestamp=new Date(e.timestamp),e}));break;case"socket_".concat(u.STATS):e.stats.messages.push(t.payload.messages),e.stats.messages.length>A&&e.stats.messages.shift(),e.stats.users.push(t.payload.users),e.stats.users.length>A&&e.stats.users.shift(),e.stats.rooms=t.payload.rooms,e.stats.onlineUsers=t.payload.users,e.stats.totalUsers=t.payload.totalUsers,e.stats.totalMessages=t.payload.totalMessages,e.stats.cpuUsage=Math.round(100*t.payload.cpuUsage),e.stats.freeMemory=Math.round(100*t.payload.freeMemory),e.stats.uptime=Math.round(t.payload.uptime),e.stats.timeActive=30*t.payload.timeActive,e.stats.timeInactive=30*t.payload.timeInactive,e.stats.sessions=t.payload.sessions;break;case"socket_".concat(u.CONTROL):Object.keys(t.payload).forEach((function(a){"undefined"!==typeof e[a]&&(e[a]=t.payload[a])}))}})),L={user_id:"dotdot",name:"dotdot",icon:"cog",color:"f75f00",isActive:!0,hasPassword:!0},U={auth:{checked:!1,loggedIn:!1,user:null},socket:{connected:!1},draftTimer:100,onlineUsers:[],messages:[],stats:{messages:new Array(A).fill(0),users:new Array(A).fill(0),rooms:[],onlineUsers:0,totalUsers:0,totalMessages:0,cpuUsage:0,freeMemory:0,uptime:0,timeActive:0,timeInactive:0,sessions:1},offline:!1,error:null},P=r.a.createContext({state:U,dispatch:function(){return console.warn("Using default reducer, check StateProvider"),U}}),R=function(e){var t=r.a.useReducer(F,e.state||U),a=Object(c.a)(t,2),n={state:a[0],dispatch:a[1]};return r.a.createElement(P.Provider,{value:n},e.children)},D=function(){return r.a.useContext(P)},W=D,G=a(51),z=a(26),H=a(247),Y=a.n(H),K=a(87),Z=a.n(K),q=function(e){var t={};return e.infinite&&(t.animationIterationCount="infinite",t.animationDirection="alternate"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Z.a.logo},r.a.createElement("div",{className:Z.a.blob,style:t}),r.a.createElement("div",{className:Z.a.blob,style:t})),r.a.createElement("svg",{className:Z.a.svgFilter,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},r.a.createElement("defs",null,r.a.createElement("filter",{id:"goo"},r.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),r.a.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}),r.a.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},J=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{infinite:!0}))},V=a(115),Q=a.n(V),X=a(545),$=a(37),ee=a(22),te=a.n(ee),ae=a(149),ne=a.n(ae),re=a(540),se=function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Welcome to dotdot:"),r.a.createElement("p",null,"This is a place where you can chat with people whenever you want :)",r.a.createElement("br",null),"We don't save any messages, so when the last person in a chat disconnects, the chat history is lost."),r.a.createElement("p",null,"Inactive user accounts are deleted after 2 weeks without chatting."),r.a.createElement("h4",null,"Keep your User"),r.a.createElement("p",null,"You can set a password to protect your username from being deleted and used by someone else. Simply click on the lock in the top left corner."),r.a.createElement("h4",null,"Private Messages"),r.a.createElement("p",null,"You can send anyone a private message simply by starting your message with @ and their name. You'll see the text box change to orange and a lock icon appear."),r.a.createElement("p",null,"Only you and the person you send the message to can see them. If they are offline they won't receive the message"),r.a.createElement("h4",null,"Commands"),r.a.createElement("p",null,"There are some commands that you can use:"),r.a.createElement(re.a,{size:"sm",variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Command"),r.a.createElement("th",null,"Example"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"/help")),r.a.createElement("td",null,r.a.createElement("code",null,"/help")),r.a.createElement("td",null,"It shows this message")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"/set color")),r.a.createElement("td",null,r.a.createElement("code",null,"/set color eb0000")),r.a.createElement("td",null,"Change your color, the color needs to be a hex representation (sorry if this sounds confusing, soon there will be an easier way to do this)")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"/set icon")),r.a.createElement("td",null,r.a.createElement("code",null,"/set icon smile")),r.a.createElement("td",null,"Change your icon, pick any of the ones from ",r.a.createElement("a",{href:"https://fontawesome.com/icons?d=gallery&s=regular&c=emoji&m=free",rel:"noopener noreferrer",target:"_blank"},"this list"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"/list")),r.a.createElement("td",null,r.a.createElement("code",null,"/list")),r.a.createElement("td",null,"Get a list of the users who are currently online")))))},oe=a(150),le=a.n(oe),ce=new RegExp("@([A-Za-z0-9]+(?:[_][A-Za-z0-9]+)*_?)","gmi"),ie=new RegExp(/((?:ftp|http|https):\/\/(?:\w+:{0,1}\w*@)?(?:\S+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:.?+=&%@!\-/]))?)/,"gmi"),ue=function(e){var t=e.content,a=e.isSystem,n=e.onlineUsers,s=t;return a&&"/help"===t?s=r.a.createElement(se,null):(s=ne()(s,ce,(function(e,t){var a={},s=n.findIndex((function(t){return t.name===e}));s>-1&&(a={color:n[s].contrastColor||"#"+n[s].color});return r.a.createElement("span",{key:t,className:le.a.mention,style:a},"@",e)})),s=ne()(s,ie,(function(e){return r.a.createElement("a",{key:e,href:e,rel:"noopener noreferrer",target:"_blank"},e)}))),r.a.createElement("div",{className:le.a.messageContent},s)},me=function e(t){var a,n,s,o=t.message,l=t.onClick,c=t.reply,i=W().state,u=i.onlineUsers.find((function(e){return e.user_id===o.user.user_id}))||o.user,m=u.contrastColor||"#".concat(u.color),d="dotdot"===u.user_id,p=d||i.onlineUsers.findIndex((function(e){return e.user_id===u.user_id}))>-1,f="circle";u.icon?f=u.icon:u.user_id===(null===(a=i.auth.user)||void 0===a?void 0:a.user_id)&&(f="dot-circle"),d?f="cog":o.attributes.draft?f="circle-notch":o.attributes.private?f="lock":p||(f="meh");var h,g=!c&&l&&!d&&!o.attributes.draft,E=f;return u.user_id===(null===(n=i.auth.user)||void 0===n?void 0:n.user_id)&&(E=["far",f]),h=c?o.content.join(". "):o.content.map((function(e,t){return r.a.createElement(ue,{content:e,isSystem:d,onlineUsers:i.onlineUsers,key:t})})),r.a.createElement("div",{id:"message-"+o.timestamp.getTime(),className:x()(te.a.message,(s={},Object(z.a)(s,te.a.reply,c),Object(z.a)(s,te.a.system,d),Object(z.a)(s,te.a.offline,!p),Object(z.a)(s,te.a.inactive,!u.isActive),Object(z.a)(s,te.a.draft,o.attributes.draft),Object(z.a)(s,te.a.private,o.attributes.private),s))},g&&r.a.createElement("div",{className:te.a.replyButton},r.a.createElement(X.a,{variant:"link",onClick:function(){g&&l&&l(o.timestamp.getTime())},title:"Reply to this message"},r.a.createElement(T.a,{icon:"reply"}))),r.a.createElement("div",{className:x()(te.a.icon,Object(z.a)({},te.a.private,o.attributes.private)),style:{color:m,background:m}},o.attributes.private&&r.a.createElement(M.a,{placement:"right",overlay:r.a.createElement(O.a,{id:"user-".concat(u.user_id)},"Private message from ",r.a.createElement("b",null,"@",u.name),r.a.createElement("br",null),"Only you can see this.")},r.a.createElement(T.a,{icon:E})),!o.attributes.private&&r.a.createElement(T.a,{icon:E,spin:o.attributes.draft})),r.a.createElement("div",{className:x()(te.a.user)},r.a.createElement("span",{style:{color:m}},u.name),!o.attributes.draft&&r.a.createElement("span",{className:x()(te.a.timestamp)},o.timestamp.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}))),!c&&o.attributes.replyTo&&o.attributes.replyTo.user&&r.a.createElement("a",{href:"#message-"+o.attributes.replyToTimestamp,className:te.a.replyBox,style:{borderLeftColor:"#".concat(o.attributes.replyTo.user.color)}},r.a.createElement(e,{reply:!0,message:o.attributes.replyTo})),r.a.createElement("div",{className:x()(te.a.body)},h))},de=a(88),pe=a.n(de),fe=function(e){var t=e.boxRef,a=e.onScrollChanged,s=e.threshold,o=e.children,l=Object(n.useState)(-1),i=Object(c.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(0),p=Object(c.a)(d,2),f=p[0],h=p[1],g=Object(n.useRef)(null),E=Object(n.useCallback)((function(e){clearTimeout(g.current),a&&(g.current=setTimeout((function(){a(e)}),150))}),[a]),v=Object(n.useCallback)((function(){if(t&&t.current){var e=t.current.scrollHeight-t.current.offsetHeight;t.current.scrollTop=e,m(t.current.scrollTop),E(!0)}}),[t,E,m]),b=Object(n.useCallback)((function(e){return function(){if(t&&t.current){if(u>0){var a=s||200;if(u>0&&Math.abs(t.current.scrollTop-u)>a)return void E(!1);E(!0)}e&&v()}}}),[t,E,s,v,u]);return Object(n.useEffect)((function(){return window.addEventListener("resize",v,!0),t&&t.current&&t.current.addEventListener("scroll",b(!1),!0),function(){window.removeEventListener("resize",v,!0)}}),[t,v,b]),Object(n.useEffect)((function(){if(t.current){var e=t.current.scrollHeight;e!==f&&(h(e),b(!0)())}}),[t,f,b,o]),r.a.createElement(r.a.Fragment,null,o)},he=function(e){var t=W().state,a=Object($.a)({scrollAtBottom:!0,unseenMessages:!1}),s=Object(c.a)(a,2),o=s[0],l=s[1],i=Object(n.useRef)(null),u=Object(n.useCallback)((function(e){l((function(t){t.scrollAtBottom=e,e&&(t.unseenMessages=!1)}))}),[l]),m=Object(n.useCallback)((function(){if(i&&i.current){var e=i.current.scrollHeight-i.current.offsetHeight;i.current.scrollTop=e,l((function(e){e.unseenMessages=!1}))}}),[l]);return Object(n.useEffect)((function(){l((function(e){e.unseenMessages=!e.scrollAtBottom}))}),[t.messages,l]),r.a.createElement("div",{className:pe.a.messages},o.unseenMessages&&r.a.createElement("div",{className:x()(pe.a.unseen)},r.a.createElement(f.a,{className:pe.a.unseenContainer},r.a.createElement(X.a,{variant:"secondary",size:"sm",onClick:m},r.a.createElement(T.a,{icon:"arrow-alt-circle-down"})," New messages"))),r.a.createElement("div",{className:x()(pe.a.messageScroll),ref:i},r.a.createElement("div",{className:"container"},r.a.createElement(fe,{boxRef:i,onScrollChanged:u},t.messages.map((function(t){return r.a.createElement(me,{key:t.timestamp.getTime(),onClick:e.onMessageClick,message:t})}))))))},ge=a(543),Ee=a(541),ve=a(41),be=a.n(ve),ye=function(e){var t,a=e.onFocus,s=e.onBlur,o=e.replyTo,l=e.onCancelReply,i=W(),m=i.state,p=i.dispatch,h=Object($.a)({message:"",private:!1,to:null,isCommand:!1}),g=Object(c.a)(h,2),E=g[0],v=g[1],b=Object(n.useRef)(null),y=Object(n.useContext)(w).socket,_=function(){p({type:"system_message",payload:"/help"})},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t||!(e.length<1||e.trim().length<1)){if("/help"===e)return _();var a=u.MESSAGE;E.isCommand&&(a=u.COMMAND);var n={content:e,attributes:{draft:t,private:E.private,to:E.to,replyToTimestamp:o?o.timestamp.getTime():null}};null===y||void 0===y||y.emit(a,n)}},C="question-circle";E.isCommand?C="code":E.private&&(C="lock");return r.a.createElement("div",{className:be.a.area},r.a.createElement(f.a,null,o&&r.a.createElement("div",{className:be.a.reply,style:{borderLeftColor:"#".concat(o.user.color)}},r.a.createElement("div",{className:be.a.actions},r.a.createElement(X.a,{variant:"link",onClick:l},r.a.createElement(T.a,{icon:"times"}))),r.a.createElement(me,{reply:!0,message:o})),r.a.createElement(ge.a,{noValidate:!0,onSubmit:function(e){e.preventDefault(),E.message.length<1||E.message.trim().length<1||(k(E.message),v((function(e){e.message="",e.private=!1,e.isCommand=!1})),l&&l())},className:x()(be.a.textBox,(t={},Object(z.a)(t,be.a.private,E.private),Object(z.a)(t,be.a.command,E.isCommand),t))},r.a.createElement(Ee.a,{className:be.a.inputGroup},r.a.createElement(ge.a.Control,{as:"input",type:"text",placeholder:"Type a message...",autoFocus:!0,autoComplete:"off",onChange:function(e){e.preventDefault(),clearTimeout(b.current);var t=e.currentTarget.value,a=!1,n=!1,r=null;if("/"===t[0])a=!0;else if("@"===t[0]){var s=t.split(" ");n=!0,s.length>0&&"@"===s[0][0]&&d.test(s[0].substr(1))&&(r=s[0].substr(1))}v((function(e){e.message=t,e.private=n,e.to=r,e.isCommand=a})),n||a||m.draftTimer>0&&(b.current=setTimeout((function(){k(t,!0)}),m.draftTimer))},onFocus:a,onBlur:s,value:E.message}),r.a.createElement(Ee.a.Append,{className:be.a.button},r.a.createElement(X.a,{type:"submit"},r.a.createElement(T.a,{icon:"paper-plane"}))),r.a.createElement("div",{className:be.a.textIcon,onClick:function(){"question-circle"===C&&_()}},r.a.createElement(T.a,{icon:C}))))))},_e=a(248),we=a.n(_e),ke=function(){var e=W().state;return r.a.createElement("div",{className:we.a.onlineUsers},e.onlineUsers.map((function(t){var a=e.auth.user&&t.user_id===e.auth.user.user_id,n="circle";t.icon?n=t.icon:e.auth.user&&t.user_id===e.auth.user.user_id&&(n="dot-circle"),t.isActive||(n="meh");var s=n;a&&(s=["far",n]);var o="";t.isActive||(o=" (away)");var l=t.contrastColor||"#".concat(t.color);return r.a.createElement(M.a,{key:t.user_id,placement:"bottom",overlay:r.a.createElement(O.a,{id:"user-".concat(t.user_id)},"@",t.name,o)},r.a.createElement("span",{style:{color:l}},r.a.createElement(T.a,{icon:s})))})))},Ce=a(542),xe=a(73),Te=a.n(xe),Oe=a(89),Me=a.n(Oe),je=a(151),Ne=a(152),Se=a.n(Ne),Ae="";Se.a.defaults.withCredentials=!0;var Ie=function(){var e=Object(je.a)(Me.a.mark((function e(t,a,n){var r,s,o;return Me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("'url' is required for fetching data");case 2:return r="".concat(m).concat(t),s={url:r,method:a,data:n,timeout:6e3,withCredentials:!0,xsrfHeaderName:"x-csrf-token",headers:{}},Ae.length>0&&(s.headers["x-csrf-token"]=Ae),e.prev=5,e.next=8,Se()(s);case 8:return(o=e.sent).headers["x-csrf-token"]&&(Ae=o.headers["x-csrf-token"]),e.next=12,o.data;case 12:return e.abrupt("return",e.sent);case 15:if(e.prev=15,e.t0=e.catch(5),!e.t0.response){e.next=21;break}throw console.warn("useFetch error on ".concat(a," ").concat(t),e.t0.response),{status:e.t0.response.status,message:Be(e.t0),errors:Fe(e.t0),data:e.t0.response.data};case 21:throw console.warn("useFetch network error on ".concat(a," ").concat(t),e.t0),{status:500,message:e.t0.message,errors:[e.t0.message]};case 24:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t,a,n){return e.apply(this,arguments)}}();function Be(e){return e.response&&e.response.data?Fe(e).join(". "):e.message||"An error occurred"}function Fe(e){return e.response&&e.response.data?function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var a=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];if(Array.isArray(a))return a;if("string"===typeof a)return[a]}return[e]}("An error occurred",e.response.data,e.response.data.errors,e.response.data.error):[e.message||"An error occurred"]}var Le=function(){var e=W(),t=e.state,a=e.dispatch,s=Object(n.useState)(!1),o=Object(c.a)(s,2),l=o[0],i=o[1],u=Object(n.useState)(!1),d=Object(c.a)(u,2),p=d[0],f=d[1],h=Object(n.useState)(""),g=Object(c.a)(h,2),E=g[0],v=g[1],b=Object(n.useState)(""),y=Object(c.a)(b,2),_=y[0],w=y[1],k=Te.a.unlocked,C="lock-open",j="Set a password to keep your username",N="Claim Username";return t.auth.user&&t.auth.user.hasPassword&&(k=Te.a.locked,C="lock",j="Change your password",N="Update Password"),r.a.createElement("span",{className:Te.a.passwordLock},r.a.createElement(M.a,{placement:"bottom",delay:500,overlay:r.a.createElement(O.a,{id:"passwordLock"},j)},r.a.createElement(X.a,{variant:"link",className:k,style:{padding:0},onClick:function(){return i(!0)}},r.a.createElement(T.a,{icon:C}))),r.a.createElement(Ce.a,{show:l,onHide:function(){return i(!1)}},r.a.createElement(ge.a,{noValidate:!0,validated:p,onSubmit:function(e){(e.preventDefault(),e.stopPropagation(),f(!0),e.currentTarget.checkValidity())&&Ie("/password","POST",{password:E,repeatPassword:_}).then((function(){a({type:"user_password",payload:!0}),i(!1),f(!1),v(""),w("")})).catch((function(e){a({type:"error",payload:e.errors.join(", ")})}))}},r.a.createElement(Ce.a.Header,{closeButton:!0},r.a.createElement(Ce.a.Title,null,N)),r.a.createElement(Ce.a.Body,null,r.a.createElement(ge.a.Group,{controlId:"pwd.new"},r.a.createElement(ge.a.Control,{as:"input",type:"password",autoComplete:"new-password",placeholder:"Password...",autoFocus:!0,required:!0,minLength:6,onChange:function(e){v(e.currentTarget.value)},value:E}),r.a.createElement(ge.a.Control.Feedback,{type:"invalid"},"The password is too short. Minimum length is 6 characters.")),r.a.createElement(ge.a.Group,{controlId:"pwd.new"},r.a.createElement(ge.a.Control,{as:"input",type:"password",autoComplete:"new-password",placeholder:"Repeat Password...",required:!0,minLength:6,pattern:E,onChange:function(e){w(e.currentTarget.value)},value:_}),r.a.createElement(ge.a.Control.Feedback,{type:"invalid"},"The passwords don't match!"))),r.a.createElement(Ce.a.Footer,{className:Te.a.footer},r.a.createElement("a",{href:"".concat(m,"/logout"),className:x()(Te.a.left,"text-danger")},"Logout"),r.a.createElement(X.a,{type:"submit",variant:"primary"},"Set password")))))};Y.a.polyfill();var Ue=function(){var e=D().state,t=Object($.a)({isTextBoxFocused:!1,scrollingWhileFocused:!1,replyTo:null}),a=Object(c.a)(t,2),s=a[0],o=a[1],i=r.a.createElement(J,null),u=Object(n.useCallback)((function(t){o((function(a){var n=e.messages.find((function(e){return e.timestamp.getTime()===t}))||null;console.log("replying to ",n),a.replyTo=n}))}),[e.messages,o]),m=Object(n.useCallback)((function(){o((function(e){e.replyTo=null}))}),[o]),d=Object(n.useCallback)((function(){o((function(e){e.isTextBoxFocused&&(e.scrollingWhileFocused=!0)}))}),[o]);Object(n.useEffect)((function(){return window.addEventListener("scroll",d,!0),function(){window.removeEventListener("scroll",d)}}),[d]);var p={position:"static",top:0};return s.scrollingWhileFocused&&(p.position="absolute",p.top=window.pageYOffset+"px"),e.socket.connected&&(i=r.a.createElement("div",{className:x()(Q.a.chat,Object(z.a)({},Q.a.scrollingChat,s.scrollingWhileFocused))},r.a.createElement("div",{className:x()(Q.a.header),style:p},r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(Le,null),e.auth.user&&e.auth.user.isAdmin&&r.a.createElement(l.b,{to:"/admin",title:"Monitoring",style:{marginLeft:"1em"}},r.a.createElement(T.a,{icon:"shield-alt"}))),r.a.createElement(g.a,null,r.a.createElement(ke,null))))),r.a.createElement(he,{onMessageClick:u}),r.a.createElement(ye,{replyTo:s.replyTo,onFocus:function(){o((function(e){e.isTextBoxFocused=!0})),d()},onBlur:function(){o((function(e){e.isTextBoxFocused=!1,e.scrollingWhileFocused=!1}))},onCancelReply:m}))),i},Pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null))},Re=function(e){var t=D().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(G.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(G.a,{to:"/login"}):r.a.createElement(Pe,null)},De=function(e){var t=D().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(G.a,{to:"/"}):r.a.createElement(G.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(Pe,null)},We=a(155),Ge=a.n(We),ze=function(){var e=D().state;if(!e.offline&&!e.error)return null;var t=e.error;return Array.isArray(t)&&(t=t.join(". ")),"string"!==typeof t&&(t=String(t)),e.error?r.a.createElement("div",{className:Ge.a.offline},"Error: ",t):r.a.createElement("div",{className:Ge.a.offline},"You seem to be offline! Please try again later")},He=(a(250),a(255)),Ye=a(251),Ke=a.n(Ye),Ze=function(){var e=D().dispatch,t=Object($.a)({username:"",password:"",verified:!1,hasPassword:!1,loading:!1}),a=Object(c.a)(t,2),s=a[0],o=a[1],l=Object(n.useRef)(null),i=function(t){if(t&&!s.loading){o((function(e){e.loading=!0}));var a={username:s.username,password:s.password,captchaToken:t};Ie("/auth","POST",a).then((function(t){if(l.current.resetCaptcha&&l.current.resetCaptcha(),!t||!t.user.user_id)return console.warn("Invalid user object"),void e({type:"login",payload:null});e({type:"login",payload:t})})).catch((function(t){400!==t.status&&e({type:"error",payload:t.errors.join(", ")}),l.current.resetCaptcha&&l.current.resetCaptcha(),o((function(e){e.loading=!1,e.verified=t.data&&t.data.verified||!1,400===t.status&&(e.hasPassword=!0)}))}))}},u="light";return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(u="dark"),r.a.createElement(f.a,{className:x()(Ke.a.login,"mt-4")},r.a.createElement(q,null),r.a.createElement(ge.a,{noValidate:!0,onSubmit:function(e){e.preventDefault(),s.verified?i("verified"):l.current.execute()}},r.a.createElement(ge.a.Group,{controlId:"loginForm.username"},r.a.createElement(ge.a.Control,{as:"input",type:"text",autoComplete:"username",placeholder:"What's your name?",disabled:s.loading,autoFocus:!0,minLength:1,maxLength:20,onChange:function(e){var t=e.currentTarget.value;o((function(e){e.username=t}))},value:s.username}),s.hasPassword&&r.a.createElement(ge.a.Control,{as:"input",className:"mt-2",type:"password",placeholder:"Password...",autoComplete:"current-password",disabled:s.loading,autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;o((function(e){e.password=t}))},value:s.password}),r.a.createElement(He.a,{ref:l,size:"invisible",theme:u,sitekey:p,onChange:i}),!1,r.a.createElement("p",{className:"text-center mt-4"},r.a.createElement(X.a,{type:"submit",size:"sm"},"Login")))))},qe=function e(t){Ie("/auth","GET").then((function(e){if(!e||!e.user.user_id)return console.warn("Invalid user object"),void t({type:"login",payload:null});t({type:"login",payload:e})})).catch((function(a){"Network Error"===a.message?(t({type:"offline",payload:null}),setTimeout((function(){e(t)}),2e3)):(401!==a.status&&t({type:"error",payload:a.errors.join(", ")}),t({type:"login",payload:null}))}))},Je=function(){var e=W(),t=e.state,a=e.dispatch;return Object(n.useEffect)((function(){t.auth.checked||qe(a)}),[t.auth.checked,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ze,null),r.a.createElement(G.d,null,r.a.createElement(De,{path:"/login",component:Ze}),r.a.createElement(Re,{path:"/admin",component:I}),r.a.createElement(Re,{path:"/",component:Ue})))},Ve=a(252),Qe=a.n(Ve),Xe=a(253),$e=a(254),et=a.n($e),tt=function(){var e=W().state,t=Object($.a)({lastSound:new Date,windowFocused:!0,titleNotification:!1}),a=Object(c.a)(t,2),s=a[0],o=a[1],l=Object(n.useContext)(w).socket,i=Object(Xe.a)(et.a,{interrupt:!0,volume:.5}),u=Object(c.a)(i,1)[0],m=Object(n.useCallback)((function(e){return function(t){t.attributes.draft||e===t.user.user_id||o((function(e){e.windowFocused||(e.titleNotification=!0,(!e.lastSound||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return t.getTime()-e.getTime()}(e.lastSound)>5e3)&&(e.lastSound=new Date,u({})))}))}}),[o,u]),d=Object(n.useCallback)((function(){o((function(e){e.titleNotification=!1,e.windowFocused=!0}))}),[o]),p=Object(n.useCallback)((function(){o((function(e){e.windowFocused=!1}))}),[o]),f=e.auth.user?e.auth.user.user_id:null;return Object(n.useEffect)((function(){l&&f&&l.on("message",m(f))}),[l,m,f]),Object(n.useEffect)((function(){return window.addEventListener("focus",d),window.addEventListener("blur",p),function(){window.removeEventListener("focus",d),window.removeEventListener("blur",p)}}),[d,p]),r.a.createElement(Qe.a,null,r.a.createElement("title",null,s.titleNotification?"\u2022\u2022 dotdot":"dotdot"))},at=a(78),nt=a(9),rt=a(11);at.b.add(nt.G,nt.H,nt.c,nt.h,rt.c,nt.d,nt.e,nt.f,nt.b,nt.I,rt.B,nt.a,nt.g,nt.i,nt.j,nt.k,nt.l,nt.m,nt.n,nt.o,nt.p,nt.q,nt.r,nt.s,nt.t,nt.u,nt.v,nt.w,nt.x,nt.y,nt.z,nt.A,nt.B,nt.C,nt.D,nt.E,nt.F,nt.J,nt.K,nt.O,nt.P,nt.R,nt.S,nt.T,nt.U,nt.W,rt.a,rt.b,rt.d,rt.e,rt.f,rt.g,rt.h,rt.i,rt.j,rt.k,rt.l,rt.m,rt.n,rt.o,rt.p,rt.q,rt.r,rt.s,rt.t,rt.u,rt.v,rt.w,rt.x,rt.y,rt.z,rt.A,rt.C,rt.D,rt.E,rt.F,rt.G,rt.H,rt.I,rt.J,rt.K,nt.Q,nt.M,nt.L,nt.V,nt.N);a(528);var st=r.a.createElement(l.a,{basename:"/"},r.a.createElement(R,null,r.a.createElement(k,null,r.a.createElement(tt,null),r.a.createElement(Je,null))));o.a.render(st,document.getElementById("root"))},73:function(e,t,a){e.exports={passwordLock:"PasswordLock_passwordLock__2FTiA",unlocked:"PasswordLock_unlocked__21MTQ",pulse:"PasswordLock_pulse__2T-_F",locked:"PasswordLock_locked__1mCl-",footer:"PasswordLock_footer__3PO9z",left:"PasswordLock_left__3Gmj3"}},86:function(e,t,a){e.exports={dashboardWidget:"Widget_dashboardWidget__Z_mwK",title:"Widget_title__2QBZt",content:"Widget_content__1BMNx",icon:"Widget_icon__3cYOg",blue:"Widget_blue__1DB9R",green:"Widget_green__2mXfC",orange:"Widget_orange__X3jtY",history:"Widget_history__1eQoj",change:"Widget_change__36iJl","text-muted":"Widget_text-muted__1SkGI"}},87:function(e,t,a){e.exports={logo:"Logo_logo__30xDu",svgFilter:"Logo_svgFilter__1s9i7",blob:"Logo_blob__1iSwo","blob-first":"Logo_blob-first__3YKrD","blob-second":"Logo_blob-second__2r5Nx"}},88:function(e,t,a){e.exports={messages:"Messages_messages__tCmp1",messageScroll:"Messages_messageScroll__CCnSp",unseen:"Messages_unseen__gVw6f",unseenContainer:"Messages_unseenContainer__3haBw"}}},[[283,1,2]]]);
//# sourceMappingURL=main.18d2d34f.chunk.js.map