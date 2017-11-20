Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        iconUrls:[
            {
                url:'../../common/images/index_kjds.png',
                name:"跨境电商"
            },
            {
                url:'../../common/images/index_hyth.png',
                name:"会员特惠"
            },
            {
                url:'../../common/images/index_rmxp.png',
                name:"热门新品"
            },
            {
                url:'../../common/images/index_zkzq.png',
                name:"折扣专区"
            }
        ],
        newsProduct:[
            {
                url:'../../common/images/index_new2.png',
                title:'祈合温控破壁料理机 KPS-ALP合格认证',
                price:"￥3999"
            },
            {
                url:'../../common/images/index_new2.png',
                title:'祈合温控破壁料理机 KPS-ALP合格认证',
                price:"￥3999"
            },
            {
                url:'../../common/images/index_new2.png',
                title:'祈合温控破壁料理机 KPS-ALP合格认证',
                price:"￥3999"
            },
            {
                url:'../../common/images/index_new2.png',
                title:'祈合温控破壁料理机 KPS-ALP合格认证',
                price:"￥3999"
            }
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
    },
    changeIndicatorDots: function(e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function(e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function(e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function(e) {
        this.setData({
            duration: e.detail.value
        })
    }
})