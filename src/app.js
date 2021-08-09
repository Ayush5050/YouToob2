// var ngApp = angular.module("ngApp", [
//   'ngRoute',
//   'ngAnimate',
//   'ui.bootstrap',
//    'toaster',
//  ]);

// // AngularJs Routing
// ngApp.config(function ($routeProvider) {
//   $routeProvider
//     .when("/", {
//       template: '<p>This is main route.</p>'
//     })
//     .when("/route1", {
//       templateUrl: '/rr/rigilRocks/genral-config/config.html',
//     })
//     .when("/route2", {
//       template: '<p>This is route2.</p>'
//     })
//     .when("/route2/another", {
//       template: '<p>This is route another.</p>'
//     });

//   //   $urlRouterProvider.otherwise('/');

//   //   $locationProvider.html5Mode({
//   //     enabled: true
//   // });

//   // URL case sensitive = false
//   // $urlMatcherFactoryProvider.caseInsensitive(true);

// });


// // module
// var ngApp = angular.module("ngApp").component("jsApp", {
//   template: "<p>Hello {{'AngularJS'}}</p>",
//   controller: function ($scope) {
//     console.log("jsApp component started");
//   }
// });

// // controller
// ngApp.controller('MyCtrl', ['$scope', function ($scope) {
//   $scope.tutorial = "Angular";
//   $scope.user = {
//     name: 'Mehmet Canker',
//     address: 'Middle Earth'
//   };
// }])

// // custom directive
// ngApp.directive('myCustomer', function () {
//   return {
//     template: 'Name: {{user.name}} Address: {{user.address}}'
//   };
// });

// // custom filter
// ngApp.filter('Demofilter', function () {
//   return function (input) {
//     return input + " Tutorial"
//   }
// });

// // // manualy bootstraping angularjs app
// // angular.element(function () {
// //   angular.bootstrap(document, ['ngApp'], {
// //       strictDi: true      // to must, explicit inject objects 
// //   });
// // });
