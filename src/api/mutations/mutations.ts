import { gql } from '@apollo/client';

export const SIGN_IN_MUTATION = gql`
  mutation SignUp($login: String!, $password: String!) {
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
