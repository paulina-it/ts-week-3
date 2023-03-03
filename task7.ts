let obj = {
	'кот': 'мяу',
	'собака': 'гав',
	'корова': 'муу',
};

for (const k in obj) {
    console.log(k + ' говорит ' + obj[k]);
}