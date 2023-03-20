// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.
interface Song {
	artist: string | Array<string>;
	length: number;
	name: string;
	type: "song";
}

interface Album {
	songs: Array<Song>;
	type: "album";
}

interface Playlist {
	resolve(): Array<Song>;
	type: "playlist";
}

// type MusicInput = Array<Song> | Array<Album> | Array<Playlist>;
type MusicInput = Array<Song | Album | Playlist>;

interface PlaylistToReturn {
	artists: {
		[i: string]: Array<string>;
	};
	songs: Array<string>;
	time: number;
}

export function unrollPlaylist(music: MusicInput): PlaylistToReturn {
	const playlistToReturn: PlaylistToReturn = {
		artists: {},
		songs: [],
		time: 0,
	};

	function addSong(song: Song) {
		if (Array.isArray(song.artist)) {
			for (let i = 0; i < song.artist.length; i++) {
				let currentArtist = song.artist[i];
				addArtist(currentArtist, song.name);
			}
		} else {
			addArtist(song.artist, song.name);
		}
		playlistToReturn.songs.push(song.name);
		playlistToReturn.time += song.length;
	}

	function addArtist(artist: string, song: string) {
		if (!playlistToReturn.artists.hasOwnProperty(artist)) {
			playlistToReturn.artists[artist] = [song];
		} else {
			playlistToReturn.artists[artist].push(song);
		}
	}

	for (let i = 0; i < music.length; i++) {
		let item: Song | Album | Playlist = music[i];
		switch (item.type) {
			case "song":
				addSong(item);
				break;
			case "album":
				item.songs.forEach((song: Song) => addSong(song));
				break;
			case "playlist":
				item.resolve().forEach((song: Song) => addSong(song));
				break;
		}
	}
	return playlistToReturn;
}
