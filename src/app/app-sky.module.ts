import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyKeyInfoModule,
  SkyLabelModule
} from '@skyux/indicators';

import {
  SkyPageSummaryModule
} from '@skyux/layout';

import {
  SkyListModule
} from '@skyux/list-builder';

import {
  SkyListViewGridModule
} from '@skyux/list-builder-view-grids';
import { SkyModalModule } from '@skyux/modals';
import { SkyTilesModule } from '@skyux/tiles';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyI18nModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyListModule,
    SkyListViewGridModule,
    SkyModalModule,
    SkyTilesModule,
    SkyPageSummaryModule
  ]
})
export class AppSkyModule { }
