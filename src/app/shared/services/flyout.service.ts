import { Injectable } from '@angular/core';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientShowFlyoutArgs } from '@blackbaud/sky-addin-client';

@Injectable({
  providedIn: 'root'
})
export class FlyoutService {
  private records: any[] = [
    { id: '1', name: 'Troy Barnes', constituentCode: 'Alumnus', latestGift: 175, status: 'Paid' },
    { id: '2', name: 'Britta Perry', constituentCode: 'Friend', latestGift: 5, status: 'Past due' },
    { id: '3', name: 'Pierce Hawthorne', constituentCode: 'Board Member', latestGift: 1500, status: 'Paid' },
    { id: '4', name: 'Annie Edison', constituentCode: 'Alumnus', latestGift: 100, status: 'Paid' },
    { id: '5', name: 'Shirley Bennett', constituentCode: 'Board Member', latestGift: 250, status: 'Paid' },
    { id: '6', name: 'Jeff Winger', constituentCode: 'Friend', latestGift: 250, status: 'Paid' },
    { id: '7', name: 'Abed Nadir', constituentCode: 'Major Donor', latestGift: 100000, status: 'Paid' }
  ];

  constructor(
    private addinClientService: AddinClientService
  ) { }

  public getRecords(): any[] {
    return this.records;
  }

  public getRecordById(id: string): any {
    return this.records.filter(record => record.id === id)[0];
  }

  public showFlyoutForRecord(record: any) {
    const flyoutArgs: AddinClientShowFlyoutArgs = {
      url: 'https://host.nxt.blackbaud.com/addin-flyout-demo/flyout-detail',
      permalink: {
        label: 'View record',
        url: 'https://host.nxt.blackbaud.com/addin-flyout-demo/flyout-detail/' + record.id
      },
      showIterator: true,
      iteratorPreviousDisabled: FlyoutService.isFirstElementInArray(record.id, this.records),
      iteratorNextDisabled: FlyoutService.isLastElementInArray(record.id, this.records),
      defaultWidth: 500,
      maxWidth: 800,
      minWidth: 200,
      context: {
        data: record
      }
    };

    this.addinClientService.showFlyout(flyoutArgs);
  }

  public showFlyoutForNextRecord(currentRecordId: string) {
    const next: any = FlyoutService.stepToItemInArray(this.records, currentRecordId, 1);
    this.showFlyoutForRecord(next);
  }

  public showFlyoutForPreviousRecord(currentRecordId: string) {
    const previous: any = FlyoutService.stepToItemInArray(this.records, currentRecordId, -1);
    this.showFlyoutForRecord(previous);
  }

  private static isFirstElementInArray(id: any, array: any[]) {
    const element = array.find(x => x.id === id);
    if (array[0] === element) {
      return true;
    }
    return false;
  }

  private static isLastElementInArray(id: any, array: any[]) {
    const element = array.find(x => x.id === id);
    if (array[array.length - 1] === element) {
      return true;
    }
    return false;
  }

  private static stepToItemInArray(array: Array<any>, currentId: string, step: number) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === currentId) {
        return array[i + step];
      }
    }
  }
}
