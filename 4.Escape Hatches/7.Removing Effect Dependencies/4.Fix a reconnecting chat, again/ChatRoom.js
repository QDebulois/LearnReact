import { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from "./chat.js";
import { showNotification } from "./notifications.js";

export default function ChatRoom({ roomId, isEncrypted, isDark }) {
  const popNotification = useEffectEvent((msg) =>
    showNotification("New message: " + msg, isDark ? "dark" : "light")
  );

  useEffect(() => {
    const serverUrl = "https://localhost:1234";
    let connection;
    if (isEncrypted) {
      connection = createEncryptedConnection({serverUrl, roomId});
    } else {
      connection = createUnencryptedConnection({serverUrl, roomId});
    }
    connection.on("message", (msg) => popNotification(msg));
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
