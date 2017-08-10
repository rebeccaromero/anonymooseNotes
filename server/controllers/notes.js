var mongoose = require('mongoose');
var Note = mongoose.model('Note');
module.exports = {
//   show: function(req, res) {
//     Note.find({}, function(err, notes) {
//       res.render('main', {notes: notes});
//     })
//   },
  create: function(req, res) {
      console.log('GROWL');
      console.log(req.body);
    // var note = new Note({note: req.body.note});
    // note.save(function(err) {
    //   if(err){
    //     console.log("something went wrong");
    //   } else {
    //     res.redirect('/main');
    //   }
    // })
  }
}