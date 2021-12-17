const fs = require("fs-extra");

fs.move("out/assets/", "out/assets-tmp/", err => {
  if (err) return console.error(err);
  console.log("move to temp!");
  fs.move("out/assets-tmp/", "out/assets/rh", err => {
    if (err) return console.error(err);
    console.log("success!");
  });
});

