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

<ul>
  {#each posts as { title, excerpt, slug }}
    <li>
      <a href={`/posts/${slug}`}>
        <p>{title}</p>
      </a>
      <p>{excerpt}</p>
    </li>
  {/each}
</ul>
