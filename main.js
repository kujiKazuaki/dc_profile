const mainBtn = document.getElementById("favorite-btn")
const favoArea = document.getElementById('favorite-word');
const already_List = document.getElementById("already-List")
const selected_num = document.getElementById("selected-favorite-word")

/**
 * 画面ロード時、発掘した好きな言葉リストを出現させる関数
 */
document.addEventListener('DOMContentLoaded', () => {
    const favoWords = localStorage.getItem('selectedFavoWord');
    const alreadyNum = localStorage.getItem("already_selected_num")

    if (favoWords) {
        const favoWordsArray = JSON.parse(favoWords);
        if (favoWordsArray.length > 0) {
            already_List.innerHTML = favoWordsArray.map(word => `<li class="card">${word}</li>`).join('');
            selected_num.textContent = alreadyNum || favoWordsArray.length;
        }
    }
})

/**
 * 好きなことばのボタンを押した際、好きな言葉リストからランダムに出力する関数
 */
const pushFavoWord = () => {
    const favoWord_List = [
        "苦あれば楽あり。楽あれば苦あり",
        "井の中の蛙大海を知らず",
        "「プログラミングを勉強する」じゃなく「〇〇を作る」を目標に！",
    ]
    const randomIndex = Math.floor(Math.random() * favoWord_List.length);
    const selectedFavoWord = favoWord_List[randomIndex];

    // idが'pushZone'の要素に選択されたアイテムを表示
    if (favoArea) {
        favoArea.textContent = ""
        favoArea.textContent = selectedFavoWord;
    } else {
        throw Error("エラー")
    }

    // ローカルストレージからselectedFavoWordリストを取得または作成
    let favoWords = localStorage.getItem('selectedFavoWord');
    favoWords = favoWords ? JSON.parse(favoWords) : [];

    // 選択されたアイテムがリストになければ追加
    if (!favoWords.includes(selectedFavoWord)) {
        /**
         * 発掘した言葉をリストに追加する
         * 発掘した好きな言葉カウントを１つカウントアップする
         */
        const card = document.createElement("li")
        card.className = "card"
        card.textContent = selectedFavoWord
        already_List.appendChild(card)

        let already_selected_num = Number(selected_num.textContent)
        already_selected_num++
        selected_num.textContent = already_selected_num
        localStorage.setItem("already_selected_num", already_selected_num)
        /**
         * JSONに保存してリロードしても保管できるようにする
         */
        favoWords.push(selectedFavoWord);
        localStorage.setItem('selectedFavoWord', JSON.stringify(favoWords));
    }
}

mainBtn.onclick = pushFavoWord