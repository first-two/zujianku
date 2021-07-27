<template>
    <div class="wm-input" :class="{'hm-input--suffix':showicon}">
        <!-- 当组件传过来showPassworld时候，代表了需要有切换显示密码的操作，但是我们不能直接修改父组件传过来的type属性值，因此，我们通过在本组件内定义一个布尔值，先判断父组件是否为密码框showPassworld，如果是的话在走本组件内的判断，通过布尔值切换input的type属性，达到密码的显示隐藏效果 -->
        <input class="hm-input__inner"
        :class="{'is-disabled':disabled}"
        :placeholder="placeholder"
        :type="showPassworld ? (passwordxy ? 'text':'password'):type"
        :name="name"
        :disabled="disabled"
        :value="value"
        @input="handleInput"
        >
        <span class="hm-input__suffix" v-if="showicon">
            <i v-if="clearable && value"
                class="hm-input__icon el-icon-circle-close hm-input__clear"
                @click="clear"
            ></i>
            <i v-if="showPassworld"
                class="hm-input__icon el-icon-view hm-input__clear"
                :class="{'hm-icon-view-active':passwordxy}"
                @click="passwordss"
            ></i>
        </span>

    </div>
</template>
<script>
export default {
    name:'wmInput',
    props:{
        placeholder:{
            type:String,
            default:""
        },
        type:{
            type:String,
            default:"text"
        },
        name:{
            type:String,
            default:""
        },
        disabled:{
            type:Boolean,
            default:false
        },
        value:{
            // input 在父组件设置v-model语法糖，所以props可以获取到value这个值
            type:String,
            default:""
        },
        clearable:{
            type:Boolean,
            default:false
        },
        showPassworld:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            // 用于判断是否显示密码框
            passwordxy:false
        }
    },
    methods:{
        handleInput(e){
             // input 在父组件设置v-model语法糖，所以这里可以获取到@input这个方法
            this.$emit("input",e.target.value)
        },
        clear(e){
            // 清空内容,必须做了数据的双向绑定才行
            this.$emit('input', '')
        },
        passwordss(){
            // 显示密码
            this.passwordxy = !this.passwordxy
            console.log(this.passwordxy)
        }
    },
    computed:{
        // 判断是否显示X图标和眼睛图标
        showicon(){
            return this.clearable||this.showPassworld
        }
    }
}
</script>

<style lang="scss">
// scoped  组件库中尽量别试用scoped属性，会导致在结构中加入属性选择器
.wm-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hm-input__inner {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

}

.hm-input--suffix {
  .hm-input__inner {
    padding-right: 30px;
  }
  .hm-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .hm-icon-view-active{
        color: blue;
    }
  }
}
</style>