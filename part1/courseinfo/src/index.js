import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({content}) => {
  return content.map((item, index) => <Part key={index} {...{item, index}} />)
}

const Part = ({item, index}) => {
  return <p>
    {item[`part${index + 1}`]} {item[`exercises${index + 1}`]}
  </p>
}

const Total = ({excercises}) => {
  return <p>Number of exercises {excercises.reduce((a, b) => a + b)}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content content={[
        {part1, exercises1},
        {part2, exercises2},
        {part3, exercises3}
      ]} />
      <Total excercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
