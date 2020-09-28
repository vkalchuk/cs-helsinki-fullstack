import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(() => new Array(anecdotes.length).fill(0))

  const getNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
  }

  const vote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] = votesCopy[selected] + 1
    setVotes(votesCopy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <div>
      <button onClick={vote}>vote</button>
      <button onClick={getNextAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      {props.anecdotes[votes.indexOf(Math.max(...votes))]}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
