/**
 * App translations. Keys are the English texts, so English needs no entries
 * and a missing translation simply falls back to English.
 *
 * Product terms stay English in every language: Copilot, Departure,
 * Flight Schedule, Take-off.
 */
export type Messages = Record<string, string>;

const nl: Messages = {
  // Navigation
  Overview: "Overzicht",
  Setup: "Instellen",
  "Email Accounts": "E-mailaccounts",
  "Target Audiences": "Doelgroepen",
  "Email Templates": "E-mailtemplates",
  Billing: "Facturering",
  // User menu
  "emails used": "e-mails gebruikt",
  "Limit reached": "Limiet bereikt",
  "Manage Plan": "Abonnement beheren",
  Profile: "Profiel",
  Language: "Taal",
  "Sign Out": "Uitloggen",
  // Page headers
  "Welcome back!👋": "Welkom terug!👋",
  "Here's what's happening with your outreach today":
    "Dit gebeurt er vandaag met je outreach",
  "Create New Copilot": "Nieuwe copilot maken",
  "Manage your automated outreach campaigns.":
    "Beheer je geautomatiseerde outreach-campagnes.",
  "Recipients who have been emailed by your copilots.":
    "Ontvangers die door je copilots zijn gemaild.",
  "Select Copilot": "Copilot kiezen",
  "Manage the email accounts used for outreach.":
    "Beheer de e-mailaccounts waarmee je outreach verstuurt.",
  "Add Email Account": "E-mailaccount toevoegen",
  "Target Audience": "Doelgroep",
  "Define who you want to reach with your copilot.":
    "Bepaal wie je met je copilot wilt bereiken.",
  "Create New Target Audience": "Nieuwe doelgroep maken",
  "Create and manage reusable email templates for your campaigns.":
    "Maak en beheer herbruikbare e-mailtemplates voor je campagnes.",
  "Create New Email Template": "Nieuwe e-mailtemplate maken",
  "Control when your campaigns send emails.":
    "Bepaal wanneer je campagnes e-mails versturen.",
  "Create New Flight Schedule": "Nieuw flight schedule maken",
  "Manage your subscription, payment method and invoices.":
    "Beheer je abonnement, betaalmethode en facturen.",
  "Billing FAQ": "Veelgestelde vragen",
  Add: "Toevoegen",
  // Settings
  Settings: "Instellingen",
  "Manage your account preferences.": "Beheer je accountvoorkeuren.",
  Security: "Beveiliging",
  "Profile Information": "Profielgegevens",
  "First Name": "Voornaam",
  "Last Name": "Achternaam",
  "Email Address": "E-mailadres",
  Timezone: "Tijdzone",
  "The language of the app. Your email templates stay in the language you write them in.":
    "De taal van de app. Je e-mailtemplates blijven in de taal waarin je ze schrijft.",
  "Save Changes": "Wijzigingen opslaan",
  "Saving...": "Opslaan...",
  "Saved!": "Opgeslagen!",
  "Change Password": "Wachtwoord wijzigen",
  "Current Password": "Huidig wachtwoord",
  "New Password": "Nieuw wachtwoord",
  "Confirm New Password": "Bevestig nieuw wachtwoord",
  "Update Password": "Wachtwoord bijwerken",
  "Updating...": "Bijwerken...",
  "Danger Zone": "Gevarenzone",
  "Permanently delete your account and all associated data. This action cannot be undone.":
    "Verwijder je account en alle bijbehorende gegevens definitief. Dit kan niet ongedaan worden gemaakt.",
  "Delete Account": "Account verwijderen",
  // Copilots page
  "1 copilot archived.": "1 copilot gearchiveerd.",
  "{count} copilots archived.": "{count} copilots gearchiveerd.",
  "1 copilot could not be archived. Please try again.":
    "1 copilot kon niet worden gearchiveerd. Probeer het opnieuw.",
  "{count} copilots could not be archived. Please try again.":
    "{count} copilots konden niet worden gearchiveerd. Probeer het opnieuw.",
  "Loading...": "Laden...",
  "No copilots yet": "Nog geen copilots",
  "No copilots yet.": "Nog geen copilots.",
  "Build your first copilot to start sending personalized emails at scale.":
    "Bouw je eerste copilot en verstuur gepersonaliseerde e-mails op grote schaal.",
  "No copilots match your filter.": "Geen copilots die aan je filter voldoen.",
  "Archive 1 copilot? It stops sending.":
    "1 copilot archiveren? Deze stopt met versturen.",
  "Archive {count} copilots? They stop sending.":
    "{count} copilots archiveren? Ze stoppen met versturen.",
  Cancel: "Annuleren",
  Archive: "Archiveren",
  "Archiving...": "Archiveren...",
  "{count} selected": "{count} geselecteerd",
  "Workflow status": "Workflowstatus",
  Sent: "Verzonden",
  Actions: "Acties",
  "Select all copilots on this page": "Alle copilots op deze pagina selecteren",
  "Already archived": "Al gearchiveerd",
  "Email Account": "E-mailaccount",
  Audience: "Doelgroep",
  Schedule: "Planning",
  Configured: "Ingesteld",
  Incomplete: "Onvolledig",
  Selected: "Gekozen",
  "Not selected": "Niet gekozen",
  Pending: "In afwachting",
  Draft: "Concept",
  "In Flight": "In de lucht",
  Completed: "Voltooid",
  Scheduled: "Gepland",
  Paused: "Gepauzeerd",
  Archived: "Gearchiveerd",
  "All status": "Alle statussen",
  "Search copilots...": "Zoek copilots...",
  "Last sent": "Laatst verzonden",
  "Not yet": "Nog niet",
  "No email account": "Geen e-mailaccount",
  "No flight schedule": "Geen flight schedule",
  "Continue setup": "Verder met instellen",
  "View in Departure": "Bekijk in Departure",
  Resume: "Hervatten",
  "Copilot actions": "Copilot-acties",
  "Copilot resumed successfully.": "Copilot is hervat.",
  "Error resuming copilot. Please try again.":
    "Fout bij hervatten van de copilot. Probeer het opnieuw.",
  "Add an email account and an email template before sending a test email":
    "Voeg een e-mailaccount en een e-mailtemplate toe voordat je een testmail verstuurt",
  "Add an email account before sending a test email":
    "Voeg een e-mailaccount toe voordat je een testmail verstuurt",
  "Add an email template before sending a test email":
    "Voeg een e-mailtemplate toe voordat je een testmail verstuurt",
  "Send a test email to your connected account":
    "Stuur een testmail naar je gekoppelde account",
  "Test email request accepted. Check your connected inbox.":
    "Testmail aangevraagd. Kijk in je gekoppelde inbox.",
  "Failed to send test email. Please try again.":
    "Testmail versturen mislukt. Probeer het opnieuw.",
  "Failed to update status.": "Status bijwerken mislukt.",
  "Copilot launch request accepted.": "Lancering van de copilot aangevraagd.",
  "Failed to launch. Please try again.":
    "Lanceren mislukt. Probeer het opnieuw.",
  "Archive this copilot?": "Deze copilot archiveren?",
  "Failed to archive.": "Archiveren mislukt.",
  "Permanently delete this copilot? This cannot be undone.":
    "Deze copilot definitief verwijderen? Dit kan niet ongedaan worden gemaakt.",
  "Failed to delete.": "Verwijderen mislukt.",
  'Duplicate "{name}"? This will create a new draft copy.':
    '"{name}" dupliceren? Er wordt een nieuwe conceptkopie gemaakt.',
  "Copilot duplicated.": "Copilot gedupliceerd.",
  "Failed to duplicate.": "Dupliceren mislukt.",
  Edit: "Bewerken",
  Duplicate: "Dupliceren",
  "Send Test Email": "Testmail versturen",
  "Sending...": "Versturen...",
  "Complete all setup steps before launching":
    "Rond eerst alle stappen af voordat je lanceert",
  Launch: "Lanceren",
  "Launching...": "Lanceren...",
  Pause: "Pauzeren",
  "Complete all setup steps before resuming":
    "Rond eerst alle stappen af voordat je hervat",
  Delete: "Verwijderen",
  // Departure page
  Address: "Adres",
  "Clear search": "Zoekopdracht wissen",
  Company: "Bedrijf",
  "Sent at": "Verzonden op",
  "Email body": "E-mailtekst",
  Email: "E-mail",
  Exclude: "Uitsluiten",
  Excluded: "Uitgesloten",
  Export: "Exporteren",
  "Failed to update lead.": "Lead bijwerken mislukt.",
  "Include Again": "Weer opnemen",
  "Lead actions": "Lead-acties",
  "Lead exported as CSV.": "Lead geëxporteerd als CSV.",
  "Lead removed from the overview.": "Lead verwijderd uit het overzicht.",
  "Leads will appear here once your copilots start sending emails.":
    "Leads verschijnen hier zodra je copilots e-mails gaan versturen.",
  "No copilot found.": "Geen copilot gevonden.",
  "No description": "Geen omschrijving",
  "No leads yet": "Nog geen leads",
  "No results found": "Geen resultaten gevonden",
  "No target audience": "Geen doelgroep",
  "Page {page} of {pages} ({total} total)":
    "Pagina {page} van {pages} ({total} totaal)",
  Phone: "Telefoon",
  "Remove {email} from your overview?": "{email} uit je overzicht verwijderen?",
  "Search company, email, website or phone...":
    "Zoek op bedrijf, e-mail, website of telefoon...",
  "Select one to view activity": "Kies er een om de activiteit te bekijken",
  "Show email": "Toon e-mail",
  "Show less": "Minder tonen",
  Show: "Toon",
  "Subject line": "Onderwerpregel",
  "Unknown Copilot": "Onbekende copilot",
  Unknown: "Onbekend",
  "Unnamed Copilot": "Naamloze copilot",
  "View full message": "Volledig bericht bekijken",
  "You can email {email} again.": "Je kunt {email} weer e-mailen.",
  "Your Copilots": "Jouw copilots",
  "results per page": "resultaten per pagina",
  show: "toon",
  "{count} sent": "{count} verzonden",
  "{email} is excluded. You won't email them again.":
    "{email} is uitgesloten. Je e-mailt deze persoon niet meer.",
  'No leads match "{query}". Try a different search term.':
    'Geen leads gevonden voor "{query}". Probeer een andere zoekterm.',
  New: "Nieuw",
  Replied: "Beantwoord",
  Failed: "Mislukt",
  Skipped: "Overgeslagen",
  // Overview
  "Emails Sent": "Verzonden e-mails",
  Replies: "Antwoorden",
  "Reply Rate": "Antwoordpercentage",
  "This metric isn't live yet": "Deze statistiek is nog niet live",
  "Coming soon": "Binnenkort",
  "View all": "Bekijk alles",
  Performance: "Prestaties",
  "Last 7 days": "Laatste 7 dagen",
  "Last 14 days": "Laatste 14 dagen",
  "Last 30 days": "Laatste 30 dagen",
  "No copilots found": "Geen copilots gevonden",
  "No departure found": "Nog geen departures",
  "Quick start": "Snel starten",
  "Create a copilot": "Maak een copilot",
  "Add email account": "E-mailaccount toevoegen",
  "Create a target audience": "Maak een doelgroep",
  "Create an email template": "Maak een e-mailtemplate",
  "Create a flight schedule": "Maak een flight schedule",
  "Your data is encrypted and secure. We only use your email account to send emails on your behalf.":
    "Je gegevens zijn versleuteld en veilig. We gebruiken je e-mailaccount alleen om namens jou e-mails te versturen.",
  "Learn more": "Meer informatie",
  "vs {range}": "t.o.v. {range}",
  // Overview (daily stats not live yet)
  "All time": "Totaal",
  "Emails sent and replies per day will appear here soon.":
    "Verzonden e-mails en antwoorden per dag verschijnen hier binnenkort.",
  // Email accounts
  "Account Name": "Accountnaam",
  "Account actions": "Accountacties",
  "Account name and email address are required.":
    "Accountnaam en e-mailadres zijn verplicht.",
  "Add Account": "Account toevoegen",
  "Add an email account to start sending outreach.":
    "Voeg een e-mailaccount toe om outreach te versturen.",
  "Adding...": "Toevoegen...",
  "App Password / Token": "App-wachtwoord / token",
  "Are you sure you want to delete this email account?":
    "Weet je zeker dat je dit e-mailaccount wilt verwijderen?",
  "Choose the email account your copilot will use to send emails.":
    "Kies het e-mailaccount waarmee je copilot e-mails verstuurt.",
  "Connect other email provider": "Andere e-mailprovider koppelen",
  "Connect with Gmail": "Koppelen met Gmail",
  "Connect with Outlook": "Koppelen met Outlook",
  "Connect your Gmail account with OAuth in a few clicks.":
    "Koppel je Gmail-account met OAuth in een paar klikken.",
  "Connect your Outlook account with OAuth in a few clicks.":
    "Koppel je Outlook-account met OAuth in een paar klikken.",
  "Connect your email account": "Koppel je e-mailaccount",
  "Edit Email Account": "E-mailaccount bewerken",
  "Email account created successfully": "E-mailaccount aangemaakt",
  "Email account deleted successfully": "E-mailaccount verwijderd",
  "Email account verified successfully": "E-mailaccount geverifieerd",
  "Emails sent per account isn't live yet":
    "Verzonden e-mails per account is nog niet live",
  "Failed to add the email account.": "E-mailaccount toevoegen mislukt.",
  "Failed to connect via OAuth": "Koppelen via OAuth mislukt",
  "Failed to create email account": "E-mailaccount aanmaken mislukt",
  "Failed to delete email account": "E-mailaccount verwijderen mislukt",
  "Failed to fetch email accounts": "E-mailaccounts ophalen mislukt",
  "Failed to update the email account.": "E-mailaccount bijwerken mislukt.",
  "Failed to verify email account": "E-mailaccount verifiëren mislukt",
  "Go Back": "Terug",
  "John Doe": "Jan Jansen",
  "No Email Accounts Found": "Geen e-mailaccounts gevonden",
  "No Email Accounts Yet": "Nog geen e-mailaccounts",
  "Open account actions": "Accountacties openen",
  "Other options": "Andere opties",
  Port: "Poort",
  Recommended: "Aanbevolen",
  "SMTP Host": "SMTP-host",
  "Search accounts": "Accounts zoeken",
  "Search accounts...": "Zoek accounts...",
  "Try adjusting your search or filters": "Pas je zoekopdracht of filters aan",
  "Use SMTP / IMAP to connect any email provider.":
    "Gebruik SMTP / IMAP om elke e-mailprovider te koppelen.",
  "Your Email Accounts ({count})": "Jouw e-mailaccounts ({count})",
  "Your name / Sender Name": "Je naam / afzendernaam",
  "e.g. Outreach Account": "bijv. Outreach-account",
  "Email account": "E-mailaccount",
  "Email address": "E-mailadres",
  Connected: "Gekoppeld",
  "Emails sent": "Verzonden",
  Verified: "Geverifieerd",
  Unverified: "Niet geverifieerd",
  Error: "Fout",
  "All statuses": "Alle statussen",
  Verify: "Verifiëren",
  "Email account verification failed. Please make sure the account is correctly configured.":
    "Verificatie van het e-mailaccount mislukt. Controleer of het account goed is ingesteld.",
  // Email accounts (badges)
  "Easy setup": "Snel ingesteld",
  // Target audiences
  "Add at least one industry.": "Voeg minstens één branche toe.",
  "All cities within the selected countries are included.":
    "Alle steden in de gekozen landen doen mee.",
  "All cities": "Alle steden",
  "Audience size isn't live yet": "Doelgroepgrootte is nog niet live",
  "Choose the industry of your target companies.":
    "Kies de branche van je doelbedrijven.",
  City: "Stad",
  Copy: "Kopie",
  Country: "Land",
  "Create a target audience for easier access later":
    "Maak een doelgroep aan om hem later snel te gebruiken",
  "Define your Target Audience": "Bepaal je doelgroep",
  "Delete this target audience?": "Deze doelgroep verwijderen?",
  "E.g. Tech Leads in Amsterdam": "Bijv. Tech leads in Amsterdam",
  "Failed to create the target audience.": "Doelgroep aanmaken mislukt.",
  "Failed to duplicate the target audience.": "Doelgroep dupliceren mislukt.",
  "Failed to start. Please try again.": "Starten mislukt. Probeer het opnieuw.",
  "Failed to update the target audience.": "Doelgroep bijwerken mislukt.",
  "Give your target a name so you can easily identify it later":
    "Geef je doelgroep een naam zodat je hem later makkelijk terugvindt",
  "In which cities are your target companies located?":
    "In welke steden zitten je doelbedrijven?",
  "In which countries are your target companies located?":
    "In welke landen zitten je doelbedrijven?",
  Industry: "Branche",
  "No Target Audiences Found": "Geen doelgroepen gevonden",
  "Only companies in the cities you pick below.":
    "Alleen bedrijven in de steden die je hieronder kiest.",
  "Row actions": "Rij-acties",
  "Search target audience...": "Zoek doelgroep...",
  "Search target audiences by name": "Zoek doelgroepen op naam",
  "Target Audience Name": "Naam doelgroep",
  "Target audience created": "Doelgroep aangemaakt",
  "Target audience duplicated.": "Doelgroep gedupliceerd.",
  "Target audience name is required.": "Naam van de doelgroep is verplicht.",
  "Target audience updated": "Doelgroep bijgewerkt",
  "Target specific cities": "Specifieke steden kiezen",
  "Your Target Audiences ({count})": "Jouw doelgroepen ({count})",
  "Target Audience name": "Naam doelgroep",
  "Est. Audience Size": "Geschatte grootte",
  "Last updated": "Laatst bijgewerkt",
  "Type and press Enter to add industries...":
    "Typ en druk op Enter om branches toe te voegen...",
  "Search countries...": "Zoek landen...",
  "Select a country first...": "Kies eerst een land...",
  "Search cities...": "Zoek steden...",
  "Please select a country first": "Kies eerst een land",
  "No cities found": "Geen steden gevonden",
  "Type to search…": "Typ om te zoeken…",
  "Tell your copilot who you want to reach and we’ll find the best matches.":
    "Vertel je copilot wie je wilt bereiken en wij vinden de beste matches.",
  // Email templates
  "Failed to save template.": "Template opslaan mislukt.",
  "Delete this template?": "Deze template verwijderen?",
  "Your Email Templates ({count})": "Jouw e-mailtemplates ({count})",
  "Search email template...": "Zoek e-mailtemplate...",
  "Loading templates…": "Templates laden…",
  "No Active Email Templates": "Geen e-mailtemplates",
  "Create an email template for easier access later":
    "Maak een e-mailtemplate aan om hem later snel te gebruiken",
  "In use": "In gebruik",
  "Not in use": "Niet in gebruik",
  "Reply rate isn't live yet": "Antwoordpercentage is nog niet live",
  "1 step": "1 stap",
  "{count} steps": "{count} stappen",
  "Template actions": "Template-acties",
  "Template name": "Naam template",
  Steps: "Stappen",
  "Used in": "Gebruikt in",
  "Reply rate": "Respons",
  "The company name": "De bedrijfsnaam",
  "Your name (the sender)": "Jouw naam (de afzender)",
  "The company's website": "De website van het bedrijf",
  "Email address of the contact": "E-mailadres van het contact",
  "Add Variables": "Variabelen toevoegen",
  "Step {n} - Initial Email": "Stap {n} - Eerste e-mail",
  "Step {n} - Follow-up {m}": "Stap {n} - Follow-up {m}",
  "A personalized cold email": "Een persoonlijke koude e-mail",
  "Send {days} days after no reply": "Verstuur {days} dagen na geen antwoord",
  "Edit email template": "E-mailtemplate bewerken",
  "Create new email template": "Nieuwe e-mailtemplate maken",
  Save: "Opslaan",
  "Email template name": "Naam e-mailtemplate",
  "Name your template": "Geef je template een naam",
  "Type your subject line": "Typ je onderwerpregel",
  Variables: "Variabelen",
  "Delete step": "Stap verwijderen",
  "Add Follow-up Step": "Follow-upstap toevoegen",
  "Click to insert at your cursor": "Klik om in te voegen bij je cursor",
  "Your email templates": "Jouw e-mailtemplates",
  "No saved templates yet.": "Nog geen opgeslagen templates.",
  "View more ({count} more)": "Meer bekijken (nog {count})",
  "Save changes": "Wijzigingen opslaan",
  // Flight schedule
  Mon: "Ma",
  Tue: "Di",
  Wed: "Wo",
  Thu: "Do",
  Fri: "Vr",
  Sat: "Za",
  Sun: "Zo",
  "No active days": "Geen actieve dagen",
  "No Flight Schedules Found": "Geen flight schedules gevonden",
  "No Flight Schedules Yet": "Nog geen flight schedules",
  "Create a flight schedule for easier access later":
    "Maak een flight schedule aan om hem later snel te gebruiken",
  "Your Flight Schedules ({count})": "Jouw flight schedules ({count})",
  "Search flight schedule...": "Zoek flight schedule...",
  "Search flight schedules by name": "Zoek flight schedules op naam",
  "Loading flight schedules…": "Flight schedules laden…",
  "Flight schedule name": "Naam flight schedule",
  Days: "Dagen",
  Time: "Tijd",
  "Used by": "Gebruikt door",
  "Flight schedule actions": "Flight schedule-acties",
  "Failed to load flight schedules.": "Flight schedules laden mislukt.",
  "Flight schedule updated.": "Flight schedule bijgewerkt.",
  "Flight schedule created.": "Flight schedule aangemaakt.",
  "Are you sure you want to delete this flight schedule?":
    "Weet je zeker dat je deze flight schedule wilt verwijderen?",
  "Flight schedule deleted.": "Flight schedule verwijderd.",
  "Failed to delete flight schedule.": "Flight schedule verwijderen mislukt.",
  "Flight schedule duplicated.": "Flight schedule gedupliceerd.",
  "Failed to duplicate flight schedule.": "Flight schedule dupliceren mislukt.",
  "Configure when and how emails are sent.":
    "Stel in wanneer en hoe e-mails worden verstuurd.",
  "Schedule Name": "Naam schema",
  "Daily Send Limit": "Dagelijkse verzendlimiet",
  "Maximum number of new emails to send per day.":
    "Maximaal aantal nieuwe e-mails per dag.",
  "Recommended: 20–50 per day": "Aanbevolen: 20–50 per dag",
  "Unlimited sending": "Onbeperkt versturen",
  "Active Days": "Actieve dagen",
  "Choose which days emails can be sent.":
    "Kies op welke dagen e-mails verstuurd mogen worden.",
  "Sending Hours": "Verzendtijden",
  "Set the daily time window for sending emails.":
    "Stel het dagelijkse tijdvenster in voor het versturen.",
  From: "Van",
  To: "Tot",
  "Sending hours are off": "Verzendtijden staan uit",
  "Timezone for sending and scheduling.": "Tijdzone voor versturen en plannen.",
  "Please select at least one active day.": "Kies minstens één actieve dag.",
  "Failed to save flight schedule. Please try again.":
    "Flight schedule opslaan mislukt. Probeer het opnieuw.",
  "Edit Flight Schedule": "Flight schedule bewerken",
  "New Flight Schedule": "Nieuwe flight schedule",
  "e.g. Mornings, Afternoons, Weekend…": "bijv. Ochtenden, Middagen, Weekend…",
  "Your copilot will send as many emails as possible within the active hours each day.":
    "Je copilot verstuurt zoveel mogelijk e-mails binnen de actieve uren van elke dag.",
  "Availability: {value} (selected active days only).":
    "Beschikbaarheid: {value} (alleen gekozen actieve dagen).",
  "Saving…": "Opslaan…",
  "Create Schedule": "Schema maken",
  // Billing
  "Could not start checkout. Try again.":
    "Afrekenen starten mislukt. Probeer het opnieuw.",
  "Subscription canceled. You keep access until the end of your billing period.":
    "Abonnement opgezegd. Je houdt toegang tot het einde van je factuurperiode.",
  "Could not cancel your subscription.": "Abonnement opzeggen mislukt.",
  "Could not update your payment method. Try again.":
    "Betaalmethode bijwerken mislukt. Probeer het opnieuw.",
  "Your payment is still being processed. This page updates as soon as it's confirmed.":
    "Je betaling wordt nog verwerkt. Deze pagina werkt bij zodra hij is bevestigd.",
  "Cancel your subscription?": "Je abonnement opzeggen?",
  "You'll keep access to your current plan until the end of your billing period. Your Copilots and data stay untouched.":
    "Je houdt toegang tot je huidige abonnement tot het einde van je factuurperiode. Je copilots en gegevens blijven onaangetast.",
  "Canceling...": "Opzeggen...",
  "Cancel plan": "Abonnement opzeggen",
  "Keep plan": "Abonnement houden",
  "Billing summary": "Factuuroverzicht",
  Plan: "Abonnement",
  Price: "Prijs",
  "Billing period": "Factuurperiode",
  "Next billing date": "Volgende factuurdatum",
  "Amount due": "Te betalen",
  Annual: "Jaarlijks",
  Monthly: "Maandelijks",
  "Update payment method": "Betaalmethode bijwerken",
  "Current Plan": "Huidig abonnement",
  "Subscription actions": "Abonnementsacties",
  "Email credits usage": "Gebruik e-mailtegoed",
  "Emails used": "E-mails gebruikt",
  "{percent} % used": "{percent} % gebruikt",
  "Monthly allowance reached. Sending resumes on {date}.":
    "Maandtegoed bereikt. Versturen gaat verder op {date}.",
  "Monthly allowance reached. Sending resumes when your allowance renews.":
    "Maandtegoed bereikt. Versturen gaat verder zodra je tegoed wordt vernieuwd.",
  "Your plan is canceled and stays active until {date}.":
    "Je abonnement is opgezegd en blijft actief tot {date}.",
  "Card on file": "Kaart geregistreerd",
  "Change plan": "Abonnement wijzigen",
  "Plan renews on": "Verlengt op",
  "Payment method": "Betaalmethode",
  Update: "Bijwerken",
  "/ year": "/ jaar",
  "/ month": "/ maand",
  "Current plan": "Huidig abonnement",
  "Most Popular": "Meest gekozen",
  "Choose plan": "Kies abonnement",
  "Included:": "Inbegrepen:",
  "Perfect for individuals.": "Perfect voor zelfstandigen.",
  "Perfect for growing businesses.": "Perfect voor groeiende bedrijven.",
  "For power users and teams": "Voor power users en teams",
  "Choose your plan": "Kies je abonnement",
  "Billing interval": "Factuurinterval",
  "Save {percent}%": "Bespaar {percent}%",
  "Back to billing": "Terug naar facturering",
  "Cancel anytime. No long-term commitments.":
    "Altijd opzegbaar. Geen lange contracten.",
  "Cancel anytime": "Altijd opzegbaar",
  "No contracts. Upgrade or downgrade anytime.":
    "Geen contracten. Op- of afschalen wanneer je wilt.",
  "Your own email": "Je eigen e-mail",
  "Every email is sent from your own connected email account.":
    "Elke e-mail wordt verstuurd vanaf je eigen gekoppelde e-mailaccount.",
  "Secure & reliable": "Veilig & betrouwbaar",
  "Your data is encrypted and never shared.":
    "Je gegevens zijn versleuteld en worden nooit gedeeld.",
  Invoices: "Facturen",
  "No invoices yet.": "Nog geen facturen.",
  "Download invoice": "Factuur downloaden",
  Date: "Datum",
  "View and download your past invoices.":
    "Bekijk en download je eerdere facturen.",
  Invoice: "Factuur",
  Amount: "Bedrag",
  Download: "Downloaden",
  "View all invoices": "Alle facturen bekijken",
  Paid: "Betaald",
  "Need help?": "Hulp nodig?",
  "If you have any question about billing or your subscription we're here to help.":
    "Heb je een vraag over facturering of je abonnement? We helpen je graag.",
  "Find answers to common billing questions.":
    "Vind antwoorden op veelgestelde factuurvragen.",
  "Contact support": "Contact met support",
  "Everything you need to know about payments, subscriptions and invoices.":
    "Alles wat je moet weten over betalingen, abonnementen en facturen.",
  "Search billing questions...": "Zoek in factuurvragen...",
  "Search billing questions": "Zoek in factuurvragen",
  "No questions match your search.":
    "Geen vragen gevonden voor je zoekopdracht.",
  "We're here to help. Contact our team and we'll get back to you as soon as possible.":
    "We helpen je graag. Neem contact op met ons team en we reageren zo snel mogelijk.",
  "Still have questions?": "Nog vragen?",
  "Email us": "Mail ons",
  "1 email account": "1 e-mailaccount",
  "3 email accounts": "3 e-mailaccounts",
  "5 email accounts": "5 e-mailaccounts",
  "500 emails/month": "500 e-mails/maand",
  "1,200 emails/month": "1.200 e-mails/maand",
  "3,000 emails/month": "3.000 e-mails/maand",
  "CSV export": "CSV-export",
  "Email support": "E-mailsupport",
  "Priority support": "Prioriteitssupport",
  "What payment methods do you accept?":
    "Welke betaalmethoden accepteren jullie?",
  "We currently accept all major credit and debit cards. We're always looking to expand our supported payment methods.":
    "We accepteren momenteel alle gangbare creditcards en debitcards. We kijken altijd naar meer betaalmethoden.",
  "Can I change my plan at any time?":
    "Kan ik op elk moment van abonnement wisselen?",
  "Yes. You can upgrade or downgrade your plan at any time from the Billing page. Your new subscription starts immediately after payment.":
    "Ja. Je kunt op elk moment op- of afschalen via de pagina Facturering. Je nieuwe abonnement start direct na betaling.",
  "Can I cancel my subscription at any time?":
    "Kan ik mijn abonnement op elk moment opzeggen?",
  "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your Billing settings, and your plan will remain active until the end of your current billing period.":
    "Zeker. Er zijn geen lange contracten. Je kunt je abonnement op elk moment opzeggen via Facturering, en het blijft actief tot het einde van je huidige factuurperiode.",
  "When will I be charged?": "Wanneer wordt er afgeschreven?",
  "Your subscription renews automatically on the same day of each billing cycle. You can always view your next billing date and upcoming charge from the Billing page.":
    "Je abonnement verlengt automatisch op dezelfde dag van elke factuurperiode. Je volgende factuurdatum en bedrag zie je altijd op de pagina Facturering.",
  "What happens if my payment fails?":
    "Wat gebeurt er als mijn betaling mislukt?",
  "If a payment can't be processed, we'll automatically retry your payment and notify you by email. If payment continues to fail, your subscription may be paused until your payment method is updated.":
    "Als een betaling niet lukt, proberen we het automatisch opnieuw en sturen we je een e-mail. Blijft de betaling mislukken, dan kan je abonnement worden gepauzeerd tot je betaalmethode is bijgewerkt.",
  "Where can I download my invoices?": "Waar kan ik mijn facturen downloaden?",
  "All of your invoices are available in the Billing History section of your Billing page. You can download them at any time for your records or accounting.":
    "Al je facturen staan in het factuuroverzicht op de pagina Facturering. Je kunt ze altijd downloaden voor je administratie of boekhouding.",
  "Do you offer annual billing?": "Bieden jullie jaarlijkse facturering aan?",
  "Yes. You can choose between monthly and annual billing. Annual subscriptions include a discounted rate compared to paying monthly.":
    "Ja. Je kiest tussen maandelijks en jaarlijks betalen. Een jaarabonnement is voordeliger dan maandelijks betalen.",
  "Will I lose my data if I downgrade?":
    "Verlies ik mijn gegevens als ik afschaal?",
  "No. Your data remains safely stored. If your new plan includes lower limits, some features or usage may be restricted until you're within your new plan's limits or decide to upgrade again.":
    "Nee. Je gegevens blijven veilig bewaard. Heeft je nieuwe abonnement lagere limieten, dan kunnen sommige functies of gebruik beperkt zijn tot je binnen de nieuwe limieten valt of weer opschaalt.",
  "What happens if I reach my monthly email limit?":
    "Wat gebeurt er als ik mijn maandelijkse e-maillimiet bereik?",
  "Once you've reached your monthly email allowance, your Copilots will pause sending new emails until your limit resets or you upgrade to a higher plan. Your data, settings, and Copilots remain unchanged.":
    "Zodra je je maandtegoed hebt bereikt, versturen je copilots geen nieuwe e-mails meer tot je limiet wordt vernieuwd of je opschaalt. Je gegevens, instellingen en copilots blijven ongewijzigd.",
  "How do refunds work?": "Hoe werken terugbetalingen?",
  "We generally don't offer refunds for subscription payments. However, if you've experienced a billing issue or believe you've been charged incorrectly, please contact us and we'll review your case fairly.":
    "Over het algemeen betalen we abonnementskosten niet terug. Heb je een factuurprobleem of denk je dat er onterecht is afgeschreven? Neem contact met ons op en we bekijken je situatie eerlijk.",
  "Is my payment information secure?": "Zijn mijn betaalgegevens veilig?",
  "Yes. All payments are processed securely through our trusted payment provider. Emailcopilot never stores your full payment card details.":
    "Ja. Alle betalingen worden veilig verwerkt via onze vertrouwde betaalprovider. Emailcopilot slaat nooit je volledige kaartgegevens op.",
  "How do I contact billing support?":
    "Hoe neem ik contact op met factuursupport?",
  "If you have any questions about your subscription, invoices, payments, or billing, our team is here to help.":
    "Heb je vragen over je abonnement, facturen, betalingen of facturering? Ons team helpt je graag.",
  // New copilot wizard + limit dialogs
  "{provider} connected successfully": "{provider} is gekoppeld",
  "Failed to load copilot. Please try again.":
    "Copilot laden mislukt. Probeer het opnieuw.",
  "Copy of {name}": "Kopie van {name}",
  "Edit Copilot": "Copilot bewerken",
  "Duplicate Copilot": "Copilot dupliceren",
  "Changes saved — the copilot stays paused until you re-launch it.":
    "Wijzigingen opgeslagen — de copilot blijft gepauzeerd tot je hem opnieuw lanceert.",
  "Draft saved — you can launch anytime.":
    "Concept opgeslagen — je kunt op elk moment lanceren.",
  "Failed to save draft. Please try again.":
    "Concept opslaan mislukt. Probeer het opnieuw.",
  "Copilot launch accepted.": "Lancering van de copilot geaccepteerd.",
  "Failed to launch copilot. Please try again.":
    "Copilot lanceren mislukt. Probeer het opnieuw.",
  "Your monthly email allowance is used up. Upgrade your plan to re-launch this copilot.":
    "Je maandelijkse e-mailtegoed is op. Upgrade je abonnement om deze copilot opnieuw te lanceren.",
  "Copilot re-launched.": "Copilot opnieuw gelanceerd.",
  "Loading copilot...": "Copilot laden...",
  "Build your outbound copilot in 6 simple steps.":
    "Bouw je outbound-copilot in 6 eenvoudige stappen.",
  "Discard & exit": "Verwerpen en sluiten",
  "Editing pauses this copilot until you launch it again.":
    "Bewerken pauzeert deze copilot tot je hem opnieuw lanceert.",
  "No flight schedules available yet — use the form above to create one.":
    "Nog geen flight schedules — maak er een met het formulier hierboven.",
  "Monday - Friday": "Maandag - vrijdag",
  "Weekend only": "Alleen weekend",
  "Every day": "Elke dag",
  Unlimited: "Onbeperkt",
  "Schedule Summary": "Samenvatting schema",
  "Here's how your copilot will send.": "Zo gaat je copilot versturen.",
  "Daily send limit": "Dagelijkse verzendlimiet",
  "{n} emails per day": "{n} e-mails per dag",
  "Unlimited emails": "Onbeperkt e-mails",
  "Active days": "Actieve dagen",
  "Sending hours": "Verzendtijden",
  "Est. monthly volume": "Geschat maandvolume",
  "{volume} emails": "{volume} e-mails",
  "Based on {n} active days/month": "Op basis van {n} actieve dagen/maand",
  "These settings help maximize deliverability and keep your account safe.":
    "Deze instellingen helpen de bezorgbaarheid te maximaliseren en je account veilig te houden.",
  "Changes saved as a new schedule — the original schedule was not changed.":
    "Wijzigingen opgeslagen als nieuw schema — het originele schema is niet gewijzigd.",
  "Flight schedule created and linked.":
    "Flight schedule aangemaakt en gekoppeld.",
  "Failed to create flight schedule. Please try again.":
    "Flight schedule aanmaken mislukt. Probeer het opnieuw.",
  "Configure Flight Schedule": "Flight Schedule instellen",
  "Choose when and how your copilot sends emails.":
    "Kies wanneer en hoe je copilot e-mails verstuurt.",
  "Schedule Name (if creating new)": "Naam schema (bij nieuw schema)",
  "e.g. My Custom Schedule": "bijv. Mijn eigen schema",
  "Recommended: 20-50 per day for best deliverability":
    "Aanbevolen: 20-50 per dag voor de beste bezorgbaarheid",
  "Choose which days your copilot is allowed to send emails.":
    "Kies op welke dagen je copilot e-mails mag versturen.",
  "(your timezone)": "(jouw tijdzone)",
  "Set the daily time window when your copilot can send emails.":
    "Stel het dagelijkse tijdvenster in waarin je copilot e-mails mag versturen.",
  "Default Timezone": "Standaardtijdzone",
  "Custom schedule — a new schedule will be created and linked when you continue.":
    "Eigen schema — er wordt een nieuw schema aangemaakt en gekoppeld als je verdergaat.",
  "A new schedule named “{name}” will be created and linked. The original schedule stays unchanged.":
    "Er wordt een nieuw schema “{name}” aangemaakt en gekoppeld. Het originele schema blijft ongewijzigd.",
  "Modified from “{name}” — your changes will be saved as a new schedule. The original schedule stays unchanged.":
    "Aangepast vanaf “{name}” — je wijzigingen worden opgeslagen als nieuw schema. Het originele schema blijft ongewijzigd.",
  "Using saved schedule: {name} — nothing will be changed when you continue.":
    "Opgeslagen schema in gebruik: {name} — er verandert niets als je verdergaat.",
  "Your Flight Schedules": "Jouw flight schedules",
  "Using: {name}": "In gebruik: {name}",
  "Template summary": "Samenvatting template",
  "1-step sequence": "Reeks van 1 stap",
  "Failed to save template. Please try again.":
    "Template opslaan mislukt. Probeer het opnieuw.",
  "Select an email account before sending a test email.":
    "Kies een e-mailaccount voordat je een testmail verstuurt.",
  "Create your email template": "Maak je e-mailtemplate",
  "Write the email your copilot will send to your target audience.":
    "Schrijf de e-mail die je copilot naar je doelgroep stuurt.",
  "Send test email": "Testmail versturen",
  "Step 1 - Initial Email": "Stap 1 - Eerste e-mail",
  "This is the first email your leads will receive.":
    "Dit is de eerste e-mail die je leads ontvangen.",
  "Your Templates": "Jouw templates",
  "Loading all leads to filter by status…": "Alle leads laden om op status te filteren…",
  "No leads with status \"{status}\".": "Geen leads met status \"{status}\".",
  "Show all": "Alles tonen",
  "Saved flight schedules": "Opgeslagen flight schedules",
  "Search by name…": "Zoek op naam…",
  "When you save": "Bij opslaan",
  "Update this template": "Deze template bijwerken",
  "Changes also apply to other copilots that use it.": "Wijzigingen gelden ook voor andere copilots die hem gebruiken.",
  "Save as a new template": "Opslaan als nieuwe template",
  "The saved template stays as it is.": "De opgeslagen template blijft zoals hij is.",
  "Saved as a new template: {name}": "Opgeslagen als nieuwe template: {name}",
  "Saved target audiences": "Opgeslagen doelgroepen",
  "Saved templates": "Opgeslagen templates",
  "Selected:": "Gekozen:",
  "Search by name, country or city…": "Zoek op naam, land of stad…",
  "Search by name or subject…": "Zoek op naam of onderwerp…",
  "No matches for \"{query}\"": "Geen resultaten voor \"{query}\"",
  "Fetching templates...": "Templates ophalen...",
  "No templates yet": "Nog geen templates",
  "Once you save a template it will appear here, ready to use.":
    "Zodra je een template opslaat, verschijnt hij hier, klaar voor gebruik.",
  Subj: "Onderw.",
  "Use this template": "Deze template gebruiken",
  "Copilot Summary": "Samenvatting copilot",
  "Here’s a summary of your copilot.":
    "Hier is een samenvatting van je copilot.",
  "Copilot Name": "Naam copilot",
  "Private Jet Operators": "Privéjetmaatschappijen",
  Description: "Omschrijving",
  "Book more appointments and generate qualified leads":
    "Meer afspraken boeken en gekwalificeerde leads genereren",
  Goal: "Doel",
  "You can edit all settings later at any time.":
    "Je kunt alle instellingen later altijd nog aanpassen.",
  "Paused while editing": "Gepauzeerd tijdens bewerken",
  "Draft saved": "Concept opgeslagen",
  "Your changes are saved. Re-launch to start sending again.":
    "Je wijzigingen zijn opgeslagen. Lanceer opnieuw om weer te versturen.",
  "Your progress is saved. Come back anytime to finish.":
    "Je voortgang is opgeslagen. Kom op elk moment terug om af te ronden.",
  "Failed to save copilot. Please try again.":
    "Copilot opslaan mislukt. Probeer het opnieuw.",
  "Setup Your Copilot": "Stel je copilot in",
  "Give your Copilot a name and describe its purpose.":
    "Geef je copilot een naam en beschrijf het doel.",
  "Internal name to identify your copilot.":
    "Interne naam om je copilot te herkennen.",
  "e.g. Private Jet Operators": "bijv. Privéjetmaatschappijen",
  "Describe what this copilot does and who it’s for.":
    "Beschrijf wat deze copilot doet en voor wie hij is.",
  "e.g. Reach out to private jet operators in Amsterdam and introduce our services":
    "bijv. Benader privéjetmaatschappijen in Amsterdam en introduceer onze diensten",
  "What is the main goal of this copilot?":
    "Wat is het belangrijkste doel van deze copilot?",
  "e.g. Book more appointments and generate qualified leads":
    "bijv. Meer afspraken boeken en gekwalificeerde leads genereren",
  None: "Geen",
  "Copilot name": "Naam copilot",
  "Not set yet": "Nog niet ingesteld",
  "N/A": "n.v.t.",
  "Email Template": "E-mailtemplate",
  "Ready to re-launch": "Klaar om opnieuw te lanceren",
  "Ready to take-off": "Klaar voor take-off",
  "Incomplete — finish setup": "Onvolledig — rond het instellen af",
  "Monday - Sunday": "Maandag - zondag",
  All: "Alle",
  "{count} companies": "{count} bedrijven",
  "After first run": "Na de eerste run",
  "Review your copilot": "Controleer je copilot",
  "Everything looks good! Review your settings before launching.":
    "Alles ziet er goed uit! Controleer je instellingen voordat je lanceert.",
  "Review your settings and finish the open steps before launching.":
    "Controleer je instellingen en rond de open stappen af voordat je lanceert.",
  "Not specified": "Niet opgegeven",
  "Sending as": "Verstuurd als",
  Location: "Locatie",
  "Est. audience size": "Geschatte grootte",
  Sequence: "Reeks",
  "Total touches": "Contactmomenten",
  "You're ready to take off!": "Je bent klaar voor take-off!",
  "Almost ready to take off": "Bijna klaar voor take-off",
  "You are ready to fly": "Je bent klaar om te vliegen",
  "Finish setup to fly": "Rond het instellen af om te vliegen",
  "{done} of {total} steps complete": "{done} van {total} stappen voltooid",
  Back: "Terug",
  "Save, keep paused": "Opslaan, gepauzeerd laten",
  "Save as Draft": "Opslaan als concept",
  "Re-launching...": "Opnieuw lanceren...",
  "Re-launch Copilot": "Copilot opnieuw lanceren",
  "Launch Copilot": "Copilot lanceren",
  "Loading copilot data…": "Copilotgegevens laden…",
  "Complete all steps before launching":
    "Rond alle stappen af voordat je lanceert",
  "Test email request accepted": "Testmail-verzoek geaccepteerd",
  "your connected inbox": "je gekoppelde inbox",
  "Not now": "Nu niet",
  "Re-launch copilot": "Copilot opnieuw lanceren",
  "Launch copilot": "Copilot lanceren",
  "Re-launch without testing?": "Opnieuw lanceren zonder te testen?",
  "Launch without testing?": "Lanceren zonder te testen?",
  Close: "Sluiten",
  "your target audience": "je doelgroep",
  "your email account": "je e-mailaccount",
  "A test takes about a minute and reaches nobody but you. Test emails don't count toward your monthly limit.":
    "Een test duurt ongeveer een minuut en komt alleen bij jou aan. Testmails tellen niet mee voor je maandlimiet.",
  "Re-launch anyway": "Toch opnieuw lanceren",
  "Launch anyway": "Toch lanceren",
  "Send a test first": "Eerst een test versturen",
  "Check {inbox} and make sure everything looks right. When you're happy with it, re-launch your copilot.":
    "Kijk in {inbox} en controleer of alles klopt. Ben je tevreden, lanceer je copilot dan opnieuw.",
  "Check {inbox} and make sure everything looks right. When you're happy with it, launch your copilot.":
    "Kijk in {inbox} en controleer of alles klopt. Ben je tevreden, lanceer je copilot dan.",
  "This copilot will start emailing {audience} again from {sender}. You haven't read the email yourself yet.":
    "Deze copilot gaat {audience} weer mailen vanaf {sender}. Je hebt de e-mail zelf nog niet gelezen.",
  "This copilot will start emailing {audience} from {sender}. You haven't read the email yourself yet.":
    "Deze copilot gaat {audience} mailen vanaf {sender}. Je hebt de e-mail zelf nog niet gelezen.",
  "Target Audience created successfully": "Doelgroep aangemaakt",
  "Failed to create target audience": "Doelgroep aanmaken mislukt",
  "Type and press Enter to add industries…":
    "Typ en druk op Enter om branches toe te voegen…",
  "Search countries…": "Zoek landen…",
  "Select a country first…": "Kies eerst een land…",
  "Search cities…": "Zoek steden…",
  "Your Target Audience": "Jouw doelgroep",
  "Loading target audiences...": "Doelgroepen laden...",
  "No saved target audiences yet.": "Nog geen opgeslagen doelgroepen.",
  "Target Profile Summary": "Samenvatting doelgroep",
  "This is who your copilot will reach.":
    "Dit zijn de mensen die je copilot gaat bereiken.",
  "None selected": "Niets gekozen",
  Cities: "Steden",
  companies: "bedrijven",
  "Calculated after the first run": "Berekend na de eerste run",
  "Are you sure you want to delete this account?":
    "Weet je zeker dat je dit account wilt verwijderen?",
  "Why connect my email account?": "Waarom mijn e-mailaccount koppelen?",
  "1. Connect securely": "1. Veilig koppelen",
  "Your account is securely connected via OAuth, so we never see or store your password.":
    "Je account wordt veilig gekoppeld via OAuth, dus we zien of bewaren je wachtwoord nooit.",
  "2. Send from your own email address":
    "2. Verstuur vanaf je eigen e-mailadres",
  "This helps recipients recognize and trust the sender.":
    "Zo herkennen en vertrouwen ontvangers de afzender.",
  "3. Built for deliverability": "3. Gebouwd voor bezorgbaarheid",
  "Gradual warmup and daily limits to protect your sender reputation.":
    "Geleidelijke opwarming en daglimieten om je afzenderreputatie te beschermen.",
  "4. Replies stay in your inbox": "4. Antwoorden blijven in je inbox",
  "Replies go straight to your own inbox, so you can continue the conversation as usual.":
    "Antwoorden komen direct in je eigen inbox, zodat je het gesprek gewoon kunt voortzetten.",
  "Step {n} of {total}": "Stap {n} van {total}",
  "Step {n}": "Stap {n}",
  "Save & Continue": "Opslaan en verder",
  "Search timezone...": "Zoek tijdzone...",
  "No timezone found.": "Geen tijdzone gevonden.",
  "Feedback submission is not implemented yet.":
    "Feedback versturen is nog niet beschikbaar.",
  "We couldn’t send your feedback. Please try again.":
    "We konden je feedback niet versturen. Probeer het opnieuw.",
  "Thanks for your feedback": "Bedankt voor je feedback",
  "Your feedback helps us improve copilot setup.":
    "Met je feedback maken we het instellen van een copilot beter.",
  Done: "Klaar",
  "How easy was it to set up your copilot?":
    "Hoe makkelijk was het om je copilot in te stellen?",
  "Tell us what worked and what we can improve.":
    "Vertel ons wat goed ging en wat beter kan.",
  "Sending…": "Versturen…",
  "Send feedback": "Feedback versturen",
  "Closing…": "Sluiten…",
  "Saving reminder…": "Herinnering opslaan…",
  "Your rating": "Je beoordeling",
  "(required)": "(verplicht)",
  "{value} out of 5": "{value} van de 5",
  "Very difficult": "Heel moeilijk",
  "Very easy": "Heel makkelijk",
  Comment: "Opmerking",
  "(optional)": "(optioneel)",
  "What could we make easier?": "Wat kunnen we makkelijker maken?",
  "All days": "Alle dagen",
  Weekdays: "Werkdagen",
  "{n} / day": "{n} / dag",
  "From {start} to {end}": "Van {start} tot {end}",
  "Default timezone": "Standaardtijdzone",
  current: "huidige",
  "Copilot limit reached": "Copilotlimiet bereikt",
  "You are already on our highest plan. Contact support if you need more copilots.":
    "Je hebt al ons hoogste abonnement. Neem contact op met support als je meer copilots nodig hebt.",
  "Your {plan} plan includes {max} copilot and you are using it. Delete it to free a slot, or upgrade to add more.":
    "Je {plan}-abonnement bevat {max} copilot en die gebruik je al. Verwijder hem om ruimte te maken, of upgrade om er meer toe te voegen.",
  "Your {plan} plan includes {max} copilots and you are using all {max}. Delete one of your copilots to free a slot, or upgrade to add more.":
    "Je {plan}-abonnement bevat {max} copilots en je gebruikt ze alle {max}. Verwijder een copilot om ruimte te maken, of upgrade om er meer toe te voegen.",
  "Your {plan} plan includes {max} copilot and you are using it. Delete it to free a slot.":
    "Je {plan}-abonnement bevat {max} copilot en die gebruik je al. Verwijder hem om ruimte te maken.",
  "Your {plan} plan includes {max} copilots and you are using all {max}. Delete one of your copilots to free a slot.":
    "Je {plan}-abonnement bevat {max} copilots en je gebruikt ze alle {max}. Verwijder een copilot om ruimte te maken.",
  "Monthly email allowance reached ({used} of {max} used). Your copilots pause sending until the allowance renews on {date}.":
    "Maandelijks e-mailtegoed bereikt ({used} van {max} gebruikt). Je copilots pauzeren tot het tegoed op {date} wordt vernieuwd.",
  "Monthly email allowance reached ({used} of {max} used). Your copilots pause sending until the allowance renews.":
    "Maandelijks e-mailtegoed bereikt ({used} van {max} gebruikt). Je copilots pauzeren tot het tegoed wordt vernieuwd.",
  "You have used {used} of {max} emails this month. {remaining} left before your copilots pause.":
    "Je hebt deze maand {used} van {max} e-mails gebruikt. Nog {remaining} voordat je copilots pauzeren.",
  Upgrade: "Upgraden",
  "View plan": "Abonnement bekijken",
  Dismiss: "Sluiten",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. Upgrade for a higher monthly allowance, or wait until {date} when your allowance renews.":
    "Je {plan}-abonnement bevat {max} e-mails per maand en je hebt ze alle {used} gebruikt. Upgrade voor meer tegoed per maand, of wacht tot {date}, wanneer je tegoed wordt vernieuwd.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. Upgrade for a higher monthly allowance, or wait until your allowance renews.":
    "Je {plan}-abonnement bevat {max} e-mails per maand en je hebt ze alle {used} gebruikt. Upgrade voor meer tegoed per maand, of wacht tot je tegoed wordt vernieuwd.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. You are on our highest plan, so sending resumes when your allowance renews on {date}.":
    "Je {plan}-abonnement bevat {max} e-mails per maand en je hebt ze alle {used} gebruikt. Je hebt ons hoogste abonnement, dus het versturen gaat verder zodra je tegoed op {date} wordt vernieuwd.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. You are on our highest plan, so sending resumes when your allowance renews.":
    "Je {plan}-abonnement bevat {max} e-mails per maand en je hebt ze alle {used} gebruikt. Je hebt ons hoogste abonnement, dus het versturen gaat verder zodra je tegoed wordt vernieuwd.",
  "Monthly email allowance reached": "Maandelijks e-mailtegoed bereikt",
  "You are already on our highest plan. Your allowance renews automatically next month.":
    "Je hebt al ons hoogste abonnement. Je tegoed wordt volgende maand automatisch vernieuwd.",
  "Yearly (save 20%)": "Jaarlijks (20% korting)",
  "Maybe later": "Misschien later",
  "Go to Billing": "Naar facturering",
  "Got it": "Begrepen",
  "The sending schedule is unavailable. Please check its settings.":
    "Het verzendschema is niet beschikbaar. Controleer de instellingen.",
  "Select at least one valid active day before sending a test email.":
    "Kies minstens één geldige actieve dag voordat je een testmail verstuurt.",
  "Select a valid schedule timezone before sending a test email.":
    "Kies een geldige tijdzone voor het schema voordat je een testmail verstuurt.",
  "Please check the schedule's sending hours settings before sending a test email.":
    "Controleer de verzendtijden van het schema voordat je een testmail verstuurt.",
  "Choose valid, different start and end times before sending a test email.":
    "Kies een geldige, verschillende begin- en eindtijd voordat je een testmail verstuurt.",
  "Test emails are only allowed from {start} to {end} ({timezone}) on active days.":
    "Testmails kunnen alleen van {start} tot {end} ({timezone}) op actieve dagen.",
  "We couldn’t save your reminder. Please try again.":
    "We konden je herinnering niet opslaan. Probeer het opnieuw.",
  // New copilot wizard: step labels, audience size labels, variable hints
  "Configure your copilot": "Stel je copilot in",
  "Choose who's sending": "Kies de afzender",
  "Choose who to reach": "Kies wie je bereikt",
  "Create your message": "Maak je bericht",
  "Choose when to send": "Kies wanneer je verstuurt",
  "Review and launch": "Controleren en lanceren",
  Massive: "Zeer groot",
  Large: "Groot",
  Healthy: "Gezond",
  Moderate: "Gemiddeld",
  Limited: "Beperkt",
  "The recipient's company name": "De bedrijfsnaam van de ontvanger",
  "The recipient's email address": "Het e-mailadres van de ontvanger",
  "The recipient's website": "De website van de ontvanger",
  "The recipient's phone number": "Het telefoonnummer van de ontvanger",
  "Your name as the sender": "Je naam als afzender",
  // Billing UX updates and auth guard
  "Could not retry payment. Try again.":
    "Kon de betaling niet opnieuw proberen. Probeer het opnieuw.",
  "Payment failed. You have not been charged. Your plan is not active yet. Retry the payment below to finish setting it up.":
    "Betaling mislukt. Er is niets in rekening gebracht. Je abonnement is nog niet actief. Probeer de betaling hieronder opnieuw om het af te ronden.",
  "We have not received payment yet. No charge has been made. Refresh to check the latest status.":
    "We hebben nog geen betaling ontvangen. Er is niets in rekening gebracht. Vernieuw om de laatste status te controleren.",
  "Refresh status": "Status vernieuwen",
  "An active plan is required to use the dashboard. Choose a plan below to get started.":
    "Een actief abonnement is vereist om het dashboard te gebruiken. Kies hieronder een abonnement om te beginnen.",
  "Payment summary": "Betalingsoverzicht",
  "Payment failed": "Betaling mislukt",
  "Awaiting payment": "Wacht op betaling",
  "Amount charged": "Afgeschreven bedrag",
  "View your payment attempts and past invoices. Pending or failed entries are not charges.":
    "Bekijk je betalingspogingen en eerdere facturen. Openstaande of mislukte vermeldingen zijn geen afschrijvingen.",
  "Starting checkout": "Afrekenen starten",
  "Retry payment": "Betaling opnieuw proberen",
  "Continue to checkout": "Doorgaan naar afrekenen",
  "Review your plan": "Controleer je abonnement",
  "Your plan and billing interval are ready. Continue to checkout when you are ready.":
    "Je abonnement en factureringsperiode staan klaar. Ga verder naar afrekenen wanneer je er klaar voor bent.",
  "Save up to {percent}%": "Bespaar tot {percent}%",
  "Yearly (save up to {percent}%)": "Jaarlijks (bespaar tot {percent}%)",
  Yearly: "Jaarlijks",
  "Payment pending": "Betaling in afwachting",
  "This plan is not active yet and you have not been charged. Retry the payment to activate it.":
    "Dit abonnement is nog niet actief en er is niets in rekening gebracht. Probeer de betaling opnieuw om het te activeren.",
  "We have not received payment yet. Your plan stays inactive until the payment is confirmed.":
    "We hebben nog geen betaling ontvangen. Je abonnement blijft inactief totdat de betaling is bevestigd.",
  "Included after payment": "Inbegrepen na betaling",
  "Choose another plan": "Een ander abonnement kiezen",
  "We couldn't check your subscription. Please try again.":
    "We konden je abonnement niet controleren. Probeer het opnieuw.",
  "Retrying…": "Opnieuw proberen…",
  "Try again": "Opnieuw proberen",
  "Couldn't load your plan": "Kon je abonnement niet laden",
};

