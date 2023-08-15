import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Playlists from './components/Playlists'
import App from './App';
import Main from './components/Playlist'
import Profile from './components/Profile';

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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
