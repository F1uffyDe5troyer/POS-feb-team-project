<template>
<body>
    <section id="home">
      <h1 class="title">GG TECH!!</h1>
      <h1 class="title">unplugged</h1>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.css" integrity="sha512-Q0DfJ+I5cbH4Wm20NlPZ/fENHil7k3ZgzI9b71LfQAB1IlM8Gt7aO7eOPX2QzYT+4fZaF6u1kSfZAHczl4r/9Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="container">
  <h1 class="services">Our Services</h1>
  <div class="flow">
    <div class="card">
      <div class="card-flow">
        <div class="icon">
          <i class="fa fa-desktop"></i>
        </div>
        <div class="card-body">
          <h1 class="card-title">Pc builds</h1>
          <p class="card-text">Get a hold of pc parts to build your dream PC!
            We offer parts at affordable prices, all in pristine condtion.
          </p>
          <!-- <a href="#" class="btn">Read more</a> -->
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-flow">
        <div class="icon">
          <i class="fa fa-pencil-square-o"></i>
        </div>
        <div class="card-body">
          <h1 class="card-title">Pc repairs</h1>

          <p class="card-text">We offer affordable repairs as well as insurance that suits your needs!</p>
          <!-- <a href="#" class="btn">Read more</a> -->
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-flow">
        <div class="icon">
          <i class="fa fa-pencil"></i>
        </div>
        <div class="card-body">
          <h1 class="card-title">Pc drip</h1>
          <p class="card-text">Pc customization like never before, create your unique. We offer various customizability!</p>
          <!-- <a href="#" class="btn">Read more</a> -->
        </div>
      </div>
    </div>

  </div>
</div>
    </section>
</body>
</template>

<script>
export default {

}
</script>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  color: crimson;
  text-align: center;
  font-size: 7vh;
  text-decoration-style: italic;
}

.h1-span {
  margin-left: 31em;
  font-size: 29px;
  font-style: italic;
}

.container {
  background: #fff8;
  margin: 0 auto;
  width: 60%;
  min-width: 25rem;
  max-width: 62.5rem;
  padding: 2em;
  border-radius: 1em;
  box-shadow: 0 0.125em 0.25em #0003, 0 0.6em 1.325em #0003,
    0 1.125em 1.6em -0.125em #0002;
}

.services {
  text-align: center;
  color: white;
  font-size: 3em;
  margin-bottom: 1em;
}

.flow {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
}

.flow > * {
  flex-grow: 1;
  flex-basis: calc((45rem - 100%) * 999);
}

.card {
  margin: auto;
  max-width: 35rem;
  padding: 1em;
  background-color: #fff;
  border-radius: 0.35em;
  box-shadow: 0 0.125em 0.25em #0003, 0 0.6em 1.325em #0003,
    0 1.125em 1.6em -0.125em #0002;
  transition: transform 200ms ease;
}

.card:hover {
  transform: scale(1.04);
}

.card-flow {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 9999;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  font-size: 3rem;
  -webkit-text-stroke: 1.5px teal;
  color: rgb(0, 0, 0);
}

.fab:hover {
  animation: swing 500ms cubic-bezier(0.5, 0.2, 0.59, 1.1);
}

@keyframes swing {
  0% {
    transform: rotate(-5deg);
  }
  20% {
    transform: rotate(5deg);
  }
  35% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  70% {
    transform: rotate(-20deg);
  }
  85% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.card-body {
  align-items: center;
  margin: 0 auto;
  display: flex;
  max-width: 25rem;
  flex-direction: column;
}

.card-title {
  font-size: clamp(1.6rem, 2.8vw, 2rem);
  line-height: 1.6;
  margin-block: 0.5rem 1rem;
}

.card-text {
  font-size: 1.125rem;
  font-style: italic;
  text-align: center;
  color: #999fff;
  max-width: 35ch;
}

.btn {
  display: inline-flex;
  border: none;
  background: teal;
  margin: 1em 0;
  padding: 0.5em 1.125em;
  border-radius: 0.35em;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0 0.6em 1.125em #0007;
}

.btn:active {
  box-shadow: 0 0.125em 0.5em #0007;
}

</style>