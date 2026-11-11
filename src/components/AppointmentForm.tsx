import React, { useState } from "react";
import { useAppointments } from "../context/AppointmentsContext";

type AppointmentFormProps = {};

export const AppointmentForm: React.FC<AppointmentFormProps> = () => {
  const { addAppointment } = useAppointments();
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.preventDefault();
    if (!clientName.trim() || !date || !time) return;

    const newAppointment = {
      id: Math.random().toString(36).substr(2, 9),
      clientName: clientName.trim(),
      date,
      time,
    };

    addAppointment(newAppointment);
    setClientName("");
    setDate("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md bg-white p-6 rounded-lg shadow dark:bg-gray-800">
      <h2 className="text-xl font-medium mb-6">Novo Agendamento</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nome do Cliente</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Data (YYYY-MM-DD)</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Horário (HH:MM)</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Agendar
        </button>
      </div>
    </form>
  );
};
