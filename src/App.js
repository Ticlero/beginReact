import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    //state사용
    /*state = {
        characters:
            [
                {
                    name: 'Charlie',
                    job: 'Janitor',
                },
                {
                    name: 'Mac',
                    job: 'Bouncer',
                },
                {
                    name: 'Dee',
                    job: 'Aspring actress',
                },
                {
                    name: 'Dennis',
                    job: 'Bartender',
                },
            ]
    }*/
    //state를 이용하여 데이터 summitting
    state = {
        characters: [],
    };

    render() {

        //props 사용
        //characters: [{ name: 'Charlie',job: 'Janitor', },{name: 'Mac',job: 'Bouncer',},{name: 'Dee',job: 'Aspring actress',},{ name: 'Dennis',job: 'Bartender',},]

        return (
            <div className="container">                
                <Table arrayData={ this.state.characters } removeCharacter={this.removeCharacter} />              
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = character => {
        this.setState({
            characters:[...this.state.characters, character]
        })
    }

}

export default App