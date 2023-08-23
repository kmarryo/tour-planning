# Tour Planning App

## Technologies

- Vue 3
- TypeScript
- Nuxt
- TailwindCSS
- Pinia
- ...

## Features

### General

- Responsive Design
- Lists, both Driver and Tour Management, can be filtered by typing into the Search.
- Search Bar can be focused by either clicking into it or hitting Cmd + K on Mac OS or Strg + K on Windows.
- Switching between Driver and Tour Management by clicking the Tabs
- Toast Notification in the bottom right corner indicating the success of the recent action

### Driver Management

- Driver Management shows a (mock) set of all drivers that come from the server and are fetched from frontend
- New drivers can be added by clicking "Add new driver" button and filling out the fields
- Existing driver's informations can be edited and also deleted
- Location field is not allowing numbers

### Tour Management

- Tour Management shows all (mock) tours from the server
- A new tour can be created by clicking "Create new tour" button
- Existing tours can be edited or deleted
- Shipment date can be selected by a Datepicker
- When opening the dropdown for assigning a driver to a tour, only drivers will be shown where the location of the driver will be the same as the location from field of the tour

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3001`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```
