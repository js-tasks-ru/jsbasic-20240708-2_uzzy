function ucFirst(str) {
  if (!str) return str;
  let result = str.trim()
  return result[0].toUpperCase() + result.slice(1);
}
