<template>
  <div>
    <input type="text" name="name" placeholder="New task name" v-model="newTask.name"/>
    <textarea name="desc" placeholder="New task description" v-model="newTask.desc"> </textarea>
    <button v-on:click="makeNew">New Task</button>

    <input type="text" placeholder="Modified task name" v-model="modifiedTask.name"/>
    <textarea name="desc" placeholder="Change task description" v-model="modifiedTask.desc"> </textarea>
    <button v-on:click="changeTask">Change Task</button>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tr id="inline" v-for="(task, index) in tasks" :key="task.id">
          <td v-bind:class="[{ doneToggle: task.task.done}, {high: task.task.priority}]">{{task.task.id}}</td>
          <td v-bind:class="[{ doneToggle: task.task.done}, {high: task.task.priority}]">{{task.task.name}}</td>
          <td v-bind:class="[{ doneToggle: task.task.done}, {high: task.task.priority}]">{{task.task.desc}}</td> 
          <div id="little-buttons">
            <button v-on:click="finishTask(index)">✓</button>
            <button v-on:click="deleteTask(index)">X</button>
            
          </div>
          <select id="selected-box" multiple>
            <option v-on:click="changePriority(index, 0)" :value="0">Low</option>
            <option v-on:click="changePriority(index, 1)" :value="1">High</option>
          </select> 
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      firstChange: 1,
      newTask: {
          name: "", 
          desc: ""
      },
      modifiedTask: {
          name: "",
          desc: ""
      },
      tasks: [
        
      ]
    };
  },
  methods: {
    makeNew() {
      if(this.newTask.name != "" && this.newTask.desc != "") {
        let newtask = {task: {id: this.id, name: this.newTask.name, desc: this.newTask.desc, done: false, priority: false}};
        this.tasks.push(newtask);

        let result;
        axios.post('http://127.0.0.1/api/newTask', {
          newtask
        }).then((response) => {
          result = response.data;
        });

        this.newTask.name = "";
        this.newTask.desc = "";
      }
    },
    changeTask() {
      if(this.modifiedTask.name != "" && this.modifiedTask.desc != "") {
        
        let name = this.modifiedTask.name;

        let idx = this.tasks.findIndex((element) => {
          return element.task.name == this.modifiedTask.name;
        });
        console.log(idx);
        console.log(this.tasks[idx]);
        this.tasks[idx].task.desc = this.modifiedTask.desc;
        let changetask = this.tasks[idx];
        console.log(changetask);

        let result;
        axios.post('http://127.0.0.1/api/changeTask', {
          changetask
        }).then((response) => {
          result = response.data
        });

        this.modifiedTask.name = "";
        this.modifiedTask.desc = "";
      }
    },
    deleteTask(index) {
      let deletetask = this.tasks[index];
      this.tasks.splice(index, 1);
      let result;
      axios.post('http://127.0.0.1/api/deleteTask', {
        deletetask
      }).then((response) => {
        result = response.data
      });
    },
    finishTask(index) {
      this.tasks[index].task.done = true;
      let finishtask = this.tasks[index];
      let result;
      axios.post('http://127.0.0.1/api/finishTask', {
        finishtask
      }).then((response) => {
        result = response.data
      });
    },
    changePriority(index, id) {
      if(id == this.tasks[index].task.priority)
        return;
      let changepriority = this.tasks[index];
      let result;
      this.tasks[index].task.priority = ! this.tasks[index].task.priority;
      
      axios.post('http://127.0.0.1/api/changePriority', {
        changepriority
      }).then((response) => {
        result = response.data
      });
    }
  },
  computed: {
    id: function() {
      return this.tasks.length + 1;
    }
  },
  created: function() {
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    let tasks;
    axios.post('http://127.0.0.1/api/auth/tasks', {


    }).then((response) => {
      tasks = response.data;
      let tempTasks;
      let that = this;
      tasks.forEach(function(el) {
        let newtask = {task: {id: that.id, name: el.name, desc: el.desc, done: el.done, priority: el.priority}};
        that.tasks.push(newtask);
      })
      
    });
  }
}

</script>