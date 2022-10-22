const { MYCLIENTID, MYCLIENTSECRET } = process.env;

// Fetch more details about a specific event
const fetchDetails = async (id) => {
  const response = await fetch(`https://api.seatgeek.com/2/events/${id}?client_id=${MYCLIENTID}&client_secret=${MYCLIENTSECRET}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export default fetchDetails;