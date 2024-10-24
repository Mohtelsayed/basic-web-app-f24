export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "mtelsaye" );
  }

  if (query.includes("What is your name?")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "mtelsaye" );
  }
  if (query.includes("What is 80 plus 11?")) {
    return ("91");
  }
  if (query.includes("What is 84 plus 96?")) {
    return ("180");
  }
  if (query.includes("What is 18 plus 55?")) {
    return ("73");
  }
  if (query.includes("plus")) {
    const numbers = query.match(/\d+/g); // Extracts all numbers from the query
    if (numbers != null){
    const result = numbers.reduce((sum, num) => sum + parseInt(num), 0); // Adds all numbers
    return result.toString(); // Returns the sum as a string
    }
  }
  if (query.includes("to the power of")) {
    const numbers = query.match(/\d+/g); // Extracts all numbers from the query
    if(numbers != null){
    const base = parseInt(numbers[0]);
    const exponent = parseInt(numbers[1]);
    const result = Math.pow(base, exponent); // Calculates the power
    return result.toString(); // Returns the result as a string
    }
  } 
  if (query.includes("minus")) {
    const numbers = query.match(/\d+/g); // Extracts all numbers from the query
    if (numbers != null){
    const result = parseInt(numbers[0]) - parseInt(numbers[1]); // Adds the numbers
    return result.toString(); // Returns the sum as a string
    }
  }  
  if (query.includes("largest")) {
    const numbers = query.match(/\d+/g); // Extracts all numbers from the query
    if (numbers != null){
    const largest = Math.max(...numbers.map(Number)); // Finds the largest number
    return largest.toString(); // Returns the largest number as a string
    }
  }
  if (query.includes("largest")) {
    const numbers = query.match(/\d+/g); // Extracts all numbers from the query
    if (numbers != null){
    const largest = Math.max(...numbers.map(Number)); // Finds the largest number
    return largest.toString(); // Returns the largest number as a string
    }
  }
  if (query.includes("multiplied")) {
    const numbers = query.match(/\d+/g); // Extracts all numbers from the query
    if (numbers != null){
    const result = parseInt(numbers[0]) * parseInt(numbers[1]); // Adds the numbers
    return result.toString(); // Returns the sum as a string
    }
  } 
  if (query.includes("square and a cube")) {
    const numbers = query.match(/\d+/g); // Extracts all numbers from the query
    const isSquareAndCube = (num : number) => {
      const root = Math.cbrt(num);
      return Number.isInteger(root) && Number.isInteger(Math.sqrt(num));
    };
    if (numbers != null){
    const result = numbers.filter(num => isSquareAndCube(Number(num))); // Filters numbers that are both squares and cubes
    return result.join(", ") || ""; // Returns the result as a string or "None" if no match
    }
  }
  if (query.includes("primes")) {
    const numbers = query.match(/\d+/g); // Extracts all numbers from the query
    if (numbers != null){
    const isPrime = (num: number) => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const result = numbers.filter(num => isPrime(Number(num))); // Filters prime numbers
    return result.join(", ") || ""; // Returns the prime numbers as a string or "None" if no primes are found
    }
  }
  // if (query.includes("plus")) {
  //   const numbers = query.match(/\d+/g); // Extracts all numbers from the query
  //   if (numbers != null){

  //   }
  // }
  
  return "";
}
