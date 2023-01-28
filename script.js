//person

class Person{
    constructor(name,age,occupation){
        this.name=name;
        this.age=age;
        this.occupation=occupation;
    }
    getPersondetails(){
        return(`This is ${this.name} of age ${this.age} and the occupation is ${this.occupation} `)
    }    
}
let person1 = new Person ("AhamedAnasAli","21","software devoloper");

console.log(person1.getPersondetails());


//uber price
class Uber{
    constructor(distance,rate){
        this.distance=distance;
        this.rate=rate;
    }
    getRidedetails(){
        return(`the distance of ride is ${this.distance}km and the rate is ${this.rate}`);
    }
    getPrice(){
        let price=(this.distance * 25);
        return price;
    }
}
let uber1 = new Uber (20,500)
console.log(uber1.getPrice());
console.log(uber1.getRidedetails());