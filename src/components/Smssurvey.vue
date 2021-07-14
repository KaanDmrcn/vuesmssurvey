<template>
<div>
       
      <th scope="col">Id</th>   <input type="text">
      <th scope="col">StartDate</th><input type="text">
      <th scope="col">Duration</th><input type="text">
      <th scope="col">Question</th><input type="text">
      <th scope="col">InsertedBy</th><input type="text">
      <th scope="col">InsertedDate</th><input type="text">
    
</div>


</template>

<script>

import axios from "axios";


export default {
    data(){
        return{
            items: []
        }
    },
    mounted(){
        axios.get("http://localhost:8080/api/SmsSurveys")
        .then(response => {
            this.items = response.data;            
        })
        .catch(e => console.log(e))
    }
 
}
</script>
