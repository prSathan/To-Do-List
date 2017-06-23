(function(exports) {

  function NoteList() {
    this.array = [];
  }

  NoteList.prototype.addNote = function (text) {
    note = new Note(text);
    this.array.push(note);
  };

exports.NoteList = NoteList;

})(this);
