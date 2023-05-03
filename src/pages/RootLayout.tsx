import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import styles from "./RootLayout.module.css";

export function RootLayout() {
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
}
