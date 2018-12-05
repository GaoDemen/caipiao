var getUrlKey = function (name) {
  return (
    decodeURIComponent(
      (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
        location.href
      ) || [, ""])[1].replace(/\+/g, "%20")
    ) || null
  );
}

$(function () {
  var meunDom = {
    title: 'title',
    headerNav: "#headerNav li[data-link]",
    contantBox: "#contantBox",
    loadFile: "#loadFile",
    header: "#header",
    headerMeun: "#headerMeun",
    footer: "#footer",
    navLogo: ".nav_bottom_main .logo",
    footerLogo: ".footer_main img",
    LotteryZone: '#Lottery_zone',
    LotteryZoneDd: '#Lottery_zone dd',
    lotteryMeun: '.lottery_meun',
    userCenter: '#user_center',
    userCenterDd: '#user_center dd',
    userMeun: '.user_meun',
    userCenterMeun: '#userCenter_meun li',
    userCenterMeunList: '#userCenterMeunList',
    userCenterContent: '#userCenterContent',
    userMoneyMangContent: '#userMoneyMangContent',
    userMoneyMangMeun: '#userMoneyMangMeun',
    userCenterJunpToMoney: '#userCenterJunpToMoney',
    aboutUsContent: '#aboutUsContent',
    aboutUsMeun: '#aboutUsMeun',
    footerAboutUsMeun:'#footerAboutUsMeun'
  }

  var router = function (domLink, domChildLink) {
    switch (domLink) {
      // 主页
      case null:
      case 'home':
        // 活动
      case 'active':
        // 下载中心
      case 'download':
        if (domLink == null) {
          domLink = 'home'
        };
        $(meunDom.contantBox).load('./template/home/' + domLink + '.html', function () {
          $("li[data-link =" + domLink + "]").addClass("active").siblings().removeClass('active');
          if (domLink == "home") {
            window.history.pushState({
              time: new Date()
            }, "", window.location.href.split('?')[0]);
          } else {
            window.history.pushState({
              time: new Date()
            }, "", window.location.href.split('?')[0] + '?id=' + domLink);
          }
        });
        break;
      case 'money':
        $(meunDom.headerNav).removeClass('active');
        $(meunDom.contantBox).load('./template/money/money.html', function () {

          switch (domChildLink) {
            // 充值
            case 'topUpMoney':
              // 提款
            case 'withdrawalsMoney':
              // 转账
            case 'transferMoney':
              $(meunDom.userMoneyMangContent).load('./template/money/management/' + domChildLink + '.html', function () {
                $("li[data-link =" + domChildLink + "]").addClass('active').siblings().removeClass('active');

                $(meunDom.userMoneyMangMeun + '>li').on("click", function () {

                  $(meunDom.userMoneyMangMeun + '>li').removeClass('active');
                  $("li[data-link =" + domChildLink + "]").addClass('active');

                  router(getUrlKey('id'), $(this).attr("data-link"));
                  $(meunDom.userMoneyMangMeun + '>li').unbind();
                })
                window.history.pushState({
                  time: new Date()
                }, "", window.location.href.split('?')[0] + '?id=money&childId=' + domChildLink);
              })
              break;
          }
        })
        break;
      case 'user':
        $(meunDom.headerNav).removeClass('active');
        $(meunDom.contantBox).load('./template/userCenter/user.html', function () {
          $(meunDom.userCenterMeunList + " li[data-link =" + domChildLink + "]").parent('ul').show().parent(
            'div').siblings().find("ul").hide();
          $("li[data-link =" + domChildLink + "]").addClass('active');
          $(meunDom.userCenterMeunList + ">div").on('click', function () {
            $(this).find('ul').slideDown('fast').end().siblings().find("ul").slideUp('fast');
          });
          $(meunDom.userCenterMeunList + ">div>ul>li").on('click', function () {
            $(meunDom.userCenterMeunList + ">div>ul>li").removeClass("active");
            $("li[data-link =" + domChildLink + "]").addClass('active');
            router(getUrlKey('id'), $(this).attr("data-link"));
            $(meunDom.userCenterMeunList + ">div>ul>li").unbind();
          });
          $(meunDom.userCenterJunpToMoney + '>ul>li').on('click', function () {
            router('money', $(this).attr("data-link"));
          })
          switch (domChildLink) {
            // 个人中心
            case 'personalData':
            case 'changePassword':
            case 'bindCard':
            case 'bonusPlay':
              $(meunDom.userCenterContent).load('./template/userCenter/personaInfo/' + domChildLink +
                '.html',
                function () {
                  window.history.pushState({
                    time: new Date()
                  }, "", window.location.href.split('?')[0] + '?id=user&childId=' + domChildLink);
                })
              break;
              // 游戏记录
            case 'queryOrder':
            case 'chaseRecord':
            case 'ptRecord':
            case 'gaRecord':
            case 'shababRecord':
            case 'agRecord':
            case 'betDetail':
            case 'chaseBet':
              $(meunDom.userCenterContent).load('./template/userCenter/gameRecord/' + domChildLink +
                '.html',
                function () {
                  window.history.pushState({
                    time: new Date()
                  }, "", window.location.href.split('?')[0] + '?id=user&childId=' + domChildLink);
                })
              break;
              // 资金记录
            case 'withdrawalsRecords':
            case 'moneyDetail':
              $(meunDom.userCenterContent).load('./template/userCenter/moneyRecord/' + domChildLink +
                '.html',
                function () {
                  window.history.pushState({
                    time: new Date()
                  }, "", window.location.href.split('?')[0] + '?id=user&childId=' + domChildLink);
                })
              break;
              // 代理团队
            case 'vipManagement':
            case 'vipReport':
            case 'lowerOrders':
            case 'preferentiallist':
            case 'registeLower':

              $(meunDom.userCenterContent).load('./template/userCenter/agentTeam/' + domChildLink + '.html',
                function () {
                  window.history.pushState({
                    time: new Date()
                  }, "", window.location.href.split('?')[0] + '?id=user&childId=' + domChildLink);
                })
              break;
              // 信息管理
            case 'inBox':
            case 'outBox':
            case 'sendBox':
              $(meunDom.userCenterContent).load('./template/userCenter/Information/' + domChildLink + '.html',
                function () {
                  window.history.pushState({
                    time: new Date()
                  }, "", window.location.href.split('?')[0] + '?id=user&childId=' + domChildLink);
                })
              break;
          }
        })
        break;
      case "aboutUs":
        $(meunDom.headerNav).removeClass('active');
        $(meunDom.contantBox).load('./template/aboutUs/aboutMeun.html', function () {
          $(meunDom.aboutUsMeun + ">li[data-link =" + domChildLink + "]").addClass('active').siblings().removeClass('active');
          $(meunDom.aboutUsMeun + ">li").on('click', function () {
            router('aboutUs', $(this).attr("data-link"));
          })
          switch (domChildLink) {
            case "aboutUs": // 关于我们
            case "contactUs": // 联系我们
            case "gameHelp": // 游戏帮助
            case "helpCenter": // 帮助中心
            case "hijacked": // 防劫持教程
              $(meunDom.aboutUsContent).load('./template/aboutUs/' + domChildLink + '.html', function () {
                window.history.pushState({
                  time: new Date()
                }, "", window.location.href.split('?')[0] + '?id=aboutUs&childId=' + domChildLink);
              })
              break;
          }
        })
        break;
      default:
        $(meunDom.contantBox).load('./template/home/home.html', function () {
          window.history.pushState({
            time: new Date()
          }, "", window.location.href.split('?')[0]);
        });
    }
  }

  $(meunDom.header).load("./template/header.html", function () {
    $(meunDom.navLogo).attr('src', './image/login/logo.png');
    router(getUrlKey('id'), getUrlKey('childId'))
    //导航点击
    $(meunDom.headerNav).on('click', function () {
      router($(this).attr("data-link"))
      // $(this).attr("data-link") == undefined ? router(null) : ;
    });
    $(meunDom.userCenterMeun).on('click', function () {
      router('user', $(this).attr("data-link"))
    });
    $(meunDom.headerMeun + '>li').on('click', function () {
      $(this).attr("data-link") == undefined ? console.log('未定义的按钮') : router('money', $(this).attr("data-link"));
    })

    // hover 菜单显示隐藏
    $(meunDom.LotteryZone).mouseenter(function () {
      $(meunDom.lotteryMeun).show();
      $(meunDom.LotteryZoneDd).show();
    }).mouseleave(function () {
      $(meunDom.lotteryMeun).hide();
      $(meunDom.LotteryZoneDd).hide();
    })
    $(meunDom.lotteryMeun).mouseenter(function () {
      $(meunDom.lotteryMeun).show();
      $(meunDom.LotteryZoneDd).show();
    }).mouseleave(function () {
      $(meunDom.lotteryMeun).hide();
      $(meunDom.LotteryZoneDd).hide();
    })
    $(meunDom.userCenter).mouseenter(function () {
      $(meunDom.userMeun).show();
      $(meunDom.userCenterDd).show();
    }).mouseleave(function () {
      $(meunDom.userMeun).hide();
      $(meunDom.userCenterDd).hide();
    })
    $(meunDom.userMeun).mouseenter(function () {
      $(meunDom.userMeun).show();
      $(meunDom.userCenterDd).show();
    }).mouseleave(function () {
      $(meunDom.userMeun).hide();
      $(meunDom.userCenterDd).hide();
    })
  })
  // 加载底部
  $(meunDom.footer).load("./template/footer.html", function () {
    $(meunDom.footerLogo).attr('src', './image/index/footerbg.png');
      $(meunDom.footerAboutUsMeun+'>li').on('click',function () { 
        window.scrollTo(0, 0);
        router('aboutUs', $(this).attr("data-link"));
      })
  });
})
