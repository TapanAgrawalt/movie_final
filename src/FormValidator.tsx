import React,{useState,Fragment} from 'react'

function FormValidator(props:any) {
const [message,setMessage]=useState <any>()
const[error,setError]=useState(false)

 const err=()=>{
  if(props.name == ""){
    setMessage("name should not be empty")
    setError(true)
      }
 }
 err()
  return (
    <Fragment>{error ?<p>{message}</p>:null}</Fragment>
  )
}

export default FormValidator