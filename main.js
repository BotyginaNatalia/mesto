(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,u=e.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=o.name,this._link=o.link,this._cardTemplateSelector=n,this._handleCardClick=i,this._handleLikeClick=handleLikeClick,this._handleDeleteClick=u,this._userId=r,this._ownerId=o.owner._id,this._id=o._id,this._likes=o.likes}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._setEventListeners(),this._imgForm=this._element.querySelector(".element__image"),this._imgForm.src=this._link,this._imgForm.alt=this._name,this._imgTitle=this._element.querySelector(".element__title"),this._imgTitle.textContent=this._name,this._likeButton=this._element.querySelector(".element__like-button"),this._deleteButton=this._element.querySelector(".element__delete-button"),this._numberOfLikes=this._item.querySelector(".element__number-of-like"),this._numberOfLikes.textContent=this._likes.length,this.setLikeByMe=this._likes.some((function(t){return t._id===e._userId})),this._ownerId!==this._userId&&this._deleteButton.remove(),this._likes.some((function(t){return t._id===e._userId}))&&this._likeButton.classList.add("element__like-button_active"),this._element}},{key:"deleteLikeCard",value:function(){this._likeButton.classList.remove("element__like-button_active"),this._numberOfLikes.textContent=this._likes.length-1}},{key:"addLikeCard",value:function(){this._likeButton.classList.remove("element__like-button_active"),this._numberOfLikes.textContent=this._likes.length+1}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like-button").addEventListener("click",(function(){return e._handleLikeClick(e,e.addLikeCard)})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){return e._handleDeleteClick(e)})),this._element.querySelector(".element__image").querySelector.addEventListener("click",(function(){return e._handleCardClick(e._link,e._name)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._validationObjects.inputErrorClass),n.classList.add(o._validationObjects.errorClass),n.textContent=t})),r(this,"_hideError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._validationObjects.inputErrorClass),t.classList.remove(o._validationObjects.errorClass),t.textContent=""})),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),this._validationObjects=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationObjects.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationObjects.submitButtonSelector)}var t,o;return t=e,(o=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._validationObjects.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._validationObjects.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"hideErrorMessage",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._selectorContainer=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;this._items.forEach((function(e){t._renderer(e),t.addItem(card)}))}},{key:"addItem",value:function(e){this._selectorContainer.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorPopup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"openPopup",value:function(){this._selectorPopup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._selectorPopup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._selectorPopup.addEventListener("click",(function(t){(t.target.classList.contains("popup__close-button")||t.target.classList.contains("popup"))&&e.closePopup()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImgForm=document.querySelector(".element__image"),t._popupImgTitle=document.querySelector(".popup__title_pic"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._popupImgForm.src=t,this._popupImgTitle.textContent=e,this._popupImgForm.alt=e,f(_(u.prototype),"openPopup",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function g(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n._form=n._selectorPopup.querySelector(".popup__container"),n._input=n._form.querySelectorAll(".popup__info"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._input.forEach((function(t){return e[t.name]=t.value})),this._values}},{key:"setEventListeners",value:function(){var e=this;b(O(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._submitForm(e._getInputValues())}))}},{key:"closePopup",value:function(){b(O(u.prototype),"closePopup",this).call(this),this._form.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.job,this._userAvatar.src=e.avatar}},{key:"returnMyId",value:function(){return this._userId}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status))}},{key:"getOriginalCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getOriginalProfileInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(cardId),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addNewProfileInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then(this._checkResponse)}},{key:"addNewAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"addNewLike",value:function(){return fetch("".concat(this._url,"cards/likes/").concat(cardId),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(){return fetch("".concat(this._url,"cards/likes/").concat(cardId),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function B(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;I(x(u.prototype),"setEventListeners",this).call(this),this._selectorPopup.addEventListener("submit",(function(t){t.preventDefault(),e._handleCallbackSabmitForm()}))}},{key:"setSubmitAction",value:function(e){this._submitForm=e}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a),A=document.querySelector(".popup__container_profile"),D=document.querySelector(".profile__edit-button"),F=document.querySelector(".popup__info_name_active"),J=document.querySelector(".popup__info_job_active"),V=document.querySelector(".popup__container_add"),U=document.querySelector(".profile__add-button"),M=document.querySelector(".popup__container_avatar"),G=document.querySelector(".profile__avatar-edit-button"),H={formSelector:".popup__container",inputSelector:".popup__info",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__info_type_error",errorClass:"popup__span-error_visible"},z=new o(H,A),K=new o(H,V),Q=new o(H,M);z.enableValidation(),K.enableValidation(),Q.enableValidation();var W=new S({url:"https://nomoreparties.co/v1/cohort-41",headers:{authorization:"fbc65fd2-5c16-4a99-9542-a08cde72dc8c","Content-Type":"application/json"}});function X(e){return new t(e,handleCardClick,handleLikeClick,handleDeleteClick,".template",Z.returnMyId()).renderItems()}W.getOriginalCards().then((function(e){new u({items:e,renderer:X},".elements").renderItems()})).catch((function(e){alert(e)}));var Y=new E(".popup_edit",(function(){Y.renderRetention(!0),W.setUserInfo().then((function(e){Z.setUserInfo(e.name,e.about),Y.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){return Y.renderRetention(!1)}))}));Y.setEventListeners();var Z=new C({profileName:".profile__title",profileJob:".profile__subtitle",profileAvatar:".profile__edit-avatar"});Z.getUserInfo(),D.addEventListener("click",(function(){var e=Z.getUserInfo();F.value=e.name,J.value=e.job,Y.openPopup()}));var $=new E(".popup_add",(function(){K.renderRetention(!0),W.addNewCard().then((function(e){elementsBox.addItem(X(e)),popupAddCard.closePopup()})).catch((function(e){return alert(e)})).finally((function(){return $.renderRetention(!1)}))}));$.setEventListeners(),U.addEventListener("click",(function(){$.openPopup()})),new y(".popup_pic").setEventListeners();var ee=new E(".popup_avatar",(function(e){ee.renderRetention(!0),W.addNewAvatar(e).then((function(e){Z.addNewAvatar(e),ee.closePopup()})).catch((function(e){return alert(e)})).finally((function(){return ee.renderRetention(!1)}))}));ee.setEventListeners(),G.addEventListener("click",(function(){ee.openPopup()}));var te=new N(".popup_delete-card",(function(e){W.deleteCard(e._id).then((function(){e.handleDeleteClick(),te.closePopup()})).catch((function(e){return alert(e)}))}));te.setEventListeners()})();