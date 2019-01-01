console.log('Before');
/* getUser(1, user => {
  //console.log(user);
  getRepos(user.githubUsername, repos => {
    // console.log(repos);
    getCommits(repos[0], commits => {
      console.log(commits);
    });
  });
}); */

/* getUser(1)
  .then(user => getRepos(user.githubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => {
    console.log(commits);
  })
  .catch(err => {
    console.log('Error:', err.message);
  }); */
displayCommits();

console.log('After');

// 这个函数里面有异步操作，使用settimeout来模拟
// 什么是异步操作，就是完成这个操作需要的一定的时间，而且具体需要多少时间是不确定的！

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.githubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error:', err.message);
  }
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading from database...');
      const result = { id: id, githubUsername: 'mayu' };
      // console.log(result);
      resolve(result);
    }, 2000);
  });
}

// 这个函数里面有异步操作，使用settimeout来模拟
function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading from github API...');
      const result = ['repos1', 'repos2', 'repos3'];
      resolve(result);
    }, 2000);
  });
}

// 这个函数里面有异步操作，使用settimeout来模拟
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading from github API...');
      const result = ['commit'];
      resolve(result);
      // reject(new Error('Fetch commits failed!'));
    }, 2000);
  });
}
