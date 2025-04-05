<template>
  <div class="min-h-screen bg-[#0c0c0c] text-white font-sans">
    <!-- Navbar -->
    <header class="flex items-center justify-between px-6 py-4 border-b border-gray-700 md:flex-row">
      <h1 class="text-lg font-bold"><router-link to="/">Pablo Belmiro</router-link></h1>
      <nav class="hidden md:flex gap-6">
        <a href="#home" class="hover:text-gray-400">Home</a>
        <router-link :to="{ hash: '#about' }" class="hover:text-gray-400">About</router-link>
        <router-link :to="{ hash: '#projects' }" class="hover:text-gray-400">Projects</router-link>
        <router-link :to="{ hash: '#contact' }" class="hover:text-gray-400">Contact</router-link>
        <router-link :to="{ hash: '#certificates' }" class="hover:text-gray-400">Certificates</router-link>
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
      <router-link :to="{ hash: '#about' }" class="block hover:text-gray-400">About</router-link>
      <router-link :to="{ hash: '#projects' }" class="block hover:text-gray-400">Projects</router-link>
      <router-link :to="{ hash: '#contact' }" class="block hover:text-gray-400">Contact</router-link>
      <router-link :to="{ hash: '#certificates' }" class="block hover:text-gray-400">Certificates</router-link>
      <router-link
          to="/login"
          class="block bg-white text-black px-4 py-1 rounded hover:bg-gray-200 text-center"
      >
        Login
      </router-link>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="flex flex-col items-center justify-center text-center mt-20">
      <h2 tabindex="-1" style="caret-color: transparent" class="text-3xl md:text-5xl font-bold h-24">
        {{ typedText }}
      </h2>
    </section>

    <!-- About -->
    <section id="about" class="px-6 py-12 md:px-20">
      <h3 class="text-2xl font-semibold mb-4">About</h3>
      <p class="text-gray-400">Building...</p>
    </section>

    <!-- Projects -->
    <section id="projects" class="px-6 py-12 md:px-20">
      <h3 class="text-2xl font-semibold mb-4">Projects</h3>
      <p class="text-gray-400">Building...</p>
    </section>

    <!-- Contacts -->
    <section id="contact" class="px-6 py-12 md:px-20">
      <h3 class="text-2xl font-semibold mb-4">Contacts</h3>
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

    <!-- Certificates -->
    <section id="certificates" class="px-6 py-12 md:px-20">
      <h3 class="text-2xl font-semibold mb-4">Certificates</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <iframe
            v-for="cert in certs"
            :key="cert.src"
            :src="cert.src"
            :title="cert.title"
            class="w-full h-40 sm:h-48 md:h-56 lg:h-64 border rounded-md"
        />
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
export default {
  name: 'HomePage',
  data() {
    return {
      showScrollTop: false,
      isMenuOpen: false,
      typedText: '',
      fullText: "Hi, I'm Pablo",
      certs: [
        { src: "/certs/SYB0HNWT.pdf", title: "PHP" },
      ]
    };
  },
  mounted() {
    this.typeText();

    if (!window.location.hash) {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }

    window.addEventListener('scroll', () => {
      this.showScrollTop = window.scrollY > 100;
    });
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
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
    }
  },
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