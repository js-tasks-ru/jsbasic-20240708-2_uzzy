function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  friends.forEach(item => {
    let element = document.createElement('li');
    element.innerText = `${item.firstName} ${item.lastName}`;
    ul.appendChild(element);
  });

  return ul;
}
