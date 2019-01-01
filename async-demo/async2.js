console.log('Before');
getUser(1, user => {
  //console.log(user);
  getRepos(user.githubUsername, repos => {
    // console.log(repos);
    getCommits(repos[0], commits => {
      console.log(commits);
    });
  });
});
console.log('After');

// 这个函数里面有异步操作，使用settimeout来模拟
// 什么是异步操作，就是完成这个操作需要的一定的时间，而且具体需要多少时间是不确定的！

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading from database...');
    const result = { id: id, githubUsername: 'mayu' };
    // console.log(result);
    callback(result);
  }, 2000);
}

// 这个函数里面有异步操作，使用settimeout来模拟
function getRepos(username, callback) {
  setTimeout(() => {
    console.log('Reading from github API...');
    const result = ['repos1', 'repos2', 'repos3'];
    callback(result);
  }, 2000);
}

// 这个函数里面有异步操作，使用settimeout来模拟
function getCommits(repo, callback) {
  setTimeout(() => {
    console.log('Reading from github API...');
    const result = ['commit'];
    callback(result);
  }, 2000);
}
