<template>
<div>
  <b-navbar toggleable="lg" >
    <b-navbar-brand @click="goHome" href="#">
    <div class="name1"><img src="../image/logo.png" alt="50" height="50">Ecommerce-Carol</div>
    </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-item @click="gotocart" active>Home</b-nav-item>
        <!--<b-dropdown-item >Home</b-dropdown-item>-->
        <b-nav-item @click="gotocart" active>Cart</b-nav-item>
        <b-nav-item @click="gotocart" active>Blog <b-icon icon="chevron-double-down"></b-icon></b-nav-item>
        <b-nav-item @click="gotocart" active>About Us <b-icon icon="caret-down-fill"></b-icon></b-nav-item>
        <b-nav-item @click="gotocart" active>Product <b-icon icon="chevron-down"></b-icon></b-nav-item>
            <!--<b-dropdown text="Outline Danger" variant="outline-danger" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            </b-dropdown>-->                                                                                                                                                           
        <b-nav-item-dropdown right>
        <template v-slot:button-content>
        <!--<div class="h2 mb-0">
            
        </div>-->
         <b-icon icon="person-fill"></b-icon>
         <b-icon icon="gear-fill"></b-icon>
        </template>   
        <b-dropdown-item v-b-modal.modal-1>Sing In</b-dropdown-item>
        <b-dropdown-item v-b-modal.modal-1>Login</b-dropdown-item> 
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 
<!--<div>
    <b-modal hide-footer ref="my-modal" id="modal-1" title="Admin">
    <b-form @submit="onSumit">
        <b-form-group 
        id="input-group-1" 
        label="User" 
        label-for="input-1"
        >
        <b-form-input
            id="input-1"
            v-model="form.user"
            type="text"
            required
            placeholder="Enter User"
            >
            </b-form-input>
        </b-form-group>
        <b-form-group 
            id="input-group-2" 
            label="Password" 
            label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.pass"
            type="password"
            required
            placeholder="Enter Password"
            ></b-form-input>
        </b-form-group>
        <b-button type="submit" block variant="primary">Submit</b-button>
    </b-form>
    </b-modal>
</div>-->
</div>
</template>

<script>
export default {
    data() {
        return {
            cart:'',
            form: {
                user:'',
                pass:''
            }
        }
    },
    created(){
        if (JSON.parse(localStorage.getItem('products'))) {
            this.cart = JSON.parse(localStorage.getItem('products'))
        } else {
            return
        }
    },
    methods:{
        gotocart(){
            this.$router.push('/cart')
        },
        goHome(){
            this.$router.push('/')
        },
        onSubmit(e){
            e.preventDefault();
            if(this.form.user=='admin' && this.form.pass=='456789') {
                this.$refs['my-modal'].hide()
                this.$router.push('/admin')
                localStorage.setItem('admin', JSON.stringify('true'))
            } else {
                return false;
            }
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
</style>
