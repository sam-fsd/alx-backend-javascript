export default function getStudentIdsSum(array) {
  return array.reduce((currentTotal, item) => currentTotal + item.id, 0);
}
