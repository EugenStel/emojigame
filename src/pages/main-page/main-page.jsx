import { Greeting } from "../../components/greeting/greeting"
import { GameButton } from "../../components/game-button/game-button"
import { GAME_BUTTONS_VALUES } from "../../constants/buttons"
import { useEffect, useState } from "react"
import axios from "axios"

export const MainPage = () => {
    const [movies, setMovies] = useState()

    useEffect(() => {
        try {
            axios.get(`${process.env.REACT_APP_DATA_URL}`)
                .then((resp) => {
                    const data = resp.data
                    setMovies(data)
                })
        } catch (error) {
            
        }

    }, [])

    let moviesCount = movies?.length - 1

    const handleStartGame = (min, max, e) => {
        if (e.target.textContent === GAME_BUTTONS_VALUES[0].title) {
            const selectedMovies = []
            for (let i = 0; i <= 7; i++) {
                let randomIndex = Math.floor(Math.random() * (max - min + 1) + min)
                const isInArray = selectedMovies.some(obj => obj?.id === movies[randomIndex]?.id)
                if (isInArray) randomIndex = Math.floor(Math.random() * (max - min + 1) + min)
                selectedMovies.push(movies[randomIndex])
            }
            localStorage.setItem('gameArray', JSON.stringify(selectedMovies))
            return selectedMovies
        }
    }

    return (
        <div className="mainPage">
            <Greeting />
            {GAME_BUTTONS_VALUES.map(({ title, id, path }) => (
                <GameButton
                    title={title}
                    key={id}
                    path={path}
                    handleStartGame={handleStartGame}
                    moviesCount={moviesCount}
                />
            ))}
        </div>
    )
}