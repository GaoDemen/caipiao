var loadFile = function (url) {

    var loadDom = {
        header: $("#header"),
        footer: $("#footer")
    };
    /*
     *加载头部文件
     */
    loadDom.header.load(url + "template/header.html");
    loadDom.footer.load(url + "template/footer.html");
}