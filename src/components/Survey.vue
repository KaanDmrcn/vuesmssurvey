<template>

<div>
    <div>
        <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">StartDate</th>
      <th scope="col">Duration</th>
      <th scope="col">Question</th>
      <th scope="col">InsertedBy</th>
      <th scope="col">InsertedDate</th>
      <th scope="col">Status</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="(item,index) in items" :key="index">
      <th scope="row">{{item.id}}</th>
      <td >{{item.startDate}}</td>
      <td >{{item.duration}}</td>
      <td >{{item.question}}</td>
      <td >{{item.insertedBy}}</td>
      <td >{{item.insertedDate}}</td>
      <td >{{item.status}}</td>

      <td><button @click="getir4(item.id)" class="btn btn-info">Detail</button>
      <button @click="deleteSurvey(item.id)" class="btn btn-danger">Delete</button>
      <button @click="release(item.id)" class="btn btn-warning">Release</button></td> 
      
      
    </tr>
  </tbody>
</table>
    </div>
</div>


</template>

<script>

import axios from "axios";



export default {
    data(){
        return{
            items: [],
            temp:"",
        }
    },
    mounted(){
        axios.get("http://localhost:8081/api/SmsSurveys")
        .then(response => {
            this.items = response.data;            
        })
        .catch(e => console.log(e))
    },
    methods:{       
        getir4(id){
            this.$router.push({
              name:"Details",
              params:{id}
            })
        },
        getData(){
           axios.get("http://localhost:8081/api/SmsSurveys")
          .then(response => {
          this.items = response.data;            
        })
        .catch(e => console.log(e))
        },
        deleteSurvey(id){
            axios.delete("http://localhost:8081/api/SmsSurveys/"+id)
            .then(() => {this.getData()})
            
        },
        release(id){
            this.$router.push({
              name:"SurveyScreen",
              params:{id}
            })
        },
    }
}
</script>
