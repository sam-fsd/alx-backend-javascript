export default function hasValuesFromArray(set, array) {
  let bool = false;

  array.forEach((item) => {
    if (set.has(item)) {
      bool = true;
    } else {
      bool = false;
    }
  });

  return bool;
}
