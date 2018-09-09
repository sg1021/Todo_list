function creatcmp(){
    //入力された文字を読み込む
    var text = document.querySelector("#actNameBox").value;
    //テキストノードを作成
    var element = document.createTextNode(text);
    
    //チェックボックスを作成
    var chbtn = document.createElement("input");
    //ボタンタグを作成
    btag = document.createElement("button");
    //ｘマークを入れる
    btag.innerText = "x";
    
    //checkbox属性とidを入れる
    chbtn.setAttribute("type","checkbox");
    chbtn.setAttribute("id","check_box");
    //btagにid(Delete)を入れる
    btag.setAttribute("id","Delete");
    
    //入れたい場所を持ってくる
    var target = document.getElementById("input");
    
    //チェックボックス入れる
    target.append(chbtn);
    //そこにelementを追加
    target.appendChild(element);
    //ｘボタンも入れる
    target.appendChild(btag);
    
    //改行
    target.appendChild(document.createElement('br'));
    
    
    
}
//ｘボタンが押されたら、実行する関数
document.getElementById("Delete").onclick=function(){
    //そのリストを削除
    
}

function save(){
    localStorage.setItem("savedata",document.getElementById("check_box").checked);
}

