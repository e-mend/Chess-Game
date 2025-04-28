<template>
    <q-page class="row items-center justify-evenly">
        <q-card
            class="q-card q-pa-md"
        >
            <TheChessboard :board-config="boardConfig" reactive-config />
        </q-card>
        <q-card
            class="q-card column q-pa-md"
        >
            <q-btn @click="boardConfig.coordinates = !boardConfig.coordinates">
                {{ $t('toggleCoordinates') }}
            </q-btn>
            <q-btn @click="boardConfig.viewOnly = !boardConfig.viewOnly">
                {{ $t('toggleViewOnly') }}
            </q-btn>
            <q-btn
                @click="boardConfig.animation!.enabled = !boardConfig.animation!.enabled"
            >
                {{ $t('toggleAnimations') }}
            </q-btn>
            <q-btn
                @click="boardConfig.draggable!.enabled = !boardConfig.draggable!.enabled"
            >
                {{ $t('toggleDraggable') }}
            </q-btn>
        </q-card>
    </q-page>
</template>
  
<script setup lang="ts">
    import { TheChessboard, type BoardConfig } from 'vue3-chessboard';
    import 'vue3-chessboard/style.css';
    import { reactive } from 'vue';

    const boardConfig: BoardConfig = reactive({
        coordinates: true,
        autoCastle: true,
        orientation: 'white',
        turnColor: 'white',
        highlight: {
            lastMove: true,
            check: true
        },
        animation: {
            enabled: true,
            duration: 200,
        },
        draggable: {
            enabled: true,
            distance: 3,
            autoDistance: true,
            showGhost: true,
            deleteOnDropOff: false,
        },
        events: {
            move: (from, to, capture) => {
                console.log(from, to, capture);
            },
        }
    });
</script>

<style scoped>
    .q-card {
        width: 100%;
        max-width: 800px;
    }
</style>
  