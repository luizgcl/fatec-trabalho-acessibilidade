document.addEventListener("keydown", (e) => {
  if (e.code === "Digit0") {
    if (document.getElementById("ac_menu").style.display != "flex")
      document.getElementById("ac_menu").style.display = "flex";
    else document.getElementById("ac_menu").style.display = "none";
  }

  if (e.code === "Digit1") {
    location.href = "#start";
  }

  if (e.code === "Digit2") {
    location.href = "#about";
  }

  if (e.code === "Digit3") {
    location.href = "#contact";
  }
});

document.getElementById("aumentar-fonte").addEventListener("click", () => {
  document.querySelectorAll("p").forEach((element) => {
    if (element.style.fontSize.includes("px")) {
      element.style.fontSize = `${parseInt(element.style.fontSize) / 16}rem`;
    }
    const fontSize = element.style.fontSize;

    element.style.fontSize = `${parseFloat(fontSize) + 0.15}rem`;
  });
});

document.getElementById("reduzir-fonte").addEventListener("click", () => {
  document.querySelectorAll("p").forEach((element) => {
    if (element.style.fontSize.includes("px")) {
      element.style.fontSize = `${parseInt(element.style.fontSize) / 16}rem`;
    }
    const fontSize = element.style.fontSize;

    element.style.fontSize = `${parseFloat(fontSize) - 0.15}rem`;
  });
});

document.getElementById("reset-zoom").addEventListener("click", () => {
  document.querySelectorAll("p").forEach((element) => {
    element.style.fontSize = `1rem`;
  });
});

document.getElementById("high-contrast").addEventListener("click", () => {
  document.querySelectorAll("section").forEach((element) => {
    element.style.color = `#FEFEFE`;
    element.style.backgroundColor = `#000`;
    element.style.padding = `0.5rem`;
    element.style.borderRadius = `1rem`;
  });
  document
    .querySelectorAll("button, #ac_menu, #ac_menu a")
    .forEach((element) => {
      element.classList.add("high-contrast");
    });
});

document.getElementById("original-color").addEventListener("click", () => {
  document.querySelectorAll("section").forEach((element) => {
    element.style.color = `#2A2A2A`;
    element.style.backgroundColor = `#FEFEFE`;
    element.style.padding = "";
    element.style.borderRadius = "";
  });
  document
    .querySelectorAll("button, #ac_menu, #ac_menu a")
    .forEach((element) => {
      element.classList.remove("high-contrast");
    });
});
