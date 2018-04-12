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
	
	//用户名
	$("#username").blur(function(){
		var reg = /\w{5,30}/;
		var str = $(this).val();
		if( !reg.test(str) ){
			$(this).next().html("请输入5-30位的字母、数字、下划线").css({"color":"#f00"});
			return false;
		}else{
			$(this).next().html("正确").css({"color":"green"});
			return true;
		}
	})
	//密码
	$("#userpsw").blur(function(){
		var reg = /.{6,16}/;
		var str = $(this).val();
		if( !reg.test(str) ){
			$(this).next().html("请输入6-16位的密码").css({"color":"#f00"});
			return false;
		}else{
			$(this).next().html("正确").css({"color":"green"});
			return true;
		}
	})
	
	
	//验证密码
	$("#ruserpsw").blur(function(){
		if( $(this).val() == $("#userpsw").val() ){
			$(this).next().html("正确").css({"color":"green"});
		}else{
			$(this).next().html("请输入正确的密码").css({"color":"#f00"});
		}
	})
	//电子邮箱
	$("#uemail").blur(function(){
		var reg = /.+@.+[.com|.cn]/;
		var str = $(this).val();
		if( !reg.test(str) ){
			$(this).next().html("请输入正确的邮箱").css({"color":"#f00"});
			return false;
		}else{
			$(this).next().html("正确").css({"color":"green"});
			return true;
		}
	})
	
	//验证码
	$("#autocode").html( ex.getCode(6) ).css({"color":ex.getColor(),"letter-spacing":3});
		$("#code").blur(function(){
			if($(this).val()==$("#autocode").html().toLowerCase()){
				$(this).nextAll(".tips").html("正确").css({"color":"green"});
				return true;
			}else{
				$(this).nextAll(".tips").html("请输入正确的验证码").css({"color":"green"});
				return false;
			}
		})
		$("#recode").click(function(){
			$("#autocode").html( ex.getCode(6) ).css({"color":ex.getColor(),"letter-spacing":3});
		})
	
	//register
	$("#regsub").click(function(){
		if( $("#username").blur()&&$("#userpsw").blur()&&$("#ruserpsw").blur()
		&&$("#uemail").blur()&&$("#code").blur()){
			$.ajax({
				type: "get",
				url: "php/register.php",
				data: {
					"uname": $("#username").val(),
					"upsw": $("#userpsw").val(),
					"uemail": $("#uemail").val(),
				},
				success: function(res){
					switch(res){
						case "0":
							alert("注册失败，请重新注册");
							break;
						case "1":
//							alert("注册成功");
							if( confirm("注册成功！是否快捷登录") ){
								location.href="index.html";
							}
							break;
						case "2": 
							alert("用户名已存在");
							break;
					}

				}
			})
		}else{
			alert("请确认填写完整");
		}
	})
	
	
	
	
	
	//login
	
	$("#loginautocode").html( ex.getCode(6) ).css({"color":ex.getColor(),"letter-spacing":3});
	//看不清
	$("#loginrecode").click(function(){
			$("#loginautocode").html( ex.getCode(6) ).css({"color":ex.getColor(),"letter-spacing":3});
		})
	
	
	$("#logincode").blur(function(){
			if($(this).val()==$("#loginautocode").html().toLowerCase()){
				$(this).nextAll(".tsinfo").html("正确").css({"color":"green"});
				return true;
			}else{
				$(this).nextAll(".tsinfo").html("请输入正确的验证码").css({"color":"green"});
				return false;
			}
		})
	
	
	$("#loginsub").click(function(){
		if($("#logincode").val()&&$("#logincode").blur()){
			$.ajax({
				type: "get",
				url: "php/login.php",
				data: {
					"unamel": $("#uname").val(),
					"upswl": $("#upsw").val(),
				},
				success: function(res){
					switch(res){
						case "0":
							alert("用户名不存在");
							break;
						case "1":
							if($("#logincode").blur()){
								location.href="index.html";
							}
							break;
						case "2": 
						alert("密码错误");
						break;
					}
	
				}
			})
		}else{
			alert("请确认填写完整");
		}
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
