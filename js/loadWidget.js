var loadFile = function () {

    var loadDom = {
        gameTypes: $("#J-panel-gameTypes"),
        recordshtml: $("#lottery_recordshtml"),
        countdown: $("#countdown"),
        lottery_board: $("#lottery_board"),
        gametyespanel: $("#J-gametyes-menu-panel"),
        lottery_desc:$("#lottery_desc"),
        balls_statistics:$("#J-balls-statistics-panel"),
  
    };
    /*
     *加载头部文件
     */
    loadDom.recordshtml.load('./widget/_game_group.shtml');
    loadDom.gameTypes.load('./widget/_lottery_records.shtml');
    loadDom.countdown.load('./widget/_countdown.shtml');
    loadDom.countdown.load('./widget/_lottery_board.shtml');
    loadDom.gametyespanel.load('./widget/_games.shtml');
    loadDom.lottery_desc.load('./widget/_lottery_desc.shtml');
    loadDom.balls_statistics.load('./widget/_bet_statistics.shtml');
    // loadDom.lottery_logo.load('./widget/_bet_statistics.shtml');
}()