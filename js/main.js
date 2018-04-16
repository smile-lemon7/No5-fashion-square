requirejs.config({
	paths:{
		"jquery":"jquery-1.11.1.min",
		"public":"public",
		"countDown": "countDown",
		"common": "common"
	}
})

requirejs(["jquery","public","countDown","common"],function($,obj1,cd,cm){
	//搜索
	$(".search").mouseenter(function(){
		$(".searchMask").show().css("cursor","text");
		$(".delKeywords").show().css("cursor","pointer");
	}).mouseleave(function(){
		$(".searchMask").hide();
		$(".delKeywords").hide();
	})
	$(".delKeywords").click(function(){
		$("#search").val("");
	})
	
	//关键字
	$(".hotKey").on("mouseenter","a",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	//subnav
	cm.indexNavShow( $(".navSub") );
	//轮播图
	var timer = setInterval(autoplay,2000);
	var index = 0;
	function autoplay(){
		index++;
		if(index==$(".slidePic li").length){
			index = 0;
		}
		$(".slidePic li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$(".box .slideSub").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$(".order li").eq(index).addClass("orderActive").siblings().removeClass("orderActive");
	}
	$(".order").on("mouseenter","li",function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoplay();
	}).on("mouseleave","li",function(){
		timer = setInterval(autoplay,2000);
	})
	//抢购倒计时
		var end = new Date("2018-04-16 16:16:00");
		var now = new Date();
		cd.count(end,now);
	//特价tab栏
	$("#saleTab").delegate("li","mouseenter",function(){
		$("#tabArrow").css({"left":$(this).offset().left})
		
	})
	
	//护肤tab栏
	$(".listShow").on("mouseenter","li",function(){
		$(".listShow").find("li").find(".hufuinfo").hide();
		$(this).find(".hufuinfo").show()
			   .siblings().find(".hufuinfo").hide()
	})
	
	//尾部
	$("#email").focus(function(){
		this.value = "";
	}).blur(function(){
		$(this).val("请输入您的Email地址")
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})































