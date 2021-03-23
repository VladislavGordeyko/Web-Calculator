/* eslint-disable import/prefer-default-export */
import { CalcButtonType, CalculatorFunctionType, OperationType } from './enums';
import { ICalculatorButton } from './types';

export const buttons: ICalculatorButton[] = [
  {
    title: CalculatorFunctionType.clear,
    color: 'functions',
    type: CalcButtonType.function,
  },
  {
    title: CalculatorFunctionType.pm,
    color: 'functions',
    type: CalcButtonType.function,
  },
  {
    title: CalculatorFunctionType.percent,
    color: 'functions',
    type: CalcButtonType.function,
  },
  {
    title: OperationType.devide,
    color: 'operations',
    type: CalcButtonType.operation,
  },
  {
    title: '7',
    color: 'numbers',
    type: CalcButtonType.number,
  },
  {
    title: '8',
    color: 'numbers',
    type: CalcButtonType.number,
  },
  {
    title: '9',
    color: 'numbers',
    type: CalcButtonType.number,
  },
  {
    title: OperationType.miltiply,
    color: 'operations',
    type: CalcButtonType.operation,
  },
  {
    title: '4',
    color: 'numbers',
    type: CalcButtonType.number,
  },
  {
    title: '5',
    color: 'numbers',
    type: CalcButtonType.number,
  },
  {
    title: '6',
    color: 'numbers',
    type: CalcButtonType.number,
  },
  {
    title: OperationType.substraction,
    color: 'operations',
    type: CalcButtonType.operation,
  },
  {
    title: '1',
    color: 'numbers',
    type: CalcButtonType.number,
  },
  {
    title: '2',
    color: 'numbers',
    type: CalcButtonType.number,
  },
  {
    title: '3',
    color: 'numbers',
    type: CalcButtonType.number,
  },
  {
    title: OperationType.sum,
    color: 'operations',
    type: CalcButtonType.operation,
  },
  {
    title: '0',
    color: 'numbers',
    type: CalcButtonType.number,
  },
  {
    title: 'H',
    color: 'numbers',
    type: CalcButtonType.history,
  },
  {
    title: CalculatorFunctionType.float,
    color: 'functions',
    type: CalcButtonType.function,
  },
  {
    title: OperationType.equal,
    color: 'operations',
    type: CalcButtonType.operation,
  },
];
