// Code your solution here
const findMatching = (array, name) => {
  return array.filter((entry) => entry.toLowerCase() === name.toLowerCase());
};
const fuzzyMatch = (array, str) => {
  return array.filter((name) => name.slice(0, str.length) == str);
};
const matchName = (array, str) => {
  return array.filter((driver) => driver.name === str);
};
