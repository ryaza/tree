<template>
  <div
        id="app"
        :class="$style.app"
  >
    <button
         :class="$style.button"
          @click="getJSON"
    >
      Скачать JSON
      <span :class="$style.icon">
        <i class="fas fa-download" />
      </span>
    </button>
    <tree-component :tree-data="tree"/>
  </div>
</template>
<script src="./App.js" />
<style
  src="./App.scss"
  lang="scss"
  module
/>
