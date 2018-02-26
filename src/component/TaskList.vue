<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task name</th>
          <th>Description</th>
        </tr>
      </thead>
        <single-task @deletedTask="deleteTask(index)" @finishedTask="finishTask(index)" @changedPriority="changePriority" v-for="(task, index) in tasks" :index="index" :task="task" :key="task.id" :modifiedTask="modifiedTask"></single-task>
    </table>
  </div>
</template>

<script>
import SingleTask from './SingleTask'
import {axiosService} from '../services/axios.service'
import {API_ENDPOINTS} from '../constants'
import {eventBus} from '../events/eventBus'
import {authService} from '../services/auth.service'

export default {
  props: {
    modifiedTask: {
      type: Object,
      default: function() {
        return {
          name: '', desc: '', is_done: false, is_important: false  
        }
      }
    },
  },
  data() {
    return { tasks: [] }
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    finishTask(index) {
      this.tasks[index].is_done = true;
    },
    changePriority(index, is_important) {
      this.tasks[index].is_important = is_important;
    }
  },
  created() {
    if(authService.redirectNonUser()) {
      return;
    }
    let tasks;
    axiosService.setUpParams();
    axiosService.getCall(API_ENDPOINTS.UPDATE_TASK).then((response) => {
      this.tasks = response.data;
    });
  },
  mounted() {
    eventBus.$on('changedTask', (task) => {
      if(task.id == undefined || task.id == null) {
        let createdTask = task;
        axiosService.postCall(API_ENDPOINTS.UPDATE_TASK, {
          name: createdTask.name, desc: createdTask.desc
        }).then((response) => {
          createdTask = response.data;
          this.tasks.push(createdTask);
        });
      } else {
        let index = this.tasks.findIndex((element) => {
          return element.id == task.id;
        });
        
        let updatedTask = this.tasks[index];
        updatedTask.desc = task.desc;

        axiosService.putCall(API_ENDPOINTS.UPDATE_TASK + "/" + updatedTask.id, {
          updatedTask
        }).then((response) => {
          updatedTask = response.data;
          this.tasks[index].desc = task.desc;
        });
      }
    });
  },
  components: {
    SingleTask
  },
}
</script>