/// https://www.rhino-inquisitor.com/how-to-filter-jsdoc-in-storybook-autodocs/

import { useOf, Markdown } from '@storybook/blocks'
import React from 'react'

const getDescriptionFromResolvedOf = (resolvedOf) => {
    switch (resolvedOf.type) {
        case 'story': {
            return resolvedOf.story.parameters.docs?.description?.story || null;
        }
        case 'meta': {
            const { parameters, component } = resolvedOf.preparedMeta;
            const metaDescription = parameters.docs?.description?.component;
            if (metaDescription) {
                return metaDescription;
            }
            return (
                parameters.docs?.extractComponentDescription?.(component, {
                    component,
                    parameters,
                }) || null
            )
        }
        case 'component': {
            const {
                component,
                projectAnnotations: { parameters },
            } = resolvedOf;
            return (
                parameters.docs?.extractComponentDescription?.(component, {
                    component,
                    parameters,
                }) || null
            )
        }
        default: {
            throw new Error(
                `Unrecognized module type resolved from 'useOf', got: ${(resolvedOf).type}`
            )
        }
    }
}

const DescriptionEx = (props) => {
    const { of } = props

    if ('of' in props && of === undefined) {
        throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
    }
    const resolvedOf = useOf(of || 'meta')

    // if @param exists, only show description up to @param
    let description = getDescriptionFromResolvedOf(resolvedOf)

    if (description) {
        description = description.split('@param')[0]
    }

    return (
        <Markdown>
            {description}
        </Markdown>
    )
}

export default DescriptionEx