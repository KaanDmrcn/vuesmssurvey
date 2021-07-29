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
        
        axios.get('https://localhost:44303/api/SmsSurveyPeople/GetId/'+ this.$route.params.id)   
        .then(response => {
            this.people = response.data;            
        })
        .catch(e => console.log(e))       
        
    },  
   
    
    
}
</script>
