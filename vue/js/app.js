const Home = {
    template: '#home'
};
const About = {
    template: '#about'
};
const PageNotFound = {
    template: '#pagenotfound'
};


const router = new VueRouter({
    base: "rutas",
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/ListsPerson',
            component: ListsPerson
        },
        {
            path: '/ListsProgramming',
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
    ],
})

const app = new Vue({
    router,
    el: '#app',
   
    // información sobre rutas donde  ha ingresado el usuario, información sobre el path
    mounted(){
       console.log(this.$route)
    },
    data: {
        message: 'Hello world',
        value: 5,
        isVisible: false,
        filtroEdad: 20,
        people: ['andres', 'juan', 'pepe'],
        content_html: "<h1>Hola mundo</h1>",
        src: "https://imagenmix.net/wp-content/uploads/2016/09/imagenes-bonitas.jpg",
        text: "Descripcion de nuestra imagen",
        numero: 20,
        v_model: "Hola v-model",
        p_error: false,
        arrayObjects: [
            { name: "Andres", surname: "cruz", age: 28 },
            { name: "Leonardo", surname: "leon", age: 25 },
            { name: "Ximena", surname: "rios", age: 22 },
            { name: "Luisa", surname: "guzman", age: 20 },
        ],
        copyArrayObjects:[]
    },
    //funcion de vue, la primera funcion que se ejecuta 
    created: function(){
        this.copyArrayObjects = this.arrayObjects
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        filterPeopleObjects: function(){
            this.arrayObjects = this.copyArrayObjects
            this.arrayObjects = this.arrayObjects.filter(
                person => {
                    return person.age > this.filtroEdad
                }
            )
        },
        filterPeople: function () {
            this.people = this.people.filter(
                person => {
                    return person.length > 5
                })
        },
        calculatesum(value1, value2) {
            return value1 + value2;
        },
        incrementar() {
            this.numero++
        },
        decrementar() {
            this.numero--
        },
        
    },
    watch: {
        numero: function (val) {
            console.log("watch:" + val)
        }
    }
});