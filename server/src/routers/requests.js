const express = require("express");
const Students = require("../mongoose/models/students");

//setting up the request router
const studentRouter = express.Router();

studentRouter.get('/home', async (req, res) => {
    try {
        const { searchByName, searchByMarks, sortByName, sortByMark } = req.query;
        let data;
        if (searchByMarks && sortByMark) {
            sortByMark === 'ASC' ? data = await Students.find({ $or: [{ s1: searchByMarks }, { s2: searchByMarks }, { s3: searchByMarks }, { total: searchByMarks }] }).sort({ total: 1 }) :
                data = await Students.find({ $or: [{ s1: searchByMarks }, { s2: searchByMarks }, { s3: searchByMarks }, { total: searchByMarks }] }).sort({ total: -1 });
        } else if (searchByName && sortByName) {
            sortByName === 'ASC' ? data = await Students.find({}).sort({ name: 1 }) :
                data = await Students.find({}).sort({ name: -1 });
            data = data.filter(d => (d.name).startsWith(searchByName))
        } else if (searchByMarks) {
            data = await Students.find({ $or: [{ s1: searchByMarks }, { s2: searchByMarks }, { s3: searchByMarks }, { total: searchByMarks }] });
        } else if (searchByName) {
            data = await Students.find();
            data = data.filter(d => (d.name).startsWith(searchByName))
        } else if (sortByMark) {
            sortByMark === 'ASC' ? data = await Students.find().sort({ total: 1 }) :
                data = await Students.find().sort({ total: -1 });
        } else if (sortByName) {
            sortByName === 'ASC' ? data = await Students.find().sort({ name: 1 }) :
                data = await Students.find().sort({ name: -1 });
        } else {
            data = await Students.find();
        }
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

studentRouter.post('/add', async (req, res) => {
    try {
        await Students.create(req.body);
        res.status(200).send("User has been created succefully");
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

studentRouter.get('/insight', async (req, res) => {
    try {
        let data = await Students.find().sort({ total: -1 });
        let topScorrer = data.filter(d => d.total === data[0].total);
        let highScorrer = data.filter(d => d.total > 200 && d.total <= 300).length;
        let mediumScorrer = data.filter(d => d.total > 100 && d.total <= 200).length;
        let lowScorrer = data.filter(d => d.total > 0 && d.total <= 100).length;
        let s1_100 = data.filter(d => d.s1 === 100).map(({name})=>name);
        let s2_100 = data.filter(d => d.s2 === 100).map(({name})=>name);
        let s3_100 = data.filter(d => d.s3 === 100).map(({name})=>name);
        res.status(200).send({
            topScorrer, highScorrer, mediumScorrer, lowScorrer, s1_100, s2_100, s3_100
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = studentRouter;