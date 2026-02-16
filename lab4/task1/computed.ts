import {signal, computed} from '@angular/core';
const firstName = signal('Morgan');
const firstNameCapitalized = computed(() => firstName().toUpperCase());
console.log(firstNameCapitalized()); // MORGAN
firstName.set('Jaime');
console.log(firstNameCapitalized()); // JAIME