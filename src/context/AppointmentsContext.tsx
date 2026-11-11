import React, { createContext, useContext, useState } from "react";
import type { Appointment } from "../types";

type FilterType = "all" | "specificDate";

type AppointmentsContextProps = {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  deleteAppointment: (id: string) => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  filteredAppointments: Appointment[];
  periods: {
    manhã: Appointment[];
    tarde: Appointment[];
    noite: Appointment[];
  };
  emptyStateMessages: {
    manhã: string;
    tarde: string;
    noite: string;
  };
};

const AppointmentsContext = createContext<AppointmentsContextProps | undefined>(undefined);

export const AppointmentsProvider = ({ children }: { children: React.ReactNode }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  const addAppointment = (appointment: Appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  const deleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  // Group appointments by period based on time
  const periods = {
    manhã: appointments.filter(
      (a) => {
        const hour = parseInt(a.time.split(":")[0], 10);
        return hour >= 9 && hour < 12;
      }
    ),
    tarde: appointments.filter(
      (a) => {
        const hour = parseInt(a.time.split(":")[0], 10);
        return hour >= 13 && hour < 18;
      }
    ),
    noite: appointments.filter(
      (a) => {
        const hour = parseInt(a.time.split(":")[0], 10);
        return hour >= 19 && hour < 21;
      }
    ),
  };

  const emptyStateMessages = {
    manhã: "Nenhum agendamento para a manhã",
    tarde: "Nenhum agendamento para a tarde",
    noite: "Nenhum agendamento para a noite",
  };

  // Filter appointments by date or show all
  const filteredAppointments =
    filter === "all"
      ? appointments
      : appointments.filter((a) => a.date === filter);

  const value = {
    appointments,
    addAppointment,
    deleteAppointment,
    filter,
    setFilter,
    filteredAppointments,
    periods,
    emptyStateMessages,
  };

  return (
    <AppointmentsContext.Provider value={value}>{children}</AppointmentsContext.Provider>
  );
};

export const useAppointments = (): AppointmentsContextProps => {
  const context = useContext(AppointmentsContext);
  if (!context) {
    throw new Error("useAppointments must be used within AppointmentsProvider");
  }
  return context;
};