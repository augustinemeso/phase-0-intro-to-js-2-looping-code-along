// Code your solutions in this file
// Function to create thank you cards
function writeCards(names, event) {
    const messages = []; // Create an empty array to hold the messages
  
    for (let i = 0; i < names.length; i++) {
      // Create a thank you message for each name
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      // Add the message to the messages array
      messages.push(message);
    }
  
    // Return the array of messages
    return messages;
  }
  
  // Function to count down from a given number to zero
  function countDown(number) {
    while (number >= 0) {
      console.log(number); // Log the current number
      number--; // Decrement the number by 1
    }
  }
  
  // Example usage
  const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(thankYouMessages); // Output the thank you messages
  
  countDown(10); // Count down from 10 to 0
  