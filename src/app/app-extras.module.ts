import {
  NgModule
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';
import { SampleModalComponent } from './sample-modal/sample-modal.component';
import { SkyAddinExternalTileComponent, SkyAddinModule } from '@blackbaud-internal/skyux-lib-addin-host';
import { HelpWidgetService } from '@blackbaud/skyux-lib-help';

@NgModule({
  imports: [SkyAddinModule],
  exports: [
    AppSkyModule
  ],
  providers: [
    AddinClientService,
    HelpWidgetService
  ],
  entryComponents: [SampleModalComponent, SkyAddinExternalTileComponent]
})
export class AppExtrasModule { }
