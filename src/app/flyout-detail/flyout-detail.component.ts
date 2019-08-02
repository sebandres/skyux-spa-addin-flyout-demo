import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { FlyoutService } from '../shared/services/flyout.service';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs } from '@blackbaud/sky-addin-client';
import { SkyModalService } from '@skyux/modals';
import { SampleModalComponent } from '../sample-modal/sample-modal.component';

@Component({
  selector: 'flyout-detail',
  templateUrl: './flyout-detail.component.html'
})
export class FlyoutDetailComponent implements OnInit {
  @Input()
  public id: string;
  public record: any;

  constructor(
    private flyoutSvc: FlyoutService,
    private addinClientService: AddinClientService,
    private modal: SkyModalService
  ) { }

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.record = args.context.data;
    });

    if (this.id) {
      this.record = this.flyoutSvc.getRecordById(this.id);
    }
  }

  public openModal(): void {
    const options: any = {
    };

    let modalInstanceType: any = SampleModalComponent;

    this.modal.open(modalInstanceType, options);

  }
}
