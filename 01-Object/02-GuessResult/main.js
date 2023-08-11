const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // * // Object Show
  user = {};
  console.log(user); // ** //Assignment to constant variable.