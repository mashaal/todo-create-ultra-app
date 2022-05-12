import React, { Suspense } from 'react';
import ultraCache from 'ultra/cache';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'wouter';
import { SWRConfig } from 'swr';
// Can't put this in the importMap because SWC will cause an error on deploy.
import { Cache } from 'https://deno.land/x/ultra@v1.0.1/src/types.ts';

import { HomePage } from './components/pages/HomePage.tsx';
import { LayoutTemplate } from './components/templates/LayoutTemplate.tsx';
import { ListListPage } from './components/pages/ListListPage.tsx';
import { ListShowPage } from './components/pages/ListShowPage.tsx';
import { Loader } from './components/atoms/Loader.tsx';
import { NotFoundPage } from './components/pages/NotFoundPage.tsx';
import { ProjectListPage } from './components/pages/ProjectListPage.tsx';
import { Spinner } from './components/atoms/Spinner.tsx';
import { TagListPage } from './components/pages/TagListPage.tsx';

const options = (cache: Cache) => ({
  provider: () => ultraCache(cache),
  suspense: true,
});

const Ultra = ({ cache }: { cache: Cache }) => {
  return (
    <SWRConfig value={options(cache)}>
      <Helmet>
        <title>Ultra</title>
        <link rel='stylesheet' href='/style.css' />
      </Helmet>
      <LayoutTemplate>
        <Suspense
          fallback={
            <Loader>
              <Spinner />
            </Loader>
          }
        >
          <Switch>
            <Route path='/'>
              <HomePage />
            </Route>
            <Route path='/lists'>
              <ListListPage />
            </Route>
            <Route path='/lists/:id'>
              {({ id }) => {
                if (!id) {
                  return <NotFoundPage />;
                }

                return <ListShowPage id={id} />;
              }}
            </Route>
            <Route path='/projects'>
              <ProjectListPage />
            </Route>
            <Route path='/tags'>
              <TagListPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </LayoutTemplate>
    </SWRConfig>
  );
};

export default Ultra;
