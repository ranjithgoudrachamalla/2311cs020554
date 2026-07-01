import { useEffect, useState } from "react";
import { Log } from "./api/logger";
import { getNotifications } from "./api/notifications";

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      try {
        const data = await getNotifications();

        setNotifications(data.notifications || []);

        Log(
          "frontend",
          "info",
          "api",
          "Notifications fetched successfully"
        );
      } catch (error) {
        Log(
          "frontend",
          "error",
          "api",
          error.message
        );
      }
    }

    loadNotifications();
  }, []);

  return (
    <div>
      <h1>Notifications App</h1>

      <p>Total Notifications: {notifications.length}</p>
    </div>
  );
}