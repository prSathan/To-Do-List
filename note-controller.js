
(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.getHTML = function (element) {
    element.innerHTML = this.noteListView.doHTML();
  };

exports.NoteController = NoteController;
exports.NoteController.getHTML = NoteController.getHTML;
})(this);


// var app = document.getElementById("app");
// app.innerHTML = "mike"
