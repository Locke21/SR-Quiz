app.controller('homeCtrl',['$scope','$location',function($scope,$loacation){
  $scope.quiz = false;

  $scope.user = "Fabian";

  $scope.currentLocation = function(loc){
    switch (loc) {
      case 'quiz':
        $scope.quiz = true;
        $scope.home = false;
        $scope.impressum = false;
        $scope.profile = false;
        $scope.dashboard = false;
      break;
      case 'home':
        $scope.quiz = false;
        $scope.home = false;
        $scope.impressum = false;
        $scope.profile = false;
        $scope.dashboard = false;
      break;
      case 'impressum':
        $scope.quiz = false;
        $scope.home = false;
        $scope.impressum = true;
        $scope.profile = false;
        $scope.dashboard = false;
        $loacation.path('/impressum');
      break;
      case 'profile':
        $scope.quiz = false;
        $scope.home = false;
        $scope.impressum = false;
        $scope.profile = true;
        $scope.dashboard = false;
      break;
      case 'dashboard':
        $scope.quiz = false;
        $scope.home = false;
        $scope.impressum = false;
        $scope.profile = false;
        $scope.dashboard = true;
      break;
      default:
        $scope.quiz = false;

    }
  }
}]);