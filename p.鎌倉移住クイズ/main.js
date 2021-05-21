

// 画面きりかえ
const $quizd = document.querySelector('.quiz-display');
const $top = document.querySelector('.top');

// ジャンルで分岐
let genreIndex = 0;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('q-text').textContent = quiz[genreIndex][quizIndex].question;    
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[genreIndex][quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
    
}



// btnc1バージョン
const $btnc1 = document.querySelector('.btn-change1');
$btnc1.addEventListener('click', (e)=> {
    // window.alert('test');
    $quizd.classList.add('activation');
    $top.classList.add('removing');
    setupQuiz();
});
// btnc2バージョン
const $btnc2 = document.querySelector('.btn-change2');
$btnc2.addEventListener('click', (e)=> {
    // window.alert('test');
    $quizd.classList.add('activation');
    $top.classList.add('removing');
    genreIndex = 1;
    // console.log(quiz[genreIndex][0].question);
    setupQuiz();
});
// btnc3バージョン
const $btnc3 = document.querySelector('.btn-change3');
$btnc3.addEventListener('click', (e)=> {
    // window.alert('test');
    $quizd.classList.add('activation');
    $top.classList.add('removing');
    genreIndex = 2;
    setupQuiz();
});

//クイズ制作
// const genre = [quiz[0], quiz[1], quiz[2]];
// const testQuiz = [['a', 'b'], ['c', 'd'], ['e', 'f']];
// console.log(testQuiz[1][0]);

const $button = document.getElementsByClassName('btn-block');
const buttonLength = $button.length;
let quizIndex = 0;
const $detail = document.getElementById('detail');

// 次へボタンを別に作った
const $nextButton = document.querySelector('.btn-next');
$nextButton.addEventListener('click', () => {
    quizIndex++;
    if (quizIndex < quizLength) {
        // window.alert('テスト！');
        setupQuiz();
    } else {
        window.location.reload();
    }
});

const quiz = [
    [//このカッコ内はquiz[0]
    //せいかつ編
        {   //このカッコ内はquiz[0][0]
            question: 'Q. 鎌倉市長の名前はなんでしょう?',
            answers: ['松尾崇', '小池百合子', '吉村洋文', '黒岩祐治'],
            correct: '松尾崇',
            detail: '正解は、松尾崇さんです！小池百合子さんは東京都知事、吉村洋文さんは大阪府知事、黒岩祐治さんは神奈川県知事でした！'
        },
        {   //このカッコ内はquiz[0][1]
            question: 'Q. 鎌倉市役所はどこにあるでしょう?',
            answers: ['由比ヶ浜沿岸の交差点「滑川」付近', '鎌倉駅東口直進3分、右折徒歩1分', '鎌倉駅西口直進徒歩３分', '鎌倉駅東口右折徒歩1分'],
            correct: '鎌倉駅西口直進徒歩３分',
            detail: '正解は、鎌倉駅西口直進徒歩３分です！由比ヶ浜沿岸の交差点「滑川」付近にあるのは、家系ラーメン屋さん「町田商店」です。鎌倉駅東口を出てまっすぐ3分歩き、右折して徒歩1分のところには、郵便局があります。鎌倉駅東口を出て右折徒歩1分のところには、スタバがあります！'  
        }, 
        {
            question: 'Q. 鎌倉の人口は何人でしょう?',
            answers: ['5.8万人', '905万人', '17万人', '4600人'],
            correct: '17万人',
            detail: '正解は、17万人です！5.8万人は逗子市、905万人は神奈川県、4600人は鎌倉市由比ヶ浜の人口でした！'     
        }
    ],
    [//このカッコ内はquiz[1]
    //ともだちづくり編
        {   //quiz[1][0]
            question: 'Q. 鎌倉で働く人が交流できるレストランはどこでしょう？',
            answers: ['まちの社員食堂', 'KIBIYAベーカリー', '長谷寺', '稲村ヶ崎温泉'],
            correct: 'まちの社員食堂',
            detail: '正解は、まちの社員食堂です！週替わりで鎌倉のお店が料理を提供してくれます。お店やお客さんと交流してみましょう！'
        },
        {   //quiz[1][1]
            question: 'Q. 鎌倉で起業したい人が集まる場所はどこでしょう?',
            answers: ['鶴岡八幡宮', '鎌倉駅', 'HATSU鎌倉', 'スターバックス'],
            correct: 'HATSU鎌倉',
            detail: '正解は、HATSU鎌倉です！３ヶ月の起業支援プロジェクトやコワーキングスペースの提供もされているので気軽に遊びに行ってみましょう！'  
        }, 
        {
            question: 'Q. 気さくに話しかけてくれる人が多いのはどこでしょう？',
            answers: ['鎌倉駅', 'コンビニ', 'スーパー', '個人経営のレストラン'],
            correct: '個人経営のレストラン',
            detail: '正解は、個人経営のレストランです！個人的なおすすめはフレンチのchez Akiさん、reneさんです！'     
        }
    ],
    [//このカッコ内はquiz[2]
    //グルメ編
        {   
            question: 'Q. 2年先まで予約が埋まっている？！と噂のお店はどこでしょう？',
            answers: ['六地蔵交差点付近「エテ」', '御成通り「太陽堂」', '小町通り「アマルフィ」', '由比ヶ浜大通り踏切付近「chez Aki」'],
            correct: '六地蔵交差点付近「エテ」',
            detail: '正解は、六地蔵交差点付近「エテ」です！黒い内装のカウンター席で高級フレンチを振る舞ってくれます！特別な時におすすめ！'
        },
        {
            question: 'Q. ワインの飲み比べができるイタリアンレストランはどこでしょう?',
            answers: ['六地蔵交差点付近「エテ」', '御成通り「太陽堂」', '小町通り「アマルフィ」', '由比ヶ浜大通り踏切付近「chez Aki」'],
            correct: '小町通り「アマルフィ」',
            detail: '正解は、小町通り「アマルフィ」です！少し早めのディナーの時間帯にワインブッフェをやっています。鎌倉野菜やしらすを使ったオリジナルピザも絶品です！'  
        }, 
        {
            question: 'Q. カレーつけ麺が美味しくて、店長が優しい笑顔のラーメン屋さんはどこでしょう？',
            answers: ['六地蔵交差点付近「エテ」', '御成通り「太陽堂」', '小町通り「アマルフィ」', '由比ヶ浜大通り踏切付近「chez Aki」'],
            correct: '御成通り「太陽堂」',
            detail: '正解は、御成通り「太陽堂」です！他のお店にはないユニークな味なので是非お試しください！'     
        }
    ]
    
]
// console.log(quiz[1][0].question);

