<template>
  <div>
    <BinaryConverter msg="Binary Converter" />
  </div>
</template>

<script>
import BinaryConverter from "./components/BinaryConverter.vue";

export default {
  name: "App",
  components: {
    BinaryConverter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #000000; /* Set your desired background color here */
}

footer {
  text-align: center;
  padding: 10px;
}

footer a {
  color: #ff5722;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

footer a:visited {
  color: #ff5722;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.title-container img {
  margin-right: 20px;
  height: 60px !important;
  width: 60px !important;
}

.sections-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px; /* Adds space between items */
}

.section {
  flex: 1; /* Existing flex properties */
  max-width: calc(50% - 20px); /* Adjust max-width to account for margin */
  margin: 10px; /* Adds margin around each section, creating space between them */
}

@media (max-width: 768px) { /* Adjust this value based on your mobile breakpoint */
  .sections-container {
    flex-direction: column; /* Stacks the flex items vertically on small screens */
  }
  
  .section {
    max-width: 100%; /* Allows each section to take full width on small screens */
  }
}


</style>
