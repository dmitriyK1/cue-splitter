/**
 * Removes special characters and whitespaces from a cue text
 * '!?  #hello...,' -> 'hello'
 * @param {string} cueText Text of a cue to be removed from a special characters
 * @return {string}
 */
const splitCue = cueText => (
  // TODO: change into one regular expression
  cueText
    .replace(/- /g, ' ')
    .replace(/ -/g, ' ')
    .replace(/!/g, ' ')
    .replace(/\./g, ' ')
    .replace(/\.$/, ' ')
    .replace(/,/g, ' ')
    .replace(/\n/g, ' ')
    .replace(/\?/g, ' ')
    .trim()
);

module.exports = splitCue;
