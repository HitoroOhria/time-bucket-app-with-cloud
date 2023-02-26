type NewExampleArgs = {
  text: string;
  uppercase?: string;
};

export class Example {
  public text: string;

  public uppercase?: string;

  constructor(args: NewExampleArgs) {
    this.text = args.text;
    this.uppercase = args.uppercase;
  }
}
