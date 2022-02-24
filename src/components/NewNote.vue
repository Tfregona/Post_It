<template>
    <div id="back">
        <div id="noteCreate" >
            <div>
                <label>Title :</label>
            </div>
            <div>
                <input class="champ" type="text" v-model="form.title" required/>
            </div>
            <div>
                <label>Content :</label>
            </div>
            <div>
                <textarea class="champt" type="text" v-model="form.content" required/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <button v-on:click="submit()" class="btn btn-success">Create ✏️</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-danger" @click="closePost">X</button>
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
      }
    }
  },
  methods: {
    submit(){
        NoteApi.postNote(this.form)
            .then(function( response ){
                console.log(response)
            }.bind(this));
        },
      closePost() {
        this.$emit('closePost');
        location.reload();
      }   
    } 
}
</script>
<style lang="css" scoped>
#back {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 0px);
    height: calc(100vh - 0px);
    background: rgba(0, 0, 0, 0.7);
}
.container {
    margin-top: 1em;
}
#noteCreate {
  margin: 1.5em auto;
  width: 25em;
  height: 25em;
}
.champt {
    width: 80%;
    height: 13em;
    resize: none;
}
.champ {
    width: 80%;
}
label {
    font-weight: bold;
}
</style>
