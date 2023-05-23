export const baseURL = `https://accounts.spotify.com/authorize`;
const redirectURL = `http://localhost:3000/`;
const clientId = `66eff48115da4f5d9ac33f8ea06cfded`;

const permissions = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-library-read",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${baseURL}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${permissions.join(
  "%20"
)}&response_type=token&show_dialog=true`;
