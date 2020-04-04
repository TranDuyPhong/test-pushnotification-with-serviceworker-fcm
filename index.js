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

messaging.requestPermission()
.then(function() {
    console.log('Have permission');
    return messaging.getToken();
})
.then(function(token) {
    console.log(token);
})
.catch(function(err) {
    console.error('Error occured', err);
});

messaging.onMessage(function(payload) {
    console.log(payload);
});