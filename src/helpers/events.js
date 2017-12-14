export function getKeyboardEventCode(event) {
  return event.code || event.key || event.keyIdentifier;
}
