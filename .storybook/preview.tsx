import type { Preview } from "@storybook/react"
import {
    Title,
    Subtitle,
    Primary,
    Controls,
    Stories,
} from '@storybook/blocks'

import React from "react"
import DescriptionEx from "./DescriptionEx"

const preview: Preview = {
    parameters: {
        docs: {
            page: () => (
                    <>
                        <Title />
                        <Subtitle />
                        <DescriptionEx />
                        <Primary />
                        <Controls />
                        <Stories />
                    </>
                )
        }
    },
}

export default preview