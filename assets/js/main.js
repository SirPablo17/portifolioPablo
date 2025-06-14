function updateProfileInfo (profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    phone.href = `mailto${profileData.email}`

}

function updateSoftSkills (profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills (profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguage (profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortifolio (profileData) {
    const portifolio = document.getElementById('profile.portifolio')
    portifolio.innerHTML = profileData.portfolio.map(project => {
        return     `<li>
                        <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                        <a href="${project.url}" target="_blank">${project.url}</a>
                    </li>`
    }).join('')
}

function updateProfissionalExperience (profileData) {
    const experience = document.getElementById('profile.professionalExperience')
    experience.innerHTML = profileData.professionalExperience.map(experience => {
        return     `<li>
                        <h3 class="title">${experience.name}</h3>
                        <p class="period">${experience.period}</p>
                        <p>${experience.description}</p>
                    </li>`
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills (profileData)
    updateLanguage (profileData)
    updatePortifolio (profileData)
    updateProfissionalExperience (profileData)
})()
