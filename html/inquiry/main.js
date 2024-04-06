const send_button = document.getElementById("send_format")
console.log(send_button)
function sendFormat(event) {
    event.preventDefault();
    let isValid = true
    console.log("test")
    const warning_textArea = document.getElementsByClassName("warning")
    console.log("warning_textArea", warning_textArea)
    warning_textArea.forEach(function (span) {
        span.textContent = ''; // 既存の警告をクリア
    })
}

// // DOMContentLoaded - HTMLページの読み込みが終わり、DOMツリーの構築が完了した時に発生するイベント
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('format');
//     form.addEventListener('submit', function (event) {
//         console.log(1)
//         event.preventDefault(); // フォームのデフォルトの送信を防ぐ
//         let isValid = true; // フォームが有効かどうかのフラグ
//         document.querySelectorAll('.warning').forEach(function (span) {
//             span.textContent = ''; // 既存の警告をクリア
//         });

//         // 必須入力項目を検証
//         this.querySelectorAll('[required]').forEach(function (input) {
//             if (!input.value.trim()) {
//                 const warningSpan = input.nextElementSibling;
//                 if (warningSpan && warningSpan.classList.contains('warning')) {
//                     warningSpan.textContent = 'この項目は必須です';
//                 }
//                 isValid = false;
//             }
//         });

//         // フォームが有効な場合のみ処理を続行
//         if (isValid) {
//             // フォームのデータを使用してメールを送信する処理をここに追加
//             console.log('フォームが有効です。メールを送信します。');
//             // ここに実際のメール送信処理を実装する
//             // 例: form.submit(); // 実際にフォームを送信
//         }
//     });
// });
