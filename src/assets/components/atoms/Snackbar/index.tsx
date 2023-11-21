import React, { useState, useEffect } from 'react';
import { SnackbarWrapper } from './styles';

interface SnackbarProps {
  message: string;
}

const Snackbar: React.FC<SnackbarProps> = ({ message }) => {
  const [messageType, setMessageType] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const resetState = () => {
      setMessageType('');
      setContent('');
    };

    if (message.toLowerCase().includes('error')) {
      setMessageType('error');
    } else if (message.toLowerCase().includes('ok')) {
      setMessageType('success');
    }

    try {
      const jsonMessage = JSON.parse(message);
      if (Object.prototype.hasOwnProperty.call(jsonMessage, 'Ok')) {
        setContent(jsonMessage.Ok);
      } else if (Object.prototype.hasOwnProperty.call(jsonMessage, 'Error')) {
        setContent(jsonMessage.Error);
      }
    } catch (error) {
      setContent(message);
    }

    const timer = setTimeout(resetState, 5000);

    return () => {
      clearTimeout(timer);
      resetState();
    };
  }, [message]);


  return content ? (
    <SnackbarWrapper className={`${messageType}`}>
      <p>{content}</p>
    </SnackbarWrapper>
  ) : null;
};

export default Snackbar;