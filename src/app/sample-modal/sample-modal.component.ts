import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { SkyModalInstance } from '@skyux/modals';

@Component({
  selector: 'sample-modal',
  templateUrl: './sample-modal.component.html'
})
export class SampleModalComponent implements OnInit {
  @Input()
  public id: string;
  public record: any;

  constructor(
    private readonly modal: SkyModalInstance
  ) { }

  public ngOnInit() {
  }

  public onCancel() {
    this.modal.cancel({});
  }
}
