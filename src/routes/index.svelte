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
  const {
    data: { posts },
  } = $AllPostsQueryStore
</script>

<h1>Welcome to KitQL</h1>

<pre>{JSON.stringify(posts, null, 2)}</pre>

{#each posts as { title, excerpt, slug }}
  <a href={`/posts/${slug}`}>
    <p>{title}</p>
    <p>{excerpt}</p>
  </a>
{/each}
