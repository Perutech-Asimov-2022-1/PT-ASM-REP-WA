(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["teachers"],{"05fa":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"teachers"},[a("v-row",{staticClass:"pt-4"},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"pl-11"},[t._v("Teachers")])])],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"d-flex flex-wrap justify-center mb-8"},t._l(t.teachers,(function(e){return a("v-card",{key:e.id,staticClass:"pb-2 ma-3",attrs:{width:"345","max-height":"350"}},[a("v-card-text",[a("div",[t._v("Teacher")]),a("h1",{staticClass:"text--primary font-weight-bold py-3"},[t._v(t._s(e.firstName))]),a("div",[t._v(t._s(e.lastName))]),a("div",[t._v(t._s(e.email))]),a("div",[t._v(t._s(e.phone))])]),a("v-card-actions",[a("v-btn",{staticClass:"font-weight-bold te",attrs:{text:"",color:"indigo accent-4",to:"/teachers/"+e.id}},[t._v("see more")])],1)],1)})),1)])],1)],1)},c=[],n=(a("d81d"),a("9a95")),r={name:"teachers",data:function(){return{teachers:[]}},created:function(){var t=this;n["a"].getAll().then((function(e){t.teachers=e.data.map(t.getDisplayTeacher),console.log(e.data)})).catch((function(t){console.log(t)}))},methods:{getDisplayTeacher:function(t){return{id:t.id,point:t.point,firstName:t.firstName,lastName:t.lastName,age:t.age,email:t.email,phone:t.phone,directorId:t.directorId}}}},o=r,i=a("2877"),l=a("6544"),d=a.n(l),u=a("8336"),h=a("b0af"),v=a("99d9"),f=a("62ad"),p=a("0fd9"),g=Object(i["a"])(o,s,c,!1,null,"e4270cd8",null);e["default"]=g.exports;d()(g,{VBtn:u["a"],VCard:h["a"],VCardActions:v["a"],VCardText:v["c"],VCol:f["a"],VRow:p["a"]})},"9a95":function(t,e,a){"use strict";var s=a("d4ec"),c=a("bee2"),n=a("ade3"),r=(a("99af"),a("eb6d")),o=function(){function t(){Object(s["a"])(this,t),Object(n["a"])(this,"endpoint","/teachers"),Object(n["a"])(this,"user",JSON.parse(localStorage.getItem("user")))}return Object(c["a"])(t,[{key:"getAll",value:function(){return r["a"].get("directors/".concat(this.user.id).concat(this.endpoint))}},{key:"getById",value:function(t){return r["a"].get("".concat(this.endpoint,"/").concat(t))}},{key:"getAllCoursesById",value:function(t){return r["a"].get("".concat(this.endpoint,"/").concat(t,"/courses"))}}]),t}();e["a"]=new o},eb6d:function(t,e,a){"use strict";var s=a("bc3a"),c=a.n(s);function n(){var t=JSON.parse(localStorage.getItem("user"));return t&&t.token?(console.log("Bearer ".concat(t.token)),{Authorization:"Bearer "+t.token}):(console.log("No token available"),{})}e["a"]=c.a.create({baseURL:"https://appserviceasimov.azurewebsites.net/api/v1",headers:n()})}}]);
//# sourceMappingURL=teachers.f7cc5413.js.map