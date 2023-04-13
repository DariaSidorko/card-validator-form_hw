import {useState, useEffect, useRef} from "react";

function validCard(int){
  // turning number into the string
  let arr = Array.from(String(int), Number);
  let counter = 1;
  let sum = 0;
  // iterating from back to the front of the array
  for(let i=arr.length-1; i>=0; i--){
      // condition to find every secon number in the array(from the end of the affay)
      if(counter % 2 === 0 ){
        // multiplyinh that **second number by 2 and splitting into the array
        let doubleArr = Array.from(String(arr[i] * 2), Number);
        // ternary operator to add to the total sum based on the length of that split number(1 or 2 digits)
        doubleArr.length > 1 ? sum = sum + doubleArr[0] + doubleArr[1] : sum = sum + doubleArr[0];
      } else {
        // else condition takes care of the rest numbest that needs to be doubled, adding them to the total sum
        sum += arr[i];
      }
      //add 1 to the counter, that helps to find that every second number in the array
      counter++;
  }
  //returns true or false
  return sum % 10 === 0
}

function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}

export default function CreditCardValidator () {

const [formData, setFormData] = useState(0);
const [result, setResult] = useState('');
const [errorMesage, setError] = useState('');
const contentInput = useRef(null);

//const result = useRef(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!containsOnlyNumbers(formData)){
      console.log('String');
      setResult('');
      setError('Invalid input!')
    } else {
      setError('')
    let res = validCard(formData);
    res ? res = 'Valid Card Number' : res = 'invalid Card Number'
    setResult(res);
    }
    contentInput.current.value = "";
  };


    return (
      <div>
        <h2>Enter you CC number</h2>
        <form >
        <p>{errorMesage}</p>
          <input
            onChange={(e) => {
              setFormData(e.target.value);
            }}
            ref = {contentInput}
          />
          <button onClick={(e) => handleSubmit(e)} >submit</button> 
        </form>

        <h2>{result}</h2>
      </div>
    )
}




