//process.stdout.write('hello from spinner1.js... \rheyyy\n');


setTimeout(() => {
  process.stdout.write('\r| first try   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ second try  ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-  third try ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\forth try '); 
}, 700);