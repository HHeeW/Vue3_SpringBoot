<template lang="ko">
  <div id="mainContainer">
    <Visitant/>
    <div class="colContainer">
      <div class="brick">박스1</div>
      <div class="brick">박스2</div>
      <div class="brick">박스3</div>
    </div>
    <div class="colContainer">
      <div class="brick">박스1</div>
      <div class="brick">박스2</div>
    </div>
  </div>
</template>

<script>
import Visitant from "./Visitant.vue";
import styles from "@/resources/css/Dashboard.css";

export default {
  components: {
    Visitant,
  },
  data() {
    return {
      parentStyles: styles,
    };
  },
};
</script>
<style scoped>
</style>