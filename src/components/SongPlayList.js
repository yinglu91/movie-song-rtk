import { useDispatch, useSelector } from 'react-redux'
import { createRandomSong } from '../data'
import { addSong, removeSong } from '../store'

const SongPlayList = () => {
    const dispatch = useDispatch();
    const songPlayList = useSelector((state) => {
        return state.songs
    })

    const handleSongAdd = (song) => {
        dispatch(addSong(song))
    }

    const handleSongRemove = (song) => {
        dispatch(removeSong(song))
    }

    const renderedSongs = songPlayList.map((song) => {
        return (
            <li key={song}>
                {song}
                <button
                    onClick={() => handleSongRemove(song)}
                    className="button is-danger"
                >
                    X
                </button>
            </li>
        )
    })

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="subtitle is-3">Song Play List</h3>
                <div>
                    <button
                        onClick={() => handleSongAdd(createRandomSong())}
                    >
                        + Add Song to Play List
                    </button>
                </div>
            </div>

            <ul>{renderedSongs}</ul>
        </div>
    )
}

export default SongPlayList
