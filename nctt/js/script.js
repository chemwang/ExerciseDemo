(function newsTab(){
    //需要实现的效果
	//1、鼠标滑入圆点，圆点变红，移除圆点，圆点恢复白色
	//2、点击圆点，圆点变红，其他圆点恢复白色，切换对应的新闻标题和图片，三者用index关联
	//3、自动循环切换，间隔2s
	//实现过程
	//1、用数组定义数据，包含所有关联信息
	//鼠标滑入变色
	var newsDatas = [{"title":"常州市武进区领导调研北京中心","image":"img/news1.jpg","url":"http://www.nctt.ac.cn/zhxw2015/201606/t20160603_337923.html"},
		{"title":"新一轮共建首都科技条件平台中科院研发实验服务基...","image":"img/news2.jpg","url":"http://www.nctt.ac.cn/zhxw2015/201606/t20160603_337923.html"},
		{"title":"常州科技街挂牌暨中科（常州）创新园开园仪式举行","image":"img/news3.jpg","url":"http://www.nctt.ac.cn/zhxw2015/201605/t20160520_335830.html"},
		{"title":"2016第二届“中科创赛”暨首届科研人员创业大赛预...","image":"img/news4.jpg","url":"http://www.nctt.ac.cn/zhxw2015/201606/t20160603_337923.html"},
		{"title":"长沙市开福区领导调研北京中心","image":"img/news5.jpg","url":"http://www.nctt.ac.cn/zhxw2015/201606/t20160603_337923.html"}]
	var newsimage = $(".news-image");
	var oCircle = $(".news-image .circle a");
	var iNow = 0;
	oCircle.each(function(index){
		$(this).click(function(){
		oCircle.removeClass("current");
		$(this).addClass("current");
		console.log(index);
		});
	});
	
	
//	oCircle.mouseover(function(){
//		$(this).addClass("current");
//	}).mouseout(function(){
//		$(this).removeClass("current");
//	}).click(function(index){
//		oCircle.removeClass("current");
//		$(this).addClass("current");
//		$(this).unbind("mouseout");
//		console.log(index);
//	});
	
	
	
	
})();


(function scrollTop(){
//通知栏滚动提示
	var noticeList = $(".notice .textlist");
	var long = 0;
	var timer = null;
	function doMove(){
		clearInterval();
		noticeList.css("top",long);
		long -= 1;
			if(long<= -385){
			long=207;
		}
	}		
	timer=setInterval(doMove,50);
	$(".board").mouseover(function(){
		clearInterval(timer);
	});
	$(".board").mouseout(function(){
		timer=setInterval(doMove,50);
	});

})();
