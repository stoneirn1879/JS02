

var i = 0;
while (i < 101) {
    console.log(i);
    i+= 2;
}


var c = 100;
while ( c > -1) {
    console.log(c);
    c-=3;
}


for (let a = 1; a < 101; a+=2) {
        console.log(a);
    }


for (let b = 0; b < 101; b++) {
    if (b % 3 == 0 && b % 5 == 0) {
        console.log("HelloWorld");
    }
    else if (b % 3 == 0) {
        console.log("Hello");
    }
    else if (b % 5 == 0) {
        console.log("World");
    }
    else {
        console.log(b);
    }
}

