// function testNoteController() {
//   noteController = new noteController('notelist')
//     assert.isEq(noteController.noteList, "notelist");
// }
//
// testNoteController();

function testNoteControllerGetHTML() {
  function AppDouble() {
    this.innerHTML = null;
  };
  appDouble = new AppDouble;
  noteList = new NoteList;
  noteList.addNote('testing');
  noteController = new NoteController(noteList);
  noteController.getHTML(appDouble);
  if (appDouble.innerHTML === "<ul><li><div>testing</div></li></ul>" ) {
    console.log("Test passed")
  } else {
    console.log("Test failed")
  };
};

testNoteControllerGetHTML()
