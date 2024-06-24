import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRoles>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserLoginDto;
  login: UserLoginDto;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  login: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  findUser: User;
  me: User;
};


export type QueryFindUserArgs = {
  id: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  role: UserRoles;
  updatedAt: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  updatedAt: Scalars['String']['output'];
};

export type UserLoginDto = {
  __typename?: 'UserLoginDTO';
  email: Scalars['String']['output'];
  roles: Array<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

/** The user role assigned */
export enum UserRoles {
  Admin = 'ADMIN',
  Operator = 'OPERATOR',
  SuperAdmin = 'SUPER_ADMIN'
}

export type FindUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindUserQuery = { __typename?: 'Query', findUser: { __typename?: 'User', fullName?: string | null, email: string, phoneNumber?: string | null, roles?: Array<{ __typename?: 'Role', role: UserRoles, id: string } | null> | null } };

export type LoginMutationVariables = Exact<{
  login: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserLoginDTO', token: string, email: string, roles: Array<string>, userId: string } };

export type Current_UserQueryVariables = Exact<{ [key: string]: never; }>;


export type Current_UserQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, fullName?: string | null, email: string, phoneNumber?: string | null, roles?: Array<{ __typename?: 'Role', role: UserRoles, id: string } | null> | null } };

export type CreateuserMutationVariables = Exact<{
  userInput: CreateUserInput;
}>;


export type CreateuserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserLoginDTO', token: string, userId: string, roles: Array<string>, email: string } };


export const FindUserDocument = gql`
    query FindUser($id: String!) {
  findUser(id: $id) {
    fullName
    email
    phoneNumber
    roles {
      role
      id
    }
  }
}
    `;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindUserQuery(baseOptions: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables> & ({ variables: FindUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export function useFindUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserSuspenseQueryHookResult = ReturnType<typeof useFindUserSuspenseQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
export const LoginDocument = gql`
    mutation LOGIN($login: LoginInput!) {
  login(login: $login) {
    token
    email
    roles
    userId
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      login: // value for 'login'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const Current_UserDocument = gql`
    query CURRENT_USER {
  me {
    id
    fullName
    email
    roles {
      role
      id
    }
    phoneNumber
  }
}
    `;

/**
 * __useCurrent_UserQuery__
 *
 * To run a query within a React component, call `useCurrent_UserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrent_UserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrent_UserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrent_UserQuery(baseOptions?: Apollo.QueryHookOptions<Current_UserQuery, Current_UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Current_UserQuery, Current_UserQueryVariables>(Current_UserDocument, options);
      }
export function useCurrent_UserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Current_UserQuery, Current_UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Current_UserQuery, Current_UserQueryVariables>(Current_UserDocument, options);
        }
export function useCurrent_UserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Current_UserQuery, Current_UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Current_UserQuery, Current_UserQueryVariables>(Current_UserDocument, options);
        }
export type Current_UserQueryHookResult = ReturnType<typeof useCurrent_UserQuery>;
export type Current_UserLazyQueryHookResult = ReturnType<typeof useCurrent_UserLazyQuery>;
export type Current_UserSuspenseQueryHookResult = ReturnType<typeof useCurrent_UserSuspenseQuery>;
export type Current_UserQueryResult = Apollo.QueryResult<Current_UserQuery, Current_UserQueryVariables>;
export const CreateuserDocument = gql`
    mutation CREATEUSER($userInput: CreateUserInput!) {
  createUser(createUserInput: $userInput) {
    token
    userId
    roles
    email
  }
}
    `;
export type CreateuserMutationFn = Apollo.MutationFunction<CreateuserMutation, CreateuserMutationVariables>;

/**
 * __useCreateuserMutation__
 *
 * To run a mutation, you first call `useCreateuserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateuserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createuserMutation, { data, loading, error }] = useCreateuserMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useCreateuserMutation(baseOptions?: Apollo.MutationHookOptions<CreateuserMutation, CreateuserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateuserMutation, CreateuserMutationVariables>(CreateuserDocument, options);
      }
export type CreateuserMutationHookResult = ReturnType<typeof useCreateuserMutation>;
export type CreateuserMutationResult = Apollo.MutationResult<CreateuserMutation>;
export type CreateuserMutationOptions = Apollo.BaseMutationOptions<CreateuserMutation, CreateuserMutationVariables>;