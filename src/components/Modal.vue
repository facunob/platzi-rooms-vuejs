<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-head text-right pb-2">
        <i class="modal-close-icon" @click="closeLogin">X</i>
      </div>
      <div class="modal-content">
        <h2 class="text-grey-darkest text-center mb-6">Welcome to platzi rooms</h2>
        <form action="">
          <div class="mb-4">
            <label for="" class="input__label">Email</label>
            <div class="form__field relative">
              <input
                v-model="form.email"
                type="text"
                class="input__field"
                placeholder="bruce.wayne@imnotbatman"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="" class="input__label">Password</label>
            <div class="form__field relative">
              <input
                type="Password"
                v-model="form.password"
                class="input__field"
                placeholder="*******"
              />
            </div>
          </div>
          <div class="mb-4">
            <toggle-input :toggled="form.rememberMe" @input="x => (form.rememberMe = x)" />Recordar
            mi contraseña
          </div>
          <div class="mb-4">
            <button type="submit" @click="subscribeNewSletter" class="btn btn-primary mr-3 w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleInput from "./ToggleInput.vue";
export default {
  components: { ToggleInput },
  name: "Modal",
  data() {
    return {
      form: {
        email: "",
        rememberMe: false,
        password: ""
      }
    };
  },
  methods: {
    closeLogin() {
      this.$store.dispatch("TOGGLE_MODAL_STATE", { name: "modalLogin", value: false });
    },
    subscribeNewSletter() {
      alert(JSON.stringify(form));
    }
  }
};
</script>

<style scoped>
.modal {
  min-width: 350px;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  @apply absolute bg-white p-4 shadow-lg rounded;
}
.modal > .modal-head {
  @apply relative;
}
.modal-wrapper::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(37, 37, 37, 0.8);
}
.modal-close-icon {
  cursor: pointer;
  font-size: 24px;
}
</style>
