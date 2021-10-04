let fs = require("fs");
let f1kaPP = fs.promises.readFile("./f1.txt");// returns a obj={state:"pending", value:und}
let thenPromise = f1kaPP.then(function (data) {        // once data comes then f1kapp object state:"resolved"  and also returns object thenPromise
    console.log("" + data);
})
thenPromise.then(function () {                         // once thenPromice obj state:"resolved" then f2 file read 
    let f2kaPP = fs.promises.readFile("./f2.txt"); 
    return f2kaPP;
}).then(function (data) {
    console.log("" + data);
}).then(function () {
    let f3kaPP = fs.promises.readFile("./f3.txt");
    return f3kaPP;
}).then(function (data) {
    console.log("" + data);
});
