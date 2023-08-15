import spotify
import printer
import authentication
from playlist import Playlist
from user import User
from datetime import datetime
import calendar

token = authentication.get_token()
user_playlists = spotify.get_user_playlists(token, "jasonk2723")

def get_playlists():
    array = []
    for playlist in user_playlists:
        track_list = []
        tracks = spotify.get_playlist_items(token, playlist['id'])
        for track in tracks:
            artists = spotify.get_track_artists(track)
            t = {"title": spotify.get_track_name(track), "artists": printer.print_artists(artists), "album": spotify.get_album(track)['name'], "date added": spotify.get_date_added(track), "art": spotify.get_playlist_art(spotify.get_album(track))}
            track_list.append(t)

        item = Playlist(spotify.get_playlist_id(playlist), spotify.get_playlist_name(playlist), track_list, calendar.month_name[datetime.now().month], datetime.now().year, spotify.get_playlist_art(playlist))
        array.append(item)

    return array


def get_user():
    array = []
    username = spotify.get_username(token, "jasonk2723")
    followers = spotify.get_user_followers(token, "jasonk2723")
    img_url = spotify.get_user_picture_url(token, "jasonk2723")
    item = User(username, followers, img_url)
    array.append(item)
    return array
