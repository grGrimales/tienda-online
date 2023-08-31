import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaTimesCircle } from "react-icons/fa";
export const Alert = ({ type, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  let bgColor, textColor, icon;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, 2000000); // 2 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  switch (type) {
    case "success":
      bgColor = "bg-green-500";
      textColor = "text-white";
      icon = "✅";
      break;
    case "warning":
      bgColor = "bg-yellow-500";
      textColor = "text-black";
      icon = "⚠️";
      break;
    case "error":
      bgColor = "bg-red-500";
      textColor = "text-white";
      icon = "❌";
      break;
    default:
      bgColor = "bg-gray-500";
      textColor = "text-white";
      icon = "ℹ️";
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative -top-28">
    <div
      className={`p-3 rounded ${bgColor} ${textColor} absolute w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4  right-2 flex gap-4`}
    >
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-lg cursor-pointer"
      >
        <FaTimesCircle />
      </button>
      <div className="flex items-center">
        <span className="mr-2 text-lg">{icon}</span>
        <span>{message}</span>
      </div>
    </div>
  </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "warning", "error"]).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};
