$(function () {
    // getInfo();
   writeList();
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
        title: '基本例子',
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
            nickname:' 一个孤独的借带人 ',
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
        },
        ]
    };
    var html = template('test', data);
    document.getElementById('content').innerHTML = html;
}
