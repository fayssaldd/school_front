import { ArrowDown, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
export const AdminParentColumns = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            const isAsc = column.getIsSorted() === "asc"
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(isAsc)}
                >
                    #ID
                    {isAsc ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />} 
                </Button>
            )
        },
    },
    {
        accessorKey: "firstname",
        header: ({ column }) => {
            const isAsc = column.getIsSorted() === "asc"
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(isAsc)}
                >
                    First Name
                    {isAsc ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />} 
                </Button>
            )
        },
    },
    {
        accessorKey: "lastname",
        header: "Last Name",
    },
    {
        accessorKey: "date_of_birth",
        header: "date of birth",
    },
    {
        accessorKey: "gender",
        header: "Gender",
        cell: ({ row }) => {
            const value = row.getValue("gender")
            const gender = value === 'm' ? 'Male' : 'Female'
            return <>{gender}</>
        },
    },
    {
        accessorKey: "blood_type",
        header: "blood",
    },

    {
        accessorKey: "address",
        header: "address",
    },

    {
        accessorKey: "phone",
        header: "phone",
        cell: ({ row }) => {
            const phone = row.getValue("phone")
            return <>+212-{phone}</>
        },
    },

    {
        accessorKey: "email",
        header: "email",
    },

    {
        accessorKey: "updated_at",
        header: "updated at",
        cell: ({ row }) => {
            const date = row.getValue("updated_at")
            const formatted = new Date(date).toString()
       
            return <div className="text-right font-medium">{formatted}</div>
        },
    },
]