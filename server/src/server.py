from flask import Flask, jsonify
import main
import authentication

app = Flask(__name__)

auth_id = authentication.get_authorization_url()
playlists = main.get_playlists()
user_array = main.get_user()


@app.route("/api/authorization")
def get_auth():
    authorization_data = {
        "url": auth_id
    }
    return jsonify(authorization_data), 200

@app.route("/api/user")
def get_user():
    for user in user_array:
        user_data = {
            "username": user.username,
            "followers": user.followers,
            "art": user.art
        }
        return jsonify(user_data), 200

@app.route("/api/playlist/<playlist_id>")
def get_playlist(playlist_id):
    for playlist in playlists:
        if playlist_id == playlist.id:
            playlist_data = {
                "playlist_id": playlist.id,
                "title": playlist.title,
                "tracks": playlist.tracks,
                "month": playlist.month,
                "year": playlist.year,
                "art" : playlist.art
            }
            return jsonify(playlist_data), 200

@app.route("/api/playlists")
def get_playlists():
    array = []
    data = {"playlists": array}
    for playlist in playlists:
        playlist_data = {
            "title": playlist.title,
            "id": playlist.id,
            "art": playlist.art
        }
        array.append(playlist_data)

    return jsonify(data), 200
    
if __name__ == "__main__":
    app.run(debug = True)