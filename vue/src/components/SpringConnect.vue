<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
  import {getPost} from '../resources/js/common'
  
  export default {
    data() {
      return {
        message: ''
      };
    },
    mounted() {
      const setMsg = (res) => {
        this.message = res.data;
      }
      getPost('/api/hello', setMsg);
    }
  };
  </script>
  