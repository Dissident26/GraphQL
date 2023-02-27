import { gql } from '@apollo/client';

const USER_LOGIN = 'rastsislau.kharlanau@innowise-group.com';
const USER_PASSWORD = '12345';

export const SIGN_IN_MUTATION = gql`
  mutation SignUp($login: String!, $password: String!) {
    signup(auth: { email: $login, password: $password }) {
      user {
        id
      }
      access_token
    }
  }
`;
