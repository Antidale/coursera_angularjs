(() => {
  angular.module('public')
    .controller('UserController', UserController)

  UserController.$inject = ['user']
  function UserController(user) {
    let vm = this;
    vm.user = user;
  }
})()
