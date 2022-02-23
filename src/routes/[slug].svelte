<script lang="ts" context="module">
  import {
    GetPageQuery,
    GetPageQueryStore,
  } from '$lib/graphql/_kitql/graphqlStores'

  export const load = async ({ params, fetch }) => {
    const { slug } = params
    await GetPageQuery({ fetch, variables: { slug } })
    return {}
  }
</script>

<script lang="ts">
  let page = $GetPageQueryStore.data?.page
</script>

<svelte:head>
  <title>KitQL with GraphCMS | {page.title}</title>
</svelte:head>

<h1 class="text-4xl font-semibold mb-5">{page.title}</h1>

<article class="prose">
  {@html page.content.html}
</article>
