module.exports = function check(str, bracketsConfig) {
  // your solution
  const brackets = Object.fromEntries(bracketsConfig);
  const bracketsKeys = Object.keys(brackets);
  const bracketsValues = Object.values(brackets);

  const arrayForHelp = [];
  var theSameBrackets = '';

  for (let char of str) {
        if (Object.keys(brackets).includes(char) && !Object.values(brackets).includes(char)) {
            arrayForHelp.push(char);
            continue;
        }

        if (Object.keys(brackets).includes(char) && Object.values(brackets).includes(char)) {
            if (char === theSameBrackets) {
                if (char === arrayForHelp.at(-1)) {
                    arrayForHelp.pop();
                    theSameBrackets = arrayForHelp.at(-1) ?? '';
                    continue;
                }
            }

            arrayForHelp.push(char);
            theSameBrackets = char;
            continue;
        }

        const bracketFirst = bracketsKeys[bracketsValues.indexOf(char)];
        if (bracketFirst === arrayForHelp.at(-1)) {
            arrayForHelp.pop();
            continue;
        }

        return false;
    }

    return (arrayForHelp.length === 0);
}
