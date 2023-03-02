<template>
<div class="top-header">
  <div class="first_nav">
    <a href="">
      <i class="nav_text_2"><b>Contact Us</b><img class="icon_2" src="https://img.icons8.com/material-outlined/24/null/add-contact-to-company.png"/></i></a>
      <div class="first_nav"></div></div>
        <i class="nav_text">
          <img class="icon_2" src="https://img.icons8.com/ios/50/null/paper-plane--v1.png"/>Free Shipping On All Orders </i> 
          <i class="nav_text_2"><b>Track Order |</b><img class="icon_2" src="https://img.icons8.com/ios/50/null/order-on-the-way.png"/></i>

          <class class="nav_text">Follow Us:|<span class="icon__fallback-text">Facebook<img class="icon_2" src="https://img.icons8.com/fluency/48/null/facebook-new.png"/>

        </span>|<span class="icon__fallback-text">Instagram<img class="icon_2" src="https://img.icons8.com/color/48/null/instagram-new--v1.png"/></span> <img class="icon_3" src="https://img.icons8.com/color/48/null/south-africa.png"/></class></div>

     
        
             

    <div class="navbar_Com ">
          <img
            class="icon"
            src="https://i.postimg.cc/YCynPQtd/Ani-Merch-Logo.jpg"
            alt="logo"

            loading="lazy"
          /><h4>Watashitachi no shōhin<br>
             o o tanoshimi kudasai!!!</h4>
          

          <!-- <button
            class="navbar-toggler ms-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <br />
              <ul class="d-flex flex-column flex-sm-row">
                
                  <li><router-link to="/">Home<img class="H_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVR4nO3UMS5EURjF8R+FRqKxAgtQ2YFOMsUUIhnRKZSEQqJhC/ZgDTq1Zhod0ZLohBCZCE8k30s+L8Z7M4ZEzElOc+8953/vV1z+m7bDI9cEDlCEDzE5qvIpHEXxc7iItfc9CTywpnEc4SfsYw+PsXaCmWEBsziN4D120Apv4Tb2usMA5nARoRtspPLS67hK5Y0B87iOwCXWPikv3cF5AizUlS/iLg6fYeWL8tLLaUwPWOpXvopeuk27QXnpdsr1ouuDNvFSmWdrQOfsK3b7veS7gFpVAUWN/w6gqjHAj4+oqPlnmp77fcBYst4AH/6r7BWSU8sAAAAASUVORK5CYII="></router-link> </li>
                  <li><router-link to="/Products">Products<img class="H_img" src="https://img.icons8.com/windows/32/null/shopping-bag.png"/></router-link></li>
                  <li> <router-link to="/admin">Admin<img class="H_img" src="https://img.icons8.com/material-outlined/24/null/administrator-male.png"/></router-link></li>

                  <ul class="left">
                  <li> <router-link to="/login">Login<img class="H_img" src="https://img.icons8.com/ios-glyphs/30/null/login-rounded.png"/></router-link></li>
                  <li> <router-link to="/register">Register<img class="H_img" src="https://img.icons8.com/windows/32/null/writer-male.png"/></router-link></li>
                </ul>
              </ul>
            </ul>
          </div>

     
    </div>
</template>
<script>

export default {
  name: 'navbar_Com'
}

</script>
<style>

  h4 {
  animation: color-change 1s infinite;
}

@keyframes color-change {
  0% { color: red; }
  50% { color: blue; }
  100% { color: red; }
}

.navbar_Com{
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 8px 2.5px black;
    z-index: 10;
    position: relative;
    background-color: #dcdcd8;

}
.icon { 
    width: 7em;
    border-radius: 4em;
    margin-right: 350px;
}
.icon:hover { 
    box-shadow: 0 0 6px 4px rgb(0, 0, 0);
    scale: 1.1;
}
.navbar_Com ul{
    display: flex;
    justify-content: center;
    align-items: center;
}
.navbar_Com ul li{
    list-style: none;
    margin-left:  30px;
}
.navbar_Com ul li a{
    text-decoration: none;
    padding: 6px 15px;
    color: #090909;
    border-radius: 20px;
}
.navbar_Com ul li a:hover,
.navbar_Com ul li .router-link-exact-active {

    background: #ffffff;
    color: #000000;
    border-bottom: 3px solid rgb(0, 0, 0);
    
    
}
.left{
    margin-right: 200px;
}
.H_img{
    height: 18px;
}
.top-header{
  background-color: rgb(253, 24, 24);
  height: 61px;
}
.icon_2{
  height: 17px;
}
.icon_3{
  height: 40px;
  float: right;
  margin-right: 0px 0px 5px 30px;
}
.nav_text{
  font-size: small;
  color: white;
  font-style: normal;
  line-height: 0.1;
}
.nav_text_2{
  text-align: center !important;
  color: white;
}
.first_nav{
  margin-right: 1300px;
}
</style>