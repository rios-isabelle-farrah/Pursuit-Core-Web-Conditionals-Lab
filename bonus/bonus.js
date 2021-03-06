/**
 * Takes in color and returns whether or not the color is a primary color.
 * The primary colors are "Red", "Yellow", and "Blue"
 * @param {string} color - The color.
 * @returns {boolean} - Whether the color is a primary color
 */
const isPrimaryColor = (color) => {
// color = color.toLowerCase() * We tried to use this 
// toLowerCase method once we realized we were not passing test due 
// to first letter being capitalized but it did not work, so we 
// manually corrected. How would we make this method work in the future?
return (color === "red" || color === "yellow" || color === "blue")
}

/**
 * Takes in color and returns whether or not the color is a primary color.
 * Uses exactly one if statement in its definition
 * @param {string} color - The color.
 * @returns {boolean} - If primary color or not
 */
const isPrimaryColorOneIf = (color) => {
  if(color === "red" || color === "yellow" || color === "blue"){
    return true
  }else{
    return false
  }
}

/**
 * Takes in two words and returns the word that comes first in lexicographical order.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string} - The word that is smaller in lexicographical order
 */
function lexicographicalOrder(word1,word2) {
if(word1 < word2){
  return word1
}else{
  return word2
}
}

/**
 * Takes in a word and returns "large" if its length is 5 character or more.
 * Otherwise returns "small"
 * @param {string} word
 * @returns {string} - "large" or "small"
 */
const largeOrSmall = (word) => {
  if (word.length >= 5) {
    return "large"
  } else {
    return "small"
  }
}

/**
 * Takes in two words and returns the longer word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string} - The longer word
 */
const longerWord = (word1, word2) => {
  return word1.length > word2.length ? word1 : word2
}

/**
 * Takes in three words and returns the shortest word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @param {string} word3 - The second word.  **(FYI, second word twice instead of third word)**
 * @returns {string} - The shortest word
 */
const shortestWord = (word1, word2, word3) => {
  let shortestWord = Math.min(word1.length, word2.length, word3.length); 
    if (word1.length === shortestWord) {
      return word1
      }
      else if (word2.length === shortestWord) {
        return word2
      }
      else if (word3.length === shortestWord) {
        return word3
      }
  }

  
module.exports = {
  isPrimaryColor,
  isPrimaryColorOneIf,
  lexicographicalOrder,
  largeOrSmall,
  longerWord,
  shortestWord,
};
