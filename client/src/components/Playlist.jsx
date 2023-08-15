import useGetData from '../data';
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'

function Main() {
    const { id } = useParams();
    let data = useGetData(`/playlist/${id}`)
    return (
        <div id = "container">
            <NavBar />
            <div id="playlist-wrapper">
                {(typeof data.title === 'undefined') ? (
                    <div></div>
                ) : (
                    <div id="playlist-title">{data.title}</div>
                )
                }
                <div className="tracks">
                    {(typeof data.tracks === 'undefined') ? (
                        <div></div>
                    ) : (
                        data.tracks.map((track, i) => (
                            <div className="track-info" key = {i}>
                                <div id="index">{i + 1}</div>
                                <div id="art">
                                    <img src={track.art[0]}></img>
                                </div>
                                <div id="matrix">
                                    <div id="title" key = {i}>{track['title']} </div>
                                    <div id="artists">{track['artists']} </div>
                                </div>
                                <div id="album">{track['album']}</div>
                                <div id="date">{track['date added']}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Main

