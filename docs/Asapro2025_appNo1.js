document.addEventListener("DOMContentLoaded", () => {
    // フィルター・モーダル開閉動作
    const openBtn = document.getElementById("openFilter");
    const closeBtn = document.getElementById("closeFilter");
    const modal = document.getElementById("filterModal");

    openBtn.addEventListener("click", () => modal.style.display = "flex");
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", e => {
        if (e.target === modal) modal.style.display = "none";
    });

    // 建物（号館）のスライド開閉処理
    const buttons = document.querySelectorAll(".building-item");
    buttons.forEach(btn => {
        const targetId = btn.dataset.target;
        const detail = document.getElementById(targetId);
        const arrow = btn.querySelector(".arrow");

        btn.addEventListener("click", () => {
            // スライド開閉
            if (detail.classList.contains("open")) {
                detail.style.maxHeight = "0";
                detail.classList.remove("open");
                arrow.textContent = "▼";
            } else {
                detail.style.maxHeight = detail.scrollHeight + "px";
                detail.classList.add("open");
                arrow.textContent = "▲";
            }
        });
    });
});
