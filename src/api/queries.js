import { gql } from "@apollo/client";

export const getAllBooks = gql`
  {
    books {
      title
      image_url
    }
  }
`;

export const getBook = gql`
  query getBook($id: ID!) {
    book(id: $id) {
      title
      image_url
    }
  }
`;
