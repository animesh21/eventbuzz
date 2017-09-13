/**
 * Created by animesh on 31/8/17.
 */
angular
  .module("invisionApp.remoteService", [])

  .service("remoteService",
    function ($http) {

      'use strict';

      var vm = this;
      vm.loginURL = 'http://127.0.0.1:8000/authapp/login';
      vm.signupURL = 'http://127.0.0.1:8000/authapp/users';

      function _login(username, password) {
        var postData = {
          username: username,
          password: password
        };
        return $http.post(vm.loginURL, postData);
      }

      function _signup(first_name, last_name, email, password) {
        var postData = {
          first_name: first_name,
          last_name: last_name,
          username: email,
          email: email,
          password: password
        };
        return $http.post(vm.signupURL, postData);
      }

      return {
        login: _login,
        signup: _signup
      };
    });
