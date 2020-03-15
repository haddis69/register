function validate(s){var e={isOK:!1,reason:""};return""===s?e.reason="不能为空":/^(?!\d+$)[a-zA-Z0-9-_]+$/.test(s)?e.isOK=!0:e.reason="仅支持中英文，数字和下划线且不能为纯数字",e}function phone(s){var e={isOK:!1,reason:""};return""===s?e.reason="不能为空":/0?(13|14|15|18|17)[0-9]{9}/.test(s)?e.isOK=!0:e.reason="手机号码格式不正确",e}function password(s){var e={isOK:!1,reason:""};return""===s?e.reason="不能为空":/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(s)?e.isOK=!0:e.reason="长度为8~14个字符 字母/数字以及标点符号至少包含2种 不允许有空格、中文",e}$(function(){var e=$("#username"),a=$("#username1"),t=$("#phone"),n=$("#phone1"),r=$("#password"),o=$("#password1"),i=$("#getcode");e.focusout(function(){var s=validate(e.val());s.isOK,s.isOK?a.html(""):(a.html("用户名"+s.reason),e.select())}),t.focusout(function(){var s=phone(t.val());s.isOK,s.isOK?n.html(""):(n.html("手机号"+s.reason),t.select())}),r.focusout(function(){var s=password(r.val());s.isOK,s.isOK?o.html(""):(o.html("密码"+s.reason),r.select())});var l=5;i.click(function(){i.attr("disabled","disabled");var s=setInterval(function(){i.html("已发送（"+l--+"s）"),0==l&&(clearInterval(s),l=5,i.removeAttr("disabled"),i.html("获取验证码"))},1e3)})});