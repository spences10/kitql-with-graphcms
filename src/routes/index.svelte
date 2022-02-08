<script lang="ts" context="module">
  import {
    AllPostsQuery,
    AllPostsQueryStore,
  } from '$lib/graphql/_kitql/graphqlStores'

  export const load = async ({ fetch }) => {
    await AllPostsQuery({ fetch })
    return {}
  }
</script>

<script lang="ts">
  let posts = $AllPostsQueryStore.data?.posts
</script>

<h1>Welcome to KitQL</h1>

{#each posts as { title, excerpt, slug }}
  <a href={`/posts/${slug}`}>
    <p>{title}</p>
    <p>{excerpt}</p>
  </a>
{/each}
