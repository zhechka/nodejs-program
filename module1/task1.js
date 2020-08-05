function strReverser(str){ 
    const reversedStr = str.toString().split('').reverse().join('');
    process.stdout.write(`${reversedStr}\n`);
}

process.stdin.resume().addListener('data', strReverser);