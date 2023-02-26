const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <h3>Statistics</h3>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: </li>
                <li>Positive feedback: </li>
            </ul>
        </div>
    )
}

export default Statistics;