import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
    // console.log(response.data);
    const todo = response.data;
    
    const ID = todo.id;
    const title = todo.title;
    const description = todo.description;
    const completed = todo.completed;

    console.log(
        `
            ID: ${ID}
            Title: ${title}
            Completed: ${completed}
        `
    );


});