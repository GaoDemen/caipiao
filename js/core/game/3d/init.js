$(function() {
    var lottery_id = getQueryString('game');
    var lottery = getQueryString('lottery');
    var xurl = 'loaddataUrl';
    XCOOKIE.setCookie('loaddataUrl', getWebsiteOfHost() + "?action=getGameSettingForBet&lottery=" + lottery, 1);
    $('#J-lottery-logo').prop('src', '/images/game/logo/' + lottery + '.png');
    var beginPullDataTime = new Date().getTime();
    ajaxData({
        url: XCOOKIE.getCookie(xurl),
        successCallback: function(data) {
            var donePullDataTime = new Date().getTime();
            gagame.GameMapping.getInstance({
                'jsNameSpace': 'GameMapping'
            });
            gagame.GameConfig.getInstance({
                'jsNameSpace': 'GameConfig',
                 data: data
            }); //游戏Config
            gagame.GameMethod.getInstance({
                'jsNameSpace': 'GameMethod'
            }); //游戏Method
            gagame.GameOrder.getInstance({
                'jsNameSpace': 'GameOrder'
            }); //游戏Order
            gagame.Games.D3.Config.getInstance({
                'jsNameSpace': 'D3.Config'
            }); //游戏D3实例Config
            gagame.GameTrace.getInstance({
                'jsNameSpace': 'GameTrace'
            }); //GameTrace
            gagame.GameMessage.getInstance({
                'jsNameSpace': 'GameMessage'
            }); //GameMessage 

            gagame.SingleBet.getInstance({
                'jsNameSpace': 'SingleBet'
            }); //单式投注

            gagame.GameHelp.getInstance({
                'jsNameSpace': 'GameHelp'
            });

            gagame.Games.D3.getInstance({
                lotteryLogoName:lottery
            }); //游戏实例  

            gagame.GameCountdown.getInstance({
                'jsNameSpace': 'GameCountdown',
                firstTimeConsumption:donePullDataTime-beginPullDataTime
            });
        }
    });

});