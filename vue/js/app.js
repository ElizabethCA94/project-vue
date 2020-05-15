const app = new Vue({
    el:'#app',
    data: {
        message: 'Hello world',
        value: 5,
        isVisible: false, 
        people: ['andres', 'juan', 'pepe'],
        content_html: "<h1>Hola mundo</h1>",
        src: "https://cnnespanol2.files.wordpress.com/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
        text: "Descripcion de nuestra imagen",
        numero: 20,
        v_model: "Hola v-model"
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
          // `this` points to the vm instance
          return this.message.split('').reverse().join('')
        }
    },
    methods: {
        calculatesum(value1,value2){
            return value1+value2;
        },
        incrementar(){
            this.numero++;
        },
        decrementar(){
            this.numero--;
        }
    },
    watch: {
        numero: function(val){
            console.log("watch:"+val)
        }
    }
});