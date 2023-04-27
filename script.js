// const OPERATIONS = {
//     "+": (a,b) => a + b,
//     "-": (a,b) => a - b,
//     "*": (a,b) => a * b,
//     "/": (a,b) => a / b
// }
// function  calculate({a,b,operation}){
//     let result = null;
//     let operator = OPERATIONS[operation]
//     result = operator(a,b)
//     return result;
// }

// let input1 = document.querySelector(".a");
// let input2 = document.querySelector(".b");
// let btnSelect = document.querySelector(".btnselect");
// let btnSumma = document.querySelector(".summa");
// let btnVichitanie = document.querySelector(".vichitanie");
// let btnUmnojit = document.querySelector(".umnojit");
// let btnRazdelit = document.querySelector(".razdelit");
// function click(operation){
//     let a = Number(input1.value);
//     let b = Number(input2.value);

//     let result = calculate({
//         a,
//         b,
//         operation
//     });

//     alert(result);
// }
// btnSumma.addEventListener("click",() => click("+"));
// btnVichitanie.addEventListener("click",() => click("-"));
// btnUmnojit.addEventListener("click",() => click("*"));
// btnRazdelit.addEventListener("click",() => click("/"));

// function getFactorial(n) {
//     if (n==1) {
//         return n;
//     }
//     return n * getFactorial(n-1);
// }

// let factorial = getFactorial(10);
// console.log(factorial);

// let words = ['hello','hi','world'];
// console.log(words)
// words.forEach(word => {
//     console.log(word);
// })

// let word = words[0];
// console.log(word);
// for(let i = 0 ; i<word.length ; i++){
//     console.log(word.charAt(i));
// } 

// Цифры Фибаначи
function productFib(prod){
    let arr = [0,1];
    for(let i = 2;i<100;i++){
      arr[i] = arr[i-2] + arr[i-1]
    }
    let arr1 = [];
    for(let i = 0;i<arr.length;i++){
      arr1[i] = arr[i] * arr[i+1];
      if(arr1[i] >= prod) {
        arr1 =[arr[i],arr[i+1]] 
        break;
      };
    }
    if(arr1[0]*arr1[1] == prod){
        arr1.push(true)
    }else{
        arr1.push(false)
    }
    return arr1;
}

function productFib(prod){
    var n = 0;
    var nPlus = 1;  
    while(n*nPlus < prod) {
      nPlus = n + nPlus;
      n = nPlus - n;
    }
    return [n, nPlus, n*nPlus===prod];
  }

function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

// IP validation
// function isValidIP(str) {
//     const octets = str.split('.')							
//     return (octets.length === 4) &&	octets.reduce((acc, octet) => (acc === true) &&	(String(Number(octet)) === octet) && (Number(octet) >= 0) && (Number(octet) <= 255), true)
//   }

// ror13 english and russian
function rot13(str){
  let arr = [];
  let englishLower = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  let englishUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let russianLower = 'абвгдеёжзийклмнопрстуфхцчшщьыъэюяабвгдеёжзийклклмнопрстуфхцчшщьыъэюя';
  let russianUpper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  str = str.split('');
  str = str.map((item)=>{
    if(item == englishLower.split('').find((item2)=>{return item2 == item})){
      return item = englishLower[englishLower.indexOf(item) + 13];
    }else if(item == englishUpper.split('').find((item2)=>{return item2 == item})){
      return item = englishUpper[englishUpper.indexOf(item) + 13];
    }else if(item == russianLower.split('').find((item2)=>{return item2 == item})){
      return item = russianLower[russianLower.indexOf(item) + 13];
    }else if(item == russianUpper.split('').find((item2)=>{return item2 == item})){
      return item = russianUpper[russianUpper.indexOf(item) + 13];
    }else{
      return item;
    }
  });
  return str.join("");
}
console.log(rot13('Cevirg'))

// Проверка. Цифро буквенная строка
// const alphanumeric = (str) => {
//   if (!str.length) return false;
//   const ALLOWED_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   for (let char of str) {
//     if (!ALLOWED_CHARS.includes(char)) return false;
//   }
//   return true;
// };
// console.log(alphanumeric(""))

// Последняя цифра
// var lastDigit = function(str1, str2){
//   for(let i = 0;i<10;i++){
//     if(str1[str1.length-1] == i){
//       str1 = i;
//     }
//   }
//   let object = {
//     0:[0,],
//     1:[1,],
//     2:[2,4,8,6,],
//     3:[3,9,7,1,],
//     4:[4,6,],
//     5:[5,],
//     6:[6,],
//     7:[7,9,3,1,],
//     8:[8,4,2,6,],
//     9:[9,1,],
//   }
//   for (let key in object){
//     if(key == str1){
//       var str1Arr = object[key];
//       break;
//     }
//   }
//   let answer;
//   if(str2 != 0){
//     str2 = str2.toString().split('').reverse();
//     str2 = [str2[0],str2[1]];
//     str2 = str2.reverse().join('')
//     if(str2 % str1Arr.length){
//       answer = str1Arr[(str2 % str1Arr.length)-1];
//     }else{
//       answer = str1Arr[str1Arr.length-1];
//     }
//   }else{
//     answer = 1;
//   }
//   return answer;
// }
// console.log(lastDigit("", ""))

