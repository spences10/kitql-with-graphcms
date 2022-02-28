<script lang="ts" context="module">
  import { KQL_AllPosts } from '$lib/graphql/_kitql/graphqlStores'

  export const load = async ({ fetch }) => {
    await KQL_AllPosts.query({ fetch })
    return {}
  }
</script>

<script lang="ts">
  let posts = $KQL_AllPosts.data?.posts
</script>

{#each posts as { title, slug, excerpt, coverImage, tags }}
  <section class="card text-center shadow-2xl mb-20">
    <figure class="px-10 pt-10">
      <img class="rounded-xl" src={coverImage.url} alt={title} />
    </figure>
    <div class="card-body">
      <h2 class="title text-3xl font-bold tracking-wide">{title}</h2>
      <p class="text-xl">{excerpt}</p>
      <div class="flex justify-center mt-5 space-x-2 mb-3">
        {#each tags as tag}
          <span class="badge badge-primary text-lg py-3">{tag}</span>
        {/each}
      </div>
      <div class="justify-center card-actions">
        <a
          href={`/posts/${slug}`}
          class="btn btn-outline btn-primary text-lg"
        >
          Read &rArr;
        </a>
      </div>
    </div>
  </section>
{/each}
