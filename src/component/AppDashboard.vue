<template>
  <div>
    <h3>Create task</h3>
    <task-create :task="newTask"></task-create>   

    <h3>Change task</h3>    
    <task-create :task="modifiedTask"></task-create>

    <task-list :newTask="newTask" :modifiedTask="modifiedTask"></task-list>
    
  </div>
</template>

<script>
import TaskCreate from './TaskCreate.vue'
import TaskList from './TaskList.vue'
import {axiosService} from '../services/axios.service'
import {API_ENDPOINTS} from '../constants'
import {eventBus} from '../events/eventBus'

export default {
  data() {
    return {
      newTask: {
          name: "", 
          desc: "",
          is_done: false,
          is_important: false
      },
      modifiedTask: {
          name: "",
          desc: "",
      },
    };
  },
  components: {
    TaskCreate,
    TaskList
  },
  mounted() {
    eventBus.$on('taskEdited', (task) => {
      this.modifiedTask = task;
    });
  }
}
</script>
