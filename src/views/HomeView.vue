<template>
  <div class="home">
    <div>
      <div class="landing">
        <br>
        <br>
        <br>
        <br>
        <h1 class="landing_words">CHECKOUT OUR COLLECTION</h1>
        <h2 class="landing_words_2">ANIMERCH</h2> 
        <button><router-link to="../Products" class="button_2"><b>SHOP NOW</b></router-link></button>><img class="M_clothes" src="https://i.postimg.cc/sgpLvv2Y/c2-204577a6-removebg-preview.png">
        <br>
        <br>
        <br>
      </div>
      <div
        id="carouselExampleControls0"
        class="carousel slide landing-carousel"
        data-bs-ride="carousel"
        data-aos="zoom-in"
      >
        <div class="carousel-inner">
          <div class="container" data-bs-interval="3000">
          
            <div class="overlay"></div>
          </div>
          <div class="container" data-bs-interval="4000">
            <img
              src="https://i.postimg.cc/Ls6ML6wF/Banner-Small-Independence-Day-1500x.webp"
              class="d-block2"
              alt="Avatar"
              loading="lazy"
            />
            <div class="overlay_2">
              <img src="https://i.postimg.cc/HsRY8sJh/4.webp" />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls0"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls0"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <h2>
      CHECK OUT OUR WIDE VARIETY<br />
      OF ANIME MERCH!!!<br />
    </h2>
    <p>Lets go plus ultra</p>
    <img src="https://i.postimg.cc/8CjFpqvd/Clothes.gif" />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
<style>
.container {
  position: relative;
  width: 50%;
}
.d-block {
  width: 1519px;
}
.d-block2 {
  width: 1519px;
  height: 600px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 600px;
  width: 1510px;
  opacity: 0;
  transition: 0.5s ease;
  background-image: url(https://i.postimg.cc/tJS3CZ9B/One-Piece-Clothing-Banner-1920x730px.jpg);
}
.overlay_2 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 600px;
  width: 1510px;
  opacity: 0;
  transition: 0.5s ease;
  background-image: url(https://i.postimg.cc/HsRY8sJh/4.webp);
}
.container:hover .overlay {
  opacity: 1;
}
.container:hover .overlay_2 {
  opacity: 1;
}
.landing{
  background-image: linear-gradient(rgb(7, 109, 116), rgb(7, 93, 124));
}
.landing_words{
  font-size: 75px;
  color: white;
}
.landing_words_2{
  font-size: 100px;
  color: white;
}
.button_2 {
  background-color: #de2e2e; /* Green */
  border: 3px solid black;
  color: white;
  padding: 35px 52px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  margin: 4px 2px;
  cursor: pointer;
}
.button_2:hover{
  background-color: #b70707;
  color: rgb(205, 196, 196);
}
.M_clothes{
  width: 1050px;
}
</style>
