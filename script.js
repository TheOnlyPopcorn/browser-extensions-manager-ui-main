const themeButton = document.getElementById('themeButton');
const checkboxes = document.querySelectorAll('.check input');
const active = document.querySelector('.active');
const all = document.querySelector('.all');
const inactive = document.querySelector('.inactive');


themeButton.addEventListener('click', () => {
    if (document.getElementById("themeButton").classList.contains("Sun")) {
    document.querySelectorAll("#head, #body, #listItems, #card, #removeButton, #extentionList, #text, #themeButton").forEach(element => {
        if (element.id === "head") element.setAttribute("class", "lightHead");
        if (element.id === "body") element.setAttribute("class", "lightBody");
        if (element.id === "listItems") element.setAttribute("class", "lightList");
        if (element.id === "card") element.setAttribute("class", "lightCard");
        if (element.id === "removeButton") element.setAttribute("class", "lightRemove");
        if (element.id === "extentionList") element.setAttribute("style", "color: black;");
        if (element.id === "text") element.setAttribute("style", "color: black;");
        if (element.id === "themeButton") element.setAttribute("class", "moon");
    });
    } else {
    document.querySelectorAll("#head, #body, #listItems, #card, #removeButton, #extentionList, #text, #themeButton").forEach(element => {
        if (element.id === "head") element.setAttribute("class", "darkHead");
        if (element.id === "body") element.setAttribute("class", "darkBody");
        if (element.id === "listItems") element.setAttribute("class", "darkList");
        if (element.id === "card") element.setAttribute("class", "darkCard");
        if (element.id === "removeButton") element.setAttribute("class", "darkRemove");
        if (element.id === "extentionList") element.setAttribute("style", "color: white;");
        if (element.id === "text") element.setAttribute("style", "color: white;");
        if (element.id === "themeButton") element.setAttribute("class", "Sun");
    });
    }
    });

  Array.from(checkboxes).forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        checkbox.parentElement.parentElement.parentElement.classList.add("active"); 
      } else {
        checkbox.parentElement.parentElement.parentElement.classList.remove("active"); 

      }
    });
  });

all.addEventListener('click', () => {
  Array.from(checkboxes).forEach(checkbox => {
    checkbox.parentElement.parentElement.parentElement.style.display = "grid";
  });
});

active.addEventListener('click', () => {
  Array.from(checkboxes).forEach(checkbox => {
    if (checkbox.checked) {
      checkbox.parentElement.parentElement.parentElement.style.display = "grid";
    } else {
      checkbox.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
});

inactive.addEventListener('click', () => {
  Array.from(checkboxes).forEach(checkbox => {
    if (!checkbox.checked) {
      checkbox.parentElement.parentElement.parentElement.style.display = "grid";
    } else {
      checkbox.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
});
