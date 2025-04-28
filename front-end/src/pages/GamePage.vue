<template>
    <TheChessboard
        player-color="white"
        :board-config="boardConfig"
    />
</template>
  
<script setup lang="ts">
    import { TheChessboard, type BoardConfig } from 'vue3-chessboard';
    import 'vue3-chessboard/style.css';

    const boardConfig: BoardConfig = {
        coordinates: true,
        autoCastle: true,
        orientation: 'white',
        turnColor: 'white',
        highlight: {
            lastMove: true,
            check: true
        },
        events: {
            move: (from, to, capture) => {
                console.log(from, to, capture);
            },
        }
    };
</script>
  