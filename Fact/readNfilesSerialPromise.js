let fs=require("fs");
let Files=["./f1.txt","./f2.txt","./f3.txt"];
let f1kapromise=fs.promises.readFile(Files[0]);
for(let i=1;i<Files.length;i++)
{
    f1kapromise=f1kapromise.then(function(data){
        console.log(""+data);
        let nextFilesreadpp=fs.promises.readFile(Files[i]);
        return nextFilesreadpp;

    })
}
f1kapromise.then(function(data)
{
    console.log(""+data);
})