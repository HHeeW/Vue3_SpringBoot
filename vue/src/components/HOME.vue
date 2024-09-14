<template lang="">
    <div>
        <h1 class ="hello-text">{{msg}}</h1>
        <button @click="openAlert">타이틀 변경</button>
    </div>
</template>
<script>
export default {
    name: "HOME",
    data: () => {
        return {
            msg: 'Vue.js 시작'
        }
    },
    methods:{
        openAlert(){
            const newMsg = prompt('변경할 타이틀')
            this.changeMessage(newMsg)
        },
        changeMessage (newMsg) {
            this.msg = newMsg 
        }
    }
}
</script>
<style lang="">
    
</style>