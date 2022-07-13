Page({

  /**
   * 页面的初始数据
   */
  data: {
    textareaAValue: '',
    modalName: null,
  },
  showMessage(){
    wx.navigateTo({
      url: '/pages/message/index',
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  loadModal (e) {
    this.setData({
      loadModal: true
    })
    setTimeout(()=> {
      this.setData({
        modalName: null
      })
      this.setData({
        loadModal: false
      })
    }, 1000)
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  }
})