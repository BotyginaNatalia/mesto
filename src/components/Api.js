export class Api {
    constructor(apiConfig) {
    this._url = apiConfig.link;
    this._headers = apiConfig.headers;
    
}

_checkResponse(res) {
    if (res.ok) {
    return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

getProfileInfo() {
    return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: this._headers
    })
        .then(this._checkResponse)
    }

getCards() {
    return fetch(`${this._url}/cards`, {
        method: "GET",
        headers: this._headers
    })
    .then(this._checkResponse);
}

editProfile(userInfo) {
    return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            name: userInfo.name,
            about: userInfo.about
        })
    })
}

addNewCard(data) {
    return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
            name: data.name,
            link: data.link
        })
    })
    .then(this._checkResponse);
}

getNewLikes(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
        method: "PUT",
        headers: this._headers        
    })
    .then(this._checkResponse);
}

deleteCards(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
        method: "DELETE",
        headers: this._headers
    })
    .then(this._checkResponse);
}

deleteLikes(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
        method: "DELETE",
        headers: this._headers        
    })
    .then(this._checkResponse);
}

updateAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            avatar: avatar.link
        })
    })
    .then(this._checkResponse);
}

getAllInformation() {
    return Promise.all([this.getProfileInfo(), this.addNewCard()]);
  }

}    
