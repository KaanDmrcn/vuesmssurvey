<template>
<div >  
            
 
  <tbody >
    <tr v-for="(item,index) in answers" :key="index">
      
      <td ></td>   
      <button>{{item.answer}} </button> 
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
