const About = {
    template: '#about'
};
const PageNotFound = {
    template: '#pagenotfound'
};


const router = new VueRouter({
    base:"rutas",
    routes:[
        {
            path: '/lists_person',
            component: ListsPerson
        },
        {
            path: '/lists_programming',
            component: ListsProgramming
        },
        {
            path: '/about',
            redirect: '/about-us'
        },
        {
            path: '/about-us',
            component: About
        },
        {
            path: '*',
            component: PageNotFound
        },
    ]
})



const app = new Vue({
    el:'#app',
    router,
    data: {
        message: 'Hello world',
        value: 5,
        isVisible: false, 
        people: ['andres', 'juan', 'pepe'],
        content_html: "<h1>Hola mundo</h1>",
        src: "https://imagenmix.net/wp-content/uploads/2016/09/imagenes-bonitas.jpg",
        text: "Descripcion de nuestra imagen",
        numero: 20,
        v_model: "Hola v-model",
        p_error: false
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