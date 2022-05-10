import React from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';

const FAUNADB_KEY = Deno.env.get('FAUNADB_KEY');

const headers = new Headers();
headers.set('Authorization', `Bearer ${FAUNADB_KEY}`);

const fetcher = (query: string) => {
  return request('https://graphql.fauna.com/graphql', query, {}, headers);
};

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
  const { error, data } = useSWR(query, fetcher);

  if (error || !data?.findAllLists?.data) {
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
        {data.findAllLists.data.map((list: List) => (
          <li key={list.label}>{list.label}</li>
        ))}
      </ul>
    </>
  );
}
