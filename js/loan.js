$(function () {
    // getInfo();
   writeList();

   // search
    $('.search_btn').click(function () {
        var code = $('#search').val();
        if(!code){
            warning('查询码为空是不行滴~');
            return false
        }
        if(code.length > 8){
            warning('查询码超长是不行滴~');
            return false
        }
        if(code.length < 4){
            warning('查询码太短是不行滴~');
            return false
        }
        // todo 渲染返回结果
        // var url = '';//获取
        // var postdata = {
        //     code: code
        // };
        // $.post(url, postdata, function (result) {
        //     var JSON = eval('(' + result + ')');
        //     if(JSON.code == 0){
        //         writeList(JSON);
        //     }else{
        //         console.log(JSON);
        //     }
        // });
    });
});

// 获取数据 todo
function getInfo() {
    var url = '';//获取
    var postdata = {};
    $.post(url, postdata, function (result) {
        var JSON = eval('(' + result + ')');
        if(JSON.code == 0){
            writeList(JSON);
        }else{
            console.log(JSON);
        }
    });
}

// 页面渲染
function writeList(JSON) {
    var data = {
        list: [ {
            nickname:' 一个孤独的借带人 ',
            qq: 12345678 ,//前台隐藏，后台按需显示
            douyu_nick:' mefisto ',
            loan_id:123456,
            value:0.01,
            type:2,
            paytime: ' 2050-01-01',
            idea:' 坑害河马人人有责 ',
            state:1,
            resp:' 钱太少，不配给',
        }, {
            nickname:' 另外一个孤独的借带人 ',
            qq: 12345678 ,//前台隐藏，后台按需显示
            douyu_nick:'',
            loan_id:123456,
            value:0.01,
            type:1,
            paytime: ' 2050-01-01',
            idea:' 坑害河马人人有责 ',
            state:2,
            resp:' 钱太少，不配给',
        },{
            nickname:' 此外还有一个孤独的借带人 ',
            qq: 12345678 ,//前台隐藏，后台按需显示
            douyu_nick:' mefisto ',
            loan_id:123456,
            value:0.01,
            type:2,
            paytime: ' 2050-01-01',
            idea:' 坑害河马人人有责 ',
            state:1,
            resp:' 钱太少，不配给',
        },
        ]
    };
    var emptyTest = ''
    var html = template('test', data);
    document.getElementById('content').innerHTML = html;
}
