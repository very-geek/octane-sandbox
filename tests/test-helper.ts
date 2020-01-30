import { setApplication } from '@ember/test-helpers';

import Application from 'octane-sandbox/app';

import { start } from 'ember-qunit';

import config from 'octane-sandbox/config/environment';

setApplication(Application.create(config.APP));

start();
