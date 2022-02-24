<template>
<div id="notes">
    <div id="note" v-for="note in notes" v-bind:key="note._id" @click="openPostit(note._id)">
        <p><strong>{{note.title}}</strong></p>
        <p>{{note.content.toString()}}</p>
    </div>
</div>
</template>

<script>
import NoteApi from '@/apis/NoteApi.js'

export default {
  data() {
    return {
      notes: [] 
    }
  },
  mounted() {
    NoteApi.getNotes()
    .then(response => {
      this.notes = response.data.notes
    })
    .catch(error => {
      console.log('Error :', error.response)
    })
  },
  methods: {
    openPostit(id) {
        this.$emit('openPostit', id);
      } 
    }      
}
</script>
<style>
#notes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#note {
  flex-direction: column;
  margin: 1em 1em;
  width: 15em;
  height: 15em;
  cursor:  pointer;
  box-shadow: 5px 5px 15px 5px #7c7c7c;
  overflow: hidden;
  overflow-wrap: break-word;
  -webkit-line-clamp: 3;
}
#note:hover {
  box-shadow: 5px 5px 15px 5px #1b1b1b;
  width: 16em;
}
#note, #noteCreate {
  padding-top: 1em;
  background-color: #FFFC7F;
}
a:hover, button:hover {
  color: orange !important;
}
button, a {
  text-decoration: none;
  color: white !important;
  font-weight: bold !important;
  }
p {
  margin:0em 0.5em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  text-overflow: ellipsis;
}
</style> 
