(this.webpackJsonpreact_web=this.webpackJsonpreact_web||[]).push([[7],{376:function(e,t,n){e.exports=n.p+"static/media/user.c8e6ea77.jpg"},377:function(e,t,n){},867:function(e,t,n){"use strict";n.r(t);n(372);var a=n(865),r=(n(249),n(270)),l=n(19),c=n(20),o=n(22),u=n(21),i=n(23),s=(n(130),n(131)),m=n(0),p=n.n(m),h=n(8),g=n(29),f=n(14),y=[{path:"/index",exact:!0,name:"Index",component:Object(f.a)((function(){return Promise.all([n.e(3),n.e(8)]).then(n.bind(null,868))})),auth:[1]},{path:"/public/1",exact:!1,name:"PublicPage1",component:Object(f.a)((function(){return n.e(11).then(n.bind(null,871))})),auth:[1]},{path:"/public/2",exact:!1,name:"PublicPage2",component:Object(f.a)((function(){return n.e(13).then(n.bind(null,872))})),auth:[1]},{path:"/private/1",exact:!1,name:"PrivatePage1",component:Object(f.a)((function(){return n.e(12).then(n.bind(null,873))}))},{path:"/private/2",exact:!1,name:"PrivatePage2",component:Object(f.a)((function(){return n.e(10).then(n.bind(null,874))}))}],d=n(28),b=n(376),E=n.n(b),v=[{key:"/index",title:"\u9996\u9875",icon:"home",auth:[1]},{title:"\u901a\u7528",key:"/public",icon:"appstore",auth:[1],subs:[{title:"\u901a\u7528\u4e00",key:"/public/1",icon:""},{title:"\u901a\u7528\u4e8c",key:"/public/2",icon:""}]},{title:"\u6743\u9650\u7ba1\u7406",key:"/nav",icon:"bulb",subs:[{title:"\u6743\u9650\u4e00",key:"/private/1",icon:""},{title:"\u6743\u9650\u4e8c",key:"/private/2",icon:""}]}],O=(n(377),n(378),n(864)),k=(n(381),n(441)),S=(n(150),n(69)),j=(n(370),n(367)),K=s.a.Header,x=p.a.memo((function(e){var t=e.menuClick,n=e.avatar,a=e.menuToggle,r=e.loginOut,l=p.a.createElement(j.a,null,p.a.createElement(j.a.ItemGroup,{title:"\u7528\u6237\u8bbe\u7f6e"},p.a.createElement(j.a.Divider,null),p.a.createElement(j.a.Item,null,p.a.createElement(S.a,{type:"edit"}),"\u4e2a\u4eba\u8bbe\u7f6e"),p.a.createElement(j.a.Item,null,p.a.createElement(S.a,{type:"setting",theme:"filled"}),"\u7cfb\u7edf\u8bbe\u7f6e")),p.a.createElement(j.a.Divider,null),p.a.createElement(j.a.Item,null,p.a.createElement("span",{onClick:r},p.a.createElement(S.a,{type:"logout"})," \u9000\u51fa\u767b\u5f55")));return p.a.createElement(K,{className:"header"},p.a.createElement("div",{className:"left"},p.a.createElement(S.a,{style:{fontSize:"2rem"},onClick:t,type:a?"menu-unfold":"menu-fold"})),p.a.createElement("div",{className:"right"},p.a.createElement("div",null,p.a.createElement(O.a,{overlay:l,overlayStyle:{width:"20rem"}},p.a.createElement("div",{className:"ant-dropdown-link"},p.a.createElement(k.a,{icon:"user",src:n,alt:"avatar",style:{cursor:"pointer"}}))))))})),C=n(24),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={openKeys:[],selectedKeys:[]},n.getOpenKeys=function(e){for(var t="",n=[],a=e.split("/").map((function(e){return"/"+e})),r=1;r<a.length-1;r++)t+=a[r],n.push(t);return n},n.onOpenChange=function(e){if(0!==e.length&&1!==e.length){var t=e[e.length-1];t.includes(e[0])?n.setState({openKeys:e}):n.setState({openKeys:[t]})}else n.setState({openKeys:e})},n.renderMenuItem=function(e){var t=e.key,n=e.icon,a=e.title;return p.a.createElement(j.a.Item,{key:t},p.a.createElement(C.b,{to:t},n&&p.a.createElement(S.a,{type:n}),p.a.createElement("span",null,a)))},n.renderSubMenu=function(e){var t=e.key,a=e.icon,r=e.title,l=e.subs;return p.a.createElement(j.a.SubMenu,{key:t,title:p.a.createElement("span",null,a&&p.a.createElement(S.a,{type:a}),p.a.createElement("span",null,r))},l&&l.map((function(e){return e.subs&&e.subs.length>0?n.renderSubMenu(e):n.renderMenuItem(e)})))},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname;this.setState({selectedKeys:[e],openKeys:this.getOpenKeys(e)})}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.location.pathname;e.location.pathname!==n&&this.setState({selectedKeys:[n],openKeys:this.getOpenKeys(n)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.openKeys,a=t.selectedKeys;return p.a.createElement(j.a,{mode:"inline",theme:"dark",openKeys:n,selectedKeys:a,onClick:function(t){var n=t.key;return e.setState({selectedKeys:[n]})},onOpenChange:this.onOpenChange},this.props.menu&&this.props.menu.map((function(t){return t.subs&&t.subs.length>0?e.renderSubMenu(t):e.renderMenuItem(t)})))}}]),t}(m.Component),N=Object(h.g)(I),w=s.a.Sider,M=function(e){var t=e.menuToggle,n=e.menu;return p.a.createElement(w,{className:"aside",collapsed:t},p.a.createElement("div",{className:"logo"},p.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/Huxiangy",target:"_blank"},p.a.createElement(S.a,{type:"github",style:{fontSize:"3.8rem",color:"#fff"}}))),p.a.createElement(N,{menu:n}))},P=s.a.Footer,T=function(){return p.a.createElement(P,{className:"footer"},"React demo \xa92020 Created")},D=s.a.Content,J=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={avatar:E.a,show:!0,menu:[]},n.isLogin=function(){localStorage.getItem("user")?n.setState({menu:n.getMenu(v)}):n.props.history.push("/login")},n.loginOut=function(){localStorage.clear(),n.props.history.push("/login"),r.a.success("\u767b\u51fa\u6210\u529f!")},n.getMenu=function(e){var t=JSON.parse(localStorage.getItem("user")).auth;return t?e.filter((function(e){return e.auth&&-1!==e.auth.indexOf(t)})):e},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.isLogin()}},{key:"componentDidUpdate",value:function(){this.props.location.pathname}},{key:"componentWillUnmount",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.menuClick,n=e.menuToggle,r=(JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):"").auth;return p.a.createElement(s.a,{className:"app"},p.a.createElement(a.a,null),p.a.createElement(M,{menuToggle:n,menu:this.state.menu}),p.a.createElement(s.a,{style:{marginLeft:n?"80px":"200px",minHeight:"100vh"}},p.a.createElement(x,{menuToggle:n,menuClick:t,avatar:this.state.avatar,show:this.state.show,loginOut:this.loginOut}),p.a.createElement(D,{className:"content"},p.a.createElement(h.d,null,y.map((function(e){return p.a.createElement(h.b,{key:e.path,path:e.path,exact:e.exact,render:function(t){return r?e.auth&&-1!==e.auth.indexOf(r)?p.a.createElement(e.component,t):p.a.createElement(h.a,Object.assign({to:"/404"},t)):p.a.createElement(e.component,t)}})})),p.a.createElement(h.a,{to:"/404"}))),p.a.createElement(T,null)))}}]),t}(m.Component),H=Object(h.g)(Object(g.b)((function(e){return{menuToggle:e.menuToggle}}),(function(e){return{menuClick:function(){e({type:d.a})}}}))(J));t.default=H}}]);
//# sourceMappingURL=7.e6490a99.chunk.js.map