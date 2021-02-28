import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import Switch from "react-switch";

export function ExperienceBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  function toogleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={styles.menu}>
      <header className={styles.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: `${percentToNextLevel}%` }} />

          <span
            className={styles.currentExperience}
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience} xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
      <div className={styles.switch}>
        <Switch
          onChange={() => {
            toogleTheme();
          }}
          checked={theme === "dark"}
          checkedIcon={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <FiMoon size={13} color="#fff" />
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <FiSun size={13} color="#fff" />
            </div>
          }
        />
      </div>
    </div>
  );
}
