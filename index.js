class Formatter {
  //add static methods here
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  static sanitize(name) {
    return name.replace( /[^A-Za-z0-9 '-]+/g, "");
  }

  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let newSentence = sentence.split(' ')

    for (let i=0; i < newSentence.length; i++) {
      if (i==0) {
        result.push(this.capitalize(newSentence[i]))
      } else {
        if (exceptions.includes(newSentence[i])) {
          result.push(newSentence[i])
      } else {
        result.push(this.capitalize(newSentence[i]))
      }
     }
    }
    return result.join('');
 }
}
