const post = {
  username : "@sarbeswar",
  content : "This is my #firstPost",
  likes : 10,
  reposts : 5,
  tags : ["post","firstPost","first"]
}

console.log(post);
console.log(post.username);
console.log(post.content);
console.log(post.likes);
console.log(post.reposts);
console.log(post.tags);

console.log(post["username"]);
console.log(post["content"]);
console.log(post["likes"]);
console.log(post["reposts"]);
console.log(post["tags"]);