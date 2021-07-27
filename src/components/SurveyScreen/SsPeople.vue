<template>
<div >  
            
 
  <tbody >
    <tr v-for="(item,index) in answers" :key="index">
      
      <td>{{item.id}}</td>   
      
      <br>  <br>
    </tr>
  </tbody>

</div>
</template>

<script>

import axios from "axios";



export default {
     data(){
        return{
            answers: [],
            list: [],
        }
    },
    mounted(){
        
        axios.get('http://localhost:8080/api/SmsSurveyPeople/GetId/'+ this.$route.params.id)   
        .then(response => {
            this.answers = response.data;            
        })
        .catch(e => console.log(e))       
        
    },  
   
    
    
}
</script>
