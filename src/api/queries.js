import { gql } from "@apollo/client";

export const getAllBooks = gql`
  {
    books {
      title
      image_url
    }
  }
`;
