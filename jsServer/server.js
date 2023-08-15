const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173',
        clientId: '7aabd726797b45ceb6f79d4500b4cf3d',
        clientSecret: 'a2826322c65b4a2d8515629e2ad121c4',
        refreshToken  
    });
    
    spotifyApi.refreshAccessToken().then(
        (data) => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in
            })
        }).catch ((err) => {
            console.log(err); 
            res.sendStatus(400); 
        })
})


app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173',
        clientId: '7aabd726797b45ceb6f79d4500b4cf3d',
        clientSecret: 'a2826322c65b4a2d8515629e2ad121c4',
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        console.log('/login error', err)
        res.sendStatus(400);
    })
})

app.listen(3001);