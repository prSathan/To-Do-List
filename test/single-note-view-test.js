function testSingleNoteView() {
  view = new NoteView('drive');
  if (view.display === 'drive') {
    console.log("testSingleNoteView PASSED")
  } else {
    console.log("testSingleNoteView FAILED")
  }
};

testSingleNoteView()









//
// function testNoteControllerGetHTML() {
//   function appDouble() {
//     this.innerHTML = null;
//   };
//   appDouble = new appDouble;
//   noteList = new Notelist;
//   noteList.addNote('testing');
//   noteController = new noteController(noteList);
//   noteController.getHTML(appDouble);
//   if (appDouble.innerHTML === "<ul><li><div>testing</div></li></ul>" ) {
//     console.log("Test passed")
//   } else {
//     console.log("Test failed")
//   };
// };
//
// testNoteControllerGetHTML()
