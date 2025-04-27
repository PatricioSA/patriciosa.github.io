const skills = [
    {
        skillName: 'HTML/CSS'
    },
    {
        skillName: 'JavaScript'
    },
    {
        skillName: 'TailwindCSS'
    },
    {
        skillName: 'React Js'
    },
    {
        skillName: 'Git'
    },
]

const skillsGrid = document.getElementById("skills-grid")

function createSkillCard({skillName}) {
    const card = document.createElement('div')
    card.className = "bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal"

    const span = document.createElement('span')
    span.className = "text-gray-700 dark:text-gray-300 font-bold"
    span.textContent = skillName

    card.appendChild(span)

    return card
}

// inserindo no DOM
skills.forEach(skill => {
    const el = createSkillCard(skill);
    skillsGrid.appendChild(el);
});