/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onCreateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onCreateLikes = /* GraphQL */ `subscription OnCreateLikes(
  $filter: ModelSubscriptionLikesFilterInput
  $owner: String
) {
  onCreateLikes(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLikesSubscriptionVariables,
  APITypes.OnCreateLikesSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onCreatePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onDeleteComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onDeleteLikes = /* GraphQL */ `subscription OnDeleteLikes(
  $filter: ModelSubscriptionLikesFilterInput
  $owner: String
) {
  onDeleteLikes(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLikesSubscriptionVariables,
  APITypes.OnDeleteLikesSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onDeletePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onUpdateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onUpdateLikes = /* GraphQL */ `subscription OnUpdateLikes(
  $filter: ModelSubscriptionLikesFilterInput
  $owner: String
) {
  onUpdateLikes(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLikesSubscriptionVariables,
  APITypes.OnUpdateLikesSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onUpdatePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
