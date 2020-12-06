<template>
  <div class="LoginBg">
      <div class="loginContainer">
          <div class="imgContainer">
              <img src="@/assets/logo.png"/>
            </div>
            <div class="loginForm">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
                </el-form-item>
                 <el-form-item>
                     <el-button type="primary" @click="login">登录</el-button>
                     <el-button @click="reset">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form:{
               type:Object,
                default(){
                    return {
                        name:"",
                        password:""
                    }
                }
            }
        }
    },
    methods: {
        login(){}
    },
}
</script>

<style>
.LoginBg{
    width:100%;
    height: 100%;
    background-color: rgb(52,69,92);
}
.loginContainer{
    position:absolute;
    background-color: #fff;
    width:400px;
    height:250px;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 2%;
}
img{
    width:60px;
    height:60px;
    border-radius: 50%;
}
.imgContainer{
    position:relative;
    background-color: rgb(170,174,53);
    width:60px;
    height: 60px;
    left:50%;
    transform:translate(-50%,-50%);
    border-radius:50%;
}
.loginForm {
    padding: 0 20px;
  }

</style>