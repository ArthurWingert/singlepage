import styles from "./Home.module.css";

function Home() {
  function handleClick() {
    const emailInput = document.getElementById("emailInput");
    const emailValue = emailInput.value.trim(); // Remove espaços em branco no início e fim
  
    if (emailValue === "") {
      window.alert("Por favor, insira o e-mail");
    } else {
      emailInput.value = "";
      window.alert("E-mail cadastrado com sucesso");
    }
  }
  

  return (
    <div className={styles.home_container}>
      <div className={styles.subcontainer}>
        <h1>
          Bem vindo ao <span>IA System</span>
        </h1>
        <p>Comece seu plano agora mesmo!</p>
        <div className={styles.input_div}>
          Fique por dentro das novas notícias
          <input
            className={styles.input}
            type="text"
            placeholder="                       Digite seu e-mail"
            id="emailInput"
          />
          <div className={styles.alinhamento}>
            <button className={styles.button} onClick={handleClick}>
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div className={styles.firstmodal}>
        <span>Basic</span>
        <ul className={styles.containerfirstlist}>
          <li> &gt; App para os clientes</li>
          <li> &gt; Pagamentos internos</li>
          <li> &gt; Emissão de Nota Fiscal</li>
        </ul>
        <span>R$89,90</span>
      </div>
      <div className={styles.secondmodal}>
        <span>Standard</span>
        <ul className={styles.containersecondlist}>
          <li> &gt; App para os clientes</li>
          <li> &gt; Pagamentos internos</li>
          <li> &gt; Emissão de Nota Fiscal</li>
          <li> &gt; Gestão de Estoque</li>
          <li> &gt; Análise Financeira</li>
        </ul>
        <span>R$109,90</span>
      </div>
      <div className={styles.thirdmodal}>
        <span>Premium</span>
        <ul className={styles.containerthirdlist}>
          <li> &gt; App para os clientes</li>
          <li> &gt; Pagamentos internos</li>
          <li> &gt; Emissão de Nota Fiscal</li>
          <li> &gt; Gestão de Estoque</li>
          <li> &gt; Análise Financeira</li>
          <li> &gt; vEmissão de Nota Fiscal</li>
          <li> &gt; CRM</li>
          <li> &gt; Emissão de Laudo Médico</li>
          <li> &gt; Controle de agenda dos médicos e pacientes </li>
        </ul>
        <span>R$149,90</span>
      </div>
    </div>
  );
}

export default Home;
