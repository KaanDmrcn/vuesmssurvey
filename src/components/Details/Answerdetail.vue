<template>
<div >  
            <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">SmsSurveyId</th>
      <th scope="col">Answer</th>
    
    </tr>
  </thead>
  <tbody >
    <tr v-for="(item,index) in answers" :key="index">
      <th scope="row">{{item.id}}</th>
      <td >{{item.smsSurveyId}}</td>
      <td >{{item.answer}}</td>      
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
        }
    },
    mounted(){
        
        axios.get('http://localhost:8080/api/SmsSurveyAnswers/GetId/'+ this.$route.params.id)   
        .then(response => {
            this.answers = response.data;            
        })
        .catch(e => console.log(e))       
        
    },  
    
    
}
</script>
