window.onload = function () {
  console.log("Run...");
  window.editorHTML = ace.edit("coderHTML");
  window.editorCSS = ace.edit("coderCSS");
  window.editorJS = ace.edit("coderJS");
  editorHTML.setTheme("ace/theme/nord_dark");
  editorCSS.setTheme("ace/theme/nord_dark");
  editorJS.setTheme("ace/theme/nord_dark");
  editorHTML.session.setMode("ace/mode/html");
  editorCSS.session.setMode("ace/mode/css");
  editorJS.session.setMode("ace/mode/javascript");

  editorHTML.setShowPrintMargin(false);
  editorCSS.setShowPrintMargin(false);
  editorJS.setShowPrintMargin(false);

  editorHTML.getSession().on("change", function () {
    update();
  });
  editorCSS.getSession().on("change", function () {
    update();
  });
  editorJS.getSession().on("change", function () {
    update();
  });
  if (localStorage.getItem("weber-html-code-lc-store") != null) {
    editorHTML.setValue(localStorage.getItem("weber-html-code-lc-store"), 1);
    editorCSS.setValue(localStorage.getItem("weber-css-code-lc-store"), 1);
    editorJS.setValue(localStorage.getItem("weber-js-code-lc-store"), 1);
  } else {
    editorHTML.setValue(
      `<!DOCTYPE html>
  <html>
      <head>
          <title>Website Title</title>
      </head>
  
      <body>
  
      </body>
  
  </html>`,
      1
    );
    editorCSS.setValue(
      `body{
        
  }`,
      1
    );
    editorJS.setValue(
      `//javascript goes here
    `,
      1
    );
  }
  window.setInterval(() => {
    let output = document.querySelector(".output").contentWindow.document;
    output.open();
    output.write(
      "<style>" +
        editorCSS.getValue() +
        "</style>" +
        editorHTML.getValue() +
        "<script>" +
        editorJS.getValue() +
        "</script>"
    );
    output.close();
  }, 500);
};
function update() {}

window.addEventListener("keyup", (e) => {
  localStorage.setItem("weber-html-code-lc-store", editorHTML.getValue());
  localStorage.setItem("weber-css-code-lc-store", editorCSS.getValue());
  localStorage.setItem("weber-js-code-lc-store", editorJS.getValue());
});
window.addEventListener("keypress", () => {
  document.querySelector(".output").contentWindow.location.reload(true);
});

//tab switch
document.querySelector(".tab.html").addEventListener("click", function () {
  document.querySelector(".tab.html").classList.add("selected");
  document.querySelector(".tab.css").classList.remove("selected");
  document.querySelector(".tab.js").classList.remove("selected");

  document.querySelector(".coder.html").classList.add("show");
  document.querySelector(".coder.css").classList.remove("show");
  document.querySelector(".coder.js").classList.remove("show");
});
document.querySelector(".tab.css").addEventListener("click", function () {
  document.querySelector(".tab.html").classList.remove("selected");
  document.querySelector(".tab.css").classList.add("selected");
  document.querySelector(".tab.js").classList.remove("selected");

  document.querySelector(".coder.html").classList.remove("show");
  document.querySelector(".coder.css").classList.add("show");
  document.querySelector(".coder.js").classList.remove("show");
});
document.querySelector(".tab.js").addEventListener("click", function () {
  document.querySelector(".tab.html").classList.remove("selected");
  document.querySelector(".tab.css").classList.remove("selected");
  document.querySelector(".tab.js").classList.add("selected");

  document.querySelector(".coder.html").classList.remove("show");
  document.querySelector(".coder.css").classList.remove("show");
  document.querySelector(".coder.js").classList.add("show");
});
