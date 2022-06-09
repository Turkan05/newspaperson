import React, { useState } from 'react'
import "./Contact.css"




const Contact = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameError, setNameError] = useState(false)
  const [surnameError, setSurnameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)



  const onChange = (e) => {
    if (e.target.name === 'name')
     {setName(e.target.value)} 
    else if (e.target.name === 'surname')
    {setSurname(e.target.value)} 
    else if (e.target.name === 'email')
    {setEmail(e.target.value)} 
    else if (e.target.name === 'password')
    { setPassword(e.target.value)} 
  }


  const validate = () => {
    if (name.length  > 1 ) {
      setNameError(false)
    } else {
      setNameError(true)
    }
    if (surname.length > 1) {
      setSurnameError(false)
    } else {
      setSurnameError(true)
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    if (password.length>6) {
      setPasswordError(false)
    } else {
      setPasswordError(true)
    }
  }

const submit=()=>{
validate () 
if  (nameError === "false" && surnameError ==="false" && emailError === 'false' && passwordError ==='false' && name !== '' &&  surname !== "" && email !== ''  && password !== ''         ) 
console.log (name.surname,email,password,'submit')


}

  return (
    <div   className='form'>
      <input name='name' value={name} onChange={(e) => onChange(e)} onBlur={() => validate()} placeholder="name" className="name"></input>
      <p style= {{color: nameError ? "red" : "green" }} className ="p" > {nameError ? "!" : ""}</p><br/>
      <input name='surname' value={surname} onChange={(e) => onChange(e)} onBlur={() => validate()} placeholder="surname"></input> 
      <p style= {{color: surnameError ? "red" : "green" }} className ="p" > {surnameError ? "!" : ""}</p><br/>
      <input name='email' value={email} onChange={(e) => onChange(e)} onBlur={() => validate()} placeholder='email'></input>
      <p style= {{color: emailError ? "red" : "green" }} className ="p" > {emailError ? "!" : ""}</p><br/>
      <input name='password' value={password} onChange={(e) => onChange(e)}onBlur={() => validate()} placeholder="password" type={'password'}></input>
      <p style= {{color: passwordError ? "red" : "green" }} className ="p" > {passwordError ? "!" : ""}</p><br/>
<button onClick={submit}  >submit</button>


    </div>
  )
}

export default Contact