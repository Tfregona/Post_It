<template>
<div id="back">
  <NoteEdit v-if="showPostedit" @closePostedit="closePostedit" :idedit="idedit"/>
  <div class="container">
    <div id=noteshow>
      <div v-for="note in note" v-bind:key="note._id" >
        <div id="button">
          <button class="btn btn-danger" @click="closePostit" >X</button>
          <button @click="deletePost(note._id)" class="btn btn-warning"> Delete 🗑️</button>
          <button class="btn btn-info" @click="openPostedit(note._id)">Update 📌</button>
        </div>
        <h4> {{note.title}} </h4>
        <p> {{note.content.toString()}} </p>
      </div> 
    </div>
  </div>
</div>
</template>
<script>
import NoteApi from '@/apis/NoteApi.js'
import NoteEdit from '@/components/EditNote.vue'

export default {
  components: {
    NoteEdit
  },
  data() {
    return {
      note: [],
      showPostedit: false,
      idedit: ""
    }
  },
    props: [
      'id'
    ],
    mounted() {
      NoteApi.getNote(this.id)
      .then(response => {
      this.note = response.data
      })
      .catch(error => {
      console.log('Error :', error.response)
      })
    },
    methods: {
  closePostit() {
      this.$emit('closePostit');
    },
    deletePost(id) {
      NoteApi.deleteNote(id)
          .then(function( response ){
              console.log(response)
          }.bind(this));
      },
      openPostedit(id) {
      this.idedit = id;
      this.showPostedit = true;
    },
    closePostedit() {
    this.showPostedit = false;
    location.reload();
    }
  }
}
</script>

<style scoped>
#back {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 0px);
    height: calc(100vh - 0px);
    background: rgba(255, 255, 255);
}
#noteshow {
  margin: 5px auto;
  min-height: 25em;
  max-width: 80%;
  overflow-wrap: break-word;
  padding-top: 1em;
  background-color: #FFFC7F;
  box-shadow: 5px 5px 15px 5px #7c7c7c;
}
#button {
  display: flex; 
  align-content: flex-start;
  margin-left: 0.5em;
}
button {
  margin: auto 2px;
}

</style>