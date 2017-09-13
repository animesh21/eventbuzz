/**
 * Categories controller
 */
angular
  .module('invisionApp.categories', [])

  .controller('CategoriesController',
    function (categoriesService) {
      'use strict';

      var vm = this;

      categoriesService.getCategories().then(setCategories);

      function setCategories(categories) {
        vm.categories = categories;
      }
    }
  );