const de: Messages = {
  Overview: "Übersicht",
  Setup: "Einrichtung",
  "Email Accounts": "E-Mail-Konten",
  "Target Audiences": "Zielgruppen",
  "Email Templates": "E-Mail-Vorlagen",
  Billing: "Abrechnung",
  "emails used": "E-Mails verwendet",
  "Limit reached": "Limit erreicht",
  "Manage Plan": "Tarif verwalten",
  Profile: "Profil",
  Language: "Sprache",
  "Sign Out": "Abmelden",
  "Welcome back!👋": "Willkommen zurück!👋",
  "Here's what's happening with your outreach today":
    "Das passiert heute mit Ihrem Outreach",
  "Create New Copilot": "Neuen Copilot erstellen",
  "Manage your automated outreach campaigns.":
    "Verwalten Sie Ihre automatisierten Outreach-Kampagnen.",
  "Recipients who have been emailed by your copilots.":
    "Empfänger, die von Ihren Copilots angeschrieben wurden.",
  "Select Copilot": "Copilot auswählen",
  "Manage the email accounts used for outreach.":
    "Verwalten Sie die E-Mail-Konten für Ihren Outreach.",
  "Add Email Account": "E-Mail-Konto hinzufügen",
  "Target Audience": "Zielgruppe",
  "Define who you want to reach with your copilot.":
    "Legen Sie fest, wen Sie mit Ihrem Copilot erreichen möchten.",
  "Create New Target Audience": "Neue Zielgruppe erstellen",
  "Create and manage reusable email templates for your campaigns.":
    "Erstellen und verwalten Sie wiederverwendbare E-Mail-Vorlagen für Ihre Kampagnen.",
  "Create New Email Template": "Neue E-Mail-Vorlage erstellen",
  "Control when your campaigns send emails.":
    "Legen Sie fest, wann Ihre Kampagnen E-Mails versenden.",
  "Create New Flight Schedule": "Neuen Flight Schedule erstellen",
  "Manage your subscription, payment method and invoices.":
    "Verwalten Sie Ihr Abonnement, Ihre Zahlungsmethode und Rechnungen.",
  "Billing FAQ": "Abrechnungs-FAQ",
  Add: "Hinzufügen",
  Settings: "Einstellungen",
  "Manage your account preferences.": "Verwalten Sie Ihre Kontoeinstellungen.",
  Security: "Sicherheit",
  "Profile Information": "Profilinformationen",
  "First Name": "Vorname",
  "Last Name": "Nachname",
  "Email Address": "E-Mail-Adresse",
  Timezone: "Zeitzone",
  "The language of the app. Your email templates stay in the language you write them in.":
    "Die Sprache der App. Ihre E-Mail-Vorlagen bleiben in der Sprache, in der Sie sie schreiben.",
  "Save Changes": "Änderungen speichern",
  "Saving...": "Wird gespeichert...",
  "Saved!": "Gespeichert!",
  "Change Password": "Passwort ändern",
  "Current Password": "Aktuelles Passwort",
  "New Password": "Neues Passwort",
  "Confirm New Password": "Neues Passwort bestätigen",
  "Update Password": "Passwort aktualisieren",
  "Updating...": "Wird aktualisiert...",
  "Danger Zone": "Gefahrenzone",
  "Permanently delete your account and all associated data. This action cannot be undone.":
    "Löschen Sie Ihr Konto und alle zugehörigen Daten dauerhaft. Dies kann nicht rückgängig gemacht werden.",
  "Delete Account": "Konto löschen",
  // Copilots page
  "1 copilot archived.": "1 Copilot archiviert.",
  "{count} copilots archived.": "{count} Copilots archiviert.",
  "1 copilot could not be archived. Please try again.":
    "1 Copilot konnte nicht archiviert werden. Bitte versuche es erneut.",
  "{count} copilots could not be archived. Please try again.":
    "{count} Copilots konnten nicht archiviert werden. Bitte versuche es erneut.",
  "Loading...": "Wird geladen...",
  "No copilots yet": "Noch keine Copilots",
  "No copilots yet.": "Noch keine Copilots.",
  "Build your first copilot to start sending personalized emails at scale.":
    "Erstelle deinen ersten Copilot und versende personalisierte E-Mails in großem Umfang.",
  "No copilots match your filter.": "Keine Copilots entsprechen deinem Filter.",
  "Archive 1 copilot? It stops sending.":
    "1 Copilot archivieren? Er versendet dann nichts mehr.",
  "Archive {count} copilots? They stop sending.":
    "{count} Copilots archivieren? Sie versenden dann nichts mehr.",
  Cancel: "Abbrechen",
  Archive: "Archivieren",
  "Archiving...": "Wird archiviert...",
  "{count} selected": "{count} ausgewählt",
  "Workflow status": "Workflow-Status",
  Sent: "Gesendet",
  Actions: "Aktionen",
  "Select all copilots on this page":
    "Alle Copilots auf dieser Seite auswählen",
  "Already archived": "Bereits archiviert",
  "Email Account": "E-Mail-Konto",
  Account: "Konto",
  Audience: "Zielgruppe",
  Template: "Vorlage",
  Schedule: "Zeitplan",
  Configured: "Eingerichtet",
  Incomplete: "Unvollständig",
  Selected: "Ausgewählt",
  "Not selected": "Nicht ausgewählt",
  Pending: "Ausstehend",
  Draft: "Entwurf",
  "In Flight": "In der Luft",
  Completed: "Abgeschlossen",
  Scheduled: "Geplant",
  Paused: "Pausiert",
  Archived: "Archiviert",
  "All status": "Alle Status",
  "Search copilots...": "Copilots suchen...",
  "Last sent": "Zuletzt gesendet",
  "Not yet": "Noch nicht",
  "No email account": "Kein E-Mail-Konto",
  "No flight schedule": "Kein Flight Schedule",
  "Continue setup": "Einrichtung fortsetzen",
  "View in Departure": "In Departure ansehen",
  Resume: "Fortsetzen",
  "Copilot actions": "Copilot-Aktionen",
  "Copilot resumed successfully.": "Copilot wurde fortgesetzt.",
  "Error resuming copilot. Please try again.":
    "Fehler beim Fortsetzen des Copilots. Bitte versuche es erneut.",
  "Add an email account and an email template before sending a test email":
    "Füge ein E-Mail-Konto und eine E-Mail-Vorlage hinzu, bevor du eine Test-E-Mail sendest",
  "Add an email account before sending a test email":
    "Füge ein E-Mail-Konto hinzu, bevor du eine Test-E-Mail sendest",
  "Add an email template before sending a test email":
    "Füge eine E-Mail-Vorlage hinzu, bevor du eine Test-E-Mail sendest",
  "Send a test email to your connected account":
    "Sende eine Test-E-Mail an dein verbundenes Konto",
  "Test email request accepted. Check your connected inbox.":
    "Test-E-Mail angefordert. Sieh in deinem verbundenen Posteingang nach.",
  "Failed to send test email. Please try again.":
    "Test-E-Mail konnte nicht gesendet werden. Bitte versuche es erneut.",
  "Failed to update status.": "Status konnte nicht aktualisiert werden.",
  "Copilot launch request accepted.": "Start des Copilots angefordert.",
  "Failed to launch. Please try again.":
    "Start fehlgeschlagen. Bitte versuche es erneut.",
  "Archive this copilot?": "Diesen Copilot archivieren?",
  "Failed to archive.": "Archivieren fehlgeschlagen.",
  "Permanently delete this copilot? This cannot be undone.":
    "Diesen Copilot endgültig löschen? Dies kann nicht rückgängig gemacht werden.",
  "Failed to delete.": "Löschen fehlgeschlagen.",
  'Duplicate "{name}"? This will create a new draft copy.':
    '„{name}" duplizieren? Es wird eine neue Entwurfskopie erstellt.',
  "Copilot duplicated.": "Copilot dupliziert.",
  "Failed to duplicate.": "Duplizieren fehlgeschlagen.",
  Edit: "Bearbeiten",
  Duplicate: "Duplizieren",
  "Send Test Email": "Test-E-Mail senden",
  "Sending...": "Wird gesendet...",
  "Complete all setup steps before launching":
    "Schließe zuerst alle Schritte ab, bevor du startest",
  Launch: "Starten",
  "Launching...": "Wird gestartet...",
  Pause: "Pausieren",
  "Complete all setup steps before resuming":
    "Schließe zuerst alle Schritte ab, bevor du fortsetzt",
  Delete: "Löschen",
  // Departure page
  Address: "Adresse",
  "Clear search": "Suche löschen",
  Company: "Unternehmen",
  "Sent at": "Gesendet am",
  "Email body": "E-Mail-Text",
  Email: "E-Mail",
  Exclude: "Ausschließen",
  Excluded: "Ausgeschlossen",
  Export: "Exportieren",
  "Failed to update lead.": "Lead konnte nicht aktualisiert werden.",
  "Include Again": "Wieder aufnehmen",
  "Lead actions": "Lead-Aktionen",
  "Lead exported as CSV.": "Lead als CSV exportiert.",
  "Lead removed from the overview.": "Lead aus der Übersicht entfernt.",
  "Leads will appear here once your copilots start sending emails.":
    "Leads erscheinen hier, sobald deine Copilots E-Mails versenden.",
  "No copilot found.": "Kein Copilot gefunden.",
  "No description": "Keine Beschreibung",
  "No leads yet": "Noch keine Leads",
  "No results found": "Keine Ergebnisse gefunden",
  "No target audience": "Keine Zielgruppe",
  "Page {page} of {pages} ({total} total)":
    "Seite {page} von {pages} ({total} insgesamt)",
  Phone: "Telefon",
  "Remove {email} from your overview?":
    "{email} aus deiner Übersicht entfernen?",
  "Search company, email, website or phone...":
    "Unternehmen, E-Mail, Website oder Telefon suchen...",
  "Select one to view activity": "Wähle einen aus, um die Aktivität zu sehen",
  "Show email": "E-Mail anzeigen",
  "Show less": "Weniger anzeigen",
  Show: "Zeige",
  "Subject line": "Betreffzeile",
  "Unknown Copilot": "Unbekannter Copilot",
  Unknown: "Unbekannt",
  "Unnamed Copilot": "Unbenannter Copilot",
  "View full message": "Ganze Nachricht ansehen",
  "You can email {email} again.": "Du kannst {email} wieder E-Mails senden.",
  "Your Copilots": "Deine Copilots",
  "results per page": "Ergebnisse pro Seite",
  show: "anzeigen",
  "{count} sent": "{count} gesendet",
  "{email} is excluded. You won't email them again.":
    "{email} ist ausgeschlossen. Du schreibst diese Person nicht mehr an.",
  'No leads match "{query}". Try a different search term.':
    'Keine Leads für „{query}" gefunden. Versuche einen anderen Suchbegriff.',
  New: "Neu",
  Replied: "Beantwortet",
  Failed: "Fehlgeschlagen",
  Skipped: "Übersprungen",
  // Overview
  "Emails Sent": "Gesendete E-Mails",
  Replies: "Antworten",
  "Reply Rate": "Antwortrate",
  "This metric isn't live yet": "Diese Kennzahl ist noch nicht live",
  "Coming soon": "Demnächst",
  "View all": "Alle ansehen",
  Performance: "Leistung",
  "Last 7 days": "Letzte 7 Tage",
  "Last 14 days": "Letzte 14 Tage",
  "Last 30 days": "Letzte 30 Tage",
  "No copilots found": "Keine Copilots gefunden",
  "No departure found": "Noch keine Departures",
  "Quick start": "Schnellstart",
  "Create a copilot": "Copilot erstellen",
  "Add email account": "E-Mail-Konto hinzufügen",
  "Create a target audience": "Zielgruppe erstellen",
  "Create an email template": "E-Mail-Vorlage erstellen",
  "Create a flight schedule": "Flight Schedule erstellen",
  "Your data is encrypted and secure. We only use your email account to send emails on your behalf.":
    "Deine Daten sind verschlüsselt und sicher. Wir nutzen dein E-Mail-Konto nur, um in deinem Namen E-Mails zu senden.",
  "Learn more": "Mehr erfahren",
  "vs {range}": "vs. {range}",
  // Overview (daily stats not live yet)
  "All time": "Gesamt",
  "Emails sent and replies per day will appear here soon.":
    "Gesendete E-Mails und Antworten pro Tag erscheinen hier bald.",
  // Email accounts
  "Account Name": "Kontoname",
  "Account actions": "Kontoaktionen",
  "Account name and email address are required.":
    "Kontoname und E-Mail-Adresse sind erforderlich.",
  "Add Account": "Konto hinzufügen",
  "Add an email account to start sending outreach.":
    "Füge ein E-Mail-Konto hinzu, um Outreach zu versenden.",
  "Adding...": "Wird hinzugefügt...",
  "App Password / Token": "App-Passwort / Token",
  "Are you sure you want to delete this email account?":
    "Möchtest du dieses E-Mail-Konto wirklich löschen?",
  "Choose the email account your copilot will use to send emails.":
    "Wähle das E-Mail-Konto, mit dem dein Copilot E-Mails sendet.",
  "Connect other email provider": "Anderen E-Mail-Anbieter verbinden",
  "Connect with Gmail": "Mit Gmail verbinden",
  "Connect with Outlook": "Mit Outlook verbinden",
  "Connect your Gmail account with OAuth in a few clicks.":
    "Verbinde dein Gmail-Konto per OAuth mit wenigen Klicks.",
  "Connect your Outlook account with OAuth in a few clicks.":
    "Verbinde dein Outlook-Konto per OAuth mit wenigen Klicks.",
  "Connect your email account": "Verbinde dein E-Mail-Konto",
  "Edit Email Account": "E-Mail-Konto bearbeiten",
  "Email account created successfully": "E-Mail-Konto erstellt",
  "Email account deleted successfully": "E-Mail-Konto gelöscht",
  "Email account verified successfully": "E-Mail-Konto verifiziert",
  "Emails sent per account isn't live yet":
    "Gesendete E-Mails pro Konto sind noch nicht live",
  "Failed to add the email account.":
    "E-Mail-Konto konnte nicht hinzugefügt werden.",
  "Failed to connect via OAuth": "Verbindung über OAuth fehlgeschlagen",
  "Failed to create email account": "E-Mail-Konto konnte nicht erstellt werden",
  "Failed to delete email account": "E-Mail-Konto konnte nicht gelöscht werden",
  "Failed to fetch email accounts":
    "E-Mail-Konten konnten nicht geladen werden",
  "Failed to update the email account.":
    "E-Mail-Konto konnte nicht aktualisiert werden.",
  "Failed to verify email account":
    "E-Mail-Konto konnte nicht verifiziert werden",
  "Go Back": "Zurück",
  "John Doe": "Max Mustermann",
  "No Email Accounts Found": "Keine E-Mail-Konten gefunden",
  "No Email Accounts Yet": "Noch keine E-Mail-Konten",
  "Open account actions": "Kontoaktionen öffnen",
  "Other options": "Weitere Optionen",
  Provider: "Anbieter",
  Recommended: "Empfohlen",
  "SMTP Host": "SMTP-Host",
  "Search accounts": "Konten suchen",
  "Search accounts...": "Konten suchen...",
  "Try adjusting your search or filters": "Passe deine Suche oder Filter an",
  "Use SMTP / IMAP to connect any email provider.":
    "Verbinde jeden E-Mail-Anbieter per SMTP / IMAP.",
  "Your Email Accounts ({count})": "Deine E-Mail-Konten ({count})",
  "Your name / Sender Name": "Dein Name / Absendername",
  "e.g. Outreach Account": "z. B. Outreach-Konto",
  "Email account": "E-Mail-Konto",
  "Email address": "E-Mail-Adresse",
  Connected: "Verbunden",
  "Emails sent": "Gesendet",
  Verified: "Verifiziert",
  Unverified: "Nicht verifiziert",
  Error: "Fehler",
  "All statuses": "Alle Status",
  Verify: "Verifizieren",
  "Email account verification failed. Please make sure the account is correctly configured.":
    "Verifizierung des E-Mail-Kontos fehlgeschlagen. Bitte prüfe, ob das Konto richtig eingerichtet ist.",
  // Email accounts (badges)
  "Easy setup": "Schnell eingerichtet",
  // Target audiences
  "Add at least one industry.": "Füge mindestens eine Branche hinzu.",
  "All cities within the selected countries are included.":
    "Alle Städte in den gewählten Ländern sind enthalten.",
  "All cities": "Alle Städte",
  "Audience size isn't live yet": "Zielgruppengröße ist noch nicht live",
  "Choose the industry of your target companies.":
    "Wähle die Branche deiner Zielunternehmen.",
  City: "Stadt",
  Copy: "Kopie",
  Country: "Land",
  "Create a target audience for easier access later":
    "Erstelle eine Zielgruppe, um sie später schnell zu nutzen",
  "Define your Target Audience": "Definiere deine Zielgruppe",
  "Delete this target audience?": "Diese Zielgruppe löschen?",
  "E.g. Tech Leads in Amsterdam": "z. B. Tech Leads in Amsterdam",
  "Failed to create the target audience.":
    "Zielgruppe konnte nicht erstellt werden.",
  "Failed to duplicate the target audience.":
    "Zielgruppe konnte nicht dupliziert werden.",
  "Failed to start. Please try again.":
    "Start fehlgeschlagen. Bitte versuche es erneut.",
  "Failed to update the target audience.":
    "Zielgruppe konnte nicht aktualisiert werden.",
  "Give your target a name so you can easily identify it later":
    "Gib deiner Zielgruppe einen Namen, damit du sie später leicht wiederfindest",
  "In which cities are your target companies located?":
    "In welchen Städten sitzen deine Zielunternehmen?",
  "In which countries are your target companies located?":
    "In welchen Ländern sitzen deine Zielunternehmen?",
  Industry: "Branche",
  "No Target Audiences Found": "Keine Zielgruppen gefunden",
  "Only companies in the cities you pick below.":
    "Nur Unternehmen in den Städten, die du unten auswählst.",
  "Row actions": "Zeilenaktionen",
  "Search target audience...": "Zielgruppe suchen...",
  "Search target audiences by name": "Zielgruppen nach Namen suchen",
  "Target Audience Name": "Name der Zielgruppe",
  "Target audience created": "Zielgruppe erstellt",
  "Target audience duplicated.": "Zielgruppe dupliziert.",
  "Target audience name is required.": "Name der Zielgruppe ist erforderlich.",
  "Target audience updated": "Zielgruppe aktualisiert",
  "Target specific cities": "Bestimmte Städte wählen",
  "Your Target Audiences ({count})": "Deine Zielgruppen ({count})",
  "{count} leads": "{count} Leads",
  "Target Audience name": "Name der Zielgruppe",
  "Est. Audience Size": "Geschätzte Größe",
  "Last updated": "Zuletzt aktualisiert",
  "Type and press Enter to add industries...":
    "Tippen und Enter drücken, um Branchen hinzuzufügen...",
  "Search countries...": "Länder suchen...",
  "Select a country first...": "Wähle zuerst ein Land...",
  "Search cities...": "Städte suchen...",
  "Please select a country first": "Bitte wähle zuerst ein Land",
  "No cities found": "Keine Städte gefunden",
  "Type to search…": "Tippen zum Suchen…",
  "Tell your copilot who you want to reach and we’ll find the best matches.":
    "Sag deinem Copilot, wen du erreichen willst, und wir finden die besten Treffer.",
  // Email templates
  "Failed to save template.": "Vorlage konnte nicht gespeichert werden.",
  "Delete this template?": "Diese Vorlage löschen?",
  "Your Email Templates ({count})": "Deine E-Mail-Vorlagen ({count})",
  "Search email template...": "E-Mail-Vorlage suchen...",
  "Loading templates…": "Vorlagen werden geladen…",
  "No Active Email Templates": "Keine E-Mail-Vorlagen",
  "Create an email template for easier access later":
    "Erstelle eine E-Mail-Vorlage, um sie später schnell zu nutzen",
  "In use": "In Verwendung",
  "Not in use": "Nicht in Verwendung",
  "1 copilot": "1 Copilot",
  "{count} copilots": "{count} Copilots",
  "Reply rate isn't live yet": "Antwortrate ist noch nicht live",
  "1 step": "1 Schritt",
  "{count} steps": "{count} Schritte",
  "Template actions": "Vorlagenaktionen",
  "Template name": "Vorlagenname",
  Steps: "Schritte",
  "Used in": "Verwendet in",
  "Reply rate": "Antwortrate",
  "The company name": "Der Firmenname",
  "Your name (the sender)": "Dein Name (der Absender)",
  "The company's website": "Die Website des Unternehmens",
  "Email address of the contact": "E-Mail-Adresse des Kontakts",
  "Add Variables": "Variablen hinzufügen",
  "Step {n} - Initial Email": "Schritt {n} - Erste E-Mail",
  "Step {n} - Follow-up {m}": "Schritt {n} - Follow-up {m}",
  "A personalized cold email": "Eine persönliche Kaltakquise-E-Mail",
  "Send {days} days after no reply": "{days} Tage nach keiner Antwort senden",
  "Edit email template": "E-Mail-Vorlage bearbeiten",
  "Create new email template": "Neue E-Mail-Vorlage erstellen",
  Save: "Speichern",
  "Email template name": "Name der E-Mail-Vorlage",
  "Name your template": "Benenne deine Vorlage",
  "Type your subject line": "Gib deine Betreffzeile ein",
  Variables: "Variablen",
  "Delete step": "Schritt löschen",
  "Add Follow-up Step": "Follow-up-Schritt hinzufügen",
  "Click to insert at your cursor":
    "Klicke, um an der Cursorposition einzufügen",
  "Your email templates": "Deine E-Mail-Vorlagen",
  "No saved templates yet.": "Noch keine gespeicherten Vorlagen.",
  "View more ({count} more)": "Mehr ansehen ({count} weitere)",
  "Save changes": "Änderungen speichern",
  // Flight schedule
  Mon: "Mo",
  Tue: "Di",
  Wed: "Mi",
  Thu: "Do",
  Fri: "Fr",
  Sat: "Sa",
  Sun: "So",
  "No active days": "Keine aktiven Tage",
  "No Flight Schedules Found": "Keine Flight Schedules gefunden",
  "No Flight Schedules Yet": "Noch keine Flight Schedules",
  "Create a flight schedule for easier access later":
    "Erstelle einen Flight Schedule, um ihn später schnell zu nutzen",
  "Your Flight Schedules ({count})": "Deine Flight Schedules ({count})",
  "Search flight schedule...": "Flight Schedule suchen...",
  "Search flight schedules by name": "Flight Schedules nach Namen suchen",
  "Loading flight schedules…": "Flight Schedules werden geladen…",
  "Flight schedule name": "Name des Flight Schedule",
  Days: "Tage",
  Time: "Zeit",
  "Used by": "Verwendet von",
  "Flight schedule actions": "Flight-Schedule-Aktionen",
  "Failed to load flight schedules.":
    "Flight Schedules konnten nicht geladen werden.",
  "Flight schedule updated.": "Flight Schedule aktualisiert.",
  "Flight schedule created.": "Flight Schedule erstellt.",
  "Are you sure you want to delete this flight schedule?":
    "Möchtest du diesen Flight Schedule wirklich löschen?",
  "Flight schedule deleted.": "Flight Schedule gelöscht.",
  "Failed to delete flight schedule.":
    "Flight Schedule konnte nicht gelöscht werden.",
  "Flight schedule duplicated.": "Flight Schedule dupliziert.",
  "Failed to duplicate flight schedule.":
    "Flight Schedule konnte nicht dupliziert werden.",
  "Configure when and how emails are sent.":
    "Lege fest, wann und wie E-Mails gesendet werden.",
  "Schedule Name": "Name des Zeitplans",
  "Daily Send Limit": "Tägliches Sendelimit",
  "Maximum number of new emails to send per day.":
    "Maximale Anzahl neuer E-Mails pro Tag.",
  "Recommended: 20–50 per day": "Empfohlen: 20–50 pro Tag",
  "Unlimited sending": "Unbegrenzt senden",
  "Active Days": "Aktive Tage",
  "Choose which days emails can be sent.":
    "Wähle, an welchen Tagen E-Mails gesendet werden dürfen.",
  "Sending Hours": "Sendezeiten",
  "Set the daily time window for sending emails.":
    "Lege das tägliche Zeitfenster für den Versand fest.",
  From: "Von",
  To: "Bis",
  "Sending hours are off": "Sendezeiten sind aus",
  "Timezone for sending and scheduling.": "Zeitzone für Versand und Planung.",
  "Please select at least one active day.":
    "Bitte wähle mindestens einen aktiven Tag.",
  "Failed to save flight schedule. Please try again.":
    "Flight Schedule konnte nicht gespeichert werden. Bitte versuche es erneut.",
  "Edit Flight Schedule": "Flight Schedule bearbeiten",
  "New Flight Schedule": "Neuer Flight Schedule",
  "e.g. Mornings, Afternoons, Weekend…":
    "z. B. Vormittags, Nachmittags, Wochenende…",
  "Your copilot will send as many emails as possible within the active hours each day.":
    "Dein Copilot sendet innerhalb der aktiven Stunden jedes Tages so viele E-Mails wie möglich.",
  "Availability: {value} (selected active days only).":
    "Verfügbarkeit: {value} (nur gewählte aktive Tage).",
  "Saving…": "Wird gespeichert…",
  "Create Schedule": "Zeitplan erstellen",
  // Billing
  "Could not start checkout. Try again.":
    "Checkout konnte nicht gestartet werden. Bitte versuche es erneut.",
  "Subscription canceled. You keep access until the end of your billing period.":
    "Abo gekündigt. Du behältst den Zugang bis zum Ende deines Abrechnungszeitraums.",
  "Could not cancel your subscription.": "Abo konnte nicht gekündigt werden.",
  "Could not update your payment method. Try again.":
    "Zahlungsmethode konnte nicht aktualisiert werden. Bitte versuche es erneut.",
  "Your payment is still being processed. This page updates as soon as it's confirmed.":
    "Deine Zahlung wird noch verarbeitet. Diese Seite aktualisiert sich, sobald sie bestätigt ist.",
  "Cancel your subscription?": "Abo kündigen?",
  "You'll keep access to your current plan until the end of your billing period. Your Copilots and data stay untouched.":
    "Du behältst den Zugang zu deinem aktuellen Plan bis zum Ende deines Abrechnungszeitraums. Deine Copilots und Daten bleiben unverändert.",
  "Canceling...": "Wird gekündigt...",
  "Cancel plan": "Plan kündigen",
  "Keep plan": "Plan behalten",
  "Billing summary": "Abrechnungsübersicht",
  Price: "Preis",
  "Billing period": "Abrechnungszeitraum",
  "Next billing date": "Nächstes Abrechnungsdatum",
  "Amount due": "Fälliger Betrag",
  Annual: "Jährlich",
  Monthly: "Monatlich",
  "Update payment method": "Zahlungsmethode aktualisieren",
  "Current Plan": "Aktueller Plan",
  "Subscription actions": "Abo-Aktionen",
  "Email credits usage": "Nutzung des E-Mail-Guthabens",
  "Emails used": "E-Mails verbraucht",
  "{percent} % used": "{percent} % verbraucht",
  "Monthly allowance reached. Sending resumes on {date}.":
    "Monatskontingent erreicht. Der Versand geht am {date} weiter.",
  "Monthly allowance reached. Sending resumes when your allowance renews.":
    "Monatskontingent erreicht. Der Versand geht weiter, sobald dein Kontingent erneuert wird.",
  "Your plan is canceled and stays active until {date}.":
    "Dein Plan ist gekündigt und bleibt aktiv bis {date}.",
  "Card on file": "Karte hinterlegt",
  "Change plan": "Plan ändern",
  "Plan renews on": "Verlängert sich am",
  "Payment method": "Zahlungsmethode",
  Update: "Aktualisieren",
  "/ year": "/ Jahr",
  "/ month": "/ Monat",
  "Current plan": "Aktueller Plan",
  "Most Popular": "Am beliebtesten",
  "Choose plan": "Plan wählen",
  "Included:": "Enthalten:",
  "Perfect for individuals.": "Perfekt für Einzelpersonen.",
  "Perfect for growing businesses.": "Perfekt für wachsende Unternehmen.",
  "For power users and teams": "Für Power-User und Teams",
  "Choose your plan": "Wähle deinen Plan",
  "Billing interval": "Abrechnungsintervall",
  "Save {percent}%": "Spare {percent}%",
  "Back to billing": "Zurück zur Abrechnung",
  "Cancel anytime. No long-term commitments.":
    "Jederzeit kündbar. Keine langen Laufzeiten.",
  "Cancel anytime": "Jederzeit kündbar",
  "No contracts. Upgrade or downgrade anytime.":
    "Keine Verträge. Jederzeit up- oder downgraden.",
  "Your own email": "Deine eigene E-Mail",
  "Every email is sent from your own connected email account.":
    "Jede E-Mail wird von deinem eigenen verbundenen E-Mail-Konto gesendet.",
  "Secure & reliable": "Sicher & zuverlässig",
  "Your data is encrypted and never shared.":
    "Deine Daten sind verschlüsselt und werden nie geteilt.",
  Invoices: "Rechnungen",
  "No invoices yet.": "Noch keine Rechnungen.",
  "Download invoice": "Rechnung herunterladen",
  Date: "Datum",
  "View and download your past invoices.":
    "Sieh dir deine bisherigen Rechnungen an und lade sie herunter.",
  Invoice: "Rechnung",
  Amount: "Betrag",
  Download: "Herunterladen",
  "View all invoices": "Alle Rechnungen ansehen",
  Paid: "Bezahlt",
  "Need help?": "Brauchst du Hilfe?",
  "If you have any question about billing or your subscription we're here to help.":
    "Hast du Fragen zur Abrechnung oder zu deinem Abo? Wir helfen gerne.",
  "Find answers to common billing questions.":
    "Finde Antworten auf häufige Abrechnungsfragen.",
  "Contact support": "Support kontaktieren",
  "Everything you need to know about payments, subscriptions and invoices.":
    "Alles, was du über Zahlungen, Abos und Rechnungen wissen musst.",
  "Search billing questions...": "Abrechnungsfragen durchsuchen...",
  "Search billing questions": "Abrechnungsfragen durchsuchen",
  "No questions match your search.": "Keine Fragen passen zu deiner Suche.",
  "We're here to help. Contact our team and we'll get back to you as soon as possible.":
    "Wir helfen gerne. Kontaktiere unser Team, wir melden uns so schnell wie möglich.",
  "Still have questions?": "Noch Fragen?",
  "Email us": "Schreib uns",
  "1 email account": "1 E-Mail-Konto",
  "3 email accounts": "3 E-Mail-Konten",
  "5 email accounts": "5 E-Mail-Konten",
  "500 emails/month": "500 E-Mails/Monat",
  "1,200 emails/month": "1.200 E-Mails/Monat",
  "3,000 emails/month": "3.000 E-Mails/Monat",
  "CSV export": "CSV-Export",
  "Email support": "E-Mail-Support",
  "Priority support": "Priorisierter Support",
  "What payment methods do you accept?":
    "Welche Zahlungsmethoden akzeptiert ihr?",
  "We currently accept all major credit and debit cards. We're always looking to expand our supported payment methods.":
    "Wir akzeptieren derzeit alle gängigen Kredit- und Debitkarten. Wir arbeiten daran, weitere Zahlungsmethoden anzubieten.",
  "Can I change my plan at any time?": "Kann ich meinen Plan jederzeit ändern?",
  "Yes. You can upgrade or downgrade your plan at any time from the Billing page. Your new subscription starts immediately after payment.":
    "Ja. Du kannst jederzeit auf der Abrechnungsseite up- oder downgraden. Dein neues Abo startet direkt nach der Zahlung.",
  "Can I cancel my subscription at any time?":
    "Kann ich mein Abo jederzeit kündigen?",
  "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your Billing settings, and your plan will remain active until the end of your current billing period.":
    "Auf jeden Fall. Es gibt keine langen Laufzeiten. Du kannst dein Abo jederzeit in den Abrechnungseinstellungen kündigen, und dein Plan bleibt bis zum Ende des aktuellen Abrechnungszeitraums aktiv.",
  "When will I be charged?": "Wann wird abgebucht?",
  "Your subscription renews automatically on the same day of each billing cycle. You can always view your next billing date and upcoming charge from the Billing page.":
    "Dein Abo verlängert sich automatisch am selben Tag jedes Abrechnungszyklus. Dein nächstes Abrechnungsdatum und den Betrag siehst du jederzeit auf der Abrechnungsseite.",
  "What happens if my payment fails?":
    "Was passiert, wenn meine Zahlung fehlschlägt?",
  "If a payment can't be processed, we'll automatically retry your payment and notify you by email. If payment continues to fail, your subscription may be paused until your payment method is updated.":
    "Wenn eine Zahlung nicht verarbeitet werden kann, versuchen wir es automatisch erneut und benachrichtigen dich per E-Mail. Schlägt die Zahlung weiterhin fehl, kann dein Abo pausiert werden, bis deine Zahlungsmethode aktualisiert ist.",
  "Where can I download my invoices?":
    "Wo kann ich meine Rechnungen herunterladen?",
  "All of your invoices are available in the Billing History section of your Billing page. You can download them at any time for your records or accounting.":
    "Alle deine Rechnungen findest du im Bereich Rechnungen auf der Abrechnungsseite. Du kannst sie jederzeit für deine Unterlagen oder Buchhaltung herunterladen.",
  "Do you offer annual billing?": "Bietet ihr jährliche Abrechnung an?",
  "Yes. You can choose between monthly and annual billing. Annual subscriptions include a discounted rate compared to paying monthly.":
    "Ja. Du kannst zwischen monatlicher und jährlicher Abrechnung wählen. Jahresabos sind günstiger als monatliche Zahlung.",
  "Will I lose my data if I downgrade?":
    "Verliere ich meine Daten beim Downgrade?",
  "No. Your data remains safely stored. If your new plan includes lower limits, some features or usage may be restricted until you're within your new plan's limits or decide to upgrade again.":
    "Nein. Deine Daten bleiben sicher gespeichert. Hat dein neuer Plan niedrigere Limits, können einige Funktionen oder die Nutzung eingeschränkt sein, bis du innerhalb der neuen Limits bist oder wieder upgradest.",
  "What happens if I reach my monthly email limit?":
    "Was passiert, wenn ich mein monatliches E-Mail-Limit erreiche?",
  "Once you've reached your monthly email allowance, your Copilots will pause sending new emails until your limit resets or you upgrade to a higher plan. Your data, settings, and Copilots remain unchanged.":
    "Sobald dein Monatskontingent erreicht ist, senden deine Copilots keine neuen E-Mails mehr, bis dein Limit zurückgesetzt wird oder du upgradest. Deine Daten, Einstellungen und Copilots bleiben unverändert.",
  "How do refunds work?": "Wie funktionieren Rückerstattungen?",
  "We generally don't offer refunds for subscription payments. However, if you've experienced a billing issue or believe you've been charged incorrectly, please contact us and we'll review your case fairly.":
    "In der Regel erstatten wir Abo-Zahlungen nicht. Wenn du ein Abrechnungsproblem hattest oder glaubst, falsch belastet worden zu sein, kontaktiere uns und wir prüfen deinen Fall fair.",
  "Is my payment information secure?": "Sind meine Zahlungsdaten sicher?",
  "Yes. All payments are processed securely through our trusted payment provider. Emailcopilot never stores your full payment card details.":
    "Ja. Alle Zahlungen werden sicher über unseren vertrauenswürdigen Zahlungsanbieter abgewickelt. Emailcopilot speichert nie deine vollständigen Kartendaten.",
  "How do I contact billing support?":
    "Wie erreiche ich den Abrechnungssupport?",
  "If you have any questions about your subscription, invoices, payments, or billing, our team is here to help.":
    "Wenn du Fragen zu deinem Abo, Rechnungen, Zahlungen oder zur Abrechnung hast, hilft dir unser Team gerne.",
  // New copilot wizard + limit dialogs
  "{provider} connected successfully": "{provider} wurde verbunden",
  "Failed to load copilot. Please try again.":
    "Copilot konnte nicht geladen werden. Bitte versuche es erneut.",
  "Copy of {name}": "Kopie von {name}",
  "Edit Copilot": "Copilot bearbeiten",
  "Duplicate Copilot": "Copilot duplizieren",
  "Changes saved — the copilot stays paused until you re-launch it.":
    "Änderungen gespeichert — der Copilot bleibt pausiert, bis du ihn erneut startest.",
  "Draft saved — you can launch anytime.":
    "Entwurf gespeichert — du kannst jederzeit starten.",
  "Failed to save draft. Please try again.":
    "Entwurf konnte nicht gespeichert werden. Bitte versuche es erneut.",
  "Copilot launch accepted.": "Start des Copilots angenommen.",
  "Failed to launch copilot. Please try again.":
    "Copilot konnte nicht gestartet werden. Bitte versuche es erneut.",
  "Your monthly email allowance is used up. Upgrade your plan to re-launch this copilot.":
    "Dein monatliches E-Mail-Kontingent ist aufgebraucht. Upgrade deinen Plan, um diesen Copilot erneut zu starten.",
  "Copilot re-launched.": "Copilot erneut gestartet.",
  "Loading copilot...": "Copilot wird geladen...",
  "Build your outbound copilot in 6 simple steps.":
    "Erstelle deinen Outbound-Copilot in 6 einfachen Schritten.",
  "Discard & exit": "Verwerfen und beenden",
  "Editing pauses this copilot until you launch it again.":
    "Beim Bearbeiten wird dieser Copilot pausiert, bis du ihn erneut startest.",
  "No flight schedules available yet — use the form above to create one.":
    "Noch keine Flight Schedules — erstelle einen mit dem Formular oben.",
  "Monday - Friday": "Montag - Freitag",
  "Weekend only": "Nur Wochenende",
  "Every day": "Jeden Tag",
  Unlimited: "Unbegrenzt",
  "Schedule Summary": "Zusammenfassung des Zeitplans",
  "Here's how your copilot will send.": "So versendet dein Copilot.",
  "Daily send limit": "Tägliches Versandlimit",
  "{n} emails per day": "{n} E-Mails pro Tag",
  "Unlimited emails": "Unbegrenzt viele E-Mails",
  "Active days": "Aktive Tage",
  "Sending hours": "Versandzeiten",
  "Est. monthly volume": "Geschätztes Monatsvolumen",
  "{volume} emails": "{volume} E-Mails",
  "Based on {n} active days/month": "Basierend auf {n} aktiven Tagen/Monat",
  "These settings help maximize deliverability and keep your account safe.":
    "Diese Einstellungen maximieren die Zustellbarkeit und schützen dein Konto.",
  "Changes saved as a new schedule — the original schedule was not changed.":
    "Änderungen als neuer Zeitplan gespeichert — der ursprüngliche Zeitplan wurde nicht geändert.",
  "Flight schedule created and linked.":
    "Flight Schedule erstellt und verknüpft.",
  "Failed to create flight schedule. Please try again.":
    "Flight Schedule konnte nicht erstellt werden. Bitte versuche es erneut.",
  "Configure Flight Schedule": "Flight Schedule einrichten",
  "Choose when and how your copilot sends emails.":
    "Lege fest, wann und wie dein Copilot E-Mails versendet.",
  "Schedule Name (if creating new)": "Name des Zeitplans (bei neuem Zeitplan)",
  "e.g. My Custom Schedule": "z. B. Mein eigener Zeitplan",
  "Recommended: 20-50 per day for best deliverability":
    "Empfohlen: 20-50 pro Tag für die beste Zustellbarkeit",
  "Choose which days your copilot is allowed to send emails.":
    "Wähle, an welchen Tagen dein Copilot E-Mails senden darf.",
  "(your timezone)": "(deine Zeitzone)",
  "Set the daily time window when your copilot can send emails.":
    "Lege das tägliche Zeitfenster fest, in dem dein Copilot E-Mails senden darf.",
  "Default Timezone": "Standardzeitzone",
  "Custom schedule — a new schedule will be created and linked when you continue.":
    "Eigener Zeitplan — beim Fortfahren wird ein neuer Zeitplan erstellt und verknüpft.",
  "A new schedule named “{name}” will be created and linked. The original schedule stays unchanged.":
    "Ein neuer Zeitplan „{name}“ wird erstellt und verknüpft. Der ursprüngliche Zeitplan bleibt unverändert.",
  "Modified from “{name}” — your changes will be saved as a new schedule. The original schedule stays unchanged.":
    "Geändert ausgehend von „{name}“ — deine Änderungen werden als neuer Zeitplan gespeichert. Der ursprüngliche Zeitplan bleibt unverändert.",
  "Using saved schedule: {name} — nothing will be changed when you continue.":
    "Gespeicherter Zeitplan: {name} — beim Fortfahren wird nichts geändert.",
  "Your Flight Schedules": "Deine Flight Schedules",
  "Using: {name}": "Verwendet: {name}",
  "Template summary": "Zusammenfassung der Vorlage",
  "1-step sequence": "Sequenz mit 1 Schritt",
  "Failed to save template. Please try again.":
    "Vorlage konnte nicht gespeichert werden. Bitte versuche es erneut.",
  "Select an email account before sending a test email.":
    "Wähle ein E-Mail-Konto aus, bevor du eine Test-E-Mail sendest.",
  "Create your email template": "Erstelle deine E-Mail-Vorlage",
  "Write the email your copilot will send to your target audience.":
    "Schreibe die E-Mail, die dein Copilot an deine Zielgruppe sendet.",
  "Send test email": "Test-E-Mail senden",
  "Step 1 - Initial Email": "Schritt 1 - Erste E-Mail",
  "This is the first email your leads will receive.":
    "Das ist die erste E-Mail, die deine Leads erhalten.",
  "Your Templates": "Deine Vorlagen",
  "Loading all leads to filter by status…": "Alle Leads werden geladen, um nach Status zu filtern…",
  "No leads with status \"{status}\".": "Keine Leads mit Status „{status}“.",
  "Show all": "Alle anzeigen",
  "Saved flight schedules": "Gespeicherte Flight Schedules",
  "Search by name…": "Nach Name suchen…",
  "When you save": "Beim Speichern",
  "Update this template": "Diese Vorlage aktualisieren",
  "Changes also apply to other copilots that use it.": "Änderungen gelten auch für andere Copilots, die sie verwenden.",
  "Save as a new template": "Als neue Vorlage speichern",
  "The saved template stays as it is.": "Die gespeicherte Vorlage bleibt unverändert.",
  "Saved as a new template: {name}": "Als neue Vorlage gespeichert: {name}",
  "Saved target audiences": "Gespeicherte Zielgruppen",
  "Saved templates": "Gespeicherte Vorlagen",
  "Selected:": "Ausgewählt:",
  "Search by name, country or city…": "Nach Name, Land oder Stadt suchen…",
  "Search by name or subject…": "Nach Name oder Betreff suchen…",
  "No matches for \"{query}\"": "Keine Treffer für „{query}“",
  "Fetching templates...": "Vorlagen werden geladen...",
  "No templates yet": "Noch keine Vorlagen",
  "Once you save a template it will appear here, ready to use.":
    "Sobald du eine Vorlage speicherst, erscheint sie hier, bereit zur Verwendung.",
  Subj: "Betr.",
  "Use this template": "Diese Vorlage verwenden",
  "Copilot Summary": "Copilot-Übersicht",
  "Here’s a summary of your copilot.":
    "Hier ist eine Übersicht deines Copilots.",
  "Copilot Name": "Name des Copilots",
  "Private Jet Operators": "Privatjet-Betreiber",
  Description: "Beschreibung",
  "Book more appointments and generate qualified leads":
    "Mehr Termine buchen und qualifizierte Leads gewinnen",
  Goal: "Ziel",
  "You can edit all settings later at any time.":
    "Du kannst alle Einstellungen später jederzeit ändern.",
  "Paused while editing": "Während der Bearbeitung pausiert",
  "Draft saved": "Entwurf gespeichert",
  "Your changes are saved. Re-launch to start sending again.":
    "Deine Änderungen sind gespeichert. Starte erneut, um wieder zu senden.",
  "Your progress is saved. Come back anytime to finish.":
    "Dein Fortschritt ist gespeichert. Komm jederzeit zurück, um fertig zu werden.",
  "Failed to save copilot. Please try again.":
    "Copilot konnte nicht gespeichert werden. Bitte versuche es erneut.",
  "Setup Your Copilot": "Richte deinen Copilot ein",
  "Give your Copilot a name and describe its purpose.":
    "Gib deinem Copilot einen Namen und beschreibe seinen Zweck.",
  "Internal name to identify your copilot.":
    "Interner Name, um deinen Copilot zu erkennen.",
  "e.g. Private Jet Operators": "z. B. Privatjet-Betreiber",
  "Describe what this copilot does and who it’s for.":
    "Beschreibe, was dieser Copilot tut und für wen er ist.",
  "e.g. Reach out to private jet operators in Amsterdam and introduce our services":
    "z. B. Privatjet-Betreiber in Amsterdam ansprechen und unsere Leistungen vorstellen",
  "What is the main goal of this copilot?":
    "Was ist das Hauptziel dieses Copilots?",
  "e.g. Book more appointments and generate qualified leads":
    "z. B. Mehr Termine buchen und qualifizierte Leads gewinnen",
  None: "Keine",
  "Copilot name": "Name des Copilots",
  "Not set yet": "Noch nicht festgelegt",
  "N/A": "k. A.",
  "Email Template": "E-Mail-Vorlage",
  "Ready to re-launch": "Bereit zum erneuten Start",
  "Ready to take-off": "Bereit für den Take-off",
  "Incomplete — finish setup": "Unvollständig — schließe die Einrichtung ab",
  "Monday - Sunday": "Montag - Sonntag",
  All: "Alle",
  "{count} companies": "{count} Unternehmen",
  "After first run": "Nach dem ersten Durchlauf",
  "Review your copilot": "Überprüfe deinen Copilot",
  "Everything looks good! Review your settings before launching.":
    "Alles sieht gut aus! Überprüfe deine Einstellungen vor dem Start.",
  "Review your settings and finish the open steps before launching.":
    "Überprüfe deine Einstellungen und schließe die offenen Schritte vor dem Start ab.",
  "Not specified": "Nicht angegeben",
  "Sending as": "Senden als",
  Location: "Standort",
  "Est. audience size": "Geschätzte Größe",
  Sequence: "Sequenz",
  "Total touches": "Kontaktpunkte",
  "You're ready to take off!": "Du bist bereit für den Take-off!",
  "Almost ready to take off": "Fast bereit für den Take-off",
  "You are ready to fly": "Du bist startklar",
  "Finish setup to fly": "Schließe die Einrichtung ab, um zu starten",
  "{done} of {total} steps complete": "{done} von {total} Schritten erledigt",
  Back: "Zurück",
  "Save, keep paused": "Speichern, pausiert lassen",
  "Save as Draft": "Als Entwurf speichern",
  "Re-launching...": "Wird erneut gestartet...",
  "Re-launch Copilot": "Copilot erneut starten",
  "Launch Copilot": "Copilot starten",
  "Loading copilot data…": "Copilot-Daten werden geladen…",
  "Complete all steps before launching":
    "Schließe vor dem Start alle Schritte ab",
  "Test email request accepted": "Test-E-Mail-Anfrage angenommen",
  "your connected inbox": "dein verbundenes Postfach",
  "Not now": "Nicht jetzt",
  "Re-launch copilot": "Copilot erneut starten",
  "Launch copilot": "Copilot starten",
  "Re-launch without testing?": "Ohne Test erneut starten?",
  "Launch without testing?": "Ohne Test starten?",
  Close: "Schließen",
  "your target audience": "deine Zielgruppe",
  "your email account": "deinem E-Mail-Konto",
  "A test takes about a minute and reaches nobody but you. Test emails don't count toward your monthly limit.":
    "Ein Test dauert etwa eine Minute und erreicht nur dich. Test-E-Mails zählen nicht zu deinem Monatslimit.",
  "Re-launch anyway": "Trotzdem erneut starten",
  "Launch anyway": "Trotzdem starten",
  "Send a test first": "Zuerst einen Test senden",
  "Check {inbox} and make sure everything looks right. When you're happy with it, re-launch your copilot.":
    "Sieh in {inbox} nach und prüfe, ob alles stimmt. Wenn du zufrieden bist, starte deinen Copilot erneut.",
  "Check {inbox} and make sure everything looks right. When you're happy with it, launch your copilot.":
    "Sieh in {inbox} nach und prüfe, ob alles stimmt. Wenn du zufrieden bist, starte deinen Copilot.",
  "This copilot will start emailing {audience} again from {sender}. You haven't read the email yourself yet.":
    "Dieser Copilot schreibt {audience} wieder von {sender} aus an. Du hast die E-Mail selbst noch nicht gelesen.",
  "This copilot will start emailing {audience} from {sender}. You haven't read the email yourself yet.":
    "Dieser Copilot beginnt, {audience} von {sender} aus anzuschreiben. Du hast die E-Mail selbst noch nicht gelesen.",
  "Target Audience created successfully": "Zielgruppe erstellt",
  "Failed to create target audience": "Zielgruppe konnte nicht erstellt werden",
  "Type and press Enter to add industries…":
    "Tippe und drücke Enter, um Branchen hinzuzufügen…",
  "Search countries…": "Länder suchen…",
  "Select a country first…": "Wähle zuerst ein Land…",
  "Search cities…": "Städte suchen…",
  "Your Target Audience": "Deine Zielgruppe",
  "Loading target audiences...": "Zielgruppen werden geladen...",
  "No saved target audiences yet.": "Noch keine gespeicherten Zielgruppen.",
  "Target Profile Summary": "Zusammenfassung der Zielgruppe",
  "This is who your copilot will reach.":
    "Diese Zielgruppe erreicht dein Copilot.",
  "None selected": "Nichts ausgewählt",
  Cities: "Städte",
  companies: "Unternehmen",
  "Calculated after the first run": "Wird nach dem ersten Durchlauf berechnet",
  "Are you sure you want to delete this account?":
    "Möchtest du dieses Konto wirklich löschen?",
  "Why connect my email account?": "Warum mein E-Mail-Konto verbinden?",
  "1. Connect securely": "1. Sicher verbinden",
  "Your account is securely connected via OAuth, so we never see or store your password.":
    "Dein Konto wird sicher über OAuth verbunden, daher sehen oder speichern wir dein Passwort nie.",
  "2. Send from your own email address":
    "2. Von deiner eigenen E-Mail-Adresse senden",
  "This helps recipients recognize and trust the sender.":
    "So erkennen Empfänger den Absender und vertrauen ihm.",
  "3. Built for deliverability": "3. Für Zustellbarkeit gebaut",
  "Gradual warmup and daily limits to protect your sender reputation.":
    "Schrittweises Aufwärmen und Tageslimits schützen deine Absenderreputation.",
  "4. Replies stay in your inbox": "4. Antworten bleiben in deinem Postfach",
  "Replies go straight to your own inbox, so you can continue the conversation as usual.":
    "Antworten landen direkt in deinem eigenen Postfach, sodass du das Gespräch wie gewohnt fortsetzen kannst.",
  "Step {n} of {total}": "Schritt {n} von {total}",
  "Step {n}": "Schritt {n}",
  "Save & Continue": "Speichern und weiter",
  "Search timezone...": "Zeitzone suchen...",
  "No timezone found.": "Keine Zeitzone gefunden.",
  "Feedback submission is not implemented yet.":
    "Das Senden von Feedback ist noch nicht verfügbar.",
  "We couldn’t send your feedback. Please try again.":
    "Wir konnten dein Feedback nicht senden. Bitte versuche es erneut.",
  "Thanks for your feedback": "Danke für dein Feedback",
  "Your feedback helps us improve copilot setup.":
    "Dein Feedback hilft uns, die Einrichtung von Copilots zu verbessern.",
  Done: "Fertig",
  "How easy was it to set up your copilot?":
    "Wie einfach war die Einrichtung deines Copilots?",
  "Tell us what worked and what we can improve.":
    "Sag uns, was gut lief und was wir verbessern können.",
  "Sending…": "Wird gesendet…",
  "Send feedback": "Feedback senden",
  "Closing…": "Wird geschlossen…",
  "Saving reminder…": "Erinnerung wird gespeichert…",
  "Your rating": "Deine Bewertung",
  "(required)": "(Pflichtfeld)",
  "{value} out of 5": "{value} von 5",
  "Very difficult": "Sehr schwierig",
  "Very easy": "Sehr einfach",
  Comment: "Kommentar",
  "What could we make easier?": "Was könnten wir einfacher machen?",
  "All days": "Alle Tage",
  Weekdays: "Werktage",
  "{n} / day": "{n} / Tag",
  "From {start} to {end}": "Von {start} bis {end}",
  "Default timezone": "Standardzeitzone",
  current: "aktuellen",
  "Copilot limit reached": "Copilot-Limit erreicht",
  "You are already on our highest plan. Contact support if you need more copilots.":
    "Du hast bereits unseren höchsten Plan. Wende dich an den Support, wenn du mehr Copilots brauchst.",
  "Your {plan} plan includes {max} copilot and you are using it. Delete it to free a slot, or upgrade to add more.":
    "Dein {plan}-Plan umfasst {max} Copilot, und du nutzt ihn bereits. Lösche ihn, um Platz zu schaffen, oder upgrade, um mehr hinzuzufügen.",
  "Your {plan} plan includes {max} copilots and you are using all {max}. Delete one of your copilots to free a slot, or upgrade to add more.":
    "Dein {plan}-Plan umfasst {max} Copilots, und du nutzt alle {max}. Lösche einen Copilot, um Platz zu schaffen, oder upgrade, um mehr hinzuzufügen.",
  "Your {plan} plan includes {max} copilot and you are using it. Delete it to free a slot.":
    "Dein {plan}-Plan umfasst {max} Copilot, und du nutzt ihn bereits. Lösche ihn, um Platz zu schaffen.",
  "Your {plan} plan includes {max} copilots and you are using all {max}. Delete one of your copilots to free a slot.":
    "Dein {plan}-Plan umfasst {max} Copilots, und du nutzt alle {max}. Lösche einen Copilot, um Platz zu schaffen.",
  "Monthly email allowance reached ({used} of {max} used). Your copilots pause sending until the allowance renews on {date}.":
    "Monatliches E-Mail-Kontingent erreicht ({used} von {max} genutzt). Deine Copilots pausieren bis zur Erneuerung am {date}.",
  "Monthly email allowance reached ({used} of {max} used). Your copilots pause sending until the allowance renews.":
    "Monatliches E-Mail-Kontingent erreicht ({used} von {max} genutzt). Deine Copilots pausieren bis zur Erneuerung.",
  "You have used {used} of {max} emails this month. {remaining} left before your copilots pause.":
    "Du hast diesen Monat {used} von {max} E-Mails genutzt. Noch {remaining}, bevor deine Copilots pausieren.",
  Upgrade: "Upgraden",
  "View plan": "Plan ansehen",
  Dismiss: "Ausblenden",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. Upgrade for a higher monthly allowance, or wait until {date} when your allowance renews.":
    "Dein {plan}-Plan umfasst {max} E-Mails pro Monat, und du hast alle {used} genutzt. Upgrade für ein höheres Monatskontingent oder warte bis zum {date}, wenn es erneuert wird.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. Upgrade for a higher monthly allowance, or wait until your allowance renews.":
    "Dein {plan}-Plan umfasst {max} E-Mails pro Monat, und du hast alle {used} genutzt. Upgrade für ein höheres Monatskontingent oder warte, bis es erneuert wird.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. You are on our highest plan, so sending resumes when your allowance renews on {date}.":
    "Dein {plan}-Plan umfasst {max} E-Mails pro Monat, und du hast alle {used} genutzt. Du hast unseren höchsten Plan, daher wird der Versand nach der Erneuerung am {date} fortgesetzt.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. You are on our highest plan, so sending resumes when your allowance renews.":
    "Dein {plan}-Plan umfasst {max} E-Mails pro Monat, und du hast alle {used} genutzt. Du hast unseren höchsten Plan, daher wird der Versand nach der Erneuerung fortgesetzt.",
  "Monthly email allowance reached": "Monatliches E-Mail-Kontingent erreicht",
  "You are already on our highest plan. Your allowance renews automatically next month.":
    "Du hast bereits unseren höchsten Plan. Dein Kontingent wird nächsten Monat automatisch erneuert.",
  "Yearly (save 20%)": "Jährlich (20 % sparen)",
  "Maybe later": "Vielleicht später",
  "Go to Billing": "Zur Abrechnung",
  "Got it": "Verstanden",
  "The sending schedule is unavailable. Please check its settings.":
    "Der Versandzeitplan ist nicht verfügbar. Bitte prüfe die Einstellungen.",
  "Select at least one valid active day before sending a test email.":
    "Wähle mindestens einen gültigen aktiven Tag aus, bevor du eine Test-E-Mail sendest.",
  "Select a valid schedule timezone before sending a test email.":
    "Wähle eine gültige Zeitzone für den Zeitplan aus, bevor du eine Test-E-Mail sendest.",
  "Please check the schedule's sending hours settings before sending a test email.":
    "Bitte prüfe die Versandzeiten des Zeitplans, bevor du eine Test-E-Mail sendest.",
  "Choose valid, different start and end times before sending a test email.":
    "Wähle gültige, unterschiedliche Start- und Endzeiten, bevor du eine Test-E-Mail sendest.",
  "Test emails are only allowed from {start} to {end} ({timezone}) on active days.":
    "Test-E-Mails sind nur von {start} bis {end} ({timezone}) an aktiven Tagen möglich.",
  "We couldn’t save your reminder. Please try again.":
    "Wir konnten deine Erinnerung nicht speichern. Bitte versuche es erneut.",
  // New copilot wizard: step labels, audience size labels, variable hints
  "Configure your copilot": "Richte deinen Copilot ein",
  "Choose who's sending": "Wähle den Absender",
  "Choose who to reach": "Wähle, wen du erreichst",
  "Create your message": "Erstelle deine Nachricht",
  "Choose when to send": "Wähle, wann gesendet wird",
  "Review and launch": "Prüfen und starten",
  Massive: "Sehr groß",
  Large: "Groß",
  Healthy: "Gesund",
  Moderate: "Mittel",
  Limited: "Begrenzt",
  "The recipient's company name": "Der Firmenname des Empfängers",
  "The recipient's email address": "Die E-Mail-Adresse des Empfängers",
  "The recipient's website": "Die Website des Empfängers",
  "The recipient's phone number": "Die Telefonnummer des Empfängers",
  "Your name as the sender": "Dein Name als Absender",
  // Billing UX updates and auth guard
  "Could not retry payment. Try again.":
    "Zahlung konnte nicht erneut versucht werden. Bitte versuche es erneut.",
  "Payment failed. You have not been charged. Your plan is not active yet. Retry the payment below to finish setting it up.":
    "Zahlung fehlgeschlagen. Es wurde nichts abgebucht. Dein Tarif ist noch nicht aktiv. Versuche die Zahlung unten erneut, um die Einrichtung abzuschließen.",
  "We have not received payment yet. No charge has been made. Refresh to check the latest status.":
    "Wir haben noch keine Zahlung erhalten. Es wurde nichts abgebucht. Aktualisiere, um den neuesten Status zu prüfen.",
  "Refresh status": "Status aktualisieren",
  "An active plan is required to use the dashboard. Choose a plan below to get started.":
    "Für die Nutzung des Dashboards ist ein aktiver Tarif erforderlich. Wähle unten einen Tarif aus, um loszulegen.",
  "Payment summary": "Zahlungsübersicht",
  "Payment failed": "Zahlung fehlgeschlagen",
  "Awaiting payment": "Zahlung ausstehend",
  "Amount charged": "Abgebuchter Betrag",
  "View your payment attempts and past invoices. Pending or failed entries are not charges.":
    "Sieh dir deine Zahlungsversuche und früheren Rechnungen an. Ausstehende oder fehlgeschlagene Einträge sind keine Abbuchungen.",
  "Starting checkout": "Checkout wird gestartet",
  "Retry payment": "Zahlung erneut versuchen",
  "Continue to checkout": "Weiter zur Kasse",
  "Review your plan": "Tarif überprüfen",
  "Your plan and billing interval are ready. Continue to checkout when you are ready.":
    "Dein Tarif und das Abrechnungsintervall sind bereit. Gehe weiter zur Kasse, wenn du bereit bist.",
  "Save up to {percent}%": "Bis zu {percent}% sparen",
  "Yearly (save up to {percent}%)": "Jährlich (bis zu {percent}% sparen)",
  Yearly: "Jährlich",
  "Payment pending": "Zahlung ausstehend",
  "This plan is not active yet and you have not been charged. Retry the payment to activate it.":
    "Dieser Tarif ist noch nicht aktiv und es wurde nichts abgebucht. Versuche die Zahlung erneut, um ihn zu aktivieren.",
  "We have not received payment yet. Your plan stays inactive until the payment is confirmed.":
    "Wir haben noch keine Zahlung erhalten. Dein Tarif bleibt inaktiv, bis die Zahlung bestätigt ist.",
  "Included after payment": "Nach Zahlung enthalten",
  "Choose another plan": "Einen anderen Tarif wählen",
  "We couldn't check your subscription. Please try again.":
    "Wir konnten dein Abonnement nicht überprüfen. Bitte versuche es erneut.",
  "Retrying…": "Wird erneut versucht…",
  "Try again": "Erneut versuchen",
  "Couldn't load your plan": "Dein Tarif konnte nicht geladen werden",
};

