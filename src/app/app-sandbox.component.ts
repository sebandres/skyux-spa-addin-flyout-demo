import { Component } from '@angular/core';
import {
  SkyAddinExternalTileComponent,
  SkyAddinCreateAddinConfig
} from '@blackbaud-internal/skyux-lib-addin-host';
import {
  SkyTileDashboardConfig
} from '@skyux/tiles';

@Component({
  selector: 'app-sandbox',
  templateUrl: './app-sandbox.component.html',
  styleUrls: ['./app-sandbox.component.scss']
})
export class AppSandboxComponent {
  public dashboardConfig: SkyTileDashboardConfig;

  constructor(
  ) {
    this.dashboardConfig = {
      tiles: [
        {
          id: 'configuration-tile',
          componentType: SkyAddinExternalTileComponent,
          providers: [
            {
              provide: SkyAddinCreateAddinConfig,
              useFactory: () => {
                return <SkyAddinCreateAddinConfig>{
                  addinMetadata: {
                    id: 'MyTile',
                    url:
                      'https://host.nxt.blackbaud.com/addin-flyout-demo/my-tile'
                  },
                  isModal: false
                };
              }
            }
          ]
        }
      ],
      layout: {
        singleColumn: {
          tiles: [
            {
              id: 'configuration-tile',
              isCollapsed: false
            }
          ]
        },
        multiColumn: [
          {
            tiles: [
              {
                id: 'configuration-tile',
                isCollapsed: false
              }
            ]
          }
        ]
      }
    };
  }
}
