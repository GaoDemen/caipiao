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
            $("#Lottery_game").mouseenter(function(){
                $(".lottery_meun").show();
                $("#Lottery_game dd").show();
            })
            $("#Lottery_game").mouseleave(function(){
                $(".lottery_meun").hide();
                $("#Lottery_game dd").hide();
            })
            $(".lottery_meun").mouseenter(function(){
                $(".lottery_meun").show();
                $("#Lottery_game dd").show();
            })
            $(".lottery_meun").mouseleave(function(){
                $(".lottery_meun").hide();
                $("#Lottery_game dd").hide();
            })


            $("#user_center").mouseenter(function(){
                $(".user_meun").show();
                $("#user_center dd").show();
            })
            $("#user_center").mouseleave(function(){
                $(".user_meun").hide();
                $("#user_center dd").hide();
            })
            $(".user_meun").mouseenter(function(){
                $(".user_meun").show();
                $("#user_center dd").show();
            })
            $(".user_meun").mouseleave(function(){
                $(".user_meun").hide();
                $("#user_center dd").hide();
            })
        });
    }else{
        loadDom.header.load(url + "template/header.html",function () {
            $(".nav_bottom_main .logo").attr('src',url+'image/index/logo.png');
            
            $("#Lottery_zone").mouseenter(function(){
                $(".lottery_meun").show();
                $("#Lottery_zone dd").show();
            })
            $("#Lottery_zone").mouseleave(function(){
                $(".lottery_meun").hide();
                $("#Lottery_zone dd").hide();
            })
            $(".lottery_meun").mouseenter(function(){
                $(".lottery_meun").show();
                $("#Lottery_zone dd").show();
            })
            $(".lottery_meun").mouseleave(function(){
                $(".lottery_meun").hide();
                $("#Lottery_zone dd").hide();
            })



            $("#user_center").mouseenter(function(){
                $(".user_meun").show();
                $("#user_center dd").show();
            })
            $("#user_center").mouseleave(function(){
                $(".user_meun").hide();
                $("#user_center dd").hide();
            })
            $(".user_meun").mouseenter(function(){
                $(".user_meun").show();
                $("#user_center dd").show();
            })
            $(".user_meun").mouseleave(function(){
                $(".user_meun").hide();
                $("#user_center dd").hide();
            })
            

        });
    }

    loadDom.footer.load(url + "template/footer.html",function(){
        $(".footer_main img").attr('src',url+'image/index/footerbg.png');
    });
}