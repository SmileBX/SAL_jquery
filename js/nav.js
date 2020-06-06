


// 公共头部
var head_html = '<div class="header_box">';
head_html += '<div class="header_left">';
head_html += '<img src="../img/logo.png" alt="" srcset="">';
head_html += '</div>';
head_html += '<ul class="header_right">';
head_html += '<li class="go_index" id="1"><a class="bule_bottom" href="index.html">首页</a></li>';
head_html += '<li class="go_index" id="2"><a href="about_us.html">关于我们</a></li>';
head_html += '<li class="go_index" id="3"><a href="news_center.html">新闻中心</a></li>';
head_html += '<li class="go_index" id="4"><a href="shop_center.html">产品中心</a></li>';
head_html += '<li class="go_index" id="5"><a href="success.html">成功案例</a></li>';
head_html += '<li class="go_index" id="6"><a href="honor.html">资质荣誉</a></li>';
head_html += '<li class="go_index" id="7"><a href="contact_us.html">联系我们</a></li>';
head_html += '</ul>';
head_html += '	<div class="tap_nav">';
head_html += '	<img src="../img/fan_logo.png" alt="" srcset="">';
head_html += '	</div>';
head_html += '</div>';
head_html += ' <div class="swiper-container">';
head_html += '<div class="swiper-wrapper">';
head_html += '	<div class="swiper-slide">';
head_html += '		<img src="../img/banner.png" alt="" srcset="">';
head_html += '	</div>';
head_html += '	<div class="swiper-slide"> <img src="../img/banner.png" alt="" srcset=""></div>';
head_html += '	<div class="swiper-slide"> <img src="../img/banner.png" alt="" srcset=""></div>';
head_html += '</div>';
head_html += '<!-- 如果需要分页器 -->';
head_html += '<div class="swiper-pagination"></div>';
head_html += '</div>';

// 公共头部无轮播
var head_html_wu = '<div class="header_box">';
head_html_wu += '<div class="header_left">';
head_html_wu += '<img src="../img/logo.png" alt="" srcset="">';
head_html_wu += '</div>';
head_html_wu += '<ul class="header_right">';
head_html_wu += '<li class="go_index" id="1">';
head_html_wu += '<div class="nav_fu">';
head_html_wu += '   <p>首页</p>';
head_html_wu += '   <p>分类</p>';
head_html_wu += '</div>';
head_html_wu += '<a class="bule_bottom" href="index.html">首页</a></li>';
head_html_wu += '<li class="go_index" id="2"><a href="about_us.html">关于我们</a></li>';
head_html_wu += '<li class="go_index" id="3"><a href="news_center.html">新闻中心</a></li>';
head_html_wu += '<li class="go_index" id="4"><a href="shop_center.html">产品中心</a></li>';
head_html_wu += '<li class="go_index" id="5"><a href="success.html">成功案例</a></li>';
head_html_wu += '<li class="go_index" id="6"><a href="honor.html">资质荣誉</a></li>';
head_html_wu += '<li class="go_index" id="7"><a href="contact_us.html">联系我们</a></li>';
head_html_wu += '</ul>';
head_html_wu += '</div>';
head_html_wu += '</div>';
$(function () {
	$(".tap_nav").click(function () {
		console.log('898989');
		$(".header_right").animate({ "right": "0" }, 500);
	})
	$(".back_navs").click(function () {
		
		$(".header_right").animate({ "right": "-80%" }, 500);
	})
	
	show_nav();
	$('.header_right li').hover(function () {
		$(this).find('a').css('color','#0F9FD8')
		$(this).find('.nav_fu').slideDown(500)
	}, function () {
		$(this).find('.nav_fu').slideUp(1)
		$(this).find('a').css('color','#333')
	}
	)


	$('.nav_fu p').hover(function () {
		$(this).addClass('hover_color');
		$(this).siblings().removeClass('hover_color');
	}, function () {
		$('.nav_fu p').removeClass('hover_color');
	}
	)
});

function show_nav() {
	var count = $(".header_right li");
	var index = page_index;
	for (var i in count) {
		if (count[i].id == index) {
			$(count[i]).find('a').addClass("bule_bottom");
			$(count[i]).siblings().find('a').removeClass("bule_bottom");
		}
	}
}

// 获取路径参数
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}