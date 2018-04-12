requirejs.config({
	paths : {
		"jquery": "jquery-1.11.1.min",
		"common": "common",
		"extra": "extra"
	}                                                                                         
})
requirejs(["jquery","common","extra"],function($,cm,ex){
	$("#subnav").mouseenter(function(){
		$(".navSub").slideDown(500,function(){
			cm.navShow();
		})
	}).mouseleave(function(){
		cm.navShow();
		$(this).find(".navSub")
		.slideUp(500)
	})
	
	//放大镜
	$(".picsmall").on("mouseenter","li",function(){
		$(this).find("img").addClass("bdblue")
			   .end().siblings()
			   .find("img").removeClass("bdblue");
		$(".picmiddle img").attr("src","images/goodimages/middle"+$(this).index()+".jpg");
		$(".picbig").css("background","url(images/goodimages/big"+$(this).index()+".jpg) no-repeat");		   
		$(".mask").css("background","url(images/goodimages/middle"+$(this).index()+".jpg) no-repeat")
	})
	$(".picmiddle").on("mouseenter",function(){
		$(".mask").show()
		$(".picbig").show()
	})
	$(".mask").on("mouseenter",function(e){
		var e = e || event;
		var x = e.clientX - $(".mask").position().left - $(".picmiddle").offset().left;
		var y = e.clientY - $(".mask").position().top -$(".picmiddle").offset().top;
		$(document).on("mousemove",function(e){
			var left = e.clientX - x - $(".picmiddle").offset().left ;
			var top = e.clientY - y - $(".picmiddle").offset().top;
			left = Math.min(Math.max(left,0), $(".picmiddle").width()-$(".mask").width());
			top = Math.min(Math.max(top,0), $(".picmiddle").height()-$(".mask").height());
			$(".mask").css({"left":left,"top":top,"backgroundPositionX":-left,"backgroundPositionY":-top})
			var xx = $(".picbig").width()*left / $(".mask").width();
			var yy = $(".picbig").width()*top / $(".mask").height();
			$(".picbig").css({"backgroundPositionX":-xx,"backgroundPositionY":-yy})
			
		})
		$(".picmiddle").on("mouseleave",function(){
			$(document).off("mousemove");
			$(".mask").hide()
			$(".picbig").hide()
		})
		return false;
	}).bind(this)
	
	
	
	
	
	
	
	
	
})