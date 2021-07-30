const axios = require("axios")

function log(text) {
    for (let i = 0; i <= 6000; i+=0.1) {
        if (i > 5999) {
            return console.log(text)
        }
    }
   /* setTimeout(()=> {
        console.log(text)
    }, 3000)*/
}


async function logNums() {
     log(0)
    console.log(1)
    console.log(2)
     log(3)
    console.log(4)
}

//logNums() 

/*// async/await
async function getData() {
    const data = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
            ).then(res => res.data)
                console.log(data)
}
*/


axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.status)
        .then(data => data.title)
        .then(title => console.log(title))
        .finally(res => console.log('Hello'))
    .catch(err => console.log(err.messasge))