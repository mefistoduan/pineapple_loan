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
