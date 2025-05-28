/**
 * <div id="room_list"></div>
 */
import roomf_20250516.csv from "roomf_20250516.csv";
import roomf_20250516.json from "roomf_20250516.json";
let d = new Date();
let e = d.getDay();
document.write("Hello, World!");
document.write(d);
function myFunction() {
    alert(obj);
}

const output_svg = document.getElementById('room_list');
const dataArray = []; //配列を用意

function csv_data(dataPath) {
    const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
    request.addEventListener('load', (event) => { // ロードさせ実行
        const response = event.target.responseText; // 受け取ったテキストを返す
        csv_array(response); //csv_arrayの関数を実行
    });
    request.open('GET', dataPath, true); // csvのパスを指定
    request.send();
}

function csv_array(data) {
    const dataString = data.split('\n'); //改行で分割
    for (let i = 0; i < dataString.length; i++) { //あるだけループ
        dataArray[i] = dataString[i].split(',');
    }
    output_svg.innerHTML = dataArray; //表示
    console.log(dataArray);

}
csv_data('roomf');

function filter(num, words) {
    
    result[i] = words.filter((words) => words.length > num);
    alert(result);
}

function showName() {
    alert(dataArray[1][1]);
}

// 「選択完了」ボタンと選択した値を表示するidを取得
const btn = document.getElementById('btn');
const setSport = document.getElementById("setSport");
const selectSport = document.getElementById("selectSport");
// メニューから値を選択して、ボタンを押した後の処理
btn.addEventListener('click', () => {
    const num = selectSport.selectedIndex;
    // 選択した要素のテキストを取得する処理
    const getSportName = selectSport.options[num].innerText;
    // 取得した要素をHTMLに埋め込む
    setSport.innerText = getSportName;
});

const obj = JSON.parse(roomf_20250516.json);
const findData = data.find(obj => {
      return obj.id === "1";
    });
    console.log('find', findData);
