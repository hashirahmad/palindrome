const memory = require('../../database/memory')
const APIError = require('../../helpers/APIError')

class addScores {
    constructor({ entry }) {
        this.entry = entry
    }

    /**
     * Makes sure that `entry` object is indeed:
     * - a JSON object
     * - contains a `name` key is affirmative
     * - contains a `word` key is affirmative
     */
    isValidEntry() {
        if (!this.entry) {
            throw new APIError({
                errorCode: 'INVALID_PARAM',
                templateUserMessage:
                    'entry must be a JSON object with `name` and `word` keys',
            })
        }
        if (!this.entry.name) {
            throw new APIError({
                errorCode: 'INVALID_PARAM',
                templateUserMessage: 'entry.name is required',
            })
        }
        if (!this.entry.word) {
            throw new APIError({
                errorCode: 'INVALID_PARAM',
                templateUserMessage: 'entry.word is required',
            })
        }
    }

    /**
     * A palindrome is a word or sentence that’s spelled the same way
     * both forward and backward, ignoring punctuation, case, and spacing.
     * Note: It’ll remove all non-alphanumeric characters
     * (punctuation, spaces and symbols) and turn everything lower case
     * in order to check for palindromes.
     */
    palindrome() {
        const word = String(this.entry.word)
        const re = /[\W_]/g
        const lowerCaseWord = word.toLowerCase().replace(re, '')
        const reversedWord = lowerCaseWord.split('').reverse().join('')
        const is = reversedWord === lowerCaseWord
        return { is, points: is ? reversedWord.length : 0 }
    }

    /**
     * Adds the submitted entry to the memory. It does takes care
     * of input sanitization.
     */
    add() {
        /**
         * Lets make sure that it is valid
         */
        this.isValidEntry()
        const result = this.palindrome()
        memory.add({
            name: this.entry.name,
            points: result.points,
        })
        return result
    }
}

module.exports = addScores
