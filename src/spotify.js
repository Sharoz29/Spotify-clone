export const baseURL = `https://accounts.spotify.com/authorize`;
const redirectURL = `http://localhost:3000/`;
const clientId = `8f9fb4d47ae340f398df45cf040d4282`;

const permissions = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const loginUrl = `${baseURL}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${permissions.join(
  "%20"
)}&response_type=token&show_dialog=true`;
