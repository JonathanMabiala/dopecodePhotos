/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Comment = {
  __typename: "Comment",
  comment: string,
  createdAt: string,
  id: string,
  like?: Likes | null,
  post?: Post | null,
  postId?: string | null,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
};

export type Likes = {
  __typename: "Likes",
  comment?: Comment | null,
  commentId?: string | null,
  createdAt: string,
  id: string,
  post?: Post | null,
  postId?: string | null,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
};

export type Post = {
  __typename: "Post",
  comments?: ModelCommentConnection | null,
  createdAt: string,
  description?: string | null,
  id: string,
  image?: string | null,
  images: Array< string | null >,
  likes?: ModelLikesConnection | null,
  nofComments: number,
  nofLikes: number,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
  video?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelLikesConnection = {
  __typename: "ModelLikesConnection",
  items:  Array<Likes | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  bio?: string | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  email: string,
  id: string,
  image?: string | null,
  likes?: ModelLikesConnection | null,
  name: string,
  nofFollowers: number,
  nofFollowings: number,
  nofPosts: number,
  posts?: ModelPostConnection | null,
  updatedAt: string,
  username: string,
  website?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  and?: Array< ModelCommentFilterInput | null > | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCommentFilterInput | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  postId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelLikesFilterInput = {
  and?: Array< ModelLikesFilterInput | null > | null,
  commentId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelLikesFilterInput | null,
  or?: Array< ModelLikesFilterInput | null > | null,
  postId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelPostFilterInput = {
  and?: Array< ModelPostFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  nofComments?: ModelIntInput | null,
  nofLikes?: ModelIntInput | null,
  not?: ModelPostFilterInput | null,
  or?: Array< ModelPostFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  video?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  nofFollowers?: ModelIntInput | null,
  nofFollowings?: ModelIntInput | null,
  nofPosts?: ModelIntInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
  website?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCommentConditionInput = {
  and?: Array< ModelCommentConditionInput | null > | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelCommentConditionInput | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  postId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateCommentInput = {
  comment: string,
  id?: string | null,
  postId?: string | null,
  userId?: string | null,
};

export type ModelLikesConditionInput = {
  and?: Array< ModelLikesConditionInput | null > | null,
  commentId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelLikesConditionInput | null,
  or?: Array< ModelLikesConditionInput | null > | null,
  postId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateLikesInput = {
  commentId?: string | null,
  id?: string | null,
  postId?: string | null,
  userId?: string | null,
};

export type ModelPostConditionInput = {
  and?: Array< ModelPostConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  nofComments?: ModelIntInput | null,
  nofLikes?: ModelIntInput | null,
  not?: ModelPostConditionInput | null,
  or?: Array< ModelPostConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  video?: ModelStringInput | null,
};

export type CreatePostInput = {
  description?: string | null,
  id?: string | null,
  image?: string | null,
  images: Array< string | null >,
  nofComments: number,
  nofLikes: number,
  userId?: string | null,
  video?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelStringInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  nofFollowers?: ModelIntInput | null,
  nofFollowings?: ModelIntInput | null,
  nofPosts?: ModelIntInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
  website?: ModelStringInput | null,
};

export type CreateUserInput = {
  bio?: string | null,
  email: string,
  id?: string | null,
  image?: string | null,
  name: string,
  nofFollowers: number,
  nofFollowings: number,
  nofPosts: number,
  username: string,
  website?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type DeleteLikesInput = {
  id: string,
};

export type DeletePostInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateCommentInput = {
  comment?: string | null,
  id: string,
  postId?: string | null,
  userId?: string | null,
};

export type UpdateLikesInput = {
  commentId?: string | null,
  id: string,
  postId?: string | null,
  userId?: string | null,
};

export type UpdatePostInput = {
  description?: string | null,
  id: string,
  image?: string | null,
  images?: Array< string | null > | null,
  nofComments?: number | null,
  nofLikes?: number | null,
  userId?: string | null,
  video?: string | null,
};

export type UpdateUserInput = {
  bio?: string | null,
  email?: string | null,
  id: string,
  image?: string | null,
  name?: string | null,
  nofFollowers?: number | null,
  nofFollowings?: number | null,
  nofPosts?: number | null,
  username?: string | null,
  website?: string | null,
};

export type ModelSubscriptionCommentFilterInput = {
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  comment?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  postId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLikesFilterInput = {
  and?: Array< ModelSubscriptionLikesFilterInput | null > | null,
  commentId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionLikesFilterInput | null > | null,
  postId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionPostFilterInput = {
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  nofComments?: ModelSubscriptionIntInput | null,
  nofLikes?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  video?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  bio?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  nofFollowers?: ModelSubscriptionIntInput | null,
  nofFollowings?: ModelSubscriptionIntInput | null,
  nofPosts?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    comment: string,
    createdAt: string,
    id: string,
    like?:  {
      __typename: "Likes",
      commentId?: string | null,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type GetLikesQueryVariables = {
  id: string,
};

export type GetLikesQuery = {
  getLikes?:  {
    __typename: "Likes",
    comment?:  {
      __typename: "Comment",
      comment: string,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    commentId?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    images: Array< string | null >,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    nofComments: number,
    nofLikes: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
    video?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    bio?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    nofFollowers: number,
    nofFollowings: number,
    nofPosts: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username: string,
    website?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      comment: string,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikesFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikesConnection",
    items:  Array< {
      __typename: "Likes",
      commentId?: string | null,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    comment: string,
    createdAt: string,
    id: string,
    like?:  {
      __typename: "Likes",
      commentId?: string | null,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type CreateLikesMutationVariables = {
  condition?: ModelLikesConditionInput | null,
  input: CreateLikesInput,
};

export type CreateLikesMutation = {
  createLikes?:  {
    __typename: "Likes",
    comment?:  {
      __typename: "Comment",
      comment: string,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    commentId?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    images: Array< string | null >,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    nofComments: number,
    nofLikes: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
    video?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    bio?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    nofFollowers: number,
    nofFollowings: number,
    nofPosts: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username: string,
    website?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    comment: string,
    createdAt: string,
    id: string,
    like?:  {
      __typename: "Likes",
      commentId?: string | null,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteLikesMutationVariables = {
  condition?: ModelLikesConditionInput | null,
  input: DeleteLikesInput,
};

export type DeleteLikesMutation = {
  deleteLikes?:  {
    __typename: "Likes",
    comment?:  {
      __typename: "Comment",
      comment: string,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    commentId?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    images: Array< string | null >,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    nofComments: number,
    nofLikes: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
    video?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    bio?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    nofFollowers: number,
    nofFollowings: number,
    nofPosts: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username: string,
    website?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    comment: string,
    createdAt: string,
    id: string,
    like?:  {
      __typename: "Likes",
      commentId?: string | null,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdateLikesMutationVariables = {
  condition?: ModelLikesConditionInput | null,
  input: UpdateLikesInput,
};

export type UpdateLikesMutation = {
  updateLikes?:  {
    __typename: "Likes",
    comment?:  {
      __typename: "Comment",
      comment: string,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    commentId?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    images: Array< string | null >,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    nofComments: number,
    nofLikes: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
    video?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    bio?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    nofFollowers: number,
    nofFollowings: number,
    nofPosts: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username: string,
    website?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    comment: string,
    createdAt: string,
    id: string,
    like?:  {
      __typename: "Likes",
      commentId?: string | null,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreateLikesSubscriptionVariables = {
  filter?: ModelSubscriptionLikesFilterInput | null,
};

export type OnCreateLikesSubscription = {
  onCreateLikes?:  {
    __typename: "Likes",
    comment?:  {
      __typename: "Comment",
      comment: string,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    commentId?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    images: Array< string | null >,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    nofComments: number,
    nofLikes: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
    video?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    bio?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    nofFollowers: number,
    nofFollowings: number,
    nofPosts: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username: string,
    website?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    comment: string,
    createdAt: string,
    id: string,
    like?:  {
      __typename: "Likes",
      commentId?: string | null,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteLikesSubscriptionVariables = {
  filter?: ModelSubscriptionLikesFilterInput | null,
};

export type OnDeleteLikesSubscription = {
  onDeleteLikes?:  {
    __typename: "Likes",
    comment?:  {
      __typename: "Comment",
      comment: string,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    commentId?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    images: Array< string | null >,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    nofComments: number,
    nofLikes: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
    video?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    bio?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    nofFollowers: number,
    nofFollowings: number,
    nofPosts: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username: string,
    website?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    comment: string,
    createdAt: string,
    id: string,
    like?:  {
      __typename: "Likes",
      commentId?: string | null,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateLikesSubscriptionVariables = {
  filter?: ModelSubscriptionLikesFilterInput | null,
};

export type OnUpdateLikesSubscription = {
  onUpdateLikes?:  {
    __typename: "Likes",
    comment?:  {
      __typename: "Comment",
      comment: string,
      createdAt: string,
      id: string,
      postId?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    commentId?: string | null,
    createdAt: string,
    id: string,
    post?:  {
      __typename: "Post",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      images: Array< string | null >,
      nofComments: number,
      nofLikes: number,
      updatedAt: string,
      userId?: string | null,
      video?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    images: Array< string | null >,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    nofComments: number,
    nofLikes: number,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      createdAt: string,
      email: string,
      id: string,
      image?: string | null,
      name: string,
      nofFollowers: number,
      nofFollowings: number,
      nofPosts: number,
      updatedAt: string,
      username: string,
      website?: string | null,
    } | null,
    userId?: string | null,
    video?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    bio?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    id: string,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    nofFollowers: number,
    nofFollowings: number,
    nofPosts: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    username: string,
    website?: string | null,
  } | null,
};
