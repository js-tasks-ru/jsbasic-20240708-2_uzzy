let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$$1,490.15",
  "picture": "https://placehold.it/32x32",
  "age": 25,
  "name": "Duncan Randall",
  "gender": "male",
  "greeting": "Hello, Duncan Randall! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user3 = {
  "balance": "$$2,790.15",
  "picture": "https://placehold.it/32x32",
  "age": 35,
  "name": "Dunny Maklaud",
  "gender": "male",
  "greeting": "Hello, Duncan Randall! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

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
