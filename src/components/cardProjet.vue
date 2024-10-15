<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types';


defineProps<Partial<ProjetsResponse>>() 
</script>

<template>

    <div class="w-[301px] h-[339px] relative overflow-hidden rounded-[40px] bg-white">
  <div class="w-[322px] h-[158px] absolute left-[-1px] top-[-1px] bg-[#d9d9d9]"></div>
  <div
    class="flex flex-col justify-center items-start w-[275px] h-[115px] absolute left-3.5 top-[209px] gap-[21px]"
  >
    <div
      class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[156px] relative"
    >
      <p class="self-stretch flex-grow-0 flex-shrink-0 w-[156px] text-lg text-left text-black">
        {{ nom_projet }}
      </p>
      <p class="self-stretch flex-grow-0 flex-shrink-0 w-[156px] text-xs text-left text-black">
        Description
      </p>
    </div>
    <div
      class="flex flex-col justify-center items-start self-stretch flex-grow gap-2.5 px-2.5 pt-2.5 pb-3"
    >
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[105px] h-[30px] relative gap-2.5 px-[18px] py-2.5 rounded-[10px] bg-[#b196d0]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-black">découvrir</p>
      </div>
    </div>
  </div>
  <div class="flex justify-start items-center w-[275px] absolute left-3.5 top-[167px] gap-[46px]">
    <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-[19px]">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[50px] h-[30px] relative gap-[8.774038314819336px] p-[8.774038314819336px] rounded-[17.55px] border-[0.88px] border-black"
      >
        <p class="flex-grow-0 flex-shrink-0 text-[8px] text-left text-black">Illustrator</p>
      </div>
      <div
        class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[50px] h-[30px] relative p-[8.774038314819336px] rounded-[17.55px] border-[0.88px] border-black"
      >
        <p class="flex-grow w-[32.45px] text-[8px] text-center text-black">logo</p>
      </div>
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[50px] h-[30px] relative gap-[8.774038314819336px] p-[8.774038314819336px] rounded-[17.55px] border-[0.88px] border-black"
      >
        <p class="flex-grow w-[32.45px] text-[8px] text-center text-black">figma</p>
      </div>
    </div>
    <p class="flex-grow w-[41px] text-xs text-center text-black">Date</p>
  </div>
</div>
</template>