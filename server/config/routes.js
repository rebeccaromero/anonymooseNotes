var notes = require('../controllers/notes.js');

module.exports = function(app){
    app.post('/notes', (req, res, next)=>{
        console.log('reached routing');
        console.log('req');
        console.log(req.body);
        // console.log('res');
        // console.log(res);
        notes.create(req, res);
        res.json(true);
    });
}