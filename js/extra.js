define(function(){
	return {
		getCode: function(num){
		    var str = "";
		    for(var i=0;i<num;i++){
		        var code = Math.round(Math.random()*74+48);
		        if(code>=58&&code<=64 ||code>=91&&code<=96){
		            i--;            
		        }else{
		            str += String.fromCharCode( code );
		        }
		    }
		    return str;
		},
		getColor: function(){
			var str = "#";
			var color = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
	        for(var j=0;j<6;j++){
	            str += color[Math.round(Math.random()*15)];
	        }
			return str;
		}
   
		
		
	}
})