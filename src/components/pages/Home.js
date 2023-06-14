import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.subcontainer}>
        <h1>
          Bem vindo ao <span>IA System</span>
        </h1>
        <p>Comece seu plano agora mesmo!</p>
      </div>
      <div className={styles.firstmodal}>
        <span>BÁSICO</span>
        <ul className={styles.containerfirstlist}>
          <li> APP PARA OS CLIENTES</li>
          <li> PAGAMENTOS INTERNOS</li>
          <li> EMISSÃO DE NOTA FISCAL</li>
        </ul>
        <span>R$89,90</span>
      </div>
      <div className={styles.secondmodal}>
        <span>PADRÃO</span>
        <ul className={styles.containersecondlist}>
          <li> APP PARA OS CLIENTES</li>
          <li> PAGAMENTOS INTERNOS</li>
          <li> EMISSÃO DE NOTA FISCAL</li>
          <li> GESTÃO DE ESTOQUE</li>
          <li> ANÁLISE FINANCEIRA</li>
          <li> EMISSÃO DE NOTA FISCAL;</li>
        </ul>
        <span>R$109,90</span>
      </div>
      <div className={styles.thirdmodal}>
        <span>PREMIUM</span>
        <ul className={styles.containerthirdlist}>
          <li> APP PARA OS CLIENTES</li>
          <li> PAGAMENTOS INTERNOS</li>
          <li> EMISSÃO DE NOTA FISCAL</li>
          <li> GESTÃO DE ESTOQUE</li>
          <li> ANÁLISE FINANCEIRA</li>
          <li> EMISSÃO DE NOTA FISCAL</li>
          <li>CRM</li>
          <li>EMISSÃO DE LAUDO MÉDICO</li>
          <li>CONTROLE DE AGENDA DOS MÉDICOS E PACIENTES </li>
        </ul>
        <span>R$149,90</span>
      </div>
    </div>
  );
}

export default Home;
