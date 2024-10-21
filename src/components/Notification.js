import React from 'react';
import { useNotification } from '../context/NotificationContext';

const Notification = () => {
  const { notification } = useNotification();

  if (!notification) return null;

  const bgColor = notification.type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded-md shadow-lg`}>
      {notification.message}
    </div>
  );
};

export default Notification;
