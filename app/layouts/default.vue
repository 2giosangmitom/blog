<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <div class="flex-1 px-2 mx-auto container">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
