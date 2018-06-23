(() => {
  'use strict'

  angular.module('public')
    .controller('SignupController', SignupController)

  SignupController.$inject = ['getShortName']
  function SignupController(getShortName) {
  }
})()
