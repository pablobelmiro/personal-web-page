<template>
  <transition name="fade">
    <div
        v-show="visible"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        @click.self="close"
    >
      <img
          :src="src"
          :alt="alt"
          class="max-w-full max-h-full object-contain rounded-lg shadow-xl transition-all"
      />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ImageModal',
  props: {
    src: String,
    alt: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
