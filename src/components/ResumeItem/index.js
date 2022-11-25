import React from 'react'
import * as C from './style'

export default function ResumeItem({ title, Icon, value }) {

    return (
        <>
            <C.Container>
                <C.Header>
                    <C.HeaderTitle>{title}</C.HeaderTitle>
                    <Icon />
                    <C.Total>{value}</C.Total>
                </C.Header>
            </C.Container>
        </>
    )

}