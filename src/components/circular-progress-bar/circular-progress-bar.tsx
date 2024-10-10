import React, { useRef, useEffect, useState } from 'react'
import './circular-progress-bar.css'

interface ICircularProgressBarProps {
    /** Progress value */
    value: number
    /** Minimum value, default is 0 */
    minimum?: number
    /** Maximum value, default is 100 */
    maximum?: number
    /** Children nodes */
    children?: React.ReactNode
}

/**
 * Circular progress bar
 * 
 * @remarks It was easier to install an already existing library, but
 * that library would ruin my CSS and made it impossible to work with children
 * components, so I made my own.
 * 
 * @param {ICircularProgressBarProps} props Component properties 
 * @returns {React.FC<ICircularProgressBarProps>} Circular progress bar 
 */
const CircularProgressBar: React.FC<ICircularProgressBarProps> = ({
    value,
    minimum = 0,
    maximum = 100,
    children
}) => {
    const strokeWidth = 8
    const [size, setSize] = useState(strokeWidth)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const current = containerRef.current
        const resizeObserver = new ResizeObserver(() => {
            if (current) {
                const { width, height } = current.getBoundingClientRect()
                setSize(Math.min(width, height)) // Use the smaller dimension for a perfect circle
            }
        })

        if (current) {
            resizeObserver.observe(current)
        }

        return () => {
            if (current) {
                resizeObserver.unobserve(current)
            }
        }
    }, [])

    const normalizedRadius = (size / 2) - strokeWidth / 2
    const circumference = normalizedRadius * 2 * Math.PI

    // Clamp the progress
    const clampedProgress = Math.max(minimum, Math.min(value, maximum))

    // Calculate the relative progress percentage
    const progressPercentage = ((clampedProgress - minimum) / (maximum - minimum)) * 100
    const strokeDashoffset = circumference - (progressPercentage / 100) * circumference

    // Apply animation when progress reaches maximum
    const isMaxProgress = progressPercentage === 100
    const circleClass = isMaxProgress ? 'progress-circle-fg progress-circle-anim' : 'progress-circle-fg'

    return (
        <div className="circular-progress-bar" ref={containerRef}>
            <svg viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
                <circle
                    className="progress-circle-bg"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className={circleClass}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    r={normalizedRadius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default CircularProgressBar
