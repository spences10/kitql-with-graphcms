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

<h1 class="text-5xl my-5">Welcome to KitQL</h1>

{#each posts as { title, slug, excerpt, coverImage, tags }}
  <section class="card text-center shadow-2xl mb-20">
    <figure class="px-10 pt-10">
      <img
        class="rounded-xl"
        src={coverImage.url}
        alt={`Cover image for ${title}`}
      />
    </figure>
    <div class="card-body">
      <h2 class="title">{title}</h2>
      <p>{excerpt}</p>
      <div class="flex justify-center mt-5 space-x-2">
        {#each tags as tag}
          <span class="badge badge-primary">{tag}</span>
        {/each}
      </div>
      <div class="justify-center card-actions">
        <a href={`/posts/${slug}`} class="btn btn-outline btn-primary"
          >Read &rArr;</a
        >
      </div>
    </div>
  </section>
{/each}
