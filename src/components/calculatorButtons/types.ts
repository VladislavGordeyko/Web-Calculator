import { CalcButtonType, OperationType } from './enums';

export interface ICalculatorButton {
    title: string | OperationType,
    color: 'numbers' | 'functions' | 'operations',
    type: CalcButtonType
}