const fr: Messages = {
  Overview: "Vue d'ensemble",
  Setup: "Configuration",
  "Email Accounts": "Comptes e-mail",
  "Target Audiences": "Audiences cibles",
  "Email Templates": "Modèles d'e-mail",
  Billing: "Facturation",
  "emails used": "e-mails utilisés",
  "Limit reached": "Limite atteinte",
  "Manage Plan": "Gérer l'abonnement",
  Profile: "Profil",
  Language: "Langue",
  "Sign Out": "Se déconnecter",
  "Welcome back!👋": "Bon retour !👋",
  "Here's what's happening with your outreach today":
    "Voici ce qui se passe aujourd'hui avec votre prospection",
  "Create New Copilot": "Créer un copilot",
  "Manage your automated outreach campaigns.":
    "Gérez vos campagnes de prospection automatisées.",
  "Recipients who have been emailed by your copilots.":
    "Destinataires contactés par vos copilots.",
  "Select Copilot": "Choisir un copilot",
  "Manage the email accounts used for outreach.":
    "Gérez les comptes e-mail utilisés pour la prospection.",
  "Add Email Account": "Ajouter un compte e-mail",
  "Target Audience": "Audience cible",
  "Define who you want to reach with your copilot.":
    "Définissez qui vous voulez atteindre avec votre copilot.",
  "Create New Target Audience": "Créer une audience cible",
  "Create and manage reusable email templates for your campaigns.":
    "Créez et gérez des modèles d'e-mail réutilisables pour vos campagnes.",
  "Create New Email Template": "Créer un modèle d'e-mail",
  "Control when your campaigns send emails.":
    "Choisissez quand vos campagnes envoient des e-mails.",
  "Create New Flight Schedule": "Créer un flight schedule",
  "Manage your subscription, payment method and invoices.":
    "Gérez votre abonnement, votre moyen de paiement et vos factures.",
  "Billing FAQ": "FAQ facturation",
  Add: "Ajouter",
  Settings: "Paramètres",
  "Manage your account preferences.": "Gérez les préférences de votre compte.",
  Security: "Sécurité",
  "Profile Information": "Informations du profil",
  "First Name": "Prénom",
  "Last Name": "Nom",
  "Email Address": "Adresse e-mail",
  Timezone: "Fuseau horaire",
  "The language of the app. Your email templates stay in the language you write them in.":
    "La langue de l'application. Vos modèles d'e-mail restent dans la langue dans laquelle vous les rédigez.",
  "Save Changes": "Enregistrer",
  "Saving...": "Enregistrement...",
  "Saved!": "Enregistré !",
  "Change Password": "Changer le mot de passe",
  "Current Password": "Mot de passe actuel",
  "New Password": "Nouveau mot de passe",
  "Confirm New Password": "Confirmer le nouveau mot de passe",
  "Update Password": "Mettre à jour le mot de passe",
  "Updating...": "Mise à jour...",
  "Danger Zone": "Zone de danger",
  "Permanently delete your account and all associated data. This action cannot be undone.":
    "Supprimez définitivement votre compte et toutes les données associées. Cette action est irréversible.",
  "Delete Account": "Supprimer le compte",
  // Copilots page
  "1 copilot archived.": "1 copilot archivé.",
  "{count} copilots archived.": "{count} copilots archivés.",
  "1 copilot could not be archived. Please try again.":
    "1 copilot n'a pas pu être archivé. Veuillez réessayer.",
  "{count} copilots could not be archived. Please try again.":
    "{count} copilots n'ont pas pu être archivés. Veuillez réessayer.",
  "Loading...": "Chargement...",
  "No copilots yet": "Aucun copilot pour l'instant",
  "No copilots yet.": "Aucun copilot pour l'instant.",
  "Build your first copilot to start sending personalized emails at scale.":
    "Créez votre premier copilot pour envoyer des e-mails personnalisés à grande échelle.",
  "No copilots match your filter.":
    "Aucun copilot ne correspond à votre filtre.",
  "Archive 1 copilot? It stops sending.":
    "Archiver 1 copilot ? Il arrêtera d'envoyer.",
  "Archive {count} copilots? They stop sending.":
    "Archiver {count} copilots ? Ils arrêteront d'envoyer.",
  Cancel: "Annuler",
  Archive: "Archiver",
  "Archiving...": "Archivage...",
  "{count} selected": "{count} sélectionné(s)",
  "Workflow status": "Statut du workflow",
  Sent: "Envoyés",
  Status: "Statut",
  "Select all copilots on this page":
    "Sélectionner tous les copilots de cette page",
  "Already archived": "Déjà archivé",
  "Email Account": "Compte e-mail",
  Account: "Compte",
  Template: "Modèle",
  Schedule: "Planning",
  Configured: "Configuré",
  Incomplete: "Incomplet",
  Selected: "Sélectionné",
  "Not selected": "Non sélectionné",
  Pending: "En attente",
  Draft: "Brouillon",
  "In Flight": "En vol",
  Completed: "Terminé",
  Scheduled: "Planifié",
  Paused: "En pause",
  Archived: "Archivé",
  "All status": "Tous les statuts",
  "Search copilots...": "Rechercher des copilots...",
  "Last sent": "Dernier envoi",
  "Not yet": "Pas encore",
  "No email account": "Aucun compte e-mail",
  "No flight schedule": "Aucun flight schedule",
  "Continue setup": "Continuer la configuration",
  "View in Departure": "Voir dans Departure",
  Resume: "Reprendre",
  "Copilot actions": "Actions du copilot",
  "Copilot resumed successfully.": "Copilot repris.",
  "Error resuming copilot. Please try again.":
    "Erreur lors de la reprise du copilot. Veuillez réessayer.",
  "Add an email account and an email template before sending a test email":
    "Ajoutez un compte e-mail et un modèle d'e-mail avant d'envoyer un e-mail de test",
  "Add an email account before sending a test email":
    "Ajoutez un compte e-mail avant d'envoyer un e-mail de test",
  "Add an email template before sending a test email":
    "Ajoutez un modèle d'e-mail avant d'envoyer un e-mail de test",
  "Send a test email to your connected account":
    "Envoyer un e-mail de test à votre compte connecté",
  "Test email request accepted. Check your connected inbox.":
    "E-mail de test demandé. Consultez votre boîte de réception connectée.",
  "Failed to send test email. Please try again.":
    "Échec de l'envoi de l'e-mail de test. Veuillez réessayer.",
  "Failed to update status.": "Échec de la mise à jour du statut.",
  "Copilot launch request accepted.": "Lancement du copilot demandé.",
  "Failed to launch. Please try again.":
    "Échec du lancement. Veuillez réessayer.",
  "Archive this copilot?": "Archiver ce copilot ?",
  "Failed to archive.": "Échec de l'archivage.",
  "Permanently delete this copilot? This cannot be undone.":
    "Supprimer définitivement ce copilot ? Cette action est irréversible.",
  "Failed to delete.": "Échec de la suppression.",
  'Duplicate "{name}"? This will create a new draft copy.':
    "Dupliquer « {name} » ? Une nouvelle copie en brouillon sera créée.",
  "Copilot duplicated.": "Copilot dupliqué.",
  "Failed to duplicate.": "Échec de la duplication.",
  Edit: "Modifier",
  Duplicate: "Dupliquer",
  "Send Test Email": "Envoyer un e-mail de test",
  "Sending...": "Envoi...",
  "Complete all setup steps before launching":
    "Terminez toutes les étapes avant de lancer",
  Launch: "Lancer",
  "Launching...": "Lancement...",
  Pause: "Mettre en pause",
  "Complete all setup steps before resuming":
    "Terminez toutes les étapes avant de reprendre",
  Delete: "Supprimer",
  // Departure page
  Address: "Adresse",
  "Clear search": "Effacer la recherche",
  Company: "Entreprise",
  "Sent at": "Envoyé le",
  "Email body": "Corps de l'e-mail",
  Email: "E-mail",
  Exclude: "Exclure",
  Excluded: "Exclu",
  Export: "Exporter",
  "Failed to update lead.": "Échec de la mise à jour du lead.",
  "Include Again": "Réintégrer",
  "Lead actions": "Actions du lead",
  "Lead exported as CSV.": "Lead exporté en CSV.",
  "Lead removed from the overview.": "Lead retiré de l'aperçu.",
  "Leads will appear here once your copilots start sending emails.":
    "Les leads apparaîtront ici dès que vos copilots enverront des e-mails.",
  "No copilot found.": "Aucun copilot trouvé.",
  "No description": "Aucune description",
  "No leads yet": "Aucun lead pour l'instant",
  "No results found": "Aucun résultat",
  "No target audience": "Aucune audience",
  "Page {page} of {pages} ({total} total)":
    "Page {page} sur {pages} ({total} au total)",
  Phone: "Téléphone",
  "Remove {email} from your overview?": "Retirer {email} de votre aperçu ?",
  "Search company, email, website or phone...":
    "Rechercher une entreprise, un e-mail, un site ou un téléphone...",
  "Select one to view activity": "Sélectionnez-en un pour voir l'activité",
  "Show email": "Voir l'e-mail",
  "Show less": "Afficher moins",
  Show: "Afficher",
  "Subject line": "Objet",
  "Unknown Copilot": "Copilot inconnu",
  Unknown: "Inconnu",
  "Unnamed Copilot": "Copilot sans nom",
  "View full message": "Voir le message complet",
  Website: "Site web",
  "You can email {email} again.": "Vous pouvez à nouveau écrire à {email}.",
  "Your Copilots": "Vos copilots",
  "results per page": "résultats par page",
  show: "voir",
  "{count} sent": "{count} envoyés",
  "{email} is excluded. You won't email them again.":
    "{email} est exclu. Vous ne lui écrirez plus.",
  'No leads match "{query}". Try a different search term.':
    "Aucun lead ne correspond à « {query} ». Essayez un autre terme.",
  New: "Nouveau",
  Replied: "Répondu",
  Failed: "Échec",
  Skipped: "Ignoré",
  // Overview
  "Emails Sent": "E-mails envoyés",
  Replies: "Réponses",
  "Reply Rate": "Taux de réponse",
  "This metric isn't live yet": "Cette statistique n'est pas encore disponible",
  "Coming soon": "Bientôt",
  "View all": "Tout voir",
  Performance: "Performances",
  "Last 7 days": "7 derniers jours",
  "Last 14 days": "14 derniers jours",
  "Last 30 days": "30 derniers jours",
  "No copilots found": "Aucun copilot trouvé",
  "No departure found": "Aucun départ pour l'instant",
  "Quick start": "Démarrage rapide",
  "Create a copilot": "Créer un copilot",
  "Add email account": "Ajouter un compte e-mail",
  "Create a target audience": "Créer une audience",
  "Create an email template": "Créer un modèle d'e-mail",
  "Create a flight schedule": "Créer un flight schedule",
  "Your data is encrypted and secure. We only use your email account to send emails on your behalf.":
    "Vos données sont chiffrées et sécurisées. Nous utilisons votre compte e-mail uniquement pour envoyer des e-mails en votre nom.",
  "Learn more": "En savoir plus",
  // Overview (daily stats not live yet)
  "All time": "Au total",
  "Emails sent and replies per day will appear here soon.":
    "Les e-mails envoyés et les réponses par jour apparaîtront bientôt ici.",
  // Email accounts
  "Account Name": "Nom du compte",
  "Account actions": "Actions du compte",
  "Account name and email address are required.":
    "Le nom du compte et l'adresse e-mail sont obligatoires.",
  "Add Account": "Ajouter le compte",
  "Add an email account to start sending outreach.":
    "Ajoutez un compte e-mail pour envoyer votre prospection.",
  "Adding...": "Ajout...",
  "App Password / Token": "Mot de passe d'application / jeton",
  "Are you sure you want to delete this email account?":
    "Voulez-vous vraiment supprimer ce compte e-mail ?",
  "Choose the email account your copilot will use to send emails.":
    "Choisissez le compte e-mail que votre copilot utilisera pour envoyer des e-mails.",
  "Connect other email provider": "Connecter un autre fournisseur",
  "Connect with Gmail": "Se connecter avec Gmail",
  "Connect with Outlook": "Se connecter avec Outlook",
  "Connect your Gmail account with OAuth in a few clicks.":
    "Connectez votre compte Gmail via OAuth en quelques clics.",
  "Connect your Outlook account with OAuth in a few clicks.":
    "Connectez votre compte Outlook via OAuth en quelques clics.",
  "Connect your email account": "Connectez votre compte e-mail",
  "Edit Email Account": "Modifier le compte e-mail",
  "Email account created successfully": "Compte e-mail créé",
  "Email account deleted successfully": "Compte e-mail supprimé",
  "Email account verified successfully": "Compte e-mail vérifié",
  "Emails sent per account isn't live yet":
    "Les e-mails envoyés par compte ne sont pas encore disponibles",
  "Failed to add the email account.": "Échec de l'ajout du compte e-mail.",
  "Failed to connect via OAuth": "Échec de la connexion via OAuth",
  "Failed to create email account": "Échec de la création du compte e-mail",
  "Failed to delete email account": "Échec de la suppression du compte e-mail",
  "Failed to fetch email accounts": "Échec du chargement des comptes e-mail",
  "Failed to update the email account.":
    "Échec de la mise à jour du compte e-mail.",
  "Failed to verify email account": "Échec de la vérification du compte e-mail",
  "Go Back": "Retour",
  "John Doe": "Jean Dupont",
  "No Email Accounts Found": "Aucun compte e-mail trouvé",
  "No Email Accounts Yet": "Aucun compte e-mail pour l'instant",
  "Open account actions": "Ouvrir les actions du compte",
  "Other options": "Autres options",
  Provider: "Fournisseur",
  Recommended: "Recommandé",
  "SMTP Host": "Hôte SMTP",
  "Search accounts": "Rechercher des comptes",
  "Search accounts...": "Rechercher des comptes...",
  "Try adjusting your search or filters":
    "Modifiez votre recherche ou vos filtres",
  "Use SMTP / IMAP to connect any email provider.":
    "Utilisez SMTP / IMAP pour connecter n'importe quel fournisseur.",
  "Your Email Accounts ({count})": "Vos comptes e-mail ({count})",
  "Your name / Sender Name": "Votre nom / nom d'expéditeur",
  "e.g. Outreach Account": "ex. Compte de prospection",
  "Email account": "Compte e-mail",
  "Email address": "Adresse e-mail",
  Connected: "Connecté le",
  "Emails sent": "Envoyés",
  Verified: "Vérifié",
  Unverified: "Non vérifié",
  Error: "Erreur",
  "All statuses": "Tous les statuts",
  Verify: "Vérifier",
  "Email account verification failed. Please make sure the account is correctly configured.":
    "La vérification du compte e-mail a échoué. Vérifiez que le compte est correctement configuré.",
  // Email accounts (badges)
  "Easy setup": "Configuration facile",
  // Target audiences
  "Add at least one industry.": "Ajoutez au moins un secteur.",
  "All cities within the selected countries are included.":
    "Toutes les villes des pays choisis sont incluses.",
  "All cities": "Toutes les villes",
  "Audience size isn't live yet":
    "La taille de l'audience n'est pas encore disponible",
  "Choose the industry of your target companies.":
    "Choisissez le secteur de vos entreprises cibles.",
  City: "Ville",
  Copy: "Copie",
  Country: "Pays",
  "Create a target audience for easier access later":
    "Créez une audience pour la réutiliser facilement",
  "Define your Target Audience": "Définissez votre audience",
  "Delete this target audience?": "Supprimer cette audience ?",
  "E.g. Tech Leads in Amsterdam": "ex. Responsables tech à Amsterdam",
  "Failed to create the target audience.":
    "Échec de la création de l'audience.",
  "Failed to duplicate the target audience.":
    "Échec de la duplication de l'audience.",
  "Failed to start. Please try again.":
    "Échec du démarrage. Veuillez réessayer.",
  "Failed to update the target audience.":
    "Échec de la mise à jour de l'audience.",
  "Give your target a name so you can easily identify it later":
    "Donnez un nom à votre audience pour la retrouver facilement",
  "In which cities are your target companies located?":
    "Dans quelles villes se trouvent vos entreprises cibles ?",
  "In which countries are your target companies located?":
    "Dans quels pays se trouvent vos entreprises cibles ?",
  Industry: "Secteur",
  "No Target Audiences Found": "Aucune audience trouvée",
  "Only companies in the cities you pick below.":
    "Uniquement les entreprises des villes choisies ci-dessous.",
  "Row actions": "Actions de la ligne",
  "Search target audience...": "Rechercher une audience...",
  "Search target audiences by name": "Rechercher des audiences par nom",
  "Target Audience Name": "Nom de l'audience",
  "Target audience created": "Audience créée",
  "Target audience duplicated.": "Audience dupliquée.",
  "Target audience name is required.": "Le nom de l'audience est obligatoire.",
  "Target audience updated": "Audience mise à jour",
  "Target specific cities": "Cibler des villes précises",
  "Your Target Audiences ({count})": "Vos audiences ({count})",
  "Target Audience name": "Nom de l'audience",
  "Est. Audience Size": "Taille estimée",
  "Last updated": "Dernière mise à jour",
  "Type and press Enter to add industries...":
    "Tapez et appuyez sur Entrée pour ajouter des secteurs...",
  "Search countries...": "Rechercher des pays...",
  "Select a country first...": "Choisissez d'abord un pays...",
  "Search cities...": "Rechercher des villes...",
  "Please select a country first": "Veuillez d'abord choisir un pays",
  "No cities found": "Aucune ville trouvée",
  "Type to search…": "Tapez pour rechercher…",
  "Tell your copilot who you want to reach and we’ll find the best matches.":
    "Dites à votre copilot qui vous voulez atteindre et nous trouverons les meilleures correspondances.",
  // Email templates
  "Failed to save template.": "Échec de l'enregistrement du modèle.",
  "Delete this template?": "Supprimer ce modèle ?",
  "Your Email Templates ({count})": "Vos modèles d'e-mail ({count})",
  "Search email template...": "Rechercher un modèle d'e-mail...",
  "Loading templates…": "Chargement des modèles…",
  "No Active Email Templates": "Aucun modèle d'e-mail",
  "Create an email template for easier access later":
    "Créez un modèle d'e-mail pour le réutiliser facilement",
  "In use": "Utilisé",
  "Not in use": "Non utilisé",
  "Reply rate isn't live yet": "Le taux de réponse n'est pas encore disponible",
  "1 step": "1 étape",
  "{count} steps": "{count} étapes",
  "Template actions": "Actions du modèle",
  "Template name": "Nom du modèle",
  Steps: "Étapes",
  "Used in": "Utilisé dans",
  "Reply rate": "Taux de réponse",
  "The company name": "Le nom de l'entreprise",
  "Your name (the sender)": "Votre nom (l'expéditeur)",
  "The company's website": "Le site web de l'entreprise",
  "Email address of the contact": "Adresse e-mail du contact",
  "Add Variables": "Ajouter des variables",
  "Step {n} - Initial Email": "Étape {n} - Premier e-mail",
  "Step {n} - Follow-up {m}": "Étape {n} - Relance {m}",
  "A personalized cold email": "Un e-mail de prospection personnalisé",
  "Send {days} days after no reply": "Envoyer {days} jours sans réponse",
  "Edit email template": "Modifier le modèle d'e-mail",
  "Create new email template": "Créer un modèle d'e-mail",
  Save: "Enregistrer",
  "Email template name": "Nom du modèle d'e-mail",
  "Name your template": "Nommez votre modèle",
  "Type your subject line": "Saisissez votre objet",
  "Delete step": "Supprimer l'étape",
  "Add Follow-up Step": "Ajouter une relance",
  "Click to insert at your cursor":
    "Cliquez pour insérer à la position du curseur",
  "Your email templates": "Vos modèles d'e-mail",
  "No saved templates yet.": "Aucun modèle enregistré.",
  "View more ({count} more)": "Voir plus ({count} de plus)",
  "Save changes": "Enregistrer les modifications",
  // Flight schedule
  Mon: "Lun",
  Tue: "Mar",
  Wed: "Mer",
  Thu: "Jeu",
  Fri: "Ven",
  Sat: "Sam",
  Sun: "Dim",
  "No active days": "Aucun jour actif",
  "No Flight Schedules Found": "Aucun flight schedule trouvé",
  "No Flight Schedules Yet": "Aucun flight schedule pour l'instant",
  "Create a flight schedule for easier access later":
    "Créez un flight schedule pour le réutiliser facilement",
  "Your Flight Schedules ({count})": "Vos flight schedules ({count})",
  "Search flight schedule...": "Rechercher un flight schedule...",
  "Search flight schedules by name": "Rechercher des flight schedules par nom",
  "Loading flight schedules…": "Chargement des flight schedules…",
  "Flight schedule name": "Nom du flight schedule",
  Days: "Jours",
  Time: "Heure",
  "Used by": "Utilisé par",
  "Flight schedule actions": "Actions du flight schedule",
  "Failed to load flight schedules.":
    "Échec du chargement des flight schedules.",
  "Flight schedule updated.": "Flight schedule mis à jour.",
  "Flight schedule created.": "Flight schedule créé.",
  "Are you sure you want to delete this flight schedule?":
    "Voulez-vous vraiment supprimer ce flight schedule ?",
  "Flight schedule deleted.": "Flight schedule supprimé.",
  "Failed to delete flight schedule.":
    "Échec de la suppression du flight schedule.",
  "Flight schedule duplicated.": "Flight schedule dupliqué.",
  "Failed to duplicate flight schedule.":
    "Échec de la duplication du flight schedule.",
  "Configure when and how emails are sent.":
    "Définissez quand et comment les e-mails sont envoyés.",
  "Schedule Name": "Nom du planning",
  "Daily Send Limit": "Limite d'envoi quotidienne",
  "Maximum number of new emails to send per day.":
    "Nombre maximal de nouveaux e-mails par jour.",
  "Recommended: 20–50 per day": "Recommandé : 20–50 par jour",
  "Unlimited sending": "Envoi illimité",
  "Active Days": "Jours actifs",
  "Choose which days emails can be sent.":
    "Choisissez les jours d'envoi des e-mails.",
  "Sending Hours": "Heures d'envoi",
  "Set the daily time window for sending emails.":
    "Définissez la plage horaire quotidienne d'envoi.",
  From: "De",
  To: "À",
  "Sending hours are off": "Les heures d'envoi sont désactivées",
  "Timezone for sending and scheduling.":
    "Fuseau horaire pour l'envoi et la planification.",
  "Please select at least one active day.":
    "Veuillez choisir au moins un jour actif.",
  "Failed to save flight schedule. Please try again.":
    "Échec de l'enregistrement du flight schedule. Veuillez réessayer.",
  "Edit Flight Schedule": "Modifier le flight schedule",
  "New Flight Schedule": "Nouveau flight schedule",
  "e.g. Mornings, Afternoons, Weekend…": "ex. Matins, Après-midis, Week-end…",
  "Your copilot will send as many emails as possible within the active hours each day.":
    "Votre copilot enverra autant d'e-mails que possible pendant les heures actives de chaque jour.",
  "Availability: {value} (selected active days only).":
    "Disponibilité : {value} (jours actifs choisis uniquement).",
  "Saving…": "Enregistrement…",
  "Create Schedule": "Créer le planning",
  // Billing
  "Could not start checkout. Try again.":
    "Impossible de lancer le paiement. Veuillez réessayer.",
  "Subscription canceled. You keep access until the end of your billing period.":
    "Abonnement résilié. Vous gardez l'accès jusqu'à la fin de votre période de facturation.",
  "Could not cancel your subscription.":
    "Impossible de résilier votre abonnement.",
  "Could not update your payment method. Try again.":
    "Impossible de mettre à jour votre moyen de paiement. Veuillez réessayer.",
  "Your payment is still being processed. This page updates as soon as it's confirmed.":
    "Votre paiement est en cours de traitement. Cette page se met à jour dès sa confirmation.",
  "Cancel your subscription?": "Résilier votre abonnement ?",
  "You'll keep access to your current plan until the end of your billing period. Your Copilots and data stay untouched.":
    "Vous gardez l'accès à votre offre actuelle jusqu'à la fin de votre période de facturation. Vos copilots et vos données restent intacts.",
  "Canceling...": "Résiliation...",
  "Cancel plan": "Résilier l'offre",
  "Keep plan": "Garder l'offre",
  "Billing summary": "Récapitulatif de facturation",
  Plan: "Offre",
  Price: "Prix",
  "Billing period": "Période de facturation",
  "Next billing date": "Prochaine date de facturation",
  "Amount due": "Montant dû",
  Annual: "Annuel",
  Monthly: "Mensuel",
  "Update payment method": "Mettre à jour le moyen de paiement",
  "Current Plan": "Offre actuelle",
  "Subscription actions": "Actions de l'abonnement",
  "Email credits usage": "Utilisation des crédits e-mail",
  "Emails used": "E-mails utilisés",
  "{percent} % used": "{percent} % utilisés",
  "Monthly allowance reached. Sending resumes on {date}.":
    "Quota mensuel atteint. L'envoi reprend le {date}.",
  "Monthly allowance reached. Sending resumes when your allowance renews.":
    "Quota mensuel atteint. L'envoi reprend dès le renouvellement de votre quota.",
  "Your plan is canceled and stays active until {date}.":
    "Votre offre est résiliée et reste active jusqu'au {date}.",
  "Card on file": "Carte enregistrée",
  "Change plan": "Changer d'offre",
  "Plan renews on": "Renouvellement le",
  "Payment method": "Moyen de paiement",
  Update: "Modifier",
  "/ year": "/ an",
  "/ month": "/ mois",
  "Current plan": "Offre actuelle",
  "Most Popular": "La plus populaire",
  "Choose plan": "Choisir l'offre",
  "Included:": "Inclus :",
  "Perfect for individuals.": "Parfait pour les indépendants.",
  "Perfect for growing businesses.":
    "Parfait pour les entreprises en croissance.",
  "For power users and teams": "Pour les utilisateurs intensifs et les équipes",
  "Choose your plan": "Choisissez votre offre",
  "Billing interval": "Périodicité de facturation",
  "Save {percent}%": "Économisez {percent} %",
  "Back to billing": "Retour à la facturation",
  "Cancel anytime. No long-term commitments.":
    "Résiliable à tout moment. Sans engagement long.",
  "Cancel anytime": "Résiliable à tout moment",
  "No contracts. Upgrade or downgrade anytime.":
    "Sans contrat. Changez d'offre quand vous voulez.",
  "Your own email": "Votre propre e-mail",
  "Every email is sent from your own connected email account.":
    "Chaque e-mail est envoyé depuis votre propre compte e-mail connecté.",
  "Secure & reliable": "Sûr et fiable",
  "Your data is encrypted and never shared.":
    "Vos données sont chiffrées et jamais partagées.",
  Invoices: "Factures",
  "No invoices yet.": "Aucune facture pour l'instant.",
  "Download invoice": "Télécharger la facture",
  "View and download your past invoices.":
    "Consultez et téléchargez vos factures passées.",
  Invoice: "Facture",
  Amount: "Montant",
  Download: "Télécharger",
  "View all invoices": "Voir toutes les factures",
  Paid: "Payée",
  "Need help?": "Besoin d'aide ?",
  "If you have any question about billing or your subscription we're here to help.":
    "Une question sur la facturation ou votre abonnement ? Nous sommes là pour vous aider.",
  "Find answers to common billing questions.":
    "Trouvez des réponses aux questions fréquentes sur la facturation.",
  "Contact support": "Contacter le support",
  "Everything you need to know about payments, subscriptions and invoices.":
    "Tout ce qu'il faut savoir sur les paiements, abonnements et factures.",
  "Search billing questions...": "Rechercher dans les questions...",
  "Search billing questions": "Rechercher dans les questions de facturation",
  "No questions match your search.":
    "Aucune question ne correspond à votre recherche.",
  "We're here to help. Contact our team and we'll get back to you as soon as possible.":
    "Nous sommes là pour vous aider. Contactez notre équipe, nous vous répondrons au plus vite.",
  "Still have questions?": "Encore des questions ?",
  "Email us": "Écrivez-nous",
  "1 email account": "1 compte e-mail",
  "3 email accounts": "3 comptes e-mail",
  "5 email accounts": "5 comptes e-mail",
  "500 emails/month": "500 e-mails/mois",
  "1,200 emails/month": "1 200 e-mails/mois",
  "3,000 emails/month": "3 000 e-mails/mois",
  "CSV export": "Export CSV",
  "Email support": "Support par e-mail",
  "Priority support": "Support prioritaire",
  "What payment methods do you accept?":
    "Quels moyens de paiement acceptez-vous ?",
  "We currently accept all major credit and debit cards. We're always looking to expand our supported payment methods.":
    "Nous acceptons actuellement toutes les principales cartes de crédit et de débit. Nous cherchons toujours à ajouter d'autres moyens de paiement.",
  "Can I change my plan at any time?":
    "Puis-je changer d'offre à tout moment ?",
  "Yes. You can upgrade or downgrade your plan at any time from the Billing page. Your new subscription starts immediately after payment.":
    "Oui. Vous pouvez passer à une offre supérieure ou inférieure à tout moment depuis la page Facturation. Votre nouvel abonnement démarre dès le paiement.",
  "Can I cancel my subscription at any time?":
    "Puis-je résilier mon abonnement à tout moment ?",
  "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your Billing settings, and your plan will remain active until the end of your current billing period.":
    "Absolument. Il n'y a pas d'engagement long. Vous pouvez résilier à tout moment depuis la Facturation, et votre offre reste active jusqu'à la fin de la période en cours.",
  "When will I be charged?": "Quand serai-je débité ?",
  "Your subscription renews automatically on the same day of each billing cycle. You can always view your next billing date and upcoming charge from the Billing page.":
    "Votre abonnement se renouvelle automatiquement le même jour à chaque cycle. Vous voyez toujours votre prochaine date de facturation et le montant sur la page Facturation.",
  "What happens if my payment fails?":
    "Que se passe-t-il si mon paiement échoue ?",
  "If a payment can't be processed, we'll automatically retry your payment and notify you by email. If payment continues to fail, your subscription may be paused until your payment method is updated.":
    "Si un paiement ne peut pas être traité, nous réessayons automatiquement et vous prévenons par e-mail. Si le paiement échoue encore, votre abonnement peut être suspendu jusqu'à la mise à jour de votre moyen de paiement.",
  "Where can I download my invoices?": "Où puis-je télécharger mes factures ?",
  "All of your invoices are available in the Billing History section of your Billing page. You can download them at any time for your records or accounting.":
    "Toutes vos factures sont disponibles dans la section Factures de la page Facturation. Vous pouvez les télécharger à tout moment pour votre comptabilité.",
  "Do you offer annual billing?": "Proposez-vous une facturation annuelle ?",
  "Yes. You can choose between monthly and annual billing. Annual subscriptions include a discounted rate compared to paying monthly.":
    "Oui. Vous pouvez choisir entre une facturation mensuelle ou annuelle. L'abonnement annuel est moins cher que le paiement mensuel.",
  "Will I lose my data if I downgrade?":
    "Vais-je perdre mes données si je passe à une offre inférieure ?",
  "No. Your data remains safely stored. If your new plan includes lower limits, some features or usage may be restricted until you're within your new plan's limits or decide to upgrade again.":
    "Non. Vos données restent stockées en sécurité. Si votre nouvelle offre a des limites plus basses, certaines fonctions ou usages peuvent être restreints jusqu'à ce que vous respectiez les nouvelles limites ou repassiez à une offre supérieure.",
  "What happens if I reach my monthly email limit?":
    "Que se passe-t-il si j'atteins ma limite mensuelle d'e-mails ?",
  "Once you've reached your monthly email allowance, your Copilots will pause sending new emails until your limit resets or you upgrade to a higher plan. Your data, settings, and Copilots remain unchanged.":
    "Une fois votre quota mensuel atteint, vos copilots n'envoient plus de nouveaux e-mails jusqu'au renouvellement de votre limite ou à un passage à une offre supérieure. Vos données, réglages et copilots restent inchangés.",
  "How do refunds work?": "Comment fonctionnent les remboursements ?",
  "We generally don't offer refunds for subscription payments. However, if you've experienced a billing issue or believe you've been charged incorrectly, please contact us and we'll review your case fairly.":
    "En général, nous ne remboursons pas les paiements d'abonnement. Si vous avez rencontré un problème de facturation ou pensez avoir été débité à tort, contactez-nous et nous examinerons votre cas équitablement.",
  "Is my payment information secure?":
    "Mes informations de paiement sont-elles sécurisées ?",
  "Yes. All payments are processed securely through our trusted payment provider. Emailcopilot never stores your full payment card details.":
    "Oui. Tous les paiements sont traités en toute sécurité par notre prestataire de paiement de confiance. Emailcopilot ne stocke jamais vos données de carte complètes.",
  "How do I contact billing support?":
    "Comment contacter le support facturation ?",
  "If you have any questions about your subscription, invoices, payments, or billing, our team is here to help.":
    "Pour toute question sur votre abonnement, vos factures, vos paiements ou la facturation, notre équipe est là pour vous aider.",
  // New copilot wizard + limit dialogs
  "{provider} connected successfully": "{provider} est connecté",
  "Failed to load copilot. Please try again.":
    "Impossible de charger le copilot. Veuillez réessayer.",
  "Copy of {name}": "Copie de {name}",
  "Edit Copilot": "Modifier le copilot",
  "Duplicate Copilot": "Dupliquer le copilot",
  "Changes saved — the copilot stays paused until you re-launch it.":
    "Modifications enregistrées — le copilot reste en pause jusqu'à ce que vous le relanciez.",
  "Draft saved — you can launch anytime.":
    "Brouillon enregistré — vous pouvez lancer à tout moment.",
  "Failed to save draft. Please try again.":
    "Impossible d'enregistrer le brouillon. Veuillez réessayer.",
  "Copilot launch accepted.": "Lancement du copilot accepté.",
  "Failed to launch copilot. Please try again.":
    "Impossible de lancer le copilot. Veuillez réessayer.",
  "Your monthly email allowance is used up. Upgrade your plan to re-launch this copilot.":
    "Votre quota mensuel d'e-mails est épuisé. Passez à un abonnement supérieur pour relancer ce copilot.",
  "Copilot re-launched.": "Copilot relancé.",
  "Loading copilot...": "Chargement du copilot...",
  "Build your outbound copilot in 6 simple steps.":
    "Créez votre copilot de prospection en 6 étapes simples.",
  "Discard & exit": "Abandonner et quitter",
  "Editing pauses this copilot until you launch it again.":
    "La modification met ce copilot en pause jusqu'à ce que vous le relanciez.",
  "No flight schedules available yet — use the form above to create one.":
    "Aucun flight schedule pour l'instant — utilisez le formulaire ci-dessus pour en créer un.",
  "Monday - Friday": "Lundi - vendredi",
  "Weekend only": "Week-end uniquement",
  "Every day": "Tous les jours",
  Unlimited: "Illimité",
  "Schedule Summary": "Résumé du planning",
  "Here's how your copilot will send.": "Voici comment votre copilot enverra.",
  "Daily send limit": "Limite d'envoi quotidienne",
  "{n} emails per day": "{n} e-mails par jour",
  "Unlimited emails": "E-mails illimités",
  "Active days": "Jours actifs",
  "Sending hours": "Heures d'envoi",
  "Est. monthly volume": "Volume mensuel estimé",
  "{volume} emails": "{volume} e-mails",
  "Based on {n} active days/month": "Sur la base de {n} jours actifs/mois",
  "These settings help maximize deliverability and keep your account safe.":
    "Ces paramètres aident à maximiser la délivrabilité et à protéger votre compte.",
  "Changes saved as a new schedule — the original schedule was not changed.":
    "Modifications enregistrées comme nouveau planning — le planning d'origine n'a pas été modifié.",
  "Flight schedule created and linked.": "Flight schedule créé et associé.",
  "Failed to create flight schedule. Please try again.":
    "Impossible de créer le flight schedule. Veuillez réessayer.",
  "Configure Flight Schedule": "Configurer le Flight Schedule",
  "Choose when and how your copilot sends emails.":
    "Choisissez quand et comment votre copilot envoie des e-mails.",
  "Schedule Name (if creating new)": "Nom du planning (si nouveau)",
  "e.g. My Custom Schedule": "ex. Mon planning personnalisé",
  "Recommended: 20-50 per day for best deliverability":
    "Recommandé : 20-50 par jour pour une meilleure délivrabilité",
  "Choose which days your copilot is allowed to send emails.":
    "Choisissez les jours où votre copilot peut envoyer des e-mails.",
  "(your timezone)": "(votre fuseau horaire)",
  "Set the daily time window when your copilot can send emails.":
    "Définissez la plage horaire quotidienne pendant laquelle votre copilot peut envoyer des e-mails.",
  "Default Timezone": "Fuseau horaire par défaut",
  "Custom schedule — a new schedule will be created and linked when you continue.":
    "Planning personnalisé — un nouveau planning sera créé et associé lorsque vous continuerez.",
  "A new schedule named “{name}” will be created and linked. The original schedule stays unchanged.":
    "Un nouveau planning nommé « {name} » sera créé et associé. Le planning d'origine reste inchangé.",
  "Modified from “{name}” — your changes will be saved as a new schedule. The original schedule stays unchanged.":
    "Modifié à partir de « {name} » — vos modifications seront enregistrées comme nouveau planning. Le planning d'origine reste inchangé.",
  "Using saved schedule: {name} — nothing will be changed when you continue.":
    "Planning enregistré utilisé : {name} — rien ne sera modifié lorsque vous continuerez.",
  "Your Flight Schedules": "Vos flight schedules",
  "Using: {name}": "Utilisé : {name}",
  "Template summary": "Résumé du modèle",
  "1-step sequence": "Séquence en 1 étape",
  "Failed to save template. Please try again.":
    "Impossible d'enregistrer le modèle. Veuillez réessayer.",
  "Select an email account before sending a test email.":
    "Sélectionnez un compte e-mail avant d'envoyer un e-mail de test.",
  "Create your email template": "Créez votre modèle d'e-mail",
  "Write the email your copilot will send to your target audience.":
    "Rédigez l'e-mail que votre copilot enverra à votre audience cible.",
  "Send test email": "Envoyer un e-mail de test",
  "Step 1 - Initial Email": "Étape 1 - E-mail initial",
  "This is the first email your leads will receive.":
    "C'est le premier e-mail que vos prospects recevront.",
  "Your Templates": "Vos modèles",
  "Loading all leads to filter by status…": "Chargement de tous les leads pour filtrer par statut…",
  "No leads with status \"{status}\".": "Aucun lead avec le statut « {status} ».",
  "Show all": "Tout afficher",
  "Saved flight schedules": "Flight Schedules enregistrés",
  "Search by name…": "Rechercher par nom…",
  "When you save": "À l'enregistrement",
  "Update this template": "Mettre à jour ce modèle",
  "Changes also apply to other copilots that use it.": "Les modifications s'appliquent aussi aux autres copilots qui l'utilisent.",
  "Save as a new template": "Enregistrer comme nouveau modèle",
  "The saved template stays as it is.": "Le modèle enregistré reste inchangé.",
  "Saved as a new template: {name}": "Enregistré comme nouveau modèle : {name}",
  "Saved target audiences": "Audiences cibles enregistrées",
  "Saved templates": "Modèles enregistrés",
  "Selected:": "Sélectionné :",
  "Search by name, country or city…": "Rechercher par nom, pays ou ville…",
  "Search by name or subject…": "Rechercher par nom ou objet…",
  "No matches for \"{query}\"": "Aucun résultat pour « {query} »",
  "Fetching templates...": "Récupération des modèles...",
  "No templates yet": "Aucun modèle pour l'instant",
  "Once you save a template it will appear here, ready to use.":
    "Dès que vous enregistrez un modèle, il apparaît ici, prêt à l'emploi.",
  Subj: "Objet",
  "Use this template": "Utiliser ce modèle",
  "Copilot Summary": "Résumé du copilot",
  "Here’s a summary of your copilot.": "Voici un résumé de votre copilot.",
  "Copilot Name": "Nom du copilot",
  "Private Jet Operators": "Opérateurs de jets privés",
  "Book more appointments and generate qualified leads":
    "Obtenir plus de rendez-vous et générer des prospects qualifiés",
  Goal: "Objectif",
  "You can edit all settings later at any time.":
    "Vous pourrez modifier tous les paramètres plus tard, à tout moment.",
  "Paused while editing": "En pause pendant la modification",
  "Draft saved": "Brouillon enregistré",
  "Your changes are saved. Re-launch to start sending again.":
    "Vos modifications sont enregistrées. Relancez pour reprendre les envois.",
  "Your progress is saved. Come back anytime to finish.":
    "Votre progression est enregistrée. Revenez quand vous voulez pour terminer.",
  "Failed to save copilot. Please try again.":
    "Impossible d'enregistrer le copilot. Veuillez réessayer.",
  "Setup Your Copilot": "Configurez votre copilot",
  "Give your Copilot a name and describe its purpose.":
    "Donnez un nom à votre copilot et décrivez son objectif.",
  "Internal name to identify your copilot.":
    "Nom interne pour identifier votre copilot.",
  "e.g. Private Jet Operators": "ex. Opérateurs de jets privés",
  "Describe what this copilot does and who it’s for.":
    "Décrivez ce que fait ce copilot et à qui il s'adresse.",
  "e.g. Reach out to private jet operators in Amsterdam and introduce our services":
    "ex. Contacter des opérateurs de jets privés à Amsterdam et présenter nos services",
  "What is the main goal of this copilot?":
    "Quel est l'objectif principal de ce copilot ?",
  "e.g. Book more appointments and generate qualified leads":
    "ex. Obtenir plus de rendez-vous et générer des prospects qualifiés",
  None: "Aucun",
  "Copilot name": "Nom du copilot",
  "Not set yet": "Pas encore défini",
  "N/A": "N/D",
  "Email Template": "Modèle d'e-mail",
  "Ready to re-launch": "Prêt à être relancé",
  "Ready to take-off": "Prêt pour le take-off",
  "Incomplete — finish setup": "Incomplet — terminez la configuration",
  "Monday - Sunday": "Lundi - dimanche",
  All: "Toutes",
  "{count} companies": "{count} entreprises",
  "After first run": "Après la première exécution",
  "Review your copilot": "Vérifiez votre copilot",
  "Everything looks good! Review your settings before launching.":
    "Tout semble correct ! Vérifiez vos paramètres avant le lancement.",
  "Review your settings and finish the open steps before launching.":
    "Vérifiez vos paramètres et terminez les étapes restantes avant le lancement.",
  "Not specified": "Non renseigné",
  "Sending as": "Envoi en tant que",
  Location: "Localisation",
  "Est. audience size": "Taille estimée",
  Sequence: "Séquence",
  "Total touches": "Contacts",
  "You're ready to take off!": "Vous êtes prêt pour le take-off !",
  "Almost ready to take off": "Presque prêt pour le take-off",
  "You are ready to fly": "Vous êtes prêt à décoller",
  "Finish setup to fly": "Terminez la configuration pour décoller",
  "{done} of {total} steps complete": "{done} étapes sur {total} terminées",
  Back: "Retour",
  "Save, keep paused": "Enregistrer, laisser en pause",
  "Save as Draft": "Enregistrer comme brouillon",
  "Re-launching...": "Relance...",
  "Re-launch Copilot": "Relancer le copilot",
  "Launch Copilot": "Lancer le copilot",
  "Loading copilot data…": "Chargement des données du copilot…",
  "Complete all steps before launching":
    "Terminez toutes les étapes avant le lancement",
  "Test email request accepted": "Demande d'e-mail de test acceptée",
  "your connected inbox": "votre boîte de réception connectée",
  "Not now": "Pas maintenant",
  "Re-launch copilot": "Relancer le copilot",
  "Launch copilot": "Lancer le copilot",
  "Re-launch without testing?": "Relancer sans tester ?",
  "Launch without testing?": "Lancer sans tester ?",
  Close: "Fermer",
  "your target audience": "votre audience cible",
  "your email account": "votre compte e-mail",
  "A test takes about a minute and reaches nobody but you. Test emails don't count toward your monthly limit.":
    "Un test prend environ une minute et n'atteint que vous. Les e-mails de test ne comptent pas dans votre limite mensuelle.",
  "Re-launch anyway": "Relancer quand même",
  "Launch anyway": "Lancer quand même",
  "Send a test first": "Envoyer d'abord un test",
  "Check {inbox} and make sure everything looks right. When you're happy with it, re-launch your copilot.":
    "Vérifiez {inbox} et assurez-vous que tout est correct. Quand tout vous convient, relancez votre copilot.",
  "Check {inbox} and make sure everything looks right. When you're happy with it, launch your copilot.":
    "Vérifiez {inbox} et assurez-vous que tout est correct. Quand tout vous convient, lancez votre copilot.",
  "This copilot will start emailing {audience} again from {sender}. You haven't read the email yourself yet.":
    "Ce copilot va recommencer à écrire à {audience} depuis {sender}. Vous n'avez pas encore lu l'e-mail vous-même.",
  "This copilot will start emailing {audience} from {sender}. You haven't read the email yourself yet.":
    "Ce copilot va commencer à écrire à {audience} depuis {sender}. Vous n'avez pas encore lu l'e-mail vous-même.",
  "Target Audience created successfully": "Audience cible créée",
  "Failed to create target audience": "Impossible de créer l'audience cible",
  "Type and press Enter to add industries…":
    "Saisissez puis appuyez sur Entrée pour ajouter des secteurs…",
  "Search countries…": "Rechercher des pays…",
  "Select a country first…": "Sélectionnez d'abord un pays…",
  "Search cities…": "Rechercher des villes…",
  "Your Target Audience": "Votre audience cible",
  "Loading target audiences...": "Chargement des audiences cibles...",
  "No saved target audiences yet.":
    "Aucune audience cible enregistrée pour l'instant.",
  "Target Profile Summary": "Résumé de l'audience cible",
  "This is who your copilot will reach.":
    "Voici qui votre copilot va contacter.",
  "None selected": "Aucune sélection",
  Cities: "Villes",
  companies: "entreprises",
  "Calculated after the first run": "Calculée après la première exécution",
  "Are you sure you want to delete this account?":
    "Voulez-vous vraiment supprimer ce compte ?",
  "Why connect my email account?": "Pourquoi connecter mon compte e-mail ?",
  "1. Connect securely": "1. Connexion sécurisée",
  "Your account is securely connected via OAuth, so we never see or store your password.":
    "Votre compte est connecté de façon sécurisée via OAuth : nous ne voyons ni ne stockons jamais votre mot de passe.",
  "2. Send from your own email address":
    "2. Envoyez depuis votre propre adresse e-mail",
  "This helps recipients recognize and trust the sender.":
    "Les destinataires reconnaissent ainsi l'expéditeur et lui font confiance.",
  "3. Built for deliverability": "3. Conçu pour la délivrabilité",
  "Gradual warmup and daily limits to protect your sender reputation.":
    "Montée en charge progressive et limites quotidiennes pour protéger votre réputation d'expéditeur.",
  "4. Replies stay in your inbox": "4. Les réponses restent dans votre boîte",
  "Replies go straight to your own inbox, so you can continue the conversation as usual.":
    "Les réponses arrivent directement dans votre boîte de réception pour poursuivre la conversation comme d'habitude.",
  "Step {n} of {total}": "Étape {n} sur {total}",
  "Step {n}": "Étape {n}",
  "Save & Continue": "Enregistrer et continuer",
  "Search timezone...": "Rechercher un fuseau horaire...",
  "No timezone found.": "Aucun fuseau horaire trouvé.",
  "Feedback submission is not implemented yet.":
    "L'envoi de commentaires n'est pas encore disponible.",
  "We couldn’t send your feedback. Please try again.":
    "Nous n'avons pas pu envoyer vos commentaires. Veuillez réessayer.",
  "Thanks for your feedback": "Merci pour vos commentaires",
  "Your feedback helps us improve copilot setup.":
    "Vos commentaires nous aident à améliorer la configuration des copilots.",
  Done: "Terminé",
  "How easy was it to set up your copilot?":
    "Était-il facile de configurer votre copilot ?",
  "Tell us what worked and what we can improve.":
    "Dites-nous ce qui a bien fonctionné et ce que nous pouvons améliorer.",
  "Sending…": "Envoi…",
  "Send feedback": "Envoyer",
  "Closing…": "Fermeture…",
  "Saving reminder…": "Enregistrement du rappel…",
  "Your rating": "Votre note",
  "(required)": "(obligatoire)",
  "{value} out of 5": "{value} sur 5",
  "Very difficult": "Très difficile",
  "Very easy": "Très facile",
  Comment: "Commentaire",
  "(optional)": "(facultatif)",
  "What could we make easier?": "Que pourrions-nous simplifier ?",
  "All days": "Tous les jours",
  Weekdays: "Jours ouvrés",
  "{n} / day": "{n} / jour",
  "From {start} to {end}": "De {start} à {end}",
  "Default timezone": "Fuseau horaire par défaut",
  current: "actuel",
  "Copilot limit reached": "Limite de copilots atteinte",
  "You are already on our highest plan. Contact support if you need more copilots.":
    "Vous avez déjà notre abonnement le plus élevé. Contactez le support si vous avez besoin de plus de copilots.",
  "Your {plan} plan includes {max} copilot and you are using it. Delete it to free a slot, or upgrade to add more.":
    "Votre abonnement {plan} comprend {max} copilot et vous l'utilisez déjà. Supprimez-le pour libérer une place, ou passez à un abonnement supérieur pour en ajouter.",
  "Your {plan} plan includes {max} copilots and you are using all {max}. Delete one of your copilots to free a slot, or upgrade to add more.":
    "Votre abonnement {plan} comprend {max} copilots et vous les utilisez tous. Supprimez un copilot pour libérer une place, ou passez à un abonnement supérieur pour en ajouter.",
  "Your {plan} plan includes {max} copilot and you are using it. Delete it to free a slot.":
    "Votre abonnement {plan} comprend {max} copilot et vous l'utilisez déjà. Supprimez-le pour libérer une place.",
  "Your {plan} plan includes {max} copilots and you are using all {max}. Delete one of your copilots to free a slot.":
    "Votre abonnement {plan} comprend {max} copilots et vous les utilisez tous. Supprimez un copilot pour libérer une place.",
  "Monthly email allowance reached ({used} of {max} used). Your copilots pause sending until the allowance renews on {date}.":
    "Quota mensuel d'e-mails atteint ({used} sur {max} utilisés). Vos copilots suspendent les envois jusqu'au renouvellement le {date}.",
  "Monthly email allowance reached ({used} of {max} used). Your copilots pause sending until the allowance renews.":
    "Quota mensuel d'e-mails atteint ({used} sur {max} utilisés). Vos copilots suspendent les envois jusqu'au renouvellement.",
  "You have used {used} of {max} emails this month. {remaining} left before your copilots pause.":
    "Vous avez utilisé {used} e-mails sur {max} ce mois-ci. Plus que {remaining} avant que vos copilots ne s'arrêtent.",
  Upgrade: "Passer au supérieur",
  "View plan": "Voir l'abonnement",
  Dismiss: "Ignorer",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. Upgrade for a higher monthly allowance, or wait until {date} when your allowance renews.":
    "Votre abonnement {plan} comprend {max} e-mails par mois et vous les avez tous utilisés ({used}). Passez à un abonnement supérieur pour un quota plus élevé, ou attendez le {date}, date de renouvellement.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. Upgrade for a higher monthly allowance, or wait until your allowance renews.":
    "Votre abonnement {plan} comprend {max} e-mails par mois et vous les avez tous utilisés ({used}). Passez à un abonnement supérieur pour un quota plus élevé, ou attendez le renouvellement.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. You are on our highest plan, so sending resumes when your allowance renews on {date}.":
    "Votre abonnement {plan} comprend {max} e-mails par mois et vous les avez tous utilisés ({used}). Vous avez notre abonnement le plus élevé : les envois reprendront au renouvellement, le {date}.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. You are on our highest plan, so sending resumes when your allowance renews.":
    "Votre abonnement {plan} comprend {max} e-mails par mois et vous les avez tous utilisés ({used}). Vous avez notre abonnement le plus élevé : les envois reprendront au renouvellement.",
  "Monthly email allowance reached": "Quota mensuel d'e-mails atteint",
  "You are already on our highest plan. Your allowance renews automatically next month.":
    "Vous avez déjà notre abonnement le plus élevé. Votre quota se renouvelle automatiquement le mois prochain.",
  "Yearly (save 20%)": "Annuel (20 % d'économie)",
  "Maybe later": "Plus tard",
  "Go to Billing": "Aller à la facturation",
  "Got it": "Compris",
  "The sending schedule is unavailable. Please check its settings.":
    "Le planning d'envoi est indisponible. Veuillez vérifier ses paramètres.",
  "Select at least one valid active day before sending a test email.":
    "Sélectionnez au moins un jour actif valide avant d'envoyer un e-mail de test.",
  "Select a valid schedule timezone before sending a test email.":
    "Sélectionnez un fuseau horaire valide pour le planning avant d'envoyer un e-mail de test.",
  "Please check the schedule's sending hours settings before sending a test email.":
    "Veuillez vérifier les heures d'envoi du planning avant d'envoyer un e-mail de test.",
  "Choose valid, different start and end times before sending a test email.":
    "Choisissez des heures de début et de fin valides et différentes avant d'envoyer un e-mail de test.",
  "Test emails are only allowed from {start} to {end} ({timezone}) on active days.":
    "Les e-mails de test ne sont autorisés que de {start} à {end} ({timezone}) les jours actifs.",
  "We couldn’t save your reminder. Please try again.":
    "Nous n'avons pas pu enregistrer votre rappel. Veuillez réessayer.",
  // New copilot wizard: step labels, audience size labels, variable hints
  "Configure your copilot": "Configurez votre copilot",
  "Choose who's sending": "Choisissez l'expéditeur",
  "Choose who to reach": "Choisissez qui contacter",
  "Create your message": "Créez votre message",
  "Choose when to send": "Choisissez quand envoyer",
  "Review and launch": "Vérifier et lancer",
  Massive: "Très grande",
  Large: "Grande",
  Healthy: "Saine",
  Moderate: "Moyenne",
  Limited: "Limitée",
  "The recipient's company name": "Le nom de l'entreprise du destinataire",
  "The recipient's email address": "L'adresse e-mail du destinataire",
  "The recipient's website": "Le site web du destinataire",
  "The recipient's phone number": "Le numéro de téléphone du destinataire",
  "Your name as the sender": "Votre nom en tant qu'expéditeur",
  // Billing UX updates and auth guard
  "Could not retry payment. Try again.":
    "Impossible de relancer le paiement. Réessayez.",
  "Payment failed. You have not been charged. Your plan is not active yet. Retry the payment below to finish setting it up.":
    "Le paiement a échoué. Vous n'avez pas été débité. Votre formule n'est pas encore active. Relancez le paiement ci-dessous pour finaliser la configuration.",
  "We have not received payment yet. No charge has been made. Refresh to check the latest status.":
    "Nous n'avons pas encore reçu le paiement. Aucun débit n'a été effectué. Actualisez pour vérifier le dernier statut.",
  "Refresh status": "Actualiser le statut",
  "An active plan is required to use the dashboard. Choose a plan below to get started.":
    "Un abonnement actif est requis pour utiliser le tableau de bord. Choisissez une formule ci-dessous pour commencer.",
  "Payment summary": "Récapitulatif du paiement",
  "Payment failed": "Échec du paiement",
  "Awaiting payment": "En attente de paiement",
  "Amount charged": "Montant débité",
  "View your payment attempts and past invoices. Pending or failed entries are not charges.":
    "Consultez vos tentatives de paiement et vos factures passées. Les entrées en attente ou échouées ne sont pas des débits.",
  "Starting checkout": "Ouverture du paiement",
  "Retry payment": "Réessayer le paiement",
  "Continue to checkout": "Continuer vers le paiement",
  "Review your plan": "Vérifiez votre formule",
  "Your plan and billing interval are ready. Continue to checkout when you are ready.":
    "Votre formule et votre période de facturation sont prêtes. Passez au paiement lorsque vous êtes prêt.",
  "Save up to {percent}%": "Économisez jusqu'à {percent}%",
  "Yearly (save up to {percent}%)": "Annuel (économisez jusqu'à {percent}%)",
  Yearly: "Annuel",
  "Payment pending": "Paiement en attente",
  "This plan is not active yet and you have not been charged. Retry the payment to activate it.":
    "Cette formule n'est pas encore active et vous n'avez pas été débité. Réessayez le paiement pour l'activer.",
  "We have not received payment yet. Your plan stays inactive until the payment is confirmed.":
    "Nous n'avons pas encore reçu le paiement. Votre formule reste inactive jusqu'à confirmation du paiement.",
  "Included after payment": "Inclus après paiement",
  "Choose another plan": "Choisir une autre formule",
  "We couldn't check your subscription. Please try again.":
    "Nous n'avons pas pu vérifier votre abonnement. Veuillez réessayer.",
  "Retrying…": "Nouvelle tentative…",
  "Try again": "Réessayer",
  "Couldn't load your plan": "Impossible de charger votre formule",
};

