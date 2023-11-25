const mongoose = require("mongoose");
const Students = require("../models/students");
require("./mongoose");

const students_data = [
    { _id: new mongoose.Types.ObjectId(), name: 'Student1', s1: 100, s2: 78, s3: 90, total: 268 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student2', s1: 100, s2: 82, s3: 88, total: 270 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student3', s1: 100, s2: 94, s3: 87, total: 281 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student4', s1: 91, s2: 100, s3: 92, total: 283 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student5', s1: 87, s2: 100, s3: 84, total: 271 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student6', s1: 93, s2: 100, s3: 91, total: 284 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student7', s1: 82, s2: 88, s3: 95, total: 265 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student8', s1: 88, s2: 91, s3: 100, total: 279 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student9', s1: 84, s2: 83, s3: 100, total: 267 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student10', s1: 90, s2: 86, s3: 100, total: 276 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student11', s1: 50, s2: 60, s3: 70, total: 180 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student12', s1: 60, s2: 50, s3: 70, total: 180 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student13', s1: 50, s2: 60, s3: 70, total: 180 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student14', s1: 50, s2: 60, s3: 70, total: 180 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student15', s1: 33, s2: 33, s3: 33, total: 99 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student16', s1: 33, s2: 33, s3: 33, total: 99 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student17', s1: 33, s2: 33, s3: 33, total: 99 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student18', s1: 33, s2: 33, s3: 33, total: 99 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student19', s1: 33, s2: 33, s3: 33, total: 99 },
    { _id: new mongoose.Types.ObjectId(), name: 'Student20', s1: 50, s2: 60, s3: 70, total: 180 }
];
//function to seed data into db
const setUpDatabase = async () => {
    await Students.deleteMany();
    for (let i = 0; i < students_data.length; i++)
        await Students(students_data[i]).save();
    await mongoose.connection.close();
}

//feeding the data
setUpDatabase();
