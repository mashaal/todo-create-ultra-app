import React from 'react';
import ultraCache from 'ultra/cache';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'wouter';
import { SWRConfig } from 'swr';
// Can't put this in the importMap because SWC will cause an error on deploy.
import { Cache } from 'https://deno.land/x/ultra@v1.0.1/src/types.ts';

import { HomePage } from './components/pages/home/HomePage.tsx';
import { LayoutTemplate } from './components/templates/LayoutTemplate/LayoutTemplate.tsx';

const options = (cache: Cache) => ({
  provider: () => ultraCache(cache),
  suspense: true,
});

const Ultra = ({ cache }: { cache: Cache }) => {
  return (
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
          <Route>
            <strong>404</strong>
          </Route>

          {
            /* <Route path='/list'>
            <ListListPage />
          </Route>
          <Route path='/list/:slug'>
            <ListShowPage />
          </Route>
          <Route path='/list/:slug/update'>
            <ListUpdatePage />
          </Route>
          <Route path='/list/:slug/remove'>
            <ListRemovePage />
          </Route>
          <Route path='/project'>
            <ProjectListPage />
          </Route>
          <Route path='/project/:slug'>
            <ProjectShowPage />
          </Route>
          <Route path='/project/:slug/update'>
            <ProjectUpdatePage />
          </Route>
          <Route path='/project/:slug/remove'>
            <ProjectRemovePage />
          </Route>
          <Route path='/tag'>
            <TagListPage />
          </Route>
          <Route path='/tag/:slug'>
            <TagShowPage />
          </Route>
          <Route path='/tag/:slug/update'>
            <TagUpdatePage />
          </Route>
          <Route path='/tag/:slug/remove'>
            <TagRemovePage />
          </Route> */
          }
        </Switch>
      </LayoutTemplate>
    </SWRConfig>
  );
};

export default Ultra;
