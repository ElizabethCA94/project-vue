const ListsPerson = {
    name: "ListsPerson",
    template: `
        <div>
            <list-alert></list-alert>
            <ul>
                <li v-for="person in people">{{person}}</li>
            </ul>
            <ul>
                <li v-for="(person, index) in people">
                        {{index}} - {{person}}
                    <span v-if="index == people.length -1 ">Este es el último elemento</span>
                </li>
            </ul>
        </div>
    `,
    data: function(){
        return {
            people: ['andres', 'juan', 'pepe']
        }
    }
}