export class Question {
    id: number;
    question: string;
    optiona: string;
    optionb: string;
    optionc: string;
    optiond: string;
    answer: string;
    type: string;
  
    constructor(
      id: number,
      question: string,
      optiona: string,
      optionb: string,
      optionc: string,
      optiond: string,
      answer: string,
      type: string
    ) {
      this.id = id;
      this.question = question;
      this.optiona = optiona;
      this.optionb = optionb;
      this.optionc = optionc;
      this.optiond = optiond;
      this.answer = answer;
      this.type = type;
    }
  }
  