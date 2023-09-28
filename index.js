function scuberGreetingForFeet(rideDistance){
  let fee;
  if(rideDistance < 400) {
    fee = 'This one is on me!';
  }
  else if(rideDistance >= 400 && rideDistance < 2000) {
    fee = 'That will be twenty bucks.';
  }
  else if(rideDistance > 2000  && rideDistance <= 2500){
    fee = 'I will gladly take your thirty bucks.';
  }
  else{
    fee = 'No can do.';
  }
  return fee
}

function ternaryCheckCity(city){
  let response;
  if(city == 'NYC'){
    response = 'Ok, sounds good.';
  }
  else{
    response = 'No go.';
  }
  return response
}

function switchOnCharmFromTip(tipAmount){
  let answer;
  if(tipAmount == 'generous'){
    answer = 'Thank you so much.';
  }
  else if(tipAmount == 'not as generous'){
    answer = 'Thank you.';
  }
  else{
    answer = 'Bye.';
  }
  return answer
}