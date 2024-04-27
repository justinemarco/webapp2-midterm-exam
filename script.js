// Task 1: Simple Synchronous Code

console.log(1);
console.log(2);
console.log(3);
console.log(4);

// Task 2: Simple Asynchronous Code 

console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function is fired');
}, 3000)

console.log(3);
console.log(4);

// Task 3: Simple Http Request using XMLHttpRequest

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
request.send();

// Task 4: Using a simple callback, return a json response

const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback (undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    request.send();
}
getTodos((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// Task 5: Using Promise, return a json response

const getTodos1 = () => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {

            }
        });
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
        request.send();
    });
}
getTodos1().then(data => {
    console.log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});

// Task 6: Using Fetch, return a json response

fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    console.log('resolved:', response);
    return data = response.json();
}).then(data => {
    console.log('data:', data);
}).catch(err => {
    console.log('rejected:', err)
});

// Task 7: Using async and wait, return a json response

    const getTodos2 = async () => {
        const response = await
        fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (response.status !== 200) {
            throw new Error('cannot fetch the data');
        }
        const data = await response.json();
        return data;
    }
    getTodos2()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));