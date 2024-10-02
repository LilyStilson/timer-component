import type { StoryObj, Meta } from '@storybook/react'
import Timer from '../components/timer/timer'

const meta = {
    component: Timer,
    decorators: [
        (storyFn) => <div style={{ 
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
        }}>
            {storyFn()}
        </div>
    ],
    title: "Components/Timer",
    parameters: {
        layout: ['centered'],
    },
    tags: ["autodocs"],
    argTypes: {
        title: { 
            control: "text", 
            type: "string" 
        },
        endTime: { 
            control: "number", 
            type: "number" 
        },
        elapsedTime: { 
            control: "number", 
            type: "number"
        },
    }
} satisfies Meta<typeof Timer>

export default meta

type Story = StoryObj<typeof Timer>

export const Default: Story = {
    args: {
        title: "Title from Props",
        endTime: 10,
        elapsedTime: 0
    }
}

export const ElapsedTimeSet: Story = {
    args: {
        title: "With elapsed time",
        elapsedTime: 15,
        endTime: 30
    }
}

export const VeryLongTimer: Story = {
    args: {
        title: "Very long timer",
        endTime: 3599,
        elapsedTime: 0
    }
}