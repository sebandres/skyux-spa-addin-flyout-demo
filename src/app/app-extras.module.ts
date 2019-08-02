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

@NgModule({
  exports: [
    AppSkyModule
  ],
  providers: [
    AddinClientService
  ],
  entryComponents: [SampleModalComponent]
})
export class AppExtrasModule { }
