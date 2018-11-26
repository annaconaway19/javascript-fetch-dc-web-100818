const app = "I don't do much.";

const token = '676469a31e72446b72089928d27a0c09a3a17bc1'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
