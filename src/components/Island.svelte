<script>
  import Typewriter from "svelte-typewriter";
</script>

<div
  class="flex flex-col gap-6 bg-black/30 border border-white/50 p-2 rounded-lg w-96"
>
  <div class="flex w-full bg-white/10 p-1 px-2 rounded-md">
    <div>
      <span class="text-white/40 text-sm">Revision.exe</span>
    </div>
    <div class="flex justify-end items-center w-full">
      <div class="h-3 w-3 mr-2 rounded-full bg-green-500"></div>
      <div class="h-3 w-3 mr-2 rounded-full bg-yellow-500"></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </div>
  <Typewriter interval={150}>
    <h1 class="text-lg font-semibold text-white text-center">
      Ready to lock in?
    </h1>
  </Typewriter>
  <a
    href="/start"
    class="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 cursor-pointer rounded-lg text-white font-bold text-center"
  >
    Lock in
  </a>
</div>

<style scoped>
  :root {
    --cursor-width: 2px;
  }
</style>
