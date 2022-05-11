import React from 'react';
import { useQuery } from '../../../lib/graphql.ts';

type List = {
  label: string;
};

export function HomePage() {
  const query = `
    query {
      findAllLists {
        data {
          label
        }
      }
    }
  `;
  const { error, data, isLoading } = useQuery(query);

  if (isLoading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }

  return (
    <>
      <h1>Home</h1>
      <ul>
        {data?.findAllLists?.data?.map((list: List) => (
          <li key={list.label}>{list.label}</li>
        ))}
      </ul>
    </>
  );
}
