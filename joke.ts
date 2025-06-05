const joke = <T, U>(res: T, req: U) =>{
    return 1
}

abstract class Box{
    box: string
    constructor(box: string){
        this.box = box
    }
    isThisABox(){
        console.log('im going schizophrenic')
    }
}
class ChromeComposable extends Box {
    juice: string
    straw: number
    constructor(juice: string, box: string, straw: number){
        super(box)
        this.juice = juice
        this.straw = straw
    }
    juiceBoxDetails() {
        super.isThisABox()
        const text = `      Your juicebox details are: 
             ${this.box} box 
             ${this.juice} Juice
             with ${this.straw} straw(s).           `
        // console.log('funcck: ',super.isThisABox())
    }
}
const juiceBox = new ChromeComposable('Strawberry', 'Cardboard', 1)
juiceBox.juiceBoxDetails()
juiceBox.isThisABox()
// ChromeComposable.isThisABox()

// @errors: 7006
abstract class Checkable {
   abstract check(name: string): boolean;
  }
  
class NameChecker extends  Checkable {
    check(s: string) {
      return s.toLowerCase() === "ok";
    }
    chk(){
        console.log('j')
    }
  }

  interface User {
    id: string
    name: string
  }

  interface User { role: string } 

  const username = {} as User
  username.name = 'ga'
  console.log(username.role)
  const numbArray = [2, 4, 5, 7, 8, 3, 1]
  const aggregatedArray = numbArray.reduce((sum, price)=>sum + price, 5)
  console.log("aggregatedArray: ", aggregatedArray)
  

  class Boxer<Type, Type2, Diabetes> {
    contents: Type;
    content: Type2
    constructor(val: Type)
    constructor(val:Type, val2: Type2)
    constructor(value: Type, val2?: Type2) {
      this.contents = value;
      if(val2)
      this.content = val2
    }
  }
   
  const b = new Boxer("hello!", 22);
  console.log("BOXER DETAILS: ", b.content, b.contents)