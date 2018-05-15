const app = new Vue({
  el: '#app',
  template: '#ejemplo',
       
  data: {
      cursos:[
      {name:'matematica',  url: 'https://www.youtube.com/watch?v=L0F4OPPsm0c'},
      {name:'ingles',  url: 'https://www.youtube.com/watch?v=L0F4OPPsm0c'},
      {name:'comunicacion',  url: 'https://www.youtube.com/watch?v=6_LrK6Ky78k'}
      ],
      mostrar: true,
      mensaje: 'hola como estan soy vue',
      alert: 'siempre estaremos',
      imagen: 'https://cdne.diariocorreo.pe/thumbs/uploads/img/2017/06/08/maria-reiche-recuerdan-a-la-jpg_604x0.jpg'      
  },
  methods:{
      toglemostrar: function(){
          this.mostrar = !this.mostrar
      }
  }
 
})