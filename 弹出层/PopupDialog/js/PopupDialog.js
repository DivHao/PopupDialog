/**
 * Created by zenghao on 2017/3/22.
 *弹窗提示和加载
 */
(function($){
    $.fn.PopupDialog = function(options){
    	var defaults = {
    		PopupTitle : "温馨提示",           //默认提示title
    		PopupMsg : "加载中...",            //默认提示内容
    		loadImg : "../img/loadingGif.gif", //默认加载GIF图片路径
    		closeImg : "../img/close.png",     //默认关闭图片路径
    		time : 2000,					   //默认提示框消失时间
    		haveImg : true,                    //默认有加载图片
    		haveBtn : false                    //默认无对话框
    	};
    	options = $.extend(defaults,options);

    	//提示框显示
    	Popup(
    		options.PopupTitle,
    		options.PopupMsg,
    		options.loadImg,
    		options.closeImg,
    		options.time,
    		options.haveImg,
    		options.haveBtn
    	)
    };

    $.fn.cLosePopupDialog = function(){
    	closePopup();
    }
    
})(jQuery)

var Popup = function(PopupTitle,PopupMsg,loadImg,closeImg,time,haveImg,haveBtn){
	PopupDialogHtml = '<div id="zh-PopupDialog">'+
					    '<div id="zh-PopupDialog-center">'+
						'<div id="zh-PopupDialog-box">';

    if(haveBtn ==true){
    	PopupDialogHtml +='<div id="zh-PopupDialog-title">'+PopupTitle+
				    	'<img id="zh-colse-PopupDialog" src="../img/close.png" alt=""></div>'+
				    	'<div id="zh-PopupDialog-content">'+PopupMsg+'</div>';
    	$("body").append(PopupDialogHtml);
		$("#zh-PopupDialog").addClass('zh-PopupDialog');
		$("#zh-PopupDialog-box").addClass('zh-PopupDialog-box');
    }else{
    	if(haveImg == true){
	    	PopupDialogHtml += '<div id="zh-PopupDialog-info"><img src="'+loadImg+'" alt=""><span>'+ PopupMsg;
	    }else{
	    	PopupDialogHtml += '<div id="zh-PopupDialog-info">'+PopupMsg ;
	    	//提示信息自动消失
	    	setTimeout(function(){
				closePopup();
	    	},time)
	    }
	    $("body").append(PopupDialogHtml);
    }
    //提示信息或者对话框显示
	$("#zh-PopupDialog").stop(true,false).animate({opacity: 1},500)
}

//提示信息或者对话框消失
var closePopup = function(){
	$("#zh-PopupDialog").stop(true).animate({opacity: 0},500,function(){
		$("#zh-PopupDialog").remove();
	});
};
