$(function () {

    readImg();

    // baner轮播
    $('#carousel-example-generic').carousel({
        interval: 5000,
    });

    // 开始申请
    $('.btn_download').click(function () {
        clear();
        $('.modal').modal('show');
    });

    // 还款类型
    $('#ur_paytype').change(function () {
        var thisVal = $(this).val();
        if (thisVal == 1) {
            $('.date_show').show();
            $('.date_show').addClass('animated  fadeIn ');
        } else {
            $('.date_show').removeClass('animated  fadeIn');
            $('.date_show').hide();
        }
    });

    // 更换图形验证码
    $('.imgvalid img').click(function () {
        readImg();
    });

    $('.date-picker').datepicker({
        language: "zh-CN",
        autoclose: true,
        format: "yyyy-mm-dd",
        defaultViewDate: {year: 2020, month: 12, day: 31}
    });

    $('#EndTime input').change(function (e) {
        var thisVal = $(this).val();
        var year = parseInt(thisVal.slice(0, 4));
        if (year > 2021) {
            // todo
            // 哥，你这怕不是想直接赖账吧!
        }
    });

    // 提交并展示
    $('.confirm_loan').click(function () {
        // checkInfo
        var ur_value = $('#ur_value').val();
        var ur_idea = $('#ur_idea').val();
        var imgValid = $('#ur_img').val();
        var ur_name = $('#ur_name').val();
        var ur_fish = $('#ur_fish').val();
        var ur_email = $('#ur_email').val();
        var ur_paytime = $('#EndTime input').val();
        if (ur_value < 0) {
            warning('倒给钱不如去直播间刷礼物咯，欧尼酱~');
            return false
        }
        if (ur_value > 999) {
            warning('小本买卖啊，别这样别这样~');
            return false
        }
        if (!ur_idea) {
            warning('理由都懒得写，哥哥你能不能花点心思骗骗我');
            return false
        }
        if (ur_idea.length > 200) {
            warning('字太多不看，200字够你发挥你的实力了啊');
            return false
        }
        if (!imgValid) {
            warning('敲桌！图形验证码必填');
            return false
        }
        if (imgValid.length != 5) {
            warning('敲桌！图形验证码位数不正确');
            return false
        }

        var url = urlParms + '/api/add.php';//获取
        var postdata = {
            value: ur_value,
            name: ur_name,
            email: ur_email,
            paytime:ur_paytime,
            reason: ur_idea,
            douyu_name: ur_fish,
            captcha: imgValid,
        };
        $.get(url, postdata, function (result) {
            var JSON = eval('(' + result + ')');
            if (JSON.code == 0) {
                warning('提交成功');
                $('.modal').modal('hide');
                // showCode(code)
            } else {
                console.log(JSON);
                warning(JSON.msg);
            }
        });
        readImg();
    });

    // 下一页
    $('.next_btn').click(function () {
        nextStep();
    });
});

// clear
function clear() {

    $('.page1 input').val('');
    $('.page2 input').val('');
    $('.page2 textarea').val('');
    $('.page1').show();
    $('.page2').hide();
    $('.page1').removeClass('animated  fadeOut');
    $('.page2').removeClass('animated  fadeIn');
    $('#ur_paytype option').eq(0).attr("selected", true);
    $('.date_show').removeClass('animated  fadeIn');
    $('.date_show').hide();
}

function nextStep() {
    // checkInfo
    var ur_name = $('#ur_name').val();
    var ur_email = $('#ur_email').val();
    var ur_fish = $('#ur_fish').val();
    $('.date-picker input').val(curentTime());
    if (!ur_name) {
        warning('昵称不能为空啊，兄弟~');
        return false
    }
    if (ur_name.length > 20) {
        warning('你是打算给自己起个龙妈那么长字数的头衔么？');
        $('#ur_name').val('');
        return false
    }
    if (!ur_email) {
        warning('email为空,怎么给你打钱?');
        return false
    }
    if (ur_email.length > 12 || ur_email.length < 6) {
        warning('乱写是骗不到菠菠的钱的?');
        $('#ur_qq').val('');
        return false
    }
    if(!checkEmail(ur_email)){
        warning('乱写是骗不到菠菠的钱的?');
    }
    if (ur_fish) {
        if (ur_fish.length > 20) {
            warning('老铁,斗鱼id有那么长嘛?');
            return false
        }
    }
    $('.page1').addClass('animated fadeOut');
    $('.page1').hide();
    $('.page2').show();
    $('.page2').addClass('animated fadeIn');
}

// 审核进度
function showCode(code) {
    var d = dialog({
        title: '恭喜',
        content: '您的申请已提交，请等待审核。如需查询审核进度，请凭审核码（' + code + '）查询进度'
    });
    d.show();
}

function readImg() {
    var url = urlParms + '/api/captcha.php';//获取
    var postdata = {};
    $.post(url, postdata, function (result) {
        var JSON = eval('(' + result + ')');
        if (JSON.code == 0) {
            $('#imgValid').attr('src', JSON.data);
            console.log(JSON.data);
        } else {
            console.log(JSON);
            warning(JSON.msg);
        }
    });
}
