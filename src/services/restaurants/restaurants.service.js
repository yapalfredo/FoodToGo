import { mockImages } from "../../../functions/places/mock";
import camelize from "camelize";

// export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
//   return new Promise((resolve, reject) => {
//     const mock = mocks[location];
//     if (!mock) {
//       reject("Not Found");
//     }
//     resolve(mock);
//   });
// };

export const restaurantsRequest = (location) => {
  //had to use ngrok forwarding url to make this thing work in development mode
  return fetch(
    `http://d310-2603-7000-e101-96dd-7c6b-7ab0-7fc7-4332.ngrok.io/mealstogo-82704/us-central1/placesNearby?location=${location}`
  ).then((response) => response.json());
};

//added 2 attributes at the end of the array
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResult);
};
