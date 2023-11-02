// var hey = 'a';
// var wan = 'b';
// // alert=hey+wan;

// console.log(hey + wan);
// console.log(hey + " " + wan);

// var r = 'two';
// console.log('one' + r);
// console.log('one' + ' ' + r);

// var a = 2;
// var b = 3;
// console.log(a + b);

// var a = 5;
// var v = 5;
// console.log(a + v);

// // var d = h;
// var g = 20;
// console.log(g % 6);

// var n = 6;
// console.log(-n);
// //предекремент
// console.log(--n);
// console.log(n);
// //преинкремент
// var p = 7;
// console.log(++p);
// console.log(p);
// console.log(--p);
// //постдекремент
// var m = 8;
// console.log(m--);
// console.log(m);
// //постинкремент
// console.log(m++);
// console.log(m);

// var p = 8;
// p += 4;
// console.log(p);
// var x = 10;
// x -= 5;
// console.log(x);

// var z = 4;
// z *= 4;
// console.log(z);

// var q = 3;
// q /= 3;
// console.log(q);


// //оперыации сравнения и логические операции
// var s = 4;
// console.log(s > 5);

// console.log(s < 5);

// console.log(s >= 2);
// console.log(s <= 3);
// //нестрогое равно
// console.log(s == 4);
// console.log(s == 5);
// //не равно
// console.log(s != 5);
// //тождественно строгое сравнение
// console.log(s === 4);
// console.log(s === 8);
// console.log(s === '4');
// console.log(s !== 5);
// console.log(s !== 4);
// console.log(s !== '4');
// //логические операции
// //логическое И
// var name = 'Alex';
// var age = 38;
// console.log((name == 'Alex') && (age > 37));
// console.log((name == 'Alex') && (age < 49));
// console.log((age > 40) && (name == 'Alex'));
// //логическое ИЛИ
// var distance = 2000;
// var summa = 700;
// console.log((distance < 1000) || (summa > 500));
// console.log((distance < 1000) || (summa > 1000));
// //логичкское НЕ
// var temperature = 30;
// var zharko = (temperature > 25);
// console.log(zharko);
// console.log(!zharko);
// //преобразование типов


// alert(x + 15);

// var name = 'Olha';
// var age = 37;
// console.log((name == "Olha") && (age < 40));
// console.log((name == 'Tur') || (age > 35));


//преобразует значение из строки в целое

// console.log(parseInt('5'));
// console.log(parseInt('33кг'));
// console.log(parseInt('-3.5'));
// console.log(parseInt('F3'));

// console.log(parseFloat('-3.5'));

// console.log(Number('2'));
// console.log(Number('-3.3'));
// console.log(Number(''));


//Оператор if
// var money = 5000;
// if (money > 7000) {
//    alert('денег нет');
//    alert('но вы справитесь');
// }
// else
//    alert('денег девать некуда');

// alert(33);
// var x = 5;
// alert(x + 5);
// //вывод выражения в консоль JS
// console.log(x + 6);

// // prompt(hi); выводит окно и кнопки ок и отмена
// var name = prompt('you name');

// var name = prompt('введите ваше имя', 'Alex');

// var showDog = confirm('hjhjhjh');

// var speed = parseFloat('55s');
// console.log(speed);
// console.log(isNaN(speed));
// var speed=parseFloat('sss');

// console.log(isNaN(speed));

// var age = 5;
// var t = (age <= 3) ? 'малыш' : 'ребенок';
// console.log(t);

// let b = confirm('Введете ваше имя?' )
// // alert('Твоя фамилия:' + `${b}`)
// if(b===true){
//    let a = prompt("введите ваше имя",'Например Коля' )
// alert('Твое имя: '+`${a}`)
// console.log(a)
// a+='K'
// console.log(a)
// } else {alert('Пока!'), console.log('Пока')}


// var age=1;
// do {
//   console.log( 'Мне ' + age + ' лет' );
//   age++;
// } while ( age<30 );
// console.log('Всё, я большой!');
// let a = 1;
// while(a<30){

//    console.log(a)
//    a++
// }
// for ( var age=1; age<30; age++ )
//   console.log( 'Мне ' + age + ' лет' );
// console.log('Всё, я большой!');
// try {
//    console.log('до ошибки');
//    var a=bbbbb;
//    console.log('после ошибки');
//  }
//  catch ( ex ) {
//    console.error('возникло исключение!');
//    console.error('тип исключения: '+ex.name);
//    console.error('текст исключения: '+ex.message);
//  }
//  try {
//    console.log('до генерации исключения');
//    throw { name:'MyError', message:'что-то пошло не так!' };
//    console.log('после генерации исключения');
//  }
//  catch ( ex ) {
//    console.error('возникло исключение!');
//    console.error('тип исключения: '+ex.name);
//    console.error('текст исключения: '+ex.message);
//  }

//Предописанный класс Object
// let h = {a:3, b:8, c:9};
// console.log(Object.keys(h));
// console.log(Object.keys(h));

/*Разработка веб-приложений на JavaScript	49	Учебное пособие (версия 17)
Программа Front-end Developer	Алексей Локтев
(B.30) */
// console.log(Math.abs(-5.7))
// let a=-1, b=4.9, c=-9; v=9;
// console.log(Math.max(a, b, c));
// console.log(Math.min(a, b, c));
// console.log(Math.round(b));
// console.log(Math.ceil(b));
// console.log(Math.floor(b));
// console.log(Math.sqrt(v));
// console.log(Math.pow(v, 2));
// console.log(Math.random());
// console.log(Math.PI);


// function roundMod(n,m){
// console.log(Math.round(n/m)*m)
// }
// roundMod(7.8, 10)

// function randomDiap(n,m){
//    console.log(Math.floor(
//       Math.random()*(m-n+1)+n
//    ))
// }

// randomDiap(1, 100);

// console.log(Number.NaN)
// console.log((4.84561).toFixed(4))
// console.log( (5.1234567).toFixed() );

// console.log('ljkdfl lsdfsdf sfsdljj '.length)
// console.log('Alex'.charAt(3))
// console.log("Olga"[0])
// console.log('Roma'.charCodeAt(1))
// var s='Утром деньги, вечером стулья!';
// console.log( s.charCodeAt(2) );
// console.log(s.substr(1, 3))
// console.log(s.slice(4, 8))
// console.log(s.split(' '))

// function twoSort(s) {
//    let b = [];
//    s.sort().forEach((v, i, a) => b.push(v[0] + "***"));
//    console.log(b.join(''));
// }
// twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
// twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]);



// function twoSort(s) {
//    console.log(s.sort()[0].split('').join('***'));
// }
// twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
// twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]);


let arr = [];

console.log(arr.length===0)


// function sumArray(arr){
//    function fra(r,v,i,a) {
//      return r+v; }
//    if(arr.length===0){
//      return(0)
//    }else{
//      return (arr.reduce(fra, 0))
//    }
//  }
//  sumArray([1,2,3,4])
//  sumArray([])
//  sumArray([397, 403, 764, 142])