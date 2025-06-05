// import fs  from 'fs'

const wait = (seconds) => {
    const waiter = new Promise((res, rej) =>{
        return res('harro')
    })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(seconds) {
          // Success
            console.log(waiter)
            waiter.then((res)=>{console.log(res)})
            resolve(`Done waiting ${seconds} seconds!`); 
        }
        else { 
          // failure scenario
            console.log('in pari')
            reject("Oops! Something went wrong."); 
        }
      }, seconds * 1000);
    });
  };
  
  // Using the Promise
  wait(1)
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });


const task1 = () => new Promise ((res, rej)=>{
    if(1===1)
        res('this shi ez, not realy')
    else
        rej("bruzz in paripari")});''
const task2 = () => Promise.resolve("bruzz are yyou serious");
const onResolve = (data) =>{
    console.log(data)
}
const onError = (error) =>{
    console.log(error)
}

task1().then(data => onResolve(data)).catch(error => onError(error))
task2().then(error => onError(error))
class Base {
    k = 4;
  }
   
  class Derived extends Base {
    constructor() {
      console.log(this.k);
//   'super' must be called before accessing 'this' in the constructor ofte a derived class.
      super();
    }
  }
  const driver = new Derived
  console.log(driver.k)
  