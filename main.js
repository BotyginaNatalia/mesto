(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=e.data,u=e.handleCardClick,a=e.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=i.name,this._link=i.link,this._cardTemplateSelector=n,this._handleCardClick=u,this._handleLikeClick=handleLikeClick,this._handleDeleteClick=a,this._userId=r,this._idCardCreator=i.owner._id,this._idCard=i._id,this._api=o,this._likes=i.likes}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._imgForm=this._element.querySelector(".element__image"),this._imgForm.src=this._link,this._imgForm.alt=this._name,this._imgTitle=this._element.querySelector(".element__title"),this._imgTitle.textContent=this._name,this._likeButton=this._element.querySelector(".element__like-button"),this._deleteButton=this._element.querySelector(".element__delete-button"),this._likeNumder=this._item.querySelector(".element__number-of-like"),this._item.querySelector(".element__number-of-like").textContent=this._likes.length,this._checkDeleteCard(),this._checkLikeCard(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeClick()})),this._deleteButton.addEventListener("click",(function(){e._deleteCard()})),this._imgForm.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)}))}},{key:"_checkDeleteCard",value:function(){this._userId!=this._idCardCreator&&(this._item.querySelector(".element__delete-button").style.display="none")}},{key:"_checkLikeCard",value:function(){var e=this;this._likes.some((function(t){return t._id===e._userId}))&&this._item.querySelector(".element__like-button").classList.add("element__like-button_active")}},{key:"_handleLikeClick",value:function(){var e=this;this._likeButton.classList.contains("element__like-button_active")?this._api.deleteLike(this._idCard).then((function(t){e._likeButton.classList.remove("element__like-button_active"),e._likeNumder.textContent=t.likes.length})).catch((function(e){return console.log(e)})):this._api.addNewLike(this._idCard).then((function(t){e._likeButton.classList.add("element__like-button_active"),e._likeNumder.textContent=t.likes.length})).catch((function(e){return console.log(e)}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._validationObjects.inputErrorClass),n.classList.add(o._validationObjects.errorClass),n.textContent=t})),r(this,"_hideError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._validationObjects.inputErrorClass),t.classList.remove(o._validationObjects.errorClass),t.textContent=""})),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),this._validationObjects=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationObjects.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationObjects.submitButtonSelector)}var t,o;return t=e,(o=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._validationObjects.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._validationObjects.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"hideErrorMessage",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorPopup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"openPopup",value:function(){this._selectorPopup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._selectorPopup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._selectorPopup.addEventListener("click",(function(t){(t.target.classList.contains("popup__close-button")||t.target.classList.contains("popup"))&&e.closePopup()}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImgForm=document.querySelector(".element__image"),t._popupImgTitle=document.querySelector(".popup__title_pic"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._popupImgForm.src=t,this._popupImgTitle.textContent=e,this._popupImgForm.alt=e,l(h(u.prototype),"openPopup",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function k(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n._form=n._selectorPopup.querySelector(".popup__container"),n._input=n._form.querySelectorAll(".popup__info"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._input.forEach((function(t){return e[t.name]=t.value})),this._values}},{key:"setEventListeners",value:function(){var e=this;v(g(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._submitForm(e._getInputValues())}))}},{key:"closePopup",value:function(){v(g(u.prototype),"closePopup",this).call(this),this._form.reset()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(){this._userName.textContent=userName,this._userJob.textContent=job,this._userAvatar.src=avatar}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status))}},{key:"getOriginalCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getOriginalProfileInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewProfileInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.userName,about:e.job})}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewLike",value:function(){var e=this;return fetch("".concat(this._url,"/cards/").concat(id,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteLike",value:function(){var e=this;return fetch("".concat(this._url,"/cards/").concat(id,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getAllInformation",value:function(){return Promise.all([this.getOriginalProfileInfo(),this.getOriginalCards()])}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function T(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;L(q(u.prototype),"setEventListeners",this).call(this),this._selectorPopup.addEventListener("submit",(function(t){t.preventDefault(),e._handleCallbackSabmitForm()}))}},{key:"setSubmitAction",value:function(e){this._submitForm=e}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=document.querySelector(".popup__container_profile"),x=document.querySelector(".profile__edit-button"),D=document.querySelector(".popup__info_name_active"),F=document.querySelector(".popup__info_job_active"),U=document.querySelector(".popup__container_add"),J=document.querySelector(".profile__add-button"),V=(document.querySelector(".popup__container_avatar"),document.querySelector(".profile__avatar-edit-button")),M={formSelector:".popup__container",inputSelector:".popup__info",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__info_type_error",errorClass:"popup__span-error_visible"},G=new o(M,N),H=new o(M,U);G.enableValidation(),H.enableValidation();var z,$=new P({baseUrl:"https://nomoreparties.co/v1/cohort-41",headers:{authorization:"fbc65fd2-5c16-4a99-9542-a08cde72dc8c","Content-Type":"application/json"}});$.getAllInformation().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q.setUserAvatar(o.avatar),Q.setUserInfo(o.name,o.about),z=o._id,elementsBox.renderItems(i)})).catch((function(e){return console.log(e)}));var K=new w(".popup_edit",(function(){K.renderRetention(!0),$.setUserInfo().then((function(e){Q.setUserInfo(e.name,e.about),K.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){return K.renderRetention(!1)}))}));K.setEventListeners();var Q=new O({profileName:".profile__title",profileJob:".profile__subtitle",profileAvatar:".profile__edit-avatar"});Q.getUserInfo(),x.addEventListener("click",(function(){var e=Q.getUserInfo();D.value=e.name,F.value=e.job,K.openPopup()}));var W=new w(".popup_add",(function(){H.renderRetention(!0),$.addNewCard().then((function(e){var n,r;elementsBox.addItem((r=new t({handleCardClick:function(){X.openPopup(n.name,n.link)},handleDeleteCard:function(){Z.setSubmitForm((function(){$.deleteCard(n._id).then((function(){r.handleDeleteClick(),Z.closePopup()})).catch((function(e){return console.log(e)}))})),popupDeleteCard.open()},data:n=e},".template",z,$)).generateCard()),popupAddCard.closePopup()})).catch((function(e){return alert(e)})).finally((function(){return W.renderRetention(!1)}))}));W.setEventListeners(),J.addEventListener("click",(function(){W.openPopup()}));var X=new d(".popup_pic");X.setEventListeners();var Y=new w(".popup_avatar",(function(e){Y.renderRetention(!0),$.addNewAvatar(e).then((function(e){Q.addNewAvatar(e),Y.closePopup()})).catch((function(e){return alert(e)})).finally((function(){return Y.renderRetention(!1)}))}));Y.setEventListeners(),V.addEventListener("click",(function(){Y.openPopup()}));var Z=new A(".popup_delete-card",(function(e){$.deleteCard(e._id).then((function(){e.handleDeleteClick(),Z.closePopup()})).catch((function(e){return alert(e)}))}));Z.setEventListeners()})();