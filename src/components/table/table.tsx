import { ComponentProps } from "react";

interface ITableProps extends ComponentProps<'table'>{}




export function Table(props: ITableProps) {
    return (
        <div className='border-white/10 border rounded-lg'>
            <table className='w-full border' {...props} />
        </div>
    )
}