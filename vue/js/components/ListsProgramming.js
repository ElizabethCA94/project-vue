const ListsProgramming = {
    name: "ListsProgramming",
    template: `
        <div>
            <ul>
                <li v-for="l in language">{{l}}</li>
            </ul>
        </div>
    `,
    data: function(){
        return {
            language: ['C#', 'PHP', 'Java', 'JavaScript']
        }
    }
}