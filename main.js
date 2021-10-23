const linksSocialMedia = {
    github: 'RafaelMorais-source',
    youtube: 'jakelinygracielly',
    facebook: 'profile.php?id=100010457054102',
    instagram:'jakeliny.gracielly',
    linkedin: 'in/rafael-rosa-de-morais-a7a44bb6/'
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`                

    }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).then(response => response.json()).then(data => {        
        userBio.textContent = data.bio
        userImage.src = data.avatar_url
    
    })
}

getGithubProfileInfos()