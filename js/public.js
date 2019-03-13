function ajaxGet(url,param,succCallback){
	mui.ajax(url,{
		data:param,
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		headers:{
			'Content-Type':'application/x-www-form-urlencoded',
			'X-Litemall-Token' :localStorage.getItem('token'),
		},	              
		//服务器返回响应，根据响应结果，分析是否登录成功；
		success:function(data){
			if (typeof succCallback=="function") {
				succCallback(data);
			}
		},
		
		error:function(xhr,type,errorThrown){
			//异常处理；
			console.log(type);
			if(type=='timeout'){
				mui.toast('请求超时')
				succCallback(res);
			}
		}
	});
}
	
function ajaxPost(url,param,succCallback){
	 mui.ajax(url,{
		data:param,
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		headers:{
			'Content-Type':'application/json',
			'X-Litemall-Token' :localStorage.getItem('token'),
		},	              
		//服务器返回响应，根据响应结果，分析是否登录成功；
		success:function(data){
			if (typeof succCallback=="function") {
				succCallback(data);
			}
		},
		error:function(xhr,type,errorThrown){
			//异常处理；
			console.log(type);
			if(type=='timeout'){
				mui.toast('请求超时')
				succCallback(res);
			}
		}
	});
}	


//窗口跳转
function openView(url,id,extras){
	if(!extras || extras==''){
		extras = {}
	}

// 	var title =this.getAttribute('title');
// 	var dataid = this.getAttribute('data-id');
	mui.openWindow({
		url: url, //"aboutUs.html",
		id: id, //'aboutUs.page',
		style: {
			hardwareAccelerated:true,
			// scrollIndicator:'none',scalable:false,popGesture:'none'
			 //开启硬件加速www.bcty365.com 
		},
		//传值
// 		extras:{
// 			title:title,
// 			propsid:dataid
// 		},
		extras:extras,
		
		show: {
			autoShow: true,
			aniShow: "slide-in-right",
			duration:300
		},
		
		waiting: {
			autoShow: false,
			title: "正在加载...",
			options: {
// 				width:"200",
// 				height:"200"
			}
		}
	})
}
var isLogin = localStorage.getItem('isLogin')
var userInfo = JSON.parse(localStorage.getItem('userInfo'))
//密码
var mmR =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;

//手机号
var phoneR = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

function isPhone(val){
	if(!phoneR.test(val)){
		mui.toast('手机号格式错误')
		return false
	}else{
		return true
	}
}

function isPwd(val){
	if(!mmR.test(val)){
		mui.toast('密码格式错误')
		return false
	}else{
		return true
	}
}
/*获取验证码的ajax  dom结构一致*/
var timer = null,time=61;
function sendYzm(){
	$('input').blur();
	if(!$('.phone').val()){
		mui.toast('请输入手机号')
	}else if(isPhone($('.phone').val())==false){
		
	}else{
		ajaxGet(sendYzmData,{mobile:$('.phone').val()},function(res){
			if(res.errno==0){
				mui.toast('验证码已发送')
				$(".yzm").removeAttr("readOnly");
				$(this).removeClass('getYzm')
				//获取验证码
				timer = setInterval(function () {
				  time--;
				  $('.yzmText').html(time+'秒')
				  if (time <= 0) {
					$('.yzmText').addClass('getYzm')
				    clearInterval(timer)
					 $('.yzmText').html('重新发送')
					 time=61
				  }
				}, 1000)
			}
		})
	}
	
}

function numHe(arr) {
    var s = 0;
    for (var i=arr.length-1; i>=0; i--) {
		if(arr[i] == undefined || isNaN(arr[i])){
			arr[i] = 0
		}
        s += Number(arr[i]);
    }
    return s;
}


