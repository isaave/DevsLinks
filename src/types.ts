export type Appointment = {
  id: string;
  clientName: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
};

export type Period = "manhã" | "tarde" | "noite";

export type FilterType = "all" | "specificDate";

export interface AppointmentFormValues {
  clientName: string;
  date: string;
  time: string;
}