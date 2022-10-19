// Get .env variables from webpack
const { MYCLIENTID, MYCLIENTSECRET } = process.env;

// fetch the resource with CORS disabled.
const fetchResource = async () => {
  const response = await fetch(`https://api.seatgeek.com/2/events?client_id=${MYCLIENTID}&client_secret=${MYCLIENTSECRET}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export default fetchResource;