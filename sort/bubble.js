// Bubble sort is algorithm that compares two adjacent elements and swaps them if they are in the wrong order.

const bubbleSort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] > data[j + 1]) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  console.log(data);
};

let data = [6, 7, 43, 1];
bubbleSort(data);
