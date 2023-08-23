import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node'

const token = 'BQC7EXfbQFx9eue6id3BiuWlTSI0SUIu8MuJVpcHXbqpyRdzz1ujuwx-P_YH5Y0eERoxnuXZDtoKsf6vSaYjE9G5-z2qRmLDWzv0nAHleJATwW8r66bR3nvQFnN0KCZXdrGYpipAlazG_s8Wt4nUpRaxzyEa3uQ-7MPqaTNzdbXtEH6H_IAYW5v6eJLKbr1aCiBiPjwFtzuF'
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
    const [playlists, setPlaylists] = useState([]);
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
    const[playlist, setPlaylist] = useState([]);
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
    const[artists, setArtists] = useState([]);
    useEffect(() => {
        spotifyApi.getMyTopArtists(('time_range=long_term')).then((data) => {
            console.log(data.body);
            setArtists(data.body);
        }, (e) => {
            console.log(e);
        })
    }, []);
    return artists;
}

export function useGetTopTracks() {
    const[tracks, setTracks] = useState([]);
    useEffect(() => {
        spotifyApi.getMyTopTracks(('time_range=long_term')).then((data) => {
            console.log(data.body);
            setTracks(data.body);
        }, (e) => {
            console.log(e);
        })
    }, []);
    return tracks;
}


export function useGetTrack(id) {
    const[track, setTrack] = useState([]);
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
    const [features, setFeatures] = useState([]);
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

export function getTrackAudioFeatures(features) {
    let arr = [
        {
            label: "acousticness",
            value: features?.acousticness
        },
        {
            label: "danceability",
            value: features?.danceability
        },
        {
            label: "energy",
            value: features?.energy
        },
        {
            label: "instrumentalness",
            value: features?.instrumentalness
        },
        {
            label: "liveness",
            value: features?.liveness
        },
        {
            label: "speechiness",
            value: features?.speechiness
        },
        {
            label: "valence",
            value: features?.valence
        }
    ]
    if (arr[0].value) {
        return arr;
    }
    return null;
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