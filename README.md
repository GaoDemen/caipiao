# caipiao

# 结构说明
1.文件夹 bootstrap lib 为基本插件文件 详情请看 #插件
2.image 本地静态图片文件
3.css js 文件夹存放本地需要改动的js css文件
4.page为页面文件
5.template为页面组件文件
6.index.html 入口文件(主页)  
7.login.html 为登录页面
8.server.js node搭建本地环境文件 详情请看 #启动 (如果用php等其他语言 这个完全没有必要看,完全是为了本地开发)
8.没有提到的 其他的可以忽略

# 插件
1.动画库 animate
2.UI组件库 bootstarp
3.JavaScript库 jquery
4.日历插件 dcalendar.picker
5.滚动条插件 easyscroll
6.iconfoot 图标库

# 兼容性
1.IE>10.2.4  chorme>31 firefox>47 (这里就不枚举了,市面上普通浏览器都兼容,个别除外,例如IE8 9 等)

# 布局
1.主要页面有2个页面 主页(index.html)与投注页面(page/game/caipiao.html);
2.主要采用jquery load加载页面 ,具体配置在 route.js  (对应元素需要写data-link参数,调到指定加载页面,具体请看相对应的页面和配置);
3.404页面 ,ip限制页面在page/other中.

# 启动(完全是为了本地开发搭建的本地环境,你也可以用其他语言搭建你需要的环境)
注意:本项目有load加载,需要发起请求,所以需要在环境中查看
为了方便开发,本地用node简单搭建一个服务器,端口为8888 主要配置在server.js中.
1.切到但钱根目录(确保安装node);
2.npm install
3.node server.js 
4.本地查看 http://localhost:8080/index.html (主页)



