import { GetServerSideProps } from "next";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styles from "../styles/components/Login.module.css";

export default function Home(props) {
  const [userName, setUserName] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleSingIn = async () => {
    signIn(userName);
  };
  return (
    <>
      <div className={styles.container}>
        <section>
          <header>
            <img src="/logo-full-white.svg" alt="Move.it" />
          </header>
          <strong>Bem Vindo</strong>
          <p>
            <img src="/icons/github.svg" alt="Github" />
            Faça login com seu Github para começar
          </p>
          <div>
            <input
              type="text"
              placeholder="Digite seu username"
              onChange={(e) => setUserName(e.target.value.trim())}
            />
            <button type="button" disabled={!userName} onClick={handleSingIn}>
              <img src="/icons/arrow-log.svg" alt="Entrar" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user } = ctx.req.cookies;
  if (user !== undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return {
    props: {},
  };
};
