/**
 * SurfIT invisionApp
 */
angular.module('invisionApp',
  ['ionic', 'ngCordova', 'invisionApp.remoteService', 'invisionApp.login',
    'invisionApp.categories'])

  .run(function ($ionicPlatform, $window) {

    'use strict';

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      $window.localStorage.setItem('showIntro', true);

      var notificationOpenedCallback = function () {
      };
      // Update with your OneSignal AppId and googleProjectNumber before running.
      if ($window.plugins && $window.plugins.OneSignal) {
        $window.plugins.OneSignal.init('bff790de-6c7b-4550-9202-0acebb924b28', {googleProjectNumber: '295165547597'}, notificationOpenedCallback);
      }
    });
  })

  .config(
    function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
      'use strict';
      $ionicConfigProvider.tabs.position('top');
      $ionicConfigProvider.tabs.style('standard');

      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'ApplicationController as appCtrl'
        })
        .state('app.categories', {
          url: '/categories',
          views: {
            'menuContent': {
              templateUrl: 'templates/categories.html',
              controller: 'CategoriesController as categoriesCtrl'
            }
          }
        })
        .state('app.category', {
          url: '/categories/:categoryId',
          views: {
            'menuContent': {
              templateUrl: 'templates/category.html',
              controller: 'ItemsController as itemsCtrl'
            }
          }
        })
        .state('app.category-featured', {
          url: '/categories/featured/:categoryId',
          views: {
            'menuContent': {
              templateUrl: 'templates/category-featured.html',
              controller: 'ItemsController as itemsCtrl'
            }
          }
        })
        .state('app.item', {
          url: '/items/:itemId',
          views: {
            'menuContent': {
              templateUrl: 'templates/item.html',
              controller: 'ItemsController as itemCtrl'
            }
          }
        })
        .state('app.comments', {
          url: '/comments',
          views: {
            'menuContent': {
              templateUrl: 'templates/comments.html',
              controller: 'CommentsController as commentsCtrl'
            }
          }
        })
        .state('app.login', {
          url: '/login',
          views: {
            'menuContent': {
              controller: 'LoginController as loginCtrl',
              templateUrl: 'templates/login.html'
            }
          }
        })
        .state('app.register', {
          url: '/register',
          views: {
            'menuContent': {
              controller: 'LoginController as loginCtrl',
              templateUrl: 'templates/register.html'
            }
          }
        })
        .state('app.terms', {
          url: '/terms',
          views: {
            'menuContent': {
              templateUrl: 'templates/terms.html'
            }
          }
        })
        .state('app.help', {
          url: '/help',
          views: {
            'menuContent': {
              templateUrl: 'templates/help.html'
            }
          }
        })
        .state('app.slideshow', {
          url: '/slideshow/:forceShow',
          views: {
            'menuContent': {
              templateUrl: 'templates/slideshow.html',
              controller: 'SlideshowController as slideshowCtrl'
            }
          }
        });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('app/login');

    });
