import { useDadJokes } from "./dadJokesDataProvider.js";
import { jokesHtml } from "./dadJokes.js";

//tells where the object will show in HTML
const contentTarget = document.querySelector(".container")

export const JokesList = () => {
    const arrayOfJokesObjects = useDadJokes()

    for (const jokesObject of arrayOfJokesObjects) {
        //make an html representation of a taco
        const htmlRepresentationOfJokes = jokesHtml(jokesObject)
        //put that html representation on the DOM
        contentTarget.innerHTML += htmlRepresentationOfJokes

    }
}

