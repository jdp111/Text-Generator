const {MarkovMachine} = require("./markov");

  
describe("return word association object", function(){
    test("test 1 word", function () {
        const object = new MarkovMachine("there there there")
        expect(object.chains).toEqual({"there": ["there","there"]})
    })

    test("test two words", function () {
        const object = new MarkovMachine("there there is is")
        expect(object.chains).toEqual({"there": ["there","is"], "is" : ["is"]})
    })

    test("test new end word", function () {
        const object = new MarkovMachine("there is none")
        expect(object.chains).toEqual({"there": ["is"], "is" : ["none"], "none": []})
    })
})


describe("test the random word generator", function(){
    
    test("test no word", function () {
        const object = new MarkovMachine("there")
        const result = object.makeText(5)
        console.log(object.chains)
        expect(result).toEqual("there there there there there")
    })

    
    test("test 1 word", function () {
        const object = new MarkovMachine("there there there there there")
        const result = object.makeText(5)
        
        expect(result).toEqual("there there there there there")
    })

    test("test 2 words", function () {
        const object = new MarkovMachine("there is there")
        const result = object.makeText(6)
        expect(result).toEqual("there is there is there is")
    })
})