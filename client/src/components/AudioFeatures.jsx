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
} from '../spotify';
import { useParams } from 'react-router-dom';


function AudioFeatures() {
    const { id } = useParams()
    const track = useGetTrack(id);
    const features = useGetAudioFeatures(id);
    console.log({features});
    console.log({track});
    
    const durationMs = features?.duration_ms; 
    const duration = formatDuration(durationMs);

    const key = formatKey(features?.key);
    console.log({key});

    const mode = formatMode(features?.mode);
    console.log(mode);

    const timeSignature = features?.time_signature;
    console.log(timeSignature);

    let tempo = features?.tempo;
    tempo = Math.round(tempo);

    return(
        <div className="container">
            <NavBar />
            <div className="features-container">
                <div className="features-track-information">
                    <img className="features-track-art" src={track?.album?.images[0]?.url}></img>
                    <div className="features-information">
                        <div className="features-track-data">
                            <div className="features-track-name">{track?.name}</div>
                            <div className="features-track-artist">{formatArtists(track?.artists)}</div>
                            <div className="features-track-album">{track?.album?.name} • {formatYear(track?.album?.release_date)}</div>
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
            </div>
        </div>
    )

}

export default AudioFeatures;