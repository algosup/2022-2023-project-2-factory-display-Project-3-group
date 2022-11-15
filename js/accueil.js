
function searchFunction() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("ecranSeul");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const html = document.querySelector("body");

  function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    html.style.overflow = "hidden";
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    html.style.overflow = "scroll";

  }

  
