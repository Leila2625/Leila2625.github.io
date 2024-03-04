const resetTimerAndLaps = useCallback(() => {
    setTimer(0);
    setLaps([]);
    setRunning(false);
  }, []);

  // record a lap
  const recordLap = useCallback(() => {
    setLaps([...laps, timer]);
  }, [laps, timer]);

  // update timer every 10 milliseconds if running
  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [running]);

  // timer display
  const formatTime = (time) => {
    const mins = Math.floor(time / 60000).toString().padStart(2, "0");
    const secs = Math.floor((time % 60000) / 1000).toString().padStart(2, "0");
    const mills = Math.floor((time % 10000) / 10).toString().padStart(2, "0");
    return `${mins}:${secs}:${mills}`;
  };

    return (
    <div>
      <p>{exercise.name}</p>
      <div style={{ fontSize: "3em", fontFamily: "monospace" }}>
        {formatTime(timer)}
      </div>
      <button onClick={toggleRunning}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={resetTimerAndLaps}>
        Reset
      </button>
      <button onClick={recordLap}>
        Record Lap
      </button>
      <button style={{ fontSize: "1em" }} onClick={setMenuScreen}> Back to Menu</button>
      <div>
        <h3> Laps: </h3>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}> {formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    </div>
  );

export default RunningExercise;