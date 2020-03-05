export const jokesHtml = (jokeObject) => {
    return `
     <div class="centered">
 
            <section class="cards">
                 
                <article class="card">
                
            <div class="jokeTitle">Joke: ${jokeObject.id}</div>
            <div class="jokeQuestion">${jokeObject.question}</div>
            <div class="jokeAnswer">${jokeObject.answer}</div>
            </ul>
                </article>
                </section>
                `
}

// {/* <section class="joke">
//         <ul>
//             <li>${jokeObject.id}</li>
//             <li>${jokeObject.question}</li>
//             <li>${jokeObject.answer}</li>
//             </ul>
//     </section>
//     ` */}
