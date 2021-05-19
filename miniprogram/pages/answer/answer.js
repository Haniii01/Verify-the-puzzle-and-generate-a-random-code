// pages/answer/answer.js
var h = getApp().globalData.screenHeight;
Page({
  /**
   * 初始化数据
   */
  data:{
    motto:'确定',
    focus: true,
    password: '',
    answernum: 0,
    isTrue: false,
    answer1: true,
    answer2: true,
    answer3: true,
    answer4: true,
    answer5: true
  },

  /**
   * 监听手机号输入
   */
  listenerPhoneInput: function(e) {
      this.data.phone = e.detail.value;

  },

  /**
   * 监听密码输入
   */
  listenerPasswordInput: function(e) {
      this.data.password = e.detail.value;
  },

  /**
   * 监听登录按钮
   */
  listenerLogin: function() {
      //打印收入账号和密码
    if(this.data.password == '南湖红船'){
      this.setData({
        answer1: false,
        isTrue: true,
        motto:'答对啦',
        answernum: 1
      })
      console.log(this.data.isTrue)
      let value = this.data.answernum
      console.log(value),
      setTimeout(function () {
        wx.navigateTo({
          url: '../index/index',
          events: {
            // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            acceptDataFromOpenedPage: function(data) {
              console.log(data)
            },
            someEvent: function(data) {
              console.log(data)
            }
          },
          success: function(res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', { answernum: value })
          }
      })
    }, 1400)
    // wx.showToast({
    //   title: '回答正确',
    //  })
    }
    else if(this.data.password == '曾联松'){
    this.setData({
      answer2: false,
      isTrue: true,
      motto:'答对啦',
      answernum: 2
    })
    let value = this.data.answernum
    console.log(this.data.answernum),
    setTimeout(function () {
      wx.navigateTo({
        url: '../index/index',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data)
          },
          someEvent: function(data) {
            console.log(data)
          }
        },
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { answernum: value })
        }
      })
    }, 1000)
    // wx.showToast({
    //   title: '回答正确',
    // })
  }
  else if(this.data.password == '古典舞'){
    this.setData({
      answer3: false,
      isTrue: true,
      motto:'答对啦',
      answernum: 3
    })
    let value = this.data.answernum
    console.log(this.data.answernum),
    setTimeout(function () {
      wx.navigateTo({
        url: '../index/index',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data)
          },
          someEvent: function(data) {
            console.log(data)
          }
        },
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { answernum: value })
        }
      })
    }, 1400)
    // wx.showToast({
    //   title: '回答正确',
    // })
  }
  else if(this.data.password == '改革开放'){
    this.setData({
      answer4: false,
      isTrue: true,
      motto:'答对啦',
      answernum: 4
    })
    let value = this.data.answernum
    console.log(this.data.answernum),
    setTimeout(function () {
      wx.navigateTo({
        url: '../index/index',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data)
          },
          someEvent: function(data) {
            console.log(data)
          }
        },
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { answernum: value })
        }
      }) 
    }, 1400)
    // wx.showToast({
    //   title: '回答正确',
    // })
  }
  else if(this.data.password == '党徽'){
    this.setData({
      answer5: false,
      isTrue: true,
      motto:'答对啦',
      answernum: 5
    })
    let value = this.data.answernum
    console.log(this.data.answernum),
    setTimeout(function () {
      wx.navigateTo({
        url: '../index/index',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data)
          },
          someEvent: function(data) {
            console.log(data)
          }
        },
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { answernum: value })
        }
      })
    }, 1400)
    // wx.showToast({
    //   title: '回答正确',
    // })
  }
  else{
      wx.showToast({
        icon: 'error',
        title: '答错了',
      })
    }
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成

  },
  onShow:function(){
    // 页面显示
    wx.showModal({
      title: '小联温馨提示',
      content: '本小程序是中国传媒大学社团联合会舞动中传晚会门票获取的方式之一，需要按照规则找到谜底才能进入下一步哦',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
      },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
