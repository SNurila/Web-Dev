import {resource, Signal} from '@angular/core';
const userId: Signal<string> = getUserId();
const userResource = resource({
  // Define a reactive computation.
  // The params value recomputes whenever any read signals change.
  params: () => ({id: userId()}),
  // Define an async loader that retrieves data.
  // The resource calls this function every time the `params` value changes.
  loader: ({params}) => fetchUser(params),
});
// Create a computed signal based on the result of the resource's loader function.
const firstName = computed(() => {
  if (userResource.hasValue()) {
    // `hasValue` serves 2 purposes:
    // - It acts as type guard to strip `undefined` from the type
    // - If protects against reading a throwing `value` when the resource is in error state
    return userResource.value().firstName;
  }
  // fallback in case the resource value is `undefined` or if the resource is in error state
  return undefined;
});