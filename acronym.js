export function parse(input) {
    //validate it's a string
    //let's pretend
    
    //everything is a regex...
    const delimit = /\s/

    //got stuck trying to debug regexes....
    //const delimit = /\s+.*-/;

    //break the input into a sectioned array
    const words = input.split(delimit)

    //flatten the sections into one capitalized return string
    const letters = words.map(grabFirstChar)
    const output = letters.join('')

    return output
}

//there's a functional way to to do this, surely?
function grabFirstChar(input){
    return input.charAt(0).toUpperCase()
}