const Header = (props) => {
  return (
    <>
      <p>{props.course_name}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part_name} {props.num_exe}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part_name={props.parts[0].name} num_exe={props.parts[0].exercises} />
      <Part part_name={props.parts[1].name} num_exe={props.parts[1].exercises} />
      <Part part_name={props.parts[2].name} num_exe={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total_exe}</p>
    </>
  )
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
      <Header course_name={course.name} />
      <br />
      <Content parts={course.parts} />
      <br />
      <Total total_exe={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App