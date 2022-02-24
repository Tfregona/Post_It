<template>
    <div id="back">
        <div id="backedit">
            <div id="noteEdit" v-for="note in note" v-bind:key="note._id">
                <p> Update de la note : "{{ note._id}}"</p>
            <div>
                <label>Title</label>
            </div>
            <div>
                <input id="champ" type="text" :placeholder="note.title" v-model="form.title" />
            </div>
            <div>
                <label>Content</label>
            </div>
            <div>
                <textarea class="champt" :placeholder="note.content" type="text" v-model="form.content"/>
            </div>
            <div class="container">
                <div class="row">                    
                    <div class="col">
                        <button v-on:click="submit()" class="btn btn-success">Update 📌</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-danger" @click="closePostedit">X</button>
                    </div>                
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import NoteApi from '@/apis/NoteApi.js'
export default {
  data() {
    return {
      form: {
          title: '',
          content: ''
      },
      note: [],
    }
},
props: [
    'idedit'
],
mounted() {
      NoteApi.getNote(this.idedit)
      .then(response => {
      this.note = response.data
      })
      .catch(error => {
      console.log('Error :', error.response)
      })
    },
  methods: {
    submit(){
        NoteApi.putNote(this.idedit, this.form)
            .then(function( response ){
                console.log(response)
            }.bind(this));
            location.reload();
        },
      closePostedit() {
        this.$emit('closePostedit');
      }   
    } 
}
</script>
<style lang="css" scoped>
#backedit {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 0px);
    height: calc(100vh - 0px);
    background: rgb(255, 255, 255);
}
.container {
    margin-top: 1em;
}
#noteEdit {
  margin: 1.5em auto;
  width: 25em;
  height: 25em;
  background: #FFFC7F;
  box-shadow: 5px 5px 15px 5px #7c7c7c;
}
.champt {
    width: 80%;
    height: 13em;
    resize: none;
}
.champ {
    width: 80%;
}
p {
    margin: 0.5em auto;
}
label, p {
    font-weight: bold;
}
</style>
