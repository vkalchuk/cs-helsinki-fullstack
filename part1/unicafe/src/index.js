import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = ((good - bad) / total) || 0
  const positive = ((good / total) * 100) || 0

  return (
    <div>
      <h1>statistics</h1>

      {total ? 
        (<table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="total" value={total} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={`${positive}%`} />
          </tbody>
        </table>) :
      <p>No feedback given</p>}
    </div>
  )
}

const Statistic = ({text, value}) => {
  return <tr><td>{text}</td><td>{value}</td></tr>
}

const Button = ({clickHandler, text}) => {
  return <button onClick={clickHandler}>{text}</button>
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <Button clickHandler={() => setGood(good+1)} text="good" />
      <Button clickHandler={() => setNeutral(neutral+1)} text="neutral" />
      <Button clickHandler={() => setBad(bad+1)} text="bad" />

      <Statistics {...{good, neutral, bad}} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
