import MoviePlayList from './components/MoviePlayList'
import SongPlayList from './components/SongPlayList'
import './styles.css'
import { useDispatch } from 'react-redux'
import { reset } from './store'

const App = () => {
    const dispatch = useDispatch()

    const handleResetClick = () => {
        dispatch(reset())
    }

    return (
        <div>
            <button onClick={handleResetClick} className="button is-danger">
                Reset Both Play Lists
            </button>
            <hr />

            <MoviePlayList />
            <hr />

            <SongPlayList />
        </div>
    )
}

export default App