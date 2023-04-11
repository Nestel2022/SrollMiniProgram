Page({
  data: {
    prodCar:[],
    estadoBtn:"none"
  },
  onLoad() {
    let response = my.getStorageSync({ key: 'carProd' });
    this.setData({
      prodCar: response.data.productos
      
    });
   

    
  },
  setElement(e){    
    let finx = e.changedTouches[0].pageX;
    let finy = e.changedTouches[0].pageY;
    if(finx > 230 && finy < 390){
    this.setData({
      estadoBtn:"block"
    })
    }
  },

  finCompra(){
    my.clearStorage();
    this.setData({
      prodCar:[]
    })
    my.alert({
      content: "Gracias por tu compra!!!"
    })    

    my.navigateTo({
      url: '/pages/index/index'
    });
  }
});
