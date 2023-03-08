import { gql } from '@apollo/client';

export const SIGN_IN_MUTATION = gql`
  mutation signUp($login: String!, $password: String!) {
    signup(auth: { email: $login, password: $password }) {
      user {
        id
        profile {
          full_name
          avatar
        }
      }
      access_token
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      id
      created_at
      email
      profile {
        first_name
        last_name
        full_name
        avatar
      }
      department {
        id
        created_at
        name
      }
      department_name
      position {
        id
        created_at
        name
      }
      role
    }
  }
`;
