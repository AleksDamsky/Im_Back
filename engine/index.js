/*learn JS once again*/

// все сущности в js является объектом
// Объект -- пара: значение

// Вложенный объект -- это объект в объекте

// Массив - объект и функция тоже. Числа и строки ведут себя как объекты.

// console.log("Hello world");
// console - объкт. log - метод(функция). "." - точечная запись(доступ к методу объекту.). () -- скобки, жто вызов метода. То, что находится в скобках - это аргумент.

// console.log("hello world");

// Вырадения, функции, объекты.

// // Любое выражение возвращает значение
// 'abc'
// 10
// 5+2
// c = 100

// > c =10
// 10
// > c
// 10
// > 10
// 10
// > c + 2
// 12
// > "lol " + "lol"
// 'lol lol'
// > a == 12 || b !== 3
// Uncaught ReferenceError: a is not defined
// > a = 12
// 12
// > b = 13
// 13
// > a <= 14 || b !== 2
// true
// > a < b && a > 2
// true

// переменной можно присваивать объекты

// Выражения с побочными действиями - side efects. Это выражения, которые не только возвращают значения, но и выполняют другие действия

// a = 5;
// a++;
// a++;
// console.log(a);

/*Переменные*/

// Переменные - это ребята, которые дают повторный доступ к значениям. В переменной сохраняется значение. Перменная - это как коробка, в которой что - то есть.

/*Имена переменных*/

// pascalCase -- Начинается с заглавных букв. Называют Типы и классы.

// DB_PASSWORD -- называют перменные. Значения должны быть известны до запуска приложения и не меняются в ходе работы. Это для констант.

// camelCase --  нижний рег ++ веохний кейс. Названия другим перерменным(осатльным).

//Названия должны быть понятными.

// let const var

// let a -- это объявление перменной. То есть, когда мы говорим: мне нужна вот такая переменная, создай ее.

// const c = 10 -- это объявление и присваивание значения переменной.

// a = true -- тут мы присваимваем значение.

// С помощью let можно рпсваивать и объявлять и в ходе работе менять. == можно менять

// С помощью const можно присвоить и оно будет у одной пременной до конца. ==  нельзя менять

// тип переменной определяется по типу того ЗНАЧЕНИЯ, присвоенного ей.

// const a = 10 (number)
// const b = 'lol' (string)

/*Типы*/

// Примитивные типы. Ссылочный тип.

// Переменная => имеет значение => имеет тоже значение(тип) == string/boolean(true, false)/number/null(сам указываешь отсутсвие значения переменной)/undefined(примитивный тип. Оно не определенно)/symbol(создание уникального значения).

// ссылочный тип -- object

// У нас есть примитивные типы и ссылочный тип значений. Примитивных 6 штук: строка, числовой, логический, нулл, андефайнд и символ. Почему они примитивные? Потому что они имеют всего две части -- переменная и значение. И все.
// Значеине, которое присваивается переменной. Это просто коробка, в которой есть содержимое.

// Что такой ссылчный тип значения -- это всего один суьъект -- object(obj). Объект имеет свойства -- метод и значение. A: 10, B: 3. Это свойство может носить не только одна перменная, но это свойство можно задавать и другим перменным. Ссылочный тип - это всего лишь носитель ссылки на свойства. Таких носителей может быть много. Причем, изменяя информацию в одном носителе, ты изменяешь по умолчанию информацию в источнике. Меняя значение свойства в одном носителе, ты меняешь значение свойства во всех носителях

// const objectA = {
//   a: 10,
//   b: true,
// };

// // console.log(objectA);
// console.log(objectA.a);

// const copyObjectA = objectA;

// copyObjectA.b = false;

// console.log(objectA.b);

// const copyCopyA = copyObjectA;

// copyCopyA.c = "lol";

// console.log(objectA.c);

// статическая и динамическая типизация

// JS -- это динамически типизированный язык.

// let a = 10;

// a = "lol";
// a = true;

// a = null;

// console.log(a);
// все это допустимо для js

// function lol() {
//   let a = 10;
//   console.log(a);
// }

// lol();
// для того, чтобы не испортить переменную в будущем, нужно использовать const

// const a = () => {
//   let a = 10;
//   console.log(a);
// };

// a();
// тут юзаем стрелочную функцию. Мы создаем функцию в константе.Мы

/*Объект - это тип перменных с парой ключ: значение.*/

// как выводится;
// console.log(myCity.city/);

// Точечная запись -- это как для вывода свойства, так и для добавления свойства.

