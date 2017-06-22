
(function(exports) {
  function noteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new noteListView(noteList);
  };

  noteController.prototype.getHTML = function (element) {
    element.innerHTML = this.noteListView.doHTML();
  };

exports.noteController = noteController;
exports.noteController.getHTML = noteController.getHTML;
})(this);


// var app = document.getElementById("app");
// app.innerHTML = "mike"
