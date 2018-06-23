(() => {
  angular.module('common')
    .service('UserService', UserService)


  function UserService() {
    let service = this;
    let user;

    service.getUserInfo = () => {
      return user;
    }

    service.setUserInfo = (userInfo) => {
      user = userInfo;
    }
  }
})()
