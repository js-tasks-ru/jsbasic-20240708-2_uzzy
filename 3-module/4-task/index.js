function showSalary(users, age) {
  let result = '';
  for (let i = 0; i < users.length; i++) {
    if(users[i].age < age ){
        if(users.indexOf(users[i]) + 2 < users.length){
          result += `${users[i].name}, ${users[i].balance}\n`;
        }
      else {
        result += `${users[i].name}, ${users[i].balance}`;
      }
    }
  };
    return result;
 };
