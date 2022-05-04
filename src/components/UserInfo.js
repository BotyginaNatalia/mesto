export class UserInfo {
    constructor({ profileName, profileJob }) {
      this._userName = document.querySelector(profileName);
      this._userJob = document.querySelector(profileJob);
    }
  
    getUserInfo() {
      const userInfo = {
        name: this._userName.textContent,
        job: this._userJob.textContent,
      };
      return userInfo;    
    }
  
    setUserInfo(userInfo) {
      this._userName.textContent = userInfo.name;
      this._userJob.textContent = userInfo.job;
    }
  }