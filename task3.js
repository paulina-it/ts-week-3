var arr;
function pushWeekdays(lang) {
    if (lang == 'en') {
        arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    }
    else if (lang == 'ru') {
        arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    }
}
function pushWeekdaysSwitch(lang) {
    switch (lang) {
        case 'en':
            arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        case 'ru':
            arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    }
}
