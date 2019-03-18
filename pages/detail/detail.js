// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        videoInfo: null,
        othersList: null,
        commentsList: null,
        commentsCount: null
    },
    getVideoInfo(videoId) {
        let that = this
        wx.request({
            url: 'https://www.easy-mock.com/mock/5c8c7c98800fbb7305fd8066/navList/videoDetail?id=' + videoId,
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            success: (res) => {
                console.log(res)
                that.setData({
                    videoInfo: res.data.data.videoInfo
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },

    getOtherInfo(videoId) {
        let that = this
        wx.request({
            url: 'https://www.easy-mock.com/mock/5c8c7c98800fbb7305fd8066/navList/othersList?id=' + videoId,
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            success: (res) => {
                console.log(res)
                if (res.data.code === 0) {
                    that.setData({
                        othersList: res.data.data.othersList,
                    })
                }
            },
            fail: () => {},
            complete: () => {}
        });
    },
    getCommentList(videoId) {
        let that = this
        wx.request({
            url: 'https://www.easy-mock.com/mock/5c8c7c98800fbb7305fd8066/navList/commentsList?id=' + videoId,
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            success: (res) => {
                console.log(res)
                if (res.data.code === 0) {
                    that.setData({
                        commentsList: res.data.data.commentList,
                        commentsCount: res.data.data.commentTotalCount
                    })
                }
            },
            fail: () => {},
            complete: () => {}
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options)
        let videoId = options.id
        this.getCommentList(videoId)
        this.getVideoInfo(videoId)
        this.getOtherInfo(videoId)
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