const ListsPerson = {
    name: "ListsPerson",
    template: `
        <div>
            <list-alert></list-alert>
            <ul>
                <li v-for="person in people">{{person}}</li>
            </ul>
        </div>
    `,
    data: function(){
        return {
            people: ['andres', 'juan', 'pepe']
        }
    }
}