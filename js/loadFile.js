var loadFile = function (url,choose) {

    var loadDom = {
        header: $("#header"),
        footer: $("#footer")
    };
    /*
     *加载头部文件
     */
    if(choose){
        loadDom.header.load(url + "template/headerVip.html",function () {
           
        });
    }else{
        loadDom.header.load(url + "template/header.html",function () {
            $(".nav_bottom_main .logo").attr('src',url+'image/index/logo.png');
        });
    }

    loadDom.footer.load(url + "template/footer.html",function(){
        $(".footer_main img").attr('src',url+'image/index/footerbg.png');
    });
}