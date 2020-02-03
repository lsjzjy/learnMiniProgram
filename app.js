App({
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    const token = wx.getStorageSync('token')
    // 如果有token则进行验证         zZxcv cxz  AQSWEDFGH, 
    if (token && token.length !== 0) {
      this.check_toekn(token);
    } else {
      this.login();
    }
    // code只有5分钟的有效期
  },
  check_toekn(token) {
    console.log('验证token')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: "post",
      header: {
        token
      },
      success: (res) => {
        if (!res.data.arrCode) {
          console.log('token有效')
          this.globalData.token = token;
        } else {
          this.login();
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  login() {
    console.log('执行了登录操作')
    wx.login({
      success: (res) => {
        //获取code
        const code = res.code;
        //将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            const token = res.data.token;
            this.globalData.token = token;
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  }
})