function person(){
    this.name = 'Abhi',
    this.age = '25',
    this.say = function(){
        console.log(this.age);
        function inner(){
            console.log(this.age);
            console.log(this);
        }
        inner();
    }
}
let x = new person();
x.say();