// var lastDigit = function(str1, str2){
//   return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10
// }


// let n = 42;
// let item = [];
// for(let i = 1;i<=42;i++){
//   if(!(42%i)){
//     item.push(i);
//   }
// }
// console.log(item)


// Возврат числа и суммы квадратов чисел, кратных ему в промежутке от m до n  
// function listSquared(m, n) {
//   let arr = [];
//   for(let i = m;i<=n;i++){
//     arr.push(i);
//   }
//   for(let i = 0;i<arr.length;i++){
//     arr[i] = arr[i].toString().split()
//     for(let o = 1;o<=arr[i][0];o++){
//       if(!(arr[i][0]%o)){
//         arr[i].push(o);
//       }
//     }
//   }
//   for(let i = 0;i<arr.length;i++){
//     arr[i].splice(0,1);
//   }
//   for(let i = 0;i<arr.length;i++){
//     arr[i] = arr[i].map((item)=>{return item**2});
//   }
//   for(let i = 0;i<arr.length;i++){
//     arr[i] = arr[i].reduce((previous,item)=>{
//       return previous + item;
//     });
//   }
//   let result = [];
//   for(let i = 0;i<arr.length;i++){
//     if(Math.sqrt(arr[i]) === parseInt(Math.sqrt(arr[i]))){
//       result.push([i+m,arr[i]])
//     }
//   }
//   return result;
// }
// console.log(listSquared(1, 1000))

// function listSquared(m,n){
//   let arr = []
//   for(let i = m;i<=n;i++){
//     let temp = 0;
//     for(let j = 1;j<=i;j++){
//       if(i%j == 0) temp += j*j; 
//     }
//     if(Math.sqrt(temp)%1 == 0) arr.push([i,temp])
//   }
//   return arr;
// }
// console.log(sumOfSquare(1,500))

// function sumIntervals(intervals) {
//   let extra = [];
//   for(let i = 0;i<intervals.length;i++){
//     for(let o = 0;o<2;o++){
//       extra.push(intervals[i][o])
//     }
//   }
//   console.log(extra)
// }
// console.log(sumIntervals([[1, 5],[10, 20],[1, 6],[16, 19],[5, 11]]));

//https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

// function incrementString (string) {
//   let arr1 = 'abcdefjhijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ';
//   let arr2 = '0123456789';
//   let arr3 = '123456789'

// }
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// console.log(incrementString('fdpfsfesdgffsdgfdddfsf1'));
// function scramble(str1, str2) {
//   str2 = str2.split('');
//   str2 = str2.filter((item)=>{
    
//   });
// }
// console.log(scramble('scriptingjava',     'javascript'))

// let str = 'Hello, world!';
// function pigIt(str){
//   return str.replace(/\w+/g,(w)=>{
//     return w.slice(1) + w[0] + 'ay';
//   });
// }
// console.log(pigIt(str))

function multiply(a, b){
  a = a.split('')
  let extra = a.findIndex((item)=>{
    return item != 0;
  })
  a = a.join('').slice(extra)
  let n = BigInt(a)
  let m = BigInt(b)
  return (n*m).toString();
}
console.log(multiply("1009", "03"))



var reshay1 = prompt('привет мудило  решай ппример: 2+3=?','')
if(reshay1 != 5){
  do {
    var extr = prompt('ты даун нахуй ты живёшь, перерешивай');
    if(reshay1 == 5) break;
  } while (extr != 5);
}
console.log('2+3=5')
console.log(`Твой ответ: 2+3=${reshay1}`)



var reshay1 = prompt('привет сладкий  решай пример: 2*3=?','')
if(reshay1 != 6){
  do {
    var extr = prompt('кто твоя мама? singitlera reshay 2*3=?');
    if(reshay1 == 6) break;
  } while (extr != 6);
}
console.log('2*3=6')
console.log(`Твой ответ: 2*3=${reshay1}`)



var reshay1 = prompt('2-3=?','')
if(reshay1 != -1){
  do {
    var extr = prompt('ты даун нахуй ты живёшь, перерешивай 2-3=?');
    if(reshay1 == -1) break;
  } while (extr != -1);
}
console.log('2-1=-1')
console.log(`Твой ответ: 2-1=${reshay1}`)



var reshay1 = prompt('привет мудило  пример решай: 2%3=?','')
if(reshay1 != 2){
  do {
    var extr = prompt('ты даун нахуй ты живёшь, перерешивай 2%3=?');
    if(reshay1 == 2) break;
  } while (extr != 2);
}
console.log('2%3=2')
console.log(`Твой ответ: 2%3=${reshay1}`)



var reshay1 = prompt('привет сладкий  решай пример: 3/3=?','')
if(reshay1 != 1){
  do {
    var extr = prompt('ты даун нахуй ты живёшь, перерешивай 2/3=?');
    if(reshay1 == 1) break;
  } while (extr != 1);
}
console.log('3/3=1')
console.log(`Твой ответ: 3/3=${reshay1}`)