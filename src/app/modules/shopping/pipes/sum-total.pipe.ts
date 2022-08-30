import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumTotal',
})
export class SumTotalPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (Array.isArray(value)) {
      // isArray
      let total = value
        .map((i) => {
          // price * quantity
          let qty = Number(i.quantity);
          let price = parseFloat(i.product.price);
          if (qty && price) {
            return qty * price;
          }
          return null;
          // [10,200,300,0,undefined]
        })
        .filter((i) => i)
        .reduce((acc: any, currentValue: any) => {
          return acc + currentValue;
        }, 0);

      return total;
    }

    return value;
  }
}
