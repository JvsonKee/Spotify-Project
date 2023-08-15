import SpotifyWebApi from "spotify-web-api-node";

function getClientId() {
    const spotifyApi = new SpotifyWebApi({
        clientId: '7aabd726797b45ceb6f79d4500b4cf3d'
    });
    return spotifyApi;
}

export default getClientId;
