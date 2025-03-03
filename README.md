# data types
## primitives
- string: text, title, firstName, email, ...
- object: address, contact, location, shape
## entitis
  -objects: user, product, category and ...

# Components Tree
## Atoms
Atoms are the smallest possible components
example: Button, Icon, Alert, Card and ...
- stateless
- dead simple
- dummy and unawar of any business logic (they use primitive props NOT entity props)
- stand alone (they don't import other components. Exceptionally, just few other atoms)
- naming: Startcase (single syllabic)
- location: @repo/ui/atoms

  ### Templates (=Layouts)
  Template are special kind of atoms who provide invisible UI
  example: DashboardTemp, FiledsetTemp, NavbarTemp and ...
  - Exceptionally, they can use very simple internal state
  - they expose named props as slots<ReactNode>
  - naming: Atom naming + ending with "Temp"
- location: @repo/ui/atoms

## Mols (Molecules)
Molecules are polymers made out of other atoms & molecules
  example: PersonaCard, GridView, CalendarView and ...
- stateless
- they must have a direct overlapping skeleton
- they're **presentation** layer of UI
- they expose all logics and states throgh their props (parents can fully control them)
- they can import other atoms and molecules
- they expose named props as slots<ReactNode>
- naming: PascalCase (multi [2~5] syllabic)
- location: @repo/ui/mols

## Orgs (Organisms)
Organisms are living Components who can make side effects
- they have state
- they talk with API
- they must have a direct overlapping skeleton
<!-- - they emit events -->
- they can use Templates
- business aware
- lazy import with skelton loading is required to use them
- they can live inside **PublicContextProvider**
- they expose named props as slots<ReactNode>
- simple JSX (they must use atoms & molecules to present the UI as much as possible)
- naming: Startcase or PascalCase ending with "Org"
- location: @repo/... inside package folder

## Page (RSC)
They handle SEO, SSR, prefetch and ...
- naming: according to Next.js app router naming rules (+ sometimes a Client.tsx component next to Page.tsx)
- location: <any nextjs repo>/src/app

# Singletons
They have very special responsibility and behavior.
- location: @repo/core

0. ApiClientProvider:
  Combination of **All** Providers. Required to render **ANY** Organism. usable for app and test suite
  - EventHubProvider
  - QueryClientProvider
  - RPCProvider

1. AppContext:
  Combination of **All** Providers. Required to render **ANY** Organism. usable for app and test suite

2. PublicContextProvider:
  Preloads AppContext with initial data.
  Combination of **All** Providers. Required to render **ANY** Organism.

3. ProtectedContextProvider:
  Slice of AppContext.
  Re-bind some Providers with **protected** values for dashboard users.
  Preloads AppContext with protected data after we autorize the user
