// set long conent
d3.selectAll('.grid-container > div').selectAll('p')
const real = document.querySelector('.real');
const dream = document.querySelector('.dream');
const title = document.querySelector('.title');

// onscroll function
// real.onscroll = function() {
//   dream.scrollTop = real.scrollTop * dream.scrollHeight / real.scrollHeight;
// }
dream.onscroll = function() {
  real.scrollTop = dream.scrollTop * real.scrollHeight / dream.scrollHeight * 3;
}

//real
const text1 = document.createElement('text1');
text1.innerHTML = 
  `
  <p>アイウエ¥オ</p>
  
  `;
real.appendChild(text1);

//title
const titleScript = document.createElement("p");
titleScript.className = 'titlescript';
titleScript.textContent = "私は5分しか寝てない気がするのに。";

title.appendChild(titleScript);

//dream
const text2 = document.createElement('text2');
text2.innerHTML = 
  `
  <p>アイウエ¥オ</p>
  
  `;
dream.appendChild(text2);