const getcolor = function () {
  const rannumber = Math.floor(Math.random() * 16777215);
  const randomcode = "#" + rannumber.toString(16);

  document.body.style.backgroundColor = randomcode;
  navigator.clipboard.writeText(randomcode);

  document.getElementById("btn").addEventListener("click", getcolor);
};
getcolor();
