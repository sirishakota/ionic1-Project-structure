angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('menu.home', {
    url: '/Home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('loginPage', {
    url: '/login',
    templateUrl: 'templates/loginPage.html',
    controller: 'loginPageCtrl'
  })

  .state('menu.listoptions', {
    url: '/listoptions',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listoptions.html',
        controller: 'listoptionsCtrl'
      }
    }
  })

  .state('menu.javaPage', {
    url: '/JavaPage',
   views: {
      'side-menu21': {
        templateUrl: 'templates/javaPage.html',
        controller: 'javaPageCtrl'
      }
    }
  })

  .state('menu.pythonPage', {
    url: '/PythonPage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pythonPage.html',
        controller: 'pythonPageCtrl'
      }
    }
  })

  .state('menu.clang', {
    url: '/Clang',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clang.html',
        controller: 'clangCtrl'
      }
    }
  })

  .state('signup', {
    url: '/Signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/login')


});
