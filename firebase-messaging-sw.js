importScripts("https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyCox_GgiVhkcW5jkmiUvWZZLWDF1hLUJjw",
    authDomain: "testpushnotification-e2c58.firebaseapp.com",
    databaseURL: "https://testpushnotification-e2c58.firebaseio.com",
    projectId: "testpushnotification-e2c58",
    storageBucket: "testpushnotification-e2c58.appspot.com",
    messagingSenderId: "351538076507",
    appId: "1:351538076507:web:236b396cf28c508918587e",
    measurementId: "G-E104Q56TXK"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const title = payload.notification.title;;
    const options = {
        title,
        body: payload.notification.body
    }
    return self.registration.showNotification(title, options);
});