const es: Messages = {
  Overview: "Resumen",
  Setup: "Configuración",
  "Email Accounts": "Cuentas de correo",
  "Target Audiences": "Públicos objetivo",
  "Email Templates": "Plantillas de correo",
  Billing: "Facturación",
  "emails used": "correos usados",
  "Limit reached": "Límite alcanzado",
  "Manage Plan": "Gestionar plan",
  Profile: "Perfil",
  Language: "Idioma",
  "Sign Out": "Cerrar sesión",
  "Welcome back!👋": "¡Bienvenido de nuevo!👋",
  "Here's what's happening with your outreach today":
    "Esto es lo que está pasando hoy con tu prospección",
  "Create New Copilot": "Crear copilot",
  "Manage your automated outreach campaigns.":
    "Gestiona tus campañas de prospección automatizadas.",
  "Recipients who have been emailed by your copilots.":
    "Destinatarios a los que han escrito tus copilots.",
  "Select Copilot": "Seleccionar copilot",
  "Manage the email accounts used for outreach.":
    "Gestiona las cuentas de correo que usas para la prospección.",
  "Add Email Account": "Añadir cuenta de correo",
  "Target Audience": "Público objetivo",
  "Define who you want to reach with your copilot.":
    "Define a quién quieres llegar con tu copilot.",
  "Create New Target Audience": "Crear público objetivo",
  "Create and manage reusable email templates for your campaigns.":
    "Crea y gestiona plantillas de correo reutilizables para tus campañas.",
  "Create New Email Template": "Crear plantilla de correo",
  "Control when your campaigns send emails.":
    "Controla cuándo envían correos tus campañas.",
  "Create New Flight Schedule": "Crear flight schedule",
  "Manage your subscription, payment method and invoices.":
    "Gestiona tu suscripción, método de pago y facturas.",
  "Billing FAQ": "Preguntas frecuentes",
  Add: "Añadir",
  Settings: "Ajustes",
  "Manage your account preferences.": "Gestiona las preferencias de tu cuenta.",
  Security: "Seguridad",
  "Profile Information": "Información del perfil",
  "First Name": "Nombre",
  "Last Name": "Apellidos",
  "Email Address": "Correo electrónico",
  Timezone: "Zona horaria",
  "The language of the app. Your email templates stay in the language you write them in.":
    "El idioma de la aplicación. Tus plantillas de correo se quedan en el idioma en que las escribes.",
  "Save Changes": "Guardar cambios",
  "Saving...": "Guardando...",
  "Saved!": "¡Guardado!",
  "Change Password": "Cambiar contraseña",
  "Current Password": "Contraseña actual",
  "New Password": "Nueva contraseña",
  "Confirm New Password": "Confirmar nueva contraseña",
  "Update Password": "Actualizar contraseña",
  "Updating...": "Actualizando...",
  "Danger Zone": "Zona de peligro",
  "Permanently delete your account and all associated data. This action cannot be undone.":
    "Elimina tu cuenta y todos los datos asociados de forma permanente. Esta acción no se puede deshacer.",
  "Delete Account": "Eliminar cuenta",
  // Copilots page
  "1 copilot archived.": "1 copilot archivado.",
  "{count} copilots archived.": "{count} copilots archivados.",
  "1 copilot could not be archived. Please try again.":
    "No se pudo archivar 1 copilot. Inténtalo de nuevo.",
  "{count} copilots could not be archived. Please try again.":
    "No se pudieron archivar {count} copilots. Inténtalo de nuevo.",
  "Loading...": "Cargando...",
  "No copilots yet": "Aún no hay copilots",
  "No copilots yet.": "Aún no hay copilots.",
  "Build your first copilot to start sending personalized emails at scale.":
    "Crea tu primer copilot para enviar correos personalizados a gran escala.",
  "No copilots match your filter.": "Ningún copilot coincide con tu filtro.",
  "Archive 1 copilot? It stops sending.":
    "¿Archivar 1 copilot? Dejará de enviar.",
  "Archive {count} copilots? They stop sending.":
    "¿Archivar {count} copilots? Dejarán de enviar.",
  Cancel: "Cancelar",
  Archive: "Archivar",
  "Archiving...": "Archivando...",
  "{count} selected": "{count} seleccionados",
  "Workflow status": "Estado del flujo",
  Sent: "Enviados",
  Status: "Estado",
  Actions: "Acciones",
  "Select all copilots on this page":
    "Seleccionar todos los copilots de esta página",
  "Already archived": "Ya archivado",
  "Email Account": "Cuenta de correo",
  Account: "Cuenta",
  Audience: "Audiencia",
  Template: "Plantilla",
  Schedule: "Horario",
  Configured: "Configurado",
  Incomplete: "Incompleto",
  Selected: "Seleccionado",
  "Not selected": "No seleccionado",
  Pending: "Pendiente",
  Draft: "Borrador",
  "In Flight": "En vuelo",
  Completed: "Completado",
  Scheduled: "Programado",
  Paused: "En pausa",
  Archived: "Archivado",
  "All status": "Todos los estados",
  "Search copilots...": "Buscar copilots...",
  "Last sent": "Último envío",
  "Not yet": "Aún no",
  "No email account": "Sin cuenta de correo",
  "No flight schedule": "Sin flight schedule",
  "Continue setup": "Continuar configuración",
  "View in Departure": "Ver en Departure",
  Resume: "Reanudar",
  "Copilot actions": "Acciones del copilot",
  "Copilot resumed successfully.": "Copilot reanudado.",
  "Error resuming copilot. Please try again.":
    "Error al reanudar el copilot. Inténtalo de nuevo.",
  "Add an email account and an email template before sending a test email":
    "Añade una cuenta de correo y una plantilla antes de enviar un correo de prueba",
  "Add an email account before sending a test email":
    "Añade una cuenta de correo antes de enviar un correo de prueba",
  "Add an email template before sending a test email":
    "Añade una plantilla de correo antes de enviar un correo de prueba",
  "Send a test email to your connected account":
    "Envía un correo de prueba a tu cuenta conectada",
  "Test email request accepted. Check your connected inbox.":
    "Correo de prueba solicitado. Revisa tu bandeja de entrada conectada.",
  "Failed to send test email. Please try again.":
    "No se pudo enviar el correo de prueba. Inténtalo de nuevo.",
  "Failed to update status.": "No se pudo actualizar el estado.",
  "Copilot launch request accepted.": "Lanzamiento del copilot solicitado.",
  "Failed to launch. Please try again.":
    "No se pudo lanzar. Inténtalo de nuevo.",
  "Archive this copilot?": "¿Archivar este copilot?",
  "Failed to archive.": "No se pudo archivar.",
  "Permanently delete this copilot? This cannot be undone.":
    "¿Eliminar este copilot de forma permanente? No se puede deshacer.",
  "Failed to delete.": "No se pudo eliminar.",
  'Duplicate "{name}"? This will create a new draft copy.':
    '¿Duplicar "{name}"? Se creará una nueva copia en borrador.',
  "Copilot duplicated.": "Copilot duplicado.",
  "Failed to duplicate.": "No se pudo duplicar.",
  Edit: "Editar",
  Duplicate: "Duplicar",
  "Send Test Email": "Enviar correo de prueba",
  "Sending...": "Enviando...",
  "Complete all setup steps before launching":
    "Completa todos los pasos antes de lanzar",
  Launch: "Lanzar",
  "Launching...": "Lanzando...",
  Pause: "Pausar",
  "Complete all setup steps before resuming":
    "Completa todos los pasos antes de reanudar",
  Delete: "Eliminar",
  // Departure page
  Address: "Dirección",
  "Clear search": "Borrar búsqueda",
  Company: "Empresa",
  "Sent at": "Enviado el",
  "Email body": "Cuerpo del correo",
  Email: "Correo",
  Exclude: "Excluir",
  Excluded: "Excluido",
  Export: "Exportar",
  "Failed to update lead.": "No se pudo actualizar el lead.",
  "Include Again": "Volver a incluir",
  "Lead actions": "Acciones del lead",
  "Lead exported as CSV.": "Lead exportado como CSV.",
  "Lead removed from the overview.": "Lead eliminado del resumen.",
  "Leads will appear here once your copilots start sending emails.":
    "Los leads aparecerán aquí cuando tus copilots empiecen a enviar correos.",
  "No copilot found.": "No se encontró ningún copilot.",
  "No description": "Sin descripción",
  "No leads yet": "Aún no hay leads",
  "No results found": "No se encontraron resultados",
  "No target audience": "Sin audiencia",
  "Page {page} of {pages} ({total} total)":
    "Página {page} de {pages} ({total} en total)",
  Phone: "Teléfono",
  "Remove {email} from your overview?": "¿Quitar {email} de tu resumen?",
  "Search company, email, website or phone...":
    "Buscar empresa, correo, web o teléfono...",
  "Select one to view activity": "Elige uno para ver la actividad",
  "Show email": "Ver correo",
  "Show less": "Mostrar menos",
  Show: "Mostrar",
  "Subject line": "Asunto",
  "Unknown Copilot": "Copilot desconocido",
  Unknown: "Desconocido",
  "Unnamed Copilot": "Copilot sin nombre",
  "View full message": "Ver mensaje completo",
  Website: "Sitio web",
  "You can email {email} again.": "Puedes volver a escribir a {email}.",
  "Your Copilots": "Tus copilots",
  "results per page": "resultados por página",
  show: "ver",
  "{count} sent": "{count} enviados",
  "{email} is excluded. You won't email them again.":
    "{email} está excluido. No le volverás a escribir.",
  'No leads match "{query}". Try a different search term.':
    'Ningún lead coincide con "{query}". Prueba con otro término.',
  New: "Nuevo",
  Replied: "Respondido",
  Failed: "Fallido",
  Skipped: "Omitido",
  // Overview
  "Emails Sent": "Correos enviados",
  Replies: "Respuestas",
  "Reply Rate": "Tasa de respuesta",
  "This metric isn't live yet": "Esta métrica aún no está disponible",
  "Coming soon": "Próximamente",
  "View all": "Ver todo",
  Performance: "Rendimiento",
  "Last 7 days": "Últimos 7 días",
  "Last 14 days": "Últimos 14 días",
  "Last 30 days": "Últimos 30 días",
  "No copilots found": "No se encontraron copilots",
  "No departure found": "Aún no hay salidas",
  "Quick start": "Inicio rápido",
  "Create a copilot": "Crear un copilot",
  "Add email account": "Añadir cuenta de correo",
  "Create a target audience": "Crear una audiencia",
  "Create an email template": "Crear una plantilla de correo",
  "Create a flight schedule": "Crear un flight schedule",
  "Your data is encrypted and secure. We only use your email account to send emails on your behalf.":
    "Tus datos están cifrados y seguros. Solo usamos tu cuenta de correo para enviar correos en tu nombre.",
  "Learn more": "Más información",
  // Overview (daily stats not live yet)
  "All time": "En total",
  "Emails sent and replies per day will appear here soon.":
    "Los correos enviados y las respuestas por día aparecerán aquí pronto.",
  // Email accounts
  "Account Name": "Nombre de la cuenta",
  "Account actions": "Acciones de la cuenta",
  "Account name and email address are required.":
    "El nombre de la cuenta y el correo son obligatorios.",
  "Add Account": "Añadir cuenta",
  "Add an email account to start sending outreach.":
    "Añade una cuenta de correo para empezar a enviar.",
  "Adding...": "Añadiendo...",
  "App Password / Token": "Contraseña de aplicación / token",
  "Are you sure you want to delete this email account?":
    "¿Seguro que quieres eliminar esta cuenta de correo?",
  "Choose the email account your copilot will use to send emails.":
    "Elige la cuenta de correo con la que tu copilot enviará correos.",
  "Connect other email provider": "Conectar otro proveedor",
  "Connect with Gmail": "Conectar con Gmail",
  "Connect with Outlook": "Conectar con Outlook",
  "Connect your Gmail account with OAuth in a few clicks.":
    "Conecta tu cuenta de Gmail con OAuth en pocos clics.",
  "Connect your Outlook account with OAuth in a few clicks.":
    "Conecta tu cuenta de Outlook con OAuth en pocos clics.",
  "Connect your email account": "Conecta tu cuenta de correo",
  "Edit Email Account": "Editar cuenta de correo",
  "Email account created successfully": "Cuenta de correo creada",
  "Email account deleted successfully": "Cuenta de correo eliminada",
  "Email account verified successfully": "Cuenta de correo verificada",
  "Emails sent per account isn't live yet":
    "Los correos enviados por cuenta aún no están disponibles",
  "Failed to add the email account.": "No se pudo añadir la cuenta de correo.",
  "Failed to connect via OAuth": "No se pudo conectar con OAuth",
  "Failed to create email account": "No se pudo crear la cuenta de correo",
  "Failed to delete email account": "No se pudo eliminar la cuenta de correo",
  "Failed to fetch email accounts":
    "No se pudieron cargar las cuentas de correo",
  "Failed to update the email account.":
    "No se pudo actualizar la cuenta de correo.",
  "Failed to verify email account": "No se pudo verificar la cuenta de correo",
  "Go Back": "Volver",
  "John Doe": "Juan Pérez",
  "No Email Accounts Found": "No se encontraron cuentas de correo",
  "No Email Accounts Yet": "Aún no hay cuentas de correo",
  "Open account actions": "Abrir acciones de la cuenta",
  "Other options": "Otras opciones",
  Port: "Puerto",
  Provider: "Proveedor",
  Recommended: "Recomendado",
  "SMTP Host": "Host SMTP",
  "Search accounts": "Buscar cuentas",
  "Search accounts...": "Buscar cuentas...",
  "Try adjusting your search or filters": "Ajusta tu búsqueda o filtros",
  "Use SMTP / IMAP to connect any email provider.":
    "Usa SMTP / IMAP para conectar cualquier proveedor.",
  "Your Email Accounts ({count})": "Tus cuentas de correo ({count})",
  "Your name / Sender Name": "Tu nombre / nombre del remitente",
  "e.g. Outreach Account": "p. ej. Cuenta de prospección",
  "Email account": "Cuenta de correo",
  "Email address": "Correo electrónico",
  Connected: "Conectada",
  "Emails sent": "Enviados",
  Verified: "Verificada",
  Unverified: "Sin verificar",
  "All statuses": "Todos los estados",
  Verify: "Verificar",
  "Email account verification failed. Please make sure the account is correctly configured.":
    "La verificación de la cuenta falló. Asegúrate de que la cuenta esté bien configurada.",
  // Email accounts (badges)
  "Easy setup": "Configuración fácil",
  // Target audiences
  "Add at least one industry.": "Añade al menos un sector.",
  "All cities within the selected countries are included.":
    "Se incluyen todas las ciudades de los países elegidos.",
  "All cities": "Todas las ciudades",
  "Audience size isn't live yet":
    "El tamaño de la audiencia aún no está disponible",
  "Choose the industry of your target companies.":
    "Elige el sector de tus empresas objetivo.",
  City: "Ciudad",
  Copy: "Copia",
  Country: "País",
  "Create a target audience for easier access later":
    "Crea una audiencia para reutilizarla fácilmente",
  "Define your Target Audience": "Define tu audiencia",
  "Delete this target audience?": "¿Eliminar esta audiencia?",
  "E.g. Tech Leads in Amsterdam": "p. ej. Líderes tech en Ámsterdam",
  "Failed to create the target audience.": "No se pudo crear la audiencia.",
  "Failed to duplicate the target audience.":
    "No se pudo duplicar la audiencia.",
  "Failed to start. Please try again.":
    "No se pudo iniciar. Inténtalo de nuevo.",
  "Failed to update the target audience.":
    "No se pudo actualizar la audiencia.",
  "Give your target a name so you can easily identify it later":
    "Ponle un nombre a tu audiencia para encontrarla fácilmente",
  "In which cities are your target companies located?":
    "¿En qué ciudades están tus empresas objetivo?",
  "In which countries are your target companies located?":
    "¿En qué países están tus empresas objetivo?",
  Industry: "Sector",
  "No Target Audiences Found": "No se encontraron audiencias",
  "Only companies in the cities you pick below.":
    "Solo empresas en las ciudades que elijas abajo.",
  "Row actions": "Acciones de la fila",
  "Search target audience...": "Buscar audiencia...",
  "Search target audiences by name": "Buscar audiencias por nombre",
  "Target Audience Name": "Nombre de la audiencia",
  "Target audience created": "Audiencia creada",
  "Target audience duplicated.": "Audiencia duplicada.",
  "Target audience name is required.":
    "El nombre de la audiencia es obligatorio.",
  "Target audience updated": "Audiencia actualizada",
  "Target specific cities": "Elegir ciudades concretas",
  "Your Target Audiences ({count})": "Tus audiencias ({count})",
  "Target Audience name": "Nombre de la audiencia",
  "Est. Audience Size": "Tamaño estimado",
  "Last updated": "Última actualización",
  "Type and press Enter to add industries...":
    "Escribe y pulsa Enter para añadir sectores...",
  "Search countries...": "Buscar países...",
  "Select a country first...": "Elige primero un país...",
  "Search cities...": "Buscar ciudades...",
  "Please select a country first": "Elige primero un país",
  "No cities found": "No se encontraron ciudades",
  "Type to search…": "Escribe para buscar…",
  "Tell your copilot who you want to reach and we’ll find the best matches.":
    "Dile a tu copilot a quién quieres llegar y encontraremos las mejores coincidencias.",
  // Email templates
  "Failed to save template.": "No se pudo guardar la plantilla.",
  "Delete this template?": "¿Eliminar esta plantilla?",
  "Your Email Templates ({count})": "Tus plantillas de correo ({count})",
  "Search email template...": "Buscar plantilla de correo...",
  "Loading templates…": "Cargando plantillas…",
  "No Active Email Templates": "No hay plantillas de correo",
  "Create an email template for easier access later":
    "Crea una plantilla de correo para reutilizarla fácilmente",
  "In use": "En uso",
  "Not in use": "Sin usar",
  "Reply rate isn't live yet": "La tasa de respuesta aún no está disponible",
  "1 step": "1 paso",
  "{count} steps": "{count} pasos",
  "Template actions": "Acciones de la plantilla",
  "Template name": "Nombre de la plantilla",
  Steps: "Pasos",
  "Used in": "Usada en",
  "Reply rate": "Tasa de respuesta",
  "The company name": "El nombre de la empresa",
  "Your name (the sender)": "Tu nombre (el remitente)",
  "The company's website": "El sitio web de la empresa",
  "Email address of the contact": "Correo del contacto",
  "Add Variables": "Añadir variables",
  "Step {n} - Initial Email": "Paso {n} - Primer correo",
  "Step {n} - Follow-up {m}": "Paso {n} - Seguimiento {m}",
  "A personalized cold email": "Un correo en frío personalizado",
  "Send {days} days after no reply": "Enviar {days} días sin respuesta",
  "Edit email template": "Editar plantilla de correo",
  "Create new email template": "Crear plantilla de correo",
  Save: "Guardar",
  "Email template name": "Nombre de la plantilla",
  "Name your template": "Ponle nombre a tu plantilla",
  "Type your subject line": "Escribe tu asunto",
  "Delete step": "Eliminar paso",
  "Add Follow-up Step": "Añadir seguimiento",
  "Click to insert at your cursor": "Haz clic para insertar en el cursor",
  "Your email templates": "Tus plantillas de correo",
  "No saved templates yet.": "Aún no hay plantillas guardadas.",
  "View more ({count} more)": "Ver más ({count} más)",
  "Save changes": "Guardar cambios",
  // Flight schedule
  Mon: "Lun",
  Tue: "Mar",
  Wed: "Mié",
  Thu: "Jue",
  Fri: "Vie",
  Sat: "Sáb",
  Sun: "Dom",
  "No active days": "Sin días activos",
  "No Flight Schedules Found": "No se encontraron flight schedules",
  "No Flight Schedules Yet": "Aún no hay flight schedules",
  "Create a flight schedule for easier access later":
    "Crea un flight schedule para reutilizarlo fácilmente",
  "Your Flight Schedules ({count})": "Tus flight schedules ({count})",
  "Search flight schedule...": "Buscar flight schedule...",
  "Search flight schedules by name": "Buscar flight schedules por nombre",
  "Loading flight schedules…": "Cargando flight schedules…",
  "Flight schedule name": "Nombre del flight schedule",
  Days: "Días",
  Time: "Hora",
  "Used by": "Usado por",
  "Flight schedule actions": "Acciones del flight schedule",
  "Failed to load flight schedules.":
    "No se pudieron cargar los flight schedules.",
  "Flight schedule updated.": "Flight schedule actualizado.",
  "Flight schedule created.": "Flight schedule creado.",
  "Are you sure you want to delete this flight schedule?":
    "¿Seguro que quieres eliminar este flight schedule?",
  "Flight schedule deleted.": "Flight schedule eliminado.",
  "Failed to delete flight schedule.":
    "No se pudo eliminar el flight schedule.",
  "Flight schedule duplicated.": "Flight schedule duplicado.",
  "Failed to duplicate flight schedule.":
    "No se pudo duplicar el flight schedule.",
  "Configure when and how emails are sent.":
    "Configura cuándo y cómo se envían los correos.",
  "Schedule Name": "Nombre del horario",
  "Daily Send Limit": "Límite diario de envío",
  "Maximum number of new emails to send per day.":
    "Número máximo de correos nuevos por día.",
  "Recommended: 20–50 per day": "Recomendado: 20–50 por día",
  "Unlimited sending": "Envío ilimitado",
  "Active Days": "Días activos",
  "Choose which days emails can be sent.":
    "Elige qué días se pueden enviar correos.",
  "Sending Hours": "Horas de envío",
  "Set the daily time window for sending emails.":
    "Define la franja horaria diaria de envío.",
  From: "Desde",
  To: "Hasta",
  "Sending hours are off": "Las horas de envío están desactivadas",
  "Timezone for sending and scheduling.":
    "Zona horaria para enviar y programar.",
  "Please select at least one active day.": "Elige al menos un día activo.",
  "Failed to save flight schedule. Please try again.":
    "No se pudo guardar el flight schedule. Inténtalo de nuevo.",
  "Edit Flight Schedule": "Editar flight schedule",
  "New Flight Schedule": "Nuevo flight schedule",
  "e.g. Mornings, Afternoons, Weekend…":
    "p. ej. Mañanas, Tardes, Fin de semana…",
  "Your copilot will send as many emails as possible within the active hours each day.":
    "Tu copilot enviará tantos correos como pueda dentro de las horas activas de cada día.",
  "Availability: {value} (selected active days only).":
    "Disponibilidad: {value} (solo los días activos elegidos).",
  "Saving…": "Guardando…",
  "Create Schedule": "Crear horario",
  // Billing
  "Could not start checkout. Try again.":
    "No se pudo iniciar el pago. Inténtalo de nuevo.",
  "Subscription canceled. You keep access until the end of your billing period.":
    "Suscripción cancelada. Mantienes el acceso hasta el final de tu periodo de facturación.",
  "Could not cancel your subscription.": "No se pudo cancelar tu suscripción.",
  "Could not update your payment method. Try again.":
    "No se pudo actualizar tu método de pago. Inténtalo de nuevo.",
  "Your payment is still being processed. This page updates as soon as it's confirmed.":
    "Tu pago aún se está procesando. Esta página se actualiza en cuanto se confirme.",
  "Cancel your subscription?": "¿Cancelar tu suscripción?",
  "You'll keep access to your current plan until the end of your billing period. Your Copilots and data stay untouched.":
    "Mantendrás el acceso a tu plan actual hasta el final de tu periodo de facturación. Tus copilots y datos no se tocan.",
  "Canceling...": "Cancelando...",
  "Cancel plan": "Cancelar plan",
  "Keep plan": "Mantener plan",
  "Billing summary": "Resumen de facturación",
  Price: "Precio",
  "Billing period": "Periodo de facturación",
  "Next billing date": "Próxima fecha de cobro",
  "Amount due": "Importe a pagar",
  Annual: "Anual",
  Monthly: "Mensual",
  "Update payment method": "Actualizar método de pago",
  "Current Plan": "Plan actual",
  "Subscription actions": "Acciones de la suscripción",
  "Email credits usage": "Uso de créditos de correo",
  "Emails used": "Correos usados",
  "{percent} % used": "{percent} % usado",
  "Monthly allowance reached. Sending resumes on {date}.":
    "Límite mensual alcanzado. Los envíos se reanudan el {date}.",
  "Monthly allowance reached. Sending resumes when your allowance renews.":
    "Límite mensual alcanzado. Los envíos se reanudan cuando se renueve tu cuota.",
  "Your plan is canceled and stays active until {date}.":
    "Tu plan está cancelado y sigue activo hasta el {date}.",
  "Card on file": "Tarjeta registrada",
  "Change plan": "Cambiar plan",
  "Plan renews on": "Se renueva el",
  "Payment method": "Método de pago",
  Update: "Actualizar",
  "/ year": "/ año",
  "/ month": "/ mes",
  "Current plan": "Plan actual",
  "Most Popular": "Más popular",
  "Choose plan": "Elegir plan",
  "Included:": "Incluye:",
  "Perfect for individuals.": "Perfecto para profesionales independientes.",
  "Perfect for growing businesses.": "Perfecto para empresas en crecimiento.",
  "For power users and teams": "Para usuarios avanzados y equipos",
  "Choose your plan": "Elige tu plan",
  "Billing interval": "Periodicidad de facturación",
  "Save {percent}%": "Ahorra {percent}%",
  "Back to billing": "Volver a facturación",
  "Cancel anytime. No long-term commitments.":
    "Cancela cuando quieras. Sin permanencia.",
  "Cancel anytime": "Cancela cuando quieras",
  "No contracts. Upgrade or downgrade anytime.":
    "Sin contratos. Cambia de plan cuando quieras.",
  "Your own email": "Tu propio correo",
  "Every email is sent from your own connected email account.":
    "Cada correo se envía desde tu propia cuenta de correo conectada.",
  "Secure & reliable": "Seguro y fiable",
  "Your data is encrypted and never shared.":
    "Tus datos están cifrados y nunca se comparten.",
  Invoices: "Facturas",
  "No invoices yet.": "Aún no hay facturas.",
  "Download invoice": "Descargar factura",
  Date: "Fecha",
  "View and download your past invoices.":
    "Consulta y descarga tus facturas anteriores.",
  Invoice: "Factura",
  Amount: "Importe",
  Download: "Descargar",
  "View all invoices": "Ver todas las facturas",
  Paid: "Pagada",
  "Need help?": "¿Necesitas ayuda?",
  "If you have any question about billing or your subscription we're here to help.":
    "Si tienes alguna pregunta sobre facturación o tu suscripción, estamos aquí para ayudarte.",
  "Find answers to common billing questions.":
    "Encuentra respuestas a preguntas frecuentes de facturación.",
  "Contact support": "Contactar con soporte",
  "Everything you need to know about payments, subscriptions and invoices.":
    "Todo lo que necesitas saber sobre pagos, suscripciones y facturas.",
  "Search billing questions...": "Buscar preguntas de facturación...",
  "Search billing questions": "Buscar preguntas de facturación",
  "No questions match your search.":
    "Ninguna pregunta coincide con tu búsqueda.",
  "We're here to help. Contact our team and we'll get back to you as soon as possible.":
    "Estamos aquí para ayudarte. Contacta con nuestro equipo y te responderemos lo antes posible.",
  "Still have questions?": "¿Aún tienes preguntas?",
  "Email us": "Escríbenos",
  "1 email account": "1 cuenta de correo",
  "3 email accounts": "3 cuentas de correo",
  "5 email accounts": "5 cuentas de correo",
  "500 emails/month": "500 correos/mes",
  "1,200 emails/month": "1.200 correos/mes",
  "3,000 emails/month": "3.000 correos/mes",
  "CSV export": "Exportación CSV",
  "Email support": "Soporte por correo",
  "Priority support": "Soporte prioritario",
  "What payment methods do you accept?": "¿Qué métodos de pago aceptáis?",
  "We currently accept all major credit and debit cards. We're always looking to expand our supported payment methods.":
    "Actualmente aceptamos las principales tarjetas de crédito y débito. Siempre buscamos ampliar los métodos de pago.",
  "Can I change my plan at any time?":
    "¿Puedo cambiar de plan en cualquier momento?",
  "Yes. You can upgrade or downgrade your plan at any time from the Billing page. Your new subscription starts immediately after payment.":
    "Sí. Puedes subir o bajar de plan en cualquier momento desde la página de Facturación. Tu nueva suscripción empieza justo después del pago.",
  "Can I cancel my subscription at any time?":
    "¿Puedo cancelar mi suscripción en cualquier momento?",
  "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your Billing settings, and your plan will remain active until the end of your current billing period.":
    "Por supuesto. No hay permanencia. Puedes cancelar en cualquier momento desde Facturación y tu plan seguirá activo hasta el final del periodo actual.",
  "When will I be charged?": "¿Cuándo se me cobrará?",
  "Your subscription renews automatically on the same day of each billing cycle. You can always view your next billing date and upcoming charge from the Billing page.":
    "Tu suscripción se renueva automáticamente el mismo día de cada ciclo. Siempre puedes ver tu próxima fecha de cobro y el importe en la página de Facturación.",
  "What happens if my payment fails?": "¿Qué pasa si falla mi pago?",
  "If a payment can't be processed, we'll automatically retry your payment and notify you by email. If payment continues to fail, your subscription may be paused until your payment method is updated.":
    "Si no se puede procesar un pago, lo reintentaremos automáticamente y te avisaremos por correo. Si sigue fallando, tu suscripción puede pausarse hasta que actualices tu método de pago.",
  "Where can I download my invoices?": "¿Dónde puedo descargar mis facturas?",
  "All of your invoices are available in the Billing History section of your Billing page. You can download them at any time for your records or accounting.":
    "Todas tus facturas están en la sección Facturas de la página de Facturación. Puedes descargarlas cuando quieras para tu contabilidad.",
  "Do you offer annual billing?": "¿Ofrecéis facturación anual?",
  "Yes. You can choose between monthly and annual billing. Annual subscriptions include a discounted rate compared to paying monthly.":
    "Sí. Puedes elegir entre facturación mensual o anual. La suscripción anual sale más barata que pagar mes a mes.",
  "Will I lose my data if I downgrade?": "¿Perderé mis datos si bajo de plan?",
  "No. Your data remains safely stored. If your new plan includes lower limits, some features or usage may be restricted until you're within your new plan's limits or decide to upgrade again.":
    "No. Tus datos siguen guardados de forma segura. Si tu nuevo plan tiene límites más bajos, algunas funciones o usos pueden quedar limitados hasta que estés dentro de los nuevos límites o vuelvas a subir de plan.",
  "What happens if I reach my monthly email limit?":
    "¿Qué pasa si alcanzo mi límite mensual de correos?",
  "Once you've reached your monthly email allowance, your Copilots will pause sending new emails until your limit resets or you upgrade to a higher plan. Your data, settings, and Copilots remain unchanged.":
    "Cuando alcances tu cuota mensual, tus copilots dejarán de enviar correos nuevos hasta que se renueve tu límite o subas de plan. Tus datos, ajustes y copilots no cambian.",
  "How do refunds work?": "¿Cómo funcionan los reembolsos?",
  "We generally don't offer refunds for subscription payments. However, if you've experienced a billing issue or believe you've been charged incorrectly, please contact us and we'll review your case fairly.":
    "Por lo general no reembolsamos pagos de suscripción. Si has tenido un problema de facturación o crees que se te ha cobrado por error, contáctanos y revisaremos tu caso de forma justa.",
  "Is my payment information secure?": "¿Están seguros mis datos de pago?",
  "Yes. All payments are processed securely through our trusted payment provider. Emailcopilot never stores your full payment card details.":
    "Sí. Todos los pagos se procesan de forma segura a través de nuestro proveedor de pagos de confianza. Emailcopilot nunca guarda los datos completos de tu tarjeta.",
  "How do I contact billing support?":
    "¿Cómo contacto con el soporte de facturación?",
  "If you have any questions about your subscription, invoices, payments, or billing, our team is here to help.":
    "Si tienes preguntas sobre tu suscripción, facturas, pagos o facturación, nuestro equipo está aquí para ayudarte.",
  // New copilot wizard + limit dialogs
  "{provider} connected successfully": "{provider} se conectó correctamente",
  "Failed to load copilot. Please try again.":
    "No se pudo cargar el copilot. Inténtalo de nuevo.",
  "Copy of {name}": "Copia de {name}",
  "Edit Copilot": "Editar copilot",
  "Duplicate Copilot": "Duplicar copilot",
  "Changes saved — the copilot stays paused until you re-launch it.":
    "Cambios guardados: el copilot sigue en pausa hasta que lo relances.",
  "Draft saved — you can launch anytime.":
    "Borrador guardado: puedes lanzarlo cuando quieras.",
  "Failed to save draft. Please try again.":
    "No se pudo guardar el borrador. Inténtalo de nuevo.",
  "Copilot launch accepted.": "Lanzamiento del copilot aceptado.",
  "Failed to launch copilot. Please try again.":
    "No se pudo lanzar el copilot. Inténtalo de nuevo.",
  "Your monthly email allowance is used up. Upgrade your plan to re-launch this copilot.":
    "Tu cupo mensual de correos se ha agotado. Mejora tu plan para relanzar este copilot.",
  "Copilot re-launched.": "Copilot relanzado.",
  "Loading copilot...": "Cargando copilot...",
  "Build your outbound copilot in 6 simple steps.":
    "Crea tu copilot de prospección en 6 sencillos pasos.",
  "Discard & exit": "Descartar y salir",
  "Editing pauses this copilot until you launch it again.":
    "Al editar, este copilot se pausa hasta que lo vuelvas a lanzar.",
  "No flight schedules available yet — use the form above to create one.":
    "Aún no hay flight schedules: usa el formulario de arriba para crear uno.",
  "Monday - Friday": "Lunes - viernes",
  "Weekend only": "Solo fines de semana",
  "Every day": "Todos los días",
  Unlimited: "Ilimitado",
  "Schedule Summary": "Resumen del horario",
  "Here's how your copilot will send.": "Así enviará tu copilot.",
  "Daily send limit": "Límite de envío diario",
  "{n} emails per day": "{n} correos al día",
  "Unlimited emails": "Correos ilimitados",
  "Active days": "Días activos",
  "Sending hours": "Horario de envío",
  "Est. monthly volume": "Volumen mensual estimado",
  "{volume} emails": "{volume} correos",
  "Based on {n} active days/month": "Según {n} días activos/mes",
  "These settings help maximize deliverability and keep your account safe.":
    "Estos ajustes ayudan a maximizar la entregabilidad y a proteger tu cuenta.",
  "Changes saved as a new schedule — the original schedule was not changed.":
    "Cambios guardados como un horario nuevo: el horario original no se modificó.",
  "Flight schedule created and linked.": "Flight schedule creado y vinculado.",
  "Failed to create flight schedule. Please try again.":
    "No se pudo crear el flight schedule. Inténtalo de nuevo.",
  "Configure Flight Schedule": "Configurar el Flight Schedule",
  "Choose when and how your copilot sends emails.":
    "Elige cuándo y cómo envía correos tu copilot.",
  "Schedule Name (if creating new)": "Nombre del horario (si es nuevo)",
  "e.g. My Custom Schedule": "p. ej. Mi horario personalizado",
  "Recommended: 20-50 per day for best deliverability":
    "Recomendado: 20-50 al día para la mejor entregabilidad",
  "Choose which days your copilot is allowed to send emails.":
    "Elige qué días puede enviar correos tu copilot.",
  "(your timezone)": "(tu zona horaria)",
  "Set the daily time window when your copilot can send emails.":
    "Define la franja horaria diaria en la que tu copilot puede enviar correos.",
  "Default Timezone": "Zona horaria predeterminada",
  "Custom schedule — a new schedule will be created and linked when you continue.":
    "Horario personalizado: al continuar se creará y vinculará un horario nuevo.",
  "A new schedule named “{name}” will be created and linked. The original schedule stays unchanged.":
    "Se creará y vinculará un horario nuevo llamado «{name}». El horario original no cambia.",
  "Modified from “{name}” — your changes will be saved as a new schedule. The original schedule stays unchanged.":
    "Modificado a partir de «{name}»: tus cambios se guardarán como un horario nuevo. El horario original no cambia.",
  "Using saved schedule: {name} — nothing will be changed when you continue.":
    "Usando el horario guardado: {name}. No se cambiará nada al continuar.",
  "Your Flight Schedules": "Tus flight schedules",
  "Using: {name}": "En uso: {name}",
  "Template summary": "Resumen de la plantilla",
  "1-step sequence": "Secuencia de 1 paso",
  "Failed to save template. Please try again.":
    "No se pudo guardar la plantilla. Inténtalo de nuevo.",
  "Select an email account before sending a test email.":
    "Selecciona una cuenta de correo antes de enviar un correo de prueba.",
  "Create your email template": "Crea tu plantilla de correo",
  "Write the email your copilot will send to your target audience.":
    "Escribe el correo que tu copilot enviará a tu público objetivo.",
  "Send test email": "Enviar correo de prueba",
  "Step 1 - Initial Email": "Paso 1 - Correo inicial",
  "This is the first email your leads will receive.":
    "Este es el primer correo que recibirán tus leads.",
  "Your Templates": "Tus plantillas",
  "Loading all leads to filter by status…": "Cargando todos los leads para filtrar por estado…",
  "No leads with status \"{status}\".": "No hay leads con el estado \"{status}\".",
  "Show all": "Mostrar todo",
  "Saved flight schedules": "Flight Schedules guardados",
  "Search by name…": "Buscar por nombre…",
  "When you save": "Al guardar",
  "Update this template": "Actualizar esta plantilla",
  "Changes also apply to other copilots that use it.": "Los cambios también se aplican a otros copilots que la usan.",
  "Save as a new template": "Guardar como nueva plantilla",
  "The saved template stays as it is.": "La plantilla guardada no cambia.",
  "Saved as a new template: {name}": "Guardada como nueva plantilla: {name}",
  "Saved target audiences": "Públicos objetivo guardados",
  "Saved templates": "Plantillas guardadas",
  "Selected:": "Seleccionado:",
  "Search by name, country or city…": "Buscar por nombre, país o ciudad…",
  "Search by name or subject…": "Buscar por nombre o asunto…",
  "No matches for \"{query}\"": "Sin resultados para \"{query}\"",
  "Fetching templates...": "Cargando plantillas...",
  "No templates yet": "Aún no hay plantillas",
  "Once you save a template it will appear here, ready to use.":
    "Cuando guardes una plantilla, aparecerá aquí lista para usar.",
  Subj: "Asunto",
  "Use this template": "Usar esta plantilla",
  "Copilot Summary": "Resumen del copilot",
  "Here’s a summary of your copilot.": "Este es un resumen de tu copilot.",
  "Copilot Name": "Nombre del copilot",
  "Private Jet Operators": "Operadores de jets privados",
  Description: "Descripción",
  "Book more appointments and generate qualified leads":
    "Conseguir más citas y generar leads cualificados",
  Goal: "Objetivo",
  "You can edit all settings later at any time.":
    "Puedes editar todos los ajustes más tarde en cualquier momento.",
  "Paused while editing": "En pausa mientras editas",
  "Draft saved": "Borrador guardado",
  "Your changes are saved. Re-launch to start sending again.":
    "Tus cambios están guardados. Relanza para volver a enviar.",
  "Your progress is saved. Come back anytime to finish.":
    "Tu progreso está guardado. Vuelve cuando quieras para terminar.",
  "Failed to save copilot. Please try again.":
    "No se pudo guardar el copilot. Inténtalo de nuevo.",
  "Setup Your Copilot": "Configura tu copilot",
  "Give your Copilot a name and describe its purpose.":
    "Dale un nombre a tu copilot y describe su propósito.",
  "Internal name to identify your copilot.":
    "Nombre interno para identificar tu copilot.",
  "e.g. Private Jet Operators": "p. ej. Operadores de jets privados",
  "Describe what this copilot does and who it’s for.":
    "Describe qué hace este copilot y para quién es.",
  "e.g. Reach out to private jet operators in Amsterdam and introduce our services":
    "p. ej. Contactar con operadores de jets privados en Ámsterdam y presentar nuestros servicios",
  "What is the main goal of this copilot?":
    "¿Cuál es el objetivo principal de este copilot?",
  "e.g. Book more appointments and generate qualified leads":
    "p. ej. Conseguir más citas y generar leads cualificados",
  None: "Ninguno",
  "Copilot name": "Nombre del copilot",
  "Not set yet": "Aún sin definir",
  "N/A": "N/D",
  "Email Template": "Plantilla de correo",
  "Ready to re-launch": "Listo para relanzar",
  "Ready to take-off": "Listo para el take-off",
  "Incomplete — finish setup": "Incompleto: termina la configuración",
  "Monday - Sunday": "Lunes - domingo",
  All: "Todas",
  "{count} companies": "{count} empresas",
  "After first run": "Tras la primera ejecución",
  "Review your copilot": "Revisa tu copilot",
  "Everything looks good! Review your settings before launching.":
    "¡Todo se ve bien! Revisa tus ajustes antes de lanzar.",
  "Review your settings and finish the open steps before launching.":
    "Revisa tus ajustes y completa los pasos pendientes antes de lanzar.",
  "Not specified": "Sin especificar",
  "Sending as": "Enviando como",
  Location: "Ubicación",
  "Est. audience size": "Tamaño estimado",
  Sequence: "Secuencia",
  "Total touches": "Contactos",
  "You're ready to take off!": "¡Todo listo para el take-off!",
  "Almost ready to take off": "Casi listo para el take-off",
  "You are ready to fly": "Estás listo para volar",
  "Finish setup to fly": "Termina la configuración para volar",
  "{done} of {total} steps complete": "{done} de {total} pasos completados",
  Back: "Atrás",
  "Save, keep paused": "Guardar y mantener en pausa",
  "Save as Draft": "Guardar como borrador",
  "Re-launching...": "Relanzando...",
  "Re-launch Copilot": "Relanzar copilot",
  "Launch Copilot": "Lanzar copilot",
  "Loading copilot data…": "Cargando datos del copilot…",
  "Complete all steps before launching":
    "Completa todos los pasos antes de lanzar",
  "Test email request accepted": "Solicitud de correo de prueba aceptada",
  "your connected inbox": "tu bandeja de entrada conectada",
  "Not now": "Ahora no",
  "Re-launch copilot": "Relanzar copilot",
  "Launch copilot": "Lanzar copilot",
  "Re-launch without testing?": "¿Relanzar sin probar?",
  "Launch without testing?": "¿Lanzar sin probar?",
  Close: "Cerrar",
  "your target audience": "tu público objetivo",
  "your email account": "tu cuenta de correo",
  "A test takes about a minute and reaches nobody but you. Test emails don't count toward your monthly limit.":
    "Una prueba tarda un minuto y solo te llega a ti. Los correos de prueba no cuentan para tu límite mensual.",
  "Re-launch anyway": "Relanzar de todos modos",
  "Launch anyway": "Lanzar de todos modos",
  "Send a test first": "Enviar primero una prueba",
  "Check {inbox} and make sure everything looks right. When you're happy with it, re-launch your copilot.":
    "Revisa {inbox} y comprueba que todo está bien. Cuando estés conforme, relanza tu copilot.",
  "Check {inbox} and make sure everything looks right. When you're happy with it, launch your copilot.":
    "Revisa {inbox} y comprueba que todo está bien. Cuando estés conforme, lanza tu copilot.",
  "This copilot will start emailing {audience} again from {sender}. You haven't read the email yourself yet.":
    "Este copilot volverá a escribir a {audience} desde {sender}. Aún no has leído el correo tú mismo.",
  "This copilot will start emailing {audience} from {sender}. You haven't read the email yourself yet.":
    "Este copilot empezará a escribir a {audience} desde {sender}. Aún no has leído el correo tú mismo.",
  "Target Audience created successfully": "Público objetivo creado",
  "Failed to create target audience": "No se pudo crear el público objetivo",
  "Type and press Enter to add industries…":
    "Escribe y pulsa Intro para añadir sectores…",
  "Search countries…": "Buscar países…",
  "Select a country first…": "Selecciona primero un país…",
  "Search cities…": "Buscar ciudades…",
  "Your Target Audience": "Tu público objetivo",
  "Loading target audiences...": "Cargando públicos objetivo...",
  "No saved target audiences yet.": "Aún no hay públicos objetivo guardados.",
  "Target Profile Summary": "Resumen del público objetivo",
  "This is who your copilot will reach.": "A ellos llegará tu copilot.",
  "None selected": "Nada seleccionado",
  Cities: "Ciudades",
  companies: "empresas",
  "Calculated after the first run": "Se calcula tras la primera ejecución",
  "Are you sure you want to delete this account?":
    "¿Seguro que quieres eliminar esta cuenta?",
  "Why connect my email account?": "¿Por qué conectar mi cuenta de correo?",
  "1. Connect securely": "1. Conexión segura",
  "Your account is securely connected via OAuth, so we never see or store your password.":
    "Tu cuenta se conecta de forma segura mediante OAuth, así que nunca vemos ni guardamos tu contraseña.",
  "2. Send from your own email address":
    "2. Envía desde tu propia dirección de correo",
  "This helps recipients recognize and trust the sender.":
    "Así los destinatarios reconocen al remitente y confían en él.",
  "3. Built for deliverability": "3. Diseñado para la entregabilidad",
  "Gradual warmup and daily limits to protect your sender reputation.":
    "Calentamiento gradual y límites diarios para proteger tu reputación como remitente.",
  "4. Replies stay in your inbox": "4. Las respuestas se quedan en tu bandeja",
  "Replies go straight to your own inbox, so you can continue the conversation as usual.":
    "Las respuestas llegan directamente a tu bandeja para que sigas la conversación como siempre.",
  "Step {n} of {total}": "Paso {n} de {total}",
  "Step {n}": "Paso {n}",
  "Save & Continue": "Guardar y continuar",
  "Search timezone...": "Buscar zona horaria...",
  "No timezone found.": "No se encontró ninguna zona horaria.",
  "Feedback submission is not implemented yet.":
    "El envío de comentarios aún no está disponible.",
  "We couldn’t send your feedback. Please try again.":
    "No pudimos enviar tus comentarios. Inténtalo de nuevo.",
  "Thanks for your feedback": "Gracias por tus comentarios",
  "Your feedback helps us improve copilot setup.":
    "Tus comentarios nos ayudan a mejorar la configuración de copilots.",
  Done: "Listo",
  "How easy was it to set up your copilot?":
    "¿Qué tan fácil fue configurar tu copilot?",
  "Tell us what worked and what we can improve.":
    "Cuéntanos qué funcionó y qué podemos mejorar.",
  "Sending…": "Enviando…",
  "Send feedback": "Enviar comentarios",
  "Closing…": "Cerrando…",
  "Saving reminder…": "Guardando recordatorio…",
  "Your rating": "Tu valoración",
  "(required)": "(obligatorio)",
  "{value} out of 5": "{value} de 5",
  "Very difficult": "Muy difícil",
  "Very easy": "Muy fácil",
  Comment: "Comentario",
  "(optional)": "(opcional)",
  "What could we make easier?": "¿Qué podríamos hacer más fácil?",
  "All days": "Todos los días",
  Weekdays: "Días laborables",
  "{n} / day": "{n} / día",
  "From {start} to {end}": "De {start} a {end}",
  "Default timezone": "Zona horaria predeterminada",
  current: "actual",
  "Copilot limit reached": "Límite de copilots alcanzado",
  "You are already on our highest plan. Contact support if you need more copilots.":
    "Ya tienes nuestro plan más alto. Contacta con soporte si necesitas más copilots.",
  "Your {plan} plan includes {max} copilot and you are using it. Delete it to free a slot, or upgrade to add more.":
    "Tu plan {plan} incluye {max} copilot y ya lo estás usando. Elimínalo para liberar un hueco o mejora tu plan para añadir más.",
  "Your {plan} plan includes {max} copilots and you are using all {max}. Delete one of your copilots to free a slot, or upgrade to add more.":
    "Tu plan {plan} incluye {max} copilots y los estás usando todos. Elimina uno para liberar un hueco o mejora tu plan para añadir más.",
  "Your {plan} plan includes {max} copilot and you are using it. Delete it to free a slot.":
    "Tu plan {plan} incluye {max} copilot y ya lo estás usando. Elimínalo para liberar un hueco.",
  "Your {plan} plan includes {max} copilots and you are using all {max}. Delete one of your copilots to free a slot.":
    "Tu plan {plan} incluye {max} copilots y los estás usando todos. Elimina uno para liberar un hueco.",
  "Monthly email allowance reached ({used} of {max} used). Your copilots pause sending until the allowance renews on {date}.":
    "Cupo mensual de correos alcanzado ({used} de {max} usados). Tus copilots pausan los envíos hasta que se renueve el {date}.",
  "Monthly email allowance reached ({used} of {max} used). Your copilots pause sending until the allowance renews.":
    "Cupo mensual de correos alcanzado ({used} de {max} usados). Tus copilots pausan los envíos hasta que se renueve.",
  "You have used {used} of {max} emails this month. {remaining} left before your copilots pause.":
    "Has usado {used} de {max} correos este mes. Quedan {remaining} antes de que tus copilots se pausen.",
  Upgrade: "Mejorar",
  "View plan": "Ver plan",
  Dismiss: "Descartar",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. Upgrade for a higher monthly allowance, or wait until {date} when your allowance renews.":
    "Tu plan {plan} incluye {max} correos al mes y ya has usado los {used}. Mejora tu plan para tener más cupo o espera al {date}, cuando se renueva.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. Upgrade for a higher monthly allowance, or wait until your allowance renews.":
    "Tu plan {plan} incluye {max} correos al mes y ya has usado los {used}. Mejora tu plan para tener más cupo o espera a que se renueve.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. You are on our highest plan, so sending resumes when your allowance renews on {date}.":
    "Tu plan {plan} incluye {max} correos al mes y ya has usado los {used}. Tienes nuestro plan más alto, así que los envíos se reanudan cuando se renueve el {date}.",
  "Your {plan} plan includes {max} emails per month and you have used all {used}. You are on our highest plan, so sending resumes when your allowance renews.":
    "Tu plan {plan} incluye {max} correos al mes y ya has usado los {used}. Tienes nuestro plan más alto, así que los envíos se reanudan cuando se renueve.",
  "Monthly email allowance reached": "Cupo mensual de correos alcanzado",
  "You are already on our highest plan. Your allowance renews automatically next month.":
    "Ya tienes nuestro plan más alto. Tu cupo se renueva automáticamente el mes que viene.",
  "Yearly (save 20%)": "Anual (ahorra un 20 %)",
  "Maybe later": "Quizás más tarde",
  "Go to Billing": "Ir a facturación",
  "Got it": "Entendido",
  "The sending schedule is unavailable. Please check its settings.":
    "El horario de envío no está disponible. Revisa su configuración.",
  "Select at least one valid active day before sending a test email.":
    "Selecciona al menos un día activo válido antes de enviar un correo de prueba.",
  "Select a valid schedule timezone before sending a test email.":
    "Selecciona una zona horaria válida para el horario antes de enviar un correo de prueba.",
  "Please check the schedule's sending hours settings before sending a test email.":
    "Revisa el horario de envío antes de enviar un correo de prueba.",
  "Choose valid, different start and end times before sending a test email.":
    "Elige horas de inicio y fin válidas y distintas antes de enviar un correo de prueba.",
  "Test emails are only allowed from {start} to {end} ({timezone}) on active days.":
    "Los correos de prueba solo se permiten de {start} a {end} ({timezone}) en días activos.",
  "We couldn’t save your reminder. Please try again.":
    "No pudimos guardar tu recordatorio. Inténtalo de nuevo.",
  // New copilot wizard: step labels, audience size labels, variable hints
  "Configure your copilot": "Configura tu copilot",
  "Choose who's sending": "Elige el remitente",
  "Choose who to reach": "Elige a quién llegar",
  "Create your message": "Crea tu mensaje",
  "Choose when to send": "Elige cuándo enviar",
  "Review and launch": "Revisar y lanzar",
  Massive: "Muy grande",
  Large: "Grande",
  Healthy: "Saludable",
  Moderate: "Moderada",
  Limited: "Limitada",
  "The recipient's company name": "El nombre de la empresa del destinatario",
  "The recipient's email address": "La dirección de correo del destinatario",
  "The recipient's website": "El sitio web del destinatario",
  "The recipient's phone number": "El número de teléfono del destinatario",
  "Your name as the sender": "Tu nombre como remitente",
  // Billing UX updates and auth guard
  "Could not retry payment. Try again.":
    "No se pudo reintentar el pago. Inténtalo de nuevo.",
  "Payment failed. You have not been charged. Your plan is not active yet. Retry the payment below to finish setting it up.":
    "El pago falló. No se te ha cobrado. Tu plan aún no está activo. Vuelve a intentar el pago abajo para finalizar la configuración.",
  "We have not received payment yet. No charge has been made. Refresh to check the latest status.":
    "Aún no hemos recibido el pago. No se ha realizado ningún cargo. Actualiza para consultar el último estado.",
  "Refresh status": "Actualizar estado",
  "An active plan is required to use the dashboard. Choose a plan below to get started.":
    "Se requiere un plan activo para usar el panel. Elige un plan abajo para empezar.",
  "Payment summary": "Resumen del pago",
  "Payment failed": "Pago fallido",
  "Awaiting payment": "Esperando pago",
  "Amount charged": "Importe cobrado",
  "View your payment attempts and past invoices. Pending or failed entries are not charges.":
    "Consulta tus intentos de pago y facturas anteriores. Las entradas pendientes o fallidas no son cargos.",
  "Starting checkout": "Iniciando pago",
  "Retry payment": "Reintentar pago",
  "Continue to checkout": "Continuar al pago",
  "Review your plan": "Revisa tu plan",
  "Your plan and billing interval are ready. Continue to checkout when you are ready.":
    "Tu plan y tu período de facturación están listos. Continúa al pago cuando estés listo.",
  "Save up to {percent}%": "Ahorra hasta un {percent}%",
  "Yearly (save up to {percent}%)": "Anual (ahorra hasta un {percent}%)",
  Yearly: "Anual",
  "Payment pending": "Pago pendiente",
  "This plan is not active yet and you have not been charged. Retry the payment to activate it.":
    "Este plan aún no está activo y no se te ha cobrado. Vuelve a intentar el pago para activarlo.",
  "We have not received payment yet. Your plan stays inactive until the payment is confirmed.":
    "Aún no hemos recibido el pago. Tu plan permanecerá inactivo hasta que se confirme el pago.",
  "Included after payment": "Incluido después del pago",
  "Choose another plan": "Elegir otro plan",
  "We couldn't check your subscription. Please try again.":
    "No pudimos comprobar tu suscripción. Inténtalo de nuevo.",
  "Retrying…": "Reintentando…",
  "Try again": "Intentar de nuevo",
  "Couldn't load your plan": "No se pudo cargar tu plan",
};

export const MESSAGES: Record<string, Messages> = { nl, de, fr, es };
