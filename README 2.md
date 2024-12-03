# QuickAid-Local-Emergency-Helper-App
QuickAid is a mobile application designed to provide users with real-time information about nearby emergency services, such as hospitals, police stations, fire stations, and pharmacies. In case of an emergency, users can quickly send their location to emergency responders through an SOS button, ensuring help reaches them faster. The app also allows users to contribute crowdsourced data about emergency locations, making it a dynamic, community-driven tool.

# Features
* Nearby Emergency Services: Displays real-time locations of nearby hospitals, police stations, and fire stations using Google Maps.
* SOS Button: Sends the user's live location to emergency contacts with a single tap.
* Crowdsourced Data: Users can add or update emergency service information, helping the community.
* User Authentication: Secure sign-in/sign-up using Firebase Authentication.
* Offline Access: Emergency contact numbers and guidelines are available offline.

# Tech Stack
Frontend: React Native
Backend: Firebase (Realtime Database, Firebase Authentication)
Map Integration: Google Maps API
Notifications: Firebase Cloud Messaging (FCM)
Other Tools: TypeScript

# Installation Instructions
Prerequisites
Node.js installed on your system
React Native CLI installed:

npm install -g expo-cli
Setup
Clone this repository:

git clone https://github.com/AjayAanand/QuickAid-Local-Emergency-Helper-App/edit/main
cd QuickAid
Install dependencies:

npm install

Start the development server:

expo start
Open the app in Mobile or use an emulator.

Firebase Setup
Create a Firebase project in the Firebase Console.
Enable Firebase Authentication (Email/Password).
Set up Firebase Firestore Database for storing emergency service data.
Get your Firebase API keys and add them to the firebaseConfig.js file in the project.


# Contributing
We welcome contributions to improve QuickAid! If you want to contribute:

Fork the repository.
Create a new branch.
Make your changes and submit a pull request.


# License
This project is licensed under the MIT License - see the LICENSE file for details.




