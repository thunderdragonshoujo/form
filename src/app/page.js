import Form from "./form.js"
export default function HomePage(){
  return(
    <div>
      <Header title="React"/>
      <Header title="Develop. Preview. Ship"/>
      <Form/>
    </div>
  )
}

function Header({title}) {
  return <h1>{title ? title : 'Default title'}</h1>;
}