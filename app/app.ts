import Application from '@ember/application';

import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

import Resolver from 'ember-resolver';

import loadInitializers from 'ember-load-initializers';

import config from 'octane-sandbox/config/environment';

Sentry.init({
  dsn: 'https://d6d9758006964ca698fdf72dd738fa25@sentry.io/3122374',
  debug: true,
  integrations: [new Integrations.Ember()],
});

Sentry.configureScope(scope => {
  scope.setUser({ id: 'nightire', email: 'nightire@very-geek.com' });
});

class OctaneSandboxApplication extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(OctaneSandboxApplication, config.modulePrefix);

export default OctaneSandboxApplication;
