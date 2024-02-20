import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Playlists from './pages/Playlists/Playlists';
import App from './App';
import Main from './pages/Playlist/Playlist';
import AudioFeatures from './pages/AudioFeatures/AudioFeatures';
import TopTracks from './pages/TopTracks/TopTracks';
import TopArtists from './pages/TopArtists/TopArtists';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'playlists',
    element: <Playlists />
  },
  {
    path: 'playlist/:id',
    element: <Main />
  },
  {
    path: 'track/:id',
    element: <AudioFeatures />
  },
  {
    path: 'top-tracks',
    element: <TopTracks />
  },
  {
    path: 'top-artists',
    element: <TopArtists />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
