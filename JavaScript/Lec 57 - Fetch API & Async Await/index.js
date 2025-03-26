

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/100');

    const data = await response.json();
    console.log("Get Data: ", data);
}

async function postData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userId": 1,
            "id": 101,
            "title": "Hello Asher",
            "body": "Post Body, Hello Asher Fraz Anjum!"
        })
    })

    let data = await response.json();
    console.log("Posted Data: ", data);
}

async function processData() {
    await getData();
    await postData();
}

processData()