import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  currentnumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondnumber = false;
  public getnumber(v: string) {
    console.log(v);
    if (this.waitForSecondnumber) {
      this.currentnumber = v;
      this.waitForSecondnumber = false;
    } else {
      this.currentnumber === '0'
        ? (this.currentnumber = v)
        : (this.currentnumber += v);
    }
  }
  getDecimal() {
    if (!this.currentnumber.includes('.')) {
      this.currentnumber += '.';
    }
  }
  private doCalculation(op, secondOp) {
    switch (op) {
      case '+':
        return (this.firstOperand += secondOp);
      case '-':
        return (this.firstOperand -= secondOp);
      case '*':
        return (this.firstOperand *= secondOp);
      case '/':
        return (this.firstOperand /= secondOp);
      case '=':
        return secondOp;
    }
  }
  public getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentnumber);
    } else if (this.operator) {
      const result = this.doCalculation(
        this.operator,
        Number(this.currentnumber)
      );
      this.currentnumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondnumber = true;

    console.log(this.firstOperand);
  }
  public clear() {
    this.currentnumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondnumber = false;
  }
}
