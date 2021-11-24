let stack = [];
let free = true;
let proc = false;

function newGame(){
  res();   

  for(let i = 0; i < 1000; i++){
    clickItem(Math.floor(Math.random() * 16));
  }
    
  let f = document.items.elements;
  while(f[15].value != ' '){
    clickItem(Math.floor(Math.random() * 16));
  }
}

// сброс
function res(){
  proc = false;
  let f = document.items.elements;
  stack = [];

  for (let i = 0; i < 15; i++){
    f[i].value = i + 1;
  }
  f[15].value = ' '; 
}

function swap(first, second){
  let f = document.items.elements;
  [f[first].value, f[second].value] = [f[second].value, f[first].value];
}
     
function clickItem(n){
  let f = document.items.elements;
    
    //проверяем кнопку справа если она есть
  if ((n % 4 != 3) && (f[n + 1].value == ' ')) {
    swap(n, n + 1);
    stack.push([n + 1, n]);
    return;
  }
  //проверяем кнопку слева если она есть 
  if ((n % 4 != 0) && (f[n - 1].value == ' ')) {
     swap(n, n - 1);
     stack.push([n - 1, n]);
     return;
  }
  //проверяем кнопку внизу
   if ((n <= 11) && (f[n + 4].value == ' ')) {
    swap(n, n + 4);
    stack.push([n + 4, n]);
    return;
   }
   //проверяем кнопку вверху
   if ((n >= 4) && (f[n - 4].value == ' ')) {
    swap(n, n - 4); 
    stack.push([n - 4, n]);
    return;
   }
}

  async function solve(){

    if(!free) {
      console.log('already solves');
      return;
    }

    free = false;
    let length = stack.length;
    proc = true;

    for(let i = 0; i < length; i++){
      let a = stack.pop();
      swap(a[0],a[1]);

      // задержка
      await new Promise(r => setTimeout(r, 150));

      // если была нажата кнопка play выйти из цикла
      if(proc == false) {
        free = true;
        return;
      }
    }

    free = true;
  }

  