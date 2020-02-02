//logs.js


Page({
  data: {
    counter: 0
  },
  onLoad: function() {

  },
  Increment(event) {
    console.log(event.detail.name, event.detail.age)

    this.setData({
      counter: ++this.data.counter
    })
  },
  handlecontrolclcik(event) {
    console.log(event)
  },
  handleIncrement() {
    const my_sel = this.selectComponent('#sel-id');
    my_sel.handleIncrement(20);
  }
})