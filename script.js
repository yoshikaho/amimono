console.log("JS読み込まれてるよ");



const form = document.getElementById("yarnForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // フォームからデータ取得
  const yarnData = {
    id: Date.now().toString(), // 仮ID（あとで変更可）
    name: form.name.value.trim(),
    brand: form.brand.value.trim(),
    thickness: form.thickness.value.trim(),
    length: form.length.value.trim(),
    material: form.material.value.trim(),
    hookSize: form.hookSize.value.trim(),
    color: form.color.value.trim(),
    shop: form.shop.value.trim(),
    memo: form.memo.value.trim(),
    photo: form.photo.files[0]?.name || ""
  };

  // 商品名チェック（必須）
  if (!yarnData.name) {
    alert("商品名は必須だよ🧶");
    return;
  }

  // 既存データ読み込み
  const saved = JSON.parse(localStorage.getItem("yarnList") || "[]");

  // 追加
  saved.push(yarnData);

  // 保存
  localStorage.setItem("yarnList", JSON.stringify(saved));

  console.log("保存したデータ:", yarnData);

  // フォームリセット
  form.reset();

  alert("毛糸追加したよ✨");
});

renderYarnList();



const listView = document.getElementById("yarnListView");

function renderYarnList() {
  const saved = JSON.parse(localStorage.getItem("yarnList") || "[]");

  listView.innerHTML = "";

  saved.forEach(yarn => {
    const div = document.createElement("div");
    div.textContent = `🧶 ${yarn.name} / ${yarn.brand || ""}`;
    listView.appendChild(div);
  });
}

// ページ開いた時に表示
renderYarnList();
