(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{675:function(e,t,r){"use strict";var n=r(6),a=r.n(n),o=r(0),c=r.n(o);t.a=function(e){var t=e.className,r=e.is_invisible,n=e.theme,o=e.id;return c.a.createElement("div",{id:o,className:a()("barspinner","barspinner--".concat(n||"dark"),{invisible:r},t)},Array.from(new Array(5)).map((function(e,t){return c.a.createElement("div",{key:t,className:"barspinner__rect barspinner__rect--".concat(t+1," rect").concat(t+1)})})))}},677:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(0),c=r.n(o),i=r(35),s=r.n(i),l=(r(87),r(7)),u=r(109),p=r(3),f=r(8),m=r(16),y=r(11);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,r,n,a,o,c){try{var i=e[o](c),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,a)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){h(o,n,a,c,i,"next",e)}function i(e){h(o,n,a,c,i,"throw",e)}c(void 0)}))}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){var t=e.header,r=e.message,n=e.button_link,a=e.onClickButton,o=e.button_text,i=e.footer;return c.a.createElement("div",{className:"cashier__wrapper"},c.a.createElement(f.a,{icon:"IconCashierError",className:"cashier-error__icon"}),t&&c.a.createElement("h2",{className:"cashier-error__header"},t),r&&c.a.createElement("p",{className:"cashier__paragraph"},r),n&&c.a.createElement(u.a,{className:"btn--primary--default cashier-error__button",to:n,onClick:a},c.a.createElement("span",{className:"btn__text"},o)),!n&&o&&c.a.createElement(s.a,{className:"btn--primary--default cashier-error__button",onClick:a,text:o}),i&&c.a.createElement("h2",{className:"cashier-error__footer"},i))},w=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=g(this,(e=v(t)).call.apply(e,[this].concat(a)))).error_fields={address_city:Object(p.localize)("Town/City"),address_line_1:Object(p.localize)("First line of home address"),address_postcode:Object(p.localize)("Postal Code/ZIP"),address_state:Object(p.localize)("State/Province"),email:Object(p.localize)("Email address"),phone:Object(p.localize)("Telephone"),residence:Object(p.localize)("Country of Residence")},r.onClickButton=function(){"function"==typeof r.props.error.onClickButton&&r.props.error.onClickButton(),r.clearErrorMessage()},r.closeCashierModal=function(){r.onClickButton(),r.props.toggleCashierModal()},r.clearErrorMessage=function(){r.props.setErrorMessage("")},r.acceptTNC=b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.b.tncApproval();case 2:r.onClickButton();case 3:case"end":return e.stop()}}),e)}))),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e,t=this;switch(this.props.error.code){case"InvalidToken":e=c.a.createElement(O,{header:Object(p.localize)("Identity confirmation failed"),message:c.a.createElement(l.a,{i18n_default_text:"It looks like your link is incorrect or no longer valid."}),onClickButton:this.onClickButton,button_text:Object(p.localize)("Request a new link")});break;case"ASK_TNC_APPROVAL":e=c.a.createElement(O,{header:Object(p.localize)("Our terms and conditions have changed"),message:c.a.createElement(l.a,{i18n_default_text:"Please accept our updated <0>terms and conditions</0> to continue.",components:[c.a.createElement("a",{key:0,className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.deriv.com/terms-and-conditions/#general"})]}),onClickButton:this.acceptTNC,button_text:Object(p.localize)("I accept")});break;case"ASK_FIX_DETAILS":e=c.a.createElement(O,{header:Object(p.localize)("Update your personal details"),message:c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{i18n_default_text:"We can't validate your personal details because there is some information missing."})," ",this.props.error.fields?c.a.createElement(l.a,{i18n_default_text:"Please update your {{details}} to continue.",values:{details:this.props.error.fields.map((function(e){return t.error_fields[e]||e})).join(", "),interpolation:{escapeValue:!1}}}):c.a.createElement(l.a,{i18n_default_text:"Please update your details to continue."})),button_link:"/account/personal-details",onClickButton:this.closeCashierModal,button_text:Object(p.localize)("Update my details"),footer:c.a.createElement(l.a,{i18n_default_text:"Need help? <0>Contact us</0>.",components:[c.a.createElement("a",{key:0,className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.deriv.com/help-centre/"})]})});break;case"WrongResponse":e=c.a.createElement(O,{header:this.props.error.message,onClickButton:this.onClickButton,button_text:Object(p.localize)("Try again")});break;default:e=c.a.createElement(O,{header:this.props.error.message})}return e}}])&&d(r.prototype,n),a&&d(r,a),t}(c.a.Component);w.propTypes={error:a.a.object,setErrorMessage:a.a.func,toggleCashierModal:a.a.func},t.a=Object(y.b)((function(e){var t=e.modules,r=e.ui;return{setErrorMessage:t.cashier.setErrorMessage,toggleCashierModal:r.toggleCashierModal}}))(w)},678:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(0),c=r.n(o),i=r(35),s=r.n(i),l=(r(87),r(7)),u=r(3),p=r(11);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=m(this,(e=y(t)).call.apply(e,[this].concat(a)))).onClickSignup=function(){r.props.toggleCashierModal(),setTimeout(r.props.openRealAccountSignup,500)},r.render=function(){return c.a.createElement("div",{className:"cashier__wrapper cashier__center-align-wrapper"},c.a.createElement("div",{className:"cashier__center-align-content"},c.a.createElement("h2",{className:"cashier-error__header cashier__virtual-header"},c.a.createElement(l.a,{i18n_default_text:"You're currently using a demo account"})),r.props.has_real_account?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"cashier__paragraph cashier__text"},c.a.createElement(l.a,{i18n_default_text:"You need to switch to a real money account to use this feature."}),c.a.createElement("br",null),c.a.createElement(l.a,{i18n_default_text:"You can do this by selecting a real account from the Account Switcher."})),c.a.createElement("div",{className:"cashier__account-switch-icon"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"cashier__paragraph cashier__text"},c.a.createElement(l.a,{i18n_default_text:"You need a real money account to use this feature. It's easy to create a real money account and start trading."})),c.a.createElement(s.a,{className:"btn--primary--default cashier-error__button",has_effect:!0,text:Object(u.localize)("Create my real account"),onClick:r.onClickSignup}))))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),t}(c.a.Component);h.propTypes={has_real_account:a.a.bool,openRealAccountSignup:a.a.func,toggleCashierModal:a.a.func},t.a=Object(p.b)((function(e){var t=e.client,r=e.ui;return{has_real_account:t.has_real_account,openRealAccountSignup:r.openRealAccountSignup,toggleCashierModal:r.toggleCashierModal}}))(h)},681:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(0),c=r.n(o),i=r(35),s=r.n(i),l=(r(87),r(8)),u=r(7),p=r(3),f=r(11);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=y(this,(e=_(t)).call.apply(e,[this].concat(a)))).onClickDeposit=function(){r.props.setModalIndex(0)},r.render=function(){return c.a.createElement("div",{className:"cashier__wrapper cashier__no-balance"},c.a.createElement(l.a,{icon:"IconNoBalance",className:"cashier__no-balance-icon"}),c.a.createElement("h2",{className:"withdraw__header"},c.a.createElement(u.a,{i18n_default_text:"You have no funds in your {{currency}} account",values:{currency:r.props.currency.toUpperCase()}})),c.a.createElement("p",{className:"cashier__text"},c.a.createElement(u.a,{i18n_default_text:"Please make a deposit to use this feature."})),c.a.createElement(s.a,{className:"btn--primary--default cashier__no-balance-button",has_effect:!0,text:Object(p.localize)("Deposit now"),onClick:r.onClickDeposit}))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),t}(c.a.Component);b.propTypes={currency:a.a.string,setModalIndex:a.a.func},t.a=Object(f.b)((function(e){var t=e.client,r=e.ui;return{currency:t.currency,setModalIndex:r.setModalIndex}}))(b)},736:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),o=r(0),c=r.n(o),i=r(11),s=r(6),l=r.n(s),u=r(35),p=r.n(u),f=(r(87),r(112)),m=r.n(f),y=(r(179),r(25)),_=r(15),h=r.n(_),b=r(7),d=r(3),g=r(8),v=r(142);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t,r,n,a,o,c){try{var i=e[o](c),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,a)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e,t){var r=t.balance,n=t.currency,a=t.transfer_limit,o={};return e.loginid&&/^[A-Za-z]+[0-9]+$/.test(e.loginid)||(o.loginid=Object(d.localize)("Please enter a valid client login ID.")),e.amount?Object(v.b)(e.amount,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(r,!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:"float",decimals:h.a.getDecimalPlaces(n)},a.min&&{min:a.min,max:a.max}))?+r<+e.amount&&(o.amount=Object(d.localize)("Insufficient balance.")):o.amount=Object(v.a)().number.message:o.amount=Object(d.localize)("This field is required."),e.description&&!/^[0-9A-Za-z .,'-]{0,250}$/.test(e.description.replace(/\n/g," "))&&(o.description=Object(d.localize)("Please enter a valid description.")),o},T=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=C(this,(e=P(t)).call.apply(e,[this].concat(a)))).validateTransferPassthrough=function(e){return S(e,{balance:r.props.balance,currency:r.props.currency,transfer_limit:r.props.transfer_limit})},r.onTransferPassthrough=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.requestPaymentAgentTransfer({amount:t.amount,currency:r.props.currency,description:t.description.replace(/\n/g," "),transfer_to:t.loginid});case 2:e.sent.error&&n.setSubmitting(!1);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){w(o,n,a,c,i,"next",e)}function i(e){w(o,n,a,c,i,"throw",e)}c(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"cashier__wrapper--align-left"},c.a.createElement("h2",{className:"cashier__header payment-agent-transfer__header"},c.a.createElement(b.a,{i18n_default_text:"Transfer to client"})),c.a.createElement(y.c,{initialValues:{loginid:"",amount:"",description:""},validate:this.validateTransferPassthrough,onSubmit:this.onTransferPassthrough},(function(t){var r=t.errors,n=t.isSubmitting,a=t.isValid,o=t.touched,i=t.handleChange;return c.a.createElement(y.b,{noValidate:!0},c.a.createElement(y.a,{name:"loginid"},(function(t){var n=t.field;return c.a.createElement(m.a,O({},n,{onChange:function(t){e.props.setErrorMessage(""),i(t)},className:"payment-agent-transfer__input",type:"text",label:Object(d.localize)("Client login ID"),error:o.loginid&&r.loginid,required:!0,autoComplete:"off",maxLength:"20"}))})),c.a.createElement(y.a,{name:"amount"},(function(t){var n=t.field;return c.a.createElement(m.a,O({},n,{onChange:function(t){e.props.setErrorMessage(""),i(t)},className:"payment-agent-transfer__input dc-input--no-placeholder",type:"text",label:Object(d.localize)("Amount"),error:o.amount&&r.amount,required:!0,leading_icon:c.a.createElement("span",{className:l()("cashier__amount-symbol","symbols","symbols--".concat((e.props.currency||"").toLowerCase()))}),autoComplete:"off",maxLength:"30"}))})),c.a.createElement(y.a,{name:"description"},(function(t){var n=t.field;return c.a.createElement(m.a,O({},n,{onChange:function(t){e.props.setErrorMessage(""),i(t)},type:"textarea",label:Object(d.localize)("Description"),error:o.description&&r.description,required:!0,autoComplete:"off",maxLength:"250"}))})),c.a.createElement("div",{className:"cashier__form-submit"},e.props.error_message&&c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{icon:"IconEmergency",className:"cashier__form-error-icon"}),c.a.createElement(g.a,{icon:"IconError",className:"cashier__form-error-small-icon"}),c.a.createElement("p",{className:"cashier__form-error"},e.props.error_message)),c.a.createElement(p.a,{className:"cashier__form-submit-button btn--primary--default",type:"submit",is_disabled:!a||n},c.a.createElement(b.a,{i18n_default_text:"Transfer"}))))})))}}])&&j(r.prototype,n),a&&j(r,a),t}(c.a.Component);T.propTypes={balance:a.a.string,currency:a.a.string,error:a.a.object,requestPaymentAgentTransfer:a.a.func,setErrorMessage:a.a.func,transfer_limit:a.a.object};var M=Object(i.b)((function(e){var t=e.client,r=e.modules;return{balance:t.balance,currency:t.currency,error_message:r.cashier.config.payment_agent_transfer.error.message,requestPaymentAgentTransfer:r.cashier.requestPaymentAgentTransfer,setErrorMessage:r.cashier.setErrorMessage,transfer_limit:r.cashier.config.payment_agent_transfer.transfer_limit}}))(T),A=r(32),z=r(27);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function B(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=B(this,(e=D(t)).call.apply(e,[this].concat(a)))).openStatement=function(){r.props.history.push(z.a.statement),r.props.resetPaymentAgentTransfer(),r.props.toggleCashierModal()},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return c.a.createElement("div",{className:"cashier__wrapper account-transfer__receipt"},c.a.createElement("div",{className:"cashier__success"},c.a.createElement("h2",{className:"cashier__header"},c.a.createElement(b.a,{i18n_default_text:"Your funds have been transferred to {{name}}.",values:{name:this.props.receipt.client_name}})),c.a.createElement("div",{className:"cashier__transferred-amount cashier__text--bold"},c.a.createElement("span",{className:l()("symbols","symbols--".concat(this.props.currency.toLowerCase()))}),h.a.formatMoney(this.props.currency,this.props.receipt.amount_transferred,!0)),c.a.createElement("div",{className:"cashier__transferred-details-wrapper"},c.a.createElement("span",{className:"account-transfer__transfer-details-from"},c.a.createElement(g.a,{icon:"IconAccountsCurrency",type:this.props.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"cashier__transferred-details"},c.a.createElement("span",{className:"cashier__text--bold"},this.props.currency.toUpperCase())," (",this.props.loginid,")")),c.a.createElement(g.a,{className:"cashier__transferred-icon",icon:"IconBack"}),c.a.createElement("span",{className:"account-transfer__transfer-details-to"},c.a.createElement(g.a,{icon:"IconUser"}),c.a.createElement("span",{className:"cashier__transferred-details"},c.a.createElement("span",{className:"cashier__text--bold"},this.props.receipt.client_name)," (",this.props.receipt.client_id,")"))),c.a.createElement("div",{className:"cashier__form-submit payment-agent-transfer__buttons"},c.a.createElement(p.a,{className:"btn--tertiary--default payment-agent__statement-button",has_effect:!0,text:Object(d.localize)("View in statement"),onClick:this.openStatement}),c.a.createElement(p.a,{className:"btn--primary--default payment-agent__done-button payment-agent-transfer__done-button",has_effect:!0,text:Object(d.localize)("Done"),onClick:this.props.resetPaymentAgentTransfer}))))}}])&&R(r.prototype,n),a&&R(r,a),t}(c.a.Component);U.propTypes={currency:a.a.string,loginid:a.a.string,receipt:a.a.object,resetPaymentAgentTransfer:a.a.func,toggleCashierModal:a.a.func};var L=Object(A.g)(Object(i.b)((function(e){var t=e.client,r=e.modules,n=e.ui;return{currency:t.currency,loginid:t.loginid,receipt:r.cashier.config.payment_agent_transfer.receipt,resetPaymentAgentTransfer:r.cashier.resetPaymentAgentTransfer,toggleCashierModal:n.toggleCashierModal}}))(U)),F=r(681),V=r(677),Y=r(678),W=r(675);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function K(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),K(this,$(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.container),this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnMount()}},{key:"render",value:function(){return this.props.is_virtual?c.a.createElement(Y.a,null):this.props.is_loading?c.a.createElement(W.a,{className:"cashier__loader"}):this.props.error.is_show_full_page?c.a.createElement(V.a,{error:this.props.error}):this.props.has_no_balance?c.a.createElement(F.a,null):c.a.createElement(c.a.Fragment,null,this.props.is_transfer_successful?c.a.createElement(L,null):c.a.createElement(M,{error:this.props.error}))}}])&&J(r.prototype,n),a&&J(r,a),t}(c.a.Component);G.propTypes={container:a.a.string,error:a.a.object,has_no_balance:a.a.bool,is_loading:a.a.bool,is_transfer_successful:a.a.bool,is_virtual:a.a.bool,onMount:a.a.func,onUnMount:a.a.func,setActiveTab:a.a.func};t.default=Object(i.b)((function(e){var t=e.client,r=e.modules;return{is_virtual:t.is_virtual,container:r.cashier.config.payment_agent_transfer.container,error:r.cashier.config.payment_agent_transfer.error,has_no_balance:r.cashier.has_no_balance,is_loading:r.cashier.is_loading,is_transfer_successful:r.cashier.config.payment_agent_transfer.is_transfer_successful,onMount:r.cashier.onMountPaymentAgentTransfer,onUnMount:r.cashier.resetPaymentAgentTransfer,setActiveTab:r.cashier.setActiveTab}}))(G)}}]);
//# sourceMappingURL=4.b06bd42eb9bccc1ce113.js.map