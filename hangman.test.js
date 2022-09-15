const game = require("./hangman");

describe("hangManGameInit", () => {
    test("it exists", () => {
        expect(game.hangmanGameInit).toBeDefined();
    })

    

})

describe("hangmanRun", () => {
    test("it exists", () => {
        expect(game.hangmanRun).toBeDefined();
    })
})

test("user has tried 6 guesses and results in game over", () => {
    expect(game.gameOver(6)).toEqual(true);
})

// test("returns an array of 20 random words", () => {
//     expect(game.generateRandomWords(20)).toEqual()
// })

// test('name is not empty', () => {
//     expect(game.getName()).not.toBe("")
// })
