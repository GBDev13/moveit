import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../styles/pages/404Page";

export default function Page404() {
  const router = useRouter();

  return (
    <Container>
      <img src="assets/404page.svg" alt="Erro 404"/>
      <p>Parece que essa página não existe</p>
      <button onClick={() => router.push("/")}>Voltar ao início</button>
    </Container>
    )
}