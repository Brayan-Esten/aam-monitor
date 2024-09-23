<template>
    <div class="base-layout">
        <div class="base-layout__header">
            <navigation-bar></navigation-bar>
        </div>
        <div class="base-layout__content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script src="./js/app.js"></script>

<style lang="sass" scoped>
    .base-layout {
        &__content {
            min-height: 90vh;
            padding: 2em
        }
    }
</style>