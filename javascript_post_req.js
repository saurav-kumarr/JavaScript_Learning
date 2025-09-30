// POST Requests using Fetch API

async function postData() {
    const newPost = {
        title:"New Post",
        body: "Post Body",
        userId:1
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Posted Data:",data);

    } catch (error) {
        console.error("Error:",error);
    }     
}
postData();