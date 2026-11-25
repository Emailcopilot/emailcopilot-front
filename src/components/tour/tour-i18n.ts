import type { TourLocale, TourLocaleBundle } from "./tour-types";

export const TOUR_TRANSLATIONS: Record<TourLocale, TourLocaleBundle> = {
  en: {
    ui: {
      takeTour: "Product tour",
      essentials: "Essentials",
      fullTour: "Full tour",
      next: "Next",
      back: "Back",
      finish: "Finish",
      restart: "Restart",
      close: "Close tour",
      stepOf: (current, total) => `${current} of ${total}`,
      dashboardOverview: "Dashboard overview",
      beforeStart: "Before you start",
      wizardStep: (step) => `Step ${step} of 6`,
      kinds: {
        req: "Required",
        opt: "Optional",
        info: "Good to know",
      },
      legend: {
        req: "Required step",
        opt: "Optional",
        info: "Good to know",
      },
    },
    steps: {
      "dash-sent": {
        title: "What actually went out",
        body: "Emails Sent counts what left your connected addresses across your copilots. Follow-ups are included, so the total climbs faster than the number of companies reached.",
        anchor: "Emails Sent",
      },
      "dash-replies": {
        title: "The one that matters",
        body: "People who wrote back. A reply means a real person read your email and decided to answer.",
        anchor: "Replies",
      },
      "dash-reply-rate": {
        title: "Which campaign is working",
        body: "The share of prospects who replied. It lets you compare one copilot with another, or two versions of an email, to see which one landed.",
        anchor: "Reply Rate",
      },
      "dash-copilots-kpi": {
        title: "How many are running",
        body: "All your copilots, drafts included. View all opens your list where each campaign shows its current status.",
        anchor: "Copilots",
      },
      "dash-performance": {
        title: "Did the change work",
        body: "Track Emails Sent and Replies side by side. Use the selector on the right to switch between 7, 14, and 30 days and see whether edits moved the needle.",
        anchor: "Performance",
      },
      "dash-copilots-card": {
        title: "What is running",
        body: "Your recent copilots with sent counts and status badges. A paused copilot sends nothing until you launch it again.",
        anchor: "Copilots",
      },
      "dash-departure-card": {
        title: "Who got it",
        body: "The latest companies contacted, newest first, along with delivery status. View all opens the full Departure page.",
        anchor: "Departure",
      },
      "dash-quick-start": {
        title: "Build the pieces on their own",
        body: "Create an email account, audience, template, or schedule from here anytime and attach it to any copilot. Next, let's jump to Copilots to see how all six steps fit together.",
        anchor: "Quick start",
      },
      "dash-plan": {
        title: "When you need more room",
        body: "The bar on the bottom left tracks how much of your monthly quota is used. Manage Plan is where you switch plans, grab invoices, and update billing.",
        anchor: "Manage Plan",
      },
      "copilots-create": {
        title: "A copilot is one campaign",
        body: "It holds who you contact, what you send them and when. You build your first one in six steps, and nothing goes out until you press launch.",
        anchor: "Create New Copilot",
      },
      "copilots-workflow": {
        title: "Six steps, trackable at a glance",
        body: "Each row shows every stage from Setup to Take-off. Click any step pill or row to open that part of the workflow directly.",
        anchor: "Workflow status",
      },
      "step1-name": {
        title: "This name is just for you",
        body: "It only shows up in your own dashboard. Nobody you contact will ever see it, so pick something you will still recognise in three months.",
        anchor: "Copilot Name",
      },
      "step1-desc": {
        title: "One line is plenty",
        body: "Optional. It becomes handy later, when several copilots are running and you need to remember what this one was about.",
        anchor: "Description",
      },
      "step1-goal": {
        title: "Put a number on it",
        body: '"Book 20 meetings a month" is something you can check later. "Get more leads" is not.',
        anchor: "Goal",
      },
      "step1-summary": {
        title: "This panel follows you",
        body: "It updates as you configure settings across the wizard, so you can always see where you are. Every setting stays editable later.",
        anchor: "Copilot Summary",
      },
      "step1-continue": {
        title: "Save as you go",
        body: "Save & Continue takes you to step 2 and keeps what you have entered. Use the stepper above anytime to revisit completed steps.",
        anchor: "Save & Continue",
      },
      "step2-oauth": {
        title: "Gmail or Outlook, one click",
        body: "Pick the provider your address is on and sign in as you normally would. Emailcopilot never sees or stores your password.",
        anchor: "Recommended",
      },
      "step2-smtp": {
        title: "Any other address",
        body: "If your email is hosted somewhere else, connect it here using SMTP / IMAP credentials from your provider. Everything after that works the same.",
        anchor: "Connect other email provider",
      },
      "step2-saved": {
        title: "Reuse connected inboxes",
        body: "Any mailbox you connect stays available here. Click one to select which inbox this copilot will send from.",
        anchor: "Connected accounts",
      },
      "step2-why": {
        title: "Replies come straight back to you",
        body: "Your emails go out from your own address, so answers land directly in your usual inbox. No new mailbox to check, nothing to install.",
        anchor: "4. Replies stay in your inbox",
      },
      "step2-continue": {
        title: "Greyed out on purpose",
        body: "The button unlocks once an account is selected or connected. Without a sending address, a copilot has nothing to send from.",
        anchor: "Save & Continue",
      },
      "step3-industry": {
        title: "One industry per audience",
        body: "Pick the trade you want to reach. It is the only filter field you must fill in. For a second trade, build another audience.",
        anchor: "Industry",
      },
      "step3-country": {
        title: "Pick target countries",
        body: "Choose the countries where your target companies operate. You can add more than one country to reach multiple markets from a single audience.",
        anchor: "Country",
      },
      "step3-city": {
        title: "Narrow down by city (optional)",
        body: "Keep this switch off to search across all cities in the selected countries, or turn it on to pick exact cities.",
        anchor: "City",
      },
      "step3-size": {
        title: "Watch this audience count",
        body: "The sidebar shows matched companies once scraped, along with five size levels from Limited to Massive so you know how fast your list will run.",
        anchor: "Est. audience size",
      },
      "step3-saved": {
        title: "Your saved audiences",
        body: "Every audience you create is kept here. Click any card to reuse it on another copilot instead of setting the filters again.",
        anchor: "Your Target Audience",
      },
      "step3-continue": {
        title: "Save to link it",
        body: "Clicking Save & Continue saves the audience filters or selected card and links it cleanly to this copilot.",
        anchor: "Save & Continue",
      },
      "step4-name": {
        title: "Name it after the offer",
        body: "Not just the campaign. The same template can serve several copilots while keeping each template reusable.",
        anchor: "Template name",
      },
      "step4-steps": {
        title: "Craft your initial email",
        body: "This outlines your outreach step. Write the opening email here so every lead gets a clear, personal first touch.",
        anchor: "Steps",
      },
      "step4-subject": {
        title: "Short beats clever",
        body: "A few words under 50 characters works best because mobile phones cut longer subjects. Using {{companyName}} helps the email read like a real 1-to-1 note.",
        anchor: "Subject line",
      },
      "step4-body": {
        title: "Around 100 words",
        body: "Two or three short paragraphs: one idea, one question, one easy way to reply. Short cold emails get read to the end and earn more replies.",
        anchor: "Email body",
      },
      "step4-variables": {
        title: "Variables fill themselves in",
        body: "Click any variable to insert it into your subject or body. Each tag is swapped with the real company and sender details right before sending.",
        anchor: "Variables",
      },
      "step4-test": {
        title: "See it before they do",
        body: "This button sends the rendered email to your connected inbox so you can inspect formatting and filled variables before prospects ever receive it.",
        anchor: "Send test email",
      },
      "step4-saved": {
        title: "Your saved templates",
        body: "Saved templates live here with their subject previews. Click any card to load it into the editor and reuse it in one click.",
        anchor: "Your Templates",
      },
      "step4-continue": {
        title: "One step to go",
        body: "You now have the who and the what. Step 5 is purely about when emails go out.",
        anchor: "Save & Continue",
      },
      "step5-name": {
        title: "Give the schedule a name",
        body: "Like audiences and templates, schedules get saved and reused. Clear names like Weekday mornings show what they do at a glance.",
        anchor: "Schedule Name (if creating new)",
      },
      "step5-limit": {
        title: "Set your daily pace",
        body: "30 a day is a steady starting pace for a newer inbox, and you can raise it later. The daily cap protects your sender reputation.",
        anchor: "Daily send limit",
      },
      "step5-days": {
        title: "Pick the days they work",
        body: "Monday to Friday is active by default. Add Saturday or Sunday only if the businesses you reach check email over the weekend.",
        anchor: "Active days",
      },
      "step5-hours": {
        title: "Their hours, not yours",
        body: "Sending hours run in the timezone selected right below. Match the timezone and business hours of your prospects.",
        anchor: "Sending hours",
      },
      "step5-saved": {
        title: "Your saved schedules",
        body: "Reuse an existing Flight Schedule with one click, or adjust fields above to save a new copy without changing schedules used by other copilots.",
        anchor: "Your Flight Schedules",
      },
      "step5-volume": {
        title: "How long your list will take",
        body: "Multiplies your daily limit by active days/month to estimate monthly throughput. Compare it with your audience size.",
        anchor: "Est. monthly volume",
      },
      "step5-continue": {
        title: "The schedule sets the pace",
        body: "Save & Continue attaches this Flight Schedule and moves to Step 6 Take-off so you can review everything before sending.",
        anchor: "Save & Continue",
      },
      "step6-review": {
        title: "One last look",
        body: "Every choice on one screen. Click any summary card if you spot something to tweak before Take-off.",
        anchor: "Review your copilot",
      },
      "step6-actions": {
        title: "Three buttons, only launch sends",
        body: "Send test email drops a preview in your inbox. Save as Draft parks the setup safely. Launch Copilot starts outbound sending, and you can pause anytime.",
        anchor: "Launch Copilot",
      },
      "step6-relaunch": {
        title: "Editing pauses live sending",
        body: "Opening an active or running copilot pauses sending while you edit so half-finished changes never go out. Click Re-launch Copilot when ready to fly again.",
        anchor: "Editing pauses this copilot until you launch it again.",
      },
    },
  },

  nl: {
    ui: {
      takeTour: "Producttour",
      essentials: "De basis",
      fullTour: "Volledige tour",
      next: "Volgende",
      back: "Vorige",
      finish: "Afronden",
      restart: "Opnieuw",
      close: "Tour sluiten",
      stepOf: (current, total) => `${current} van ${total}`,
      dashboardOverview: "Dashboardoverzicht",
      beforeStart: "Voordat je begint",
      wizardStep: (step) => `Stap ${step} van 6`,
      kinds: {
        req: "Verplicht",
        opt: "Optioneel",
        info: "Goed om te weten",
      },
      legend: {
        req: "Verplichte stap",
        opt: "Optioneel",
        info: "Goed om te weten",
      },
    },
    steps: {
      "dash-sent": {
        title: "Wat er echt is verstuurd",
        body: "Verzonden e-mails telt alles wat vanaf je gekoppelde adressen is verstuurd. Follow-ups tellen mee, dus het totaal stijgt sneller dan het aantal bereikte bedrijven.",
        anchor: "Verzonden e-mails",
      },
      "dash-replies": {
        title: "Het cijfer dat telt",
        body: "Mensen die hebben geantwoord. Een antwoord betekent dat een echt persoon je bericht heeft gelezen en gereageerd heeft.",
        anchor: "Antwoorden",
      },
      "dash-reply-rate": {
        title: "Welke campagne werkt",
        body: "Het percentage ontvangers dat reageerde. Hiermee vergelijk je copilots of e-mailversies om te zien wat het beste aanslaat.",
        anchor: "Antwoordpercentage",
      },
      "dash-copilots-kpi": {
        title: "Hoeveel er draaien",
        body: "Al je copilots, inclusief concepten. Via Bekijk alles open je het overzicht met de actuele status per campagne.",
        anchor: "Copilots",
      },
      "dash-performance": {
        title: "Heeft de aanpassing gewerkt?",
        body: "Volg verzonden e-mails en antwoorden naast elkaar. Schakel rechts tussen 7, 14 en 30 dagen om te zien of je aanpassingen resultaat opleveren.",
        anchor: "Prestaties",
      },
      "dash-copilots-card": {
        title: "Wat er actief is",
        body: "Je recentste copilots met aantal verzonden e-mails en status. Een gepauzeerde copilot verstuurt niets totdat je hem weer lanceert.",
        anchor: "Copilots",
      },
      "dash-departure-card": {
        title: "Wie het ontvangen heeft",
        body: "De laatst benaderde bedrijven, nieuwste bovenaan, met de bezorgstatus. Bekijk alles opent de volledige Departure-pagina.",
        anchor: "Departure",
      },
      "dash-quick-start": {
        title: "Bouw de onderdelen los",
        body: "Maak hier direct een e-mailaccount, doelgroep, template of Flight Schedule aan om aan elke copilot te koppelen. Hierna bekijken we op Copilots hoe alle zes stappen samenwerken.",
        anchor: "Snel starten",
      },
      "dash-plan": {
        title: "Wanneer je meer ruimte nodig hebt",
        body: "De balk linksonder toont hoeveel van je maandelijkse limiet is gebruikt. Bij Abonnement beheren pas je je plan aan en vind je facturen.",
        anchor: "Abonnement beheren",
      },
      "copilots-create": {
        title: "Eén copilot is één campagne",
        body: "Hierin bewaar je wie je benadert, wat je stuurt en wanneer. Je bouwt je eerste copilot in zes stappen en er gaat niets uit totdat je op lanceren klikt.",
        anchor: "Nieuwe copilot maken",
      },
      "copilots-workflow": {
        title: "Zes stappen in één oogopslag",
        body: "Elke rij toont de status van Instellen tot Take-off. Klik op een stap of rij om direct dat deel van de workflow te openen.",
        anchor: "Workflowstatus",
      },
      "step1-name": {
        title: "Deze naam is alleen voor jou",
        body: "Hij staat alleen in je eigen dashboard. Geen enkele ontvanger krijgt hem te zien, dus kies iets dat je over drie maanden nog herkent.",
        anchor: "Naam copilot",
      },
      "step1-desc": {
        title: "Eén regel is genoeg",
        body: "Optioneel. Handig zodra er meerdere copilots draaien en je snel wilt terugzien waar deze campagne voor bedoeld is.",
        anchor: "Omschrijving",
      },
      "step1-goal": {
        title: "Maak het meetbaar",
        body: '"20 afspraken per maand plannen" kun je achteraf toetsen. "Meer leads krijgen" niet.',
        anchor: "Doel",
      },
      "step1-summary": {
        title: "Dit overzicht reist met je mee",
        body: "Het vult automatisch bij terwijl je instellingen aanpast, zodat je altijd weet hoe de copilot ervoor staat. Alles blijft achteraf aanpasbaar.",
        anchor: "Samenvatting copilot",
      },
      "step1-continue": {
        title: "Sla onderweg op",
        body: "Met Opslaan en verder ga je naar stap 2 en bewaar je wat je hebt ingevuld. Via de stappenbalk bovenaan keer je later zo terug naar eerdere stappen.",
        anchor: "Opslaan en verder",
      },
      "step2-oauth": {
        title: "Gmail of Outlook in één klik",
        body: "Kies de aanbieder van je e-mailadres en log in zoals je gewend bent. Emailcopilot ziet en bewaart je wachtwoord nooit.",
        anchor: "Aanbevolen",
      },
      "step2-smtp": {
        title: "Elk ander e-mailadres",
        body: "Wordt je e-mail ergens anders gehost? Koppel hem hier met de SMTP-/IMAP-gegevens van je provider. Alles daarna werkt precies hetzelfde.",
        anchor: "Andere e-mailprovider koppelen",
      },
      "step2-saved": {
        title: "Gekoppelde inboxen hergebruiken",
        body: "Elke inbox die je koppelt blijft hier beschikbaar. Klik op een account om te kiezen vanaf welk adres deze copilot verstuurt.",
        anchor: "Gekoppelde accounts",
      },
      "step2-why": {
        title: "Antwoorden komen gewoon in je eigen inbox",
        body: "Je e-mails vertrekken vanaf je eigen adres, dus antwoorden landen direct in je vertrouwde inbox. Geen extra tool nodig.",
        anchor: "4. Antwoorden blijven in je inbox",
      },
      "step2-continue": {
        title: "Bewust nog niet actief",
        body: "De knop gaat open zodra er een e-mailaccount gekozen of gekoppeld is. Zonder afzender kan een copilot niets versturen.",
        anchor: "Opslaan en verder",
      },
      "step3-industry": {
        title: "Eén sector per doelgroep",
        body: "Kies de branche die je wilt bereiken. Dit is het enige verplichte filterveld. Voor een tweede branche maak je een aparte doelgroep.",
        anchor: "Sector",
      },
      "step3-country": {
        title: "Kies je doellanden",
        body: "Voeg één of meerdere landen toe waar je doelbedrijven gevestigd zijn. Zo bereik je meerdere markten vanuit één doelgroep.",
        anchor: "Land",
      },
      "step3-city": {
        title: "Verfijn optioneel per stad",
        body: "Laat deze schakelaar uit om alle steden in de gekozen landen mee te nemen, of zet hem aan om specifieke steden te kiezen.",
        anchor: "Stad",
      },
      "step3-size": {
        title: "Let op de omvang van je doelgroep",
        body: "Het zijpaneel toont het aantal gevonden bedrijven zodra is gescraped, plus een indicatie van Beperkt tot Enorm zodat je het tempo goed inschat.",
        anchor: "Geschatte doelgroepgrootte",
      },
      "step3-saved": {
        title: "Je opgeslagen doelgroepen",
        body: "Elke doelgroep die je aanmaakt blijft hier bewaard. Klik op een kaart om hem meteen te hergebruiken voor een andere copilot.",
        anchor: "Jouw doelgroep",
      },
      "step3-continue": {
        title: "Opslaan om te koppelen",
        body: "Met Opslaan en verder sla je de doelgroep op of koppel je de gekozen kaart aan deze copilot.",
        anchor: "Opslaan en verder",
      },
      "step4-name": {
        title: "Noem de template naar het aanbod",
        body: "Niet per se naar één campagne. Dezelfde template kan meerdere copilots bedienen en blijft zo overzichtelijk herbruikbaar.",
        anchor: "Templatenaam",
      },
      "step4-steps": {
        title: "Schrijf je eerste e-mail",
        body: "Onder Stappen staat de structuur van je bericht. Stel hier je openingsmail op zodat elke lead een sterke eerste e-mail ontvangt.",
        anchor: "Stappen",
      },
      "step4-subject": {
        title: "Kort werkt beter dan slim",
        body: "Houd het onder de 50 tekens zodat telefoons niets afbreken. Met {{companyName}} leest de onderwerpregel alsof hij persoonlijk geschreven is.",
        anchor: "Onderwerpregel",
      },
      "step4-body": {
        title: "Ongeveer 100 woorden",
        body: "Twee of drie korte alinea's: één idee, één vraag, één makkelijke manier om te antwoorden. Korte berichten leveren meer reacties op.",
        anchor: "E-mailtekst",
      },
      "step4-variables": {
        title: "Variabelen vullen zichzelf in",
        body: "Klik op een variabele om deze in onderwerp of tekst te plaatsen. Vóór verzending wordt elke tag vervangen door de echte bedrijfs- en afzendergegevens.",
        anchor: "Variabelen",
      },
      "step4-test": {
        title: "Bekijk het resultaat vooraf",
        body: "Deze knop stuurt een testmail naar je eigen inbox met alle variabelen ingevuld, precies zoals je prospect hem ziet.",
        anchor: "Testmail versturen",
      },
      "step4-saved": {
        title: "Je opgeslagen templates",
        body: "Opgeslagen templates staan hieronder met hun onderwerpregel. Klik op een kaart om hem in één klik in de editor te laden.",
        anchor: "Jouw templates",
      },
      "step4-continue": {
        title: "Nog één stap te gaan",
        body: "Wie en wat staan nu klaar. Stap 5 bepaalt alleen nog wanneer je e-mails vertrekken.",
        anchor: "Opslaan en verder",
      },
      "step5-name": {
        title: "Geef het Flight Schedule een naam",
        body: "Net als doelgroepen en templates wordt je Flight Schedule opgeslagen voor hergebruik. Kies een duidelijke naam zoals Werkdagen ochtend.",
        anchor: "Naam schema (bij nieuw schema)",
      },
      "step5-limit": {
        title: "Bepaal je dagelijks tempo",
        body: "30 per dag is een rustig starttempo voor een nieuwer account. De daglimiet beschermt je afzenderreputatie.",
        anchor: "Dagelijkse verzendlimiet",
      },
      "step5-days": {
        title: "Kies de werkdagen van je doelgroep",
        body: "Maandag t/m vrijdag staat standaard aan. Zet het weekend alleen aan als je doelgroep ook dan zakelijke mail leest.",
        anchor: "Actieve dagen",
      },
      "step5-hours": {
        title: "Hun werktijden, niet die van jou",
        body: "Verzendtijden volgen de tijdzone hieronder. Stem de tijdzone en het tijdvenster af op de regio van je prospects.",
        anchor: "Verzenduren",
      },
      "step5-saved": {
        title: "Je opgeslagen Flight Schedules",
        body: "Klik op een bestaand Flight Schedule om het direct te hergebruiken, of pas velden aan om een nieuwe kopie aan te maken.",
        anchor: "Jouw flight schedules",
      },
      "step5-volume": {
        title: "Hoe snel je lijst wordt verwerkt",
        body: "Vermenigvuldigt je daglimiet met de actieve dagen per maand. Vergelijk dat volume met de grootte van je doelgroep.",
        anchor: "Geschat maandelijks volume",
      },
      "step5-continue": {
        title: "Het schema bepaalt het ritme",
        body: "Met Opslaan en verder koppel je dit Flight Schedule en ga je door naar stap 6 Take-off om alles nog eenmaal te controleren.",
        anchor: "Opslaan en verder",
      },
      "step6-review": {
        title: "Laatste controle vóór Take-off",
        body: "Alle instellingen op één scherm. Klik op een kaart als je vóór lancering nog iets wilt aanpassen.",
        anchor: "Controleer je copilot",
      },
      "step6-actions": {
        title: "Drie knoppen, alleen lanceren verstuurt",
        body: "Met Testmail versturen check je een voorbeeld in je eigen inbox. Opslaan als concept parkeert alles veilig. Copilot lanceren start de verzending en pauzeren kan altijd.",
        anchor: "Copilot lanceren",
      },
      "step6-relaunch": {
        title: "Bewerken pauzeert actieve verzending",
        body: "Als je een actieve of draaiende copilot bewerkt, pauzeert het verzenden automatisch zodat niets half af de deur uit gaat. Klik op Copilot opnieuw lanceren zodra je klaar bent.",
        anchor: "Bewerken pauzeert deze copilot totdat je hem opnieuw lanceert.",
      },
    },
  },

  de: {
    ui: {
      takeTour: "Produkttour",
      essentials: "Das Wichtigste",
      fullTour: "Komplette Tour",
      next: "Weiter",
      back: "Zurück",
      finish: "Fertig",
      restart: "Neu starten",
      close: "Tour schließen",
      stepOf: (current, total) => `${current} von ${total}`,
      dashboardOverview: "Dashboard-Übersicht",
      beforeStart: "Bevor du startest",
      wizardStep: (step) => `Schritt ${step} von 6`,
      kinds: {
        req: "Erforderlich",
        opt: "Optional",
        info: "Gut zu wissen",
      },
      legend: {
        req: "Erforderlicher Schritt",
        opt: "Optional",
        info: "Gut zu wissen",
      },
    },
    steps: {
      "dash-sent": {
        title: "Was wirklich rausging",
        body: "Gesendete E-Mails zählt alles, was über deine verbundenen Postfächer versandt wurde. Follow-ups zählen mit, daher steigt die Zahl schneller als die erreichten Unternehmen.",
        anchor: "Gesendete E-Mails",
      },
      "dash-replies": {
        title: "Die Zahl, die zählt",
        body: "Personen, die geantwortet haben. Eine Antwort heißt, dass ein echter Mensch deine Nachricht gelesen und reagiert hat.",
        anchor: "Antworten",
      },
      "dash-reply-rate": {
        title: "Welche Kampagne funktioniert",
        body: "Der Anteil der Kontakte, die geantwortet haben. So vergleichst du Copilots oder Textvarianten und erkennst, was überzeugt.",
        anchor: "Antwortrate",
      },
      "dash-copilots-kpi": {
        title: "Wie viele laufen",
        body: "Alle deine Copilots inklusive Entwürfen. Mit Alle ansehen öffnest du die Liste mit dem Status jeder Kampagne.",
        anchor: "Copilots",
      },
      "dash-performance": {
        title: "Hat die Änderung gewirkt?",
        body: "Vergleiche gesendete E-Mails und Antworten im Zeitverlauf. Rechts wechselst du zwischen 7, 14 und 30 Tagen, um Verbesserungen zu prüfen.",
        anchor: "Leistung",
      },
      "dash-copilots-card": {
        title: "Was gerade läuft",
        body: "Deine neuesten Copilots mit Versandzahl und Status. Ein pausierter Copilot sendet nichts, bis du ihn erneut startest.",
        anchor: "Copilots",
      },
      "dash-departure-card": {
        title: "Wer etwas erhalten hat",
        body: "Die zuletzt kontaktierten Unternehmen zuerst, samt Zustellstatus. Alle ansehen öffnet das komplette Departure-Protokoll.",
        anchor: "Departure",
      },
      "dash-quick-start": {
        title: "Bausteine einzeln anlegen",
        body: "Erstelle hier E-Mail-Konten, Zielgruppen, Vorlagen oder einen Flight Schedule separat und nutze sie beliebig wieder. Als Nächstes schauen wir unter Copilots, wie alle sechs Schritte zusammenspielen.",
        anchor: "Schnellstart",
      },
      "dash-plan": {
        title: "Wenn du mehr Volumen brauchst",
        body: "Der Balken unten links zeigt dein verbrauchtes Monatskontingent. Unter Tarif verwalten wechselst du Tarife und findest deine Rechnungen.",
        anchor: "Tarif verwalten",
      },
      "copilots-create": {
        title: "Ein Copilot ist eine Kampagne",
        body: "Hier bündelst du, wen du kontaktierst, was du sendest und wann. In sechs Schritten ist dein erster Copilot startklar – und vor dem Start geht nichts heraus.",
        anchor: "Neuen Copilot erstellen",
      },
      "copilots-workflow": {
        title: "Sechs Schritte auf einen Blick",
        body: "Jede Zeile zeigt alle Phasen von Einrichtung bis Take-off. Klicke auf einen Schritt oder eine Zeile, um genau dorthin zu springen.",
        anchor: "Workflow-Status",
      },
      "step1-name": {
        title: "Dieser Name ist nur für dich",
        body: "Er erscheint ausschließlich in deinem Dashboard. Empfänger sehen ihn nie – wähle einen Namen, den du auch später sofort wiedererkennst.",
        anchor: "Name des Copilots",
      },
      "step1-desc": {
        title: "Eine Zeile genügt",
        body: "Optional. Hilft dir später, wenn mehrere Copilots parallel laufen, schnell zu erkennen, wofür dieser gedacht ist.",
        anchor: "Beschreibung",
      },
      "step1-goal": {
        title: "Mit einer Zahl verknüpfen",
        body: '„20 Erstgespräche pro Monat buchen“ kannst du später messen. „Mehr Leads gewinnen“ nicht.',
        anchor: "Ziel",
      },
      "step1-summary": {
        title: "Dieses Panel begleitet dich",
        body: "Die Übersicht aktualisiert sich während des Setups laufend, damit du deinen Fortschritt immer im Blick behältst.",
        anchor: "Copilot-Zusammenfassung",
      },
      "step1-continue": {
        title: "Schritt für Schritt speichern",
        body: "Speichern und weiter sichert deine Eingaben und bringt dich zu Schritt 2. Über die Schritt-Leiste oben kannst du jederzeit zurückspringen.",
        anchor: "Speichern und weiter",
      },
      "step2-oauth": {
        title: "Gmail oder Outlook per Klick",
        body: "Wähle deinen Anbieter und melde dich wie gewohnt per OAuth an. Emailcopilot sieht oder speichert dein Passwort niemals.",
        anchor: "Empfohlen",
      },
      "step2-smtp": {
        title: "Jede andere E-Mail-Adresse",
        body: "Liegt dein Postfach bei einem anderen Anbieter? Verbinde es einfach über SMTP / IMAP. Alles Weitere läuft identisch ab.",
        anchor: "Anderen E-Mail-Anbieter verbinden",
      },
      "step2-saved": {
        title: "Verbundene Postfächer wählen",
        body: "Alle verbundenen Konten stehen hier zur Auswahl. Klicke auf ein Konto, um es als Absender für diesen Copilot festzulegen.",
        anchor: "Verbundene Konten",
      },
      "step2-why": {
        title: "Antworten landen direkt in deinem Postfach",
        body: "Deine Nachrichten werden von deiner eigenen Adresse gesendet – Antworten kommen direkt in deinem gewohnten Posteingang an.",
        anchor: "4. Antworten bleiben in deinem Posteingang",
      },
      "step2-continue": {
        title: "Absichtlich deaktiviert",
        body: "Die Schaltfläche wird aktiv, sobald ein E-Mail-Konto gewählt oder verbunden wurde. Ohne Absender kann kein Copilot senden.",
        anchor: "Speichern und weiter",
      },
      "step3-industry": {
        title: "Eine Branche pro Zielgruppe",
        body: "Wähle die Branche, die du ansprechen möchtest – das einzige Pflichtfeld hier. Für eine zweite Branche legst du eine eigene Zielgruppe an.",
        anchor: "Branche",
      },
      "step3-country": {
        title: "Zielländer festlegen",
        body: "Füge ein oder mehrere Länder hinzu, in denen deine Wunschunternehmen sitzen.",
        anchor: "Land",
      },
      "step3-city": {
        title: "Optional nach Städten eingrenzen",
        body: "Lasse den Schalter aus, um das ganze Land abzudecken, oder schalte ihn ein, um einzelne Städte auszuwählen.",
        anchor: "Stadt",
      },
      "step3-size": {
        title: "Zielgruppengröße im Blick",
        body: "Nach dem ersten Lauf zeigt die Seitenleiste die Trefferzahl sowie eine Einstufung von Begrenzt bis Riesig für bessere Planbarkeit.",
        anchor: "Geschätzte Zielgruppengröße",
      },
      "step3-saved": {
        title: "Deine gespeicherten Zielgruppen",
        body: "Einmal erstellte Zielgruppen bleiben hier gespeichert. Ein Klick reicht, um sie für weitere Copilots wiederzuverwenden.",
        anchor: "Deine Zielgruppe",
      },
      "step3-continue": {
        title: "Speichern zum Verknüpfen",
        body: "Speichern und weiter verknüpft die ausgewählte oder neue Zielgruppe mit diesem Copilot.",
        anchor: "Speichern und weiter",
      },
      "step4-name": {
        title: "Nach dem Angebot benennen",
        body: "Dieselbe Vorlage lässt sich in mehreren Copilots einsetzen und später unabhängig auswerten.",
        anchor: "Vorlagenname",
      },
      "step4-steps": {
        title: "Erste Nachricht gestalten",
        body: "Unter Schritte siehst du die Sequenzstruktur. Formuliere hier deine persönliche Erstansprache.",
        anchor: "Schritte",
      },
      "step4-subject": {
        title: "Kurz schlägt clever",
        body: "Unter 50 Zeichen bleibt der Betreff auch mobil vollständig sichtbar. Mit {{companyName}} wirkt die E-Mail direkt persönlicher.",
        anchor: "Betreffzeile",
      },
      "step4-body": {
        title: "Rund 100 Wörter",
        body: "Zwei bis drei knappe Absätze: eine Idee, eine Frage, eine einfache Antwortmöglichkeit. Kurze E-Mails werden bis zum Ende gelesen.",
        anchor: "E-Mail-Text",
      },
      "step4-variables": {
        title: "Variablen füllen sich automatisch",
        body: "Klicke auf eine Variable, um sie in Betreff oder Text einzufügen. Vor dem Versand werden echte Firmen- und Absenderdaten eingesetzt.",
        anchor: "Variablen",
      },
      "step4-test": {
        title: "Vorab selbst prüfen",
        body: "Sendet die E-Mail mit ausgefüllten Variablen an dein eigenes Postfach, damit du genau das siehst, was Empfänger erhalten.",
        anchor: "Test-E-Mail senden",
      },
      "step4-saved": {
        title: "Deine gespeicherten Vorlagen",
        body: "Alle erstellten Vorlagen erscheinen hier mit Betreffvorschau. Klicke auf eine Karte, um sie direkt in den Editor zu laden.",
        anchor: "Deine Vorlagen",
      },
      "step4-continue": {
        title: "Noch ein Schritt",
        body: "Wer und Was stehen fest. In Schritt 5 legst du nur noch das Wann fest.",
        anchor: "Speichern und weiter",
      },
      "step5-name": {
        title: "Zeitplan benennen",
        body: "Auch dein Flight Schedule wird gespeichert und wiederverwendet – wähle einen klaren Namen wie Werktags vormittags.",
        anchor: "Zeitplanname (falls neu erstellt)",
      },
      "step5-limit": {
        title: "Tageslimit festlegen",
        body: "30 E-Mails pro Tag sind ein sicherer Einstieg für neue Postfächer und schützen deine Absenderreputation.",
        anchor: "Tägliches Sendelimit",
      },
      "step5-days": {
        title: "Arbeitstage der Empfänger wählen",
        body: "Montag bis Freitag ist standardmäßig aktiv. Nimm das Wochenende nur hinzu, wenn deine Zielgruppe dann E-Mails liest.",
        anchor: "Aktive Tage",
      },
      "step5-hours": {
        title: "Deren Arbeitszeiten, nicht deine",
        body: "Das Zeitfenster richtet sich nach der Zeitzone direkt darunter. Passe sie an die Region deiner Empfänger an.",
        anchor: "Sendezeiten",
      },
      "step5-saved": {
        title: "Gespeicherte Flight Schedules",
        body: "Wähle ein bestehendes Flight Schedule per Klick aus oder passe die Felder oben an, um eine neue Kopie anzulegen.",
        anchor: "Deine Flight Schedules",
      },
      "step5-volume": {
        title: "Monatliches Sendevolumen",
        body: "Rechnet Tageslimit mal aktive Tage pro Monat hoch, damit du einschätzen kannst, wie schnell deine Liste durchläuft.",
        anchor: "Gesch. monatliches Volumen",
      },
      "step5-continue": {
        title: "Bereit für Take-off",
        body: "Speichern und weiter verknüpft dieses Flight Schedule und öffnet Schritt 6 Take-off zur finalen Prüfung.",
        anchor: "Speichern und weiter",
      },
      "step6-review": {
        title: "Noch einmal alles prüfen",
        body: "Alle Einstellungen auf einem Bildschirm. Klicke auf eine Karte, um direkt in den jeweiligen Schritt zurückzuspringen.",
        anchor: "Überprüfe deinen Copilot",
      },
      "step6-actions": {
        title: "Drei Aktionen – nur Starten sendet",
        body: "Test-E-Mail senden prüft das Ergebnis im eigenen Posteingang. Als Entwurf speichern sichert alles für später. Copilot starten legt los und lässt sich jederzeit pausieren.",
        anchor: "Copilot starten",
      },
      "step6-relaunch": {
        title: "Bearbeiten pausiert den Versand",
        body: "Beim Öffnen eines laufenden Copilots wird der Versand gestoppt, bis du deine Änderungen mit Copilot erneut starten wieder freigibst.",
        anchor: "Durch das Bearbeiten wird dieser Copilot pausiert, bis du ihn erneut startest.",
      },
    },
  },

  fr: {
    ui: {
      takeTour: "Tour produit",
      essentials: "L’essentiel",
      fullTour: "Tour complet",
      next: "Suivant",
      back: "Retour",
      finish: "Terminer",
      restart: "Recommencer",
      close: "Fermer le tour",
      stepOf: (current, total) => `${current} sur ${total}`,
      dashboardOverview: "Vue d’ensemble",
      beforeStart: "Avant de commencer",
      wizardStep: (step) => `Étape ${step} sur 6`,
      kinds: {
        req: "Obligatoire",
        opt: "Facultatif",
        info: "Bon à savoir",
      },
      legend: {
        req: "Étape obligatoire",
        opt: "Facultatif",
        info: "Bon à savoir",
      },
    },
    steps: {
      "dash-sent": {
        title: "Ce qui est réellement parti",
        body: "E-mails envoyés compte tout ce qui est parti de vos boîtes connectées. Les relances sont incluses : le chiffre monte donc plus vite que le nombre d'entreprises contactées.",
        anchor: "E-mails envoyés",
      },
      "dash-replies": {
        title: "Celui qui compte",
        body: "Les personnes qui ont répondu. Une réponse, c'est une vraie personne qui a lu votre e-mail et a décidé d'y répondre.",
        anchor: "Réponses",
      },
      "dash-reply-rate": {
        title: "Quelle campagne fonctionne",
        body: "La part des destinataires qui ont répondu. C'est ce qui permet de comparer un copilot à un autre ou deux variantes d'un même message.",
        anchor: "Taux de réponse",
      },
      "dash-copilots-kpi": {
        title: "Combien tournent",
        body: "Tous vos copilots, brouillons compris. Tout voir ouvre la liste détaillée avec l'état de chaque campagne.",
        anchor: "Copilots",
      },
      "dash-performance": {
        title: "Est-ce que le changement a marché",
        body: "Suivez l'évolution des envois et des réponses. Le sélecteur à droite fait passer la vue à 7, 14 ou 30 jours pour vérifier vos ajustements.",
        anchor: "Performances",
      },
      "dash-copilots-card": {
        title: "Ce qui tourne",
        body: "Chaque copilot avec son compteur et son état. Un copilot en pause n'envoie rien tant que vous ne l'avez pas relancé.",
        anchor: "Copilots",
      },
      "dash-departure-card": {
        title: "Qui l’a reçu",
        body: "Les dernières entreprises contactées, les plus récentes en haut, avec le statut d'envoi. Tout voir ouvre la page Departure complète.",
        anchor: "Departure",
      },
      "dash-quick-start": {
        title: "Créez les briques séparément",
        body: "Créez une boîte d'envoi, une cible, un modèle ou un Flight Schedule d'ici, puis rattachez-les à n'importe quel copilot. Ensuite, passons à Copilots pour voir les six étapes ensemble.",
        anchor: "Démarrage rapide",
      },
      "dash-plan": {
        title: "Quand il vous faut plus de place",
        body: "La barre en bas à gauche montre la part de votre quota mensuel utilisée. Gérer l'abonnement vous permet de changer de formule et de retrouver vos factures.",
        anchor: "Gérer l'abonnement",
      },
      "copilots-create": {
        title: "Un copilot, c’est une campagne",
        body: "Il contient qui vous contactez, ce que vous leur envoyez et quand. Vous construisez le premier en six étapes, et rien ne part tant que vous n'avez pas appuyé sur lancer.",
        anchor: "Créer un copilot",
      },
      "copilots-workflow": {
        title: "Six étapes suivies d’un coup d’œil",
        body: "Chaque ligne affiche l'avancement de la configuration jusqu'au Take-off. Cliquez sur une pastille d'étape ou une ligne pour y accéder directement.",
        anchor: "Statut du workflow",
      },
      "step1-name": {
        title: "Ce nom n’est que pour vous",
        body: "Il n'apparaît que dans votre tableau de bord. Personne que vous contactez ne le verra : choisissez un nom que vous reconnaîtrez encore dans trois mois.",
        anchor: "Nom du copilot",
      },
      "step1-desc": {
        title: "Une ligne suffit",
        body: "Facultatif. C'est pratique plus tard, quand plusieurs copilots tournent et qu'il faut se rappeler à quoi servait celui-ci.",
        anchor: "Description",
      },
      "step1-goal": {
        title: "Mettez un chiffre",
        body: "« Décrocher 20 rendez-vous par mois », vous pourrez le vérifier plus tard. « Avoir plus de leads », non.",
        anchor: "Objectif",
      },
      "step1-summary": {
        title: "Ce panneau vous suit",
        body: "Il se met à jour au fil de vos choix sur les six étapes pour garder vos réglages visibles. Tout reste modifiable par la suite.",
        anchor: "Résumé du copilot",
      },
      "step1-continue": {
        title: "Enregistrez au fur et à mesure",
        body: "Enregistrer et continuer vous emmène à l'étape 2 en gardant ce que vous avez saisi. Utilisez les étapes ci-dessus à tout moment pour revenir en arrière.",
        anchor: "Enregistrer et continuer",
      },
      "step2-oauth": {
        title: "Gmail ou Outlook, un clic",
        body: "Choisissez le service de votre adresse et connectez-vous comme d'habitude. Emailcopilot ne voit ni ne stocke jamais votre mot de passe.",
        anchor: "Recommandé",
      },
      "step2-smtp": {
        title: "Toute autre adresse",
        body: "Si votre email est hébergé ailleurs, connectez-le ici avec les paramètres SMTP / IMAP de votre fournisseur. Tout le reste fonctionne pareil.",
        anchor: "Connecter un autre fournisseur d'e-mails",
      },
      "step2-saved": {
        title: "Réutiliser vos boîtes connectées",
        body: "Chaque compte relié reste disponible ici. Cliquez dessus pour choisir l'adresse d'envoi de ce copilot.",
        anchor: "Comptes connectés",
      },
      "step2-why": {
        title: "Les réponses reviennent droit chez vous",
        body: "Vos emails partent de votre propre adresse : les réponses arrivent donc dans votre boîte habituelle, sans nouvel outil à surveiller.",
        anchor: "4. Les réponses restent dans votre boîte",
      },
      "step2-continue": {
        title: "Grisé exprès",
        body: "Le bouton s'active dès qu'un compte est sélectionné ou connecté. Sans adresse d'envoi, un copilot ne peut rien envoyer.",
        anchor: "Enregistrer et continuer",
      },
      "step3-industry": {
        title: "Un secteur par audience",
        body: "Choisissez le métier que vous voulez toucher : c'est le seul critère obligatoire. Pour un second métier, créez une autre audience.",
        anchor: "Secteur",
      },
      "step3-country": {
        title: "Choisir les pays ciblés",
        body: "Ajoutez un ou plusieurs pays où se trouvent les entreprises à contacter pour couvrir plusieurs marchés depuis une seule audience.",
        anchor: "Pays",
      },
      "step3-city": {
        title: "Affiner par ville (facultatif)",
        body: "Laissez l'interrupteur désactivé pour rechercher dans tout le pays, ou activez-le pour sélectionner des villes précises.",
        anchor: "Ville",
      },
      "step3-size": {
        title: "Surveillez ce chiffre",
        body: "Le panneau affiche le volume d'entreprises après collecte ainsi que cinq niveaux de taille (Limité à Massif) pour évaluer votre vivier.",
        anchor: "Taille estimée de l'audience",
      },
      "step3-saved": {
        title: "Vos audiences enregistrées",
        body: "Chaque audience créée est conservée ici. Cliquez sur une fiche pour la réutiliser immédiatement sur un autre copilot.",
        anchor: "Votre audience cible",
      },
      "step3-continue": {
        title: "Enregistrez pour la rattacher",
        body: "Enregistrer et continuer sauvegarde les critères ou relie l'audience choisie à ce copilot avant de rédiger le message.",
        anchor: "Enregistrer et continuer",
      },
      "step4-name": {
        title: "Nommez-le d’après l’offre",
        body: "Un même modèle peut servir plusieurs copilots et être réutilisé à travers vos campagnes.",
        anchor: "Nom du modèle",
      },
      "step4-steps": {
        title: "Préparez le premier email",
        body: "L'onglet Étapes présente la structure du message. Rédigez ici le premier contact que recevront vos prospects.",
        anchor: "Étapes",
      },
      "step4-subject": {
        title: "Court vaut mieux que malin",
        body: "Moins de 50 caractères évite que l'objet soit coupé sur mobile. Insérer {{companyName}} donne immédiatement un ton personnalisé.",
        anchor: "Objet",
      },
      "step4-body": {
        title: "Autour de 100 mots",
        body: "Deux ou trois paragraphes courts : une idée, une question, une seule façon de répondre. Les messages brefs obtiennent davantage de réponses.",
        anchor: "Corps de l'e-mail",
      },
      "step4-variables": {
        title: "Les variables se remplissent seules",
        body: "Cliquez sur une variable pour l'insérer dans l'objet ou le texte. Chaque balise est remplacée par les vraies informations juste avant l'envoi.",
        anchor: "Variables",
      },
      "step4-test": {
        title: "Voyez-le avant eux",
        body: "Envoie l'email dans votre propre boîte avec les variables renseignées afin de relire exactement ce que recevra un prospect.",
        anchor: "Envoyer un e-mail de test",
      },
      "step4-saved": {
        title: "Vos modèles enregistrés",
        body: "Retrouvez ici tous vos modèles enregistrés. Cliquez sur l'un d'eux pour le charger instantanément dans l'éditeur.",
        anchor: "Vos modèles",
      },
      "step4-continue": {
        title: "Encore une étape",
        body: "Vous avez le qui et le quoi. L'étape 5 ne concerne plus que le quand.",
        anchor: "Enregistrer et continuer",
      },
      "step5-name": {
        title: "Donnez un nom au Flight Schedule",
        body: "Comme les audiences et modèles, les calendriers sont enregistrés et réutilisés. Un nom clair indique d'emblée les créneaux.",
        anchor: "Nom du calendrier (si nouveau)",
      },
      "step5-limit": {
        title: "Choisissez votre rythme quotidien",
        body: "30 par jour est un bon départ pour une nouvelle boîte : la limite quotidienne protège votre réputation d'expéditeur.",
        anchor: "Limite d'envoi quotidienne",
      },
      "step5-days": {
        title: "Choisissez les jours où ils travaillent",
        body: "Du lundi au vendredi est actif par défaut. Ajoutez le week-end uniquement si vos destinataires consultent leurs emails ces jours-là.",
        anchor: "Jours actifs",
      },
      "step5-hours": {
        title: "Leurs horaires, pas les vôtres",
        body: "Les plages horaires suivent le fuseau défini juste en dessous. Réglez-le sur le fuseau de vos prospects.",
        anchor: "Heures d'envoi",
      },
      "step5-saved": {
        title: "Vos Flight Schedules enregistrés",
        body: "Cliquez sur un calendrier existant pour le réutiliser tel quel, ou modifiez les champs pour créer une nouvelle copie.",
        anchor: "Vos Flight Schedules",
      },
      "step5-volume": {
        title: "Durée estimée de votre liste",
        body: "Multiplie votre limite quotidienne par les jours actifs du mois pour estimer la cadence mensuelle face à la taille d'audience.",
        anchor: "Volume mensuel est.",
      },
      "step5-continue": {
        title: "Le calendrier donne le rythme",
        body: "Enregistrer et continuer attache ce Flight Schedule et vous amène à l'étape 6 Take-off pour la vérification finale.",
        anchor: "Enregistrer et continuer",
      },
      "step6-review": {
        title: "Un dernier coup d’œil",
        body: "Tous vos réglages sur un seul écran. Cliquez sur n'importe quelle carte pour ajuster son étape avant le Take-off.",
        anchor: "Vérifiez votre copilot",
      },
      "step6-actions": {
        title: "Trois boutons, un seul envoie",
        body: "Envoyer un e-mail de test place un aperçu dans votre boîte. Enregistrer comme brouillon garde tout pour plus tard. Lancer le copilot démarre les envois (pause possible à tout moment).",
        anchor: "Lancer le copilot",
      },
      "step6-relaunch": {
        title: "Modifier arrête les envois",
        body: "Ouvrir un copilot actif le met automatiquement en pause pendant l'édition. Cliquez sur Relancer le copilot quand vos changements sont prêts.",
        anchor: "La modification met ce copilot en pause jusqu'à ce que vous le relanciez.",
      },
    },
  },

  es: {
    ui: {
      takeTour: "Tour guiado",
      essentials: "Lo esencial",
      fullTour: "Tour completo",
      next: "Siguiente",
      back: "Atrás",
      finish: "Finalizar",
      restart: "Reiniciar",
      close: "Cerrar tour",
      stepOf: (current, total) => `${current} de ${total}`,
      dashboardOverview: "Resumen del panel",
      beforeStart: "Antes de empezar",
      wizardStep: (step) => `Paso ${step} de 6`,
      kinds: {
        req: "Obligatorio",
        opt: "Opcional",
        info: "Buen dato",
      },
      legend: {
        req: "Paso obligatorio",
        opt: "Opcional",
        info: "Buen dato",
      },
    },
    steps: {
      "dash-sent": {
        title: "Lo que realmente salió",
        body: "Correos enviados suma todo lo enviado desde tus bandejas conectadas. Incluye seguimientos, así que la cifra crece más rápido que las empresas contactadas.",
        anchor: "Correos enviados",
      },
      "dash-replies": {
        title: "El dato que importa",
        body: "Personas que respondieron. Una respuesta significa que alguien real leyó tu mensaje y decidió contestar.",
        anchor: "Respuestas",
      },
      "dash-reply-rate": {
        title: "Qué campaña funciona",
        body: "El porcentaje de contactos que respondieron. Sirve para comparar copilots o versiones de un correo y ver cuál rinde mejor.",
        anchor: "Tasa de respuesta",
      },
      "dash-copilots-kpi": {
        title: "Cuántos están activos",
        body: "Todos tus copilots, incluidos borradores. Ver todo abre la lista con el estado de cada campaña.",
        anchor: "Copilots",
      },
      "dash-performance": {
        title: "¿Funcionó el cambio?",
        body: "Compara envíos y respuestas en el tiempo. Cambia el selector derecho entre 7, 14 y 30 días para medir tus ajustes.",
        anchor: "Rendimiento",
      },
      "dash-copilots-card": {
        title: "Qué está en marcha",
        body: "Tus copilots recientes con volumen enviado y estado. Un copilot en pausa no envía nada hasta que vuelvas a lanzarlo.",
        anchor: "Copilots",
      },
      "dash-departure-card": {
        title: "Quién lo recibió",
        body: "Las últimas empresas contactadas, las más recientes primero, con su estado de entrega. Ver todo abre la vista completa de Departure.",
        anchor: "Departure",
      },
      "dash-quick-start": {
        title: "Crea cada pieza por separado",
        body: "Crea aquí cuentas de correo, audiencias, plantillas o un Flight Schedule y reutilízalos en cualquier copilot. Ahora pasemos a Copilots para ver los seis pasos unidos.",
        anchor: "Inicio rápido",
      },
      "dash-plan": {
        title: "Cuando necesites más margen",
        body: "La barra abajo a la izquierda muestra cuánto de tu cuota mensual llevas usado. En Gestionar plan puedes mejorar tu suscripción y descargar facturas.",
        anchor: "Gestionar plan",
      },
      "copilots-create": {
        title: "Un copilot es una campaña",
        body: "Reúne a quién contactas, qué envías y cuándo. Configuras el primero en seis pasos y no sale ningún correo hasta que pulses lanzar.",
        anchor: "Crear copilot",
      },
      "copilots-workflow": {
        title: "Seis pasos visibles de un vistazo",
        body: "Cada fila muestra cada fase desde Configuración hasta Take-off. Haz clic en cualquier paso o fila para abrir esa parte directamente.",
        anchor: "Estado del flujo",
      },
      "step1-name": {
        title: "Este nombre es solo para ti",
        body: "Solo aparece en tu panel. Ningún destinatario lo verá jamás, así que elige un nombre que reconozcas dentro de tres meses.",
        anchor: "Nombre del copilot",
      },
      "step1-desc": {
        title: "Con una línea basta",
        body: "Opcional. Resulta muy útil cuando tienes varios copilots activos y quieres recordar el propósito de este.",
        anchor: "Descripción",
      },
      "step1-goal": {
        title: "Ponle una cifra",
        body: '"Conseguir 20 reuniones al mes" podrás comprobarlo después. "Conseguir más leads", no.',
        anchor: "Objetivo",
      },
      "step1-summary": {
        title: "Este panel te acompaña",
        body: "Se actualiza mientras configuras el asistente para que siempre veas dónde estás. Todo puede editarse después.",
        anchor: "Resumen del copilot",
      },
      "step1-continue": {
        title: "Guarda sobre la marcha",
        body: "Guardar y continuar te lleva al paso 2 conservando tus datos. Usa los pasos superiores cuando quieras volver a revisar alguno.",
        anchor: "Guardar y continuar",
      },
      "step2-oauth": {
        title: "Gmail o Outlook en un clic",
        body: "Elige el proveedor de tu correo e inicia sesión como siempre. Emailcopilot nunca ve ni guarda tu contraseña.",
        anchor: "Recomendado",
      },
      "step2-smtp": {
        title: "Cualquier otra dirección",
        body: "Si tu correo está alojado en otro servicio, conéctalo aquí con los datos SMTP / IMAP de tu proveedor. Lo demás funciona igual.",
        anchor: "Conectar otro proveedor de correo",
      },
      "step2-saved": {
        title: "Reutiliza cuentas conectadas",
        body: "Todas tus bandejas conectadas quedan aquí. Haz clic en una para elegir desde qué dirección enviará este copilot.",
        anchor: "Cuentas conectadas",
      },
      "step2-why": {
        title: "Las respuestas vuelven directo a tu bandeja",
        body: "Tus correos salen desde tu propia dirección, así que las respuestas llegan a tu bandeja habitual sin herramientas extra.",
        anchor: "4. Las respuestas quedan en tu bandeja",
      },
      "step2-continue": {
        title: "Desactivado a propósito",
        body: "El botón se habilita en cuanto eliges o conectas una cuenta de envío. Sin remitente, el copilot no puede enviar.",
        anchor: "Guardar y continuar",
      },
      "step3-industry": {
        title: "Una industria por público",
        body: "Elige el sector que quieres contactar: es el único filtro obligatorio. Para otro sector distinto, crea otro público.",
        anchor: "Industria",
      },
      "step3-country": {
        title: "Elige países objetivo",
        body: "Selecciona uno o varios países donde operan tus empresas objetivo para cubrir múltiples mercados desde un mismo público.",
        anchor: "País",
      },
      "step3-city": {
        title: "Filtra por ciudad (opcional)",
        body: "Déjalo apagado para incluir todas las ciudades de los países elegidos, o actívalo para escoger ciudades concretas.",
        anchor: "Ciudad",
      },
      "step3-size": {
        title: "Vigila el tamaño del público",
        body: "La barra lateral muestra el total de empresas encontradas tras el rastreo y su escala (de Limitado a Masivo).",
        anchor: "Tamaño est. de audiencia",
      },
      "step3-saved": {
        title: "Tus públicos guardados",
        body: "Cada público creado se guarda aquí. Haz clic en cualquier tarjeta para reutilizarlo en otro copilot al instante.",
        anchor: "Tu público objetivo",
      },
      "step3-continue": {
        title: "Guarda para vincularlo",
        body: "Guardar y continuar guarda el público nuevo o vincula la tarjeta elegida con este copilot.",
        anchor: "Guardar y continuar",
      },
      "step4-name": {
        title: "Nómbrala según la oferta",
        body: "Una misma plantilla puede servir para varios copilots y reutilizarse fácilmente.",
        anchor: "Nombre de plantilla",
      },
      "step4-steps": {
        title: "Redacta el primer correo",
        body: "En Pasos ves la estructura del envío. Escribe aquí el primer mensaje que recibirán tus prospectos.",
        anchor: "Pasos",
      },
      "step4-subject": {
        title: "Corto funciona mejor",
        body: "Unas pocas palabras (menos de 50 caracteres) evitan recortes en móvil. Usar {{companyName}} hace que parezca escrito 1 a 1.",
        anchor: "Línea de asunto",
      },
      "step4-body": {
        title: "Alrededor de 100 palabras",
        body: "Dos o tres párrafos breves: una idea, una pregunta y una respuesta fácil. Los correos cortos se leen completos y logran más respuestas.",
        anchor: "Cuerpo del correo",
      },
      "step4-variables": {
        title: "Las variables se rellenan solas",
        body: "Haz clic en una variable para insertarla en el asunto o el cuerpo. Antes de enviar, cada etiqueta toma los datos reales de la empresa.",
        anchor: "Variables",
      },
      "step4-test": {
        title: "Compruébalo antes que nadie",
        body: "Envía una prueba a tu propia bandeja con las variables rellenas para leer el correo tal como le llegará al destinatario.",
        anchor: "Enviar correo de prueba",
      },
      "step4-saved": {
        title: "Tus plantillas guardadas",
        body: "Tus plantillas guardadas aparecen aquí con vista previa del asunto. Haz clic en una para cargarla en un clic.",
        anchor: "Tus plantillas",
      },
      "step4-continue": {
        title: "Solo falta un paso",
        body: "Ya tienes el quién y el qué. El paso 5 trata únicamente de cuándo se envían los correos.",
        anchor: "Guardar y continuar",
      },
      "step5-name": {
        title: "Pon nombre al Flight Schedule",
        body: "Igual que públicos y plantillas, el Flight Schedule se guarda y reutiliza. Usa un nombre claro como Mañanas laborales.",
        anchor: "Nombre del horario (si es nuevo)",
      },
      "step5-limit": {
        title: "Ajusta tu ritmo diario",
        body: "30 correos al día es un ritmo sano para empezar y cuidar la reputación de tu cuenta emisora.",
        anchor: "Límite diario de envíos",
      },
      "step5-days": {
        title: "Elige sus días laborables",
        body: "Lunes a viernes viene activo por defecto. Añade fin de semana solo si tus destinatarios leen correo esos días.",
        anchor: "Días activos",
      },
      "step5-hours": {
        title: "Su horario, no el tuyo",
        body: "La franja horaria usa la zona horaria elegida justo debajo. Ajústala al país de tus destinatarios.",
        anchor: "Horas de envío",
      },
      "step5-saved": {
        title: "Tus Flight Schedules guardados",
        body: "Haz clic en un Flight Schedule guardado para reutilizarlo, o edita los campos para guardar una copia nueva.",
        anchor: "Tus Flight Schedules",
      },
      "step5-volume": {
        title: "Volumen mensual estimado",
        body: "Multiplica el límite diario por los días activos del mes para calcular qué tan rápido recorrerás tu lista.",
        anchor: "Volumen mensual est.",
      },
      "step5-continue": {
        title: "El horario marca el ritmo",
        body: "Guardar y continuar vincula este Flight Schedule y pasa al paso 6 Take-off para revisar todo antes de enviar.",
        anchor: "Guardar y continuar",
      },
      "step6-review": {
        title: "Un último vistazo",
        body: "Todas tus decisiones en una pantalla. Haz clic en cualquier tarjeta para volver a ese paso antes del Take-off.",
        anchor: "Revisa tu copilot",
      },
      "step6-actions": {
        title: "Tres botones: solo lanzar envía",
        body: "Enviar correo de prueba manda una muestra a tu bandeja. Guardar como borrador guarda todo sin enviar. Lanzar copilot inicia los envíos (puedes pausar cuando quieras).",
        anchor: "Lanzar copilot",
      },
      "step6-relaunch": {
        title: "Editar pausa los envíos",
        body: "Al abrir un copilot activo se pausa el envío mientras editas para no mandar cambios a medias. Pulsa Relanzar copilot cuando estés listo.",
        anchor: "Editar pausa este copilot hasta que lo lances de nuevo.",
      },
    },
  },
};

export function getTourTranslations(locale: string): TourLocaleBundle {
  if (locale in TOUR_TRANSLATIONS) {
    return TOUR_TRANSLATIONS[locale as TourLocale];
  }
  return TOUR_TRANSLATIONS.en;
}
