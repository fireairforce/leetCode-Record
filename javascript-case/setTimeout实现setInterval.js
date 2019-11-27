const fn = () => {
  setTimeout(() => {
    console.log(`hhhh`);
    fn();
  }, 1000);
};

// fn();
