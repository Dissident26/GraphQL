import { gql } from '@apollo/client';

const USER_LOGIN = 'rastsislau.kharlanau@innowise-group.com';
const USER_PASSWORD = '12345';

export const LOG_IN_QUERY = gql`
  query LogIn($login: String!, $password: String!) {
    login(auth: { email: $login, password: $password }) {
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

export const USERS_QUERY = gql`
  query getUsers {
    users {
      id
      email
      department_name
      position_name
      profile {
        avatar
        first_name
        last_name
      }
    }
  }
`;
