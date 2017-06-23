function testNoteHasText(){
  note = new Note("I hate bowling");
  assert.isEq(note.text, "I hate bowling");
}

testNoteHasText();

function testListHasArray(){
  noteList = new NoteList;
  assert.isEq(noteList.array.length, 0);
}

testListHasArray();

function testPutsNoteInArray(){
  var noteList = new NoteList();
  noteList.addNote("new note");
  assert.isEq(noteList.array[0].text, "new note");
}

testPutsNoteInArray();

function testListReturnsHTML(){
  var noteList = new NoteList();
  noteList.addNote("I hate bowling");
  var noteListView = new NoteListView(noteList);
  assert.isEq(noteListView.doHTML(), "<ul><li><div>I hate bowling</div></li></ul>");
}

testListReturnsHTML();

function testListReturnsEmptyHTML(){
  var noteList = new NoteList;
  noteList.addNote("");
  var noteListView = new NoteListView(noteList);
  assert.isEq(noteListView.doHTML(), "<ul><li><div></div></li></ul>");
}

testListReturnsEmptyHTML();
//
function testListReturnsMultipleHTML(){
  var noteList = new NoteList();
  noteList.addNote("hello");
  noteList.addNote("goodbye");
  var noteListView = new NoteListView(noteList);
  assert.isEq(noteListView.doHTML(), "<ul><li><div>hello</div></li></ul><ul><li><div>goodbye</div></li></ul>");
}

testListReturnsMultipleHTML();
