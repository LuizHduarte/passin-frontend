import { ComponentProps } from "react";

interface ICheckBox extends ComponentProps<'input'>{}

export function CheckBox(props: ICheckBox) {
    return (
        <input {...props} type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
    )
}