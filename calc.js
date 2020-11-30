butt.onclick = function() {
    let hours = +document.getElementById('hours').value; //Получаем часов в месяц
    let job = +document.getElementById('job').value; //Получаем отработано часов
    if (job > hours) {
        document.getElementById('text1').innerHTML='Похоже, Вы ошиблись, дружище! Введите данные снова';
    }
    let night = +document.getElementById('night').value; //Получаем ночных часов
    let prazd = +document.getElementById('prazd').value; //Получаем праздничных часов
    let prazdNight = +document.getElementById('prazdNight').value; //Получаем праздничных ночных часов
    let dayHour = 18256/hours; //Считаем цену часа
    let dayPrice = dayHour*job; //Считаем ЗП без надбавок
    let nightHour = dayHour*0.2; //Считаем надбавку за 1 ночной час
    let nightPrice = nightHour*night; //Считаем надбавку за ВСЕ ночные часы
    let prazdHour = dayHour; //Цена праздничного часа
    let prazdPrice = prazdHour*prazd; //Считаем надбавку за ВСЕ праздничные часы
    let prazdNightHour = prazdHour+nightHour; //Считаем надбавку за ночь праздничные часы
    let prazdNightHourPrice = (prazdHour+nightHour)*prazdNight;
    let calc = (dayPrice + nightPrice + prazdPrice + prazdNightHourPrice)*1.7;
    let ndfl = calc*0.13;
    let zarplata = calc - ndfl;
    if (zarplata<28000){
            document.getElementById('text1').innerHTML="Ваша смешная зарплата: "+Math.floor(zarplata) +' руб. Нужно лучше работать!';
    } else {
            document.getElementById('text1').innerHTML="Ваша царская зарплата: "+Math.floor(zarplata) +' руб. Вы Великолепны!';
        }
    }
