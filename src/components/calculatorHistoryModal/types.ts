export interface ICalculatorHistoryModalProps {
    history: ICalculatorHistory[],
    isOpen: boolean,
    onClose: () => void,
    onHistoryDelete: () => void
}

export interface ICalculatorHistory {
    operation: string,
    result: string
}
