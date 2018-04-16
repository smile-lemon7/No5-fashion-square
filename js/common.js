//subnav
define({
	navShow : function(obj,obj1){
		obj.on("mouseenter",function(){
			obj1.slideDown(600,function(){
				obj1.on("mouseenter","li",function(){
					$(this).find(".navSubList").addClass("activeNav")
						.siblings().css({"top": -$(this).index() *30+10})
						.show()
						.end()
						.parent("li").siblings().find(".navSubList").removeClass("activeNav")
						.removeClass("activeNav")
						.siblings()
						.hide()
				}).on("mouseleave",function(){
					$(this).find(".navSubList").removeClass("activeNav")
						.siblings()
						.hide()
				})
			})
			return false;
		})
		obj1.on("mouseleave",function(){
			obj1.slideUp(500);
		})
	},
	indexNavShow: function(obj){
		obj.on("mouseenter","li",function(){
			$(this).find(".navSubList").addClass("activeNav")
				.siblings().css({"top": -$(this).index() *30+10})
				.stop()
				.show()
				.end()
				.parent("li").siblings().find(".navSubList").removeClass("activeNav")
				.removeClass("activeNav")
				.siblings()
				.hide()
		}).on("mouseleave",function(){
			$(this).find(".navSubList").removeClass("activeNav")
				.siblings()
				.stop()
				.hide()
		})
	}
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
})