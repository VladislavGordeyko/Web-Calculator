/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Button from '../button';
import './index.css';
import {
  devide, multiply, subtraction, sum,
} from '../../utils/operations';
import CalculatorHistoryModal from '../calculatorHistoryModal';
import { getFromLS, setToLS } from '../../utils/storage';
import {
  ICalculatorButton,
} from './types';
import { CalcButtonType, CalculatorFunctionType, OperationType } from './enums';
import { buttons } from './buttonObject';
import { ICalculatorHistory } from '../calculatorHistoryModal/types';

const CalculatorButtons: React.FC = () => {
  const [result, setResult] = useState<string>('0');
  const [secondNumber, setSecondNumber] = useState<string>('0');
  const [lastNumber, setLastNumber] = useState<string>('0');
  const [calcHist, setCalcHist] = useState<ICalculatorHistory[]>([]);
  const [isHistoryShown, setIsHistoryShown] = useState(false);

  const [operationInUse, setOperationInUse] = useState<string>('');

  const buttonOperate = (button:ICalculatorButton) => {
    switch (button.type) {
      case CalcButtonType.function: onFunctionPress(button.title);
        break;
      case CalcButtonType.operation: onOperatorPress(button.title);
        break;
      case CalcButtonType.number: onNumberPress(button.title);
        break;
      case CalcButtonType.history: setIsHistoryShown(true);
        break;
      default:
    }
  };

  const calculate = (a: number, b: number) : number => {
    switch (operationInUse) {
      case OperationType.sum: return sum(a, b);
      case OperationType.substraction: return subtraction(a, b);
      case OperationType.miltiply: return multiply(a, b);
      case OperationType.devide: return devide(a, b);
      case OperationType.equal: return a;
      default: return a;
    }
  };

  const clear = () => {
    setResult('0');
    setToLS('currentValue', 0);
    setSecondNumber('0');
    setOperationInUse('');
  };

  const onFunctionPress = (fn: string) => {
    const number = parseFloat(result);
    switch (fn) {
      case CalculatorFunctionType.clear: clear();
        break;
      case CalculatorFunctionType.percent: setResult((number * 0.01).toString());
        break;
      case CalculatorFunctionType.pm: setResult((number * -1).toString());
        break;
      case CalculatorFunctionType.float: setFloat();
        break;
      default:
    }
  };

  const setFloat = () => {
    if (operationInUse !== '') {
      if (secondNumber.indexOf('.') === -1) {
        setSecondNumber(`${secondNumber}.`);
      }
    } else if (result.indexOf('.') === -1) {
      setResult(`${result}.`);
    }
  };

  const calculateNumbers = (a: string, b: string, operator: string) => {
    const number = parseFloat(a);
    const res = Number(calculate(number, parseFloat(b)).toPrecision(10));
    setResult(res.toString());
    setSecondNumber('0');
    setCalcHist([...calcHist, { operation: `${a} ${operator} ${b}`, result: res.toString() }]);
    setToLS('calculatorHistory', [...calcHist, { operation: `${a} ${operator} ${b}`, result: res.toString() }]);
    setToLS('currentValue', res);
  };

  const onOperatorPress = (operation: string) => {
    if (operation !== OperationType.equal) {
      setOperationInUse(operation);
      if (operationInUse && operation !== operationInUse && secondNumber !== '0') {
        setLastNumber(secondNumber);
        calculateNumbers(result, secondNumber, operationInUse);
      }
    } else if (secondNumber !== '0') {
      setLastNumber(secondNumber);
      calculateNumbers(result, secondNumber, operationInUse);
    } else if (operationInUse) {
      calculateNumbers(result, lastNumber, operationInUse);
    }
  };

  const onNumberPress = (num: string) => {
    if (operationInUse !== '') {
      if (secondNumber + num !== '00') {
        if (secondNumber === '0') {
          setSecondNumber(num);
        } else if (secondNumber.length !== 9) {
          setSecondNumber(secondNumber + num);
        }
      }
    } else if (result + num !== '00') {
      if (result === '0') {
        setResult(num);
      } else if (result.length !== 9) {
        setResult(result + num);
      }
    }
  };

  const getHistory = () => {
    const history = getFromLS('calculatorHistory');
    if (history) {
      setCalcHist(history);
    }
  };

  useEffect(() => {
    getHistory();
    const value = getFromLS('currentValue').toString();
    if (value) {
      setResult(value);
    }
  }, []);

  return (
    <div className="buttons-container">
      <CalculatorHistoryModal
        isOpen={isHistoryShown}
        history={calcHist}
        onClose={() => setIsHistoryShown(false)}
        onHistoryDelete={() => { setToLS('calculatorHistory', []); getHistory(); }}
      />
      <div className={`
      result 
      ${result.length > 9 && 'result-x'}`}
      >
        { secondNumber !== '0' ? parseFloat(secondNumber)
          : (result.length < 9 ? parseFloat(result) : parseFloat(result).toPrecision(9)) }
      </div>
      <div className="wrapper">
        {buttons.map((item) => (
          <div className="button-flex" key={item.title}>
            <Button
              title={item.title}
              color={item.color}
              onClick={() => buttonOperate(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorButtons;
