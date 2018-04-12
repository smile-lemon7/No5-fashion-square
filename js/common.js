//subnav
define({
	navShow : function(){
		$(".navSub").on("mouseenter",".list",function(){
				$(this).find(".navSubList").addClass("activeNav")
				.siblings().css({"top": -$(this).index() *30+10})
				.show()
				.end()
				.parent("li").siblings().find(".navSubList").removeClass("activeNav")
				.removeClass("activeNav")
				.siblings()
				.hide()
			}).on("mouseleave",".list",function(){
				$(this).find(".navSubList").removeClass("activeNav")
				.siblings()
				.hide()
				
			})
		}
	})