(function(exports) {

  function NoteListView(noteList) {

    this.noteList = noteList;

  };

  NoteListView.prototype.doHTML = function () {
    var result = "";
    this.noteList.array.forEach(function(note) {
    result += "<ul><li><div>" + note.text + "</div></li></ul>";
    });
    return result;

  };

  exports.NoteListView = NoteListView;
  exports.NoteListView.doHTML = NoteListView.doHTML;

})(this);