// const bigHouse = {
//   flat: 300,
//   people: 600,
//   country: "Russia",
// };

// const copyHouse = bigHouse;
// copyHouse.color = "red";
// copyHouse.newObj = {
//   lol: "kek",
// };

// console.log(bigHouse);

// //как удалить свойство, которое нам не нужно больше?

// delete bigHouse.country;
// console.log(bigHouse);

// можно также использовать скобки.использовать == скобочная запись.

// const myCity = {
//   city: "Che",
// };

// myCity["lol"] = true;

// console.log(myCity);

// delete myCity.lol;
// console.log(myCity);

// Что такое вложенность?

// const objA = {
//   city: "Che",
//   info: {
//     country: "Russia",
//     old: 552,
//   },
// };

// delete objA.info.old;

// console.log(objA.info.old);

// const objA = {
//   course: "Anglish",
//   street: "Ilbecova",
//   hour: 6,
// };

// const copyObjA = objA;

// const copyObjA2 = copyObjA;

// copyObjA2.techer = true;
// copyObjA2.techerName = "Maria";

// console.log(objA);

// copyObjA2.street = "Russia street";

// delete copyObjA2.techerName;

// console.log(objA);

// мы можем использовать созданные перменные, как значения свойств объекта

// const a = 12;
// const b = "lol";

// const objA = {
//   old: a,
//   YouSay: b,
// };

// console.log(objA);

// можно использовать любое выражение, как значение

// смотри, как может быть вообще

// const a = 12;
// const b = "lol";
// что мы здесь видим? мы здесь наблюдаем совпадение имен свойств и значений.
// const objA = {
//   a: a,
//   b: b,
// };

// но как мы можем сделать в JS
// const objA = {  -- такой формат записи называется сокращенным
//   a,
//   b,
// };
// console.log(objA);

/*Глобальные объекты*/

// window(в консоле) & global(Node JS)

// window -- это глобальный объект в браузере. Если мы его вызовем, то получим большой перечень свойств, которые доступны этому глобальному объекту.

// унифицированный объект -- globalThis

/*Свойства глобальных объектов*/

// console.log(10); -------
// ------------------------
// window.console.log(10); -- это все одинаково
//-------------------------
// globalThis.console.log(10);

/*методы объекта*/

// метод объкта - это свойство объкта, значение которого функция.

// метод - это свойство объекта, которое содержит функцию.

// свойство объекта -- myCity.street

// метод объекта -- myCity.greeting()

// объект -- это набор свойств,которые имеют значения. Однако, если у свойство значение определяется функцией, то это свойство будет называться методом.

// JSON - javascript object notation. Это формат объекта данными между компьютерами в интернете.

// JSON.parse(файл сервера перводит в джейсон) ; JSON.stringify(перводит из джейсона в файл для сервера)

// const objA = {
//   job: "journal",
//   like: false,
// };

// const a = JSON.stringify(objA);

// Есть два свойства, которыми можно пользоваться при вызове JSONa == parse, stringify

// const person = {
//   Name: "Aleks",
//   old: 21,
//   job: "proGorod",
//   greteeng: function () {
//     console.log("say Hello!");
//   },
// };

// const a = JSON.stringify(person);
// console.log(a);

// const b = JSON.parse(a);

// console.log(b);

/*Мутация в JS*/

// это касается примитвных типов и ссылчных типов
// Мутация скорее касается объекта, так как он ссылочный и в разные перменные можно закидывать информацию исходного объекта. Затем, через любую новосозданную перменную с ссылкой на изначальный объект, информацию корня можно менять. Это называется мутацией.

// именив копию, вы будете менять и корневую информацию
// что делать, если хочешь избежать мутацию? Object.assign({}, pesron) -- он создаст новый объект, опираясь на тот объект, с которого мы могли делать копию.

// const a = {
//   // создали объект
//   say: "lol", // свойство №1
//   num: 2, // свойство №2
// };

// const b = Object.assign({}, a); // здесь мы создаем новый объект по типу того, что написан ранее(не копия)
// const c = b; // здесь мы создаем перменную, куда кладем ссылку на новый объект
// c.greet = "wooow"; // здесь мы изменяем исходный новый объект...но мы не меняем тот, самый изначальный(a)
// console.log(b);
// console.log(a);

// как вариант == {...person}

// 26.10.2022 ... 20:54
//Функции

// Это блко кода, который можно выполнять многократно
// блоки повторяющегося кода не должны повторяться
let a = 3;
let b = 12;
function nameFunc(a, b) {
  const c = a - b;
  console.log(c);
}

nameFunc(a, b);
