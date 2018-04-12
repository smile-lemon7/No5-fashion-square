<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","root");
	mysql_select_db("mydata",$db);
	mysql_query("set names utf8");
	$uname = $_GET["unamel"];	
	$upsw = $_GET["upswl"];
	
	$sql = "select upsw from usertable where uname='${uname}'";
	$res = mysql_query($sql);
	$arr = mysql_fetch_array($res);
	if($arr){
		if($arr[0]==$upsw){
			echo 1;
		}else{
			echo 2;
		}
	}else{
		echo 0;
	}
	
?>