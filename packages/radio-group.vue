<template>
    <div class="hm-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'wmRadioGroup',
    props:{
        // 接收v-moudel事件传过来的value值
        // 将来还要触发当前组件的input事件
        // 可以用 provide 与 inject 实现祖孙组件之间的传参
        value:null
    },
    provide () {
        return {
            RadioGroup: this
        }
    }
}
</script>