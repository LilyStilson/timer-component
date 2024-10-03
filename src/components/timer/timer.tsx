import { useEffect, useState } from "react"
import "./timer.css"
import CircularProgressBar from "../circular-progress-bar/circular-progress-bar"

/**
 * Timer props
 */
export interface ITimerProps {
    title: string
    endTime: number
    elapsedTime?: number
}

/**
 * Simple Timer component
 */
const Timer: React.FC<ITimerProps> = ({ title, endTime, elapsedTime }) => {
    const [currentTime, setCurrentTime] = useState(elapsedTime ?? 0),
        [isEnabled, setIsEnabled] = useState(false)

    if (currentTime > endTime) {
        throw new Error("elapsedTime can't be greater than endTime")
    }

    if (endTime > 3599) {
        throw new Error("endTime can't be more than 59:59 (3599 seconds)")
    }

    if (endTime < 0 || currentTime < 0) {
        throw new Error("Time value can't be negative")
    }

    function formatTime(time: number) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isEnabled) {
            interval = setInterval(() => {
                setCurrentTime(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isEnabled]);

    useEffect(() => {
        if (currentTime >= endTime) {
            setIsEnabled(false);
        }
    }, [currentTime, endTime]);

    return (
        <div className="timer">
            <div className="timer-progress">
                <CircularProgressBar value={currentTime} maximum={endTime}>
                    <h4>{title}</h4>
                    <h1>{formatTime(currentTime)}</h1>
                    <h4>{formatTime(endTime - currentTime)} left</h4>
                </CircularProgressBar>
            </div>
            <div className="timer-buttons">
                <button onClick={() => {
                    if (currentTime === endTime) setCurrentTime(0);
                    setIsEnabled(true)
                }} disabled={isEnabled}>Start</button>
                <button onClick={() => setIsEnabled(false)} disabled={!isEnabled}>Pause</button>
                <button onClick={() => {
                    setCurrentTime(0);
                    setIsEnabled(false);
                }}>Reset</button>
            </div>
        </div>
    )
}

export default Timer