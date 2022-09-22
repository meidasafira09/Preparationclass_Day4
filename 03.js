let year = 2000;
let result = ""

if (year % 400 == 0) {
    result = "Kabisat"
  } else if (year % 100 == 0) {
    result = "Bukan Kabisat"
  } else if (year % 4 == 0) {
    result = "Kabisat"
  } else {
    result = "Bukan Kabisat"
  }

console.log(result);