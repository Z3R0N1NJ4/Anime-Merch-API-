<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Contact Us</h3>
          <p>314 Imam Haron Rd, Lansdowne</p>
          <p>Cape Town, 7780</p>
          <p>Phone: 071 415 9017<br> 064 786 7876</p>
          <p>Emails: tayapril3@gmail.com<br> www.breakerbreaker19</p>
        </div>
        <div class="col-md-4">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Sign up to receive the latest news and exclusive offers from our store.</p>
          <form>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Enter your email address">
            </div>
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </footer>


</template>

<script>
export default {
  name: 'Footer_Com',
};
</script>

<style>
.footer {
  padding: 50px 0;
  /* margin-left: 485px; */
    box-shadow: 0 0 8px 2.5px black;
    background-color: rgb(160, 159, 159);
    justify-content: center;
}


.footer h3 {
  margin-bottom: 20px;
  font-weight: bold;
  text-align: right;
  color: black;
}

.footer p {
  margin-bottom: 10px;
  text-align: right;
  color: black;
}

.footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: right;
}

.footer ul li {
  margin-bottom: 10px;
  text-align: right;
  color: black;
}

.footer form {
  margin-top: 20px;
  text-align: right;
}
</style>
