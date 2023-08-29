import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Playlists from './components/Playlists';
import App from './components/App';
import Main from './components/Playlist';
import Profile from './components/Profile';
import AudioFeatures from './components/AudioFeatures';
import TopTracks from './components/TopTracks';
import TopArtists from './components/TopArtists';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'profile',
    element: <Profile />
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
