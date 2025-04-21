buttonForsearch.addEventListener("click", () => {
  console.dir(searchInput.value);
  fetch(`https://api.github.com/users/${searchInput.value}`)
    .then((respons) => {
      if (!respons.ok) {
        throw new Error(`HTTP error! Status: ${respons.status}`);
      }
      return respons.json();
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
      h1.style.color = "red";
    });
});

let darkModus = false;

darkModusImg.addEventListener("click", () => {
  darkModus = !darkModus;

  if (darkModus) {
    headDivSpan.innerHTML = "LIGHT";
    darkModusImg.src = "./githubfoto/sun.svg";
    infoImg1.src = "./githubfoto/dlokation.png";
    infoImg2.src = "./githubfoto/d.twit.png";
    infoImg3.src = "./githubfoto/dlink.png";
    infoImg4.src = "./githubfoto/dcompany.png";
    document.documentElement.style.setProperty("--bg-color", "#141d2f");
    document.documentElement.style.setProperty("--white-color", "#1E2A47");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--black-color", "white");
    document.documentElement.style.setProperty("--statistik-color", "#141d2f");
    document.documentElement.style.setProperty("--gray-color", "white");
    document.documentElement.style.setProperty("--input-bg-color", " #1e2a47");
    document.documentElement.style.setProperty("--button-color", "white");
  } else {
    headDivSpan.innerHTML = "DARK";
    darkModusImg.src = "./githubfoto/moon.svg";
    document.documentElement.style.setProperty("--bg-color", "#f2f2f2");
    document.documentElement.style.setProperty("--white-color", "white");
    document.documentElement.style.setProperty("--text-color", "#4b6a9b");
    document.documentElement.style.setProperty("--black-color", "black");
    document.documentElement.style.setProperty("--statistik-color", "#f6f8ff");
    document.documentElement.style.setProperty("--gray-color", "#697C9A");
    document.documentElement.style.setProperty("--input-bg-color", "white");
    infoImg1.src = "./githubfoto/lokation.png";
    infoImg2.src = "./githubfoto/004-twitter.svg";
    infoImg3.src = "./githubfoto/link.svg";
    infoImg4.src = "./githubfoto/001-office-building.svg";
  }
});
