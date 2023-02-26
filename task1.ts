function calc(a:number) :void {
    if (a == 0 || a == 2) a += 7;
    else a = a/10;
    console.log(a);
}

calc(5);
calc(0);
calc(-3);
calc(2)
