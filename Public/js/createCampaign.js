const btn = document.querySelector('#valider');


btn.addEventListener('click', fu);


function fu() {
    const opened = window.open("");
    opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
  }