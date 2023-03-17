import './user-info.css'

export const UserInfo = ({ gameArray, currentIndex, userPoints, countCorrectAnswers, isLastQuestion }) => (
    <div className="user__info">
        {!isLastQuestion &&
            <div className="user__progress">
                Question {currentIndex + 1} of {gameArray?.length}
            </div>
        }

        <div className="user__answers">
            Correct answers: {countCorrectAnswers} of {gameArray?.length}
        </div>
        <div className="user__points">
            User points: {userPoints}
        </div>
    </div>
)
