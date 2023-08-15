import authentication
import json
from requests import get
import calendar

def get_username(token, user_id):
    url = f"https://api.spotify.com/v1/users/{user_id}"
    headers = authentication.get_auth_header(token)
    result = get(url, headers = headers)
    json_result = json.loads(result.content)['display_name']
    return json_result

def get_user_followers(token, user_id):
    url = f"https://api.spotify.com/v1/users/{user_id}"
    headers = authentication.get_auth_header(token)
    result = get(url, headers = headers)
    json_result = json.loads(result.content)['followers']['total']
    return json_result

def get_user_picture_url(token, user_id):
    url = f"https://api.spotify.com/v1/users/{user_id}"
    headers = authentication.get_auth_header(token)
    result = get(url, headers = headers)
    json_result = json.loads(result.content)['images']
    if len(json_result) > 0:
        return json_result
    else:
        return 0


def get_user_playlists(token, user_id):
    url = f"https://api.spotify.com/v1/users/{user_id}/playlists"
    headers = authentication.get_auth_header(token)
    result = get(url, headers = headers)
    json_result = json.loads(result.content)['items']
    if len(json_result) == 0:
        print("This user does not exist.")
        return None
    return json_result

def get_playlist(token, playlist_id):
    url = f"https://api.spotify.com/v1/playlists/{playlist_id}"
    headers = authentication.get_auth_header(token)
    result = get(url, headers = headers)
    json_result = json.loads(result.content)
    return json_result

def get_playlist_items(token, playlist_id):
    url = f"https://api.spotify.com/v1/playlists/{playlist_id}/tracks"
    headers = authentication.get_auth_header(token)
    result = get(url, headers = headers)
    json_result = json.loads(result.content)['items']
    return json_result

def get_playlist_name(playlist):
    return playlist['name']

def get_playlist_id(playlist):
    return playlist['id']

# def get_playlist_tracks(playlist):
#     return playlist['items']

def get_track(index, tracks):
    return tracks[index]

def get_track_artists(track):
    return track['track']['artists']

def get_track_name(track):
    return track['track']['name']

def get_date_added(track):
    str = track['added_at'][:10]
    arr = str.split('-')
    month = arr[1]
    return calendar.month_abbr[int(month)] + " " + arr[2] + ", " + arr[0]

def get_album(track):
    return track['track']['album']

def get_playlist_art(playlist):
    arr = []
    imgs = playlist['images']
    for img in imgs:
        arr.append(img['url'])
    return arr
