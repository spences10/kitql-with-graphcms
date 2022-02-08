<script context="module">
  import {
    GetPostQuery,
    GetPostQueryStore,
  } from '$lib/graphql/_kitql/graphqlStores'

  export const load = async ({ params, fetch }) => {
    const { slug } = params
    if (slug) await GetPostQuery({ fetch, variables: { slug } })
    return {}
  }
</script>

<script lang="ts">
  let title = $GetPostQueryStore.data?.post?.title
  let excerpt = $GetPostQueryStore.data?.post?.excerpt
</script>

<h1>{title}</h1>

<p>{excerpt}</p>
