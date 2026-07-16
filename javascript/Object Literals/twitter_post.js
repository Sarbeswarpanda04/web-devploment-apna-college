const post = {
  username : "@sarbeswar",
  content : "This is my #firstPost",
  likes : 10,
  reposts : 5,
  tags : ["post","firstPost","first"]
}
console.log("===================");
console.log(post);
console.log(post.username);
console.log(post.content);
console.log(post.likes);
console.log(post.reposts);
console.log(post.tags);
console.log("===================");

console.log(post["username"]);
console.log(post["content"]);
console.log(post["likes"]);
console.log(post["reposts"]);
console.log(post["tags"]);
console.log("===================");


console.log(typeof post);
console.log(typeof post.username);
console.log(typeof post.content);
console.log(typeof post.likes);
console.log(typeof post.reposts);
console.log(typeof post.tags);
console.log("===================");

console.log(typeof post["username"]);
console.log(typeof post["content"]);
console.log(typeof post["likes"]);
console.log(typeof post["reposts"]);
console.log(typeof post["tags"]);
console.log("===================");
