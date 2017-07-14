(function(angular){
    angular
        .module("moviecat.homepage",[])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider
                .when("/home_page",{
                    //此路径相当于在index页面寻找文件
                    templateUrl:"./home_page/view.html",
                    controller:"homePage"
                })
        }])
        .controller("homePage",["$scope",function($scope){

        }])
})(angular)