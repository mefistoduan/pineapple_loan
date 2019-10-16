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

    var url = urlParms + '/api/list.php';//获取
    var postdata = {
        state: 0
    };
    $.post(url, postdata, function (result) {
        var JSON = eval('(' + result + ')');
        if(JSON.code == 0){
            console.log(JSON);
            var html = template('test', JSON);
            document.getElementById('content').innerHTML = html;
        }else{
            console.log(JSON);
            warning(JSON.msg);
        }
    });

}
