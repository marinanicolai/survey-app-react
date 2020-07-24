import React from "react";
import firebase from "firebase";
import { StyledSurvey } from "../styles/StyledSurvey";

// var uuid = require("uuid");

const firebaseConfig = {
  apiKey: "AIzaSyC70PIByKfKt-uwFOtVhIwENaYBzswhkQs",
  authDomain: "uservey-f06ad.firebaseapp.com",
  databaseURL: "https://uservey-f06ad.firebaseio.com",
  projectId: "uservey-f06ad",
  storageBucket: "uservey-f06ad.appspot.com",
  messagingSenderId: "409322652639",
  appId: "1:409322652639:web:9a35073617046e86263a6a",
  measurementId: "G-M6ZC9KJB3H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Survey = () => (
  <StyledSurvey>
    <h2 class="survey-content"> This is survey content</h2>
  </StyledSurvey>
);

export default Survey;
