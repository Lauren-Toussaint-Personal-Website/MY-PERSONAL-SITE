function createArray(FZ) {

    let newArrayFZ = [];

    for (let i = 1; i <= FZ; i++) {

        newArrayFZ.push(i);
    }

    return newArrayFZ;
}

let FZ = 100;
let arr = createArray(FZ);
console.log(arr);
