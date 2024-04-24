# HabitSync: enhance your Todoist experience

## Description

Habitsync is an app designed to enhance the capabilities of Todoist, a popular task management app. 
Built to fill a specific gap in Todoist's feature set, HabitSync introduces robust habit tracking functionalities tailored specifically for Todoist users.

## Why

As an avid Todoist user, I've always hoped for some way to track my habits using Todoist. Yes, there are many habit tracking apps out there, but the idea of having all my actionable items (tasks + habits) for the day in one place sounds too good. I was forgetting to fill out the habits in other apps anyways, so it always failed.

I figured that I would try to build the intergration myself. The Todoist API is robust and open so it sounded doable and in the end ended up working perfectly.

## Quick start

HabitSync is live! You can use it right now by visiting [HabitSync App](https://habitsync.app).

## Features

- **Todoist Integration**: Sign up with your Todoist account and select tasks to sync right away.
- **Comprehensive Dashboard**: Offers various views like calendar, bar graphs, line graphs, and streak views.
- **Habit metrics**: Besides the classic streak counts the app has its own metric called __Habit score__ that uses exponential smoothing to better visualize progress in time. 
- **Task Details**: View additional information about the task from Todoist, such as description and labels.
- **Pill Indicator**: Quick visual indicator showing your progress across all synced habits for the last X days.
- **Settings**: Sync new tasks, delete timestamps, manage habits, and more.
- **Mobile Responsiveness**: Fully responsive design that works flawlessly on mobile devices.

## Tech Stack

- **Next.js**: For the frontend.
- **tRPC**: Handles all backend code.
- **TypeScript**: For static type checking.
- **Prisma**: For database management.
- **NextAuth**: For authentication.
- **TailwindCSS**: For styling.
- **Monorepo Structure**: The project is structured as a monorepo, containing separate packages for API, database, config, and authentication.
- **OAuth with Todoist**: Users sign up using their Todoist accounts.


## Future Plans

- since the start of this project Todoist introduced something called [UI Extensions](https://developer.todoist.com/ui-extensions#introduction)
    - these would be my preffered way to handle habit tracking now, so maybe in the future I will just write an extension doing the same legwork as this app but it would be embedded inside Todoist itself 
- I've planned for a React Native app (the scaffolding is already there) but ended up not having enough time for this project


## Contact Information

For any questions or collaborations, feel free to contact me on [GitHub](https://github.com/Marty-W).
