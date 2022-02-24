<template>
  <div>
    <button class="btn btn-success" @click="createPost">Create a post-it ✏️</button>
    <Post v-if="showPost" @closePost="closePost"/>
    <Show v-if="showPostit" @closePostit="closePostit" :id="id"/>
    <Note @openPostit= "openPostit"/>  
  </div>
</template>

<script>
import Note from '@/components/Note.vue';
import Post from '@/components/NewNote.vue';
import Show from '@/components/NoteShow.vue';


export default {
  components: {
    Note,
    Post,
    Show
  },
  data: () => {
      return {
        showPost: false,
        showPostit: false,
        id: ''
      }
    },
  methods: {
      closePost() {
        this.showPost = false;
      },
      createPost() {
        this.showPost = true;
      },
      closePostit() {
        this.id = "";
        this.showPostit = false;
        location.reload();
      },
      openPostit(id) {
        this.id = id;
        this.showPostit = true;
      },
  }
}
</script>
