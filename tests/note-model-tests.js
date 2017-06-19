(function (exports) {
  function testNoteInstantiationText() {
    var note = new Note("My favourite language is JavaScript");

    if (note.text !== "My favourite language is JavaScript") {
      throw new Error("Note object not instantiated with correct text");
    }

  };
  testNoteInstantiationText();
})(this);
