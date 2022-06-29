import React, {Component} from 'react'
import { useNavigate } from 'react-router-dom'

class Form extends Component {
  
  initialState = {
    firstName: '',
    lastName: '',
    email: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }

  render() {

    //const firstName = this.state.firstName;
    //const lastName = this.state.lastName;
    // const email = this.state.email;
    //const { firstName, lastName, email } = this.state;
  
    return (
      <form>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={this.state.firstName}
          onChange={this.handleChange} />
        <label htmlFor="job">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={this.state.lastName}
          onChange={this.handleChange} />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange} />
        <SubmitButton submitForm={this.submitForm}/>
      </form>
    );
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
}

const SubmitButton = (props) => {

  const navigate = useNavigate();
  const useSubmitForm = () => {
    
    props.submitForm()
    navigate('/')
  }
  return (<input type="button" value="Submit" onClick={useSubmitForm} />);
}

export default Form;