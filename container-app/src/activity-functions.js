export function prefix(location, ...prefixes) {
  return prefixes.some(
    (prefix) => location.href.indexOf(`${location.origin}${prefix}`) !== -1
  );
}

export function nav() {
  return true;
}

export function toDoFunc(location) {
  return location.origin + "/" === location.href;
}

export function trashFunc(location) {
  return prefix(location, "/trash");
  page - 1;
}
