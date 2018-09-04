//logs.js
// const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    tableNav: ['全部','训练累计'],
    checkedNav:0,
    appointmentLesson:[
      {
        shop:'金牛游泳馆',
        address:'金牛区蜀汉路一品天下地铁旁',
        lesson:'游泳',
        coach:'菲尔普斯',
        spellingMaster:'李丹丹',
        collage:'张三',
        price:64,
        count:1,
        time:'2018年6月19日 下午14:00-15:00',
        orderNum:2353454657568756564,
        orderStage:'结束'
      }, {
        shop: '金牛游泳馆',
        address: '金牛区蜀汉路一品天下地铁旁',
        lesson: '游泳',
        coach: '菲尔普斯',
        spellingMaster: '李丹丹',
        collage: '张三',
        price: 64,
        count: 1,
        time: '2018年6月19日 下午14:00-15:00',
        orderNum: 2353454657568756564,
        orderStage: '结束'
      }, {
        shop: '金牛游泳馆',
        address: '金牛区蜀汉路一品天下地铁旁',
        lesson: '游泳',
        coach: '菲尔普斯',
        spellingMaster: '李丹丹',
        collage: '张三',
        price: 64,
        count: 1,
        time: '2018年6月19日 下午14:00-15:00',
        orderNum: 2353454657568756564,
        orderStage: '结束'
      }, {
        shop: '金牛游泳馆',
        address: '金牛区蜀汉路一品天下地铁旁',
        lesson: '游泳',
        coach: '菲尔普斯',
        spellingMaster: '李丹丹',
        collage: '张三',
        price: 64,
        count: 1,
        time: '2018年6月19日 下午14:00-15:00',
        orderNum: 2353454657568756564,
        orderStage: '结束'
      },
    ]
  },
  changeCon:function(e){
    var ind = e.currentTarget.dataset.id
    var self = this
    console.log(ind)
    if(ind==0){
      self.setData({
        checkedNav: 0
      })
    }else{
      self.setData({
        checkedNav: 1
      })
    }
  },
  gotoLab:function(){
    wx.switchTab ({
      url:'../message/msg'
    })
  }













 
})
