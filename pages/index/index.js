Page({
  data:{
    productos:[],
    prodCar:[]
  },
  onLoad() {
   
    let aux = this.data.productos;
    for (let i = 1; i <=30; i++) {
      aux.push('Producto '+i)     
    }
    this.setData({
      productos:aux
    }) 
    
  },  
  addToCar(e){
    let aux2 = this.data.prodCar;
    aux2.push(e.target.id),
    my.alert({content: `${e.target.id} añadido correctamente`})

    this.setData({
      prodCar:aux2
    })
    

  },

  verCarrito(){
    my.setStorageSync({
      key: 'carProd',
      data: {
        productos: this.data.prodCar     
        
      }
    });
    my.navigateTo({
      url: '/pages/carrito/carrito'
    });
  }

  
});
