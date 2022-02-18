async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }
  
    //Refresh token is only for preview mode.
    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
    }
    try {
      const res = await fetch(process.env.WordPressURL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query,
          variables,
        }),
      })
  
      const json = await res.json();
  
      if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
      }
      return json.data
    } catch {
      //Return null if there are any errors.
      //The News page handles errors.
      const json = null;
      return json;
    }
  }
  
  //Preview Post
  export async function getPreviewPost(id, idType = 'DATABASE_ID') {
    const data = await fetchAPI(
      `
      query PreviewPost($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
            databaseId
            title
            content
            slug
            date
            featuredImage {
            node {
                sourceUrl
            }
        }
        }
      }`,
      {
        variables: { id, idType },
      }
    )
    return data.post
  }

  export async function getAllNewsPosts(preview) {
    const data = await fetchAPI(
      `
      query AllPosts {
        posts(first: 12, where: { categoryName: "news", orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              slug
              id
              date
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      }
    }
    )
  
    return data?.posts
  }

  export async function getCursorInfo(amount) {
    const data = await fetchAPI(
      `
      query AllPosts($amount: Int!) {
        posts(first: $amount, where: { categoryName: "news", orderby: { field: DATE, order: DESC } }) {
          edges {
            cursor
          }
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
        }
      }
    `,
      {
        variables: {
          "amount": amount
        },
      }
    )
  
    return data?.posts
  }

  export async function getNextNewsPosts(cursor) {
    const data = await fetchAPI(
      `
      query AllPosts($cursor: String!) {
        posts(first: 12, where: { categoryName: "news", orderby: { field: DATE, order: DESC } }, after: $cursor) {
          edges {
            node {
              title
              excerpt
              slug
              id
              date
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
            cursor
          }
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
        }
      }
    `,
      {
        variables: {
          "cursor": cursor
        },
      }
    )
  
    return data?.posts
  }

  export async function getPreviousNewsPost(cursor) {
    const data = await fetchAPI(
      `
      query AllPosts($cursor: String!) {
        posts(
          where: {orderby: {field: DATE, order: ASC}, categoryName: "news"}
          before: $cursor
          first: 1
        ) {
          nodes {
            slug
            title
          }
        }
      }
    `,
      {
        variables: {
          "cursor": cursor
        },
      }
    )
  
    return data?.posts
  }

  export async function getNextNewsPost(cursor) {
    const data = await fetchAPI(
      `
      query AllPosts($cursor: String!) {
        posts(
          where: {orderby: {field: DATE, order: DESC}, categoryName: "news"}
          after: $cursor
          first: 1
        ) {
          nodes {
            slug
            title
          }
        }
      }
    `,
      {
        variables: {
          "cursor": cursor
        },
      }
    )
  
    return data?.posts
  }

  export async function getAllPostsWithSlug() {
    const data = await fetchAPI(
      `
      query AllPostsWithSlug {
        posts(where: { categoryName: "news" }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);
    return data?.posts;
  }

  export async function getPostCursorById(id) {
    const data = await fetchAPI(
      `
      query Posts($id: Int!) {
        posts(where: {id: $id}) {
          edges {
            cursor
          }
        }
      }
    `,
    {
      variables: {
        "id": id
      },
    }
    );
    return data?.posts;
  }

  export async function getNumberOfPosts() {
    const data = await fetchAPI(
      `
      query AllPosts {
        categories(where: {name: "news"}) {
          nodes {
            count
          }
        }
      }
    `);

    const countData = data.categories.nodes;
    const count = countData[0].count;

    return count;
  }

  export async function getPost(slug) {
    const data = await fetchAPI(
      `
        query PostBySlug($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
            title
            postId
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            content
          }
        }
      `,
      {
        variables: {
          id: slug,
          idType: 'URI'
        }
      }
    );
  
    return data;
  }

  

  export async function getPostAndMorePosts(slug, preview, previewData) {
    const postPreview = preview && previewData?.post
    // The slug may be the id of an unpublished post
    const isId = Number.isInteger(Number(slug))
    const isSamePost = isId
      ? Number(slug) === postPreview.id
      : slug === postPreview.slug
    const isDraft = isSamePost && postPreview?.status === 'draft'
    const isRevision = isSamePost && postPreview?.status === 'publish'
    const data = await fetchAPI(
      `
      fragment PostFields on Post {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          edges {
            node {
              name
            }
          }
        }
      }
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ...PostFields
          content
          ${
            // Only some of the fields of a revision are considered as there are some inconsistencies
            isRevision
              ? `
          revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
            edges {
              node {
                title
                excerpt
                content
              }
            }
          }
          `
              : ''
          }
        }
        posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              ...PostFields
            }
          }
        }
      }
    `,
      {
        variables: {
          id: isDraft ? postPreview.id : slug,
          idType: isDraft ? 'DATABASE_ID' : 'SLUG',
        },
      }
    )
  
    // Draft posts may not have an slug
    if (isDraft) data.post.slug = postPreview.id
    // Apply a revision (changes in a published post)
    if (isRevision && data.post.revisions) {
      const revision = data.post.revisions.edges[0]?.node
  
      if (revision) Object.assign(data.post, revision)
      delete data.post.revisions
    }
  
    // Filter out the main post
    data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
    // If there are still 3 posts, remove the last one
    if (data.posts.edges.length > 2) data.posts.edges.pop()
  
    return data
  }