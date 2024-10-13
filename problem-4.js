// 1st Solution
let arr2 = [1, 1, 1, 2, 2, 3];
let uniArr2 = []
arr2.forEach(e => {
    if (!uniArr2.includes(e)) {
        uniArr2.push(e);
    }
})
console.log(uniArr2)
////////////////////////////////////////////
// 2nd Solution
let arr = [1, 1, 1, 2, 2, 3];
let uniArr = new Set([...arr]);
uniArr = Array.from(uniArr)
console.log(uniArr)