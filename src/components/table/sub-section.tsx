import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";


export function SubSection() {

    const [searchInput, setSearchInput] = useState('')

    function onSearchInput(event:ChangeEvent<HTMLInputElement>){
        setSearchInput( event.target.value)
    }

    return (
        <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10  rounded-lg text-small flex items-center gap-3">
                <Search className="size-4 text-emerald-300" />
                <input onChange={onSearchInput}  className="bg-transparent flex1 outline-none border-0 p-0 text-sm focus:ring-0" placeholder="Buscar participante..." />
            </div>
        </div>
    )
}