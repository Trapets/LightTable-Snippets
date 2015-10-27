(function(window) {


  // Function creates section header with 3 rows for CSS-file.
  function cssSectionHeader3 (sectionTitle) {
    var repSign = "-";       // User can specify which character is repeated in section header (row 1 and 3). Must contain only one sign!
    var repSign2 = " ";      // User can specify which character is repeated in section header (2nd row). Must contain only one sign!
    var lineLength = 65;     // User can specify header line length.
    var titleStartPos = 35;  // User can specify title start position.
    var titleLength = (sectionTitle.toString()).length;
    var titelSafe = lineLength - titleStartPos - 5;

    if (titleLength < 0 || sectionTitle === " ") {
      return "";
    };

    if (titleLength > 0 && titleLength <= titelSafe) {
      var lineEnd = lineLength - titleStartPos - titleLength;

      return "/*" + repSign.repeat(lineLength - 2) + "\n" +
             repSign2.repeat(titleStartPos - 2) + " " + sectionTitle + " " + repSign2.repeat(lineEnd) + "\n" +
             repSign.repeat(lineLength - 2) + "*/";
    };

    if (titleLength > 0 && titleLength > titelSafe) {
      var titleCut = sectionTitle.substr(0,titelSafe);
      var lineEnd = lineLength - titleStartPos - titleCut.length;

      return "/*" + repSign.repeat(lineLength - 2) + "\n" +
             repSign2.repeat(titleStartPos - 2) + " " + titleCut + " " + repSign2.repeat(lineEnd) + "\n" +
             repSign.repeat(lineLength - 2) + "*/";
    };
  };


  // Function creates single row section header for CSS-file.
  function cssSectionHeader1 (sectionTitle) {
    var repSign = "-";       // User can specify which character is repeated in section header. Must contain only one sign!
    var lineLength = 65;     // User can specify header line length.
    var titleStartPos = 35;  // User can specify title start position.
    var titleLength = (sectionTitle.toString()).length;
    var titelSafe = lineLength - titleStartPos - 5;

    if (titleLength < 0 || sectionTitle === " ") {
      return "";
    };

    if (titleLength > 0 && titleLength <= titelSafe) {
      var lineEnd = lineLength - titleStartPos - titleLength - 2;

      return "/*" + repSign.repeat(titleStartPos - 4) + " " + sectionTitle + " " + repSign.repeat(lineEnd) + "*/";
    };

    if (titleLength > 0 && titleLength > titelSafe) {
      var titleCut = sectionTitle.substr(0,titelSafe);
      var lineEnd = lineLength - titleStartPos - titleCut.length - 2;

      return "/*" + repSign.repeat(titleStartPos - 4) + " " + titleCut + " " + repSign.repeat(lineEnd) + "*/";
    };
  };



  snip$.helpFunc = {
    cssSectionHeader3: cssSectionHeader3,
    cssSectionHeader1: cssSectionHeader1
  };

})(window);
