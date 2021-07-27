<template>
<div >  
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
      
    </tr>
  </thead>
  <tbody >
    <tr>
      <th scope="row">{{survey.id}}</th>
      <td >{{survey.startDate}}</td>
      <td >{{survey.duration}}</td>
      <td >{{survey.question}}</td>
      <td >{{survey.insertedBy}}</td>
      <td >{{survey.insertedDate}}</td>
      <td >{{survey.status}}</td>

    
      
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
            survey: [],
        }
    },
    mounted(){
        
        axios.get('http://localhost:8080/api/SmsSurveys/'+ this.$route.params.id)   
        .then(response => {
            this.survey = response.data;            
        })
        .catch(e => console.log(e))       
        
    },  
    
    
}
</script>
