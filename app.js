(function(angular){
    angular
        .module("moviecat",[
            //在主模块中引入ngRoute之后，下面的所有的子模块都可以引用
            "ngRoute",
            "common.jsonp",
            "moviecat.detail",
            "moviecat.homepage",
            "moviecat.movielist",
            "movie.directives"
        ])
        .config(["$locationProvider",function($locationProvider){
            //去掉地址栏里的感叹号
            $locationProvider.hashPrefix("");
        }])
        .controller("search",["$scope","$location",function($scope,$location){
            $scope.search=function(){
                var keywords=$scope.keywords;
                console.log(keywords);
                var url = "/search?q=" + keywords;
				//$location.url()方法也可以用来设置 页面的hash值
				$location.url(url);
            }
        }])
})(angular)