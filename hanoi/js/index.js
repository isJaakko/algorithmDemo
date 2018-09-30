function hanoi(n, a, b, c) {
    if (n === 1) {
        move(a, c);
    }

    hanoi(n - 1, a, c, b);
    move(a, c);
    hanoi(n - 1, b, a, c);
}

function move(start, end) {
    console.log(`${start} -> ${end}`);
}