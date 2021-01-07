import * as React from "react";
import "./styles.css";

export default function App() {
  const trainArrivals = [
    {
      trainId: "A",
      arrivalTime: new Date("2021-01-07T08:20"),
      departureTime: new Date("2021-01-07T08:29")
    },
    {
      trainId: "B",
      arrivalTime: new Date("2021-01-07T08:30"),
      departureTime: new Date("2021-01-07T08:34")
    },
    {
      trainId: "C",
      arrivalTime: new Date("2021-01-07T08:31"),
      departureTime: new Date("2021-01-07T08:33")
    },
    {
      trainId: "D",
      arrivalTime: new Date("2021-01-07T08:32"),
      departureTime: new Date("2021-01-07T08:35")
    },
    {
      trainId: "E",
      arrivalTime: new Date("2021-01-07T08:35"),
      departureTime: new Date("2021-01-07T08:36")
    },
    {
      trainId: "F",
      arrivalTime: new Date("2021-01-07T08:37"),
      departureTime: new Date("2021-01-07T08:40")
    }
  ];

  interface TrainItem {
    trainId: string;
    arrivalTime: Date;
    departureTime: Date;
  }

  function determineTracks(trains: TrainItem[]) {
    // EDIT THIS
    return 0;
  }

  // DETERMINE NUMBER OF TRACKS
  const tracksNeeded = determineTracks(trainArrivals);

  // DISPLAY CODE
  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1>Schedule</h1>
      {trainArrivals.map((train) => {
        return (
          <>
            <h3>
              {`${train.trainId}: ${
                train.arrivalTime.toTimeString().split(" ")[0]
              } - ${train.departureTime.toTimeString().split(" ")[0]}`}
            </h3>
          </>
        );
      })}
      <h2>{`Tracks Needed - ${tracksNeeded}`}</h2>
    </div>
  );
}
