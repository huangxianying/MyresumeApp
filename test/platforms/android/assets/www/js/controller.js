;(function(){
    angular.module('appCtrl',[])
    // 设置标准样式
    .config([
      '$ionicConfigProvider',
      function($ionicConfigProvider){
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');
      }
      ])

    // 创建控制器
    .controller('myCtrl',[
      '$scope',
      '$ionicSlideBoxDelegate',
      function($scope,$ionicSlideBoxDelegate){
          $scope.nextSlide = function(){
            $ionicSlideBoxDelegate.next();
            $ionicSlideBoxDelegate.enableSlide([true]);
          }
          $scope.openHtml = function(){
            location.href='html/content.html'
          }
      }
      ])

    .controller('ContentController',[
        '$scope',
        '$ionicSideMenuDelegate',
        function($scope,$ionicSideMenuDelegate){
            $scope.toggleLeftMenu = function(){
                $ionicSideMenuDelegate.toggleLeft();
            }
        }
        ])
    // .controller('sideToggleLeft',[
    //     '$scope',
    //     '$ionicSideMenuDelegate',
    //     function($scope,$ionicSideMenuDelegate){

    //     }
})();