<template>
  <div class="min-h-screen bg-[#0c0c0c] text-white font-sans">
    <!-- Navbar -->
    <header class="flex items-center justify-between px-6 py-4 border-b border-gray-700 md:flex-row">
      <div class="flex items-center space-x-4">
        <img src="/white-favico.png" alt="Logo" class="w-8 h-8" />

        <h1 class="text-lg font-bold">
          <router-link to="/">Pablo Belmiro</router-link>
        </h1>

        <select class="border border-gray-300 rounded px-2 py-1 text-sm text-black focus:outline-none focus:ring focus:border-blue-300"
                @change="changeLang" v-model="lang">
          <option value="PT-Br">🇧🇷 PT-Br</option>
          <option value="en">🇺🇸 EN</option>
        </select>
      </div>
      <nav class="hidden md:flex gap-6">
        <a href="#home" class="hover:text-gray-400">{{homeText}}</a>
        <router-link :to="{ hash: '#about' }" class="hover:text-gray-400">{{aboutText}}</router-link>
        <router-link :to="{ hash: '#projects' }" class="hover:text-gray-400">{{projectsText}}</router-link>
        <router-link :to="{ hash: '#contact' }" class="hover:text-gray-400">{{contactText}}</router-link>
        <router-link :to="{ hash: '#certificates' }" class="hover:text-gray-400">{{certificatesText}}</router-link>
        <router-link
            to="/login"
            class="block bg-white text-black px-4 py-1 rounded hover:bg-gray-200 text-center"
        >
          Login
        </router-link>

      </nav>
      <!-- Mobile Hamburger -->
      <div class="md:hidden">
        <button @click="toggleMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <nav v-if="isMenuOpen" class="md:hidden px-6 py-2 space-y-2 border-b border-gray-700">
      <router-link :to="{ hash: '#home' }" class="block hover:text-gray-400">{{homeText}}</router-link>
      <router-link :to="{ hash: '#about' }" class="block hover:text-gray-400">{{aboutText}}</router-link>
      <router-link :to="{ hash: '#projects' }" class="block hover:text-gray-400">{{projectsText}}</router-link>
      <router-link :to="{ hash: '#contact' }" class="block hover:text-gray-400">{{contactText}}</router-link>
      <router-link :to="{ hash: '#certificates' }" class="block hover:text-gray-400">{{certificatesText}}</router-link>
      <router-link
          to="/login"
          class="block bg-white text-black px-4 py-1 rounded hover:bg-gray-200 text-center"
      >
        Login
      </router-link>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="flex flex-col items-center justify-center text-center mt-10">
      <!-- Avatar -->
      <img
          src="/avatar.png"
          alt="Avatar"
          class="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
      />

      <!-- Título -->
      <h2 tabindex="-1" style="caret-color: transparent" class="text-3xl md:text-5xl font-bold h-24">
        {{ typedText }}
      </h2>
    </section>

    <!-- About -->
    <section id="about" class="px-6 py-2 md:px-20">
      <h3 class="text-2xl font-semibold mb-4">{{aboutText}}</h3>
      <p class="text-gray-400 whitespace-pre-line" v-html="aboutMeText"></p>
    </section>

    <!-- Projects -->
    <section id="projects" class="px-6 py-12 md:px-20">
      <h3 class="text-2xl font-semibold mb-4">{{projectsText}}</h3>
      <div>
        <div class="flex">
          <h3 class="text-2md font-semibold mb-4">Econopro(2017-today): </h3>
          <p>Laravel, VueJS, Python, Mysql, Deploys(Laravel Forge, Vercel) - Full Stack</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <img
              class="w-full h-40 sm:h-48 md:h-56 lg:h-64 border rounded-md cursor-pointer object-cover"
              src="/projects/dashboard.png"
              @click="openModal('/projects/dashboard.png')"
          />
          <img
              class="w-full h-40 sm:h-48 md:h-56 lg:h-64 border rounded-md cursor-pointer object-cover"
              src="/projects/fluxo-completo-exemplo.gif"
              @click="openModal('/projects/fluxo-completo-exemplo.gif')"
          />
          <img
              class="w-full h-40 sm:h-48 md:h-56 lg:h-64 border rounded-md cursor-pointer object-cover"
              src="/projects/glpi.png"
              @click="openModal('/projects/glpi.png')"
          />
        </div>
      </div>

      <br><hr><br>

      <div>
        <h3 class="text-2md font-semibold mb-4">Python Anymarket's lib(only basic orders function - <a href="https://pypi.org/project/Anymarket/" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">Link</a>)</h3>
        <img
            class="w-full h-40 sm:h-48 md:h-56 lg:h-full border rounded-md cursor-pointer object-cover"
            src="/projects/pip.png"
            @click="openModal('/projects/pip.png')"
        />
      </div>

      <!-- Modal -->
      <ImageModal
          :src="selectedImage"
          :visible="modalVisible"
          @close="modalVisible = false"
      />
    </section>

    <!-- Certificates -->
    <section id="certificates" class="px-6 py-12 md:px-20">
      <h3 class="text-2xl font-semibold mb-4">{{certificatesText}}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <iframe
            v-for="cert in certs"
            :key="cert.src"
            :src="cert.src"
            :title="cert.title"
            class="w-full h-40 sm:h-48 md:h-56 lg:h-80 border rounded-md"
        />
      </div>
    </section>

    <!-- Contacts -->
    <section id="contact" class="px-6 py-12 md:px-20">
      <h3 class="text-2xl font-semibold mb-4">{{contactText}}</h3>
      <div class="flex justify-center items-end space-x-6 mt-4 h-20">
        <!-- Gmail -->
        <a href="mailto:dev.pablobelmiro@gmail.com" class="text-gray-400 hover:text-white" target="_blank" rel="noopener" title="Gmail">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 13.065L1.5 6.75V18h21V6.75L12 13.065zM12 11.25L1.5 4.5h21L12 11.25z"/>
          </svg>
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/pablo-belmiro/" class="text-gray-400 hover:text-white" target="_blank" rel="noopener" title="Linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V8H0v16zM7.5 8h4.7v2.3h.1c.66-1.24 2.28-2.5 4.7-2.5 5 0 5.9 3.28 5.9 7.5V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6H7.5V8z"/>
          </svg>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/pablobelmiro" class="text-gray-400 hover:text-white" target="_blank" rel="noopener" title="Github">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6a3.1 3.1 0 0 0-1.3-1.7c-1.1-.8.1-.8.1-.8a2.4 2.4 0 0 1 1.8 1.3 2.4 2.4 0 0 0 3.2 1 2.4 2.4 0 0 1 .7-1.5c-2.6-.3-5.4-1.3-5.4-5.8a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0C17 5 18 5.3 18 5.3a4.3 4.3 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.2 3.2c0 4.6-2.8 5.4-5.5 5.7a2.6 2.6 0 0 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 0z"/>
          </svg>
        </a>
      </div>
    </section>

    <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 z-50"
        title="Voltar ao topo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor"
           stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  </div>
