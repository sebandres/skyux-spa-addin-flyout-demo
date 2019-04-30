import {
  Component,
  OnInit
} from '@angular/core';
import { FlyoutService } from '../shared/services/flyout.service';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs, AddinTileSummaryStyle } from '@blackbaud/sky-addin-client';

@Component({
  selector: 'my-tile',
  templateUrl: './my-tile.component.html',
  styleUrls: ['./my-tile.component.scss']
})
export class MyTileComponent implements OnInit {
  public records: any;

  constructor(
    private flyoutSvc: FlyoutService,
    private addinClientService: AddinClientService
  ) { }

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {

      args.ready({
        showUI: true,
        title: 'My Flyout tile',
        tileConfig: {
          summaryStyle: AddinTileSummaryStyle.Check,
          summaryChecked: true
        }
      });
    });

    this.records = this.flyoutSvc.getRecords();
  }

  public onNameClick(record: any): void {
    this.flyoutSvc.showFlyoutForRecord(record);
  }
}
