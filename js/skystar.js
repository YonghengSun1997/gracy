// poem
var words=[
    '茜茜生日快乐',
    '要一直好好的',
    '偷偷表白茜茜',
    '有你真好',
    '谢谢你和我在一起',
    '和茜茜天下第一好',
    '茜茜说了算',
    '茜茜是老大',
    '都听茜茜的',
    '茜茜永远最美',
'茜茜胜过世上所有美好',
'茜茜的笑容是最美的风景',
'陪茜茜走过每一个春夏秋冬',
'茜茜是我心中的唯一',
'爱茜茜一辈子不变',
'和茜茜在一起超幸福',
'茜茜是我的小幸运',
'茜茜的笑容最甜',
'愿茜茜每天都快乐',
'茜茜就是我的阳光',
'一辈子陪着茜茜',
'一生只愿守护茜茜',
'永远保持开心',
'偷偷喜欢茜茜',
'有茜茜在真幸福',
'谢谢茜茜的陪伴',
'和茜茜在一起最棒',
'茜茜最可爱',
'茜茜是最厉害的',
'一切都听茜茜的'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '茜茜，今晚的整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体';
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '从前从前，有个人爱你很久';
        textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体';
          texttwo.innerHTML = '';
      },60000)
      setTimeout(function(){
        textone.innerHTML = '但偏偏，风渐渐';
        textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体';
          texttwo.innerHTML = '';
      },80000)
      setTimeout(function(){
        textone.innerHTML = '把距离吹得好远';
        textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体';
          texttwo.innerHTML = '';
      },100000)
      setTimeout(function(){
        textone.innerHTML = '要一直好好的';
        textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体';
          texttwo.innerHTML = '';
      },120000)
      setTimeout(function(){
        textone.innerHTML = '茜茜，生日快乐';
        textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体';
          texttwo.innerHTML = '';
      },140000)


 
