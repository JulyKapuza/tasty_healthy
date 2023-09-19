<script setup>
const props = defineProps({
  details: {
    type: Object
  }
})
</script>
<template>
  <div class="3xl:container xl:px-4 md:flex">
    <div class="flex flex-col-reverse items-center gap-2 sm:my-auto md:me-10">
      <img :src="details.recipe.image" class="w-[300px] h-[300px] rounded-[20px] mb-2 md:mb-0" />
      <div class="bg-main/[.3] rounded-[20px] mt-2 p-2 text-white">
        <div>
          <span class="text-xl bold">{{ $t('calories') }}</span
          >: {{ details.recipe.calories.toFixed(2) }}
        </div>
        <div>
          <span class="text-xl bold">{{ $t('total_weight') }}</span
          >: {{ details.recipe.totalWeight.toFixed(2) }}
        </div>
        <div>
          <span class="text-xl bold">{{ $t('total_time') }}</span
          >: {{ details.recipe.totalTime }}
        </div>
      </div>
    </div>

    <div class="sm:grid grid-cols-2 lg:grid-cols-3 gap-2">
      <div
        v-for="item in details.recipe.ingredients"
        :key="item.food"
        class="flex items-center gap-2 mb-4"
      >
        <img :src="item.image" class="w-[150px] h-[150px] rounded-[20px] me-2" />
        <div class="w-[200px]">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
