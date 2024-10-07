import { useState } from 'react'
import './App.css'

import Joke from "./Joke"
import JokesData from './JokesData'
JokesData

export default function App() {
    const jokeElements = JokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}

