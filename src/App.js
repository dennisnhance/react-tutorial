import React, {Component} from 'react';
import Form from './components/Form'
import Table from './components/Table'
import {getAllUsers, createUser} from './service/UserService'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
class App extends Component {

    state = {
        characters: [],
        successMessage: '',
        errorMessage: ''
      }

    componentDidMount() {

        this.populateState()
    }

    populateState() {

        getAllUsers().then(dataFromServer => this.setState({characters: dataFromServer}));
    }

    render() {

        const { characters, successMessage } = this.state
        return (
            <div className="container">
                {successMessage && <p className="vertical-center" style={{color: "green"}}>{successMessage}</p>}
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Table characterData={characters} removeCharacter={this.removeCharacter}/>}/>
                        <Route path='addNew' element={<Form handleSubmit={this.handleSubmit}/>}/>
                    </Routes>
                </Router>
            </div>
        )
    }

    removeCharacter = (index) => {
        const {characters} = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }

      handleSubmit = (character) => {

        createUser(character).then((dataFromServer) => {
          this.populateState();
          this.setState({...this.state, successMessage: "User added successfully"})
        });
      }
  }

  export default App;