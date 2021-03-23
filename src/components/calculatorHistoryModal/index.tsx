import React from 'react';
import Modal from 'react-modal';
import { ICalculatorHistoryModalProps } from './types';
import './index.css';
import Button from '../button';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
  },
};

Modal.setAppElement('#root');

const CalculatorHistoryModal: React.FC<ICalculatorHistoryModalProps> = (
  {
    history, isOpen, onClose, onHistoryDelete,
  } : ICalculatorHistoryModalProps,
) => (
  <Modal
    onRequestClose={onClose}
    isOpen={isOpen}
    style={customStyles}
    contentLabel="Calculator History"
  >
    <div>
      <span className="header">Calculator History</span>
      <div className="calculator-history">
        {history.length > 0 ? history.map((item, idx) => <p key={idx.toString()}>{`${item.operation} = ${item.result}`}</p>)
          : <p>There is no history</p>}
      </div>
      <div className="footer">
        <Button
          onClick={onClose}
          title="Back"
          type="default"
        />
        <Button
          onClick={onHistoryDelete}
          title="Clear History"
          type="default"
          disabled={history.length === 0}
        />
      </div>
    </div>
  </Modal>
);

export default CalculatorHistoryModal;
