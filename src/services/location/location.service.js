import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  //had to use ngrok forwarding url to make this thing work in development mode
  return fetch(
    `http://d310-2603-7000-e101-96dd-7c6b-7ab0-7fc7-4332.ngrok.io/mealstogo-82704/us-central1/geocode?city=${searchTerm}`
  ).then((response) => response.json());
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
