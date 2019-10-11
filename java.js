let randomNumber = Math.floor(Math.random()*100)

let count = 0;



function difference(a, b){

  return Math.abs(a - b);

}



function recordClicks(){

  count = count + 1;

  document.getElementById('outcome-amount').innerHTML = `<h4>Number of Guesses: ${count}</h4>`

  let userNumber = document.getElementById('number').value;



  if(difference(randomNumber, userNumber) >= 50){

    document.getElementById('outcome-closeness').innerHTML = `<h4>Closeness: Freezing</h4>`
  }



  if(difference(randomNumber, userNumber) >= 20 && difference(randomNumber, userNumber) <= 49){

    document.getElementById('outcome-closeness').innerHTML = `<h4>Closeness: Cold</h4>`
  }



  if(difference(randomNumber, userNumber) >= 10 && difference(randomNumber, userNumber) <= 19){

    document.getElementById('outcome-closeness').innerHTML = `<h4>Closeness: Warm</h4>`
  }



  if(difference(randomNumber, userNumber) >= 1 && difference(randomNumber, userNumber) <= 9){

    document.getElementById('outcome-closeness').innerHTML = `<h4>Closeness: Hot</h4>`
  }


  if(difference(randomNumber, userNumber) >= 1 && difference(randomNumber, userNumber) <= 5){

    document.getElementById('outcome-closeness').innerHTML = `<h4>Closeness: Boiling</h4>`
  }

  if(difference(randomNumber, userNumber) == 0){

    document.getElementById('outcome-closeness').innerHTML = `<h4>Closeness: Congratulations</h4>`
  }

}



function setGame(){

  count = 0
  randomNumber = Math.floor(Math.random()*100)

  if (randomNumber){

    console.log(randomNumber)

    randomNumber = randomNumber
  }

  document.getElementById('outcome-amount').innerHTML = `<h4>Total Guesses: ${count} </h4>`

}
