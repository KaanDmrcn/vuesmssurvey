<template>
<div >  
            
 
  <tbody >
    <tr v-for="(item,index) in people" :key="index">
      
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
            people: [],
            list: [],
        }
    },
    mounted(){
        
        axios.get('http://localhost:8080/api/SmsSurveyPeople/GetId/'+ this.$route.params.id)   
        .then(response => {
            this.people = response.data;            
        })
        .catch(e => console.log(e))       
        
    },  
   
    
    
}
</script>
