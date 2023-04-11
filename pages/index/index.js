Page({
  data:{
    email: "",
    emailError: ""
  },
  onEmailInput: function(e) {
    const email = e.detail.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    if (isValidEmail) {
      this.setData({email, emailError: ""});
    } else {
      this.setData({email, emailError: "Ingresa un correo electrónico válido"});
    }
  },
  formSubmit: function(e) {  
    console.log(e)
    let email = e.detail.value.email;
    console.log("Correo electrónico enviado:", email);
  },
  
  onLoad() {
    this.setData({
      productos:[],
      prodCar:[]
    }) 
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
