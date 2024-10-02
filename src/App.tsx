import "./App.css"
import Timer from "./components/timer/timer"

function App() {
    return (
        <div className="flex-container">
            <Timer title="Title from Props" endTime={10} />
            {/* <Timer title="This is a very long title that may not fit inside the circle" endTime={10} /> */}
            <Timer title="With initial time" elapsedTime={15} endTime={60} />
            <Timer title="Max time" endTime={3599} />
        </div>
    )
}

export default App
