


let rounds = 1 ;
let score = 0;

function toRun(event) {
  event.preventDefault();

  // let score = 0;

  let customerNameInput = document.querySelector('.customer-name-input').value;

  let customerIdInput = document.querySelector('.customer-id-input').value;

  let primaryContactInput = document.querySelector('.primary-contact-input').value;

  let streetAddressInput = document.querySelector('.street-address-input').value;

  let cityInput = document.querySelector('.city-input').value;
  let stateInput = document.querySelector('.state-input').value;
  let zipInput = document.querySelector('.zip-input').value;

  let emailAddressInput = document.querySelector('.email-address-input').value;


  if(rounds <= 7){

    if(customerNameInput){
      score++;
    }
    if(customerIdInput){
      score ++;
    }
    if(primaryContactInput){
      score++;
    }
    if(streetAddressInput){
      score++;
    }
    if(cityInput){
      score++;
    }
    if(stateInput !== 'select'){
      score++;
    }
    if(zipInput){
      score++;
    }
    if(emailAddressInput){
      score++;
    }

    if (document.getElementById("yes").checked || document.getElementById("no").checked ) {
      score++;
    }
    if(document.getElementById("agreement").checked){
      score++;
    }

    // console.log(rounds +': '+ score);

    document.querySelector('.score-field').innerHTML = `Correctly Submitted Fields: ${score}/${rounds*10}`;

    document.querySelector('form').reset();

    rounds ++;  
  }
  
  else {
    showPopup();
    let registerButton = document.querySelector(".register-button");
    registerButton.disabled = true;
    registerButton.style.cursor = "not-allowed";
    registerButton.style.opacity = "0.6";
  }
   
}

function showPopup() {

  document.getElementById("popup").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
}


document.querySelector(".ok-btn").addEventListener("click", closePopup);


function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}







