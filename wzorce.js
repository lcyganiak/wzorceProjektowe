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

// destrukuryzacja 

const objekt = {
	name: "Karyna",
	age: 12,
	school: 'SP nr 12'
}
// const name = objekt.name
// const age = objekt.age
// const school = objekt.school

const { name, age, school } = objekt

// przypisywnie wartości do kluczy w objekcie nie działa w construktorach
function newObj(age, name) {
	const toy = "Lalka Barbi"
	return {
		age, // alternatywny zapis age: age
		name, // alternatywny zapis name: name
		toy  // alternatywny zapis toy: toy
	}
}

newObj('Jan', 50) // {age : 50, name: "Jan"}


const iloscPrzechowywanychElementowWKoszyku = 5

function zliczanieWartociKoszyka() {

}

// za duzo abstrakcji
function tworzeKlasy() {

	// tworze klase 1 
	// tworze klasa 2
	// ...
	// tworze klase 100
}

// jedna abstrakcja
function tworzeKalsy2() {
	newKlas(100)
}
/**
 * 
 * @param {number} ilosc 
 */
function newKlas(ilosc) {
	// tworze tyle klas ile wynoci parametr ilosc
}
// to jest objekt opisując e cel podrózy oraz czy pasazer ma psa 
const pasazer = {
	cel: "warszawa",
	isPies: true
}

/**
 * 
 * @param {cel: string, isPies: bol} objPasazer 
 */

function cenaBiletu(objPasazer) {
	if (!objPasazer.isPies) {
		console.log("cena 100 zł ")
	} else {
		console.log("cena biletu 250 zł ")
	}
}

function xd() {

	//
	// tu siędzieja jakiś kod przz 10 lini 
	//
	//
	//
	//
	//
	//
	//
	const level = 5
	if (level === 5) {
		// to zrób coś tam 
	}
}

// nazwenictwo 

let newPreson = "Jan"
// mozna z dużej litery zaczynać zminne typu const
const NewWorker = 'Adam'
// nie zapisuj zminnych, funkcji z samy duzych liter. 
let FIRST_NAME = 'John';


const dog = {
	name: "Azor",
	age: 4,
	znakiSzczegolne: true,
	children: ["Kajtek", "Misiek"]
}

hasZnakiSzczegole = dog.znakiSzczegolne;

function add(parametr1, parametr2) {
	if (parametr1 > 100) {

	} else {
		console.log(123)
	}
}

const arr = dog.children.map(item => {

})

const a = {}
const b = new Object()

const c = []
const d = new Array()

const y = "2"
const x = "2";

x + y // 22 

eval(x + y) // 4