import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a
  .schema({
    User: a.model({
      id: a.id().required(),
      name: a.string().required(),
      image: a.string(),
      bio: a.string(),
      username: a.string().required(),
      email: a.email().required(),
      website: a.url(),
      nofPosts: a.integer().required(),
      nofFollowers: a.integer().required(),
      nofFollowings: a.integer().required(),
      comments: a.hasMany("Comment", "userId"),
      posts: a.hasMany("Post", "userId"),
      likes: a.hasMany("Likes", "userId"),
    }),
    Post: a.model({
      id: a.id().required(),
      description: a.string(),
      image: a.string(),
      images: a.string().array().required(),
      video: a.string(),
      nofComments: a.integer().required(),
      nofLikes: a.integer().required(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      comments: a.hasMany("Comment", "postId"),
      likes: a.hasMany("Likes", "postId"),
    }),
    Comment: a.model({
      id: a.id().required(),
      comment: a.string().required(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      postId: a.id(),
      post: a.belongsTo("Post", "postId"),
      like: a.hasOne("Likes", "commentId"),
    }),
    Likes: a.model({
      id: a.id().required(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      postId: a.id(),
      post: a.belongsTo("Post", "postId"),
      commentId: a.id(),
      comment: a.belongsTo("Comment", "commentId"),
    }),
  })
  .authorization((allow) => [allow.guest().to(["read", "get"])]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
