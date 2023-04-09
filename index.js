class DuplicatesFinder {
  constructor(N) {
    this.N = N;
  }
  
  findDuplicates(array) {
    if (array.length !== this.N + 2) {
      console.log("Размер массива не соответствует условию N+2");
      return null;
    }
    
    const duplicates = [];
    array.forEach((item, index) => {
      if (item < 1 && item > this.N) {
        console.log("Элементы массива должны быть в диапазоне [1,N]");
        return null;
      }
      if (array.indexOf(item, index + 1) !== -1 && duplicates.indexOf(item) === -1) {
        duplicates.push(item);
      }
    });

    if (duplicates.length === 0) {
      console.log("Дубликаты не найдены");
      return null;
    }

    return duplicates;
  }
}

const arr = [1, 1, 5, 6, 3, 3, 22, 5];
const duplicatesFinder = new DuplicatesFinder(6);
const result = duplicatesFinder.findDuplicates(arr);
console.log(result); 
