<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","root");
	mysql_select_db("mydata",$db);
	mysql_query("set names utf8");
	$uname = $_GET["uname"];	
	$upsw = $_GET["upsw"];
	$uemail = $_GET["uemail"];
	
	$sql1 = "select * from usertable where uname='${uname}'";
	$res1 = mysql_query($sql1);
	$arr = mysql_fetch_array($res1);
	if(!$arr){
		$sql = "insert into usertable(uname,upsw,uemail) values('${uname}','${upsw}','${uemail}')";
		$res = mysql_query( $sql );
		if($res){
			echo 1;
		}else{
			echo 0;
		}
	}else{
		echo 2;
	}
	
?>