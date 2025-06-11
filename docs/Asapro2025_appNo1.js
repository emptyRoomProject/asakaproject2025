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

    // 建物の開閉処理（複数同時開閉 + アニメーション）
    const buildingButtons = document.querySelectorAll(".building-item");

    buildingButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.dataset.target;
            const detail = document.getElementById(targetId);
            const arrow = btn.querySelector(".arrow");

            if (detail.classList.contains("open")) {
                // 閉じる
                detail.style.maxHeight = null;
                detail.classList.remove("open");
                arrow.textContent = "▼";
            } else {
                // 開く
                detail.style.maxHeight = detail.scrollHeight + "px";
                detail.classList.add("open");
                arrow.textContent = "▲";
            }
        });
    });
});
