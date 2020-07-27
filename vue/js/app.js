// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
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