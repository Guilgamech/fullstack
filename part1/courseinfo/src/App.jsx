const Header  = (props) => {
  return (
    <>
      <p>{props.course_name} </p>
    </>
  )
}
const Part  = (props) => {
  return (
    <>
      <p>{props.part_name} {props.num_exe} </p>
    </>
  )
}

const Content  = () => {
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Part part_name={part1.name} num_exe={part1.exercises}/>
      <Part part_name={part2.name} num_exe={part2.exercises}/>
      <Part part_name={part3.name} num_exe={part3.exercises}/>
    </>
  )
}
const Total  = (props) => {
  return (
    <>
      <p>Number of exercises {props.total_exe} </p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const total  = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course_name={course} />
      <br />
      <Content />
      <br />
      <Total total_exe={total} />
    </div>
  )
}

export default App