import { Avatar } from 'primereact/avatar';

const AppAbout = () => {
  return (

    <div className="w-11/12 m-auto my-10 p-6 bg-white border border-gray-200 shadow-lg rounded-lg ">
      <div className="text-center mb-6">
        <Avatar
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8BG6UD3b_Fowh4gtwIjw2GPTWQQ30uBy-w&s"
          size="xlarge"
          shape="circle"
          className="w-32 h-32 mx-auto"
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Chi sono</h3>
      <p className="text-gray-600 mb-4">
        Lavoro come Frontend Developer da più di 3 anni. Durante la mia carriera, ho avuto l'opportunità di partecipare attivamente a tutte le fasi della progettazione e dello sviluppo dei progetti aziendali. Mi occupo della creazione di Landing Pages orientate alla Lead Generation, della progettazione di rubriche personali e applicativi CRUD in generale. Inoltre, ho contribuito allo sviluppo e alla manutenzione dell'intranet aziendale, un sistema complesso che gestisce le risorse umane, le richieste di ferie e permessi, e altre funzionalità cruciali per il funzionamento quotidiano dell'azienda.
      </p>
      <p className="text-gray-600 mb-4">
        Il mio obiettivo è garantire un'ottima esperienza utente (UX) e un'interfaccia utente (UI) efficace e coinvolgente. Utilizzo una vasta gamma di tecnologie e strumenti, tra cui <b>Vue.js (versioni 2.7 e 3)</b>, <b>JavaScript ES6</b>, <b>Sass</b>, <b>CSS</b>, <b>HTML5</b>, <b>MJML</b> per email responsive, <b>Bootstrap</b> e <b>Bootstrap-vue</b>, <b>PrimeVue</b> e <b>PrimeFlex</b>. Per la gestione  dei pacchetti utilizzo <b>Yarn</b>, <b>Npm</b> e <b>pnpm</b>, e ho esperienza con <b>WordPress</b> e <b>Elementor</b> per la creazione di pagine web.
      </p>
      <p className="text-gray-600 mb-4">
        Per la comunicazione e la collaborazione, utilizzo strumenti come <b>Outlook</b>, <b>Teams</b>, <b>Skype</b>, <b>Slack</b> e <b>Gmail</b>. Gestisco i progetti con <b>Trello</b>, <b>Confluence</b> e <b>Microsoft Loop</b>, mentre per il design utilizzo <b>Figma</b>. Per lo sviluppo del codice, mi avvalgo di <b>GitHub</b> e <b>VSCode</b>, e utilizzo <b>Clarity</b> per l'analisi. <b>Excel</b> e <b>Word</b> sono i miei strumenti principali per la gestione dei dati e dei documenti.
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Il Progetto React</h3>
      <p className="text-gray-600 mb-4">
      Mi piace sempre studiare cose nuove e, da autodidatta, ho deciso di studiare e approfondire <b>React</b>, nonostante nella mia azienda utilizzi <b>Vue js</b> tutti i giorni. Dopo aver completato un corso introduttivo e letto parte della documentazione ufficiale, ho deciso di mettere subito in pratica le mie conoscenze con quelle acquisite con questo framework creando una Single Page Application che utilizza un'API per scaricare una lista di paesi. Gli utenti possono visualizzare, aggiungere, cancellare e salvare i loro paesi preferiti direttamente dalla home page. Inoltre, l'app offre una sezione dedicata che consente di filtrare i paesi per continente, grazie all'integrazione con lo store <b>Redux</b> per una gestione ottimale dello stato dell'applicazione. 

      </p>
      <p className="text-gray-600">

Per quanto riguarda l'inserimento e la cancellazione dei paesi, è importante notare che, al momento, i dati non vengono memorizzati permanentemente. Se si ricarica la pagina del browser, l'aggiunta e la cancellazione dei paesi vengono perse poiché non viene utilizzato un database o un'altra API per salvare permanentemente i dati. Tuttavia, i paesi salvati vengono memorizzati nel <b>session storage</b>, il che significa che i dati non vengono persi fino a quando la finestra del browser non viene chiusa. 
Per la navigazione tra le pagine, utilizzo <b>React Router</b>, mentre per la parte grafica mi avvalgo di <b>PrimeReact</b> combinato con <b>Tailwind CSS</b>.<br></br> Prossimo passo: <b>React Native!</b>

      </p>
    </div>
  );
};

export default AppAbout;
