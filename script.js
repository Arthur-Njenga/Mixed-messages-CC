// An array of random greetings.
/*const greetings = {
    language:["Arabic", "Spanish", "French", "Chinese", "Italian", "Swahili", "Greek", "Indonesian", "Hindi", "Turkish", "Hebrew"],
    greeting:["Asalaam alaikum", "Hola", "Bonjour", "Nǐn hǎo", "Salve", "Shikamoo", "Yassas", "Selamat siang", "Namaste", "Merhaba", "Shalom"]
}
*/

const greetings =["Asalaam alaikum", "Hola", "Bonjour", "Nǐn hǎo", "Salve", "Shikamoo", "Yassas", "Selamat siang", "Namaste", "Merhaba", "Shalom"]

//console.log(greetings);

/*switch (greetings) {
    case 0:
        
}*/

// Returns a random joke.
const randGreeting = (array) => {
    console.log(array[Math.floor(Math.random() *greetings.length)]);
};

randGreeting(greetings);