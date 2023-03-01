let input = <HTMLInputElement>document.getElementById('input1');

input.oninput = () => {
  let value = input.value;
  let arr = value.split('\n');
  let ans: Map<string, Array<string>> = new Map();

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].split(':')[1].trim().substring(0, 6) == 'module') {
      let module = arr[i].split(':')[1].trim().substring(6).trim();
      let j = i + 1;
      let children = [];
      while (
        j < arr.length &&
        arr[j].split(':')[1].trim().substring(0, 6) == 'import'
      ) {
        children.push(arr[j].split(':')[1].trim().substring(6).trim());
        j++;
      }
      ans.set(module, children);
    }
  }
  let output = <HTMLInputElement>document.getElementById('output1');
  console.log(Object.fromEntries(ans));
  output.value = JSON.stringify(Object.fromEntries(ans));
};

export {};
