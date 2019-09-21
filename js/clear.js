/**
 * @author: mefisto
 * @description:
 * @Date: 2017/3/20 0020 16:32
 */
$(function(){
    init();
    //提交
    $('#btnSubmit').click(function(){
        var PhoneVal = $('#phone').val();
        var valid = $('#validcode').val();
        checkPhone();//检查手机号
        checkValid();//检查验证码
        var url = "http://kh8.cc/ajax_hmsb.php";
        $.post(url,
            { validcode: $("#validcode").val(), phone: $("#phone").val()},
            function(data){
                var d = dialog({
                    title: '提示',
                    content: data.rtnMemo,
                    okValue: '确定',
                    ok: function () {
                        d.close().remove();
                        return false;
                    }
                });
                d.show();
                if (data.rtnCode == 0) {
                    $("#validcode").val('');
                }
                $("#imgValidcode").click();
            }, "json");
    });
});

function init()
{
    //$('#phone').blur(function(){
    //    checkPhone();
    //});
    //
    //$('#validcode').blur(function(){
    //    checkValid();
    //});
}

function checkPhone()
{
    var thisVal =  $('#phone').val();
    var phoneReg = /^\s*(15\d{9}|13[0-9]\d{8}|18\d{9}|17\d{9}|14\d{9})\s*$/;
    if (!phoneReg.test(thisVal)) {
        var d = dialog({
            align: 'bottom',
            content: '手机号格式不正确!',
            quickClose: true// 点击空白处快速关闭
        });
        d.show(document.getElementById('phone'));
    }
};

function checkValid()
{
    var thisVal = $('#validcode').val();
    if(thisVal=='') {
        var d = dialog({
            align: 'bottom',
            content: '验证码不能为空!',
            quickClose: true// 点击空白处快速关闭
        });
        d.show(document.getElementById('validcode'));
    }
}