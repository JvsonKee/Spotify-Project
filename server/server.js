const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({path: './.env'});


const app = express();
app.use(cors());
app.use(bodyParser.json());

const CLIENT_ID = process.env.CLIENT_ID;    
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI;  
const FRONTEND_URI = process.env.FRONTEND_URI; 
const temp_uri = 'http://localhost:5173'


let spotifyApi = new SpotifyWebApi({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
});

const scopes = ['user-read-email', 'user-read-email', 'playlist-read-private', 'user-follow-read', 'user-top-read'];

app.get('/login', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
})

app.get('/callback', (req, res) => {
    let error = req.query.error;
    let code = req.query.code;
    let state = req.query.state;

    if(error) {
        res.send(`Callback error: ${error}`);
        console.log(error);
        return;
    }

    spotifyApi.authorizationCodeGrant(code).then(data => {
        const access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];

        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);
        
        console.log(access_token);
        console.log('success');

        res.redirect(`${FRONTEND_URI}` + '?access_token=' + access_token);

        setInterval(async () => {
            const data = await spotifyApi.refreshAccessToken();
            const access_token = data.body['access_token'];

            console.log('Access token has been refreshed');
            console.log({access_token});

            spotifyApi.setAccessToken(access_token);
        }, expires_in / 2 * 1000);
    });
}); 

app.listen(8888);