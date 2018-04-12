requirejs.config({
	paths : {
		"jquery": "jquery-1.11.1.min",
		"common": "common"
		
	}
})

requirejs(["jquery","common"],function($,cm){
	$("#subnav").mouseenter(function(){
		$(".navSub").slideDown(500,function(){
			cm.navShow();
		})
	}).mouseleave(function(){
		cm.navShow();
		$(this).find(".navSub")
		.slideUp(500)
	})
	
	
	
	
	
	
})
