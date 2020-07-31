const Lists = {
    name: "ListsProgramming",
    template: `
        <div>
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