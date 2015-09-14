angular.module('myApp').factory('catrers',function($resource){
       return $resource('http://localhost:10091/DemoRestaurantbackend/webresources/catrers',{},{
          query: {
              method:'GET', isArray:true 
          } 
       }); 
    });