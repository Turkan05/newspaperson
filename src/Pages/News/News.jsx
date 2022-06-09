import React, { useState } from 'react'
import './News.css'


const News = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [nameError, setNameError] = useState(false)


	const myFunc = (e) => {
		if (e.target.name === "name") {
			setName(e.target.value)
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "password") {
			setPassword(e.target.value);
		}
	}


	const validate = () => {
		if (name.length>1) {
			setNameError(false)
		} else {
			setNameError(true)
		}

		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setEmailError(false);
		} else {
			setEmailError(true);
		}

		if (password.length > 6) {
			setPasswordError(false);
		} else {
			setPasswordError(true);
		}
	}


	const submit = () => {
		validate()
		if (nameError === false && emailError === false && passwordError === false && email !== "" && password !== "" && name !== "") {
			console.log("submit", name, email, password);
		}
	}

	return (
		<div>
			<input style={{background: nameError ?  "red" : "white"} } type='text' className='name' name='name' value={name} onBlur={() => validate()} onChange={(e) => myFunc(e)}></input>
			<input type='text' className='email' name='email' onBlur={() => validate()} value={email} onChange={(e) => myFunc(e)}  ></input> <br />
			<input type='text' className='password' name='password' value={password} onBlur={() => validate()} onChange={(e) => myFunc(e)} ></input>
			<button onClick={submit} >submit</button>
		</div>
	)
}

export default News