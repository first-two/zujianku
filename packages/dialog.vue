<template>
<transition name="donhua">
    <div class="hm-dialog__wrapper" v-show="visible" @click.self="guanbi">
      <div class="hm-dialog" :style="{width:width,marginTop:top}">
        <div class="hm-dialog__header">
          <slot name="title">
              <slot name="title">
                  <span class="hm-dialog__title">{{title}}</span>
              </slot>
          </slot>
          <button class="hm-dialog__headerbtn" >
            <i class="el-icon-close" @click="guanbi"></i>
          </button>
        </div>
        <div class="hm-dialog__body">
            <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <!-- 判断传值了才显示这个插槽 -->
        <div class="hm-dialog__footer" v-if="$slots.footer"> 
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "wmDialog",
  props: {
      title:{
          type:String,
          default: "提示"
      },
      width:{
          type:String,
          default: "50%"
      },
      top:{
          type:String,
          default: "15vh"
      },
      visible:{
          type:Boolean,
          default: false
      }
  },
  methods:{
      guanbi(){
        //   this.visible=false 子组件不能直接修改props传过来的值 
        //this.$emit("guan",false)
        this.$emit("update:visible",false)
      }
  }
}
    
</script>

<style lang="scss">
// scoped  组件库中尽量别试用scoped属性，会导致在结构中加入属性选择器
.hm-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .hm-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .hm-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hm-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .hm-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

// 动画，已transition的name开头
.donhua-enter-active {
  animation: zouni .5s;
}

// reverse 反向动画
.donhua-leave-active {
  animation: zouni .5s reverse;
}

@keyframes zouni {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}



</style>