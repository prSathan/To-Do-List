(function(exports) {

  function noteListView(noteList) {

    this.noteList = noteList;

  };

  noteListView.prototype.doHTML = function () {
    var result;
    this.noteList.array.forEach(function(note) {
      result = "<ul><li><div>" + note.text + "</div></li></ul>";
    });
    return result;

  };

  exports.noteListView = noteListView;
  exports.noteListView.doHTML = noteListView.doHTML;

})(this);
