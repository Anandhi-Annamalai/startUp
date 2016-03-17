app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/employeeDetails', {
        templateUrl: '/partials/employee/employeeDetails.html',
        controller: 'mainController'
      }).when('/gallery', {
        templateUrl: '/partials/gallery/homeBanner.html',
        controller: 'mainController'
      }).
      when('/about', {
        templateUrl: '/partials/about.html',
        controller: 'mainController'
      }).

      when('/home', {
        templateUrl: '/partials/home.html',
        controller: 'mainController'
      }).
      when('/signUp', {
        templateUrl: '/partials/signUp.html',
        controller: 'mainController'
      }).
      otherwise({
        redirectTo: 'index.html'
      });
  }]);