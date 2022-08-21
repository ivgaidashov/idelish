export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function removeUndescores(string) {
  return string.replaceAll("_", " ");
}
