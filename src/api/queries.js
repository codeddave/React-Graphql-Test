import { gql } from "@apollo/client";

export const getAllBooks = gql`
  {
    books {
      id
      title
      image_url
      rating
      likes
      price
      available_copies
      full_description
      featured
      number_of_purchases
      authors {
        name
        id
      }
      tags {
        name
        id
      }
      publisher
      genres {
        name
        id
      }
      subtitle
    }
  }
`;

export const getBook = gql`
  query getBook($id: ID!) {
    book(id: $id) {
      id
      title
      image_url
      rating
      likes
      price
      available_copies
      full_description
      featured
      number_of_purchases
      authors {
        name
        id
      }
      tags {
        name
        id
      }
      publisher
      genres {
        name
        id
      }
      subtitle
    }
  }
`;
