<script setup lang="ts">
import { pb } from '@/backend';

const listProjet = await pb.collection('projets').getFullList()

</script>

<template>

    <ul>
        <li v-for="unProjet in listProjet" :key="unProjet.id">{{ unProjet.nom_projet }}{{ unProjet.description_projet }}{{ unProjet.date_projet }}{{ unProjet.domaines1 }}{{ unProjet.domaines2 }}{{ unProjet.domaines3 }}{{ unProjet.img }}</li>
    </ul>
</template>