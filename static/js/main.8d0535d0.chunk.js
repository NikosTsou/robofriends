(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(7),i=t.n(r),s=(t(12),t(2)),o=t(3),c=t(5),l=t(4),h=t(0),u=function(e){var n=e.id,t=e.name,a=e.email;return Object(h.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(h.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200x200")}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("p",{children:a})]})]})},d=function(e){var n=e.robots,t=n.map((function(e,t){return Object(h.jsx)(u,{id:n[t].id,name:n[t].name,email:n[t].email},t)}));return Object(h.jsx)("div",{children:t})},m=function(e){var n=e.searchChange;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},b=function(e){return Object(h.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},j=function(e){Object(c.a)(t,e);var n=Object(l.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(o.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(h.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),t}(a.Component),f=(t(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),g=function(e){Object(c.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({robots:f})}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(h.jsx)(m,{searchChange:this.onSearchChange}),Object(h.jsx)(b,{children:Object(h.jsx)(j,{children:Object(h.jsx)(d,{robots:a})})})]}):Object(h.jsx)("h1",{children:"Loading"})}}]),t}(a.Component),O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),r(e),i(e),s(e)}))};t(15);i.a.render(Object(h.jsx)(g,{}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.8d0535d0.chunk.js.map