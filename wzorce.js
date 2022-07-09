// wzorzec projektowy constructor 
// tworzymy objekty za pomocą class i construktora 
// objekty mogą mieć set i gety 
class Worker {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

// fabryka
// fabyka korzysta z class i konstruktor lub / i z funkcji do tworzenia objektów 
// objekty w tym wzorcu nie mają get i setów 
function Worker2(name, age) {
    return {
        name: name,
        age: age
    }
}

// okruszki 
class Children {
    constructor(children) {
        this.name = children.name
        this.age = children.age
        this.school = children.school
    }
}
class Worker3 {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.children = [new Children({
            name: "Brajan",
            age: 2,
            school: 'Przedszkole nr 2'

        }), new Children({
            name: "Karyna",
            age: 12,
            school: 'SP nr 12'

        })]
    }
}

