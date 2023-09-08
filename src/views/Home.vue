<template >
   <body class="dark:bg-gray-600 ">
     <!-- body -->

    <!-- start -->
      <section class="text-gray-600 body-font">
      
<div class="w-full h-[700px] flex items-center overflow-hidden">
    <div class="slideshow-container" :style="containerStyle">
      <transition name="slide-fade" mode="out-in">
        <div :key="currentSlide" class="slideshow-slide">
          <div class="image-container relative">
            <img :src="images[currentSlide].src" :alt="'Slide ' + (currentSlide + 1)" class="w-full h-auto max-h-64">
            <div class="image-overlay absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out pb-20">
              <h2 class="text-white text-2xl font-semibold">{{images[currentSlide].title}}</h2>
              <button class="text-white bg-indigo-500 border-0 py-2 px-4 mt-2 rounded-full" @click="getSpecificRecipes(images[currentSlide].title)">Learn More</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
      
        
  </section>
    <!-- start -->

      <!-- search -->
      <section class="text-gray-600 body-font dark:bg-gray-600 mb-6">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mx-auto leading-relaxed xl:mb-4 text-gray-900 dark:text-gray-300">Cook your Favourite food</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-900 dark:text-gray-300">Whether you find yourself equipped with a fully stocked pantry or face the challenge of an empty fridge,
       we have you covered. Our website is designed to provide you with mouthwatering recipes that cater to both scenarios,
        ensuring you can whip up a delicious meal no matter the ingredients at your disposal. </p>
    </div>
      <form @submit.prevent="storeSearch" class="my-20 py-0.5">
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">

      <div class="relative flex-grow w-full">
        <input type="text" name="text" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-model="search" placeholder="Search with anything....">
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
    </div>
      </form>
  </div>
</section>

<!-- search -->

<!-- result -->

<!-- {{search}} -->
<!-- {{recipe}} -->
<section class="text-gray-600 dark:bg-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4" >
      <div class=" xl:w-1/4 md:w-1/2 p-4" v-for="(items,index) in recipe" :key="index">
        <div class="bg-gray-100 p-6 rounded-lg ">
          <img class="h-40 rounded w-full object-cover object-center mb-6 " :src="items.recipe.image" alt="content">
          <h2 class="text-lg text-gray-900 font-bold title-font mb-4">{{items.recipe.label}}</h2>
          <!-- dietlabels -->
          <div class="flex font-medium italic " v-if="items.recipe.dietLabels != 0">
            Diet Labels :
          <p class="leading-relaxed text-base" v-for="(a,index) in  items.recipe.dietLabels" :key="index">
            {{a}}
            <span v-if="index !== items.recipe.dietLabels.length - 1">, </span>
          </p>
          </div>
          <div v-else class="italic flex font-medium">
            Diet Labels :
            <p class="leading-relaxed text-base">
              No Diet Labels
            </p>
          </div>
          <!-- dietlabels -->
          <!-- cuisinetype -->
          <div class="flex font-medium italic " v-if="items.recipe.cuisineType != 0">
            Cuisine Type :
          <p class="leading-relaxed text-base" v-for="(a,index) in  items.recipe.cuisineType" :key="index">
            {{a}}
            <span v-if="index !== items.recipe.cuisineType.length - 1">, </span>
          </p>
          </div>
          <div v-else class="italic flex font-medium">
            Cuisine Type :
            <p class="leading-relaxed text-base">
              No Cuisine Type
            </p>
          </div>

          <!-- cuisinetype -->
          <!-- mealtype -->
          <div class="flex font-medium italic " v-if="items.recipe.mealType != 0">
            Meal Type :
          <p class="leading-relaxed text-base" v-for="(a,index) in  items.recipe.mealType" :key="index">
            {{a}}
            <span v-if="index !== items.recipe.mealType.length - 1">, </span>
          </p>
          </div>
          <div v-else class="italic flex font-medium">
            Meal Type :
            <p class="leading-relaxed text-base">
              No Meal Type
            </p>
          </div>
          <!-- mealtype -->
          <!-- dishType -->
          <div class="flex font-medium italic " v-if="items.recipe.dishType != 0">
            Dish Type :
          <p class="leading-relaxed text-base" v-for="(a,index) in  items.recipe.dishType" :key="index">
            {{a}}
            <span v-if="index !== items.recipe.dishType.length - 1">, </span>
          </p>
          </div>
          <div v-else class="italic flex font-medium">
            Dish Type :
            <p class="leading-relaxed text-base">
              No Dish Type
            </p>
          </div>
          <!-- dishType -->
          <!-- button -->
         <button class="text-indigo-500 inline-flex items-center mt-4" @click="getRecipe(items.recipe)">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
         </button>
       
          <!-- button -->
          


        
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- result -->




      


     
     <!-- body -->


   </body>
