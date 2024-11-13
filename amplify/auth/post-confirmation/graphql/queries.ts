/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    comment
    createdAt
    id
    like {
      commentId
      createdAt
      id
      postId
      updatedAt
      userId
      __typename
    }
    post {
      createdAt
      description
      id
      image
      images
      nofComments
      nofLikes
      updatedAt
      userId
      video
      __typename
    }
    postId
    updatedAt
    user {
      bio
      createdAt
      email
      id
      image
      name
      nofFollowers
      nofFollowings
      nofPosts
      updatedAt
      username
      website
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const getLikes = /* GraphQL */ `query GetLikes($id: ID!) {
  getLikes(id: $id) {
    comment {
      comment
      createdAt
      id
      postId
      updatedAt
      userId
      __typename
    }
    commentId
    createdAt
    id
    post {
      createdAt
      description
      id
      image
      images
      nofComments
      nofLikes
      updatedAt
      userId
      video
      __typename
    }
    postId
    updatedAt
    user {
      bio
      createdAt
      email
      id
      image
      name
      nofFollowers
      nofFollowings
      nofPosts
      updatedAt
      username
      website
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLikesQueryVariables, APITypes.GetLikesQuery>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    comments {
      nextToken
      __typename
    }
    createdAt
    description
    id
    image
    images
    likes {
      nextToken
      __typename
    }
    nofComments
    nofLikes
    updatedAt
    user {
      bio
      createdAt
      email
      id
      image
      name
      nofFollowers
      nofFollowings
      nofPosts
      updatedAt
      username
      website
      __typename
    }
    userId
    video
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    bio
    comments {
      nextToken
      __typename
    }
    createdAt
    email
    id
    image
    likes {
      nextToken
      __typename
    }
    name
    nofFollowers
    nofFollowings
    nofPosts
    posts {
      nextToken
      __typename
    }
    updatedAt
    username
    website
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listComments(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      comment
      createdAt
      id
      postId
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const listLikes = /* GraphQL */ `query ListLikes(
  $filter: ModelLikesFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLikes(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      commentId
      createdAt
      id
      postId
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLikesQueryVariables, APITypes.ListLikesQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPosts(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      description
      id
      image
      images
      nofComments
      nofLikes
      updatedAt
      userId
      video
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      bio
      createdAt
      email
      id
      image
      name
      nofFollowers
      nofFollowings
      nofPosts
      updatedAt
      username
      website
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
