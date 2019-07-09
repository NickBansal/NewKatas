module.exports = (str1, str2) => {
  let str1Value = str1;
  const str2Array = str2.split('');

  for (let i = 0; i < str2Array.length; i += 1) {
    if (str1Value.indexOf(str2Array[i]) !== -1) {
      str1Value = str1Value.replace(str2Array[i], '');
    } else {
      return false;
    }
  }
  return true;
};
