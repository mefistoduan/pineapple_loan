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

    $('.btn_download').click(function () {
        // curModal();
        console.log(123);
        $('.modal').modal('show');
    });

    //  底部 点击下载弹窗
    $(document).on('click', '#bottom_download', function () {
        curModal();
    });


    // 点击下载
     $(document).on('click', '#now_download', function () {
         window.open('http://user.iyoogo.com:86/app2/download/SNCSetup.exe')
      });



    // navbar-toggle
    $('.navbar-toggle').click(function () {
        var state = $(this).attr('state');
        if(state == 1){
            $('#bs-navbar').removeClass('in');
            $(this).attr('state',0);
        }else{
            $(this).attr('state',1);
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

function curModal() {
    var d = dialog({
        content: '<div class="modal">' +
            '<div class="main_modal">' +
            '<div class="close_modal">' +
            '</div><h5>瞬时检测软件-极速号码魔方2019</h5><span>更合理的布局，更完善的功能，简单、快速、准确</span><img src="image/modal_icon.png" alt=""><s>极速号码魔方2019</s>' +
            '</div>' + '<div class="bottom_modal">' + '<button id="now_download">立即下载</button>' +
            '</div>' +
            '</div>'
    }).width(720).height(427);
    d.show();

    $('.close_modal').click(function () {
        d.close();
    });
}
