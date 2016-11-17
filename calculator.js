require('./utils.js');
MODE = DEG;

var y1 = [9.9,9.4,9.3,9.6,10.2,10.6,10.3,10,10.3,10.1];
var y2 = [10.2,10.6,10.7,10.4,10.5,10,10.2,10.7,10.4];
var y3 = [36925,45300,36240,32100,37210,48360,36200,33500];
var y4 = [34318,42280,35500,31950,38015,47800,37810,33215];

function mean(sample) {
    let x=0;
    for (let i=0; i<=sample.length-1; i++) {
        x += sample[i];
    }
    x /= sample.length
    return(x);
}

function pairdiff(sample1, sample2) {
    let x = [];
    for (let i = 0; i <= sample1.length - 1; i++) {
        x[i] = sample1[i] - sample2[i];
    }
    return(x)
}

function variance(sample) {
    let mu = mean(sample);
    let x = 0;
    for (let i=0; i<=sample.length-1; i++) {
        x += pow(2,mu-sample[i]);
    }
    x /= sample.length-1;
    return(x);
}

out.cyan(mean(y1));
out.green(mean(y2));
out.red(pairdiff(y3,y4));
out.blue(variance(y1));



// require('./utils.js');
// MODE = DEG;

// function Romberg(f, a, b, n, r) {
//     let h = b - a;
//     r[0] = [];
//     r[0][0] = (h / 2) * (f(a) + f(b));

//     for (let i = 1; i <= n; i++) {
//         r[i] = [];
//         h /= 2;
//         let sum = 0;

//         for (let k = 1; k <= pow(2, i) - 1; k += 2) {
//             sum += f(a + k * h);
//         }
//         r[i][0] = 0.5 * r[i - 1][0] + sum * h;
//         for (let j = 1; j <= i; j++) {
//             r[i][j] = r[i][j - 1] + (r[i][j - 1] - r[i - 1][j - 1]) / (pow(4, j) - 1);
//         }
//     }
// }



// function f(x) {
//     return 4 / (1 + x * x);
// }

// // function f(x) {
// //     return pow(e, -pow(10 * x, 2));
// // }

// // let f;
// let a = 0;
// let b = 2;
// let n = 10;
// let r = [];
// let j = [];

// Romberg(f, a, b, n, r);


// out.array2d(r, 3);
// out.red("Joe");
