function $id(id){
    return document.getElementById(id);
}
function $tName(tagName){
    return document.getElementsByTagName(tagName);
}
function $cName(className){
    return document.getElementsByClassName(className);
}
function create(ele){
	return document.createElement(ele);
}
function log(value){
	console.log(value);
}
//判断一个数是否是素数
function isPrime(num){
    if(num == 1||num == 0){
        return false;
    }
    for(var i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

// 随机获取一个范围内的随机整数
function round(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

//随机产生颜色值
function getColor(){
    var str = "#";
    var color = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
        for(var j=0;j<6;j++){
            str += color[round(0,15)];
        }
    return str;
}
//获取颜色值
function getColor1(){
    var r = Math.floor( Math.random()*256 );
    var g = Math.floor( Math.random()*256 );
    var b = Math.floor( Math.random()*256 );
    return "rgb("+r+","+g+","+b+")";
}


//获取随意几位验证码
function getCode(num){
     var str = "";
    for(var i=0;i<num;i++){
        var code = round(48,122);
        if(code>=58&&code<=64 ||code>=91&&code<=96){
            i--;            
        }else{
            str += String.fromCharCode( code );
        }
    }
    return str;
}


//时间差函数
function timeDiff(start,end){
    return Math.abs(start.getTime()-end.getTime())/1000;
}

function stringToDate(str){
    return new Date(str);
}
//2018年1月28 19：33：45 星期三
function dateToString(date){
        var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var _year = date.getFullYear();
        var _month = date.getMonth();
        var _day = date.getDate();
        var hours = toTwo( date.getHours() );
        var min = toTwo( date.getMinutes() );
        var seconds = toTwo( date.getSeconds() );
        var _week = date.getDay();
        return _year+"年"+_month+"月"+_day+"日"+" "+hours+":"+min+":"+seconds+" "+week[_week];
    }
function toTwo(num){
    if(num<10){
        num = "0"+num;
    }
    return num;
}

//获取时分秒
/*function getTime(date){
    var hours = toTwo( date.getHours() );
    var min = toTwo( date.getMinutes() );
    var seconds = toTwo( date.getSeconds() );
}*/


//倒计时
function countDown(date,nowDate){
	var times = Math.abs(data.getTime()-nowDate.getTime())/1000;
    show();
    var timer = setInterval(function(){
        times--;
        if(times < 0){
            $id("con").innerHTML = "倒计时：00天00时00分00秒";
            clearInterval(timer);
        }else{
            show();
        }
    },1000);
    function show(){
        var day = toTwo( parseInt( times/3600/24 ) );
        var hours = toTwo( parseInt( (times-day*24*3600)/3600 ) );
        var min =  toTwo( parseInt( (times-day*24*3600-hours*3600)/60 ) );
        var seconds = toTwo( parseInt( times-day*24*3600-hours*3600-min*60  ) );
        var json = {"day":day,"hours":hours,"min":min,"seconds":seconds};
    }
}


//排序
function sort1(arr){
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
function sort2(arr){
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]<arr[j]){
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

//获取非行内的样式
function getStyle(obj,attr){
	window.getComputedStyle?window.getComputedStyle(obj,false)[attr]:obj.currentStyle[attr];
}

//边界检测
	function pz(obj1,obj2){
		var L1 = obj1.offsetLeft;
		var R1 = obj1.offsetLeft + obj1.offsetWidth;
		var T1 = obj1.offsetTop;
		var B1 = obj1.offsetTop + obj1.offsetHeight;
		
		var L2 = obj2.offsetLeft;
		var R2 = obj2.offsetLeft + obj2.offsetWidth;
		var T2 = obj2.offsetTop;
		var B2 = obj2.offsetTop + obj2.offsetHeight;
		
		if( R1<L2||L1>R2||B1<T2||T1>B2 ){ //碰不上的条件
			return false;
		}
		return true;
	}





function noRepeat2(arr){
	var newArr = [];
	for( var i = 0 ; i < arr.length ; i++ ){
		if( arr[i] != arr[i+1] ){
			newArr.push( arr[i] );
		}
	}
	return newArr;
}






















