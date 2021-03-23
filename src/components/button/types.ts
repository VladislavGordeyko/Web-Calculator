/* eslint-disable */
export interface IButton {
    title: string,
    onClick: () => void,
    type?: 'default' | 'calculator',
    color?: 'numbers' | 'functions' | 'operations',
    disabled?: boolean
}
