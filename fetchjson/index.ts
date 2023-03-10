import axios from 'axios';

interface Todo{
    id: number;
    title: string;
    completed: boolean;     
}


const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
    // console.log(response.data);
    const todo = response.data as Todo;
    ;
    
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(
      
        `
            ID: ${id}
            Title: ${title}
            Completed: ${completed}
        `
    );


});