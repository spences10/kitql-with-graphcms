<script lang="ts">
  import ThemeSwitch from './theme-switch.svelte'

  export let pages
</script>

<nav class="navbar mb-10 shadow-lg bg-neutral text-neutral-content">
  <div class="px-2 mx-2 navbar-start">
    <span class="text-lg font-bold"> KitQL and GraphCMS </span>
  </div>
  <div class="px-2 mx-2 navbar-center">
    <div class="flex items-stretch">
      <a class="btn btn-ghost btn-sm rounded-btn" href={`/`}>Home</a>
      {#each pages as { title, slug }}
        <a class="btn btn-ghost btn-sm rounded-btn" href={`/${slug}`}>
          {title}
        </a>
      {/each}
    </div>
  </div>
  <div class="navbar-end">
    <ThemeSwitch />
  </div>
</nav>
