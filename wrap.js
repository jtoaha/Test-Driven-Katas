const wrap = (line, maxLen) => {
  if (maxLen > line.length || !maxLen) {
    return line;
  } else {
    return line.split(' ').join('\n')
  }
}
module.exports = wrap;

