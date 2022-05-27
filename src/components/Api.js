export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      `Ошибка ${res.status}`
    );
  }

  getOriginalCards() {
    return fetch(`${this._url}${"cards"}`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addNewCard(data) {
    return fetch(`${this._url}${"cards"}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({name:data['inputPlace'], link:data['inputLink']})
    }).then(this._checkResponse);
  }

  deleteCardFromServer(cardId) {
    return fetch(`${this._url}${"cards/"}${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getOriginalProfileInfo() {
    return fetch(`${this._url}${"users/me"}`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  changeProfileInfo(data) {
    return fetch(`${this._url}${"users/me"}`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({name:data['inputName'], about:data['inputJob']}),
    }).then(this._checkResponse);
  }

  updateAvatar(data) {
    return fetch(`${this._url}${"users/me/avatar"}`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({avatar:data['inputAvatar']}
    )
    }).then(this._checkResponse);
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  removeLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

