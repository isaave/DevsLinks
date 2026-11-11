// @ts-ignore
import React from "react";
import { AppointmentsProvider } from "./context/AppointmentsContext";
import { AppointmentForm } from "./components/AppointmentForm";
import "./index.css";

function App() {
  return (
    <AppointmentsProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        <nav className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-2xl dark:bg-gray-800">
          <ul className="py-4">
            <li className="px-6 py-2 text-lg font-medium hover:text-blue-600">
              Início
            </li>
            <li className="px-6 py-2 text-lg font-medium hover:text-blue-600">
              Agenda
            </li>
          </ul>
        </nav>

        <main className="ml-64 p-8">
          <h1 className="text-3xl font-bold mb-6">HairDay - Agendamentos</h1>

          <AppointmentForm />

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {["manhã", "tarde", "noite"].map((period) => (
              <div key={period} className="p-6 rounded-lg border">
                <h2 className="text-xl font-medium mb-4">
                  {period === "manhã"
                    ? "Manhã (09:00 - 12:00)"
                    : period === "tarde"
                    ? "Tarde (13:00 - 18:00)"
                    : "Noite (19:00 - 21:00)"
                  }
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nenhum agendamento
                </p>

                <ul className="mt-4 space-y-2">
                  <li className="text-xs text-gray-500">Agendamentos aparecerão aqui</li>
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    </AppointmentsProvider>
  );
}

export default App;