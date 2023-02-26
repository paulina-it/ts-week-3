function calcNetSalary(salary) {
    var net = salary;
    if (salary <= 6000)
        net *= 0.9;
    else if (salary <= 10000)
        net *= 0.85;
    else if (salary <= 15000)
        net *= 0.825;
    else if (15000 < salary)
        net *= 0.8;
    return net;
}
console.log(calcNetSalary(5000));
console.log(calcNetSalary(25000));
console.log(calcNetSalary(12000));
