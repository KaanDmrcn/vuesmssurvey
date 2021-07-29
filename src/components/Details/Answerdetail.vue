<template>
<div >  
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
    <tr v-for="(item,index) in answers" :key="index">
      <th scope="row">{{item.id}}</th>
      <td >{{item.smsSurveyId}}</td>
      <td >{{item.answer}}</td>      
      <td><a v-on:click="deleteAnswer(item.id)" class="btn btn-danger">Delete</a></td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>

import axios from "axios";



export default {
     data(){
        return{
            answers: [],
            temp: this.$route.params.id,
        }
    },
    mounted(){
        
        axios.get('https://localhost:44303/api/SmsSurveyAnswers/GetId/'+ this.temp)   
        .then(response => {
            this.answers = response.data;            
        })
        .catch(e => console.log(e))       
        
    }, 
    methods:{
        getData(){
          
        axios.get('https://localhost:44303/api/SmsSurveyAnswers/GetId/'+ this.temp)   
        .then(response => {
            this.answers = response.data;            
        })
        .catch(e => console.log(e))
        },
        deleteAnswer(id){
            axios.delete('https://localhost:44303/api/SmsSurveyAnswers/'+id)
            .then(() => {this.getData()})  
            
        },
     }
    
    
}
</script>
