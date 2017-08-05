import 'core-js/es7/reflect';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { renderModule } from '@angular/platform-server';
import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';

import { AppServerModule } from './app/app.module.server';

enableProdMode();

renderModule(AppServerModule, {
  document: readFileSync(resolve('dist/index.html'), 'utf8'),
  url: '/'
}).then(result => {
  writeFileSync(resolve('dist/index.html'), result);
  console.log('rendered');
});
