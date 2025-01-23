<script>
    import Typewriter from 'svelte-typewriter'
</script>

<div class="bg-white/20 border border-white/50 p-4 rounded-md w-96">
    <div class="flex flex-col justify-center items-center">
        <Typewriter interval={200}>
            <h1 class="font-mono text-lg font-semibold text-white">Ready to lock in?</h1>
        </Typewriter>
        <div class="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 cursor-pointer rounded-lg text-white font-bold w-32 text-center">
            Lock in
        </div>
    </div>
</div>