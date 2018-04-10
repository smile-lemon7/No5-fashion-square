//倒计时
define(function(){
	return {
		count : function(data,nowDate){
			var times = Math.abs(data.getTime()-nowDate.getTime())/1000;
		    show();
		    var timer = setInterval(function(){
		        times--;
		        if(times < 0){
		            $(".timeEnd").find("p").html("倒计时：00天00时00分00秒");
		            clearInterval(timer);
		        }else{
		            show();
		        }
		    },1000);
		    function show(){
//		    	var day = toTwo( parseInt( times/3600/24 ) );
		        var hours = toTwo( parseInt( times/3600 ) );
		        var min =  toTwo( parseInt( (times-hours*3600)/60 ) );
		        var seconds = toTwo( parseInt( times-hours*3600-min*60  ) );
		        $(".timeEnd").each(function(){
			        $(this).find("p").html("剩余 <b>"+hours+"</b> 小时<b> "+min+" </b> 分 <b> "+seconds+" </b>秒");
		        })
		    }
		}
	}
})


























