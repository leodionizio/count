export class GastoModel {

  constructor(
    public id: number,
    public description: string,
    public value: number,
    public date: string,
    public parcel: number,
    public category: number
  ) { }
}
