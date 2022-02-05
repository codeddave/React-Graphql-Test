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
      rating
      likes
      price
      available_copies
      full_description
      featured
      genres
      subtitle
    }
  }
`;
