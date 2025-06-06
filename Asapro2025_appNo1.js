document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openFilter");
  const closeBtn = document.getElementById("closeFilter");
  const modal = document.getElementById("filterModal");
  // 建物折りたたみ展開処理
const buildingButtons = document.querySelectorAll(".building-item");

buildingButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const detail = document.getElementById(targetId);
    const arrow = btn.querySelector(".arrow");

    // 他を閉じる（必要であれば）
    document.querySelectorAll(".building-detail").forEach(div => {
      if (div.id !== targetId) div.style.display = "none";
    });
    document.querySelectorAll(".arrow").forEach(a => {
      if (a !== arrow) a.textContent = "▼";
    });

    if (detail.style.display === "block") {
      detail.style.display = "none";
      arrow.textContent = "▼";
    } else {
      detail.style.display = "block";
      arrow.textContent = "▲";
    }
  });
});


  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // モーダル外をクリックしたときに閉じる
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
