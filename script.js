buttonForsearch.addEventListener("click", () => {
  console.dir(searchInput.value);
  fetch(`https://api.github.com/users/${searchInput.value}`)
    .then((respons) => {
      if (respons.status === 200) {
        return respons.json();
      }
    })
    .then((data) => {
      console.log(data);
      mainDiv1Img.src = `${data.avatar_url}`;
      h1.innerHTML = `${data.name}`;
      h2.innerHTML = `${data.created_at}`;
      h3.innerHTML = `@${data.login}`;
      h4.innerHTML = `${data.bio}`;
      followers.innerHTML = `${data.followers}`;
      following.innerHTML = `${data.following}`;
      reposs.innerHTML = `${data.public_repos}`;
      twitter.innerHTML = `${data.twitter_username}`;
      blog.innerHTML = `${data.html_url}`;
      company.innerHTML = `${data.company}`;
      lokation.innerHTML = `${data.location}`;
    })
    .catch((error) => {
      h1.innerHTML = "No Result";
    });
});

let dark = false;
darkModusImg.addEventListener("click", () => {
  if (dark) {
    document.documentElement.style.setProperty("--backgroundMain", "#f6f8ff");
  } else {
    document.documentElement.style.setProperty("--backgroundMain", "#1e2a47");
  }
  dark = !dark;
});

fetch("http://localhost:4000/save/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "alex",
    surname: " alexa",
  }),
})
  .then((respons) => respons.json())
  .then((data) => {
    console.log(data);
  });
