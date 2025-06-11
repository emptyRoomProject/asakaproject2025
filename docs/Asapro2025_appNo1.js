// Asapro2025_appNo1.js

document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("openFilter");
    const closeBtn = document.getElementById("closeFilter");
    const modal = document.getElementById("filterModal");

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // 建物の開閉処理
    const buildingButtons = document.querySelectorAll(".building-item");

    buildingButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.dataset.target;
            const detail = document.getElementById(targetId);
            const arrow = btn.querySelector(".arrow");

            // 他の詳細を閉じる（開閉がトグル式ではなく単独表示したい場合）
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
});
