$(function () {
  var loadFile = function (url) {

    var loadDom = {
      header: $("#header"),
      footer: $("#footer")
    };
    /*
     *加载头部文件
     */

    loadDom.header.load(url + "template/gameHeader.html", function () {
      $("#Lottery_game").mouseenter(function () {
        $(".lottery_meun").show();
        $("#Lottery_game dd").show();
      })
      $("#Lottery_game").mouseleave(function () {
        $(".lottery_meun").hide();
        $("#Lottery_game dd").hide();
      })
      $(".lottery_meun").mouseenter(function () {
        $(".lottery_meun").show();
        $("#Lottery_game dd").show();
      })
      $(".lottery_meun").mouseleave(function () {
        $(".lottery_meun").hide();
        $("#Lottery_game dd").hide();
      })


      $("#user_center").mouseenter(function () {
        $(".user_meun").show();
        $("#user_center dd").show();
      })
      $("#user_center").mouseleave(function () {
        $(".user_meun").hide();
        $("#user_center dd").hide();
      })
      $(".user_meun").mouseenter(function () {
        $(".user_meun").show();
        $("#user_center dd").show();
      })
      $(".user_meun").mouseleave(function () {
        $(".user_meun").hide();
        $("#user_center dd").hide();
      })
    });

    loadDom.footer.load(url + "template/gameFooter.html", function () {
      $(".footer_main img").attr('src', url + 'image/index/footerbg.png');
    });
  };

  loadFile('../../');
});
