const mongoose = require("mongoose");

//setting up the schema

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        validate:(val)=>/^[a-zA-z ]+$/.test(val)
    },
    s1:{
        type:Number,
        require:true,
        min:0,
        max:100
    },
    s2:{
        type:Number,
        require:true,
        min:0,
        max:100
    },
    s3:{
        type:Number,
        require:true,
        min:0,
        max:100
    },
    total:{
        type:Number,
        require:true,
        min:0,
        max:300,
        validate:{
            validator: function () {
                return this.s1 + this.s2 + this.s3 === this.total;
            },
            message: 'Total must be the sum of s1, s2, and s3'
        },
    }
});

//setting up the model
const Students = mongoose.model("Students", studentSchema);

module.exports = Students;
