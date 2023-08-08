"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[696],{8696:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(1087),r=n(5243),s="Contacts_appDiv__d7k61",c="Contacts_loader__VcRwP",o=(n(2791),"ContactForm_form__dhl+T"),i="ContactForm_button__eSwX9",l=n(2430),d=n(3329),u=function(){var e=(0,l.g)(),t=e.valueContacts,n=e.addContacts;return(0,d.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault();var a=e.target.name.value,r=e.target.number.value;t.find((function(e){return e.name.toLocaleLowerCase()===a.toLocaleLowerCase()}))?alert("".concat(a," is already in contacts!")):(n({name:a,number:r}),e.target.reset())},children:[(0,d.jsxs)("label",{children:["Name ",(0,d.jsx)("br",{}),(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("label",{children:["Number ",(0,d.jsx)("br",{}),(0,d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("br",{}),(0,d.jsx)("button",{className:i,type:"submit",children:"Add contact"})]})},h=function(e){var t=e.id,n=e.name,a=e.number,r=(0,l.g)().deleteContacts;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("p",{children:[n,": ",a]}),(0,d.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"\xd7"})]})},m="ContactItem_itemContact__I6KGO",x=function(e){var t=e.listContacts;return(0,d.jsx)("ul",{children:t.map((function(e){return(0,d.jsx)("li",{className:m,children:(0,d.jsx)(h,{id:e.id,name:e.name,number:e.number})},e.id)}))})},j=function(){var e=(0,l.g)().filterContact;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("label",{children:(0,d.jsx)("input",{onChange:function(t){return e(t.target.value)}})})})},b=function(){var e=(0,l.g)(),t=e.visibleContacts,n=e.valueContacts,o=e.isLoading,i=e.error;return(0,d.jsxs)("div",{children:[(0,d.jsx)(a.rU,{to:"/",children:"\ud83e\udc14 Back Home"}),(0,d.jsxs)("div",{className:s,children:[(0,d.jsxs)("section",{children:[(0,d.jsx)("h1",{children:"Add Contacts"}),(0,d.jsx)(u,{})]}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(j,{}),o&&!i&&(0,d.jsx)(r.p2,{height:"80",width:"80",color:"#4d78a9",wrapperClass:c}),n.length>0&&(0,d.jsx)(x,{listContacts:t})]})]})]})}}}]);
//# sourceMappingURL=696.95b06693.chunk.js.map