import { User } from "./models/User";

const user = new User({name:"MaName",age: 25});

user.on("change", () =>{
    console.log("Change 1");
});
user.on("click", () =>{
    console.log("click");
});
user.on("hover", () =>{
    console.log("hover");
});
user.on("change", () =>{
    console.log("Change 2");
});
user.on("wouloulou", () =>{
    console.log("wouloulou");
});

user.trigger("change")
user.trigger("wouloulou")
user.trigger("click")
user.trigger("hoverfeqs")
