//async function
async function f(){
    return 1;
}

// with promises
async function f(){
    return Promise.resolve(1);
}

f().then(alert); // 1

//Await
async function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'),1000)
    });

    let result = await promise; //wait until the promise resolves

    alert(result); //'done!'
}

f();

//Using fetch 
async function showAvatar() {

    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  showAvatar();

  //Await using class
  class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      alert(resolve);
      // resolve with this.num*2 after 1000ms
      setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
  }
  
  async function f() {
    // waits for 1 second, then result becomes 2
    let result = await new Thenable(1);
    alert(result);
  }
  
  f();

  //Using Class method
  class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
  
  new Waiter()
    .wait()
    .then(alert); // 1 (this is the same as (result => alert(result)))