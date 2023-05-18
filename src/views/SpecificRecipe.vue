<template>
<body class="dark:bg-gray-600 bg-white ">
    

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="recipeData.image">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <!-- <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> -->
        <h1 class="text-gray-900 dark:text-gray-300 text-3xl title-font font-medium mb-1">{{recipeData.label}}</h1>
        <div class="flex mb-4">
         
         
        </div>
        <label for="" class="text-xl font-semibold dark:text-gray-300">Ingredients</label>
        <div v-for="(items, index) in recipeData.ingredientLines" :key="index">

        <p class="leading-relaxed text-left dark:text-gray-300">{{index + 1}}. {{items}}</p>
        </div>

        <hr>
        <div class=" mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3 text-sm dark:text-gray-300">Diet Labels : </span>
            <div class="flex flex-wrap font-medium italic " v-if="recipeData.dietLabels != 0">
              <p class="leading-relaxed text-sm dark:text-gray-300" v-for="(a,index) in  recipeData.dietLabels" :key="index">
                {{a}}
                <span v-if="index !== recipeData.dietLabels.length - 1">, </span>
              </p>
            </div>
            <div v-else class="italic flex font-medium text-sm dark:text-gray-300">
              <p class="leading-relaxed text-sm dark:text-gray-300">
                No Diet Labels
              </p>
            </div>
           
          </div>
          <div class="flex items-center ">
            <span class="mr-3 text-sm  dark:text-gray-300">Health Labels :</span>
            <div class="flex flex-wrap font-medium italic " v-if="recipeData.healthLabels != 0">
              <p class="leading-relaxed text-sm dark:text-gray-300" v-for="(a,index) in  recipeData.healthLabels" :key="index">
                {{a}}
                <span v-if="index !== recipeData.healthLabels.length - 1">, </span>
              </p>
            </div>
            <div v-else class="italic flex font-medium text-sm dark:text-gray-300">
              <p class="leading-relaxed text-sm dark:text-gray-300">
                No Health Labels
              </p>
            </div>
           
          </div>
            <div class="flex items-center">
                <span class="mr-3 text-sm dark:text-gray-300">Cuisine Type :</span>
                <div class="flex flex-wrap font-medium italic " v-if="recipeData.cuisineType != 0">
                <p class="leading-relaxed text-sm dark:text-gray-300" v-for="(a,index) in  recipeData.cuisineType" :key="index">
                    {{a}}
                    <span v-if="index !== recipeData.cuisineType.length - 1">, </span>
                </p>
                </div>
                <div v-else class="italic flex font-medium text-sm dark:text-gray-300">
                <p class="leading-relaxed text-sm dark:text-gray-300">
                    No Cuisine Type
                </p>
                </div>
            </div>
            <div class="flex items-center">
                <span class="mr-3 text-sm dark:text-gray-300">Meal Type :</span>
                <div class="flex flex-wrap font-medium italic " v-if="recipeData.mealType != 0">
                <p class="leading-relaxed text-sm dark:text-gray-300" v-for="(a,index) in  recipeData.mealType" :key="index">
                    {{a}}
                    <span v-if="index !== recipeData.mealType.length - 1">, </span>
                </p>
                </div>
                <div v-else class="italic flex font-medium text-sm dark:text-gray-300">
                <p class="leading-relaxed text-sm dark:text-gray-300">
                    No Meal Type
                </p>
                </div>
            </div>
            <div class="flex items-center">
                <span class="mr-3 text-sm dark:text-gray-300">Dish Type :</span>
                <div class="flex flex-wrap font-medium italic " v-if="recipeData.dishType != 0">
                <p class="leading-relaxed text-sm dark:text-gray-300" v-for="(a,index) in  recipeData.dishType" :key="index">
                    {{a}}
                    <span v-if="index !== recipeData.dishType.length - 1">, </span>
                </p>
                </div>
                <div v-else class="italic flex font-medium text-sm dark:text-gray-300">
                <p class="leading-relaxed text-sm dark:text-gray-300">
                    No Dish Type
                </p>
                </div>
            </div>





        </div>
        <div class="flex items-center">
                <span class="mr-3 text-sm dark:text-gray-300">Cautions :</span>
                <div class="flex font-medium italic " v-if="recipeData.caurions != 0">
                <p class="leading-relaxed text-sm dark:text-gray-300" v-for="(a,index) in  recipeData.cautions" :key="index">
                    {{a}}
                    <span v-if="index !== recipeData.cautions.length - 1">, </span>
                </p>
                </div>
                <div v-else class="italic flex font-medium text-sm dark:text-gray-300">
                <p class="leading-relaxed text-sm dark:text-gray-300">
                    No Cautions
                </p>
                </div>
            </div>
            <div>
                <p class="text-sm text-left dark:text-gray-300">For more info use this link -
                    <a :href="recipeData.url" target="_blank" class="text-blue-500">
                       Learn More
                        </a> 
                     </p>
            </div>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-6 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-gray-300">Total Nutrients</h1>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Label</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Unit</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(item, key) in recipeData.totalNutrients" :key="key">
            <td class="px-4 py-3 dark:text-gray-300">{{item.label}}</td>
            <td class="px-4 py-3 dark:text-gray-300">{{item.quantity}}</td>
            <td class="px-4 py-3 dark:text-gray-300">{{item.unit}}</td>
          </tr>
          
          
        </tbody>
      </table>
    </div>
   
  </div>
</section>
</body>


  
</template>

<script>
export default {
    data() {
        return {
            recipeData: null
        }
    },
    created() {

        this.recipeData = JSON.parse(this.$route.params.data);
        
    },

}
</script>

<style>

</style>