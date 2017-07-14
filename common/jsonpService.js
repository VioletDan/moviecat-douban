(function(angular){
    angular
        .module("common.jsonp",[])
        .service("jsonpService",["$window",function($window){
            this.jsonp = function (url, callback) {
                var cbName = "jsonp" + (new Date() - 0) + $window.parseInt($window.Math.random() * 10000);
                $window[cbName] = callback;
                var script = document.createElement("script");
                script.src = url + "&callback=" + cbName;
                document.body.appendChild(script);
                // var script = $("<script src="+ url + "&callback=" + cbName  +"></script>")
                // $(document.body).append(script);
            }
        }])
})(angular)