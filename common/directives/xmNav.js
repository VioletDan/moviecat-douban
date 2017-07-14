(function(angular){
    angular
        .module("movie.directives",[])
        .directive("xmNav",["$location",function($location){
            return{
                templateUrl:"/common/directives/xmNav.html",
                link:function(scope,element,attr){
                    scope.$location=$location;
                    scope.$watch("$loaction.url()",function(newValue,oldValue){
                        var lis=element.find("li");
                        // console.log(lis);
                         //排他操作
                        for(var i = 0; i < lis.length; i++){
                            lis.eq(i).removeClass("active");
                        }
                        for(var i=0;i<lis.length;i++){
                            //这里如果用lis[i]的话,因为是js原生操作,所以后面的find方法用不了
                            var li=lis.eq(i);
                            var a=li.find("a");
                            if(a.attr("href").indexOf(newValue)!=-1){
                                li.addClass("active");
                            }
                        }
                    })
                }
            }
        }])
})(angular)