$(function () {

    // $('.modal').modal('show');
    readImg();

    // baner轮播
    $('#carousel-example-generic').carousel({
        interval: 5000,
    });

    // 开始申请
    $('.btn_download').click(function () {
        clear();
        $('.modal').modal('show');
        $('.page2').show();
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
        var thisSrc = '';
        $('.imgvalid img').attr('src',thisSrc);
    });

    $('.date-picker').datepicker({
        language: "zh-CN",
        autoclose: true,
        format: "yyyy-mm-dd",
        defaultViewDate: {year: 2019, month: 12, day: 31}
    });

    $('#EndTime input').change(function (e) {
        var thisVal = $(this).val();
        var year = parseInt(thisVal.slice(0, 4));
        if (year > 2020) {
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
        var ur_qq = $('#ur_qq').val();
        var ur_fish = $('#ur_fish').val();
        if(ur_value < 0){
            warning('倒给钱不如去直播间刷礼物咯，欧尼酱~');
            return false
        }
        if(ur_value > 999){
            warning('小本买卖啊，别这样别这样~');
            return false
        }
        if(!ur_idea){
            warning('理由都懒得写，哥哥你能不能花点心思骗骗我');
            return false
        }
        if(ur_idea.length > 200){
            warning('字太多不看，200字够你发挥你的实力了啊');
            return false
        }
        if(!imgValid){
            warning('敲桌！图形验证码必填');
            return false
        }
        if(imgValid.length != 4){
            warning('敲桌！图形验证码位数不正确');
            return false
        }
        var code = 123456;
        var url = '';//获取
        var postdata = {
            ur_value: ur_value,
            ur_idea: ur_idea,
            imgValid: imgValid,
            imgValid: ur_name,
            imgValid: ur_qq,
            imgValid: ur_fish,
        };
        $.post(url, postdata, function (result) {
            var JSON = eval('(' + result + ')');
            if(JSON.code == 0){
                toastr.success('修改成功','提示',opts);
                initDatatable();
            }else{
                console.log(JSON);
                toastr.warning(JSON.memo,'提示',opts);
            }
        });
        showCode(code);
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
    $('.page2 textare').val('');
    $('.page1').show();
    $('.page2').hide();
    $('.page1').removeClass('animated  fadeOut');
    $('.page2').removeClass('animated  fadeIn');
    $('#ur_paytype option').eq(0).attr("selected",true);
    $('.date_show').removeClass('animated  fadeIn');
    $('.date_show').hide();
}

function nextStep() {
    // checkInfo
    var ur_name = $('#ur_name').val();
    var ur_qq = $('#ur_qq').val();
    var ur_fish = $('#ur_fish').val();
    if (!ur_name) {
        warning('昵称不能为空啊，兄弟~');
        return false
    }
    if (ur_name.length > 20) {
        warning('你是打算给自己起个龙妈那么长字数的头衔么？');
        $('#ur_name').val('');
        return false
    }
    if (!ur_qq) {
        warning('qq为空,怎么给你打钱?');
        return false
    }
    if (ur_qq.length > 12 || ur_qq.length  < 6) {
        warning('乱写是骗不到菠菠的钱的?');
        $('#ur_qq').val('');
        return false
    }
    if (ur_fish) {
        if(ur_fish.length > 20){
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
    var url = 'http://baigei.wblnb.com/api/captcha.php';//获取
    var postdata = {};
    $.post(url, postdata, function (result) {
        var JSON = eval('(' + result + ')');
        if(JSON.code == 0){
            console.log(JSON.data);
        }else{
            console.log(JSON);
            toastr.warning(JSON.memo,'提示',opts);
        }
    });
}
