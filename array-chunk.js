var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function chunk(array, size) {
    let newArray = [];
    for (let i = 0; i < arr.length; i += size) {
        console.log(`i = ${i},  i + chunkSize = ${i + size}`);
        newArray.push(arr.slice(i, i + size));
    }
    return newArray;
}

const chunckedArray = chunk(arr, 2);
console.log(`chunckedArray = ${JSON.stringify(chunckedArray)}`);