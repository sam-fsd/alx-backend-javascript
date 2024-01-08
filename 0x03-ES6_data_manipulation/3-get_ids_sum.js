export default function getStudentIdsSum(array) {
  return array.reduce((currentTotal, item) => {
    return currentTotal + item.id;
  }, 0);
}
