import "./App.css";
import React from "react";

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D1");
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
  var txt = document.createTextNode("\u00D1");
  span.className = "newItem";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function App() {
  return (
    <div className="toDo">
      <h1>ToDo List</h1>
      <form>
        <h2 className="label-wrapper">
          <label for="new-to-do" className="label__lg">
            Items That Need To Be Completed
          </label>
        </h2>
        <input
          type="text"
          id="new-to-do"
          name="text"
          autoComplete="off"
        />
        <span onClick="newItem()" className="addBtn">
          Add
        </span>
        {/* <Add /> */}
      </form>
      <ul class="List">
        <li>Kid Drop-Off</li>
        <li>Wash Clothes</li>
        <li>Dr.Appointment</li>
        <li>Clean</li>
        <li>Computer Time</li>
        <li>Pay Bills</li>
        <li>Look for Program</li>
      </ul>
    </div>
  );
}

export { App, Add };
