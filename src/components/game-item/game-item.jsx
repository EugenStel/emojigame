import { Movie } from "../movie/movie"

import './game-item.css'

export const GameItem = ({ gameItem, isHintsVisible, setIsHintsVisible }) => {

    const hintsClickHandler = () => {
        setIsHintsVisible(true)
    }

    return (
        <div className="game__item">
            <p className="game__difficulty">Difficulty: <span className="game__item__info">{gameItem?.difficulty}</span> </p>
            <p className="game__points">Points per answer: <span className="game__item__info">{gameItem?.points_per_answer}</span> </p>

            {gameItem?.emoji?.map((emoji, index) => <Movie key={index} emoji={emoji} />)}

            <div className="game__hints">
                {isHintsVisible ?
                    <div>
                        <p>Year: {gameItem?.hints?.year}</p>
                        <div>Crew: {gameItem?.hints?.actors.map((actor) => (
                            <div key={actor} className='hint__actors'>
                                {actor}
                            </div>
                        ))}
                        </div>
                    </div>
                    :
                    <button className="hints_button" onClick={hintsClickHandler}>Show hints</button>
                }
            </div>
        </div>
    )
}