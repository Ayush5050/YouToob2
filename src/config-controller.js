// //define the Angular module 
// var config = angular.module('ngApp');

// config.controller('config', function ($scope, $filter, $http, toaster, $modal) {

//     $scope.configs = [];
//     $scope.isEdit = false;
//     $scope.Value = 0;
//     var configObj = {
//         Id: 0,
//         ConfigCode: "",
//         Description: "",
//         TypeIndicator: 0,
//         Value: 0,
//         show: true
//     }
//     $scope.config = {
//         Id: 0,
//         ConfigCode: "",
//         Description: "",
//         TypeIndicator: 0,
//         Value: 0,
//         show: true
//     }

//     $scope.getAllConfig = function () {
//         $http.get('http://localhost:56123/api/GeneralConfigs').success(function (data) {
//             $scope.configs = data;
//             toaster.pop('success', 'success', 'Data is loaded');
//             updateFilters4User();
//         }).error(function () {
//             $scope.error = "An Error has occurred while loading Configurations!";
//             toaster.pop('error', 'Error', $scope.error);
//         });
//     };
//     $scope.getAllConfig();



//     $scope.updateConfig = function (index, id, isEdit) {
//         $scope.configObject = {};
//         $scope.valueFetched = false;
//         $http.get('http://localhost:56123/api/GeneralConfigs/' + id).success(function (data) {

//             //Text
//             if (data.TypeIndicator == 1) {
//                 $scope.configObject = {
//                     ConfigCode: data.COnfigCode,
//                     Description: data.Description,
//                     Id: data.Id,
//                     TypeIndicator: data.TypeIndicator,
//                     Value: data.Value,
//                     show: true
//                 };
//             }
//             //number
//             if (data.TypeIndicator == 2 || data.TypeIndicator == 3) {
//                 $scope.configObject = {
//                     ConfigCode: data.COnfigCode,
//                     Description: data.Description,
//                     Id: data.Id,
//                     TypeIndicator: data.TypeIndicator,
//                     Value: parseInt(data.Value),
//                     show: true
//                 };
//             }
//             //6=Money 
//             if (data.TypeIndicator == 6) {
//                 $scope.configObject = {
//                     ConfigCode: data.COnfigCode,
//                     Description: data.Description,
//                     Id: data.Id,
//                     TypeIndicator: data.TypeIndicator,
//                     Value: parseFloat(data.Value, 2),
//                     show: true
//                 };
//             }
//             //5=Time 
//             if (data.TypeIndicator == 5) {
//                 $scope.configObject = {
//                     ConfigCode: data.COnfigCode,
//                     Description: data.Description,
//                     Id: data.Id,
//                     TypeIndicator: data.TypeIndicator,
//                     Value: data.Value,
//                     show: true
//                 }
//             }
//             //10-textarea
//             if (data.TypeIndicator == 10) {
//                 $scope.configObject = {
//                     ConfigCode: data.COnfigCode,
//                     Description: data.Description,
//                     Id: data.Id,
//                     TypeIndicator: data.TypeIndicator,
//                     Value: data.Value,
//                     show: true
//                 }
//             }
//             openModal($scope.configObject);
//         }).error(function (data) {

//         });
//     }
//     function openModal(obj) {
//         var modalInstance = $modal.open({
//             templateUrl: 'ConfigModal.html',
//             controller: 'ConfigModalPopUpCtrl',
//             backdrop: 'static',
//             size: 'lg',
//             scope: $scope,
//             resolve: {
//                 obj: function () {
//                     return obj;
//                 }
//             }
//         });
//         modalInstance.result.then(function (obj) {
//             if (obj != "") {
//                 //update the list
//                 $scope.getAllConfig();
//             }
//         });
//     }

//     //To update paging when search filter is applied
//     $scope.updatePaging = function () {
//         updateFilters4User();
//     }

//     // **********************   Pagination control  functionality Start  **********************
//     // Pagination control  Variables
//     $scope.pageParam = {
//         currentPage: 0,
//         maxSize: 10,
//         startindex: 0,
//         pageBoundary: 1
//     };

//     $scope.HcontractsCount = 0;


//     $scope.pageChangedUser = function (pagenum, size) {
//         $scope.pageParam.startindex = (pagenum * size) - size;
//     };

//     $scope.pageSizeChanged4User = function (size) {
//         updatePaging4User(size);
//     };

//     function updateFilters4User() {
//         $scope.filteredItems = [];
//         $scope.filteredItems = $filter('filter')($scope.configs, $scope.configFilter);
//         $scope.HcontractsCount = $scope.filteredItems.length;
//         updatePaging4User($scope.pageParam.maxSize);
//     }

//     function updatePaging4User(size) {
//         $scope.pageParam.currentPage = 1;
//         var pagecount = ($scope.HcontractsCount / size);
//         var decimalpart = pagecount % 1;
//         $scope.pageParam.pageBoundary = Math.floor(pagecount);  //integer part from pagecount
//         if (decimalpart > 0) {
//             $scope.pageParam.pageBoundary = $scope.pageParam.pageBoundary + 1;
//         }
//         if ($scope.pageParam.pageBoundary == 0) { $scope.pageParam.pageBoundary = $scope.pageParam.pageBoundary + 1; }
//         $scope.pageParam.startindex = ($scope.pageParam.currentPage * size) - size;
//     }
//     // **********************   Pagination control  functionality End  **********************

// })

// config.controller('ConfigModalPopUpCtrl', function ($scope, $http, obj, $modalInstance, toaster) {
//         $scope.config = obj;
//         $scope.toggleConfigModal = function () {
//             $modalInstance.close("");
//         }
//         $scope.timeInstance = {
//             minutes: 0,
//             hours: 0,
//         }
//         var configObj = {
//             Id: 0,
//             ConfigCode: "",
//             Description: "",
//             TypeIndicator: 0,
//             Value: 0,
//             show: true
//         }
//         if (obj.TypeIndicator == 5)//time
//         {
//             var item = obj.Value.split("-");
//             $scope.timeInstance.hours = parseInt(item[0]);
//             $scope.timeInstance.minutes = parseInt(item[1]);
//         }
//         $scope.saveConfig = function () {
//             if ($scope.config.TypeIndicator == 5)//time
//             {
//                 var value = $scope.timeInstance.hours + "-" + $scope.timeInstance.minutes;
//                 configObj.Value = value;
//             }
//             else {
//                 configObj.Value = $scope.config.Value;
//             }
//             configObj.COnfigCode = $scope.config.ConfigCode;
//             configObj.Description = $scope.config.Description;
//             configObj.Id = $scope.config.Id;
//             configObj.TypeIndicator = $scope.config.TypeIndicator;

//             configObj.show = true;
//             $http.put('http://localhost:56123/api/generalconfigs/' + $scope.config.Id, configObj).success(function (data) {
//                 $modalInstance.close($scope.config);
//             }).error(function (data) {
//                 $scope.error = "an error has occurred while updating configuration! " + data;
//                 toaster.pop('error', 'Error', $scope.error);
//                 $modalInstance.close("");
//             });
//         }
//     });

