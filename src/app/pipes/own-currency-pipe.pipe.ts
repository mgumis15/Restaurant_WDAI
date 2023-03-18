import { Pipe, PipeTransform } from '@angular/core'
import { CurrencyPipe } from '@angular/common'
@Pipe({
  name: 'ownCurrencyPipe'
})
export class OwnCurrencyPipePipe extends CurrencyPipe implements PipeTransform {
  override transform(value: any, ...args: any[]): any {
    switch (args[0]) {
      case 'EUR':
        return super.transform(Math.floor(value * (1 / 5) * 100) / 100, args[0])
      case 'USD':
        return super.transform(Math.floor(value * (1 / 4) * 100) / 100, args[0])
      default:
        return super.transform(value, 'PLN')
    }
  }

}
