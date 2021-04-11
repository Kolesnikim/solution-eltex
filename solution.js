const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Please, enter a length of a random string: ', length => {
    const firstString = StringMethods.generateRandomString(length)

    console.log(`Generated string: ${firstString}\n`)

    rl.question('Please, enter a character to change all alphabetic symbols: ', firstCharacter => {
        const secondString = StringMethods.changeCharacter(firstString, firstCharacter)

        console.log(`Second generated string: ${secondString}\n`)

        rl.question('Please, enter a character to change all alphabetic symbols: ', secondCharacter => {
            const thirdString = StringMethods.changeCharacter(secondString, secondCharacter, true)

            const firstCharacterRepetitions = thirdString
                .split('')
                .filter(el => el === firstCharacter)
                .length

            const secondCharacterRepetitions = thirdString
                .split('')
                .filter(el => el === secondCharacter)
                .length

            const nonChangedCharacters = thirdString.length - firstCharacterRepetitions - secondCharacterRepetitions

            console.log(`Third generated string: ${thirdString}\n`)

            console.log(`The number of first character repetitions: ${firstCharacterRepetitions}\n`)
            console.log(`The number of second character repetitions: ${secondCharacterRepetitions}\n`)
            console.log(`The number of non-changed characters: ${nonChangedCharacters}\n`)

            rl.close()
        })
    })
});

class StringMethods {
    static generateRandomString(length) {
        if (!parseInt(length)) {
            throw Error("The length of a string must be a number, not a character!")
        }

        let pattern = "abdefghijklmnoqrtuvwyz0123456789+-_$~"

        let text = ""

        for (let i = 0; i < length; i++) {
            text += pattern.charAt(Math.floor(Math.random() * pattern.length))
        }

        return text
    }

    static changeCharacter(string, character, changeNumbers = false) {
        const regExp = changeNumbers ? /\d/g : /[a-z]/g

        if (character.length > 1) {
            throw Error("The number of characters in invalid! You should pass only one character")
        }

        return string.replace(regExp, character)
    }
}
