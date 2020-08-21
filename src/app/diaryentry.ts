export class Diaryentry {
  showentry:boolean;
  constructor(
    public id: number,
    public title: string,
    public entry: string,
    public entrydate: Date

  ){
    this.showentry = false;
  }
}

