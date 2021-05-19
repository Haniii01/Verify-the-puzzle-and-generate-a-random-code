// index.js
// 获取应用实例
const app = getApp()
const db = wx.cloud.database()
const _ = db.command

Page({
  data: {
    motto: '欢迎来到社小联盲盒',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    once: true,
    answernum: ''
    },
  onLoad:function(e) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    var that = this
    that.setData({
      answernum:e.answernum,
    })
    // console.log(e.answernum);
    // console.log(e.value);
    // console.log(this.data.answernum)
    
    // console.log(e.query)
    const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {data: value});
    // eventChannel.emit('someEvent', {data: value});
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
      that.setData({
        answernum: data.answernum
      })
    })
    console.log(this.data.answernum)
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          motto: '点击头像生成数字'
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      once: false
    })
  },
  
  // 事件处理函数
  bindViewTap() {
    var that = this
    wx.cloud.callFunction({
      // 云函数名称
      name: 'login',
      // 传给云函数的参数
      data: {
        nickName: nickName,
        avatarUrl: avatarUrl,
        answernum: answernum,
      },
      success: function(res) {
        var openid = res.result.openid
        console.log(res.result.openid)
        console.log(openid)
        console.log('云函数调用成功', res.result) 
        console.log(res.result.openid)
        console.log(answernum)
        if(answernum == 1){
          db.collection('answer1').where({
            openid: res.result.openid
          })
          .get({
            success: function(res) {
              console.log(res.data)
              console.log(res.data.length)
              console.log(openid)
              if (res.data.length == 0) {
                  db.collection('answer1').add({
                    // data 字段表示需新增的 JSON 数据
                    data: {
                      // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
                      openid: openid,
                      nickName: nickName,
                      avatarUrl: avatarUrl,
                      answernum: answernum,
                      createCode: that.createCode(),
                      create_time: new Date()
                    },
                    success: function(res) {
                      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                      console.log('增加成功')
                      that.setData({
                        once: false
                      })
                      setTimeout(function () {
                        wx.showModal({
                          title: '小联温馨提示',
                          content: '公布抽奖时抽奖码只做最后核对凭证，不需要输入但记得截屏保存哦',
                          success (res) {
                            if (res.confirm) {
                              console.log('用户点击确定')
                            } else if (res.cancel) {
                              console.log('用户点击取消')
                            }
                          }
                        })
                      }, 1000)
                    },
                  })
              }
              else{
                that.setData({
                  once: false,
                  motto: '你已经抽过了😠'
                      })
              }
            }
          })
        }else if(answernum == 2){
          db.collection('answer2').where({
            openid: res.result.openid
          })
          .get({
            success: function(res) {
              console.log(res.data)
              console.log(res.data.length)
              console.log(openid)
              if (res.data.length == 0) {
                  db.collection('answer2').add({
                    // data 字段表示需新增的 JSON 数据
                    data: {
                      // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
                      openid: openid,
                      nickName: nickName,
                      avatarUrl: avatarUrl,
                      answernum: answernum,
                      createCode: that.createCode(),
                      create_time: new Date()
                    },
                    success: function(res) {
                      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                      console.log('增加成功')
                      that.setData({
                        once: false
                      })
                      setTimeout(function () {
                        wx.showModal({
                          title: '小联温馨提示',
                          content: '公布抽奖时抽奖码只做最后核对凭证，不需要输入但记得截屏保存哦',
                          success (res) {
                            if (res.confirm) {
                              console.log('用户点击确定')
                            } else if (res.cancel) {
                              console.log('用户点击取消')
                            }
                          }
                        })
                      }, 1000)
                    },
                  })
              }
              else{
                that.setData({
                  once: false,
                  motto: '你已经抽过了😠'
                      })
              }
            }
          })
        }
        else if(answernum == 3){
          db.collection('answer3').where({
            openid: res.result.openid
          })
          .get({
            success: function(res) {
              console.log(res.data)
              console.log(res.data.length)
              console.log(openid)
              if (res.data.length == 0) {
                  db.collection('answer3').add({
                    // data 字段表示需新增的 JSON 数据
                    data: {
                      // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
                      openid: openid,
                      nickName: nickName,
                      avatarUrl: avatarUrl,
                      answernum: answernum,
                      createCode: that.createCode(),
                      create_time: new Date()
                    },
                    success: function(res) {
                      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                      console.log('增加成功')
                      that.setData({
                        once: false
                      })
                      setTimeout(function () {
                        wx.showModal({
                          title: '小联温馨提示',
                          content: '公布抽奖时抽奖码只做最后核对凭证，不需要输入但记得截屏保存哦',
                          success (res) {
                            if (res.confirm) {
                              console.log('用户点击确定')
                            } else if (res.cancel) {
                              console.log('用户点击取消')
                            }
                          }
                        })
                      }, 1000)
                    },
                  })
              }
              else{
                that.setData({
                  once: false,
                  motto: '你已经抽过了😠'
                      })
              }
            }
          })
        }
        else if(answernum == 4){
          db.collection('answer4').where({
            openid: res.result.openid
          })
          .get({
            success: function(res) {
              console.log(res.data)
              console.log(res.data.length)
              console.log(openid)
              if (res.data.length == 0) {
                  db.collection('answer4').add({
                    // data 字段表示需新增的 JSON 数据
                    data: {
                      // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
                      openid: openid,
                      nickName: nickName,
                      avatarUrl: avatarUrl,
                      answernum: answernum,
                      createCode: that.createCode(),
                      create_time: new Date()
                    },
                    success: function(res) {
                      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                      console.log('增加成功')
                      that.setData({
                        once: false
                      })
                      setTimeout(function () {
                        wx.showModal({
                          title: '小联温馨提示',
                          content: '公布抽奖时抽奖码只做最后核对凭证，不需要输入但记得截屏保存哦',
                          success (res) {
                            if (res.confirm) {
                              console.log('用户点击确定')
                            } else if (res.cancel) {
                              console.log('用户点击取消')
                            }
                          }
                        })
                      }, 1000)
                    },
                  })
                
              }
              else{
                that.setData({
                  once: false,
                  motto: '你已经抽过了😠'
                      })
              }
            }
          })
        }
        else if(answernum == 5){
          db.collection('answer5').where({
            openid: res.result.openid
          })
          .get({
            success: function(res) {
              console.log(res.data)
              console.log(res.data.length)
              console.log(openid)
              if (res.data.length == 0) {
                  db.collection('answer5').add({
                    // data 字段表示需新增的 JSON 数据
                    data: {
                      // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
                      openid: openid,
                      nickName: nickName,
                      avatarUrl: avatarUrl,
                      answernum: answernum,
                      createCode: that.createCode(),
                      create_time: new Date()
                    },
                    success: function(res) {
                      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                      console.log('增加成功')
                      that.setData({
                        once: false
                      })
                      setTimeout(function () {
                        wx.showModal({
                          title: '小联温馨提示',
                          content: '公布抽奖时抽奖码只做最后核对凭证，不需要输入但记得截屏保存哦',
                          success (res) {
                            if (res.confirm) {
                              console.log('用户点击确定')
                            } else if (res.cancel) {
                              console.log('用户点击取消')
                            }
                          }
                        })
                      }, 1000)
                    },
                  })
              }
              else{
                that.setData({
                  once: false,
                  motto: '你已经抽过了😠'
                      })
              }
            }
          })
        }
        console.log(that.data.once)
      },
      fail: console.error
    })
    if(this.data.once){
      // this.createCode()
      this.setData({
        once: false
      })
      console.log(this.data.userInfo.nickName)
      var nickName = this.data.userInfo.nickName
      console.log(this.data.userInfo.avatarUrl)
      var avatarUrl= this.data.userInfo.avatarUrl
      console.log(this.data.answernum)
      var answernum = this.data.answernum
    }
    else{
      wx.showToast({
        icon: 'error',
        title: '你已经抽过了',
      })
    }
    // console.log(nickName)
    // console.log(this.data.userInfo.openid)
    // db.collection('users')
    // // .where({
    // //   openid: wxContext.OPENID
    // // })
    // .add({
    //       data: {
    //         userNickName:this.data.UserInfo.nickName,
    //         create_time: db.serverDate()
    //       }
    //     }
    // console.log(nickName)
    // console.log(avatarUrl)
    // console.log(answernum)
    
  },
  createCode() {
    var code;
    //首先默认code为空字符串
    code = '';
    //设置长度，这里看需求，我这里设置了4
    var codeLength = 4;
    //设置随机字符
    var randomsum = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    var randomchar = new Array( 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
    //循环codeLength 我设置的4就是循环4次
    for (var i = 0; i < codeLength; i++) {
      //设置随机数范围,这设置为0 ~ 36
      var index = Math.floor(Math.random() * 10);
      //字符串拼接 将每次随机的字符 进行拼接
      code += randomsum[index];
    }
    for (var i = 0; i < 3; i++) {
      //设置随机数范围,这设置为0 ~ 36
      var index = Math.floor(Math.random() * 26);
      //字符串拼接 将每次随机的字符 进行拼接
      code += randomchar[index];
    }
    for (var i = 0; i < codeLength; i++) {
      //设置随机数范围,这设置为0 ~ 36
      var index = Math.floor(Math.random() * 10);
      //字符串拼接 将每次随机的字符 进行拼接
      code += randomsum[index];
    }
    //将拼接好的字符串赋值给展示的code
    let _this = this
    setTimeout(function () {
        _this.setData({
          motto: code,
          once: false
        })
      }, 1000)
    console.log(_this.data.motto)
    return code
  },
})

