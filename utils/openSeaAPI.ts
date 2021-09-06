const rinkebyBaseURL = 'https://rinkeby-api.opensea.io/api/v1/';

const assetsRequest = 'https://api.opensea.io/api/v1/assets';

const options = {method: 'GET'};

/*export const assetsInWallet = (address) => {
  fetch(`https://rinkeby-api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`, options)
  .then(response => response.json())
  .then(data => obj = data)
  .then(() => console.log('here',obj))
  .catch(err => console.error(err));
}*/

export async function assetsInWallet(address) {
  let response;
  try {
    response = await fetch(
      `https://rinkeby-api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`, 
      options);
  } catch(err) {
    console.log(err);
  }
  return response.json();
}

// function to parse this output to nftObjects
