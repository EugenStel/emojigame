import { Movie } from '../movie/movie'
import { MOVIES } from '../../constants/movies'

import './greeting.css'

export const Greeting = () => {
    return (
        <div className="greeting">
            <p>Guess the movie by emoji</p>
            Have you watched all the films? Do you know all the names by heart?
            <p>Show how cool you are!</p>
            {MOVIES.map(({ emoji}) => {
                return emoji?.map((emoji) => (
                    <Movie emoji={emoji} key={emoji}/>
                )
                )
            })}
        </div>
    )
}