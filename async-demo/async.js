console.log('Before');
const user = getUser();
console.log(user);
console.log('After');

function getUser(id) {
  setTimeout(() => {
    console.log('Reading from database...');
    const result = { id: id, githubUsername: 'mayu' };
    // console.log(result);
    return result;
  }, 2000);
}

function getRepos(username) {
  setTimeout(() => {}, 2000);
}
