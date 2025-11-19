document.addEventListener("DOMContentLoaded", function () {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const closeImages = document.querySelectorAll('.logo_close'); // すべての閉じるボタン画像を取得

    // テーマごとの閉じるボタン画像パス
    const closeBtnImages = {
        red: 'icon/close-red.png',
        pink: 'icon/close-pink.png',
        orange: 'icon/close-orange.png',
        yellow: 'icon/close-yellow.png',
        lightgreen: 'icon/close-lightgreen.png',
        green: 'icon/close-green.png',
        skyblue: 'icon/close-skyblue.png',
        blue: 'icon/close-blue.png',
        purple: 'icon/close-purple.png',
        beige: 'icon/close-beige.png',
        brown: 'icon/close-brown.png',
        gray: 'icon/close-gray.png',
        black: 'icon/close-black.png',
        default: 'icon/close.png'
    };

    // ✅ テーマ適用用関数
    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        // すべての閉じるボタン画像をテーマに合わせて変更
        closeImages.forEach(img => {
            img.src = closeBtnImages[theme] || closeBtnImages.default;
        });

        // ✅ ラジオボタンのチェック状態を更新
        themeButtons.forEach(btn => {
            btn.checked = (btn.getAttribute('data-theme') === theme);
        });
    }

    // ✅ テーマボタンクリック処理
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            applyTheme(theme);
        });
    });

    // ✅ ページ読み込み時に前回のテーマを復元
    const savedTheme = localStorage.getItem('theme') || 'default';
    applyTheme(savedTheme);

    // フィルターモーダルの開閉処理
    const openFilter = document.getElementById("openFilter");
    const closeFilter = document.getElementById("closeFilter");
    const filterModal = document.getElementById("filterModal");

    openFilter.addEventListener("click", () => {
        filterModal.style.display = "flex";
        document.body.classList.add('modal-open');
    });

    closeFilter.addEventListener("click", () => {
        filterModal.style.display = "none";
        document.body.classList.remove('modal-open');
    });

    // ページ管理
    const homePage = document.getElementById("homePage");
    const mypagePage = document.getElementById("mypagePage");
    const subPages = document.querySelectorAll(".sub-page");

    // ---- ハンバーガーメニュー処理 ----
    document.querySelectorAll(".hamb").forEach(hamb => {
        const blackBg = hamb.parentElement.querySelector(".black-bg");

        hamb.addEventListener("click", () => {
            hamb.classList.toggle("active");
            blackBg.classList.toggle("open");
        });

        // 背景クリック時：背景の外側のみ反応
        document.addEventListener("click", (e) => {
            // クリック位置がblack-bgでもhambでもないなら閉じる
            if (!blackBg.contains(e.target) && !hamb.contains(e.target)) {
                hamb.classList.remove("active");
                blackBg.classList.remove("open");
            }
        });
    });

    // ---- メニュー内の各ボタン ----
    function showSubpage(id) {
        // すべてのページを非表示にする
        document.querySelectorAll(".page, .sub-page").forEach(p => {
            p.classList.remove("active");
        });

        // 指定されたページだけ表示
        document.getElementById(id).classList.add("active");

        // メニューを閉じる
        document.querySelectorAll(".hamb").forEach(h => h.classList.remove("active"));
        document.querySelectorAll(".black-bg").forEach(bg => bg.classList.remove("open"));
    }


    // 各メニュー項目
    document.querySelectorAll(".menuTheme").forEach(btn => {
        btn.addEventListener("click", () => showSubpage("themePage"));
    });
    document.querySelectorAll(".menuContact").forEach(btn => {
        btn.addEventListener("click", () => showSubpage("contactPage"));
    });
    document.querySelectorAll(".menuTerms").forEach(btn => {
        btn.addEventListener("click", () => showSubpage("termsPage"));
    });

    // ---- ホーム／マイページ移動 ----
    document.querySelectorAll(".openMypage").forEach(btn => {
        btn.addEventListener("click", () => showSubpage("mypagePage"));
    });
    document.querySelectorAll(".backHome").forEach(btn => {
        btn.addEventListener("click", () => showSubpage("homePage"));
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

        const themeButtons = document.querySelectorAll('.theme-btn');
        const closeImg = document.querySelector('.logo_close');
        // テーマごとの閉じるボタン画像をまとめて管理
        const closeBtnImages = {
            red: 'icon/close-red.png',
            pink: 'icon/close-pink.png',
            orange: 'icon/close-orange.png',
            yellow: 'icon/close-yellow.png',
            lightgreen: 'icon/close-lightgreen.png',
            green: 'icon/close-green.png',
            skyblue: 'icon/close-skyblue.png',
            blue: 'icon/close-blue.png',
            purple: 'icon/close-purple.png',
            beige: 'icon/close-beige.png',
            brown: 'icon/close-brown.png',
            gray: 'icon/close-gray.png',
            black: 'icon/close-black.png',
            default: 'icon/close.png'
        };
        // テーマ変更処理
        themeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const theme = button.getAttribute('data-theme');
                document.body.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
                // 画像をテーマに応じて変更
                closeImg.src = closeBtnImages[theme] || closeBtnImages.default;
            });
        });

        // ページ読み込み時に前回のテーマを復元
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
            closeImg.src = closeBtnImages[savedTheme] || closeBtnImages.default;
        }


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
                <span class="like-count">ユーザ名</span>
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

    // Asapro2025_appNo2.js — テーマ切替（デバッグ付き）
    (function () {
        // ヘルパー: body の theme- で始まるクラスをすべて削除
        function clearThemeClasses(el) {
            Array.from(el.classList)
                .filter(c => c.startsWith('theme-'))
                .forEach(c => el.classList.remove(c));
        }

        // テーマ適用処理
        function applyTheme(name) {
            if (!name) return;
            clearThemeClasses(document.body);
            document.body.classList.add(`theme-${name}`);
            localStorage.setItem('theme', name);
            // active ボタン管理
            document.querySelectorAll('#themeSelector .theme-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.theme === name);
            });
            // 🟡 ここから追加部分（色名テキストを変更）
            const legendRed = document.querySelector('.legend-red');
            const legendBlue = document.querySelector('.legend-blue');

            if (legendRed && legendBlue) {
                switch (name) {
                    case 'normal':
                        legendRed.textContent = '赤：授業あり';
                        legendBlue.textContent = '青：授業なし';
                        break;
                    case 'colorblind':
                        legendRed.textContent = 'オレンジ：授業あり';
                        legendBlue.textContent = '青：授業なし';
                        break;
                    case 'red':
                        legendRed.textContent = '赤：授業あり';
                        legendBlue.textContent = '青：授業なし';
                        break;
                    case 'pink':
                        legendRed.textContent = 'ピンク：授業あり';
                        legendBlue.textContent = '水色：授業なし';
                        break;
                    case 'orange':
                        legendRed.textContent = 'オレンジ：授業あり';
                        legendBlue.textContent = '緑：授業なし';
                        break;
                    case 'yellow':
                        legendRed.textContent = '黄：授業あり';
                        legendBlue.textContent = '水色：授業なし';
                        break;
                    case 'lightgreen':
                        legendRed.textContent = 'ピンク：授業あり';
                        legendBlue.textContent = '黄緑：授業なし';
                        break;
                    case 'green':
                        legendRed.textContent = '茶：授業あり';
                        legendBlue.textContent = '緑：授業なし';
                        break;
                    case 'skyblue':
                        legendRed.textContent = 'ピンク：授業あり';
                        legendBlue.textContent = '水色：授業なし';
                        break;
                    case 'blue':
                        legendRed.textContent = 'グレー：授業あり';
                        legendBlue.textContent = '青：授業なし';
                        break;
                    case 'purple':
                        legendRed.textContent = 'オレンジ：授業あり';
                        legendBlue.textContent = '紫：授業なし';
                        break;
                    case 'beige':
                        legendRed.textContent = 'ピンク：授業あり';
                        legendBlue.textContent = 'ベージュ：授業なし';
                        break;
                    case 'brown':
                        legendRed.textContent = 'ベージュ：授業あり';
                        legendBlue.textContent = '茶：授業なし';
                        break;
                    case 'gray':
                        legendRed.textContent = 'グレー：授業あり';
                        legendBlue.textContent = '黒：授業なし';
                        break;
                    case 'black':
                        legendRed.textContent = 'グレー：授業あり';
                        legendBlue.textContent = '白：授業なし';
                        break;
                    default:
                        legendRed.textContent = '赤：授業あり';
                        legendBlue.textContent = '青：授業なし';
                        break;
                }
            }
            console.log(`[theme] applyTheme → theme-${name}`);
        }

        // 初期化
        function initThemeSwitcher() {
            const themeSelector = document.getElementById('themeSelector');
            if (!themeSelector) {
                console.error('[theme] #themeSelector が見つかりません。HTML内の id を確認してください。');
                return;
            }

            // ボタン一覧を確認（デバッグ用ログ）
            const buttons = Array.from(themeSelector.querySelectorAll('.theme-btn'));
            console.log('[theme] themeSelector found:', !!themeSelector, 'buttons:', buttons.length);
            buttons.forEach(b => {
                if (!b.dataset.theme) {
                    console.warn('[theme] theme-btn に data-theme がありません:', b);
                }
            });

            // 個別リスナー（イベント委譲に問題がある場合に備えて個別登録）
            buttons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const name = btn.dataset.theme;
                    console.log('[theme] button clicked:', name);
                    if (!name) return;
                    applyTheme(name);
                });
            });

            // 保存済みテーマの復元 or 初期ノーマル
            const saved = localStorage.getItem('theme');
            if (saved) {
                console.log('[theme] saved theme detected:', saved);
                applyTheme(saved);
            } else {
                console.log('[theme] no saved theme — applying theme-normal by default');
                applyTheme('normal');
            }
        }

        // DOMContentLoaded 待ち（既に終わっている場合は即実行）
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initThemeSwitcher);
        } else {
            initThemeSwitcher();
        }
    })();



});
