import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { X } from 'lucide-react';

const App = () => {

  const[title, setTitle]= useState('')
  const[details, setDetails]= useState('')
  const[task, setTask] = useState([])

  const submitHandler =(e) => {
    e.preventDefault()
    const copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }
  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }


  return (
    <div className="main">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='form-item'>
        <h1 >Add Notes</h1>

        <input type="text" placeholder='Enter notes heading' 
        value={title}
        onChange={(e)=>{
         setTitle(e.target.value)
        }}
        />

        <textarea name="" id="" placeholder='Enter Details '
        value={details}
        onChange={(e)=>{
        setDetails(e.target.value)
        } }
        />

        <button className='btn'>Add Note</button>
      </form>

      <div className='notes-container'>
        <h1 className='notes-text'>Recent Notes</h1>
        <div className="card-div">
          {task.map(function(elem,idx){

            return <div key={idx} className="card">
              
              <h3>{elem.title}</h3>
              <p>{elem.details}</p>
              <button onClick={() => {
                deleteNote(idx)
              }} className="delete-btn" >
                 Delete 
                </button>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App
