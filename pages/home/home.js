Page({
  data: {
    name: 'lsj',
    age: 19,
    students: [{
        id: 110,
        name: 'lsj',
        age: 18
      },
      {
        id: 120,
        name: 'zjy',
        age: 15
      },
      {
        id: 130,
        name: 'cjz',
        age: 10
      },
    ],
    count: 0
  },
  handleClickButton() {
    const num = this.data.count + 1
    // console.log(this.data.count)
    this.setData({
      count: num
    })
  },
  handleJianButton(){
    const num = this.data.count -1
    // console.log(this.data.count)
    this.setData({
      count: num
    })
  }
})