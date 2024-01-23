let index = 0;

function changeColors() {
  let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "indigo",
    "purple",
    "pink",
    "khaki",
    "cyan",
    "magenta",
  ];

  document.getElementsByTagName("body")[0].style.backgroundColor =
    colors[index++];

  if (index > colors.length - 1) index = 0;
}