</template>

<script>
import axios from "axios";
import pizzaImage from '../assets/images/pizza.jpg';
import chickenImage from '../assets/images/chicken.jpg';
import saladImage from '../assets/images/salad.jpg';

export default{
  components: {
  
  },
  data(){
    return {
       search :'',
       apiKey : import.meta.env.VITE_API_KEY,
        recipe : [],
        showloading : false,
         images: [
        { src: pizzaImage , title: "PIZZA"},
        { src: chickenImage, title: "CHICKEN" },
        { src: saladImage, title: "SALAD" },
      ],
      currentSlide: 0,
       

    }
  },
   computed: {
     
    },
   
 
  mounted() {
    setInterval(this.nextSlide, 5000); // Change slide every 3 seconds
  },
  methods: {
    slideClasses(index) {
      return {
        'opacity-100': this.currentSlide === index,
        'opacity-0': this.currentSlide !== index,
      };
    },
     nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
     

     storeSearch(){
        this.getrecipes()
        

       
      },
      async getSpecificRecipes(search){
        this.search = search
        this.getrecipes()
       
      },



      async getrecipes(){
        
        this.showloading = true

        try {
          
          const response = await axios.get('https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2', {
          params: {
            type: 'public',
            q: this.search
          },
          headers: {
           'X-RapidAPI-Key': this.apiKey,
           'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
          }
        })

        console.log(response)
        this.recipe = response.data.hits
        
          
        } catch (error) {
          console.error(error)
          
        }
       


      },
      getRecipe(recipe){
        console.log(recipe);
        
        this.$router.push({name:'SpecificRecipe',params: { 
          id: recipe.label,
          data: JSON.stringify(recipe)
        }})

        window.scrollTo(0, 0);


         }
      
    
   
  }
}
  
</script>

<style scoped>

.loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh;
    }

  .section {
  /* max-height: 600px; */
  
  /* overflow-y: auto; */
  direction: ltr;
  scrollbar-color: rgb(191, 214, 212) #e4e4e4;
  scrollbar-width: thin;
}
.section::-webkit-scrollbar {
  width: 8px;
}
.section::-webkit-scrollbar-track {
  background-color: rgb(191, 214, 212);
  border-radius: 100px;
}
.section::-webkit-scrollbar-thumb {
  border-radius: 100px;
  /* background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%); */
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}



h1 {
    position: relative;
    color: rgba(114, 111, 111, 0.3);
    font-size: 4em
}



h1:before {
    content: attr(data-text);
    position: absolute;
    overflow: hidden;
    max-width: 10em;
    white-space: nowrap;
    color: rgb(88, 142, 224);
    animation: loading 10s  linear infinite;
}
@keyframes loading {
    0% {
        max-width: 0;
    }
}

.btn2 span:first-child{
  transform: translateX(-101%);
  transition: transform .3s ease-in
}
.btn2:hover span{
  transform: translateX(0)
}

.btn3 span:first-child{
  transform: translateX(-101%);
  transition: transform .3s ease-in
}
.btn3:hover span{
  transform: translateX(0)
}

/* slideshow */
.slideshow-container {
  width: 100%; /* Full width */
  height: 100%;
  overflow: hidden; /* Hide overflowed images */
  position: relative; /* Relative positioning for slides */
}

.slideshow-inner {
  display: flex; /* Display slides horizontally */
  transition: transform 0.5s ease; /* Smooth slide transition */
}

.slideshow-slide {
  flex: 0 0 100%; /* Each slide takes 100% width */
}

img {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  max-height: 100vh; /* Limit the height while maintaining aspect ratio */
}

.image-container {
  position: relative;
  
}

.image-overlay {
  background-color: rgba(24, 22, 22, 0.7);
  text-align: center;
  opacity: 1;
  transition: opacity 0.3s;
}

.image-overlay h2 {
  margin-bottom: 8px;
}

.image-overlay button {
  cursor: pointer;
}

/* slideshow */

</style>
