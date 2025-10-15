document.addEventListener("DOMContentLoaded", function () {
    // フィルターモーダルの開閉処理
    const openFilter = document.getElementById("openFilter");
    const closeFilter = document.getElementById("closeFilter");
    const filterModal = document.getElementById("filterModal");

    openFilter.addEventListener("click", () => {
        filterModal.style.display = "flex";
    });

    closeFilter.addEventListener("click", () => {
        filterModal.style.display = "none";
    });

    // ページ全体切り替え
    const homePage = document.getElementById("homePage");
    const settingPage = document.getElementById("settingPage");
    const openSetting = document.getElementById("openSetting");
    const backHome = document.getElementById("backHome");

    openSetting.addEventListener("click", () => {
        homePage.classList.remove("active");
        settingPage.classList.add("active");
    });

    backHome.addEventListener("click", () => {
        settingPage.classList.remove("active");
        homePage.classList.add("active");
    });

    // 設定ページ内の切り替え
    const subPages = document.querySelectorAll(".sub-page");
    const menuBtns = document.querySelectorAll(".menu-btn");
    const backBtns = document.querySelectorAll(".back-btn");

    function showSubpage(subpageId) {
        subPages.forEach(p => p.classList.remove("active"));
        document.getElementById(subpageId).classList.add("active");
    }

    menuBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.target;
            showSubpage(target);
        });
    });

    backBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            showSubpage("menuPage");
        });
    });


    // 教室モーダルをセットアップする共通関数
    function setupModal(modalId, openBtnId, closeBtnId) {
        const openBtn = document.getElementById(openBtnId);
        const closeBtn = document.getElementById(closeBtnId);
        const modal = document.getElementById(modalId);

        // このモーダル内のタブとパネルだけを取得
        const panels = modal.querySelectorAll('.tab-panel');
        const tabContainers = modal.querySelectorAll('.tabs > div');

        // モーダルを開く
        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.classList.add('modal-open');

            // 初期化
            tabContainers.forEach(c => c.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // 先頭タブをアクティブ化
            const firstContainer = tabContainers[0];
            const firstButton = firstContainer.querySelector('button');
            const firstTarget = modal.querySelector(`#${firstButton.dataset.target}`);

            if (firstContainer && firstButton && firstTarget) {
                firstContainer.classList.add('active');
                firstTarget.classList.add('active');
            }
        });

        // 教室モーダルを閉じる
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        });

        // タブ切り替え
        tabContainers.forEach(container => {
            const button = container.querySelector('button');
            button.addEventListener('click', () => {
                // このモーダル内だけをリセット
                tabContainers.forEach(c => c.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                // クリックされたタブをアクティブ化
                container.classList.add('active');
                const target = modal.querySelector(`#${button.dataset.target}`);
                if (target) target.classList.add('active');
            });
        });
    }

    //空き情報カウント
    let classCount = 0;
    let freeCount = 0;

    const btnClass = document.getElementById("btnClass");
    const btnFree = document.getElementById("btnFree");
    const countClass = document.getElementById("countClass");
    const countFree = document.getElementById("countFree");

    btnClass.addEventListener("click", () => {
        classCount++;
        countClass.textContent = classCount;
    });

    btnFree.addEventListener("click", () => {
        freeCount++;
        countFree.textContent = freeCount;
    });

    //空き情報カウント
    let garagaraCount = 0;
    let sukunameCount = 0;
    let hutsuCount = 0;
    let konzatsuCount = 0;

    const btnGaragara = document.getElementById("btnGaragara");
    const btnSukuname = document.getElementById("btnSukuname");
    const btnHutsu = document.getElementById("btnHutsu");
    const btnKonzatsu = document.getElementById("btnKonzatsu");
    const countGaragara = document.getElementById("countGaragara");
    const countSukuname = document.getElementById("countSukuname");
    const countHutsu = document.getElementById("countHutsu");
    const countKonzatsu = document.getElementById("countKonzatsu");

    btnGaragara.addEventListener("click", () => {
        garagaraCount++;
        countGaragara.textContent = garagaraCount;
    });

    btnSukuname.addEventListener("click", () => {
        sukunameCount++;
        countSukuname.textContent = sukunameCount;
    });

    btnHutsu.addEventListener("click", () => {
        hutsuCount++;
        countHutsu.textContent = hutsuCount;
    });

    btnKonzatsu.addEventListener("click", () => {
        konzatsuCount++;
        countKonzatsu.textContent = konzatsuCount;
    });

    // モーダルごとに呼び出す
    setupModal('detail114', 'open114', 'close114');
    setupModal('detail117', 'open117', 'close117');
    setupModal('detail118', 'open118', 'close118');
    setupModal('detailLabo1', 'openLabo1', 'closeLabo1');
    setupModal('detailLabo2', 'openLabo2', 'closeLabo2');
    setupModal('detailLabo3', 'openLabo3', 'closeLabo3');
    setupModal('detail121', 'open121', 'close121');
    setupModal('detail122', 'open122', 'close122');
    setupModal('detail123', 'open123', 'close123');
    setupModal('detail124', 'open124', 'close124');
    setupModal('detail125', 'open125', 'close125');
    setupModal('detail131', 'open131', 'close131');
    setupModal('detail132', 'open132', 'close132');
    setupModal('detail133', 'open133', 'close133');
    setupModal('detail201', 'open201', 'close201');
    setupModal('detail202', 'open202', 'close202');
    setupModal('detail211', 'open211', 'close211');
    setupModal('detail221', 'open221', 'close221');
    setupModal('detail222', 'open222', 'close222');
    setupModal('detail223', 'open223', 'close223');
    setupModal('detail224', 'open224', 'close224');
    setupModal('detail225', 'open225', 'close225');
    setupModal('detail226', 'open226', 'close226');
    setupModal('detail227', 'open227', 'close227');
    setupModal('detail331', 'open331', 'close331');
    setupModal('detail332', 'open332', 'close332');
    setupModal('detail333', 'open333', 'close333');
    setupModal('detail334', 'open334', 'close334');
    setupModal('detail335', 'open335', 'close335');
    setupModal('detail336', 'open336', 'close336');
    setupModal('detail337', 'open337', 'close337');
    setupModal('detail338', 'open338', 'close338');
    setupModal('detail339', 'open339', 'close339');

    // コメント機能のセットアップ関数
    function setupComments(postBtnId, textareaId, listId) {
        const postBtn = document.getElementById(postBtnId);
        const textarea = document.getElementById(textareaId);
        const commentList = document.getElementById(listId);

        const detailBody = commentList.closest('.detail-body');

        postBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const text = textarea.value.trim();
            if (text === "") return;

            // コメント要素作成
            const item = document.createElement('div');
            item.className = 'comment-item';

            item.innerHTML = `
            <div class="comment-content">
                <div class="comment-text">${text}</div>
                <div class="comment-meta">
                    <span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <button class="like-btn">♡</button>
                    <span class="like-count">0</span>
                </div>
            </div>
        `;

            commentList.appendChild(item);
            textarea.value = "";

            setTimeout(() => {
                if (detailBody) {
                    detailBody.scrollTop = detailBody.scrollHeight;
                }
            }, 10);

            // いいねボタン処理
            const likeBtn = item.querySelector('.like-btn');
            const likeCount = item.querySelector('.like-count');
            let liked = false;

            likeBtn.addEventListener('click', () => {
                liked = !liked;
                likeBtn.textContent = liked ? '❤' : '♡';
                likeBtn.classList.toggle('liked', liked);
                likeCount.textContent = liked
                    ? Number(likeCount.textContent) + 1
                    : Number(likeCount.textContent) - 1;
            });
        });
    }

    // コメント機能をモーダルごとにセットアップ
    setupComments('postBtn114', 'comments114', 'commentList114');



    /*
    
        // 410モーダルの開閉処理
        const open410 = document.getElementById("open410");
        const close410 = document.getElementById("close410");
        const detail410 = document.getElementById("detail410");
    
        open410.addEventListener("click", () => {
            detail410.style.display = "flex";
        });
        close410.addEventListener("click", () => {
            detail410.style.display = "none";
        });
    
        // 420モーダルの開閉処理
        const open420 = document.getElementById("open420");
        const close420 = document.getElementById("close420");
        const detail420 = document.getElementById("detail420");
    
        open420.addEventListener("click", () => {
            detail420.style.display = "flex";
        });
        close420.addEventListener("click", () => {
            detail420.style.display = "none";
        });
    
        // 421モーダルの開閉処理
        const open421 = document.getElementById("open421");
        const close421 = document.getElementById("close421");
        const detail421 = document.getElementById("detail421");
    
        open421.addEventListener("click", () => {
            detail421.style.display = "flex";
        });
        close421.addEventListener("click", () => {
            detail421.style.display = "none";
        });
    
        // 422モーダルの開閉処理
        const open422 = document.getElementById("open422");
        const close422 = document.getElementById("close422");
        const detail422 = document.getElementById("detail422");
    
        open422.addEventListener("click", () => {
            detail422.style.display = "flex";
        });
        close422.addEventListener("click", () => {
            detail422.style.display = "none";
        });
    
        // 423モーダルの開閉処理
        const open423 = document.getElementById("open423");
        const close423 = document.getElementById("close423");
        const detail423 = document.getElementById("detail423");
    
        open423.addEventListener("click", () => {
            detail423.style.display = "flex";
        });
        close423.addEventListener("click", () => {
            detail423.style.display = "none";
        });
    
        // 424モーダルの開閉処理
        const open424 = document.getElementById("open424");
        const close424 = document.getElementById("close424");
        const detail424 = document.getElementById("detail424");
    
        open424.addEventListener("click", () => {
            detail424.style.display = "flex";
        });
        close424.addEventListener("click", () => {
            detail424.style.display = "none";
        });
    
        // 425モーダルの開閉処理
        const open425 = document.getElementById("open425");
        const close425 = document.getElementById("close425");
        const detail425 = document.getElementById("detail425");
    
        open425.addEventListener("click", () => {
            detail425.style.display = "flex";
        });
        close425.addEventListener("click", () => {
            detail425.style.display = "none";
        });
    
        // 426モーダルの開閉処理
        const open426 = document.getElementById("open426");
        const close426 = document.getElementById("close426");
        const detail426 = document.getElementById("detail426");
    
        open426.addEventListener("click", () => {
            detail426.style.display = "flex";
        });
        close426.addEventListener("click", () => {
            detail426.style.display = "none";
        });
    
        // 427モーダルの開閉処理
        const open427 = document.getElementById("open427");
        const close427 = document.getElementById("close427");
        const detail427 = document.getElementById("detail427");
    
        open427.addEventListener("click", () => {
            detail427.style.display = "flex";
        });
        close427.addEventListener("click", () => {
            detail427.style.display = "none";
        });
    
        // 428モーダルの開閉処理
        const open428 = document.getElementById("open428");
        const close428 = document.getElementById("close428");
        const detail428 = document.getElementById("detail428");
    
        open428.addEventListener("click", () => {
            detail428.style.display = "flex";
        });
        close428.addEventListener("click", () => {
            detail428.style.display = "none";
        });
    
        // 429モーダルの開閉処理
        const open429 = document.getElementById("open429");
        const close429 = document.getElementById("close429");
        const detail429 = document.getElementById("detail429");
    
        open429.addEventListener("click", () => {
            detail429.style.display = "flex";
        });
        close429.addEventListener("click", () => {
            detail429.style.display = "none";
        });
    
        // 44aモーダルの開閉処理
        const open44a = document.getElementById("open44a");
        const close44a = document.getElementById("close44a");
        const detail44a = document.getElementById("detail44a");
    
        open44a.addEventListener("click", () => {
            detail44a.style.display = "flex";
        });
        close44a.addEventListener("click", () => {
            detail44a.style.display = "none";
        });
    
        // 44bモーダルの開閉処理
        const open44b = document.getElementById("open44b");
        const close44b = document.getElementById("close44b");
        const detail44b = document.getElementById("detail44b");
    
        open44b.addEventListener("click", () => {
            detail44b.style.display = "flex";
        });
        close44b.addEventListener("click", () => {
            detail44b.style.display = "none";
        });
    
        // 511モーダルの開閉処理
        const open511 = document.getElementById("open511");
        const close511 = document.getElementById("close511");
        const detail511 = document.getElementById("detail511");
    
        open511.addEventListener("click", () => {
            detail511.style.display = "flex";
        });
        close511.addEventListener("click", () => {
            detail511.style.display = "none";
        });
    
        // 521モーダルの開閉処理
        const open521 = document.getElementById("open521");
        const close521 = document.getElementById("close521");
        const detail521 = document.getElementById("detail521");
    
        open521.addEventListener("click", () => {
            detail521.style.display = "flex";
        });
        close521.addEventListener("click", () => {
            detail521.style.display = "none";
        });
    
        // 522モーダルの開閉処理
        const open522 = document.getElementById("open522");
        const close522 = document.getElementById("close522");
        const detail522 = document.getElementById("detail522");
    
        open522.addEventListener("click", () => {
            detail522.style.display = "flex";
        });
        close522.addEventListener("click", () => {
            detail522.style.display = "none";
        });
    
        // 523モーダルの開閉処理
        const open523 = document.getElementById("open523");
        const close523 = document.getElementById("close523");
        const detail523 = document.getElementById("detail523");
    
        open523.addEventListener("click", () => {
            detail523.style.display = "flex";
        });
        close523.addEventListener("click", () => {
            detail523.style.display = "none";
        });
    
        // 524モーダルの開閉処理
        const open524 = document.getElementById("open524");
        const close524 = document.getElementById("close524");
        const detail524 = document.getElementById("detail524");
    
        open524.addEventListener("click", () => {
            detail524.style.display = "flex";
        });
        close524.addEventListener("click", () => {
            detail524.style.display = "none";
        });
    
        // 525モーダルの開閉処理
        const open525 = document.getElementById("open525");
        const close525 = document.getElementById("close525");
        const detail525 = document.getElementById("detail525");
    
        open525.addEventListener("click", () => {
            detail525.style.display = "flex";
        });
        close525.addEventListener("click", () => {
            detail525.style.display = "none";
        });
    
        // 526モーダルの開閉処理
        const open526 = document.getElementById("open526");
        const close526 = document.getElementById("close526");
        const detail526 = document.getElementById("detail526");
    
        open526.addEventListener("click", () => {
            detail526.style.display = "flex";
        });
        close526.addEventListener("click", () => {
            detail526.style.display = "none";
        });
    
        // 527モーダルの開閉処理
        const open527 = document.getElementById("open527");
        const close527 = document.getElementById("close527");
        const detail527 = document.getElementById("detail527");
    
        open527.addEventListener("click", () => {
            detail527.style.display = "flex";
        });
        close527.addEventListener("click", () => {
            detail527.style.display = "none";
        });
    
        // 528モーダルの開閉処理
        const open528 = document.getElementById("open528");
        const close528 = document.getElementById("close528");
        const detail528 = document.getElementById("detail528");
    
        open528.addEventListener("click", () => {
            detail528.style.display = "flex";
        });
        close528.addEventListener("click", () => {
            detail528.style.display = "none";
        });
    
        // 51モーダルの開閉処理
        const open51 = document.getElementById("open51");
        const close51 = document.getElementById("close51");
        const detail51 = document.getElementById("detail51");
    
        open51.addEventListener("click", () => {
            detail51.style.display = "flex";
        });
        close51.addEventListener("click", () => {
            detail51.style.display = "none";
        });
    
        // 52モーダルの開閉処理
        const open52 = document.getElementById("open52");
        const close52 = document.getElementById("close52");
        const detail52 = document.getElementById("detail52");
    
        open52.addEventListener("click", () => {
            detail52.style.display = "flex";
        });
        close52.addEventListener("click", () => {
            detail52.style.display = "none";
        });
    
        // 53モーダルの開閉処理
        const open53 = document.getElementById("open53");
        const close53 = document.getElementById("close53");
        const detail53 = document.getElementById("detail53");
    
        open53.addEventListener("click", () => {
            detail53.style.display = "flex";
        });
        close53.addEventListener("click", () => {
            detail53.style.display = "none";
        });
    
        // 54モーダルの開閉処理
        const open54 = document.getElementById("open54");
        const close54 = document.getElementById("close54");
        const detail54 = document.getElementById("detail54");
    
        open54.addEventListener("click", () => {
            detail54.style.display = "flex";
        });
        close54.addEventListener("click", () => {
            detail54.style.display = "none";
        });
    
        // 55モーダルの開閉処理
        const open55 = document.getElementById("open55");
        const close55 = document.getElementById("close55");
        const detail55 = document.getElementById("detail55");
    
        open55.addEventListener("click", () => {
            detail55.style.display = "flex";
        });
        close55.addEventListener("click", () => {
            detail55.style.display = "none";
        });
    
        // 56モーダルの開閉処理
        const open56 = document.getElementById("open56");
        const close56 = document.getElementById("close56");
        const detail56 = document.getElementById("detail56");
    
        open56.addEventListener("click", () => {
            detail56.style.display = "flex";
        });
        close56.addEventListener("click", () => {
            detail56.style.display = "none";
        });
    
        // 701モーダルの開閉処理
        const open701 = document.getElementById("open701");
        const close701 = document.getElementById("close701");
        const detail701 = document.getElementById("detail701");
    
        open701.addEventListener("click", () => {
            detail701.style.display = "flex";
        });
        close701.addEventListener("click", () => {
            detail701.style.display = "none";
        });
    
        // 702モーダルの開閉処理
        const open702 = document.getElementById("open702");
        const close702 = document.getElementById("close702");
        const detail702 = document.getElementById("detail702");
    
        open702.addEventListener("click", () => {
            detail702.style.display = "flex";
        });
        close702.addEventListener("click", () => {
            detail702.style.display = "none";
        });
    
        // 711モーダルの開閉処理
        const open711 = document.getElementById("open711");
        const close711 = document.getElementById("close711");
        const detail711 = document.getElementById("detail711");
    
        open711.addEventListener("click", () => {
            detail711.style.display = "flex";
        });
        close711.addEventListener("click", () => {
            detail711.style.display = "none";
        });
    
        // 712モーダルの開閉処理
        const open712 = document.getElementById("open712");
        const close712 = document.getElementById("close712");
        const detail712 = document.getElementById("detail712");
    
        open712.addEventListener("click", () => {
            detail712.style.display = "flex";
        });
        close712.addEventListener("click", () => {
            detail712.style.display = "none";
        });
    
        // 713モーダルの開閉処理
        const open713 = document.getElementById("open713");
        const close713 = document.getElementById("close713");
        const detail713 = document.getElementById("detail713");
    
        open713.addEventListener("click", () => {
            detail713.style.display = "flex";
        });
        close713.addEventListener("click", () => {
            detail713.style.display = "none";
        });
    
        // 714モーダルの開閉処理
        const open714 = document.getElementById("open714");
        const close714 = document.getElementById("close714");
        const detail714 = document.getElementById("detail714");
    
        open714.addEventListener("click", () => {
            detail714.style.display = "flex";
        });
        close714.addEventListener("click", () => {
            detail714.style.display = "none";
        });
    
        // 721モーダルの開閉処理
        const open721 = document.getElementById("open721");
        const close721 = document.getElementById("close721");
        const detail721 = document.getElementById("detail721");
    
        open721.addEventListener("click", () => {
            detail721.style.display = "flex";
        });
        close721.addEventListener("click", () => {
            detail721.style.display = "none";
        });
    
        // 722モーダルの開閉処理
        const open722 = document.getElementById("open722");
        const close722 = document.getElementById("close722");
        const detail722 = document.getElementById("detail722");
    
        open722.addEventListener("click", () => {
            detail722.style.display = "flex";
        });
        close722.addEventListener("click", () => {
            detail722.style.display = "none";
        });
    
        // 723モーダルの開閉処理
        const open723 = document.getElementById("open723");
        const close723 = document.getElementById("close723");
        const detail723 = document.getElementById("detail723");
    
        open723.addEventListener("click", () => {
            detail723.style.display = "flex";
        });
        close723.addEventListener("click", () => {
            detail723.style.display = "none";
        });
    
        // 724モーダルの開閉処理
        const open724 = document.getElementById("open724");
        const close724 = document.getElementById("close724");
        const detail724 = document.getElementById("detail724");
    
        open724.addEventListener("click", () => {
            detail724.style.display = "flex";
        });
        close724.addEventListener("click", () => {
            detail724.style.display = "none";
        });
    
        // 725モーダルの開閉処理
        const open725 = document.getElementById("open725");
        const close725 = document.getElementById("close725");
        const detail725 = document.getElementById("detail725");
    
        open725.addEventListener("click", () => {
            detail725.style.display = "flex";
        });
        close725.addEventListener("click", () => {
            detail725.style.display = "none";
        });
    
        // 70モーダルの開閉処理
        const open70 = document.getElementById("open70");
        const close70 = document.getElementById("close70");
        const detail70 = document.getElementById("detail70");
    
        open70.addEventListener("click", () => {
            detail70.style.display = "flex";
        });
        close70.addEventListener("click", () => {
            detail70.style.display = "none";
        });
    
        // 71モーダルの開閉処理
        const open71 = document.getElementById("open71");
        const close71 = document.getElementById("close71");
        const detail71 = document.getElementById("detail71");
    
        open71.addEventListener("click", () => {
            detail71.style.display = "flex";
        });
        close71.addEventListener("click", () => {
            detail71.style.display = "none";
        });
    
        // 72モーダルの開閉処理
        const open72 = document.getElementById("open72");
        const close72 = document.getElementById("close72");
        const detail72 = document.getElementById("detail72");
    
        open72.addEventListener("click", () => {
            detail72.style.display = "flex";
        });
        close72.addEventListener("click", () => {
            detail72.style.display = "none";
        });
    
        // 73モーダルの開閉処理
        const open73 = document.getElementById("open73");
        const close73 = document.getElementById("close73");
        const detail73 = document.getElementById("detail73");
    
        open73.addEventListener("click", () => {
            detail73.style.display = "flex";
        });
        close73.addEventListener("click", () => {
            detail73.style.display = "none";
        });
    
        // 74モーダルの開閉処理
        const open74 = document.getElementById("open74");
        const close74 = document.getElementById("close74");
        const detail74 = document.getElementById("detail74");
    
        open74.addEventListener("click", () => {
            detail74.style.display = "flex";
        });
        close74.addEventListener("click", () => {
            detail74.style.display = "none";
        });
    
        // 75モーダルの開閉処理
        const open75 = document.getElementById("open75");
        const close75 = document.getElementById("close75");
        const detail75 = document.getElementById("detail75");
    
        open75.addEventListener("click", () => {
            detail75.style.display = "flex";
        });
        close75.addEventListener("click", () => {
            detail75.style.display = "none";
        });
    
        // 76モーダルの開閉処理
        const open76 = document.getElementById("open76");
        const close76 = document.getElementById("close76");
        const detail76 = document.getElementById("detail76");
    
        open76.addEventListener("click", () => {
            detail76.style.display = "flex";
        });
        close76.addEventListener("click", () => {
            detail76.style.display = "none";
        });
    
        // 77モーダルの開閉処理
        const open77 = document.getElementById("open77");
        const close77 = document.getElementById("close77");
        const detail77 = document.getElementById("detail77");
    
        open77.addEventListener("click", () => {
            detail77.style.display = "flex";
        });
        close77.addEventListener("click", () => {
            detail77.style.display = "none";
        });
    
        // 78モーダルの開閉処理
        const open78 = document.getElementById("open78");
        const close78 = document.getElementById("close78");
        const detail78 = document.getElementById("detail78");
    
        open78.addEventListener("click", () => {
            detail78.style.display = "flex";
        });
        close78.addEventListener("click", () => {
            detail78.style.display = "none";
        });
    
        // 79モーダルの開閉処理
        const open79 = document.getElementById("open79");
        const close79 = document.getElementById("close79");
        const detail79 = document.getElementById("detail79");
    
        open79.addEventListener("click", () => {
            detail79.style.display = "flex";
        });
        close79.addEventListener("click", () => {
            detail79.style.display = "none";
        });
    
        // 811モーダルの開閉処理
        const open811 = document.getElementById("open811");
        const close811 = document.getElementById("close811");
        const detail811 = document.getElementById("detail811");
    
        open811.addEventListener("click", () => {
            detail811.style.display = "flex";
        });
        close811.addEventListener("click", () => {
            detail811.style.display = "none";
        });
    
        // 812モーダルの開閉処理
        const open812 = document.getElementById("open812");
        const close812 = document.getElementById("close812");
        const detail812 = document.getElementById("detail812");
    
        open812.addEventListener("click", () => {
            detail812.style.display = "flex";
        });
        close812.addEventListener("click", () => {
            detail812.style.display = "none";
        });
    
        // 813モーダルの開閉処理
        const open813 = document.getElementById("open813");
        const close813 = document.getElementById("close813");
        const detail813 = document.getElementById("detail813");
    
        open813.addEventListener("click", () => {
            detail813.style.display = "flex";
        });
        close813.addEventListener("click", () => {
            detail813.style.display = "none";
        });
    
        // 814モーダルの開閉処理
        const open814 = document.getElementById("open814");
        const close814 = document.getElementById("close814");
        const detail814 = document.getElementById("detail814");
    
        open814.addEventListener("click", () => {
            detail814.style.display = "flex";
        });
        close814.addEventListener("click", () => {
            detail814.style.display = "none";
        });
    
        // 821モーダルの開閉処理
        const open821 = document.getElementById("open821");
        const close821 = document.getElementById("close821");
        const detail821 = document.getElementById("detail821");
    
        open821.addEventListener("click", () => {
            detail821.style.display = "flex";
        });
        close821.addEventListener("click", () => {
            detail821.style.display = "none";
        });
    
        // 822モーダルの開閉処理
        const open822 = document.getElementById("open822");
        const close822 = document.getElementById("close822");
        const detail822 = document.getElementById("detail822");
    
        open822.addEventListener("click", () => {
            detail822.style.display = "flex";
        });
        close822.addEventListener("click", () => {
            detail822.style.display = "none";
        });
    
        // 823モーダルの開閉処理
        const open823 = document.getElementById("open823");
        const close823 = document.getElementById("close823");
        const detail823 = document.getElementById("detail823");
    
        open823.addEventListener("click", () => {
            detail823.style.display = "flex";
        });
        close823.addEventListener("click", () => {
            detail823.style.display = "none";
        });
    
        // 824モーダルの開閉処理
        const open824 = document.getElementById("open824");
        const close824 = document.getElementById("close824");
        const detail824 = document.getElementById("detail824");
    
        open824.addEventListener("click", () => {
            detail824.style.display = "flex";
        });
        close824.addEventListener("click", () => {
            detail824.style.display = "none";
        });
    
        // TanmatsuAモーダルの開閉処理
        const openTanmatsuA = document.getElementById("openTanmatsuA");
        const closeTanmatsuA = document.getElementById("closeTanmatsuA");
        const detailTanmatsuA = document.getElementById("detailTanmatsuA");
    
        openTanmatsuA.addEventListener("click", () => {
            detailTanmatsuA.style.display = "flex";
        });
        closeTanmatsuA.addEventListener("click", () => {
            detailTanmatsuA.style.display = "none";
        });
    
        // TanmatsuBモーダルの開閉処理
        const openTanmatsuB = document.getElementById("openTanmatsuB");
        const closeTanmatsuB = document.getElementById("closeTanmatsuB");
        const detailTanmatsuB = document.getElementById("detailTanmatsuB");
    
        openTanmatsuB.addEventListener("click", () => {
            detailTanmatsuB.style.display = "flex";
        });
        closeTanmatsuB.addEventListener("click", () => {
            detailTanmatsuB.style.display = "none";
        });
    
        // TanmatsuCモーダルの開閉処理
        const openTanmatsuC = document.getElementById("openTanmatsuC");
        const closeTanmatsuC = document.getElementById("closeTanmatsuC");
        const detailTanmatsuC = document.getElementById("detailTanmatsuC");
    
        openTanmatsuC.addEventListener("click", () => {
            detailTanmatsuC.style.display = "flex";
        });
        closeTanmatsuC.addEventListener("click", () => {
            detailTanmatsuC.style.display = "none";
        });
    
        // TanmatsuDモーダルの開閉処理
        const openTanmatsuD = document.getElementById("openTanmatsuD");
        const closeTanmatsuD = document.getElementById("closeTanmatsuD");
        const detailTanmatsuD = document.getElementById("detailTanmatsuD");
    
        openTanmatsuD.addEventListener("click", () => {
            detailTanmatsuD.style.display = "flex";
        });
        closeTanmatsuD.addEventListener("click", () => {
            detailTanmatsuD.style.display = "none";
        });
    
        // TanmatsuEモーダルの開閉処理
        const openTanmatsuE = document.getElementById("openTanmatsuE");
        const closeTanmatsuE = document.getElementById("closeTanmatsuE");
        const detailTanmatsuE = document.getElementById("detailTanmatsuE");
    
        openTanmatsuE.addEventListener("click", () => {
            detailTanmatsuE.style.display = "flex";
        });
        closeTanmatsuE.addEventListener("click", () => {
            detailTanmatsuE.style.display = "none";
        });
    
        // TanmatsuFモーダルの開閉処理
        const openTanmatsuF = document.getElementById("openTanmatsuF");
        const closeTanmatsuF = document.getElementById("closeTanmatsuF");
        const detailTanmatsuF = document.getElementById("detailTanmatsuF");
    
        openTanmatsuF.addEventListener("click", () => {
            detailTanmatsuF.style.display = "flex";
        });
        closeTanmatsuF.addEventListener("click", () => {
            detailTanmatsuF.style.display = "none";
        });
    
        // 95aモーダルの開閉処理
        const open95a = document.getElementById("open95a");
        const close95a = document.getElementById("close95a");
        const detail95a = document.getElementById("detail95a");
    
        open95a.addEventListener("click", () => {
            detail95a.style.display = "flex";
        });
        close95a.addEventListener("click", () => {
            detail95a.style.display = "none";
        });
    
        // 95bモーダルの開閉処理
        const open95b = document.getElementById("open95b");
        const close95b = document.getElementById("close95b");
        const detail95b = document.getElementById("detail95b");
    
        open95b.addEventListener("click", () => {
            detail95b.style.display = "flex";
        });
        close95b.addEventListener("click", () => {
            detail95b.style.display = "none";
        });
    
        // 95cモーダルの開閉処理
        const open95c = document.getElementById("open95c");
        const close95c = document.getElementById("close95c");
        const detail95c = document.getElementById("detail95c");
    
        open95c.addEventListener("click", () => {
            detail95c.style.display = "flex";
        });
        close95c.addEventListener("click", () => {
            detail95c.style.display = "none";
        });
    
        // 95dモーダルの開閉処理
        const open95d = document.getElementById("open95d");
        const close95d = document.getElementById("close95d");
        const detail95d = document.getElementById("detail95d");
    
        open95d.addEventListener("click", () => {
            detail95d.style.display = "flex";
        });
        close95d.addEventListener("click", () => {
            detail95d.style.display = "none";
        });
    
        // 95eモーダルの開閉処理
        const open95e = document.getElementById("open95e");
        const close95e = document.getElementById("close95e");
        const detail95e = document.getElementById("detail95e");
    
        open95e.addEventListener("click", () => {
            detail95e.style.display = "flex";
        });
        close95e.addEventListener("click", () => {
            detail95e.style.display = "none";
        });
    
        // 95fモーダルの開閉処理
        const open95f = document.getElementById("open95f");
        const close95f = document.getElementById("close95f");
        const detail95f = document.getElementById("detail95f");
    
        open95f.addEventListener("click", () => {
            detail95f.style.display = "flex";
        });
        close95f.addEventListener("click", () => {
            detail95f.style.display = "none";
        });
    
        // 95gモーダルの開閉処理
        const open95g = document.getElementById("open95g");
        const close95g = document.getElementById("close95g");
        const detail95g = document.getElementById("detail95g");
    
        open95g.addEventListener("click", () => {
            detail95g.style.display = "flex";
        });
        close95g.addEventListener("click", () => {
            detail95g.style.display = "none";
        });
    
        // 95hモーダルの開閉処理
        const open95h = document.getElementById("open95h");
        const close95h = document.getElementById("close95h");
        const detail95h = document.getElementById("detail95h");
    
        open95h.addEventListener("click", () => {
            detail95h.style.display = "flex";
        });
        close95h.addEventListener("click", () => {
            detail95h.style.display = "none";
        });
    
        // 95iモーダルの開閉処理
        const open95i = document.getElementById("open95i");
        const close95i = document.getElementById("close95i");
        const detail95i = document.getElementById("detail95i");
    
        open95i.addEventListener("click", () => {
            detail95i.style.display = "flex";
        });
        close95i.addEventListener("click", () => {
            detail95i.style.display = "none";
        });
    
        // 95jモーダルの開閉処理
        const open95j = document.getElementById("open95j");
        const close95j = document.getElementById("close95j");
        const detail95j = document.getElementById("detail95j");
    
        open95j.addEventListener("click", () => {
            detail95j.style.display = "flex";
        });
        close95j.addEventListener("click", () => {
            detail95j.style.display = "none";
        });
    
        // 961モーダルの開閉処理
        const open961 = document.getElementById("open961");
        const close961 = document.getElementById("close961");
        const detail961 = document.getElementById("detail961");
    
        open961.addEventListener("click", () => {
            detail961.style.display = "flex";
        });
        close961.addEventListener("click", () => {
            detail961.style.display = "none";
        });
    
        // 962モーダルの開閉処理
        const open962 = document.getElementById("open962");
        const close962 = document.getElementById("close962");
        const detail962 = document.getElementById("detail962");
    
        open962.addEventListener("click", () => {
            detail962.style.display = "flex";
        });
        close962.addEventListener("click", () => {
            detail962.style.display = "none";
        });
    
        // 963モーダルの開閉処理
        const open963 = document.getElementById("open963");
        const close963 = document.getElementById("close963");
        const detail963 = document.getElementById("detail963");
    
        open963.addEventListener("click", () => {
            detail963.style.display = "flex";
        });
        close963.addEventListener("click", () => {
            detail963.style.display = "none";
        });
    
        // 964モーダルの開閉処理
        const open964 = document.getElementById("open964");
        const close964 = document.getElementById("close964");
        const detail964 = document.getElementById("detail964");
    
        open964.addEventListener("click", () => {
            detail964.style.display = "flex";
        });
        close964.addEventListener("click", () => {
            detail964.style.display = "none";
        });
    
        // 965モーダルの開閉処理
        const open965 = document.getElementById("open965");
        const close965 = document.getElementById("close965");
        const detail965 = document.getElementById("detail965");
    
        open965.addEventListener("click", () => {
            detail965.style.display = "flex";
        });
        close965.addEventListener("click", () => {
            detail965.style.display = "none";
        });
    
        // 966モーダルの開閉処理
        const open966 = document.getElementById("open966");
        const close966 = document.getElementById("close966");
        const detail966 = document.getElementById("detail966");
    
        open966.addEventListener("click", () => {
            detail966.style.display = "flex";
        });
        close966.addEventListener("click", () => {
            detail966.style.display = "none";
        });
    
        // 967モーダルの開閉処理
        const open967 = document.getElementById("open967");
        const close967 = document.getElementById("close967");
        const detail967 = document.getElementById("detail967");
    
        open967.addEventListener("click", () => {
            detail967.style.display = "flex";
        });
        close967.addEventListener("click", () => {
            detail967.style.display = "none";
        });
    
        // 968モーダルの開閉処理
        const open968 = document.getElementById("open968");
        const close968 = document.getElementById("close968");
        const detail968 = document.getElementById("detail968");
    
        open968.addEventListener("click", () => {
            detail968.style.display = "flex";
        });
        close968.addEventListener("click", () => {
            detail968.style.display = "none";
        });
    
        // 971モーダルの開閉処理
        const open971 = document.getElementById("open971");
        const close971 = document.getElementById("close971");
        const detail971 = document.getElementById("detail971");
    
        open971.addEventListener("click", () => {
            detail971.style.display = "flex";
        });
        close971.addEventListener("click", () => {
            detail971.style.display = "none";
        });
    
        // 972モーダルの開閉処理
        const open972 = document.getElementById("open972");
        const close972 = document.getElementById("close972");
        const detail972 = document.getElementById("detail972");
    
        open972.addEventListener("click", () => {
            detail972.style.display = "flex";
        });
        close972.addEventListener("click", () => {
            detail972.style.display = "none";
        });
    
        // 973モーダルの開閉処理
        const open973 = document.getElementById("open973");
        const close973 = document.getElementById("close973");
        const detail973 = document.getElementById("detail973");
    
        open973.addEventListener("click", () => {
            detail973.style.display = "flex";
        });
        close973.addEventListener("click", () => {
            detail973.style.display = "none";
        });
    
        // 974モーダルの開閉処理
        const open974 = document.getElementById("open974");
        const close974 = document.getElementById("close974");
        const detail974 = document.getElementById("detail974");
    
        open974.addEventListener("click", () => {
            detail974.style.display = "flex";
        });
        close974.addEventListener("click", () => {
            detail974.style.display = "none";
        });
    
        // 975モーダルの開閉処理
        const open975 = document.getElementById("open975");
        const close975 = document.getElementById("close975");
        const detail975 = document.getElementById("detail975");
    
        open975.addEventListener("click", () => {
            detail975.style.display = "flex";
        });
        close975.addEventListener("click", () => {
            detail975.style.display = "none";
        });
    
        // 976モーダルの開閉処理
        const open976 = document.getElementById("open976");
        const close976 = document.getElementById("close976");
        const detail976 = document.getElementById("detail976");
    
        open976.addEventListener("click", () => {
            detail976.style.display = "flex";
        });
        close976.addEventListener("click", () => {
            detail976.style.display = "none";
        });
    
        // 977モーダルの開閉処理
        const open977 = document.getElementById("open977");
        const close977 = document.getElementById("close977");
        const detail977 = document.getElementById("detail977");
    
        open977.addEventListener("click", () => {
            detail977.style.display = "flex";
        });
        close977.addEventListener("click", () => {
            detail977.style.display = "none";
        });
    
        // 978モーダルの開閉処理
        const open978 = document.getElementById("open978");
        const close978 = document.getElementById("close978");
        const detail978 = document.getElementById("detail978");
    
        open978.addEventListener("click", () => {
            detail978.style.display = "flex";
        });
        close978.addEventListener("click", () => {
            detail978.style.display = "none";
        });
    
        // 979モーダルの開閉処理
        const open979 = document.getElementById("open979");
        const close979 = document.getElementById("close979");
        const detail979 = document.getElementById("detail979");
    
        open979.addEventListener("click", () => {
            detail979.style.display = "flex";
        });
        close979.addEventListener("click", () => {
            detail979.style.display = "none";
        });
    
        // 98aモーダルの開閉処理
        const open98a = document.getElementById("open98a");
        const close98a = document.getElementById("close98a");
        const detail98a = document.getElementById("detail98a");
    
        open98a.addEventListener("click", () => {
            detail98a.style.display = "flex";
        });
        close98a.addEventListener("click", () => {
            detail98a.style.display = "none";
        });
    
        // 98bモーダルの開閉処理
        const open98b = document.getElementById("open98b");
        const close98b = document.getElementById("close98b");
        const detail98b = document.getElementById("detail98b");
    
        open98b.addEventListener("click", () => {
            detail98b.style.display = "flex";
        });
        close98b.addEventListener("click", () => {
            detail98b.style.display = "none";
        });
    
        // 98cモーダルの開閉処理
        const open98c = document.getElementById("open98c");
        const close98c = document.getElementById("close98c");
        const detail98c = document.getElementById("detail98c");
    
        open98c.addEventListener("click", () => {
            detail98c.style.display = "flex";
        });
        close98c.addEventListener("click", () => {
            detail98c.style.display = "none";
        });
    
        // 98fモーダルの開閉処理
        const open98f = document.getElementById("open98f");
        const close98f = document.getElementById("close98f");
        const detail98f = document.getElementById("detail98f");
    
        open98f.addEventListener("click", () => {
            detail98f.style.display = "flex";
        });
        close98f.addEventListener("click", () => {
            detail98f.style.display = "none";
        });
    
        // 101aモーダルの開閉処理
        const open101a = document.getElementById("open101a");
        const close101a = document.getElementById("close101a");
        const detail101a = document.getElementById("detail101a");
    
        open101a.addEventListener("click", () => {
            detail101a.style.display = "flex";
        });
        close101a.addEventListener("click", () => {
            detail101a.style.display = "none";
        });
    
        // 101bモーダルの開閉処理
        const open101b = document.getElementById("open101b");
        const close101b = document.getElementById("close101b");
        const detail101b = document.getElementById("detail101b");
    
        open101b.addEventListener("click", () => {
            detail101b.style.display = "flex";
        });
        close101b.addEventListener("click", () => {
            detail101b.style.display = "none";
        });
    
        // 101cモーダルの開閉処理
        const open101c = document.getElementById("open101c");
        const close101c = document.getElementById("close101c");
        const detail101c = document.getElementById("detail101c");
    
        open101c.addEventListener("click", () => {
            detail101c.style.display = "flex";
        });
        close101c.addEventListener("click", () => {
            detail101c.style.display = "none";
        });
    
        // 101dモーダルの開閉処理
        const open101d = document.getElementById("open101d");
        const close101d = document.getElementById("close101d");
        const detail101d = document.getElementById("detail101d");
    
        open101d.addEventListener("click", () => {
            detail101d.style.display = "flex";
        });
        close101d.addEventListener("click", () => {
            detail101d.style.display = "none";
        });
    
        // 101eモーダルの開閉処理
        const open101e = document.getElementById("open101e");
        const close101e = document.getElementById("close101e");
        const detail101e = document.getElementById("detail101e");
    
        open101e.addEventListener("click", () => {
            detail101e.style.display = "flex";
        });
        close101e.addEventListener("click", () => {
            detail101e.style.display = "none";
        });
    
        // 101fモーダルの開閉処理
        const open101f = document.getElementById("open101f");
        const close101f = document.getElementById("close101f");
        const detail101f = document.getElementById("detail101f");
    
        open101f.addEventListener("click", () => {
            detail101f.style.display = "flex";
        });
        close101f.addEventListener("click", () => {
            detail101f.style.display = "none";
        });
    
        // 101gモーダルの開閉処理
        const open101g = document.getElementById("open101g");
        const close101g = document.getElementById("close101g");
        const detail101g = document.getElementById("detail101g");
    
        open101g.addEventListener("click", () => {
            detail101g.style.display = "flex";
        });
        close101g.addEventListener("click", () => {
            detail101g.style.display = "none";
        });
    
        // 101hモーダルの開閉処理
        const open101h = document.getElementById("open101h");
        const close101h = document.getElementById("close101h");
        const detail101h = document.getElementById("detail101h");
    
        open101h.addEventListener("click", () => {
            detail101h.style.display = "flex";
        });
        close101h.addEventListener("click", () => {
            detail101h.style.display = "none";
        });
    
        // 10101モーダルの開閉処理
        const open10101 = document.getElementById("open10101");
        const close10101 = document.getElementById("close10101");
        const detail10101 = document.getElementById("detail10101");
    
        open10101.addEventListener("click", () => {
            detail10101.style.display = "flex";
        });
        close10101.addEventListener("click", () => {
            detail10101.style.display = "none";
        });
    
        // 10102モーダルの開閉処理
        const open10102 = document.getElementById("open10102");
        const close10102 = document.getElementById("close10102");
        const detail10102 = document.getElementById("detail10102");
    
        open10102.addEventListener("click", () => {
            detail10102.style.display = "flex";
        });
        close10102.addEventListener("click", () => {
            detail10102.style.display = "none";
        });
    
        // 10103モーダルの開閉処理
        const open10103 = document.getElementById("open10103");
        const close10103 = document.getElementById("close10103");
        const detail10103 = document.getElementById("detail10103");
    
        open10103.addEventListener("click", () => {
            detail10103.style.display = "flex";
        });
        close10103.addEventListener("click", () => {
            detail10103.style.display = "none";
        });
    
        // 10201モーダルの開閉処理
        const open10201 = document.getElementById("open10201");
        const close10201 = document.getElementById("close10201");
        const detail10201 = document.getElementById("detail10201");
    
        open10201.addEventListener("click", () => {
            detail10201.style.display = "flex";
        });
        close10201.addEventListener("click", () => {
            detail10201.style.display = "none";
        });
    
        // 10202モーダルの開閉処理
        const open10202 = document.getElementById("open10202");
        const close10202 = document.getElementById("close10202");
        const detail10202 = document.getElementById("detail10202");
    
        open10202.addEventListener("click", () => {
            detail10202.style.display = "flex";
        });
        close10202.addEventListener("click", () => {
            detail10202.style.display = "none";
        });
    
        // 10203モーダルの開閉処理
        const open10203 = document.getElementById("open10203");
        const close10203 = document.getElementById("close10203");
        const detail10203 = document.getElementById("detail10203");
    
        open10203.addEventListener("click", () => {
            detail10203.style.display = "flex";
        });
        close10203.addEventListener("click", () => {
            detail10203.style.display = "none";
        });
    
        // 10204モーダルの開閉処理
        const open10204 = document.getElementById("open10204");
        const close10204 = document.getElementById("close10204");
        const detail10204 = document.getElementById("detail10204");
    
        open10204.addEventListener("click", () => {
            detail10204.style.display = "flex";
        });
        close10204.addEventListener("click", () => {
            detail10204.style.display = "none";
        });
    
        // 10205モーダルの開閉処理
        const open10205 = document.getElementById("open10205");
        const close10205 = document.getElementById("close10205");
        const detail10205 = document.getElementById("detail10205");
    
        open10205.addEventListener("click", () => {
            detail10205.style.display = "flex";
        });
        close10205.addEventListener("click", () => {
            detail10205.style.display = "none";
        });
    
        // 10206モーダルの開閉処理
        const open10206 = document.getElementById("open10206");
        const close10206 = document.getElementById("close10206");
        const detail10206 = document.getElementById("detail10206");
    
        open10206.addEventListener("click", () => {
            detail10206.style.display = "flex";
        });
        close10206.addEventListener("click", () => {
            detail10206.style.display = "none";
        });
    
        // 10207モーダルの開閉処理
        const open10207 = document.getElementById("open10207");
        const close10207 = document.getElementById("close10207");
        const detail10207 = document.getElementById("detail10207");
    
        open10207.addEventListener("click", () => {
            detail10207.style.display = "flex";
        });
        close10207.addEventListener("click", () => {
            detail10207.style.display = "none";
        });
    
        // 10208モーダルの開閉処理
        const open10208 = document.getElementById("open10208");
        const close10208 = document.getElementById("close10208");
        const detail10208 = document.getElementById("detail10208");
    
        open10208.addEventListener("click", () => {
            detail10208.style.display = "flex";
        });
        close10208.addEventListener("click", () => {
            detail10208.style.display = "none";
        });
    
        // 10209モーダルの開閉処理
        const open10209 = document.getElementById("open10209");
        const close10209 = document.getElementById("close10209");
        const detail10209 = document.getElementById("detail10209");
    
        open10209.addEventListener("click", () => {
            detail10209.style.display = "flex";
        });
        close10209.addEventListener("click", () => {
            detail10209.style.display = "none";
        });
    
        // 10210モーダルの開閉処理
        const open10210 = document.getElementById("open10210");
        const close10210 = document.getElementById("close10210");
        const detail10210 = document.getElementById("detail10210");
    
        open10210.addEventListener("click", () => {
            detail10210.style.display = "flex";
        });
        close10210.addEventListener("click", () => {
            detail10210.style.display = "none";
        });
    
        // 10211モーダルの開閉処理
        const open10211 = document.getElementById("open10211");
        const close10211 = document.getElementById("close10211");
        const detail10211 = document.getElementById("detail10211");
    
        open10211.addEventListener("click", () => {
            detail10211.style.display = "flex";
        });
        close10211.addEventListener("click", () => {
            detail10211.style.display = "none";
        });
    
        // 10212モーダルの開閉処理
        const open10212 = document.getElementById("open10212");
        const close10212 = document.getElementById("close10212");
        const detail10212 = document.getElementById("detail10212");
    
        open10212.addEventListener("click", () => {
            detail10212.style.display = "flex";
        });
        close10212.addEventListener("click", () => {
            detail10212.style.display = "none";
        });
    
        // 10213モーダルの開閉処理
        const open10213 = document.getElementById("open10213");
        const close10213 = document.getElementById("close10213");
        const detail10213 = document.getElementById("detail10213");
    
        open10213.addEventListener("click", () => {
            detail10213.style.display = "flex";
        });
        close10213.addEventListener("click", () => {
            detail10213.style.display = "none";
        });
    
        // 10214モーダルの開閉処理
        const open10214 = document.getElementById("open10214");
        const close10214 = document.getElementById("close10214");
        const detail10214 = document.getElementById("detail10214");
    
        open10214.addEventListener("click", () => {
            detail10214.style.display = "flex";
        });
        close10214.addEventListener("click", () => {
            detail10214.style.display = "none";
        });
    
        // 10215モーダルの開閉処理
        const open10215 = document.getElementById("open10215");
        const close10215 = document.getElementById("close10215");
        const detail10215 = document.getElementById("detail10215");
    
        open10215.addEventListener("click", () => {
            detail10215.style.display = "flex";
        });
        close10215.addEventListener("click", () => {
            detail10215.style.display = "none";
        });
    
        // 10301モーダルの開閉処理
        const open10301 = document.getElementById("open10301");
        const close10301 = document.getElementById("close10301");
        const detail10301 = document.getElementById("detail10301");
    
        open10301.addEventListener("click", () => {
            detail10301.style.display = "flex";
        });
        close10301.addEventListener("click", () => {
            detail10301.style.display = "none";
        });
    
        // 10302モーダルの開閉処理
        const open10302 = document.getElementById("open10302");
        const close10302 = document.getElementById("close10302");
        const detail10302 = document.getElementById("detail10302");
    
        open10302.addEventListener("click", () => {
            detail10302.style.display = "flex";
        });
        close10302.addEventListener("click", () => {
            detail10302.style.display = "none";
        });
    
        // 10303モーダルの開閉処理
        const open10303 = document.getElementById("open10303");
        const close10303 = document.getElementById("close10303");
        const detail10303 = document.getElementById("detail10303");
    
        open10303.addEventListener("click", () => {
            detail10303.style.display = "flex";
        });
        close10303.addEventListener("click", () => {
            detail10303.style.display = "none";
        });
    
        // 10304モーダルの開閉処理
        const open10304 = document.getElementById("open10304");
        const close10304 = document.getElementById("close10304");
        const detail10304 = document.getElementById("detail10304");
    
        open10304.addEventListener("click", () => {
            detail10304.style.display = "flex";
        });
        close10304.addEventListener("click", () => {
            detail10304.style.display = "none";
        });
    
        // 10205モーダルの開閉処理
        const open10305 = document.getElementById("open10305");
        const close10305 = document.getElementById("close10305");
        const detail10305 = document.getElementById("detail10305");
    
        open10305.addEventListener("click", () => {
            detail10305.style.display = "flex";
        });
        close10305.addEventListener("click", () => {
            detail10305.style.display = "none";
        });
    
        // 10206モーダルの開閉処理
        const open10306 = document.getElementById("open10306");
        const close10306 = document.getElementById("close10306");
        const detail10306 = document.getElementById("detail10306");
    
        open10306.addEventListener("click", () => {
            detail10306.style.display = "flex";
        });
        close10306.addEventListener("click", () => {
            detail10306.style.display = "none";
        });
    
        // 10207モーダルの開閉処理
        const open10307 = document.getElementById("open10307");
        const close10307 = document.getElementById("close10307");
        const detail10307 = document.getElementById("detail10307");
    
        open10307.addEventListener("click", () => {
            detail10307.style.display = "flex";
        });
        close10307.addEventListener("click", () => {
            detail10307.style.display = "none";
        });
    
        // 10308モーダルの開閉処理
        const open10308 = document.getElementById("open10308");
        const close10308 = document.getElementById("close10308");
        const detail10308 = document.getElementById("detail10308");
    
        open10308.addEventListener("click", () => {
            detail10308.style.display = "flex";
        });
        close10308.addEventListener("click", () => {
            detail10308.style.display = "none";
        });
    
        // 10309モーダルの開閉処理
        const open10309 = document.getElementById("open10309");
        const close10309 = document.getElementById("close10309");
        const detail10309 = document.getElementById("detail10309");
    
        open10309.addEventListener("click", () => {
            detail10309.style.display = "flex";
        });
        close10309.addEventListener("click", () => {
            detail10309.style.display = "none";
        });
    
        // 10310モーダルの開閉処理
        const open10310 = document.getElementById("open10310");
        const close10310 = document.getElementById("close10310");
        const detail10310 = document.getElementById("detail10310");
    
        open10310.addEventListener("click", () => {
            detail10310.style.display = "flex";
        });
        close10310.addEventListener("click", () => {
            detail10310.style.display = "none";
        });
    
        // 10311モーダルの開閉処理
        const open10311 = document.getElementById("open10311");
        const close10311 = document.getElementById("close10311");
        const detail10311 = document.getElementById("detail10311");
    
        open10311.addEventListener("click", () => {
            detail10311.style.display = "flex";
        });
        close10311.addEventListener("click", () => {
            detail10311.style.display = "none";
        });
    
        // 10312モーダルの開閉処理
        const open10312 = document.getElementById("open10312");
        const close10312 = document.getElementById("close10312");
        const detail10312 = document.getElementById("detail10312");
    
        open10312.addEventListener("click", () => {
            detail10312.style.display = "flex";
        });
        close10312.addEventListener("click", () => {
            detail10312.style.display = "none";
        });
    
        // 10313モーダルの開閉処理
        const open10313 = document.getElementById("open10313");
        const close10313 = document.getElementById("close10313");
        const detail10313 = document.getElementById("detail10313");
    
        open10313.addEventListener("click", () => {
            detail10313.style.display = "flex";
        });
        close10313.addEventListener("click", () => {
            detail10313.style.display = "none";
        });
    
        // 10314モーダルの開閉処理
        const open10314 = document.getElementById("open10314");
        const close10314 = document.getElementById("close10314");
        const detail10314 = document.getElementById("detail10314");
    
        open10314.addEventListener("click", () => {
            detail10314.style.display = "flex";
        });
        close10314.addEventListener("click", () => {
            detail10314.style.display = "none";
        });
    
        // 10315モーダルの開閉処理
        const open10315 = document.getElementById("open10315");
        const close10315 = document.getElementById("close10315");
        const detail10315 = document.getElementById("detail10315");
    
        open10315.addEventListener("click", () => {
            detail10315.style.display = "flex";
        });
        close10315.addEventListener("click", () => {
            detail10315.style.display = "none";
        });
    
        // 105aモーダルの開閉処理
        const open105a = document.getElementById("open105a");
        const close105a = document.getElementById("close105a");
        const detail105a = document.getElementById("detail105a");
    
        open105a.addEventListener("click", () => {
            detail105a.style.display = "flex";
        });
        close105a.addEventListener("click", () => {
            detail105a.style.display = "none";
        });
    
        // 105bモーダルの開閉処理
        const open105b = document.getElementById("open105b");
        const close105b = document.getElementById("close105b");
        const detail105b = document.getElementById("detail105b");
    
        open105b.addEventListener("click", () => {
            detail105b.style.display = "flex";
        });
        close105b.addEventListener("click", () => {
            detail105b.style.display = "none";
        });
    
        // 105cモーダルの開閉処理
        const open105c = document.getElementById("open105c");
        const close105c = document.getElementById("close105c");
        const detail105c = document.getElementById("detail105c");
    
        open105c.addEventListener("click", () => {
            detail105c.style.display = "flex";
        });
        close105c.addEventListener("click", () => {
            detail105c.style.display = "none";
        });
    
        // 105dモーダルの開閉処理
        const open105d = document.getElementById("open105d");
        const close105d = document.getElementById("close105d");
        const detail105d = document.getElementById("detail105d");
    
        open105d.addEventListener("click", () => {
            detail105d.style.display = "flex";
        });
        close105d.addEventListener("click", () => {
            detail105d.style.display = "none";
        });
    
        // 105eモーダルの開閉処理
        const open105e = document.getElementById("open105e");
        const close105e = document.getElementById("close105e");
        const detail105e = document.getElementById("detail105e");
    
        open105e.addEventListener("click", () => {
            detail105e.style.display = "flex";
        });
        close105e.addEventListener("click", () => {
            detail105e.style.display = "none";
        });
    
        // 105fモーダルの開閉処理
        const open105f = document.getElementById("open105f");
        const close105f = document.getElementById("close105f");
        const detail105f = document.getElementById("detail105f");
    
        open105f.addEventListener("click", () => {
            detail105f.style.display = "flex";
        });
        close105f.addEventListener("click", () => {
            detail105f.style.display = "none";
        });
    
        // 105gモーダルの開閉処理
        const open105g = document.getElementById("open105g");
        const close105g = document.getElementById("close105g");
        const detail105g = document.getElementById("detail105g");
    
        open105g.addEventListener("click", () => {
            detail105g.style.display = "flex";
        });
        close105g.addEventListener("click", () => {
            detail105g.style.display = "none";
        });
    
        // 105hモーダルの開閉処理
        const open105h = document.getElementById("open105h");
        const close105h = document.getElementById("close105h");
        const detail105h = document.getElementById("detail105h");
    
        open105h.addEventListener("click", () => {
            detail105h.style.display = "flex";
        });
        close105h.addEventListener("click", () => {
            detail105h.style.display = "none";
        });
    
        // 105iモーダルの開閉処理
        const open105i = document.getElementById("open105i");
        const close105i = document.getElementById("close105i");
        const detail105i = document.getElementById("detail105i");
    
        open105i.addEventListener("click", () => {
            detail105i.style.display = "flex";
        });
        close105i.addEventListener("click", () => {
            detail105i.style.display = "none";
        });
    
        // 105jモーダルの開閉処理
        const open105j = document.getElementById("open105j");
        const close105j = document.getElementById("close105j");
        const detail105j = document.getElementById("detail105j");
    
        open105j.addEventListener("click", () => {
            detail105j.style.display = "flex";
        });
        close105j.addEventListener("click", () => {
            detail105j.style.display = "none";
        });
    
        // 105kモーダルの開閉処理
        const open105k = document.getElementById("open105k");
        const close105k = document.getElementById("close105k");
        const detail105k = document.getElementById("detail105k");
    
        open105k.addEventListener("click", () => {
            detail105k.style.display = "flex";
        });
        close105k.addEventListener("click", () => {
            detail105k.style.display = "none";
        });
    
        // 105lモーダルの開閉処理
        const open105l = document.getElementById("open105l");
        const close105l = document.getElementById("close105l");
        const detail105l = document.getElementById("detail105l");
    
        open105l.addEventListener("click", () => {
            detail105l.style.display = "flex";
        });
        close105l.addEventListener("click", () => {
            detail105l.style.display = "none";
        });
    
        // 105mモーダルの開閉処理
        const open105m = document.getElementById("open105m");
        const close105m = document.getElementById("close105m");
        const detail105m = document.getElementById("detail105m");
    
        open105m.addEventListener("click", () => {
            detail105m.style.display = "flex";
        });
        close105m.addEventListener("click", () => {
            detail105m.style.display = "none";
        });
    
        // 105nモーダルの開閉処理
        const open105n = document.getElementById("open105n");
        const close105n = document.getElementById("close105n");
        const detail105n = document.getElementById("detail105n");
    
        open105n.addEventListener("click", () => {
            detail105n.style.display = "flex";
        });
        close105n.addEventListener("click", () => {
            detail105n.style.display = "none";
        });
    
        // 105oモーダルの開閉処理
        const open105o = document.getElementById("open105o");
        const close105o = document.getElementById("close105o");
        const detail105o = document.getElementById("detail105o");
    
        open105o.addEventListener("click", () => {
            detail105o.style.display = "flex";
        });
        close105o.addEventListener("click", () => {
            detail105o.style.display = "none";
        });
    
        // 105pモーダルの開閉処理
        const open105p = document.getElementById("open105p");
        const close105p = document.getElementById("close105p");
        const detail105p = document.getElementById("detail105p");
    
        open105p.addEventListener("click", () => {
            detail105p.style.display = "flex";
        });
        close105p.addEventListener("click", () => {
            detail105p.style.display = "none";
        });
    
        // 105qモーダルの開閉処理
        const open105q = document.getElementById("open105q");
        const close105q = document.getElementById("close105q");
        const detail105q = document.getElementById("detail105q");
    
        open105q.addEventListener("click", () => {
            detail105q.style.display = "flex";
        });
        close105q.addEventListener("click", () => {
            detail105q.style.display = "none";
        });
    
        // 105rモーダルの開閉処理
        const open105r = document.getElementById("open105r");
        const close105r = document.getElementById("close105r");
        const detail105r = document.getElementById("detail105r");
    
        open105r.addEventListener("click", () => {
            detail105r.style.display = "flex";
        });
        close105r.addEventListener("click", () => {
            detail105r.style.display = "none";
        });
    
        // 105sモーダルの開閉処理
        const open105s = document.getElementById("open105s");
        const close105s = document.getElementById("close105s");
        const detail105s = document.getElementById("detail105s");
    
        open105s.addEventListener("click", () => {
            detail105s.style.display = "flex";
        });
        close105s.addEventListener("click", () => {
            detail105s.style.display = "none";
        });
    
        // 105tモーダルの開閉処理
        const open105t = document.getElementById("open105t");
        const close105t = document.getElementById("close105t");
        const detail105t = document.getElementById("detail105t");
    
        open105t.addEventListener("click", () => {
            detail105t.style.display = "flex";
        });
        close105t.addEventListener("click", () => {
            detail105t.style.display = "none";
        });
    
        // 105uモーダルの開閉処理
        const open105u = document.getElementById("open105u");
        const close105u = document.getElementById("close105u");
        const detail105u = document.getElementById("detail105u");
    
        open105u.addEventListener("click", () => {
            detail105u.style.display = "flex";
        });
        close105u.addEventListener("click", () => {
            detail105u.style.display = "none";
        });
    
        // 105vモーダルの開閉処理
        const open105v = document.getElementById("open105v");
        const close105v = document.getElementById("close105v");
        const detail105v = document.getElementById("detail105v");
    
        open105v.addEventListener("click", () => {
            detail105v.style.display = "flex";
        });
        close105v.addEventListener("click", () => {
            detail105v.style.display = "none";
        });
    
        // 105wモーダルの開閉処理
        const open105w = document.getElementById("open105w");
        const close105w = document.getElementById("close105w");
        const detail105w = document.getElementById("detail105w");
    
        open105w.addEventListener("click", () => {
            detail105w.style.display = "flex";
        });
        close105w.addEventListener("click", () => {
            detail105w.style.display = "none";
        });
    
        // 105xモーダルの開閉処理
        const open105x = document.getElementById("open105x");
        const close105x = document.getElementById("close105x");
        const detail105x = document.getElementById("detail105x");
    
        open105x.addEventListener("click", () => {
            detail105x.style.display = "flex";
        });
        close105x.addEventListener("click", () => {
            detail105x.style.display = "none";
        });*/


    // 空き教室一覧の処理
    const buildingButtons = document.querySelectorAll(".building-item");

    buildingButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.dataset.target;
            const detail = document.getElementById(targetId);
            const arrow = btn.querySelector(".arrow");

            const isVisible = detail.classList.contains("open");

            // 他の詳細を閉じる
            document.querySelectorAll(".building-detail").forEach(div => {
                div.classList.remove("open");
                div.style.maxHeight = null;
                div.style.opacity = 0;
            });

            document.querySelectorAll(".arrow").forEach(a => {
                a.textContent = "▼";
            });

            if (!isVisible) {
                detail.classList.add("open");
                detail.style.maxHeight = detail.scrollHeight + "px";
                detail.style.opacity = 1;
                arrow.textContent = "▲";

                // スクロールして詳細部分が見えるようにする（少し遅らせて）
                setTimeout(() => {
                    detail.scrollIntoView({
                        behavior: "smooth",
                        block: "center" // or "nearest", "center" も調整可
                    });
                }, 50); // 開き始めて少ししてからスクロール
            } else {
                detail.classList.remove("open");
                detail.style.maxHeight = null;
                detail.style.opacity = 0;
                arrow.textContent = "▼";
            }
        });
    });


    // 空き教室一覧を閉じる処理（多分）
    function openDetail(element) {
        // 最初に open クラスを追加してスタイル適用
        element.classList.add("open");

        // 一旦 max-height を auto にしてから、0 に戻す（リセット）
        element.style.maxHeight = "0px";

        // 少し待ってから scrollHeight を取得（スタイルが適用されるのを待つ）
        setTimeout(() => {
            const fullHeight = element.scrollHeight;
            element.style.maxHeight = fullHeight + "px";
        }, 50); // ← 50ms 待つと安定します（ブラウザによっては10msでもOKですが）
    }

    function closeDetail(element) {
        // 高さを0に → CSSアニメーションが走る
        element.style.maxHeight = "0px";

        // アニメーション終了後に open クラスを外す（必要なら）
        setTimeout(() => {
            element.classList.remove("open");
        }, 300); // ← CSSの transition の duration と合わせて！
    }





    // フィルタの項目をクリックした時の色変更
    document.querySelectorAll(".option-group button").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
        });
    });

    // 全てクリアボタンの処理
    const clearBtn = document.querySelector(".clear-btn");

    clearBtn.addEventListener("click", () => {
        // チェックボックスをすべてオフ
        document.querySelectorAll(".filter-modal input[type='checkbox']").forEach(checkbox => {
            checkbox.checked = false;
        });

        // 選択状態のボタンをリセット
        document.querySelectorAll(".option-group button").forEach(button => {
            button.classList.remove("active");
        });

        // キーワード入力欄もクリアしたいなら
        document.getElementById("keyword").value = "";
    });


    // ヘッダーに曜日と時限の表示
    const weekdays = ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"];

    function isWithinRange(hour, minute, startHour, startMinute, endHour, endMinute) {
        const now = hour * 60 + minute;
        const start = startHour * 60 + startMinute;
        const end = endHour * 60 + endMinute;
        return now >= start && now <= end;
    }

    function getPeriod() {
        const now = new Date();
        const dayLabel = weekdays[now.getDay()];
        const h = now.getHours();
        const m = now.getMinutes();

        let periodLabel = "時間外"; // デフォルト

        if (isWithinRange(h, m, 5, 0, 10, 30)) {
            periodLabel = "１限";
        } else if (isWithinRange(h, m, 10, 31, 12, 15)) {
            periodLabel = "２限";
        } else if (isWithinRange(h, m, 12, 16, 14, 35)) {
            periodLabel = "３限";
        } else if (isWithinRange(h, m, 14, 36, 16, 20)) {
            periodLabel = "４限";
        } else if (isWithinRange(h, m, 16, 21, 18, 5)) {
            periodLabel = "５限";
        } else if (isWithinRange(h, m, 18, 6, 19, 45)) {
            periodLabel = "６限";
        }

        return `${dayLabel}${periodLabel}`;
    }

    // ヘッダーのタイトル更新
    function updateTitle() {
        const headerTitle = document.querySelector('header h1');
        if (headerTitle) {
            headerTitle.textContent = getPeriod();
        }
    }

    updateTitle();

    setInterval(updateTitle, 60000);


    // ▼ ログイン処理 ▼
    const loginBtn = document.getElementById("login-btn");
    const loginScreen = document.getElementById("login-screen");
    const homeScreen = document.getElementById("home-screen");

    if (loginBtn) { // ← ログイン画面がある時だけ動くように安全チェック
        loginBtn.addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email && password) {
                loginScreen.style.display = "none";
                homeScreen.style.display = "block";
            } else {
                alert("メールアドレスとパスワードを入力してください");
            }
        });
    }
});
