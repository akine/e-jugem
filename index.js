// フォームの入力内容を取得する
const jugemText = document.querySelector("#jugemText");
jugemText.addEventListener('input', handleChange);

function handleChange(event) {
  const value = event.target.value;
  document.querySelector(".jugemOut").innerHTML = value;
}

// Timer