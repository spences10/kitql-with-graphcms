<script lang="ts" context="module">
  import Nav from '$lib/components/nav.svelte'
  import { KQL_AllPages } from '$lib/graphql/_kitql/graphqlStores'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  export const load = async ({ fetch }) => {
    await KQL_AllPages.query({ fetch })
    return {}
  }
</script>

<script>
  let pages = $KQL_AllPages.data?.pages

  onMount(async () => {
    themeChange(false)
  })
</script>

<Nav {pages} />
<main class="container max-w-3xl mx-auto px-4 mb-20">
  <slot />
</main>
