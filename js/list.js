requirejs.config({
	paths : {
		"jquery": "jquery-1.11.1.min",
		"common": "common",
		"extra": "extra"
	}                                                                                         
})
requirejs(["jquery","common","extra"],function($,cm,ex){
	//侧边导航
	cm.navShow( $("#subBtn"),$(".navSub") );
	
	$(".week-ranklist").on("click","h3",function(){
		$(this).next().toggle().siblings("ul").hide();
		$(this).find(".close").css({"backgroundPosition-Y":"-234px"})
	})
	
	
	//ajax请求数据
	$(window).load(function(){
		$.ajax({
			type: "get",
			url: "data/list.json",
			datatype: "json",
			success: function(res){
				var str = "";
				for( var i=0;i<12;i++ ){
					var json = res.goods[i];
					str += `
						<dl>
							<dt>
								<a href="javascript:;">
									<img src="images/list/${json.src}" alt="" titlt="${json.title}" />
								</a>
							</dt>
							<dd class="pro-name">
								<a href="javascript:;">${json.name}</a>
							</dd>
							<dd class="pro-price">
								￥
								<span class="price">${json.price}</span>
								<span class="discard">${json.discard}</span>
							</dd>
							<dd class="buybtn">
								<a href="javascript:;" class="add">加入购物车</a>
								<a href="javascript:;" class="shouc">收藏</a>
							</dd>
						</dl>
					`;
				}
				$(".cplist").html( str );
				
				$("#pageBelow").on("click","a",function(){
					$(".cplist").html("");
					$(this).addClass("pagecurrent").siblings().removeClass("pagecurrent");
					index = $(this).index();
					var str = "";
					if( (index+1)*12 > res.goods.length ){
						var end = res.goods.length;
					}else {
						var end = (index+1)*12;
					}
					for( var i=index*12;i<end;i++){
						var json = res.goods[i];
						str += `
							<dl>
								<dt>
									<a href="javascript:;">
										<img src="images/list/${json.src}" alt="" titlt="${json.title}"/>
									</a>
								</dt>
								<dd class="pro-name">
									<a href="javascript:;">${json.name}</a>
								</dd>
								<dd class="pro-price">
									￥
									<span class="price">${json.price}</span>
									<span class="discard">${json.discard}</span>
								</dd>
								<dd class="buybtn">
									<a href="javascript:;" class="add">加入购物车</a>
									<a href="javascript:;" class="shouc">收藏</a>
								</dd>
							</dl>
						`;
					}
					$(".cplist").html( str );
		
		
				})
				
				
				$("#nextBtn").on("click",function(){
					$(".cplist").html("");
					var index = $(".pageBelow a[class=pagecurrent]").index()+1;
					if( index >= $(".pageBelow a").length ){
						index = $(".pageBelow a").length-1;
					}
					$("#mb i").html( index+1 )
					$(".prebtn").css({"color":"#005aa0"})
					$(".pageBelow a").eq(index).addClass("pagecurrent").siblings().removeClass("pagecurrent");
					var str = "";
					if( (index+1)*12 >= res.goods.length ){
						var end = res.goods.length;
					}else {
						var end = (index+1)*12;
					}
					for( var i=index*12;i<end;i++){
						var json = res.goods[i];
						str += `
							<dl>
								<dt>
									<a href="javascript:;">
										<img src="images/list/${json.src}" alt="" titlt="${json.title}"/>
									</a>
								</dt>
								<dd class="pro-name">
									<a href="javascript:;">${json.name}</a>
								</dd>
								<dd class="pro-price">
									￥
									<span class="price">${json.price}</span>
									<span class="discard">${json.discard}</span>
								</dd>
								<dd class="buybtn">
									<a href="javascript:;" class="add">加入购物车</a>
									<a href="javascript:;" class="shouc">收藏</a>
								</dd>
							</dl>
						`;
					}
					$(".cplist").html( str );
				})
				
				$(".prebtn").on("click",function(){
					$(".cplist").html("");
					var index = $(".pageBelow a[class=pagecurrent]").index()-1;
					if( index <= 0 ){
						index = 0;
					}
					$("#mb i").html( index+1 )
					$(".prebtn").css({"color":"#005aa0"})
					$(".pageBelow a").eq(index).addClass("pagecurrent").siblings().removeClass("pagecurrent");
					var str = "";
					if( (index+1)*12 >= res.goods.length ){
						var end = res.goods.length;
					}else {
						var end = (index+1)*12;
					}
					for( var i=index*12;i<end;i++){
						var json = res.goods[i];
						str += `
							<dl>
								<dt>
									<a href="javascript:;">
										<img src="images/list/${json.src}" alt="" titlt="${json.title}"/>
									</a>
								</dt>
								<dd class="pro-name">
									<a href="javascript:;">${json.name}</a>
								</dd>
								<dd class="pro-price">
									￥
									<span class="price">${json.price}</span>
									<span class="discard">${json.discard}</span>
								</dd>
								<dd class="buybtn">
									<a href="javascript:;" class="add">加入购物车</a>
									<a href="javascript:;" class="shouc">收藏</a>
								</dd>
							</dl>
						`;
					}
					$(".cplist").html( str );
				})
				
				
				
				
				
				
				
				
				
				
				
			}
			
		})
		
	})
	
	$(".filter").on("click","dd",function(){
		$(this).addClass("cur").siblings().removeClass("cur")
		
	})

	
})