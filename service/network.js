export default function request(options) {
  return new Promise((resolove, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || '',
      success: resolove,
      fail: reject
    })
  })
}