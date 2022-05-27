export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._userName = document.querySelector(profileName);
    this._userJob = document.querySelector(profileJob);
    this._userAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userJob.textContent,
      avatar: this._userAvatar.src,
    };
  }

  setUserInfo(data) {
    this._userId = data._id;
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._userAvatar.src = data.avatar;
  }

  returnUserId() {
    return this._userId;
  }
}