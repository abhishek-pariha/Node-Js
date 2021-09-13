function person(){
    this.name = 'Abhishek',
    this.age = 24,
    this.say = function(){
        console.log(this.age);
        let func = () =>{
            console.log(this.name);
        }
        func();
    }
}
const x = new person();
x.say();