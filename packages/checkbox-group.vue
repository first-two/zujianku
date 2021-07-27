<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
    name:'wmCheckboxGroup',
    props: {
        value: {
        type: Array
        }
    },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>