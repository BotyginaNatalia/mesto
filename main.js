(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this,i=e.data,u=e.handleCardClick,c=e.handleDeleteClick,a=e.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_clearLike",(function(){o._likeButton.classList.remove("element__like-button_active")})),t(this,"deleteCard",(function(){o._element.remove(),o._element=null})),t(this,"_setEventListeners",(function(){o._deleteButton=o._element.querySelector(".element__delete-button"),o._likeButton.addEventListener("click",(function(){return o.handleLikeClick(o._id)})),o._deleteButton.addEventListener("click",(function(){return o._handleDeleteClick(o._id)})),o._imgForm.addEventListener("click",o._handleCardClick)})),this._name=i.name,this._link=i.link,this._cardTemplateSelector=r,this._handleCardClick=u,this._likes=i.likes,this._id=i.id,this._userId=i.userId,this._ownerId=i.ownerId,this._handleDeleteClick=c,this._handleLikeClick=a}var r,o;return r=n,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._likeCountElement=this._newElement.querySelector(".element__number-of-like"),this._likeCountElement.textContent=this._likes.length,this.isLiked()?this._fillLike():this._clearLike()}},{key:"_setLike",value:function(){this._likeButton.classList.add("element__like-button_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._imgForm=this._element.querySelector(".element__image"),this._imgForm.src=this._link,this._imgForm.alt=this._name,this._imgTitle=this._element.querySelector(".element__title"),this._imgTitle.textContent=this._name,this._likeButton=this._element.querySelector(".element__like-button"),this._setEventListeners(),this.setLikes(this._likes),this._ownerId!==this._userId&&(this._deleteButton.style.display="none"),this._element}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_showError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._validationObjects.inputErrorClass),n.classList.add(r._validationObjects.errorClass),n.textContent=t})),o(this,"_hideError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._validationObjects.inputErrorClass),t.classList.remove(r._validationObjects.errorClass),t.textContent=""})),o(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideError(e):r._showError(e,e.validationMessage)})),this._validationObjects=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationObjects.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationObjects.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._validationObjects.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._validationObjects.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"hideErrorMessage",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._selectorContainer=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._selectorContainer.append(e)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorPopup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"openPopup",value:function(){this._selectorPopup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._selectorPopup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._selectorPopup.addEventListener("click",(function(t){(t.target.classList.contains("popup__close-button")||t.target.classList.contains("popup"))&&e.closePopup()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImgForm=document.querySelector(".element__image"),t._popupImgTitle=document.querySelector(".popup__title_pic"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._popupImgForm.src=t,this._popupImgTitle.textContent=e,this._popupImgForm.alt=e,p(y(u.prototype),"openPopup",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n._form=n._selectorPopup.querySelector(".popup__container"),n._input=n._form.querySelectorAll(".popup__info"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._input.forEach((function(t){return e[t.name]=t.value})),this._values}},{key:"setEventListeners",value:function(){var e=this;k(O(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._submitForm(e._getInputValues())}))}},{key:"closePopup",value:function(){k(O(u.prototype),"closePopup",this).call(this),this._form.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.job}},{key:"setAvatar",value:function(e){this._userAvatar.src=e}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function q(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._selectorPopup.querySelector(".popup__container"),t._submitForm=submitForm,t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;R(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm()}))}},{key:"setSubmitForm",value:function(e){this._submitForm(e)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.link,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"getNewLikes",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCards",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLikes",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(this._checkResponse)}},{key:"getAllInformation",value:function(){return Promise.all([this.getProfileInfo(),this.addNewCard()])}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),N=document.querySelector(".popup__container_profile"),D=document.querySelector(".profile__edit-button"),J=document.querySelector(".popup__info_name_active"),V=document.querySelector(".popup__info_job_active"),U=document.querySelector(".popup__container_add"),M=document.querySelector(".profile__add-button"),G=(document.querySelector(".popup__container_delete-card"),document.querySelector(".popup__submit-button_delete"),document.querySelector(".popup__container_avatar")),H=document.querySelector(".profile__avatar-edit-button"),z={formSelector:".popup__container",inputSelector:".popup__info",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__info_type_error",errorClass:"popup__span-error_visible"},K=new i(z,N),Q=new i(z,U),W=new i(z,G);K.enableValidation(),Q.enableValidation(),W.enableValidation();var X=new c({items:[],renderer:function(e){var t=Y({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:e.userId,ownerId:e.owner._id});X.append(t)}},".elements");function Y(e){var t=new n(data,".template",(function(){te.open(e.name,e.link)}),(function(e){oe.open(),oe.setSubmitForm((function(){ie.deleteCard(e).then((function(e){t.deleteCard(),oe.close()})).catch((function(e){console.log(e)}))}))}),(function(e){t.isLiked()?ie.deleteLikes(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)})):ie.getNewLikes(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}));return t.createCard()}var Z=new P(".popup_edit",(function(){$.setUserInfo()}));Z.setEventListeners();var $=new L({profileName:".profile__title",profileJob:".profile__subtitle"});$.getUserInfo(),D.addEventListener("click",(function(){var e=$.getUserInfo();J.value=e.name,V.value=e.job,Z.openPopup()}));var ee=new P(".popup_add",(function(){renderCard.addItem(Y())}));ee.setEventListeners(),M.addEventListener("click",(function(){ee.openPopup()}));var te=new m(".popup_pic");te.setEventListeners();var ne=new P(".popup_avatar",(function(){$.setAvatar()}));ne.setEventListeners(),H.addEventListener("click",(function(){ne.openPopup()}));var re=new P(ne,{submitForm:function(e){re.showLoadingMessage(!0),ie.setAvatar(e).then((function(e){$.setAvatar(e)})).catch((function(e){return console.log(e)}))}});re.setEventListeners();var oe=new F(".popup_delete-card");oe.setEventListeners();var ie=new A({url:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"fbc65fd2-5c16-4a99-9542-a08cde72dc8c","Content-Type":"application/json"}})})();