// それぞれのボタンにaddEventListnerをつけるのが正解だった
// 念のため書き残しとく
// $button[0].addEventListener('click', ()=> {
//     if (quiz[0].correct === $button[0].textContent) {
//     // window.alert('正解！');    
//     document.getElementById('a-text').textContent = '正解です！';
//     } else {
//     document.getElementById('a-text').textContent = '不正解です！';
//     }
// })

// addEventListner内の第二引数として作ったイベントハンドラーが４回出てくるので関数で一言で省略した

let quizLength = quiz.length;


const clickHandler = (e) =>{
    if (quiz[genreIndex][quizIndex].correct === e.target.textContent) {
        // window.alert('正解！');    
        document.getElementById('a-text').textContent = '正解です！';
        } else {
        document.getElementById('a-text').textContent = 'ざんねん...！';
    }

    $detail.textContent = quiz[genreIndex][quizIndex].detail;
    // if (quizIndex < quizLength) {
    //     // window.alert('テスト！');
    //     setupQuiz();
    // } else {
    //     window.alert('終了です！画面を更新して再チャレンジしてみましょう！');
    // }
};


// あとは$buttonの[]の中身をwhile文で１足しながら回せば良さげ
// 中から理解するべき、①clickHandlerはaddの第二引数つまりイベントハンドラの処理を関数化したもの
// ②()のなかにあるeはイベントのことで、イベントハンドラの引数としてhtml上でのイベントを引くと言う意味
// ③ボタン一つ一つ[0][1][2][3]にaddを書いてたがその番号を変数にしてwhile文を回した
let handlerIndex = 0; //addのイベントハンドラを回すためのindex番号だからこの名前
while (handlerIndex < buttonLength) {
    //選択肢のボタンのクリックイベント
    $button[handlerIndex].addEventListener('click', (e)=> {
        clickHandler(e);
    });
    handlerIndex++;
}




// 選択肢をクリックする
// →正誤判定
//  正解なら、正解です
//  不正解なら、不正解です  
//
// 次へボタンをクリックする
// まだ問題が残っていれば次へいく
// 最終問題だったら終了のメッセージを出す
//
//
//
//
//
//
//







// addEventListnerの第一引数がclick, 第二引数が()以下の関数、つまり引数として関数を指定できると言うこと
// addの第二引数の関数をイベントハンドラと言う
// イベントハンドラの引数としてe、つまりeventをいれると、webサイト上でのユーザーの動作情報を取得できる、
// このようなhtmlなどからの情報の受け渡しをdom操作（Document Object Model：ドキュメント（HTMLなど）をものとして扱う）と言う
// で、eventにはスクロールとかマウスオーバーなどいろんな動作があるわけだが、このうち具体的になんの動作なのか、ってのがイベントのオブジェクトと言うやつで、e.なんか、と記述する
// よく使うのが、e.target, e.mousehover, e.mousedown、e.scrollとかだろう
// で、イベントオブジェクトはイベントハンドラの処理内で記載する、イベントハンドラの引数はeventと書くだけで良い

//まずはうしとtのパクリでいい、できてから他のクイズアプリとか探して組み合わせて行こう

// doc.getElement,,,のやつさ、doc.querySelectorでも同じ、queの方は()ないに.か＃をつける、するとclassもidも引ける

// まずはクイズを３問にしようか、採点とかクイズの終了はなしでOK

