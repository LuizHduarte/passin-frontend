import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from 'lucide-react'
import { Iconbutton } from './icon-buton'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { SubSection } from './table/sub-section'
import { CheckBox } from './table/check-box'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useEffect, useState } from 'react'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')


interface IAttendee{
    id: string,
    name: string,
    email: string,
    createdAt: string,
    checkedInAt: string | null
}

export function AttendeeList() {

    const [page, setPage] = useState(1)
    const [attendees, setAttendees] = useState<IAttendee[]>([])
    const totalPages = Math.ceil(attendees.length / 10)

    useEffect(() => {
        fetch('http://localhost:3333/events/id/')
        .then(response => response.json())
        .then(data =>{
            setAttendees(data.attendees)
        })
    },[page])

    function goToNextPage() {
        setPage(page + 1)
    }

    function goToPreviousPage() {
        setPage(page - 1)
    }

    function goToFirstPage() {
        setPage(1)
    }

    function goToLastPage() {
        setPage(totalPages)
    }

    return (
        <div className='flex flex-col gap-4'>
            <SubSection />
            <Table>
                <thead className='' >
                    <tr className='border-b border-white/10'>
                        <TableHeader style={{ width: 20 }}>
                            <CheckBox />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data de inscrição</TableHeader>
                        <TableHeader>Data do Check-In</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>
                </thead>

                <tbody>
                    {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                        return (
                            <TableRow key={attendee.id}>
                                <TableCell>
                                    <CheckBox />
                                </TableCell>
                                <TableCell>{attendee.id}</TableCell>
                                <TableCell>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                                <TableCell>
                                    {attendee.checkedInAt === null 
                                    ? <span className='text-zinc-500'>Não fez checkin</span>  
                                    : dayjs().to(attendee.checkedInAt)}
                                    </TableCell>
                                <TableCell >
                                    <Iconbutton transparent={true}>
                                        <MoreHorizontal />
                                    </Iconbutton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>

                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>Mostrando 10 de {attendees.length} Itens</TableCell>
                        <TableCell className='text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                                <span>Página {page} de {totalPages}</span>
                                <div className='flex gap-1.5'>
                                    <Iconbutton onClick={goToFirstPage} disabled={page === 1} >
                                        <ChevronsLeft className='size-4' />
                                    </Iconbutton>
                                    <Iconbutton onClick={goToPreviousPage} disabled={page === 1}>
                                        <ChevronLeft  className='size-4' />
                                    </Iconbutton>
                                    <Iconbutton onClick={goToNextPage} disabled={page === totalPages}>
                                        <ChevronRight className='size-4' />
                                    </Iconbutton>
                                    <Iconbutton onClick={goToLastPage} disabled = {page === totalPages}>
                                        <ChevronsRight className='size-4' />
                                    </Iconbutton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}