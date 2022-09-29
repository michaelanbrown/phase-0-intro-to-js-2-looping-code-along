// Code your solutions in this file
function writeCards(arrayOfStrings, eventName) {
    let arrayOfMessages = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
      arrayOfMessages.push(`Thank you, ${arrayOfStrings[i]}, for the wonderful ${eventName} gift!`);
    }
    return arrayOfMessages;
  }

  function countDown(n) {
    let i = 0;
    while (i <= n) {
      console.log(n);
      n--;
    }
  }