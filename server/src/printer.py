import spotify

def print_playlist_title(playlist):
    print(playlist['name'])

def print_playlist(playlist):
    for track in playlist:
        print(print_track(track))
        print()

def print_artists(artists):
    str = ""
    for artist in artists:
        if (artist == artists[-1]):
            str += artist['name']
        else:
            str += artist['name'] + ", "
    return str

def print_track(track):
    return (spotify.get_track_name(track) + ": " + print_artists(spotify.get_track_artists(track)) + spotify.get_date_added(track))