
const bookHotel =  () => {
  return new Promise( (resolve, reject) => {
 setTimeout(() => {
const error = false // when card declined or insufficient funds
if (error) {
  reject("Sorry, booking not successful")
} else {
  resolve("Booking successfull, Thank you")
}



 }, 4000) //runs for 4 seconds
  })
}
bookHotel()
.then( (Successfull) =>  console.log(Successfull)) //runs when bookins is successful
.catch((Failed) => console.log(Failed)) //runs when booking not successful