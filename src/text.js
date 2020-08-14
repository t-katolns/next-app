export const textaaa = document.getElementsByTagName("textaaa")[0];
textaaa.addEventListener("input", () => {
  const text = replaceBr(textaaa.value);
  const target = event.currentTarget;
  numOfLine(countBr(text), countLen(countBr(text), text), target);
});

const replaceBr = (value) => {
  return value.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
};

const countBr = (text) => {
  const count = (text.match(/\n/g) || []).length;
  switch (count) {
    case 0:
      return 0;
      break;
    case 1:
      return 1;
      break;
    case 2:
      return 2;
      break;
    case 3:
      return 3;
      break;
    default:
      return 4;
      break;
  }
};

const countLen = (br, text) => {
  switch (br) {
    case 0:
      return countVal(text);
      break;
    case 1:
      return countVal(text.split("\n")[1]);
      break;
    case 2:
      return countVal(text.split("\n")[2]);
      break;
    case 3:
      return countVal(text.split("\n")[3]);
      break;
    default:
      return 0;
      break;
  }
};

const countVal = (text) => {
  let count = 0;
  for (let i = 0, maxLen = text.length; i < maxLen; i++) {
    const chr = text[i];
    if (chr.match(/\n/)) {
      count += 0;
    } else if (!chr.match(/[^\x01-\x7E]/) || !chr.match(/[^\uFF65-\uFF9F]/)) {
      count += 0.5;
    } else {
      count += 1;
    }
  }
  return count;
};

const numOfLine = (br, len, target) => {
  let num = 0;
  if (len <= 5) {
    num = br + 1;
  }

  if (len > 5 && len <= 10) {
    num = br + 2;
  }

  if (len > 10 && len <= 15) {
    num = br + 3;
  }

  if (len > 15) {
    num = br + 4;
  }
  judgeLine(num, target);
};

const judgeLine = (num, target) => {
  if (num == 1) {
    target.classList.remove("twoLines");
    target.classList.remove("threeLines");
    target.classList.remove("fourLines");
  }
  if (num == 2) {
    target.classList.add("twoLines");
    target.classList.remove("threeLines");
    target.classList.remove("fourLines");
  }
  if (num == 3) {
    target.classList.add("threeLines");
    target.classList.remove("fourLines");
  }
  if (num > 3) {
    target.classList.add("fourLines");
  }
};
