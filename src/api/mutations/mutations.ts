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

// export const UPDATE_USER_MUTATION = gql`
//   mutation UpdateUser($id: ID!, $updateUserInput: {
//     profile: {
//       first_name: String
//       last_name: String
//     }
//     departmentId: ID
//     positionId: ID
//   }) {
//     upateUser(id: $id, user: $updateUserInput) {
//       profile: {
//         first_name: String
//         last_name: String
//       }
//       departmentId: ID
//       positionId: ID
//       }
//     }
//   }
// `;
