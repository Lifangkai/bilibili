Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentIndexNav: 0,
        navList: [],
        swiperList: [],
        videoList: [],
    },

    // 获取首页导航数据
    getNavList() {
        let that = this
            //利用小程序内置API发送请求
        wx.request({
            url: 'https://www.easy-mock.com/mock/5c8c7c98800fbb7305fd8066/navList/navList',
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
                console.log(res)
                if (res.data.code == 0) {
                    that.setData({
                        navList: res.data.data.navList
                    })
                }
            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 获取首页轮播图数据
    getSwiperList() {
        let that = this;
        wx.request({
            url: 'https://www.easy-mock.com/mock/5c8c7c98800fbb7305fd8066/navList/swiperList',
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
                console.log(res)
                if (res.data.code === 0) {
                    that.setData({
                        swiperList: res.data.data.swiperList
                    })
                }
            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 获取首页视频数据
    getVideoList() {
        let that = this
        wx.request({
            url: 'https://www.easy-mock.com/mock/5c8c7c98800fbb7305fd8066/navList/videoList',
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
                console.log(res)
                if (res.data.code === 0) {
                    that.setData({
                        videoList: res.data.data.videoList
                    })
                }
                // console.log(that.data.data.videoList)
            },
            fail: () => {},
            complete: () => {}
        });
    },
    activeNav(e) {
        this.setData({
            currentIndexNav: e.target.dataset.index
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getNavList();
        this.getSwiperList();
        this.getVideoList();
        // console.log(this.data.videoList)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})