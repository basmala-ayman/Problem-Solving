// 1st Solution
let word = 'basmala';
let reversedWord = [...word].reverse().join('');

console.log(reversedWord);
//////////////////////////////////////////////////////
// 2nd Solution
let word2 = 'basmala';
let reversedWord2 = '';
for (let i = word2.length-1; i >= 0; i--) {
    reversedWord2 += word2[i];    
}

console.log(reversedWord2);