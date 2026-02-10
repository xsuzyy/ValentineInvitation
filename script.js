$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_yes = $("#openBtn");
    var modal = $("#myModal"); // jQuery reference for the modal

    // Initial state
    btn_reset.hide();
    btn_yes.hide();

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        btn_open.hide();
        btn_reset.show();
        btn_yes.show();
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        btn_open.show();
        btn_reset.hide();
        btn_yes.hide();
        
        // This line closes the modal when "Close" is clicked
        modal.fadeOut(300); 
    }
});

/* Keep your existing Modal "Yes" button and "X" logic below */
const modalElem = document.getElementById("myModal");
const btn = document.getElementById("openBtn");
const span = document.querySelector(".close");

btn.onclick = function() {
  modalElem.style.display = "block";
}

span.onclick = function() {
  modalElem.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalElem) {
    modalElem.style.display = "none";
  }
}