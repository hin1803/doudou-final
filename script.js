
const app = document.getElementById("app");
app.innerHTML = "<h1>欢迎来到豆豆圣经答题游戏！</h1>";
setTimeout(renderQuestion, 1500); // 延迟1.5秒进入游戏
const questions = [
  {
    q: "耶稣出生在哪座城市？",
    options: ["耶路撒冷", "拿撒勒", "伯利恒", "加利利"],
    answer: 2,
    image: "images/q1.jpg"
  },
  {
    q: "神是如何帮助以色列人过红海的？",
    options: ["烧干了", "冻住了", "分开了", "游过去"],
    answer: 2,
    image: "images/q2.jpg"
  }
];
let current = 0;
let score = 0;

function renderQuestion() {
  const q = questions[current];
  app.innerHTML = `
    <h2>${q.q}</h2>
    <img src="${q.image}" class="image" />
    ${q.options.map((opt, i) =>
      `<div><button onclick="choose(${i})">${String.fromCharCode(65 + i)}. ${opt}</button></div>`
    ).join("")}
  `;
}


function choose(i) {
  if (i === questions[current].answer) {
    alert("答对啦！");
    score++;
  } else {
    alert("答错了！");
  }
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    app.innerHTML = \`<h2>完成啦！你得了 \${score} 分</h2>
    <img src="images/final.jpg" class="image" />\`;
  }
}

renderQuestion();
