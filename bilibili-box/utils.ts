export function intToString(value: number) {
  const suffixes = ["", "k", "m", "b", "t"];
  const suffixNum = Math.floor(("" + value).length / 3);
  let shortValue = parseFloat(
    (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 != 0) {
    shortValue = parseFloat(shortValue.toFixed(1));
  }
  return shortValue + suffixes[suffixNum];
}

export function getBLen(str: string) {
  return str.replace(/[^\x00-\xff]/g, "01").length;
}

export function cutString(str: string, len: number) {
  if (getBLen(str) <= len) {
    return str + new Array(len - getBLen(str)).fill(" ").join("");
  }

  var strlen = 0;

  var s = "";

  for (var i = 0; i < str.length; i++) {
    s = s + str.charAt(i);

    if (str.charCodeAt(i) > 128) {
      strlen = strlen + 2;

      if (strlen >= len) {
        return s.substring(0, s.length - 1) + "...";
      }
    } else {
      strlen = strlen + 1;

      if (strlen >= len) {
        return s.substring(0, s.length - 2) + "...";
      }
    }
  }
  return s;
}
