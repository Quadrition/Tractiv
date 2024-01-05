# Tractiv

Tractiv is a React Native application built using Expo, designed for scheduling and tracking activities.

## Table of Contents

- [Description](#description)
- [Setup](#setup)
- [Assets](#assets)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Application Logic](#application-logic)

## Description

Tractiv is a React Native app developed with Expo, allowing users to easily schedule and manage their activities for improved organization and productivity. Since this is just a small application and doesn't require any native complex features, Expo is chosen to eliminate unnecessary complex project setup and simplify the development process.

## Setup

To run the application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Quadrition/Tractiv.git

2. **Install dependencies**

   ```bash
   cd tractiv
   yarn

3. **Start Expo**

   ```bash
   yarn start

4. **Run on device/emulator**

   Follow the instructions from Expo to run the app on your preferred device/emulator.

## Branch Usage

- **Development (dev) Branch**: This branch is used for ongoing development work. New features, improvements, and fixes are implemented and tested here before being merged into the main branch.

- **Main Branch**: The main branch contains the stable and release-ready version of the application. It is used for release purposes, ensuring that the deployed code is thoroughly tested and stable.

## Assets

All images and fonts used in the application are stored in designated folders:

- **Images**: Stored in the `assets` folder.
- **Fonts**: Europa Bold, Europa Regular, Europa Light, and Rift Soft Regular were used as fonts. These fonts were downloaded from an external source and may differ from the prototype. They are located within the `assets` folder.
- **SVG Icons**: Specifically stored in `src/assets/icons`.

The Tractiv logo serves as both the application's icon and splash image.

Additionally, the application utilizes `react-native-svg` for the display of SVGs within the user interface.

## Folder Structure

The project structure is organized as follows:

- `components`: Contains common components used throughout the project.
- `features`: Each functionality is divided into separate feature folders, consisting of:
  - `components`: UI components specific to the feature.
  - `containers`: Business logic.
  - `state`: Redux state management.
  - `services`: Repository layer.
  - `types`: Domain types/interfaces.
- `screens`: Contains all screens used in the application.
- `store`: Redux configuration.
- `utils`: Utility functions/helpers.

## Features

The app includes various features organized within the `features` directory. Each feature has its specific components, logic, state management, services, and types, providing a modular and scalable architecture.

## Persistence

Tractiv uses `@react-native-async-storage/async-storage` for persisting activities locally. This enables the app to maintain activity data across sessions.

## Application Logic

When scheduling a new activity, the app will:

- List all available timeslots for the next seven days.
- Exclude timeslots overlapping with previous scheduled activities and night shifts (from 10 PM to 8 AM).
- List timeslots at regular intervals (every X minutes), where X represents the duration of the new activity intended to be scheduled.

Feel free to explore the codebase further!
