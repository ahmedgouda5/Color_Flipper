const randomColor = [
  "#ff7f50",
  "#87cefa",
  "#da70d6",
  "#32cd32",
  "#6495ed",
  "#ff69b4",
  "#ba55d3",
  "#cd5c5c",
  "#ffa500",
  "#40e0d0",
];

$("button").on("click",function(){
  const random = randomColor[Math.floor(Math.random() * randomColor.length)];
  $("body").css("background-color", `${random}`);
  $(".hexCode").html(random)
});
