<template>
  <div class="w-full">
    <!-- Container de la grille avec des colonnes de taille égale -->
    <div class="grid" :style="gridStyle">
      <!-- Boucle pour créer les cellules -->
      <div v-for="index in totalCells" 
           :key="index"
           class="border border-gray-300 aspect-square"
           :class="{'hover:bg-gray-100': enableHover}">
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: 'Grid',
  props: {
    // Nombre de colonnes
    columns: {
      type: Number,
      default: 6
    },
    // Nombre de lignes
    rows: {
      type: Number,
      default: 5
    },
    // Activer l'effet hover sur les cellules
    enableHover: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    // Calcul du nombre total de cellules
    totalCells() {
      return this.rows * this.columns;
    },
    // Style CSS dynamique pour la grille
    gridStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${this.columns}, minmax(0, 1fr))`,
        gap: '0px'
      };
    }
  }
};
</script>