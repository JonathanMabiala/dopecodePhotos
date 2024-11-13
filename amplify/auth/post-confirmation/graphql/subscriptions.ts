/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onCreateLikes = /* GraphQL */ `subscription OnCreateLikes($filter: ModelSubscriptionLikesFilterInput) {
  onCreateLikes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLikesSubscriptionVariables,
  APITypes.OnCreateLikesSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onCreateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onDeleteLikes = /* GraphQL */ `subscription OnDeleteLikes($filter: ModelSubscriptionLikesFilterInput) {
  onDeleteLikes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLikesSubscriptionVariables,
  APITypes.OnDeleteLikesSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onDeleteUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onUpdateLikes = /* GraphQL */ `subscription OnUpdateLikes($filter: ModelSubscriptionLikesFilterInput) {
  onUpdateLikes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLikesSubscriptionVariables,
  APITypes.OnUpdateLikesSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onUpdateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
