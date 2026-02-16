const activeUser = signal({id: 123, name: 'Morgan', isAdmin: true});
const activeUserEditCopy = linkedSignal(() => activeUser(), {
  // Consider the user as the same if it's the same `id`.
  equal: (a, b) => a.id === b.id,
});
// Or, if separating `source` and `computation`
const activeUserEditCopy = linkedSignal({
  source: activeUser,
  computation: (user) => user,
  equal: (a, b) => a.id === b.id,
});