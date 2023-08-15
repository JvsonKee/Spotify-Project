import { useEffect, useState } from "react"
import axios from 'axios'
import getClientId from "../clientId";

const spotifyApi = getClientId();

export function useAccessToken(code) {
    const accessToken = useAuth(code);    
    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);
    return accessToken;
}

export function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code, 
        }).then(res => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({}, null, '/')
        }).catch((err) => {
            console.log(err)
            // window.location = '/';
        })
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const interval = setInterval(() => {
            axios.post('http://localhost:3001/refresh', {
                refreshToken, 
            }).then(res => {
                setAccessToken(res.data.accessToken);
                setExpiresIn(res.data.expiresIn);
            }).catch(() => {
                // window.location = '/';
            })
        }, (expiresIn - 60) * 1000);

        return () => clearInterval(interval);
    }, [refreshToken, expiresIn])
    
    return accessToken;
}

export function useProfile(code) {
    const accessToken = useAccessToken(code);
    const [profile, setProfile] = useState([{}]);

    useEffect(() => {
        while (!accessToken) return;
        spotifyApi.getMe().then(res => {
            setProfile(res.body); 
        });
    }, [profile, accessToken]);
    return profile;
}

export function usePlaylists(code) {
    const accessToken = useAccessToken(code);
    const [playlists, setPlaylists] = useState([{}])
    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.getUserPlaylists().then(res => {
            setPlaylists(res.body);
        });
    }, [playlists, accessToken]);
    return playlists;
}