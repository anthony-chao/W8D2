
Array.prototype.myEach = function (callback) {
  let height = this.length

  for (let i = 0; i < height; i++) {
    callback(this[i])
    }
}

Array.prototy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     pe.myMap = function (callback) {
  let height = this.length
  let arr2 = []

  for (let i = 0; i < height; i++) {
    arr2.push(callback(this[i]))
  }

  console.log(arr2)
}


Array.prototype.myReduce = function(callback) {
  let height = this.length
  let count = 0

 
  for (let i = 0; i < height; i++) {
    count += callback(this[i]) 
  }

  console.log(count)
}


function inject(acc, el) {

}



function logIfEven(num) {
    console.log(num * 2);
}
