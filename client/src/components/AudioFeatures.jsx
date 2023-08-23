import AudioChart from './AudioChart'
import NavBar from "./NavBar";
import { 
    useGetTrack, 
    useGetAudioFeatures, 
    formatArtists,
    formatYear, 
    formatDuration, 
    formatKey, 
    formatMode,
    getTrackAudioFeatures,
} from '../spotify';
import { useParams } from 'react-router-dom';
import { useState } from 'react';



function AudioFeatures() {

    // let xValues = ["acousticness", "danceability", "energy", "instrumentalness", "liveness", "speechiness", "valence"];
    // let yValues = [0.7, 0.2, 0.6, 0.8, 0.2, 0.6, 0.3];

    const { id } = useParams()
    const track = useGetTrack(id);
    const features = useGetAudioFeatures(id);
        
    const durationMs = features.duration_ms; 
    const duration = formatDuration(durationMs);
    const key = formatKey(features.key);
    const mode = formatMode(features.mode);
    const timeSignature = features.time_signature;
    let tempo = features.tempo;
    tempo = Math.round(tempo);

    
    let trackData = getTrackAudioFeatures(features);
    trackData ? console.log({trackData}) : null;
   
    // const [chartData, setChartData] = useState({
    //     labels: trackData.map((data) => data.label),
    //     datasets: [{
    //         label: '',
    //         data: trackData.map((score) => score.value),
    //         backgroundColor: barColours,
    //         borderColor: borderColours,
    //         borderWidth: 1 
    //     }]
    // })

    return(
        <div className="container">
            <NavBar />
            <div className="main-content-container">
                { 
                track &&
                track.album &&
                trackData &&
                trackData[0].value ?
                    <div className="content-container" id="features-container">
                        <div className="features-track-information">
                            <img className="features-track-art" src={track.album.images[0].url}></img>
                            <div className="features-information">
                                <div className="features-track-data">
                                    <div className="features-track-name">{track.name}</div>
                                    <div className="features-track-artist">{formatArtists(track.artists)}</div>
                                    <div className="features-track-album">{track.album.name} • {formatYear(track.album.release_date)}</div>
                                </div>
                                <div className="track-features">
                                    <div className="feature-wrapper">
                                        <div className="feature-item">{duration}</div>
                                        <div>Duration</div>
                                    </div>
                                    <div className="feature-wrapper">
                                        <div className="feature-item">{key}</div>
                                        <div>Key</div>
                                    </div>
                                    <div className="feature-wrapper">
                                        <div className="feature-item">{mode}</div>
                                        <div>Modality</div>
                                    </div>
                                    <div className="feature-wrapper">
                                        <div className="feature-item">{timeSignature}</div>
                                        <div>Time signature</div>
                                    </div>
                                    <div className="feature-wrapper">
                                        <div className="feature-item">{tempo} (BPM)</div>
                                        <div>Tempo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chart-container">
                            <AudioChart trackData={trackData} />
                        </div>
                    </div> : 
                    <div>Loading...</div>
                }
            </div>
        </div>
    )

}

export default AudioFeatures;