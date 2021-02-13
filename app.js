// Fetch creates a promise for the api.
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//   .then(res => {
//     console.log("response", res);
//     return res.json();
//   })
//   // Once the api has been accepted the data will then be displayed, or the price will be as is mentioned below.
//   .then(data => {
//     console.log("data parsed");
//     console.log(data.ticker.price);
//   })
//   .catch(e => {
//     console.log("error!", e);
//   })

  // Async version of the code above.
  // const getBitcoinPrice = async () => {
  //   const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
  //   const data = await res.json();
  //   console.log(data.ticker.price);
  // }

  // Axios is most commonly used with APIs

  // axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
  //   .then(res => {
  //     console.log(res.data.ticker.price);
  //   })
  //   .catch(err => {
  //     console.log("Error!", err);
  //   })

    // Async method of the code above.
    // const fetchBitcoinPrice = async () => {
    //   try{
    //     const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    //     console.log(res.data.ticker.price);
    //   } catch(e) {
    //       console.log("Error!", err);
    //     }
    // }

// Changing the headings in an api to get just the basic information needed
const jokes = document.querySelector('#jokes');
const button = document.querySelector('#button')

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  // Create a new li element and append the joke from the api to it.
  const newLi = document.createElement('LI');
  newLi.append(jokeText);
  // Append the li with the joke in to the ul in the html.
  jokes.append(newLi);
}

const getDadJoke = async () => {
  try {
    // The header could be different depending on the API, check the api docs for info.
    const config = {headers: {accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;
  }
  // If the're is a problem with the api, use catch to return an error.
  catch(e) {
    return 'No jokes available';
  }
}

button.addEventListener('click', addNewJoke)
























