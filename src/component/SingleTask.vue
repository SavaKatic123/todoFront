<template>
  <tr :class="[{ 'done-toggle': task.is_done}, {high: task.is_important}]">
      <td>{{task.id}}</td>
      <td>{{task.name}}</td>
      <td>{{task.desc}}</td> 
      <td id="little-buttons">
        <button @click="finishTask(index)">✓</button>
        <button @click="deleteTask(index)">X</button>
        <button @click="editTask">Edit</button>

      </td>
      <td>
        <select id="selected-box" multiple>
          <option @click="changePriority(index, 0)" :value="0">Low</option>
          <option @click="changePriority(index, 1)" :value="1">High</option>
        </select> 
      </td>
  </tr>
</template>

<script>
import {eventBus} from '../events/eventBus'
import {axiosService} from '../services/axios.service'
import {API_ENDPOINTS} from '../constants'

export default {
  props: {
    task: {
      type: Object,
      default: () => {
        return {
          name: '', desc: '', is_done: false, is_important: false  
        }
      }
    },
    modifiedTask: {
      type: Object,
      default: () => {
        return {
          name: '', desc: '', is_done: false, is_important: false  
        }
      }
    },
    index: {
      type: Number,
    }
  },
  methods: {
    deleteTask(index) {
      let updatedTask = this.task;
      axiosService.deleteCall(`${API_ENDPOINTS.UPDATE_TASK}/${updatedTask.id}`)
      .then((response) => {
        updatedTask = response.data
        this.$emit('deletedTask', index);
      });
    },
    finishTask(index) {
      let updatedTask = this.task;
      updatedTask.is_done = true;

      axiosService.putCall(`${API_ENDPOINTS.UPDATE_TASK}/${updatedTask.id}`, {
        updatedTask
      }).then((response) => {
        this.$emit('finishedTask', index);
      });
    },
    changePriority(index, id) {
      if(id == this.task.is_important)
        return;
      let updatedTask = this.task;
      updatedTask.is_important = updatedTask.is_important == 0 ? 1 : 0
      
      axiosService.putCall(`${API_ENDPOINTS.UPDATE_TASK}/${updatedTask.id}`, {
        updatedTask
      }).then((response) => {
        this.$emit('changedPriority', index, updatedTask.is_important);
      });
    },
    editTask(index) {
      eventBus.$emit('taskEdited', this.task);
    }
  }, 
}
</script>

<style>
#little-buttons {
  width: 20% !important;
  margin-right: 10px !important;
  margin-left: 50px !important;
  margin-top: 10px !important;
  padding: 5px, 5px !important;
  display: flex;
  float: right;
}

#selected-box {
  color: black; 
}

.done-toggle {
  color: aqua;
}

.high {
  background-color: #FFA07A;
}

tr {
  height: 15%;
}

</style>