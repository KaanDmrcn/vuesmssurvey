<template>
<div>
    <div>
        <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">SmsSurveyId</th>
      <th scope="col">Answer</th>
      <th></th>
    
    </tr>
  </thead>
  <tbody >
    <tr v-for="(item,index) in items" :key="index">
      <th scope="row">{{item.id}}</th>
      <td >{{item.smsSurveyId}}</td>
      <td >{{item.answer}}</td>
      <td><button v-on:click="deleteAnswer(item.id)" class="btn btn-info">Delete</button></td>
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
        }
    },
    created(){
        axios.get("http://localhost:8081/api/SmsSurveyAnswers")
        .then(response => {
            this.items = response.data;            
        })
        .catch(e => console.log(e))
        
    },
     methods:{
        getData(){
           axios.get("http://localhost:8081/api/SmsSurveyAnswers")
          .then(response => {
          this.items = response.data;            
        })
        .catch(e => console.log(e))
        },
        deleteAnswer(id){
            axios.delete("http://localhost:8081/api/SmsSurveyAnswers/"+id)
            .then(() => {this.getData()})
            
        },
     }
 
}
</script>
