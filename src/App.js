import React, {Component} from 'react';
import Form from './components/Form'
import Table from './components/Table'
import {getAllUsers, createUser} from './service/UserService'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
class App extends Component {

    state = {
        characters: [
            
        ],
      }

    componentDidMount() {

        this.populateState()
    }

    populateState() {

        getAllUsers().then(dataFromServer => this.setState({characters: dataFromServer}));
    }

    render() {

        const { characters } = this.state
        return (
            <div className="container">
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Table characterData={characters} removeCharacter={this.removeCharacter}/>}/>
                        <Route path='addNew' element={<Form handleSubmit={this.handleSubmit}/>}/>
                    </Routes>
                </Router>
                {/*<Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>*/}
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

        //this.setState({characters: [...this.state.characters, character]})
        createUser(character).then(this.populateState());
      }
  }

  export default App;