function display_header_page(pass, id) {
    document.addEventListener('DOMContentLoaded', () => display_page(pass, id));
}

function display_page(pass, id) {
    fetch(pass)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(error => {
            console.error('読み込み中にエラーが発生しました:', error);
        });
}

// display_header_page をプロパティとして持つオブジェクトをデフォルトエクスポート
export default { display_header_page };
