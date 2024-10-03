import "./App.css"
import Timer from "./components/timer/timer"

function App() {
    return (
        <div className="flex-container">
            <h1>Timer component</h1>

            <Timer title="Timer title" endTime={30} />

                <a href="/storybook" target="_blank" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", textDecoration: "none" }}>
                    <span>Check out on</span> 
                    <img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg" style={{ height: "32px" }} />
                </a>
        </div>
    )
}

export default App
