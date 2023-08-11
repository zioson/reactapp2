import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

export default function App() {
  useEffect(() => {
    const apiKey = process.env.REACT_APP_VIDEOSDK_API_KEY;
    const meetingId = "milkyway";
    const name = "Demo User";

    const config = {
      name: name,
      meetingId: meetingId,
      apiKey: apiKey,

      region: "sg001", // region for new meeting

      containerId: null,
      redirectOnLeave: "https://www.videosdk.live/",

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,
      participantCanLeave: true, // if false, leave button won't be visible

      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteboardEnabled: true,
      raiseHandEnabled: true,

      recording: {
        autoStart: true, // auto start recording on participant joined
        enabled: true,
        webhookUrl: "https://www.videosdk.live/callback",
        awsDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path
      },

      livestream: {
        autoStart: true,
        enabled: true,
      },

      layout: {
        type: "SPOTLIGHT", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
        priority: "PIN", // "SPEAKER" | "PIN",
        // gridSize: 3,
      },

      branding: {
        enabled: true,
        logoURL:
          "https://static.zujonow.com/videosdk.live/videosdk_logo_circle_big.png",
        name: "Prebuilt",
        poweredBy: false,
      },

      permissions: {
        pin: true,
        askToJoin: false, // Ask joined participants for entry in meeting
        toggleParticipantMic: true, // Can toggle other participant's mic
        toggleParticipantWebcam: true, // Can toggle other participant's webcam
        drawOnWhiteboard: true, // Can draw on whiteboard
        toggleWhiteboard: true, // Can toggle whiteboard
        toggleRecording: true, // Can toggle meeting recording
        toggleLivestream: true, //can toggle live stream
        removeParticipant: true, // Can remove participant
        endMeeting: true, // Can end meeting
        changeLayout: true, //can change layout
      },

      joinScreen: {
        visible: true, // Show the join screen ?
        title: "Daily scrum", // Meeting title
        meetingUrl: window.location.href, // Meeting joining url
      },

      leftScreen: {
        // visible when redirect on leave not provieded
        actionButton: {
          // optional action button
          label: "Video SDK Live", // action button label
          href: "https://videosdk.live/", // action button href
        },
      },

      notificationSoundEnabled: true,

      debug: true, // pop up error during invalid config or netwrok error

      maxResolution: "sd", // "hd" or "sd"

      // For more features check: /prebuilt/guide/prebuilt-video-and-audio-calling/getting-started
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, []);

  return <div></div>;
}
