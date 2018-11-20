// var jQuery = require('assets/js/jQuery')
// require('assets/js/jquery.CongelarFilaColumna')
// var Two = require('assets/js/two')

(function (w, $) {
    // 初始化
    function init() {
        // 表格高度计算
        var viewportH = window.innerHeight || document.documentElement.clientHeight // 获取视口高度
        var top_height = document.querySelector('.tab-wrap').getBoundingClientRect().height
        var num_height = document.querySelector('.tools-wrap').getBoundingClientRect().height
        $('.fixed-table-box').css('height', viewportH - top_height - num_height - 30 + 'px')

        //显示/关闭折线
        if($('.chkLine').prop('checked')) {
            $('.table-wrap').addClass('isLine')
        }
        $('.chkLine').click(function () {
            if($(this).prop('checked')) {
                $('.table-wrap').addClass('isLine')
            } else {
                $('.table-wrap').removeClass('isLine')
            }
        })
    }

    // function centerTop() {
    //     const items = $('.select-title .list > li')
    //     console.log(items.length)
    //     const ulWidth = items.length * items.first().outerWidth()
    //     $('.select-title .list').css('width',`${ulWidth}px`)
    // }

    // function centerList() {
    //     // 上半部分居中
    //     const listWidth = $('.play-list h3').outerWidth() + $('.play-list ul').outerWidth()
    //     $('.play-list').css('width',`${listWidth}px`)
    // }

    function centerTb() {

        const tbWidth = $('.fht-fixed-body .fht-thead').outerWidth(true) // 表格内容长度
        const wrapWidth = $('.table-wrap').width() // 表格外宽宽度
        if (tbWidth < wrapWidth) {
            $('.fixed-table-box').css('width',`${tbWidth}px`)
        }

        console.log('表格宽度:'+tbWidth)
        console.log('表格外框：'+ wrapWidth)
    }

    init()
    // centerTop()
    // centerList()
    // 生成表格
    $("#pruebatabla").CongelarFilaColumna({lboHoverTr:true});

    // 居中
    centerTb()

    // 画线
    var two = undefined

    function buildPosList (select) {
        const dom = document.querySelector('.fht-tbody-conten')
        const tb = dom.querySelector('.fht-table.fht-table-init')
        const top_height = document.querySelector('.tab-wrap').getBoundingClientRect().height
        const num_height = document.querySelector('.tools-wrap').getBoundingClientRect().height
        const tbHeader_height = document.querySelector('.fht-thead').getBoundingClientRect().height
        const pt = 15 // table-wrap的padding值
        const pl = document.querySelector('.fht-tbody-conten').getBoundingClientRect().left
        const list = []
        let width = 0
        let height = 0
        Array.from(tb.querySelectorAll(select)).forEach((item, index) => {
            if (index === 0) {
                width = item.getBoundingClientRect().width
                height = item.getBoundingClientRect().height
            }
            // console.log(item.getBoundingClientRect().left)
            const x = item.getBoundingClientRect().left + width / 2 - pl
            const y = item.getBoundingClientRect().top + dom.scrollTop + height / 2 - top_height - num_height - tbHeader_height - pt
            list.push(x)
            list.push(y)
        })
        return list
    }

    function renderPath (list) {

        if (two) {
            // console.log(two)
            const path = two.makePath(...list, true)
            path.noFill()
            path.stroke = '#00678c'
            path.linewidth = 2
            return path
        } else {
            return false
        }

    }

    function renderLine () {
        const w_list = buildPosList('.w')
        const q_list = buildPosList('.q')
        const b_list = buildPosList('.b')
        const s_list = buildPosList('.s')
        const g_list = buildPosList('.g')
        const k_list = buildPosList('.k')
     
        const tbHeader_height = document.querySelector('.fht-thead').getBoundingClientRect().height

        var dom = document.querySelector('.fht-tbody-conten')
        two = new Two({
            type: Two.Types.svg,
            width: dom.getBoundingClientRect().width,
            height: dom.getBoundingClientRect().height - tbHeader_height,
            ratio: 1
        }).appendTo(dom)
        // this.two.width = dom.getBoundingClientRect().width
        // this.two.height = dom.getBoundingClientRect().height
        // this.two.appendTo(dom)

        two.clear()
        renderPath(w_list)
        renderPath(q_list)
        renderPath(b_list)
        renderPath(s_list)
        renderPath(g_list)
        renderPath(k_list)
 
        two.render()
    }

    $('.list .subList a').click(function () {
        const str = $(this).text();
        $(this).parents('.subList').prev().text(str).parents('.list').blur()
    })

    $('.play-list ul li').hover(function() {
        const $a = $(this).children('a:first')
        if ($a.next().hasClass('hide')) {
            $a.next().removeClass('hide')
            $a.next().one('click','a',function () {
                const text = $(this).text()
                $a.text(text)
                $(this).parents('.list-down').addClass('hide')
                $a.parent().addClass('active').siblings('li').removeClass('active')
            })
        } else {
            $a.next().addClass('hide')
        }

    },function () {
        $(this).children('.list-down').addClass('hide')
    })

    renderLine()

})(window, jQuery)
