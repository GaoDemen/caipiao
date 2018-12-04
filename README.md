# caipiao

# 结构说明
1.bootstrap lib 为基本插件文件 详情请看 #插件
2.image 本地静态图片文件
3.css js 文件夹存放本地需要改动的js css文件
4.page为页面文件
    page
        caipiao 为投注页面
        charts  为走势图页面
        chase   为追号投注 手工注单页面
    other
        err 错误页面
        notAccess 为ip限制登录页面    
5.template为页面组件文件
   5-1  userCenter 个人中心相关文件夹
            agentTeam 代理团队相关页面
                vipManagement 会员管理
                vipReport 会员报表
                registeLower 注册下级
                lowerOrders 下级订单
                preferentiallist 优惠列表
            personaInfo 个人中心相关页面
                personalData 个人资料
                changePassword 密码修改
                bindCard 卡号绑定
                bonusPlay 玩法奖金
            gameRecord 游戏记录相关页面
                queryOrder 订单查询
                chaseRecord 追号记录
                ptRecord pt记录
                gaRecord ga记录 
                shababRecord 沙巴游戏
                agRecord ag游戏
                (~~特别说明~~)
                chaseBet 追号详情页面
                betDetail 投注详情页面
            moneyRecord  资金记录相关页面  
                withdrawalsRecords 提款记录
                moneyDetail 资金明细
            Information 信息管理相关页面
                inBox 收件箱
                outBox 发件箱
                sendBox 发邮件
   5-2  money 
            topUpMoney 充值 
            withdrawalsMoney 提款 
            transferMoney 转账
   5-3  game 游戏相关页面
            chase 追号投注页面
   5-3  aboutUs 关于页面
            aboutUs    // 关于我们
            contactUs  // 联系我们
            gameHelp   // 游戏帮助
            helpCenter // 帮助中心
            hijacked   // 防劫持教程
   5-3  home 主页页面
            active     // 活动页面    
            download   // 下载中心页面
            home       // 首页

6.index.html 入口文件(主页)  
7.login.html 为登录页面
8.registered.html 为用户注册页面
9.server.js node搭建本地环境文件 详情请看 #启动 (如果用php等其他语言 这个完全没有必要看,完全是为了本地开发)
10.特别说明\page\game\charts.html 下为走势图页面

# 插件
1.动画库 animate
2.UI组件库 bootstarp
3.JavaScript库 jquery
4.日历插件 dcalendar.picker
5.滚动条插件 easyscroll
6.iconfoot 图标库
7.layer 弹框 详情请见 https://www.layui.com/doc/modules/layer.html

# 兼容性
1.IE>10.2.4  chorme>31 firefox>47 (这里就不枚举了,市面上普通浏览器都兼容,个别除外,例如IE8 9 等)

# 布局
1.主要页面有2个页面 主页(index.html)与投注页面(page/game/caipiao.html);
2.主要采用jquery load加载页面 ,具体配置在 route.js  (对应元素需要写data-link参数,调到指定加载页面,具体请看相对应的页面和配置);
3.404页面 ,ip限制页面在page/other中.
5.所有页面跳转都用winds.open();

# 启动(完全是为了本地开发搭建的本地环境,你也可以用其他语言搭建你需要的环境)
注意:本项目有load加载,需要发起请求,所以需要在环境中查看
为了方便开发,本地用node简单搭建一个服务器,端口为8888 主要配置在server.js中.
1.切到但钱根目录(确保安装node);
2.npm install
3.node server.js 
4.本地查看 http://localhost:8080/index.html (主页)


# 跳转
1.点首页重庆时时彩 跳转投注页面
2.其他页面对应文字



	


