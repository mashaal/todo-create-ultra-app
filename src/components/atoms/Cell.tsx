import React, { ComponentType } from 'react';

export type CellComponentFetchResult = {
  // deno-lint-ignore no-explicit-any
  error?: any;
  // deno-lint-ignore no-explicit-any
  data?: any;
};
export type CellComponentFetch = () => CellComponentFetchResult;

export type CellComponent = {
  request: CellComponentFetch;
  loading: ComponentType;
  failure: ComponentType<{
    error: CellComponentFetchResult['error'];
  }>;
  success: ComponentType<{
    data: CellComponentFetchResult['data'];
  }>;
};

export type CellProps = {
  component: CellComponent;
};

export function Cell({ component }: CellProps) {
  const { request, loading: Loading, failure: Failure, success: Success } =
    component;

  const { error, data } = request();

  if (!error && !data) {
    return <Loading />;
  }

  if (error) {
    return <Failure error={error} />;
  }

  return <Success data={data} />;
}
