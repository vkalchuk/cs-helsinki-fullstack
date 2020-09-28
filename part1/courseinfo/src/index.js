import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({content}) => {
  return content.map((item, index) => <Part key={item.name} {...{item, index}} />)
}

const Part = ({item, index}) => {
  return <p>
    {item.name} {item.exercises}
  </p>
}

const Total = ({parts}) => {
  return <p>Number of exercises {parts.reduce((a, b) => a + b.exercises, 0)}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
