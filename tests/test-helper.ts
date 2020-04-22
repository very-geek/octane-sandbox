import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import Application from 'octane-sandbox/app';
import config from 'octane-sandbox/config/environment';

setApplication(Application.create(config.APP));

start();
