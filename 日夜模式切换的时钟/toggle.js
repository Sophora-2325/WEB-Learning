// 获取DOM元素
const timeEL = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector("#modeToggle");
const body = document.body;

const weekdays = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
function updateTime() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  timeEL.textContent = `${hours}:${minutes}:${seconds}`;

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();
  dateEl.textContent = `${weekdays[day]},${year}年${month}月${date}日`;
}

toggleEl.addEventListener("click", () => {
  body.classList.toggle("night"); // 切换body的night类 toggle的工作原理是没有这个类就添加上这个类，如果有就删除掉
  if (body.classList.contains("night")) {
    toggleEl.textContent = "切换日间模式";
  } else {
    toggleEl.textContent = "切换夜间模式";
  }
});
updateTime();

setInterval(updateTime, 1000);
