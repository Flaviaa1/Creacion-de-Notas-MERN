const notesCtrl = {};

notesCtrl.getNotes =(req, res)=> res.json({message:'notes get'});

notesCtrl.getNote =(req, res)=> res.json({message:' get_note'});


notesCtrl.createNote =(req, res)=> res.json({message:'notes create'});


notesCtrl.updateNote=(req, res)=> res.json({message:'notes update'});


notesCtrl.deleteNote =(req, res)=> res.json({message:'notes delete'});

module.exports = notesCtrl;
