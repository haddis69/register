$(function(){
    var $username = $('#username'),
    $useralert = $('#username1'),
    $phone = $('#phone'),
    $phonealert = $('#phone1'),
    $password = $('#password'),
    $passwordalert = $('#password1'),
    $getcode = $('#getcode'),
    isPassBox = false;
    $username.focusout(function() {
        var result = validate($username.val());
		isPassBox = result.isOK;
		if(!result.isOK) {
			$useralert.html('用户名' + result.reason);
			$username.select();
		}else {
            $useralert.html('');
		}
    });
    $phone.focusout(function() {
		var result = phone($phone.val());
		isPassBox = result.isOK;
		if(!result.isOK) {
			$phonealert.html('手机号' + result.reason);
			$phone.select();
		}else {
			$phonealert.html('');
		}
    });
    $password.focusout(function() {
		var result = password($password.val());
		isPassBox = result.isOK;
		if(!result.isOK) {
			$passwordalert.html('密码' + result.reason);
			$password.select();
		}else {
			$passwordalert.html('');
		}
    });
    var time = 5;
    $getcode.click(function(){
        $getcode.attr('disabled', 'disabled');
        var e = setInterval(function(){
            $getcode.html("已发送（" + time-- + "s）");
            if(time == 0){
                clearInterval(e);
                time = 5;
                $getcode.removeAttr('disabled');
                $getcode.html("获取验证码");
            }
        }, 1000);
    })
})
function validate(data) {
    var result = {
        isOK: false,
        reason: ''
    };
    if(data === '') {
        result.reason = '不能为空';
        return result;
    }
    if(!/^(?!\d+$)[a-zA-Z0-9-_]+$/.test(data)) {
        result.reason = '仅支持中英文，数字和下划线且不能为纯数字';
        return result;
    }
    result.isOK = true;
    return result;
}
function phone(data) {
    var result = {
        isOK: false,
        reason: ''
    };
    if(data === '') {
        result.reason = '不能为空';
        return result;
    }
    if(!/0?(13|14|15|18|17)[0-9]{9}/.test(data)) {
        result.reason = '手机号码格式不正确';
        return result;
    }
    result.isOK = true;
    return result;
}
function password(data){
    var result = {
        isOK: false,
        reason: ''
    };
    if(data === '') {
        result.reason = '不能为空';
        return result;
    }
    if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(data)) {
        result.reason = '长度为8~14个字符 字母/数字以及标点符号至少包含2种 不允许有空格、中文';
        return result;
    }
    result.isOK = true;
    return result;
}