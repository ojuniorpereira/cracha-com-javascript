const linksSocialMedia = {
  github: "ojuniorpereira",
  youtube: "channel/UC_WRRecZ_KU7ehbyjRl8uNg",
  facebook: "profile.php?id=100072125566530",
  instagram: "__juniorpereira",
  twitter: "maykbrito"
}

function changeSocialMediaLinks (){
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks ()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json ())
.then(data => {
  userName.textContent = data.name
  userBio.textContent = data.bio
  userLink.href = data.html_url
  userPhoto.src = data.avatar_url
  userLogin.textContent = data.login
})
}

getGitHubProfileInfos()