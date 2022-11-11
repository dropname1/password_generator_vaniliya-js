//доступ к элементам из HTML документа (Например доступ к элементу где будет находиться пароль, за это отвечает переменная password)

//accessing elements from an HTML document(For example, access to the element where the password will be located, the password variable is responsible for this)
let range = document.querySelector('.passwordRange')
let button = document.querySelector(".generateButton");
let password = document.querySelector(".password")
let small = document.querySelector(".small");
let capital = document.querySelector(".capital");
let simbol = document.querySelector(".simbol");
let number = document.querySelector(".number");
let passwordWrapper = document.querySelector(".passwordWrapper");

// переменные которые отвечают за выбранные  чекбоксы, (Например: если нажать чекбокс ' small',  переменная isSmal будет true) 

// variables that are responsible for the selected checkboxes, (For example: if you click the 'small' checkbox, the isSmal variable will be true)
let isSmal = false;
let isCapital = false;
let isSimbol = false;
let isNumber = true;
let isHasTrueCheckbox = true;
number.checked = true;


//буквы и символы которые которые могут генерироваться  в этой программе, хранятся в массивах Letters и Simbols

//letters and symbols that can be generated in this program are stored in arrays Letters and Simbols
let Letters = [
    'a','b','c','b','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
] // 26 items 
let Simbols = [
    '!','@','#','$','%','^','&','*','(',')','_','-','=',
    '+','/',',','.','{','}','[',']',':',';','~','`','?'
]


//на все 4 чекбокса повешены функции, которые меняют переменные: isSmal, isCapital, isSimbol, isNumber на противопложное значение
//all 4 checkboxes have functions that change variables: isSmal, isCapital, isSimbol, isNumber to the opposite value
small.addEventListener("change",()=> {
    isSmal = !isSmal
})
capital.addEventListener("change", () => {
  isCapital = !isCapital
})
simbol.addEventListener("change", () => {
  isSimbol = !isSimbol;
})
number.addEventListener("change", () => {
  isNumber = !isNumber;
})


//функция которая проверяет наличие хотя бы одного нажатого чекбокса, если нету ни одного нажатого чечкбокса, то вызовётся Alert  
//a function that checks for the presence of at least one clicked checkbox, if there is not a single clicked checkbox, then Alert will be called
function isTrueCheckbox () {
    let checkboxes = [isSmal,isCapital,isNumber,isSimbol]
    if (checkboxes.includes(true)) {
        isHasTrueCheckbox = true
    }   else {
        isHasTrueCheckbox = false
        alert("choose at least one")
    }
}

//функция которая позволяет скопировать сгенерированный пароль при нажатии на элемент 
//a function that allows you to copy the generated password when clicking on an element
function Copied_function (element) {
        let copyText = element.textContent;
        navigator.clipboard.writeText(copyText)
         .then(text => {
             // `text` содержит текст, прочитанный из буфера обмена
         })
         .catch(err => {
             // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
         console.log('Eroooooooooor', err);
})}

passwordWrapper.addEventListener('click',()=> {
    Copied_function(password)
})


button.addEventListener('click',()=> {
  //переменная которая хранит длину пароля
  //a variable that stores the length of the password
  let passwordLength = range.value;
  //переменная куда постепенно будут добавляться символы генерируемого пароля
  //a variable where the characters of the generated password will be gradually added
  let generatedPassword = "";
  //проверка наличия нажатых чекбоксов
  //checking for checked checkboxes
  isTrueCheckbox();

  //цикл, который генерирует рандомные значения в зависимости от выбранных чекбоксов
  //a loop that generates random values depending on the selected checkboxes
  while (passwordLength > 0 && isHasTrueCheckbox === true) {
    if (isNumber) {
      generatedPassword += Math.floor(Math.random() * 10);
      passwordLength--;
    }

    if (isSmal) {
      let amount;
      amount = Math.floor(Math.random() * 26);
      generatedPassword += Letters[amount];
      passwordLength--;
    }

    if (isCapital) {
      let amount;
      amount = Math.floor(Math.random() * 26);
      generatedPassword += Letters[amount].toUpperCase();
      passwordLength--;
    }

    if (isSimbol) {
      let amount;
      amount = Math.floor(Math.random() * 26);
      generatedPassword += Simbols[amount];
      passwordLength--;
    }
  }
  if (isHasTrueCheckbox === true) {
    password.textContent = generatedPassword;
  }
})