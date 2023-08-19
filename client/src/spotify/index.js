import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node'

const token = 'BQCxXrZWhurzSWkR1vvB0cV8ISmVK1OGpOV-a4Q99px0sHpBmwDDkH12IVWWmO9e3mU34y3yb13P3zQn6Pn7xdcVJNwxdS9R7SzW23HtzpY4L_n7l9ZQf1APEQLcG39mI12FMiKr2DjHjGUc95KejT_hmJHx6dxb9PB5DcNa8FbxSFXLOEUTl0yit3nINyMEARF6NInI78ZK'
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);


export function useGetUser() {
    const [user, setUser] = useState();
    useEffect(() => {
        spotifyApi.getMe().then((data) => {
            console.log(data.body)
            setUser(data.body);
        }, (e) => {
            console.error(e);
        });
    }, []);
    return user;
}

export function useGetFollowing() {
    const [following, setFollowing] = useState();
    useEffect(() => {
        spotifyApi.getFollowedArtists().then((data) => {
            console.log(data.body)
            setFollowing(data.body);
        }, (e) => {
            console.error(e);
        });
    }, []);
    return following;
}

export function useGetPlaylists() {
    const [playlists, setPlaylists] = useState();
    useEffect(() => {
        spotifyApi.getUserPlaylists().then((data) => {
            console.log(data.body)
            setPlaylists(data.body);
        }, (e) => {
            console.error(e);
        });
    }, []);
    return playlists;
}

export function useGetPlaylist(playlistId) {
    const[playlist, setPlaylist] = useState();
    useEffect(() => {
        spotifyApi.getPlaylist(playlistId).then((data) => {
            console.log(data.body);
            setPlaylist(data.body);
        }, (e) => {
            console.log(e);
        })
    }, [playlistId]);
    return playlist;
}

export function useGetTopArtists() {
    const[artists, setArtists] = useState();
    useEffect(() => {
        spotifyApi.getMyTopArtists().then((data) => {
            console.log(data.body);
            setArtists(data.body);
        }, (e) => {
            console.log(e);
        })
    }, []);
    return artists;
}

export function useGetTopTracks() {
    const[tracks, setTracks] = useState();
    useEffect(() => {
        spotifyApi.getMyTopTracks().then((data) => {
            console.log(data.body);
            setTracks(data.body);
        }, (e) => {
            console.log(e);
        })
    }, []);
    return tracks;
}

export function useGetTrack(id) {
    const[track, setTrack] = useState();
    useEffect(() => {
        spotifyApi.getTrack(id).then((data) => {
            console.log(data.body);
            setTrack(data.body);
        }, (e) => {
            console.log(e)
        })
    }, [id]);
    return track;
}

export function useGetAudioFeatures(id) {
    const [features, setFeatures] = useState();
    useEffect(() => {
        spotifyApi.getAudioFeaturesForTrack(id).then((data) => {
            console.log(data.body);
            setFeatures(data.body);
        }, (e) => {
            console.log(e);
        })
    }, [id]);
    return features;
}

export function formatArtists(artists) {
    let str = "";
    for (let i = 0; i < artists?.length; i++) {
        if (i == artists?.length - 1) {
            str += artists[i].name;
            return str;
        }
        str += artists[i].name + ", ";
    }
    return str
}

export function formatYear(str) {
    let arr = [];
    arr = str?.split('-');
    return arr?.[0];
}

export function formatDuration(durationMs) {
    const seconds = Math.floor((durationMs / 1000) % 60);

    const minutes = Math.floor((durationMs / 1000 / 60) % 60);

    const duration = [
        minutes.toString(),
        seconds.toString().padStart(2, "0")
    ].join(":");

    return duration;
}

export function formatKey(keyInt) {
    switch (keyInt) {
        case -1: return null;
        case 0: return 'C';
        case 1: return 'D♭'
        case 2: return 'D';
        case 3: return 'E♭';
        case 4: return 'E';
        case 5: return 'F';
        case 6: return 'G♭';
        case 7: return 'G';
        case 8: return 'A♭';
        case 9: return 'A';
        case 10: return 'B♭'
        case 11: return 'B'
    }
}

export function formatMode(modeInt) {
    switch(modeInt) {
        case 0: return 'Minor';
        case 1: return "Major";
    }
}