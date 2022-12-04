export function weeksBetween(finalDate) {

  var today = new Date().getTime();

  return Math.round((finalDate - today) / 604800000);
}