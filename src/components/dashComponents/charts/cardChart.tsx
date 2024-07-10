import React from 'react';

interface CardProps {
  titulo: string;
  value: string;
}

export default function Card({ titulo, value }: CardProps) {
  return (
    <div className=" flex flex-col items-center justify-around  bg-white shadow-lg rounded-lg p-4 dark:bg-gray-900">
      <div className="text-lg font-semibold text-black dark:text-white">{titulo}</div>
      <div className="text-2xl font-bold text-center text-black dark:text-white mt-2">{value}</div>
    </div>
  );
}
