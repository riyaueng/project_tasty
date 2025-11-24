# 🍳 Tasty

Eine Rezept-Webapp zum Entdecken leckerer Gerichte – entwickelt mit React, TypeScript und der TheMealDB API für Hobby-Köche und Kochbegeisterte.

<img width="1240" height="1118" alt="tasty_start" src="https://github.com/user-attachments/assets/9708a376-defa-484e-828e-2d7aa1835fc9" />

---

## 📋 Über das Projekt

Tasty ist eine übersichtliche Sammlung leckerer Gerichte und Rezepte, die als Inspiration für die nächste Mahlzeit dienen. Nutzer können Rezepte nach Anleitung nachkochen oder sich das zugehörige Kochvideo anschauen. Die Webapp richtet sich an Hobby-Köche, Kochbegeisterte und alle, die neue Gerichte entdecken möchten.

Das Projekt entstand während eines Gruppenprojekts in meiner Weiterbildung. Mit React, TypeScript und der TheMealDB API haben wir eine skalierbare Anwendung mit Favoriten-Funktion, Kategoriefilterung und Detailansichten umgesetzt. Der State wird zentral über `useReducer` und Context API verwaltet.

---

## 🛠️ Technologien

- **React** - UI-Framework mit komponentenbasierter Architektur
- **TypeScript** - Typisierte Entwicklung für robuste Code-Qualität
- **Vite** - Modernes Build-Tool mit Hot-Reload
- **Context API** - Globales State-Management mit MainProvider
- **useReducer** - Strukturierte State-Verwaltung für komplexe Logik
- **TheMealDB API** - Externe Datenquelle für Gerichte und Rezepte
- **Axios** - HTTP-Client für API-Requests
- **CSS3** - Modulares Styling
- **ESLint** - Code-Qualität und Linting

---

## ✨ Features

- ✅ **TheMealDB API-Integration** - Abruf von Kategorien, Gerichten und Rezeptdetails
- ✅ **Kategoriefilterung** - Gerichte nach Kategorien durchstöbern
- ✅ **Suchfunktion** - Suche nach Gerichtsnamen
- ✅ **Favoriten-System** - Hinzufügen/Entfernen von Lieblingsgerichten mit LocalStorage-Persistenz
- ✅ **Detailansicht** - Vollständige Rezepte mit Zutaten, Anleitung und Kochvideo
- ✅ **Skeleton-Loader** - Anzeige von Ladezuständen während API-Calls
- ✅ **Wiederverwendbare Komponenten** - Modulare UI-Bausteine (Header, Footer, FavoriteButton)
<!--- - ✅ **Responsive Design** - Optimiert für verschiedene Bildschirmgrößen --->

---

## 📚 Was wir gelernt haben

- **useReducer für komplexes State-Management**: Strukturierte Verwaltung von Favoriten, Kategorien, Lade- und Fehlerzuständen
- **Context API**: Bereitstellung von globalem State für alle Komponenten ohne Prop-Drilling
- **API-Integration mit Axios**: Zentrale Instanz mit Basis-URL für REST-API-Anbindung
- **Asynchrone Datenverarbeitung**: Fetch-Funktionen für Kategorien, Gerichte und Detailinformationen
- **LocalStorage-Persistenz**: Speicherung und Wiederherstellung von Favoriten über Sitzungen hinweg
- **Reducer-Pattern**: Klare Trennung von State-Logik durch Actions und Reducer-Funktionen
- **TypeScript-Interfaces**: Typdefinitionen für API-Responses und Component-Props
- **Skeleton-Loader**: Bessere UX durch Platzhalter während Ladezuständen

---

## 📸 Screenshots

### Gerichte-Übersicht

<img width="1240" height="1189" alt="tasty_category" src="https://github.com/user-attachments/assets/2eabed25-ff3c-47f4-94f5-692d20bb641a" />


### Rezept-Detailansicht

<img width="1240" height="699" alt="tasty_responsive_design" src="https://github.com/user-attachments/assets/6d82d49a-3925-4a3e-846b-460e774eab19" />


### Favoriten-Seite

<img width="1240" height="824" alt="tasty_favorites" src="https://github.com/user-attachments/assets/2538c8f5-f7f7-42d8-9442-ce496c26a312" />


### Skeleton-Loader
![tasty_loader](https://github.com/user-attachments/assets/6b61d661-2e7a-43f8-8f8c-b1994017b656)


---

## 🌐 API-Integration

**Verwendete API:** TheMealDB (`https://www.themealdb.com/api.php`)

**Implementierte Endpunkte:**
- Kategorien abrufen
- Gerichte nach Kategorie filtern
- Suche nach Gerichtsnamen
- Detailinformationen per ID

**Besonderheiten:**
- Zentrale Axios-Instanz mit Basis-URL
- Asynchrone Funktionen für alle Requests
- Parameterübergabe direkt in Request-Funktionen
- Klare Trennung von Datenzugriff und UI
- Einfache Erweiterbarkeit für neue Endpunkte

---

## 🧩 Mögliche Erweiterungen

- [ ] Responsive Design (Tablet, Mobil)
- [ ] Erweiterte Suchfilter (z. B. Zutaten oder Länder)
- [ ] Portionsrechner
- [ ] Dark Mode
