(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[4],{112:function(n,e,t){"use strict";t.r(e);var c,i,r,a,s,d,o,l,j,h,p=t(31),b=t(27),x=t(47),m=t(15),u=t(16),O=u.c.div(c||(c=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n  @media screen and (max-width: 800px) {\n    font-size: 18px;\n  }\n"]))),g=u.c.div(i||(i=Object(m.a)(["\n  width: 23%;\n  padding-right: 15px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),f=u.c.span(r||(r=Object(m.a)(["\n  width: 23%;\n  @media screen and (max-width: 800px) {\n    width: 22%;\n  }\n"]))),w=Object(u.c)(f)(a||(a=Object(m.a)(["\n  display: flex;\n  span {\n    margin: 0 10px;\n  }\n  div {\n    cursor: pointer;\n  }\n"]))),v=u.c.div(s||(s=Object(m.a)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]))),y=t(12),I=Object(p.b)(null,(function(n){return{clearItem:function(e){return n(Object(x.b)(e))},addItem:function(e){return n(Object(x.a)(e))},removeItem:function(e){return n(Object(x.c)(e))}}}))((function(n){var e=n.cartItem,t=n.clearItem,c=n.addItem,i=n.removeItem,r=e.name,a=e.imageUrl,s=e.price,d=e.quantity;return Object(y.jsxs)(O,{children:[Object(y.jsx)(g,{children:Object(y.jsx)("img",{src:a,alt:"item"})}),Object(y.jsx)(f,{children:r}),Object(y.jsxs)(w,{children:[Object(y.jsx)("div",{className:"arrow",onClick:function(){return i(e)},children:"\u276e"}),Object(y.jsx)("span",{children:d}),Object(y.jsx)("div",{className:"arrow",onClick:function(){return c(e)},children:"\u276f"})]}),Object(y.jsx)(f,{children:s}),Object(y.jsx)(v,{onClick:function(){return t(e)},children:"\u2715"})]})})),k=t(102),C=t.n(k),P=t(108),z=function(n){var e=n.price,t=100*e;return Object(y.jsx)(C.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your Total is $".concat(e),amount:t,panelLabel:"Pay Now",token:function(n){Object(P.a)({url:"payment",method:"post",data:{amount:t,token:n}}).then((function(n){alert("payment successful")})).catch((function(n){console.log("Payment error",n),alert("There was an error with your payment, please make sure you use the provided card")}))},stripeKey:"pk_test_51IAkF8Bbado7lwRX9I9R7C2WQJ67I5EYDrWZs2tiq8ZWz3VAE4HYZNxRPx1j3c0xv3uZhQsWGOLYVtmaxlVYGKCb001h2x4Eqa"})},N=t(40),T=u.c.div(d||(d=Object(m.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]))),A=u.c.div(o||(o=Object(m.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]))),R=u.c.div(l||(l=Object(m.a)(["\n  text-transform: capitalize;\n  width: 23%;\n  &:last-child {\n    width: 8%;\n  }\n  @media screen and (max-width: 800px) {\n    width: 22%;\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]))),V=u.c.div(j||(j=Object(m.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]))),W=u.c.div(h||(h=Object(m.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]))),Y=Object(b.b)({cartItems:N.b,total:N.d});e.default=Object(p.b)(Y)((function(n){var e=n.cartItems,t=n.total;return Object(y.jsxs)(T,{children:[Object(y.jsxs)(A,{children:[Object(y.jsx)(R,{children:Object(y.jsx)("span",{children:"Product"})}),Object(y.jsx)(R,{children:Object(y.jsx)("span",{children:"Description"})}),Object(y.jsx)(R,{children:Object(y.jsx)("span",{children:"Quantity"})}),Object(y.jsx)(R,{children:Object(y.jsx)("span",{children:"Price"})}),Object(y.jsx)(R,{children:Object(y.jsx)("span",{children:"Remove"})})]}),e.map((function(n){return Object(y.jsx)(I,{cartItem:n},n.id)})),Object(y.jsxs)(V,{children:["TOTAL: $",t]}),Object(y.jsxs)(W,{children:["'\"Please Use The Following Test Credit Card For Payments\"'",Object(y.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"]}),Object(y.jsx)(z,{price:t})]})}))}}]);
//# sourceMappingURL=4.50619e0a.chunk.js.map