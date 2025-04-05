<template>
  <section class="min-h-screen flex items-center justify-center px-6 py-8 bg-[#0c0c0c]">
    <div class="w-full bg-[#1a1a1a] rounded-lg shadow border border-[#2e2e2e] sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
          Sign in with code :)
        </h1>
        <form class="space-y-4">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-400">Your email</label>
            <input type="email" id="email" v-model="email" placeholder="your@email.com"
                   class="bg-[#121212] border border-[#2e2e2e] text-white rounded-lg block w-full p-2.5 focus:ring-white focus:border-white"
                   required />
          </div>
          <div class="flex items-center justify-between">
            <label class="flex items-center text-sm text-gray-500">
              <input type="checkbox" class="mr-2 w-4 h-4 rounded border-[#2e2e2e] bg-[#121212]">
              Remember me
            </label>
            <a href="#" class="text-sm text-gray-400 hover:underline">Forgot password?</a>
          </div>
          <button
              type="submit"
              class="block mx-auto text-black bg-white hover:bg-[#dddddd] focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: '',
    };
  },
  methods: {
    submit() {
      // lógica de login aqui
      console.log(this.email, this.password);
    }
  }
};
</script>
