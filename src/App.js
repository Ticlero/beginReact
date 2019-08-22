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
    //버튼을 누르면 App.js State의 Characters의 데이터 값이 변경되고 테이블에 Characters array가 들어감
    handleSubmit = character => {
        this.setState({
            characters:[...this.state.characters, character]
        })
        //console.log(this.state.characters)
    }

}

export default App