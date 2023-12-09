const fs = require('fs');
const filePath = "./trainees.json";

// Read the file content using Async
function readTrainees() {
    fs.readFile(filePath, "utf8", (err, data) => {
        if(err) 
            console.log(err.message);
        else {
            let result = JSON.parse(data);
            console.log(result);
        }
    });
}

// Write the file content using Async
function createTrainee() {
    fs.readFile(filePath, "utf8", (err, data) => {
        if(err) 
            console.log(err.message);
        else {
            let result = JSON.parse(data);
            
            let obj = {
                id: 4,
                name: "Dinesh",
                batch: "Jun/Sep",
                timings: "10-1pm",
                days: "weekends"
            }
            result.push(obj);
            fs.writeFile(filePath, JSON.stringify(result), (err) => {
                if(err)
                    console.log(err.message);
                else {
                    console.log("Trainee has been created successfully!")
                }
            });
        }
    });
}

function deleteTrainee() {
    fs.readFile(filePath, "utf8", (err, data) => {
        if(err) 
            console.log(err.message);
        else {
            let result = JSON.parse(data);
            // let flag = false;
            // for(let i = 0; i < result.length; i++) {
            //     if(result[i].id === 3) {
            //         result.splice(i, 1);
            //         flag = true;
            //     }
            // }
            // console.log(result);

            // let flag = result.some(v => v.id === 3);
            let flag = result.filter(v => v.id !== 2);

            // console.log(result.length, flag.length)
            
            if(flag.length !== result.length) {
                fs.writeFile(filePath, JSON.stringify(flag), (err) => {
                    if(err)
                        console.log(err.message);
                    else {
                        console.log("Trainee has been deleted successfully!")
                    }
                });
            } else {
                console.log("Trainee not found!");
            }
        }
    });
}

function updateTrainee() {
    fs.readFile(filePath, "utf8", (err, data) => {
        if(err) 
            console.log(err.message);
        else {
            let result = JSON.parse(data);
            let obj = {
                id: 4,
                batch: "January",
                timings:"2-5pm",
                days: "Mon-Wed-Fri",
            }
            // let id = 2;
            // let name = "New Name";
            // let flag = false;
            // for(let i = 0; i < result.length; i++) {
            //     if(result[i].id === obj.id) {
            //         result[i] = obj;
            //         flag = true;
            //     }
            // }
            for(let i = 0; i < result.length; i++) {
                if(result[i].id === obj.id) {
                    // for(let temp in obj) {
                    //     result[i][temp] = obj[temp];
                    // }
                    result[i] = {...result[i], ...obj}
                    flag = true;
                }
            }
            // console.log(result);

            // let flag = result.some(v => v.id === 3);
            // let flag = result.filter(v => v.id !== 2);

            // console.log(result.length, flag.length)
            
            // if(flag.length !== result.length) {
            if(flag) {
                fs.writeFile(filePath, JSON.stringify(result), (err) => {
                    if(err)
                        console.log(err.message);
                    else {
                        console.log("Trainee has been updated successfully!")
                    }
                });
            } else {
                console.log("Trainee not found!");
            }
        }
    });
}

module.exports = {
    readTrainees,
    createTrainee,
    updateTrainee,
    deleteTrainee
}