function rot13(str) {
  var rotCharArr = [];
  var regEx = /[A-Z]/;
  str = str.split("");
  for (var i in str) {
    if (regEx.test(str[i])) {
      rotCharArr.push(((str[i].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      rotCharArr.push(str[i].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArr);
  return str;
}

rot13("SERR PBQR PNZC");
