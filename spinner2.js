const array = ['\r| first try   ','\r/ second try   ','\r-  third try   ','\r\\forth try   '];
let min = 100;
for (let arr of array) {
  setTimeout(() => {
    process.stdout.write('\r| first try   ');
  }, min);
  min += 200;
}