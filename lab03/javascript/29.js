let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16


let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3


counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 2