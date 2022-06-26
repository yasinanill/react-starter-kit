import React from 'react'
import { useState } from 'react';



function Form() {



  const [form, setForm] = useState({ name: "", phoneNumber: "" });

  const onChangeInput = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value })

  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form)

  }
  return (



    <form onChange={onSubmit} style={{}}>
      <div>

      <input name='name' placeholder='fullname' onChange={onChangeInput}></input></div>
      
      
      
      <div>
      <input name='phoneNumber' placeholder='phone number' onChange={onChangeInput}></input></div>

      <div>
      
      <button name='name'  >Add</button></div>




    </form>


  )
}


export default Form;