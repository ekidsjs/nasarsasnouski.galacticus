function run () {
    const rightAnswers = ['2', '1', '3', '1', '3'];
    const userAnswer = [];
    let raiting = 0;
    let status = '';
    const name = prompt("Введите свое имя: ", "Пользователь");
    const years = prompt("Сколько вам лет?", '100');
    userAnswer[0] =prompt ("Луна это планета? /n1 Да /n2. Нет" , '1');
    userAnswer[1] =prompt("Из чего состоит солнце? n1. Из газа\n2. Изо льда\n3. Из ваты","1");
    userAnswer[2] =prompt("Какой по счету марс от солнца? \n1. 1-й\n2.3\n3. 4-й", '1');
    userAnswer[3] =prompt("Есть ли у урана кольца? \n1. Да\n2. Нет", '1');
    userAnswer[4] =prompt("Какая самая большая планета солнечной системы \n1. Земля\n2. Луна\n3. Юпитер", '1');
    if (rightAnswers[0] === userAnswer  [0]) {
        raiting += 1;
    }
    if (rightAnswers[1] === userAnswer  [0]) {
        raiting += 1;
    }
    if (rightAnswers[2] === userAnswer[1]) {
     raiting +=1;
    }
    if (rightAnswers[3] === userAnswer[1]) {
        raiting +=1;
    }
    if (rightAnswers[4] === userAnswer[1]) {
        raiting +=1;
    }
    if (raiting <=2) {
    status= 'ты очень мало знаешь о космосе, тебе стоит читать больше книг.'    
    }
    else if (raiting <5){
        status='ты довольно хорошо знаешь космос, продолжай в том же духе и ты станешь космеческим рейнджером.'
    
    }
        else {
        status='ты знаешь о космосе практически всё,продолжай в томже духе,ты молодец!'
        }
        alert(`Привет, ${name}! Тебе уже ${years} лет и ${status}`);
    }
