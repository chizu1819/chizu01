// アクティブページのリンク色変える
href = location.href;
//var links = jQuery("#gnav_list ul li a");
var links = jQuery(".top-nav a");
//classを付与したいaタグを含めた階層をカッコ内に記述

console.log(links);
links.each(function (index, value) {
  if (value.href == href) {
    //jQuery("#gnav_list ul li").children("a").eq(index).addClass("active");
    //jQuery("#gnav_list").children("a").eq(index).addClass("active");
    jQuery(".top-nav").children("a").eq(index).addClass("active");
//classを付与したいaタグまでの階層をjQueryカッコ内に記述
  }
});

/*
const clickBtn = document.getElementById('click-btn');
const popupWrapper = document.getElementById('popup-wrapper');
const close = document.getElementById('close');

// ボタンをクリックしたときにポップアップを表示させる
clickBtn.addEventListener('click', () => {
  popupWrapper.style.display = "block";
  console.log("a");
});

// ポップアップの外側又は「x」のマークをクリックしたときポップアップを閉じる
popupWrapper.addEventListener('click', e => {
  if (e.target.id === popupWrapper.id || e.target.id === close.id) {
    popupWrapper.style.display = 'none';
  }
});*/


const popupWrapper = document.getElementById('popup-wrapper');
const close = document.getElementById('close');

/*①クリック時に実行する関数*/
function clickListener (e) {
  
    /*クリックした要素のIDを表示*/
    //alert( e.target.getAttribute("id") + "をクリックしました");
    var name = 'popup-wrapper_' + e.target.getAttribute("id");
    var nullname  = e.target.getAttribute("id");
    if (nullname != null)
    {
      const popupWrapper2 = document.getElementById(name);
      //popupWrapper.style.display = "block";
      
      popupWrapper2.style.display = "block";
      $(popupWrapper2).hide().fadeIn('slow');
      console.log(name);
    }
  
}

// ポップアップの外側又は「x」のマークをクリックしたときポップアップを閉じる
function clickListener2 (e) {
  var name = 'popup-wrapper_' + e.target.getAttribute("id");
  var nullname  = e.target.getAttribute("id");
  const popupWrapper_own = document.getElementById(name);
  if (nullname != null)
  {
    popupWrapper_own.addEventListener('click', e => {
      if (e.target.id === popupWrapper_own.id || e.target.id === close.id) {
        
        $(popupWrapper_own).fadeOut('fast');
        //popupWrapper_own.style.display = 'none';
      }
    });
  }
}

/*②IMG要素を全てセレクト*/
document.querySelectorAll(".child1").forEach((imgElm) => {
  /*③要素のクリックイベントにイベントリスナーを紐づける*/
  imgElm.addEventListener('click', clickListener);
  imgElm.addEventListener('click', clickListener2);
})

/*
// ポップアップの外側又は「x」のマークをクリックしたときポップアップを閉じる
popupWrapper.addEventListener('click', e => {
  if (e.target.id === popupWrapper.id || e.target.id === close.id) {
    popupWrapper.style.display = 'none';
  }
});
*/

//ボタン
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');

//クリックイベントを追加
scroll_to_top_btn.addEventListener( 'click' , scroll_to_top );

function scroll_to_top(){
  window.scroll({top: 0, behavior: 'smooth'});
};

//スクロール時のイベントを追加
/*window.addEventListener( 'scroll' , scroll_event );

function scroll_event(){
  
  if(window.pageYOffset > 400){
    scroll_to_top_btn.style.opacity = '1';
  }else if(window.pageYOffset < 400){
    scroll_to_top_btn.style.opacity = '0';
  }
  
};*/


 //上部画像の設定
$('.gallery').slick({
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  fade: true, //フェードの有効化
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});

//選択画像の設定
$('.choice-btn').slick({
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 20, //表示させるスライドの数
  focusOnSelect: true, //フォーカスの有効化
  asNavFor: '.gallery', //連動させるスライドショーのクラス名
});
  
//下の選択画像をスライドさせずに連動して変更させる設定。
$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  var index = nextSlide; //次のスライド番号
  //サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
  $(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});
  

