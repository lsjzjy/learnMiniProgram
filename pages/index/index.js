Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },
  handleClick() {
    console.log('----')
  },
  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchmMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongPress() {
    console.log('handleLongPress')
  },
  handleButton(event) {
    console.log('-----', event)
  },
  handleTap(event) {
    const dataset=event.currentTarget.dataset;
    const item=dataset.item;
    const index=dataset.index;
    console.log(item,index)

  },
  hanldebindView1(){
    console.log('hanldebindView1')
  },
  hanldebindView2() {
    console.log('hanldebindView2')
  },
  hanldebindView3() {
    console.log('hanldebindView3')
  },
  jj(){
    console.log('===========')
  }

})