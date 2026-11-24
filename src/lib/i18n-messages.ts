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
};

export const MESSAGES: Record<string, Messages> = { nl, de, fr, es };
