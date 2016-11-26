;(function(){
    angular.module('appCtrl',[])
    // 设置标准样式
    .config([
      '$ionicConfigProvider',
      '$stateProvider',
      '$urlRouterProvider',
      function($ionicConfigProvider,$stateProvider,$urlRouterProvider){
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        //根据状态配置路由
        $stateProvider

        .state('intro',{
            url:'/intro',
            templateUrl:'../html/intro.html'
        })

        .state('production',{
          url:'/production',
          templateUrl:'../html/production.html',
          controller:'proController'
        })

        .state('review',{
          url:'/review',
          templateUrl:'../html/review.html',
          controller:'reController'
        })

        //当链接地址不正确的时候给用户直接在首页显示
        $urlRouterProvider.otherwise('/intro')

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
    // contentController
    .controller('ContentController',[
        '$scope',
        '$ionicSideMenuDelegate',
        function($scope,$ionicSideMenuDelegate){
            $scope.toggleLeftMenu = function(){
                $ionicSideMenuDelegate.toggleLeft();
            }
        }
        ])
      // proController
      .controller('proController',[
        '$scope',
        function($scope){

        }
        ])
      // reController
      .controller('reController',[
        '$scope',
        function($scope){

        }
        ])





})();