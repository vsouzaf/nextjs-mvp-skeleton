'use client'

import {ColumnDef} from "@tanstack/table-core";
import {User} from "@/models/user";
import {DataTable} from "@/app/backoffice/users/_components/data-table";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";

export default function Home() {
    const columns: ColumnDef<User>[] = [
        {
            accessorKey: "id",
            header: "ID"
        },
        {
            accessorKey: "name",
            header: "Name"
        },
        {
            accessorKey: "email",
            header: "Email"
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const user = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(String(user.id))}
                            >
                                Copy user ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View user</DropdownMenuItem>
                            <DropdownMenuItem>View user details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        }
    ];

    const data: User[] = [
        {
            id: 1,
            email: "john@mvp.com",
            name: "John"
        }
    ];

    return (
        <main>
            <div className="pt-16">
                <DataTable columns={columns} data={data} />
            </div>
        </main>
    );
}