</template>

<script>
import ImageModal from "@/components/ImageModal.vue";

export default {
  name: 'HomePage',
  components: {ImageModal},
  data() {
    return {
      homeText: "",
      aboutText: "",
      projectsText: "",
      certificatesText: "",
      contactText: "",


      modalVisible: false,
      selectedImage: "",
      aboutMeText: "",
      showScrollTop: false,
      isMenuOpen: false,
      typedText: '',
      fullText: "",
      lang: 'en',
      certs: [
        { src: "/certs/SYB0HNWT.pdf", title: "PHP" },
      ]
    };
  },
  mounted() {
    this.aboutMe()
    this.menuText()

    this.typeText();

    if (!window.location.hash) {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }

    window.addEventListener('scroll', () => {
      this.showScrollTop = window.scrollY > 100;
    });
  },
  methods: {
    openModal(imagePath) {
      this.selectedImage = imagePath
      this.modalVisible = true
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    },
    aboutMe(){
      switch (this.lang){
        case 'en':
          this.aboutMeText = `Nice to meet you! Maybe you want know about me(or not), but, I started my journey whit electrical technician at my high school(with technician). After this time I studied at <a href="https://fames.es.gov.br/" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">FAMES</a>(my father <a href="https://www.google.com/search?client=ubuntu-sn&channel=fs&q=Elias+Belmiro" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">Elias Belmiro</a> was a good and known musician in my city, and  teacher at this university),<br>
              so, after follow my father's footsteps for a while, I was approved at <a href="https://www.ufes.br/" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">UFES</a>(Federal university), to study Economy and administration(where I didn't finished). At same time, I already started my work at <a href="https://econopro.com.br/" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">Econopro</a>, administrating logistic and supply chain's of our clients only(carriers stuffs like table of freight calculation, negotiating, invoices documents, and solving operational problems).<br>
              After 4 years, my boss said: "We need some tech guys that knows about logistics, I didn't find anyone yet, can you do this?". If you reading this, yes, I accepted the challenge, starting helping devs (only 2) with initial requirements, tests(like QA), delivering features to our clients and partners, and, validating a lot of partners APIs using Insomnia and Postman. After 6 months I started support my Senior coding the "basic stuffs", using <a href="https://www.genexus.com/en/" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">Genexus</a>(A platform oriented to business. Basically, we used a lot of SQL(Microsoft SQL Server) queries and network protocols, majority Http. The views and forms are made by Genexus like a no code).<br>
              After a year, I was moved to another stack, that I'm working at until today, PHP(Laravel), Vuejs & NodeJS, Mysql, Python, we're implementing Elastic Search and n8n to automate routines in parallel against python. I'm helping to maintaining a TMS, ERP(we're build every essential module), CRM and Logistic and supply chain software.<br>
              I'm almost finishing my bachelor of software engineer at Estácio University(I start my tech job 2 years before), studying GoLang, Language that I want to be a specialist(I have a big interest of back-end developing), Laravel, Python, VueJS, Mysql, Elastic Search, n8n, MVC, Docker, MongoDB, ands stacks that maybe you're using right now! Good tools are made to be used by people tha loves tech universe, like you and me! That's all folks... We can be a new connection and know more about each another :)`
          break;
        case 'PT-Br':
          this.aboutMeText = `Prazer em conhecê-lo! Talvez você queira saber sobre mim (ou não), mas, comecei minha jornada como técnico em eletrotécnica no ensino médio (com técnico). Depois desse tempo estudei na <a href="https://fames.es.gov.br/" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">FAMES</a>(meu pai <a href="https://www.google.com/search?client=ubuntu-sn&channel=fs&q=Elias+Belmiro" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">Elias Belmiro</a> era um bom e conhecido músico na minha cidade, e professor nesta universidade),<br>
              então, depois de seguir os passos do meu pai por um tempo, fui aprovado na <a href="https://www.ufes.br/" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">UFES</a> (Universidade Federal), para cursar Economia e Administração (onde não terminei). Ao mesmo tempo, eu já comecei meu trabalho na <a href="https://econopro.com.br/" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">Econopro</a>, administrando logística e cadeia de suprimentos somente de nossos clientes (coisas de transportadoras como tabela de cálculo de frete, negociação, documentos de faturas e resolução de problemas operacionais).<br>
              Depois de 4 anos, meu chefe disse: "Precisamos de alguns caras de tecnologia que entendam de logística, ainda não encontrei ninguém, você pode fazer isso?". Se você está lendo isso, sim, eu aceitei o desafio, começando a ajudar os desenvolvedores (apenas 2) com requisitos iniciais, testes (como QA), entregando recursos para nossos clientes e parceiros e validando muitas APIs de parceiros usando Insomnia e Postman. Depois de 6 meses, comecei a dar suporte ao meu Sênior codificando as "coisas básicas", usando <a href="https://www.genexus.com/en/" target="_blank" class="bg-white text-black rounded hover:bg-gray-200">Genexus</a>(Uma plataforma orientada para negócios. Basicamente, usamos muitas consultas SQL (Microsoft SQL Server) e protocolos de rede, a maioria Http. As visualizações e formulários são feitos pelo Genexus como um no code).<br>
              Depois de um ano, fui movido para outra pilha, na qual estou trabalhando até hoje, PHP (Laravel), Vuejs e NodeJS, Mysql, Python, estamos implementando Elastic Search e n8n para automatizar rotinas em paralelo com python. Estou ajudando a manter um TMS, ERP (estamos construindo todos os módulos essenciais), CRM e software de logística e cadeia de suprimentos.<br>
              Estou quase terminando meu bacharelado em engenharia de software na Universidade Estácio (comecei meu trabalho em tecnologia 2 anos antes), estudando GoLang, linguagem na qual quero ser especialista (tenho grande interesse em desenvolvimento back-end), Laravel, Python, VueJS, Mysql, Elastic Search, n8n, MVC, Docker, MongoDB e stacks que talvez você esteja usando agora! Boas ferramentas são feitas para serem usadas por pessoas que amam o universo da tecnologia, como você e eu! Isso é tudo, pessoal... Podemos ser uma nova conexão e saber mais um sobre o outro :)`
          break;
      }
    },

    typeText(index = 0, deleting = false) {
      if (!deleting && index <= this.fullText.length) {
        this.typedText = this.fullText.slice(0, index);
        setTimeout(() => this.typeText(index + 1, false), 120);
      } else if (!deleting) {
        setTimeout(() => this.typeText(index - 1, true), 1500); // pausa antes de apagar
      } else if (deleting && index >= 0) {
        this.typedText = this.fullText.slice(0, index);
        setTimeout(() => this.typeText(index - 1, true), 60);
      } else {
        setTimeout(() => this.typeText(0, false), 500); // recomeça
      }
    },

    changeLang(){
      this.aboutMe()
      this.menuText()
    },

    menuText(){
      if(this.lang === 'PT-Br'){
        this.fullText = "Olá, eu sou o Pablo!"
        this.homeText = "Início";
        this.aboutText = "Sobre";
        this.projectsText = "Projetos";
        this.certificatesText = "Certificados";
        this.contactText = "Contato";
      }else{
        this.fullText = "Hi, I'm Pablo"
        this.homeText = "Home";
        this.aboutText = "About";
        this.projectsText = "Projects";
        this.certificatesText = "Certificates";
        this.contactText = "Contact";
      }
    }
  }
}

</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Share Tech Mono', 'monospace';
  background-color: #0c0c0c;
  color: white;
}

h1, h2, h3 {
  font-weight: bold;
}

a {
  transition: color 0.3s ease;
  text-decoration: none;
}

a:hover {
  color: #ccc;
}

section {
  scroll-margin-top: 80px; /* ajuda no ancoramento suave abaixo do header */
}

@media (max-width: 768px) {
  nav a {
    display: block;
    margin: 0.5rem 0;
  }
}

/* animação suave no texto digitado */
h2 {
  user-select: none;
  caret-color: transparent;
}

@keyframes blinkCursor {
  50% {
    border-color: transparent;
  }
}

.cursor::after {
  content: "|";
  font-size: 1rem;
  animation: blink 1s infinite;
}
</style>