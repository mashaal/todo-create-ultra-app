import 'https://deno.land/x/xhr@0.1.2/mod.ts';

import React from 'react';
import ultraCache from 'ultra/cache';
import { Helmet } from 'react-helmet';
import { QueryClientProvider } from 'react-query';
import { Route, Switch } from 'wouter';
import { SWRConfig } from 'swr';
// Can't put this in the importMap because SWC will cause an error on deploy.
import { Cache } from 'https://deno.land/x/ultra@v1.0.1/src/types.ts';

import { HomePage } from './components/pages/HomePage/HomePage.tsx';
import { LayoutTemplate } from './components/templates/LayoutTemplate/LayoutTemplate.tsx';
import { queryClient } from './lib/graphql.ts';
import { ListListPage } from './components/pages/ListListPage/ListListPage.tsx';
import { ListShowPage } from './components/pages/ListShowPage/ListShowPage.tsx';

const options = (cache: Cache) => ({
  provider: () => ultraCache(cache),
  suspense: true,
});

const Ultra = ({ cache }: { cache: Cache }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SWRConfig value={options(cache)}>
        <Helmet>
          <title>Ultra</title>
          <link rel='stylesheet' href='/normalize.css' />
          <link rel='stylesheet' href='/style.css' />
        </Helmet>
        <LayoutTemplate>
          <Switch>
            <Route path='/'>
              <HomePage />
            </Route>
            <Route path='/list'>
              <ListListPage />
            </Route>
            <Route path='/list/:id'>
              {({ id }) => <ListShowPage id={id} />}
            </Route>
            {
              /* <Route path='/list/:id/update'>
              <ListUpdatePage />
            </Route>
            <Route path='/list/:id/remove'>
              <ListRemovePage />
            </Route> */
            }
            <Route>
              <strong>404</strong>
            </Route>
          </Switch>
        </LayoutTemplate>
      </SWRConfig>
    </QueryClientProvider>
  );
};

export default Ultra;

// <Route path='/list'>
//   <ListListPage />
// </Route>
// <Route path='/list/:slug'>
//   <ListShowPage />
// </Route>
// <Route path='/list/:slug/update'>
//   <ListUpdatePage />
// </Route>
// <Route path='/list/:slug/remove'>
//   <ListRemovePage />
// </Route>
// <Route path='/project'>
//   <ProjectListPage />
// </Route>
// <Route path='/project/:slug'>
//   <ProjectShowPage />
// </Route>
// <Route path='/project/:slug/update'>
//   <ProjectUpdatePage />
// </Route>
// <Route path='/project/:slug/remove'>
//   <ProjectRemovePage />
// </Route>
// <Route path='/tag'>
//   <TagListPage />
// </Route>
// <Route path='/tag/:slug'>
//   <TagShowPage />
// </Route>
// <Route path='/tag/:slug/update'>
//   <TagUpdatePage />
// </Route>
// <Route path='/tag/:slug/remove'>
//   <TagRemovePage />
// </Route>
