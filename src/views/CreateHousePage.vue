<template>
  <page-layout>
    <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input class="input__search" id="where" type="text" placeholder="Mexico City, Mexico" />
          </div>
        </form>
      </div>
    </section>
    <section class="section__create py-6 container">
      <h1 class="text-3xl mb-6">Publish a new Room</h1>
      <form>
        <div class="mb-4">
          <label class="input__label">Title</label>
          <input
            v-model="publication.title"
            type="text"
            class="input__field"
            placeholder="Bruce Wayne"
          />
        </div>
        <div class="mb-4">
          <label class="input__label">Description</label>
          <textarea
            rows="10"
            v-model="publication.description"
            class="input__field"
            placeholder="Bruce Wayne"
          />
        </div>
        <div class="mb-4">
          <label class="input__label">Featured image</label>
          <input
            type="text"
            v-model="publication.featuredImage"
            class="input__field"
            placeholder="http..."
          />
        </div>
        <div class="mb-4 text-right">
          <button @click.prevent="save" class="w-full bg-yellow-dark font-semibold py-3 px-6">
            Publish
          </button>
        </div>
      </form>
    </section>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout.vue";

export default {
  name: "CreateHousePage",
  components: { PageLayout },
  data() {
    return {
      publication: {
        title: "",
        description: "",
        featuredImage: ""
      }
    };
  },
  methods: {
    save() {
      const { title, description, featuredImage } = this.publication;
      const room = { title, description, featured_image: featuredImage, date: Date.now() };
      this.$store.dispatch("CREATE_ROOM", room).then(() => {
        this.$router.push({ name: "SearchPage" });
      });
    }
  }
};
</script>
