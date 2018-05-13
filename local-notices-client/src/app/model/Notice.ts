export class Notice {
  private validFrom: Date;
  private validUntil: Date;
  private text: string;

  constructor(text: string, validFrom: Date, validUntil: Date) {
    this.text = text;
    this.validFrom = validFrom;
    this.validUntil = validUntil;
  }
}
