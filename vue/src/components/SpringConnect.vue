<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        message: ''
      };
    },
    mounted() {
      axios.get('/api/hello')
        .then(response => {
          this.message = response.data;
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    }
  };
  </script>
  