
function one() {
    return new Promise(function(resolve, reject) {
        resolve('hello one');
    });
}

function two() {
    return new Promise(function(resolve, reject) {
        resolve('hello two');
    });
}


// one()
//     .then(function(res) {
//         console.log(res);
//         return two();
//     })
//     .then(function(res) {
//         console.log(res);
//     })

fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(one) {
        return one.json();
      })

      .then(function(data) {
        console.log(data);
        
      })
