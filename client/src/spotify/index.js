import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi();
const token = localStorage.getItem('access_token');
spotifyApi.setAccessToken(token);

export function getAccessToken() {
    const accessToken = new URLSearchParams(window.location.search).get("access_token");

    localStorage.setItem('access_token', accessToken);
    spotifyApi.setAccessToken(accessToken);
    return accessToken;
}

export function logout() {
    window.localStorage.removeItem('access_token');
    window.location.reload();
}

export function useGetUser() {
    const [user, setUser] = useState();
    useEffect(() => {
        spotifyApi.getMe().then((data) => {
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
            setFollowing(data.body);
        }, (e) => {
            console.error(e);
        });
    }, []);
    return following;
}

export function useGetPlaylists() {
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        spotifyApi.getUserPlaylists().then((data) => {
            setPlaylists(data.body);
        }, (e) => {
            console.error(e);
        });
    }, []);
    return playlists;
}

export function useGetPlaylist(playlistId) {
    const[playlist, setPlaylist] = useState([]);
    useEffect(() => {
        spotifyApi.getPlaylist(playlistId).then((data) => {
            setPlaylist(data.body);
        }, (e) => {
            console.log(e);
        })
    }, [playlistId]);
    return playlist;
}

export function useGetTracksFeatures(playlist) {
    const [playlistFeatures, setPlaylistFeatures] = useState();
    useEffect(() => {
        let playlistIds = getPlaylistTrackIds(playlist);
        spotifyApi.getAudioFeaturesForTracks(playlistIds).then((data) => {
            setPlaylistFeatures(data.body);
        }, (e) => {
            console.log(e);
        });
    }, [playlist]);
    return playlistFeatures;
}

export function getPlaylistTrackIds(playlist) {
    let ids = [];
    for (let i = 0; i < playlist?.length; i++) {
        let id = playlist[i]?.track?.id;
        ids.push(id);
    }
    return ids;
}

export function createFeatureArray(tracksFeatures, mode) {
    let featureArray = [0,0,0,0,0,0,0];
    if (mode == 0) {
        for (let i = 0; i < tracksFeatures?.length; i++) {
            featureArray[0] += tracksFeatures[i]?.acousticness / tracksFeatures?.length;
            featureArray[1] += tracksFeatures[i]?.danceability / tracksFeatures?.length;
            featureArray[2] += tracksFeatures[i]?.energy / tracksFeatures?.length;
            featureArray[3] += tracksFeatures[i]?.instrumentalness / tracksFeatures?.length;
            featureArray[4] += tracksFeatures[i]?.liveness / tracksFeatures?.length;
            featureArray[5] += tracksFeatures[i]?.speechiness / tracksFeatures?.length;
            featureArray[6] += tracksFeatures[i]?.valence / tracksFeatures?.length;
        }
    } else if (mode == 1) {
        featureArray[0] += tracksFeatures?.acousticness;
            featureArray[1] += tracksFeatures?.danceability;
            featureArray[2] += tracksFeatures?.energy;
            featureArray[3] += tracksFeatures?.instrumentalness;
            featureArray[4] += tracksFeatures?.liveness;
            featureArray[5] += tracksFeatures?.speechiness;
            featureArray[6] += tracksFeatures?.valence;
    }
    
    return featureArray;
}

export function useGetTopArtists(timeRange) {
    const[artists, setArtists] = useState([]);
    useEffect(() => {
        spotifyApi.getMyTopArtists((timeRange)).then((data) => {
            setArtists(data.body);
        }, (e) => {
            console.log(e);
        })
    }, [timeRange]);
    return artists;
}

export function useGetTopTracks(timeRange) {
    const[tracks, setTracks] = useState([]);
    useEffect(() => {
        spotifyApi.getMyTopTracks((timeRange)).then((data) => {
            setTracks(data.body);
        }, (e) => {
            console.log(e);
        })
    }, [timeRange]);
    return tracks;
}


export function useGetTrack(id) {
    const[track, setTrack] = useState([]);
    useEffect(() => {
        spotifyApi.getTrack(id).then((data) => {
            setTrack(data.body);
        }, (e) => {
            console.log(e)
        })
    }, [id]);
    return track;
}

export function useGetAudioFeatures(id) {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        spotifyApi.getAudioFeaturesForTrack(id).then((data) => {
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

export function getAudioFeaturesData(features) {
    let arr = [
        {
            label: "acousticness",
            value: features[0]
        },
        {
            label: "danceability",
            value: features[1]
        },
        {
            label: "energy",
            value: features[2]
        },
        {
            label: "instrumentalness",
            value: features[3]
        },
        {
            label: "liveness",
            value: features[4]
        },
        {
            label: "speechiness",
            value: features[5]
        },
        {
            label: "valence",
            value: features[6]
        }
    ]
    if (arr[0].value) {
        return arr;
    }
    return null;
}

export function formatYear(str) {
    let arr = [];
    arr = str.split('-');
    return arr[0];
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