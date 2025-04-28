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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Part part_name={part1} num_exe={exercises1}/>
      <Part part_name={part2} num_exe={exercises2}/>
      <Part part_name={part3} num_exe={exercises3}/>
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
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const total_exe  = exercises1 + exercises2 + exercises3
  return (
    <div>
      <Header course_name={course} />
      <br />
      <Content />
      <br />
      <Total total_exe={total_exe} />
    </div>
  )
}

export default App