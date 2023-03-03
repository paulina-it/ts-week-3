var obj = {
    'кот': 'мяу',
    'собака': 'гав',
    'корова': 'муу'
};
for (var k in obj) {
    console.log(k + ' говорит ' + obj[k]);
}
