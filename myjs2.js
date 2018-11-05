$(function(){
	$(".left").click(function(){
		$("#temp1").animate({left:'30px'}, "slow");
		$("#temp2").animate({left: '-800p'}, "slow")
		return false;
	});
	$(".right").click(function(){
		$("#temp1").animate({left:'800px'}, "slow");
		$("#temp2").animate({left: '30p'}, "slow")
		return false;
	});
});