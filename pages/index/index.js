Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中img',
      duration:2000,
      icon:'loading',
      mask:true
    })
  },
  handleShowModel(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容哈哈',
      confirmText:"确认",
      confirmColor:"red",
      mask:true,
      success:function(res){
          console.log(res)
          if(res.confirm){
            console.log('用户点击了确定按钮')
          }else{
            console.log('用户点击了取消按钮')
          }
      }
    })
  },
  handleShowLoading(){
  wx.showLoading({
    title: '加载中img',
    mask:true
  })
  
    setTimeout(()=>{
      wx.hideLoading()
    },1000)
  },
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['拍照','相册'],
      itemColor:'red',
      mask:true,
      success:function(res){
          console.log(res)
          switch(res.tapIndex){
              case 0:
              console.log('用户选择了拍照')
              break;
              case 1:
              console.log('用户选择了相册')
              break;
          }
      }

    })
  },
  onShareAppMessage:(options)=>{
    return {
      title:'哈哈哈哈',
      path:'/pages/logs/logs',
      imageUrl:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg'
    }
  }
})