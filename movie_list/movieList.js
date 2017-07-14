(function(angular){
    angular
        .module("moviecat.movielist",[])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider
                .when("/:movieType/:page?",{
                    templateUrl:"./movie_list/view.html",
                    controller:"movieList"
                })
        }])
        .controller("movieList",["$scope", "$route", "$routeParams", "$window", "jsonpService", function($scope, $route, $routeParams, $window, jsonpService){
            //设置遮罩层为显示
            $scope.isMaskShow = true;
            var keywords = $routeParams.q;
            var movieType=$routeParams.movieType;
            var page=$routeParams.page || 1;
            var count=10;
            var start = count *(page-1);
            var url="https://api.douban.com/v2/movie/" + movieType + "?start=" + start + "&count="+count +"&q=" +keywords;
            // var url="www.baidu.com";
            // console.log(jsonpService);
            jsonpService.jsonp(url,function(data){
                console.log(data);
                //因为数据请求已经完成，所以将这这层隐藏
                $scope.isMaskShow = false;
                $scope.data=data;
                $scope.totalPage=Math.ceil(data.total/data.count);
                $scope.currentPage=(data.start/data.count)+1;
                //上一页按钮的点击事件
                $scope.prevPage=function(){
                    alert(1)
                    if($scope.currentPage==1){
                        return;
                    }
                    $route.updateParams({
                        page:$scope.currentPage-1
                    })
                }
                //下一页按钮的点击事件
                $scope.nextPage=function(){
                    alert(1)
                    
                    if($scope.currentPage==$scope.totalPage){
                        return;
                    }
                    $route.updateParams({
                        page:$scope.currentPage+1
                    })
                }
                $scope.$digest();
            })
        }])
})(angular)