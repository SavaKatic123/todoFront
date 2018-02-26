<template>
  <div>
    <input type="text" name="name" placeholder="Task name" v-model="task.name"/>
    <textarea name="desc" placeholder="Task description" v-model="task.desc"> </textarea>
    <button @click="fillTask">Send</button>
  </div>
</template>

<script>
import {eventBus} from '../events/eventBus'

export default {
  props: {
    task: {
      type: Object,
      default: () => {
        return {
          name: '', desc: '', is_done: false, is_important: false  
        }
      }
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    fillTask() {
      if(this.task.name == "" || this.task.desc == "") {
        this.task.name = "";
        this.task.desc = "";
      }
      else {
        eventBus.$emit('changedTask', this.task);
      }
    }
  },
  
}
</script>