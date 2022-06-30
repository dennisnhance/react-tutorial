import React from 'react'
import { useNavigate } from 'react-router-dom'

import {useForm} from 'react-hook-form'

const Form = (props) => {

  const {handleSubmit, register, formState: {errors}} = useForm();
  const navigate = useNavigate();

  function submitClicked(data) {
    
    props.handleSubmit(data)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(submitClicked)}>
      <label htmlFor="name">First Name</label>
      <input
        type="text"
        {...register("firstName", { required: true, maxLength: 10 })} />
      {errors.firstName && <p style={{color: "red"}}>Please check the First Name</p>}
      <label htmlFor="job">Last Name</label>
      <input
        type="text"
        {...register("lastName", { required: true, maxLength: 10 })} />
      {errors.lastName && <p style={{color: "red"}}>Please check the Last Name</p>}
      <label htmlFor="email">Email</label>
      <input
        type="text"
        {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  })} />
      {errors.email && <p style={{color: "red"}}>Please check the Email</p>}
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default Form;