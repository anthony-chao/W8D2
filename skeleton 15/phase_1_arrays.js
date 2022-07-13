Array.prototype.uniq = function() {


  let arr2 = [];

  this.forEach(function(e) {   
    if (!arr2.includes(e)) {
    arr2.push(e);
   }   
   });

   console.log(arr2);
  }

Array.prototype.twoSum = function (arr) {
  let arr2 = [];

  // this.forEach(function(e) {
  //   if (this.includes(-e)) {
  //     arr2.push([this.indexOf(e), this.indexOf(-e)])
  //   }
  // });


  arr.forEach(function (e) {
    if (arr.includes(-e) && arr.indexOf(-e) > arr.indexOf(e)) {
      arr2.push([arr.indexOf(e), arr.indexOf(-e)])
    }
  });

  console.log(arr2);
}

Array.prototype.transpose = function (arr) {
  let height = arr.length
  let width = arr[0].length
  let arr2 = []

  for (let i = 0;  i < width; i++) {
    let subarr = [];
    for (let j = 0; j < height; j++) {
      subarr.push(arr[j][i])
    } 
    arr2.push(subarr)
  }

  console.log(arr2);
}