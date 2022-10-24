import React from "react";

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

function Add() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Add to List?");
  } else {
    document.getElementById("List").appendChild(li);
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "addBtn";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < a.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

export default Add;
