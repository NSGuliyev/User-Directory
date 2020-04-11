(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(2),r=t.n(c),l=t(3),i=t(4),m=t(6),s=t(7);var u=function(e){return o.a.createElement("div",{className:"container"},e.children)};var p=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4 text-danger d-flex justify-content-center"},"Welcome to Employee Directory")))};var h=function(e){return o.a.createElement("div",{className:"row"},e.children)};var d=function(e){return o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"card mb-4"},e.children))},g=t(5);var E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"card-header"},o.a.createElement("h3",{className:"d-flex justify-content-center"},"Employee Information")))};var w=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("table",{className:"table table-hover"},e.children))};var b=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"ID"),o.a.createElement("th",{scope:"col"},"Name ",o.a.createElement("i",{className:"fas fa-sort-down",id:"sortBtn",onClick:e.handleSort})),o.a.createElement("th",{scope:"col"},"Occupation"),o.a.createElement("th",{scope:"col"},"Location"),o.a.createElement("th",{scope:"col"},"Email"),o.a.createElement("th",{scope:"col"},"Phone"))))};var f=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},e.id),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.occupation),o.a.createElement("td",null,e.location),o.a.createElement("td",null,e.email),o.a.createElement("td",null,e.phone))))},y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={employee:g,search:"",alphabeticalOrder:!0},e.handleSort=function(){var a;a=e.state.alphabeticalOrder?e.state.employee.sort((function(e,a){return e.name.localeCompare(a.name)})):e.state.employee.sort((function(e,a){return a.name.localeCompare(e.name)})),e.setState({employee:a,alphabeticalOrder:!e.state.alphabeticalOrder})},e}return Object(i.a)(t,[{key:"updateSearch",value:function(e){this.setState({search:e.target.value.substr(0,18)})}},{key:"render",value:function(){var e=this,a=this.state.employee.filter((function(a){return-1!==a.name.toLowerCase().indexOf(e.state.search.toLowerCase())}));return o.a.createElement(u,null,o.a.createElement(p,null),o.a.createElement(h,null,o.a.createElement(d,null,o.a.createElement(E,null),o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar navbar-light bg-light"},o.a.createElement("form",{className:"form-inline"},o.a.createElement("input",{className:" col form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",value:this.state.search,onChange:this.updateSearch.bind(this)}),o.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))),o.a.createElement(w,null,o.a.createElement(b,{handleSort:this.handleSort}),a.map((function(e){return o.a.createElement(f,{key:e.id,image:e.image,id:e.id,name:e.name,occupation:e.occupation,location:e.location,email:e.email,phone:e.phone})}))))))}}]),t}(n.Component);r.a.render(o.a.createElement(y,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"id":1,"name":"Franz Josef Popp","image":"https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png","occupation":"Auto Mechanic 1","location":"Germany","email":"franzpopp@bmw.com","phone":"+1 (804) 111 1111"},{"id":2,"name":"Karl Benz","image":"https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png","occupation":"Auto Mechanic 2","location":"Germany","email":"karl@mercedesbenz","phone":"+1 (804) 222 2222"},{"id":3,"name":"Walter Owen Bentley","image":"https://www.car-logos.org/wp-content/uploads/2011/09/bentley.png","occupation":"Auto Mechanic 3","location":"United Kingdom","email":"walterowen@bentley.com","phone":"+1 (804) 333 3333"},{"id":4,"name":"Wilhelm Maybach","image":"https://www.car-logos.org/wp-content/uploads/2011/09/maybach.png","occupation":"Auto Mechanic 4","location":"Germany","email":" wilhelm@maybach.com","phone":"+1 (804) 444 4444"},{"id":5,"name":"Ferruccio Lamborghini","image":"https://www.car-logos.org/wp-content/uploads/2011/09/lamb.png","occupation":"Auto Mechanic 5","location":"Italy","email":"ferruccio@lamborghini.com","phone":"+1 (804) 555 5555"},{"id":6,"name":"Christian Von Koenigsegg","image":"https://www.car-logos.org/wp-content/uploads/2011/09/koenigsegg.png","occupation":"Auto Mechanic 6","location":"Sweden","email":"christianvon@koenigsegg.com","phone":"+1 (804) 666 6666"},{"id":7,"name":"Ettore Bugatti","image":"https://www.car-logos.org/wp-content/uploads/2011/09/bugatti.png","occupation":"Auto Mechanic 7","location":"France","email":" ettore@bugatti.com","phone":"+1 (804) 777 7777"},{"id":8,"name":"Enzo Ferrari","image":"https://www.car-logos.org/wp-content/uploads/2011/09/ferrari.png","occupation":"Auto Mechanic 8","location":"Italy","email":"enzo@ferrari.com","phone":"+1 (804) 888 8888"}]')},8:function(e,a,t){e.exports=t(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.8c72c0c2.chunk.js.map