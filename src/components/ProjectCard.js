const projects = [
    {
        title: "Website",
        description: "WebSite desenvolvido para o escritório de advocacia Abner Cruz",
        link: "https://abnercruzadvocacia.com.br",
        imgPhone: "/img/websiteabnercruz[phone].webp",
        imgTablet: "/img/websiteabnercruz[tablet].webp"
    },
    {
        title: "Rapidex",
        description: "Sistema de delivery: atividade final feita no Bootcamp Falaê, administrado pela Codi Academy",
        link: "https://rapidex-patriciosa.vercel.app",
        imgPhone: "/img/rapidex[phone].webp",
        imgTablet: "/img/rapidex[tablet].webp"
    },
    {
        title: "Kanban",
        description: "Um aplicativo de gerenciamento de tarefas no estilo Kanban, em desenvolvimento com React, TypeScript, ANT Design e Vite.",
        link: "https://github.com/PatricioSA/kanban",
        imgPhone: "/img/kanban[phone].webp",
        imgTablet: "/img/kanban[tablet].webp"
    },
    {
        title: "Login",
        description: "Simulação de login com validações.",
        link: "https://patriciosa.github.io/loginValidationReact/",
        imgPhone: "/img/login[phone].webp",
        imgTablet: "/img/login[tablet].webp"
    },
    {
        title: "Social Media App",
        description: "Este é um aplicativo simples de rede social no qual você pode compartilhar suas ideias e interagir com outros usuários curtindo suas publicações.",
        link: "https://social-app-livid-one.vercel.app/",
        imgPhone: "/img/social-media[phone].webp",
        imgTablet: "/img/social-media[tablet].webp"
    },
    {
        title: "Controle Financeiro",
        description: "Aplicação web simples de controle financeiro onde os usuários podem inserir suas receitas e despesas para monitorar suas finanças. A aplicação também inclui uma funcionalidade de cálculo de saldo, que exibe o saldo atual.",
        link: "https://patriciosa.github.io/controle-financeiro-react",
        imgPhone: "/img/controle-financeiro[phone].webp",
        imgTablet: "/img/controle-financeiro[tablet].webp"
    },
    {
        title: "Gerenciamento de Estoque",
        description: "Adicione, atualize e exclua itens com esta aplicação simples e fácil de usar.",
        link: "https://patriciosa.github.io/gerenciamento-estoque",
        imgPhone: "/img/gerenciamento-estoque[phone].webp",
        imgTablet: "/img/gerenciamento-estoque[tablet].webp"
    },
    {
        title: "ToDo List",
        description: "Meu primeiro projeto usando JavaScript.",
        link: "https://patriciosa.github.io/ToDo-List",
        imgPhone: "/img/lista-de-tarefas[phone].webp",
        imgTablet: "/img/lista-de-tarefas[tablet].webp"
    },
]

const gridProjects = document.getElementById("grid-projects");

function createProjectElement({ title, description, link, imgPhone, imgTablet }) {
  // container principal
  const card = document.createElement("div")
  card.className = "relative mt-24 transition-shadow duration-300 reveal"

  // área das imagens
  const wrapper = document.createElement("div")
  wrapper.className = "relative w-9/12 mx-auto"
  card.appendChild(wrapper)

  // Tablet frame
  const tabletFrame = document.createElement("div")
  tabletFrame.className = "relative z-10 bg-gray-800 dark:bg-gray-700 rounded-[2.5rem] p-2 shadow-xl"
  const tabletInner = document.createElement("div");
  tabletInner.className = "relative rounded-[2rem] overflow-hidden bg-white aspect-[4/3]";
  const imgT = document.createElement("img");
  imgT.loading = "lazy"
  imgT.src = imgTablet;
  imgT.alt = `Visão em tablet de ${title}`;
  imgT.className = "object-cover w-full h-full";
  tabletInner.appendChild(imgT);
  tabletFrame.appendChild(tabletInner);
  wrapper.appendChild(tabletFrame);

  // Phone frame
  const phoneFrame = document.createElement("div");
  phoneFrame.className = "absolute right-0 w-1/2 max-w-[15rem] bottom-36 " +
    "bg-gray-800 dark:bg-gray-700 rounded-[2.5rem] p-2 shadow-xl rotate-12 translate-y-1/3 z-10";
  const phoneInner = document.createElement("div");
  phoneInner.className = "relative rounded-3xl overflow-hidden bg-white aspect-[9/19.5]";
  const imgP = document.createElement("img");
  imgP.loading = "lazy"
  imgP.src = imgPhone;
  imgP.alt = `Visão em smartphone de ${title}`;
  imgP.className = "object-cover w-full h-full";
  phoneInner.appendChild(imgP);
  phoneFrame.appendChild(phoneInner);
  wrapper.appendChild(phoneFrame);

  // área de texto
  const info = document.createElement("div");
  info.className = "mt-8 text-center max-w-lg mx-auto";
  const h3 = document.createElement("h3");
  h3.className = "text-2xl mb-4";
  h3.textContent = title;
  const p = document.createElement("p");
  p.className = "text-gray-600 mb-6";
  p.textContent = description;
  const a = document.createElement("a");
  a.className = "inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors shadow-lg hover:shadow-xl"
  a.href = link
  a.target = "_blank"
  a.rel = "noopener noreferrer"
  a.textContent = "Acessar"

  info.append(h3, p, a)
  card.appendChild(info)

  return card
}

// inserindo no DOM
projects.forEach(proj => {
  const el = createProjectElement(proj);
  gridProjects.appendChild(el);
});
