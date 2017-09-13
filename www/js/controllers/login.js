/**
 * Login controller
 */
angular
	.module('invisionApp.login', [])

	.controller('LoginController',
		function ($ionicSideMenuDelegate, $state, remoteService) {

			'use strict';

			$ionicSideMenuDelegate.canDragContent(false);

			var vm = this;

      vm.doSignup = doSignup;
      vm.doLogin = doLogin;

			function doSignup(data) {
        remoteService.signup(data.firstName, data.lastName, data.email, data.password)
          .then(function (res) {
            console.log('Signup response: ' + JSON.stringify(res));
            $state.go('app.register');
          }, function (err) {
            console.error('Error in signup: ' + JSON.stringify(err));
          });
      }

			function doLogin(data) {
			  var username = data.username;
			  var password = data.password;
			  remoteService.login(username, password).then(function (res) {
          console.log('Login response: ' + JSON.stringify(res));
        }, function (err) {
          console.error('Error in login: ' + JSON.stringify(err));
        });
			}
		});
