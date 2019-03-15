function loader(source) {
  console.log('inside loader');
  console.log(typeof source);
  // Apply some transformations to the source...
  const newStr = source.match(/import(.)*;/g);
  const modifiedStr = newStr && newStr.join('');
  console.log(modifiedStr);
  return newStr ? modifiedStr : `export default ${ JSON.stringify(source) }`;
  //return `module.exports = ${JSON.stringify( newStr ? modifiedStr : source) }`;
  //return `export default ${JSON.stringify( newStr ? modifiedStr : source) }`;
  return `export default ${JSON.stringify(source) }`;
}

module.exports = loader;