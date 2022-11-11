/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = {}
    for (var i=0; i<this.words.length; i++){
      chains[this.words[i]] = []
    }
    for (var i=1; i<this.words.length; i++){
      if(this.words[i]){
        chains[this.words[i-1]].push(this.words[i])
      }
    }
    this.chains = chains
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let rand = Math.floor(Math.random() * this.words.length);
    let currWord = this.words[rand];
    let final = currWord;
    let options = this.chains[currWord];

    for (var i = 1; i < numWords; i++){
      
      if (options[0]){
      rand = Math.floor(Math.random() * options.length);
      currWord = options[rand];
      final = final + ' ' + currWord;
      options = this.chains[currWord];
      }

      else{
        rand = Math.floor(Math.random() * this.words.length);
        currWord = this.words[rand];
        options = this.chains[currWord];
        final += ' ' + currWord;
      }
    
    }
    return final
  }
}

module.exports = {MarkovMachine}