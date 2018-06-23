(() => {
  'use strict'

  angular.module('public')
    .controller('SignupController', SignupController)

  SignupController.$inject = ['getShortName', 'setUserInfo']
  function SignupController(getShortName, setUserInfo) {
    let vm = this;
    vm.message = "";

    vm.submit = () => {
      getShortName(vm.user.favFoodShortName.toUpperCase())
        .then((response) => {
          vm.user.favoriteFood = response
          setUserInfo(vm.user)
          vm.message = "Your information has been saved!"
        })
        .catch(() => vm.message = "No such menu number exists")
    }

  }
})()
