const skills = [
    {
        skillName: 'JavaScript',
        iconName: 'javascript',
        iconColor: 'text-yellow-300'
    },
    {
        skillName: 'React Js',
        iconName: 'react',
        iconColor: 'text-cyan-400'
    },
    {
        skillName: 'Node Js',
        iconName: 'nodejs',
        iconColor: 'text-green-400'
    },
    {
        skillName: 'HTML',
        iconName: 'html5',
        iconColor: 'text-orange-600'
    },
    {
        skillName: 'CSS',
        iconName: 'css3',
        iconColor: 'text-blue-600'
    },
    {
        skillName: 'TailwindCSS',
        iconName: 'tailwind-css',
        iconColor: 'text-sky-400'
    },
    {
        skillName: 'Git',
        iconName: 'git',
        iconColor: 'text-orange-500'
    },
]

const skillsGrid = document.getElementById("skills-grid")

function createSkillCard({skillName, iconName, iconColor}) {
    const card = document.createElement('div')
    card.className = "bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal flex items-center justify-between"

    const span = document.createElement('span')
    span.className = "text-gray-700 dark:text-gray-300 font-bold"
    span.textContent = skillName

    const icon = document.createElement('i')
    icon.className = `bx bxl-${iconName} bx-md ${iconColor} animate-bounce-fast`

    card.append(span, icon)

    return card
}

// inserindo no DOM
skills.forEach(skill => {
    const el = createSkillCard(skill);
    skillsGrid.appendChild(el);
});