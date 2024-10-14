<script setup lang="ts">
import { pb } from '@/backend';

const listProjet = await pb.collection('projets').getFullList()

</script>

<template>

    <ul>
        <li v-for="unProjet in listProjet" :key="unProjet.id">{{ unProjet.nom_projet }}</li>
    </ul>
</template>