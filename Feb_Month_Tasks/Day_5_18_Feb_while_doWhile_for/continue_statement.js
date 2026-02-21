function continueExample() {
  let i = 1;

  while (i <= 5) {
    if (i === 3) {
      i++;
      continue;
    }
    console.log(i);
    i++;
  }
}

continueExample();