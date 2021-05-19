# 基于云开发验证答案获取随机码的小程序

运用的主要功能有：

- 数据库：用于保存用户的openid，获得的随机码等
- 云函数：主要是运用微信自带的天然免鉴权获取openid

界面主要功能：

- 点开第一页验证谜底是否正确（运用前端JavaScript进行判断，减少调用云函数的次数），运用事件监听器传递第一页的选项到第二页
- 正确之后进入第二页，运用getUserProfile(e)函数获取昵称头像，调用数据库判断之前有没有创建过，有则提示你已经抽过了，没有则创建数字+字母+数字这样的码与昵称头像等一起传递到数据库中

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

