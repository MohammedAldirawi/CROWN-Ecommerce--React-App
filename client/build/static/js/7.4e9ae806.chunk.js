(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[7],{110:function(e,n,a){"use strict";a.r(n);var t,r,s,c,i,o,l,d,p,u,b=a(4),j=a(13),m=a(0),x=a.n(m),h=a(1),O=a(17),f=a(6),w=a(62),g=a(15),v=a(16),y="grey",k=Object(v.b)(t||(t=Object(g.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),"black"),C=v.c.div(r||(r=Object(g.a)(["\n  position: relative;\n  margin: 45px 0;\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]))),S=v.c.input(s||(s=Object(g.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label {\n    ","\n  }\n"])),y,y,k),N=v.c.label(c||(c=Object(g.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  &.shrink {\n    ","\n  }\n"])),y,k),P=a(12),q=["handleChange","label"],I=function(e){var n=e.handleChange,a=e.label,t=Object(w.a)(e,q);return Object(P.jsxs)(C,{children:[Object(P.jsx)(S,Object(j.a)({onChange:n},t)),a?Object(P.jsx)(N,{className:t.value.length?"shrink":"",children:a}):null]})},z=a(63),D=a(45),E=v.c.div(i||(i=Object(g.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n"]))),G=v.c.h2(o||(o=Object(g.a)(["\n  margin: 10px 0;\n"]))),A=v.c.div(l||(l=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),J=function(){var e=Object(f.useState)({email:"",password:""}),n=Object(O.a)(e,2),a=n[0],t=n[1],r=a.email,s=a.password,c=function(){var e=Object(h.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,D.a.signInWithEmailAndPassword(r,s);case 4:t({email:"",password:""}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),i=function(e){var n=e.target,r=n.value,s=n.name;t(Object(j.a)(Object(j.a)({},a),{},Object(b.a)({},s,r)))};return Object(P.jsxs)(E,{children:[Object(P.jsx)(G,{children:"I already have an account"}),Object(P.jsx)("span",{children:"Sign in with your email and password"}),Object(P.jsxs)("form",{onSubmit:c,children:[Object(P.jsx)(I,{name:"email",type:"email",handleChange:i,value:r,label:"email",required:!0}),Object(P.jsx)(I,{name:"password",type:"password",value:s,handleChange:i,label:"password",required:!0}),Object(P.jsxs)(A,{children:[Object(P.jsx)(z.a,{type:"submit",children:" Sign in "}),Object(P.jsx)(z.a,{onClick:D.e,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})},U=v.c.div(d||(d=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n"]))),W=v.c.h2(p||(p=Object(g.a)(["\n  margin: 10px 0;\n"]))),B=function(){var e=Object(f.useState)({displayName:"",email:"",password:"",confirmPassword:""}),n=Object(O.a)(e,2),a=n[0],t=n[1],r=a.displayName,s=a.email,c=a.password,i=a.confirmPassword,o=function(){var e=Object(h.a)(x.a.mark((function e(n){var a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c===i){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,D.a.createUserWithEmailAndPassword(s,c);case 7:return a=e.sent,o=a.user,e.next=11,Object(D.c)(o,{displayName:r});case 11:t({displayName:"",email:"",password:"",confirmPassword:""}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(n){return e.apply(this,arguments)}}(),l=function(e){var n=e.target,r=n.name,s=n.value;t(Object(j.a)(Object(j.a)({},a),{},Object(b.a)({},r,s)))};return Object(P.jsxs)(U,{children:[Object(P.jsx)(W,{children:"I do not have a account"}),Object(P.jsx)("span",{children:"Sign up with your email and password"}),Object(P.jsxs)("form",{className:"sign-up-form",onSubmit:o,children:[Object(P.jsx)(I,{type:"text",name:"displayName",value:r,onChange:l,label:"Display Name",required:!0}),Object(P.jsx)(I,{type:"email",name:"email",value:s,onChange:l,label:"Email",required:!0}),Object(P.jsx)(I,{type:"password",name:"password",value:c,onChange:l,label:"Password",required:!0}),Object(P.jsx)(I,{type:"password",name:"confirmPassword",value:i,onChange:l,label:"Confirm Password",required:!0}),Object(P.jsx)(z.a,{type:"submit",children:"SIGN UP"})]})]})},F=v.c.div(u||(u=Object(g.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n  @media (max-width: 800px) {\n    flex-direction: column;\n    width: unset;\n    align-items: center;\n    \n    > *:first-child {\n      margin-bottom: 50px;\n    }\n  }\n"])));n.default=function(){return Object(P.jsxs)(F,{children:[Object(P.jsx)(J,{}),Object(P.jsx)(B,{})]})}}}]);
//# sourceMappingURL=7.4e9ae806.chunk.js.map