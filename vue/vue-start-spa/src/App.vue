<template>
    <navbar
      :pages="pages"
      :activePage="activePage"
      :nav-link-click="(index) => activePage = index"
  ></navbar>

  <div v-show="false">hide this content</div>

  <page-viewer
    v-if="pages.length > 0"
    :page="pages[activePage]"
  ></page-viewer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';


export default {
  components: {
    Navbar,
    PageViewer
  },
  created() {
    this.getPages();
  },
  data() {
    return {
      activePage: 0,
        pages: []
    };
  },
  methods: {
    async getPages() {
      let res = await fetch ('pages.json');
      let data = await res.json();

      this.pages = data;
    }
  }
}
</script>

https://www.youtube.com/watch?v=1GNsWa_EZdw&t=307s

// 2:01:00