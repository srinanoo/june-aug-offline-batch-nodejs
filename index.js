// const os = require('os');

// // console.log("My first node application");
// // console.log("My second node application");

// console.log(os);
// console.log(os.arch());
// console.log(os.cpus());

const fs = require('fs');

// // sync method to create file
// let data = "My Second Node Application";
// fs.writeFileSync("sample.txt", data);
// console.log("File created!");

// fs.appendFileSync("sample.txt", "\nNew Data Added...");
// console.log("File Appended!");

// // async method to create file
// fs.writeFile("sample1.txt", "New Content", (err) => {
//     if(err) console.log("Unable to create file...");
//     else
//     console.log("File Created!");
// });

// // sync method to read file
// let content = fs.readFileSync("sample1.txt", "utf8");
// console.log(content);

// // async method to read file
// fs.readFile("sample1.txt", "utf8", (err, data) => {
//     if(err) console.log("Unable to read file");
//     else console.log(data);
// });

// // sync method to delete file
// fs.unlinkSync("sample1.txt");
// console.log("File Deleted");

// // async method to delete file
// fs.unlink("sample.txt", (err) => {
//     if(err) console.log("Unable to delete file");
//     else console.log("File Deleted");
// });

// to add data to trainess.json file
fs.readFile("trainees.json", "utf8", (err, data) => {
    if(err) console.log("Unable to read file");
    else {
        let trainessData = JSON.parse(data);
        console.log(trainessData);
    
        // let obj = {
        //     id: 2,
        //     name: "Charan",
        //     age: 15,
        //     active: false
        // }
        // trainessData.push(obj);

        // fs.writeFile("trainees.json", JSON.stringify(trainessData), (err) => {
        //     if(err) console.log("Unable to add trainee!");
        //     else console.log("Trainee Added");
        // })
    }
});