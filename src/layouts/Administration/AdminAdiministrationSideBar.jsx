import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from 'react-router-dom'
import { ADMI_MANEGE_PARENTS_ROUTE } from '../../router'

export default function AdminAdiministrationSideBar({ className }) {
  return (
    <div className={cn("pb-12", className)}>
      <div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Administration
          </h2>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link to={ADMI_MANEGE_PARENTS_ROUTE}>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
               Create Parent
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
