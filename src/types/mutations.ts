/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createComment = /* GraphQL */ `mutation CreateComment(
  $condition: ModelCommentConditionInput
  $input: CreateCommentInput!
) {
  createComment(condition: $condition, input: $input) {
    comment
    createdAt
    id
    like {
      commentId
      createdAt
      id
      owner
      postId
      updatedAt
      userId
      __typename
    }
    owner
    post {
      createdAt
      description
      id
      image
      images
      nofComments
      nofLikes
      owner
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
      owner
      updatedAt
      username
      website
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const createLikes = /* GraphQL */ `mutation CreateLikes(
  $condition: ModelLikesConditionInput
  $input: CreateLikesInput!
) {
  createLikes(condition: $condition, input: $input) {
    comment {
      comment
      createdAt
      id
      owner
      postId
      updatedAt
      userId
      __typename
    }
    commentId
    createdAt
    id
    owner
    post {
      createdAt
      description
      id
      image
      images
      nofComments
      nofLikes
      owner
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
      owner
      updatedAt
      username
      website
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLikesMutationVariables,
  APITypes.CreateLikesMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $condition: ModelPostConditionInput
  $input: CreatePostInput!
) {
  createPost(condition: $condition, input: $input) {
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
    owner
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
      owner
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
    owner
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $condition: ModelCommentConditionInput
  $input: DeleteCommentInput!
) {
  deleteComment(condition: $condition, input: $input) {
    comment
    createdAt
    id
    like {
      commentId
      createdAt
      id
      owner
      postId
      updatedAt
      userId
      __typename
    }
    owner
    post {
      createdAt
      description
      id
      image
      images
      nofComments
      nofLikes
      owner
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
      owner
      updatedAt
      username
      website
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const deleteLikes = /* GraphQL */ `mutation DeleteLikes(
  $condition: ModelLikesConditionInput
  $input: DeleteLikesInput!
) {
  deleteLikes(condition: $condition, input: $input) {
    comment {
      comment
      createdAt
      id
      owner
      postId
      updatedAt
      userId
      __typename
    }
    commentId
    createdAt
    id
    owner
    post {
      createdAt
      description
      id
      image
      images
      nofComments
      nofLikes
      owner
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
      owner
      updatedAt
      username
      website
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLikesMutationVariables,
  APITypes.DeleteLikesMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $condition: ModelPostConditionInput
  $input: DeletePostInput!
) {
  deletePost(condition: $condition, input: $input) {
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
    owner
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
      owner
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
    owner
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $condition: ModelCommentConditionInput
  $input: UpdateCommentInput!
) {
  updateComment(condition: $condition, input: $input) {
    comment
    createdAt
    id
    like {
      commentId
      createdAt
      id
      owner
      postId
      updatedAt
      userId
      __typename
    }
    owner
    post {
      createdAt
      description
      id
      image
      images
      nofComments
      nofLikes
      owner
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
      owner
      updatedAt
      username
      website
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const updateLikes = /* GraphQL */ `mutation UpdateLikes(
  $condition: ModelLikesConditionInput
  $input: UpdateLikesInput!
) {
  updateLikes(condition: $condition, input: $input) {
    comment {
      comment
      createdAt
      id
      owner
      postId
      updatedAt
      userId
      __typename
    }
    commentId
    createdAt
    id
    owner
    post {
      createdAt
      description
      id
      image
      images
      nofComments
      nofLikes
      owner
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
      owner
      updatedAt
      username
      website
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLikesMutationVariables,
  APITypes.UpdateLikesMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $condition: ModelPostConditionInput
  $input: UpdatePostInput!
) {
  updatePost(condition: $condition, input: $input) {
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
    owner
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
      owner
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
    owner
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
