"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    // console.log(response.data);
    var todo = response.data;
    console.log(todo);
    console.log(todo.id);
    console.log(todo.title);
    console.log(todo.completed);
});
