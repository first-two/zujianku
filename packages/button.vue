<template>
  <button
    class="one-button"
    :class="[`one-button-${type}`,
    { 'is-plain': plain ,
     'is-round': round ,
     'is-circle': circle,
     'is-disabled': disabled
     }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没传入文本插槽，则不显示span内容   $slots.default-->
   <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: "wmButton",
  // 封装一个通用的组件，会对props做一个约束，对props做一个检验
  props: {
    type: {
      // 规定父组件传过来的type参数是为字符转参数
      type: String,
      //不传类型时，规定默认类型
      default: "default"
    },
    plain: {
        // 镂空
      type: Boolean,
      default: false
    },
    round: {
        // 圆角
      type: Boolean,
      default: false
    },
    circle: {
        // 圆形
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
        // 圆形
      type: Boolean,
      default: false
    }
  },
  created() {
    //console.log(this.type);
  },
  methods:{
      handleClick(e){
          this.$emit("click",e)
      }
  }
};
</script>
<style lang="scss">
// scoped  组件库中尽量别试用scoped属性，会导致在结构中加入属性选择器
.one-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.one-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.one-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.one-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.one-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.one-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮样式
.one-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.one-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.one-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.one-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.one-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.one-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.one-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.one-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式 即存在文字又存在图标的情况下
.one-button [class*="el-icon-"] + span {
  margin-left: 5px;
}
// disabled属性
.one-button.is-disabled {
  cursor: no-drop;
  background-color: #fff;
    border-color: #ebeef5;
    color: #c0c4cc;
    &:hover,
  &:focus {
    cursor: not-allowed;
background-image: none;
  }
}
</style>
