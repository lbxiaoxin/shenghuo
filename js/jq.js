$('.navo a').click(function(){
	$(this).addClass('act').siblings().removeClass('act');
});

$('#a').hover(function(){
	$(".ewm .m_a").toggle();
});
$('#b').hover(function(){
	$(".ewm .m_b").toggle();
});

$('.lis a').click(function(){
	var index=$(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$(this).parents('.nav_b').find('.cen div').eq(index).show().siblings().hide();
});