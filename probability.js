var chances = [];
for (let i = 0; i < 1000; i++) {
  chances.push(Math.floor(Math.random() * 20));
}

const unique = chances.filter((x, i, a) => a.indexOf(x) === i).sort((a, b) => a - b);

for (let j = 0; j < unique.length; j++) {
  var count = 0;
  for (let k = 0; k < chances.length; k++) {
    if (unique[j] === chances[k]) {
      count++;
    }
  }
  console.log(`${unique[j]} - ${((count / 1000) * 100).toFixed(2)}%`);
}
