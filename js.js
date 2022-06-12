if (window.File && window.FileReader && window.FileList && window.Blob) {
  document.getElementById('file').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file)
    reader.onload = () => {
      const arr = reader.result.split('\n').map(item => +item);
      // 3. Median
      const arrayHalf = arr.length / 2;
      if (arr.length % 2 === 0) {
        const median = 0.5 * (arr[arrayHalf] + arr[arrayHalf + 1]);
        console.log('Median via half sum neighbors', median);
      } else {
        const median = arr[Math.ceil(arrayHalf)];
        console.log('Median', median);
      }

      // 4. Average arithmetic
      const average = arr.reduce((a, i) => a + i, 0) / arr.length;
      console.log('Average arithmetic', average);

      // 5. The largest sequence of numbers witch increase, for ex. -4390, -503, 3, 16, 5032
      { // start block scope
        const RESULT = [];
        let subArray = [];

        for (let i = 0; i < arr.length; i++) {
          if (arr[i] <= arr[i + 1]) {
            if (subArray.length === 0) {
              subArray.push(arr[i], arr[i + 1]);
            } else {
              subArray.push(arr[i + 1]);
            }
          } else {
            RESULT.push(subArray);
            subArray = [];
          }
        }
        console.log('Task 5', RESULT.sort((a, b) => b.length - a.length)[0]);
      } // end block scope


      // 5. The largest sequence of numbers witch decrease, for ex. 5032, 16, 3, -503, -4390
      { // start block scope
        const RESULT = [];
        let subArray = [];

        for (let i = 0; i < arr.length; i++) {
          if (arr[i] >= arr[i + 1]) {
            if (subArray.length === 0) {
              subArray.push(arr[i], arr[i + 1]);
            } else {
              subArray.push(arr[i + 1]);
            }
          } else {
            RESULT.push(subArray);
            subArray = [];
          }
        }

        console.log('Task 6', RESULT.sort((a, b) => b.length - a.length)[0]);
      } // start block scope


      const arrSorted = arr.sort((a,b) => a - b); // sort of arr on place
      // 1. Max number
      console.log('Min', arrSorted[0]);

      // 2. Min number
      console.log('Max', arrSorted[arrSorted.length - 1]);

    }
  });
} else {
  console.log('File API is not supported!');
}