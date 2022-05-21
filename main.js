(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardTemplateSelector=i,this._handleCardClick=n,this._handleDeleteClick=r,this._handleLikeClick=o,this._userId=u,this._ownerId=e.owner._id,this._cardId=e._id,this._likes=e.likes}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._setEventListeners(),this._imgForm=this._element.querySelector(".element__image"),this._imgTitle=this._element.querySelector(".element__title"),this._imgForm.src=this._link,this._imgForm.alt=this._name,this._imgTitle.textContent=this._name,this._deleteButton=this._element.querySelector(".element__delet-button"),this._likeCounter=this._element.querySelector(".element__number-of-like"),this._likeCounter.textContent=this._likes.length,this._likeButton=this._element.querySelector(".element__like-button"),this.hasMyLike=this._likes.some((function(t){return t._id===e._myId})),this._ownerId!=this._userId&&this._deleteButton.remove(),this._likes.some((function(t){return t._id===e._myId}))&&this._likeButton.classList.add("element__like-button_active"),this._element}},{key:"deleteMyLike",value:function(){this._likeButton.classList.remove("element__like-button_active"),this._likeCounter.textContent=this._likes.length-1}},{key:"addMyLike",value:function(){this._likeButton.classList.add("element__like-button_active"),this._likeCounter.textContent=this._likes.length+1}},{key:"removeCardFromServer",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like-button").addEventListener("click",(function(){return e._handleLikeClick(e,e.hasMyLike)})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){return e._handleTrashBinClick(e)})),this._element.querySelector(".element__image").addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._validationObjects.inputErrorClass),n.classList.add(o._validationObjects.errorClass),n.textContent=t})),r(this,"_hideError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._validationObjects.inputErrorClass),t.classList.remove(o._validationObjects.errorClass),t.textContent=""})),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),this._validationObjects=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationObjects.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationObjects.submitButtonSelector)}var t,o;return t=e,(o=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._validationObjects.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._validationObjects.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"hideErrorMessage",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._selectorContainer=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){var n=t._renderer(e);t.addItem(n)}))}},{key:"addItem",value:function(e){this._selectorContainer.append(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorPopup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"openPopup",value:function(){this._selectorPopup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._selectorPopup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._selectorPopup.addEventListener("click",(function(t){(t.target.classList.contains("popup__close-button")||t.target.classList.contains("popup"))&&e.closePopup()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function _(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImgForm=document.querySelector(".element__image"),t._popupImgTitle=document.querySelector(".popup__title_pic"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._popupImgForm.src=t,this._popupImgTitle.textContent=e,this._popupImgForm.alt=e,f(d(u.prototype),"openPopup",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmitForm=t,n._form=n._selectorPopup.querySelector(".popup__container"),n._input=n._form.querySelectorAll(".popup__info"),n._submitButton=n._selectorPopup.querySelector(".popup__submit-button"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._input.forEach((function(t){e[t.name]=t.value})),console.log(e),e}},{key:"setEventListeners",value:function(){var e=this;b(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}},{key:"closePopup",value:function(){b(E(u.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._permanentText=this._submitButton.textContent,this._submitButton.textContent=e?"Сохранение...":this._permanentText}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userJob.textContent,avatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e){this._userId=e._id,this._userName.textContent=e.name,this._userJob.textContent=e.about,this._userAvatar.src=e.avatar}},{key:"returnUserId",value:function(){return this._userId}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка")}},{key:"getOriginalCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getOriginalProfileInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addNewProfileInfo",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addNewAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"addNewLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function B(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=document.querySelector(".popup__container"),n._deleteForm=n._form.querySelector(".popup__container_delete-card"),n._submitButton=n._selectorPopup.querySelector(".popup__submit-button"),n._handleFormSubmit=t,n}return t=u,(n=[{key:"openPopup",value:function(e){R(x(u.prototype),"openPopup",this).call(this),this._card=e}},{key:"renderLoading",value:function(e){this._permanentText=this._submitButton.textContent,this._submitButton.textContent=e?"Сохранение...":this._permanentText}},{key:"setEventListeners",value:function(){var e=this;R(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._card)}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c),A=document.querySelector(".popup__container_profile"),D=document.querySelector(".profile__edit-button"),F=document.querySelector(".popup__info_name_active"),J=document.querySelector(".popup__info_job_active"),M=document.querySelector(".popup__container_add"),U=document.querySelector(".profile__add-button"),V=document.querySelector(".popup__container_avatar"),G=document.querySelector(".profile__avatar-edit-button"),H={formSelector:".popup__container",inputSelector:".popup__info",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__info_type_error",errorClass:"popup__span-error_visible"},z=new o(H,A),K=new o(H,M),Q=new o(H,V);z.enableValidation(),K.enableValidation(),Q.enableValidation();var W=new j({url:"https://nomoreparties.co/v1/cohort-41",headers:{authorization:"fbc65fd2-5c16-4a99-9542-a08cde72dc8c","Content-Type":"application/json"}});W.getOriginalCards().then((function(e){X.renderItems(e)})).catch((function(e){alert(e)}));var X=new u({renderer:function(e){return new t(e,Y,Z,$,".template",te.returnUserId()).generateCard()}},".elements");function Y(e,t){re.openPopup(e,t)}function Z(e,t){t?W.deleteLike(e._cardId).then((function(t){e.deleteMyLike(t.likes)})).catch((function(e){alert(e)})):W.addNewLike(e._cardId).then((function(t){e.addMyLike(t.likes)})).catch((function(e){alert(e)}))}function $(e){ie.openPopup(e)}W.getOriginalProfileInfo().then((function(e){te.setUserInfo(e)})).catch((function(e){return console.log(e)}));var ee=new O(".popup_edit",(function(e){te.setUserInfo(e),W.addNewProfileInfo(e),ee.closePopup()}));ee.setEventListeners();var te=new S({profileName:".profile__title",profileJob:".profile__subtitle",profileAvatar:".profile__edit-avatar"});D.addEventListener("click",(function(){var e=te.getUserInfo(),t=e.name,n=e.about;F.value=t,J.value=n,ee.openPopup()}));var ne=new O(".popup_add",(function(e){W.addNewCard(e).then((function(){return ne.closePopup()})).catch((function(e){alert(e)}))}));ne.setEventListeners(),U.addEventListener("click",(function(){ne.openPopup()}));var re=new y(".popup_pic");re.setEventListeners();var oe=new O(".popup_avatar",(function(e){oe.renderRetention(!0),W.addNewAvatar(e).then((function(e){te.addNewAvatar(e),oe.closePopup()})).catch((function(e){return alert(e)})).finally((function(){return oe.renderRetention(!1)}))}));oe.setEventListeners(),G.addEventListener("click",(function(){oe.openPopup()}));var ie=new N(".popup_delete-card",(function(e){W.deleteCard(e._id).then((function(){e.handleDeleteClick(),ie.closePopup()})).catch((function(e){return alert(e)}))}));ie.setEventListeners()})();