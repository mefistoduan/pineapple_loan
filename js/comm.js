var urlParms = '/baigei';
$(function () {



    $('.sel .lt li').hover(function (e) {
        $('.sel .lt li').removeClass('active');
        $(this).addClass('active');
        $('.sel .rt li').removeClass('active');
        let num = $(".sel .lt li").index(this);
        $('.sel .rt li').eq(num).addClass('active');
    });

    $('.advantage li').hover(function (e) {
        $('.advantage li').removeClass('active');
        $(this).addClass('active');
    });

    // navbar-toggle
    $('.navbar-toggle').click(function () {
        var state = $(this).attr('state');
        if (state == 1) {
            $('#bs-navbar').removeClass('in');
            $(this).attr('state', 0);
        } else {
            $(this).attr('state', 1);
            $('#bs-navbar').addClass('in')
        }
    });

    // phone
    $('.sel_phone li').click(function () {
        $('.sel_phone li').removeClass('active');
        $('.sel_phone li .glyphicon').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
        $(this).find('.glyphicon').addClass('glyphicon-menu-up');
        $(this).addClass('active');
    });


});

function warning(text) {
    var d = dialog({
        content: text,
        cancel: false,
        ok: function () {
        }
    });
    d.show();
}

function checkEmail(val)
{
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;

    if(val.search(re) == -1) {
        //alert("输入的邮箱格式不正确");
        return false;
    }
    else {
        return true;
    }
}

// 获取当前时间
function curentTime() {
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var clock = year + "-";
    if (month < 10)
        clock += "0";
    clock += month + "-";
    if (day < 10)
        clock += "0";
    clock += day + " ";
    return (clock);
}
